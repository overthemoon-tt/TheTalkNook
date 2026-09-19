import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useRef, useState } from "react";
import { Send, Clock, ArrowLeft, AlertCircle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

export const Route = createFileRoute("/chat/$chatId")({
  head: () => ({ meta: [{ title: "Your chat — The Talk Nook" }, { name: "robots", content: "noindex" }] }),
  component: ChatPage,
});

type Msg = {
  id: string;
  chat_id: string;
  sender_role: "user" | "listener" | "system";
  sender_display_name: string;
  content: string;
  created_at: string;
};

type Session = {
  id: string;
  status: string;
  listener_joined_at: string | null;
  session_started_at: string | null;
  session_ended_at: string | null;
  booking_id: string;
};

const SESSION_MS = 25 * 60 * 1000;
const TYPING_IDLE_MS = 1500;

function ChatPage() {
  const { chatId } = Route.useParams();
  const search =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : new URLSearchParams();
  const asListener = search.get("as") === "listener";
  const [session, setSession] = useState<Session | null>(null);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [text, setText] = useState("");
  const [booking, setBooking] = useState<any | null>(null);
  const [remaining, setRemaining] = useState<number>(SESSION_MS);
  const [ended, setEnded] = useState(false);
  const [showEndDialog, setShowEndDialog] = useState(false);
  const [showEndedAlert, setShowEndedAlert] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [feedbackComment, setFeedbackComment] = useState("");
  const [feedbackSubmitting, setFeedbackSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const endedRef = useRef(false);

  // ── CLOCK-INDEPENDENT TIMER STATE ────────────────────────────────────
  const [timerActive, setTimerActive] = useState(false);
  const localStartTimeRef = useRef<number | null>(null);

  // ── TYPING INDICATOR STATE ───────────────────────────────────────────
  const [otherTyping, setOtherTyping] = useState(false);
  const channelRef = useRef<any>(null);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const myRole = asListener ? "listener" : "user";

  const broadcastTyping = (isTyping: boolean) => {
    channelRef.current?.send({
      type: "broadcast",
      event: "typing",
      payload: { role: myRole, isTyping },
    });
  };

  const handleTypingInput = () => {
    if (ended) return;
    broadcastTyping(true);
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      broadcastTyping(false);
    }, TYPING_IDLE_MS);
  };

  const stopTyping = () => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = null;
    }
    broadcastTyping(false);
  };

  // ── IMPROVED AUTO-SCROLL LOGIC ───────────────────────────────────────────
  const scrollToBottom = (behavior: "smooth" | "auto" = "smooth") => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior });
    }
  };

  // Scroll on initial load and when messages change
  useEffect(() => {
    if (messages.length > 0) {
      // Small timeout to ensure DOM has updated
      const timeoutId = setTimeout(() => scrollToBottom("smooth"), 100);
      return () => clearTimeout(timeoutId);
    }
  }, [messages]);

  // Scroll when the other person starts typing too
  useEffect(() => {
    if (otherTyping) {
      const timeoutId = setTimeout(() => scrollToBottom("smooth"), 50);
      return () => clearTimeout(timeoutId);
    }
  }, [otherTyping]);

  // ── Initial load ──────────────────────────────────────────────────────────
  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data: s } = await supabase
        .from("chat_sessions")
        .select("*")
        .eq("id", chatId)
        .maybeSingle();

      if (!mounted) return;
      setSession(s as any);
      setLoading(false);

      if (s) {
        const { data: b } = await supabase
          .from("bookings")
          .select("*")
          .eq("id", s.booking_id)
          .maybeSingle();
        if (mounted) setBooking(b);

        if (s.session_ended_at) {
          endedRef.current = true;
          setEnded(true);
          setRemaining(0);
        } else if (s.session_started_at) {
          setTimerActive(true);
        }
      }

      const { data: msgs } = await supabase
        .from("chat_messages")
        .select("*")
        .eq("chat_id", chatId)
        .order("created_at");
      if (mounted) {
        setMessages((msgs as any) || []);
        // Auto scroll to bottom after initial load
        setTimeout(() => scrollToBottom("auto"), 200);
      }
    })();
    return () => { mounted = false; };
  }, [chatId]);

  // ── Realtime subscription ─────────────────────────────────────────────────
  useEffect(() => {
    const ch = supabase
      .channel(`chat_${chatId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "chat_messages",
          filter: `chat_id=eq.${chatId}`,
        },
        (p) => {
          const newMsg = p.new as Msg;
          setMessages((prev) => {
            if (prev.some((m) => m.id === newMsg.id)) return prev;
            return [...prev, newMsg];
          });
          // A new message from the other side means they've stopped typing
          if (newMsg.sender_role !== myRole) {
            setOtherTyping(false);
          }
        }
      )
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "chat_sessions",
          filter: `id=eq.${chatId}`,
        },
        (p) => {
          const newSession = p.new as Session;
          setSession(newSession);

          if (newSession.session_started_at && !timerActive && !endedRef.current) {
            setTimerActive(true);
          }

          if (newSession.session_ended_at && !endedRef.current) {
            endedRef.current = true;
            setEnded(true);
            setRemaining(0);
            setTimerActive(false);
            setOtherTyping(false);
            if (asListener) setShowEndedAlert(true);
            if (!asListener) setShowFeedback(true);
          }
        }
      )
      .on("broadcast", { event: "typing" }, (payload) => {
        const { role, isTyping } = (payload.payload || {}) as {
          role: "user" | "listener";
          isTyping: boolean;
        };
        if (role !== myRole) {
          setOtherTyping(isTyping);
        }
      })
      .subscribe();

    channelRef.current = ch;

    return () => {
      supabase.removeChannel(ch);
      channelRef.current = null;
    };
  }, [chatId, asListener, timerActive, myRole]);

  // Clear any pending typing timeout on unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, []);

  // ── Mark listener as joined ───────────────────────────────────────────────
  const listenerJoinedHandled = useRef(false);
  useEffect(() => {
    if (!asListener || !session || ended || listenerJoinedHandled.current) return;
    if (!session.listener_joined_at) {
      listenerJoinedHandled.current = true;
      supabase
        .from("chat_sessions")
        .update({ listener_joined_at: new Date().toISOString(), status: "active" })
        .eq("id", chatId)
        .then(() => {
          supabase.from("chat_messages").insert({
            chat_id: chatId,
            sender_role: "system",
            sender_display_name: "System",
            content: "Listener has joined.",
          });
        });
    }
  }, [asListener, session?.id, chatId, ended]);

  // ── CLOCK-INDEPENDENT TIMER EFFECT ────────────────────────────────────────
  useEffect(() => {
    if (!timerActive || endedRef.current) return;

    if (localStartTimeRef.current === null) {
      if (session?.session_started_at) {
        const dbStart = new Date(session.session_started_at).getTime();
        const now = Date.now();
        const elapsed = now - dbStart;
        if (elapsed < 0 || elapsed > SESSION_MS) {
          localStartTimeRef.current = now;
        } else {
          localStartTimeRef.current = dbStart;
        }
      } else {
        localStartTimeRef.current = Date.now();
      }
    }

    const iv = setInterval(() => {
      if (endedRef.current) {
        clearInterval(iv);
        return;
      }

      const elapsed = Date.now() - (localStartTimeRef.current || Date.now());
      const left = SESSION_MS - elapsed;

      if (left <= 0) {
        clearInterval(iv);
        endedRef.current = true;
        setRemaining(0);
        setEnded(true);
        setTimerActive(false);
        setOtherTyping(false);

        if (!asListener) setShowFeedback(true);
        if (asListener) setShowEndedAlert(true);

        supabase
          .from("chat_sessions")
          .update({ session_ended_at: new Date().toISOString(), status: "ended" })
          .eq("id", chatId)
          .is("session_ended_at", null)
          .then(() => {
            supabase.from("chat_messages").insert({
              chat_id: chatId,
              sender_role: "system",
              sender_display_name: "System",
              content: "Session has ended. Thank you for choosing The Talk Nook.",
            });
          });
      } else {
        setRemaining(left);
      }
    }, 1000);

    return () => clearInterval(iv);
  }, [timerActive, session?.session_started_at, chatId, asListener]);

  // ── Send message ──────────────────────────────────────────────────────────
  const send = async () => {
    if (!text.trim() || ended) return;
    const msg = text.trim();
    setText("");
    stopTyping();

    const role = asListener ? "listener" : "user";
    const name = asListener
      ? "Listener"
      : booking?.is_anonymous
      ? "Friend"
      : booking?.user_name || "You";

    // Insert message first always
    await supabase.from("chat_messages").insert({
      chat_id: chatId,
      sender_role: role,
      sender_display_name: name,
      content: msg,
    });

    // Start session timer after message is inserted
    if (asListener && session && !session.session_started_at) {
      await supabase.from("chat_sessions")
        .update({ session_started_at: new Date().toISOString(), status: "active" })
        .eq("id", chatId);
    }
  };

  // ── End session (manual) ──────────────────────────────────────────────────
  const handleEndSession = async () => {
    setShowEndDialog(false);
    endedRef.current = true;
    setEnded(true);
    setTimerActive(false);
    stopTyping();
    setOtherTyping(false);
    await supabase
      .from("chat_sessions")
      .update({ session_ended_at: new Date().toISOString(), status: "ended" })
      .eq("id", chatId)
      .is("session_ended_at", null);
    await supabase.from("chat_messages").insert({
      chat_id: chatId,
      sender_role: "system",
      sender_display_name: "System",
      content: "Session has ended. Thank you for choosing The Talk Nook.",
    });
    if (!asListener) setShowFeedback(true);
  };

  // ── Feedback submit ───────────────────────────────────────────────────────
  const handleFeedbackSubmit = async () => {
    if (feedbackRating === 0) return;
    setFeedbackSubmitting(true);
    const { error } = await supabase.from("session_feedback").insert({
      chat_id: chatId,
      rating: feedbackRating,
      comment: feedbackComment.trim() || null,
    });
    console.log('Feedback result:', { error });
    setFeedbackSubmitting(false);
    setShowFeedback(false);
  };

  const sessionLabel =
    booking?.session_type === "text_health"
      ? "Health Navigation — Text"
      : "Peer Support — Text";

      if (loading) {
        return (
          <div className="flex items-center justify-center h-screen">
            <div className="text-muted-foreground text-sm">Loading your session…</div>
          </div>
        );
      }

  if (!session) {
    return (
      <SiteShell>
        <div className="mx-auto max-w-md px-5 py-20 text-center">
          <h2 className="font-serif text-2xl">Chat not found</h2>
          <p className="mt-2 text-muted-foreground">
            This chat link is invalid or has expired.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm"
          >
            Back home
          </Link>
        </div>
      </SiteShell>
    );
  }

  const otherName = asListener
    ? booking?.is_anonymous
      ? "Friend"
      : booking?.user_name || "User"
    : "Listener";

  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden">
      {/* Top bar */}
      <header className="border-b border-border bg-card px-4 py-3 flex items-center gap-2 flex-wrap z-10">
        <Link to="/" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <span className="font-serif text-lg flex-1 truncate">The Talk Nook</span>
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-mono ${
            timerActive && !ended
              ? "bg-primary/15 text-primary"
              : "bg-muted text-muted-foreground"
          }`}
        >
          <Clock className="h-4 w-4" /> {formatMs(remaining)}
        </div>
        {!ended && session.status !== "ended" && (
          <button
            onClick={() => setShowEndDialog(true)}
            className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full border border-destructive/30 text-destructive hover:bg-destructive/10 transition font-medium"
          >
            End Chat
          </button>
        )}
        {ended && (
          <span className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-destructive/10 text-destructive font-medium animate-pulse">
            <AlertCircle className="h-3 w-3" /> Session Ended
          </span>
        )}
      </header>

      {/* Messages Area - IMPROVED SCROLLING CONTAINER */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-6 space-y-4 max-w-2xl w-full mx-auto scroll-smooth"
        style={{ scrollbarWidth: 'thin' }}
      >
        {!session.listener_joined_at && !ended && (
          <div className="text-center text-sm text-muted-foreground py-12 animate-pulse">
            Waiting for your listener to join…
          </div>
        )}

        {messages.map((m, idx) => {
          if (m.sender_role === "system")
            return (
              <div key={m.id || idx} className="text-center text-[11px] text-muted-foreground py-4 uppercase tracking-widest opacity-60">
                — {m.content} —
              </div>
            );

          const mine = asListener ? m.sender_role === "listener" : m.sender_role === "user";

          return (
            <div key={m.id || idx} className={`flex ${mine ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
                  mine
                    ? "bg-primary text-primary-foreground rounded-tr-none"
                    : "bg-secondary text-secondary-foreground rounded-tl-none"
                }`}
              >
                <div className="text-[10px] font-bold uppercase tracking-tighter opacity-50 mb-1">
                  {m.sender_display_name}
                </div>
                <div className="text-[15px] whitespace-pre-wrap leading-relaxed">{m.content}</div>
              </div>
            </div>
          );
        })}

        {/* Typing indicator bubble */}
        {otherTyping && !ended && (
          <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="max-w-[85%] rounded-2xl rounded-tl-none px-4 py-3 shadow-sm bg-secondary text-secondary-foreground">
              <div className="text-[10px] font-bold uppercase tracking-tighter opacity-50 mb-1">
                {otherName}
              </div>
              <div className="flex items-center gap-1 h-4 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-bounce" />
              </div>
            </div>
          </div>
        )}

        {/* Invisible element to anchor the scroll */}
        <div ref={messagesEndRef} className="h-4 w-full" />

        {ended && (
          <div className="text-center py-8">
            <div className="inline-block px-6 py-3 rounded-xl bg-muted text-muted-foreground text-sm border border-border font-medium">
              This session has ended.
            </div>
          </div>
        )}
      </div>

      {/* Input Area - IMPROVED UI */}
      <div className="border-t border-border bg-card pb-safe shadow-lg z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-end gap-3">
          <textarea
            rows={1}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              // Auto-expand textarea
              e.target.style.height = 'inherit';
              e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
              handleTypingInput();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
                e.currentTarget.style.height = 'inherit';
              }
            }}
            onBlur={stopTyping}
            placeholder={
              ended
                ? "Session has ended"
                : asListener && !session.listener_joined_at
                ? "Type to greet…"
                : "Say what's on your mind…"
            }
            disabled={ended}
            className="flex-1 rounded-2xl border border-input bg-background px-4 py-3 text-sm resize-none disabled:opacity-60 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
            style={{ minHeight: '44px' }}
          />
          <button
            onClick={() => {
              send();
              const textarea = document.querySelector('textarea');
              if (textarea) textarea.style.height = 'inherit';
            }}
            disabled={ended || !text.trim()}
            className="h-11 w-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-40 hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Dialogs remain same but with consistent styling */}
      {showFeedback && !asListener && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm transition-all">
          <div className="w-full max-w-md bg-card rounded-t-3xl p-8 pb-12 shadow-2xl animate-in slide-in-from-bottom duration-500">
            <h2 className="font-serif text-3xl text-center mb-2">How was it?</h2>
            <p className="text-center text-sm text-muted-foreground mb-8">
              Your feedback helps us make The Talk Nook better.
            </p>

            <div className="flex justify-center gap-4 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setFeedbackRating(star)}
                  className={`text-4xl transition-all hover:scale-125 ${
                    feedbackRating >= star ? "text-yellow-400 drop-shadow-md" : "text-muted-foreground/20"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>

            <textarea
              value={feedbackComment}
              onChange={(e) => setFeedbackComment(e.target.value.slice(0, 200))}
              placeholder="Anything else you'd like to share?"
              rows={3}
              className="w-full rounded-2xl border border-input bg-background px-5 py-4 text-sm resize-none mb-2 outline-none focus:ring-2 focus:ring-primary/20"
            />
            <div className="text-right text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 mb-6">
              {feedbackComment.length} / 200
            </div>

            <button
              onClick={handleFeedbackSubmit}
              disabled={feedbackRating === 0 || feedbackSubmitting}
              className="w-full rounded-full bg-primary text-primary-foreground py-4 text-sm font-bold shadow-lg hover:shadow-xl disabled:opacity-40 transition-all"
            >
              {feedbackSubmitting ? "Sending..." : "Submit Feedback"}
            </button>
            <button
              onClick={() => setShowFeedback(false)}
              className="w-full text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mt-5 hover:text-foreground transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      )}

      {/* AlertDialogs... */}
      <AlertDialog open={showEndDialog} onOpenChange={setShowEndDialog}>
        <AlertDialogContent className="rounded-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-serif text-2xl">End this session?</AlertDialogTitle>
            <AlertDialogDescription className="text-base">
              Are you sure? You won't be able to send more messages in this quiet corner.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4">
            <AlertDialogCancel className="rounded-full border-none bg-muted text-foreground font-bold uppercase tracking-widest text-[10px]">
              Stay
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleEndSession}
              className="rounded-full bg-destructive text-destructive-foreground font-bold uppercase tracking-widest text-[10px] hover:bg-destructive/90"
            >
              End Session
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={showEndedAlert} onOpenChange={setShowEndedAlert}>
        <AlertDialogContent className="rounded-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-destructive font-serif text-2xl">
              <AlertCircle className="h-6 w-6" />
              Session Finished
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base">
              The 25-minute timer has completed. Thank you for your time.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4">
            <AlertDialogAction onClick={() => setShowEndedAlert(false)} className="rounded-full bg-primary font-bold uppercase tracking-widest text-[10px]">
              Understood
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

function formatMs(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(s / 60)
    .toString()
    .padStart(2, "0");
  const r = (s % 60).toString().padStart(2, "0");
  return `${m}:${r}`;
}