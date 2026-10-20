import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteShell } from "./SiteShell-C6-qY__4.mjs";
import { s as supabase } from "./client-Xq59pGEw.mjs";
import { R as Root2, P as Portal2, C as Content2, T as Title2, D as Description2, a as Cancel, A as Action, O as Overlay2 } from "../_libs/radix-ui__react-alert-dialog.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { a as Route } from "./router-DjCfpaLu.mjs";
import "../_libs/sonner.mjs";
import { o as ArrowLeft, p as Clock, d as CircleAlert, q as Send } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/tanstack__history.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const AlertDialog = Root2;
const AlertDialogPortal = Portal2;
const AlertDialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay2,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = Overlay2.displayName;
const AlertDialogContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content2,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = Content2.displayName;
const AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title2,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = Title2.displayName;
const AlertDialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description2,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = Description2.displayName;
const AlertDialogAction = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Action, { ref, className: cn(buttonVariants(), className), ...props }));
AlertDialogAction.displayName = Action.displayName;
const AlertDialogCancel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Cancel,
  {
    ref,
    className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
    ...props
  }
));
AlertDialogCancel.displayName = Cancel.displayName;
const SESSION_MS = 25 * 60 * 1e3;
function ChatPage() {
  const {
    chatId
  } = Route.useParams();
  const search = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const asListener = search.get("as") === "listener";
  const myRole = asListener ? "listener" : "user";
  const [session, setSession] = reactExports.useState(null);
  const [messages, setMessages] = reactExports.useState([]);
  const [text, setText] = reactExports.useState("");
  const [booking, setBooking] = reactExports.useState(null);
  const [remaining, setRemaining] = reactExports.useState(SESSION_MS);
  const [ended, setEnded] = reactExports.useState(false);
  const [showEndDialog, setShowEndDialog] = reactExports.useState(false);
  const [showEndedAlert, setShowEndedAlert] = reactExports.useState(false);
  const [showFeedback, setShowFeedback] = reactExports.useState(false);
  const [feedbackRating, setFeedbackRating] = reactExports.useState(0);
  const [feedbackComment, setFeedbackComment] = reactExports.useState("");
  const [feedbackSubmitting, setFeedbackSubmitting] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(true);
  const scrollRef = reactExports.useRef(null);
  const messagesEndRef = reactExports.useRef(null);
  const endedRef = reactExports.useRef(false);
  const [otherTyping, setOtherTyping] = reactExports.useState(false);
  const typingChannelRef = reactExports.useRef(null);
  const typingReadyRef = reactExports.useRef(false);
  const typingTimeoutRef = reactExports.useRef(null);
  const lastTypingSentRef = reactExports.useRef(0);
  const [timerActive, setTimerActive] = reactExports.useState(false);
  const localStartTimeRef = reactExports.useRef(null);
  const scrollToBottom = (behavior = "smooth") => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior
      });
    }
  };
  reactExports.useEffect(() => {
    if (messages.length > 0 || otherTyping) {
      const timeoutId = setTimeout(() => scrollToBottom("smooth"), 100);
      return () => clearTimeout(timeoutId);
    }
  }, [messages, otherTyping]);
  reactExports.useEffect(() => {
    if (ended) setOtherTyping(false);
  }, [ended]);
  reactExports.useEffect(() => {
    let mounted = true;
    (async () => {
      const {
        data: s
      } = await supabase.from("chat_sessions").select("*").eq("id", chatId).maybeSingle();
      if (!mounted) return;
      setSession(s);
      setLoading(false);
      if (s) {
        const {
          data: b
        } = await supabase.from("bookings").select("*").eq("id", s.booking_id).maybeSingle();
        if (mounted) setBooking(b);
        if (s.session_ended_at) {
          endedRef.current = true;
          setEnded(true);
          setRemaining(0);
        } else if (s.session_started_at) {
          setTimerActive(true);
        }
      }
      const {
        data: msgs
      } = await supabase.from("chat_messages").select("*").eq("chat_id", chatId).order("created_at");
      if (mounted) {
        setMessages(msgs || []);
        setTimeout(() => scrollToBottom("auto"), 200);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [chatId]);
  reactExports.useEffect(() => {
    const ch = supabase.channel(`typing_${chatId}`, {
      config: {
        broadcast: {
          self: false
        }
      }
    });
    ch.on("broadcast", {
      event: "typing"
    }, ({
      payload
    }) => {
      if (!payload || payload.role === myRole) return;
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      if (payload.typing) {
        setOtherTyping(true);
        typingTimeoutRef.current = setTimeout(() => setOtherTyping(false), 4e3);
      } else {
        setOtherTyping(false);
      }
    }).subscribe((status) => {
      typingReadyRef.current = status === "SUBSCRIBED";
    });
    typingChannelRef.current = ch;
    return () => {
      typingReadyRef.current = false;
      typingChannelRef.current = null;
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      supabase.removeChannel(ch);
    };
  }, [chatId, myRole]);
  const sendTyping = (typing) => {
    const ch = typingChannelRef.current;
    if (!ch || !typingReadyRef.current || endedRef.current) return;
    ch.send({
      type: "broadcast",
      event: "typing",
      payload: {
        role: myRole,
        typing
      }
    });
  };
  reactExports.useEffect(() => {
    const ch = supabase.channel(`chat_${chatId}`).on("postgres_changes", {
      event: "INSERT",
      schema: "public",
      table: "chat_messages",
      filter: `chat_id=eq.${chatId}`
    }, (p) => {
      if (p.new.sender_role !== myRole) setOtherTyping(false);
      setMessages((prev) => {
        if (prev.some((m) => m.id === p.new.id)) return prev;
        return [...prev, p.new];
      });
    }).on("postgres_changes", {
      event: "UPDATE",
      schema: "public",
      table: "chat_sessions",
      filter: `id=eq.${chatId}`
    }, (p) => {
      const newSession = p.new;
      setSession(newSession);
      if (newSession.session_started_at && !timerActive && !endedRef.current) {
        setTimerActive(true);
      }
      if (newSession.session_ended_at && !endedRef.current) {
        endedRef.current = true;
        setEnded(true);
        setRemaining(0);
        setTimerActive(false);
        if (asListener) setShowEndedAlert(true);
        if (!asListener) setShowFeedback(true);
      }
    }).subscribe();
    return () => {
      supabase.removeChannel(ch);
    };
  }, [chatId, asListener, timerActive, myRole]);
  const listenerJoinedHandled = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (!asListener || !session || ended || listenerJoinedHandled.current) return;
    if (!session.listener_joined_at) {
      listenerJoinedHandled.current = true;
      supabase.from("chat_sessions").update({
        listener_joined_at: (/* @__PURE__ */ new Date()).toISOString(),
        status: "active"
      }).eq("id", chatId).then(() => {
        supabase.from("chat_messages").insert({
          chat_id: chatId,
          sender_role: "system",
          sender_display_name: "System",
          content: "লিসেনার যুক্ত হয়েছেন।"
        });
      });
    }
  }, [asListener, session?.id, chatId, ended]);
  reactExports.useEffect(() => {
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
        if (!asListener) setShowFeedback(true);
        if (asListener) setShowEndedAlert(true);
        supabase.from("chat_sessions").update({
          session_ended_at: (/* @__PURE__ */ new Date()).toISOString(),
          status: "ended"
        }).eq("id", chatId).is("session_ended_at", null).then(() => {
          supabase.from("chat_messages").insert({
            chat_id: chatId,
            sender_role: "system",
            sender_display_name: "System",
            content: "সেশন শেষ হয়েছে। The Talk Nook-কে বেছে নেওয়ার জন্য ধন্যবাদ।"
          });
        });
      } else {
        setRemaining(left);
      }
    }, 1e3);
    return () => clearInterval(iv);
  }, [timerActive, session?.session_started_at, chatId, asListener]);
  const send = async () => {
    if (!text.trim() || ended) return;
    const msg = text.trim();
    setText("");
    lastTypingSentRef.current = 0;
    sendTyping(false);
    const role = asListener ? "listener" : "user";
    const name = asListener ? "লিসেনার" : booking?.is_anonymous ? "বন্ধু" : booking?.user_name || "আপনি";
    await supabase.from("chat_messages").insert({
      chat_id: chatId,
      sender_role: role,
      sender_display_name: name,
      content: msg
    });
    if (asListener && session && !session.session_started_at) {
      await supabase.from("chat_sessions").update({
        session_started_at: (/* @__PURE__ */ new Date()).toISOString(),
        status: "active"
      }).eq("id", chatId);
    }
  };
  const handleEndSession = async () => {
    setShowEndDialog(false);
    endedRef.current = true;
    setEnded(true);
    setTimerActive(false);
    await supabase.from("chat_sessions").update({
      session_ended_at: (/* @__PURE__ */ new Date()).toISOString(),
      status: "ended"
    }).eq("id", chatId).is("session_ended_at", null);
    await supabase.from("chat_messages").insert({
      chat_id: chatId,
      sender_role: "system",
      sender_display_name: "System",
      content: "সেশন শেষ হয়েছে। The Talk Nook-কে বেছে নেওয়ার জন্য ধন্যবাদ।"
    });
    if (!asListener) setShowFeedback(true);
  };
  const handleFeedbackSubmit = async () => {
    if (feedbackRating === 0) return;
    setFeedbackSubmitting(true);
    const {
      error
    } = await supabase.from("session_feedback").insert({
      chat_id: chatId,
      rating: feedbackRating,
      comment: feedbackComment.trim() || null
    });
    console.log("Feedback result:", {
      error
    });
    setFeedbackSubmitting(false);
    setShowFeedback(false);
  };
  booking?.session_type === "text_health" ? "স্বাস্থ্যসেবা নির্দেশনা — টেক্সট" : "পিয়ার লিসেনিং — টেক্সট";
  const otherName = asListener ? booking?.is_anonymous ? "বন্ধু" : booking?.user_name || "বন্ধু" : "লিসেনার";
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-sm", children: "আপনার সেশন লোড হচ্ছে…" }) });
  }
  if (!session) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-md px-5 py-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl leading-snug", children: "চ্যাট খুঁজে পাওয়া যায়নি" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "এই চ্যাট লিংকটি সঠিক নয় অথবা এর মেয়াদ শেষ হয়ে গেছে।" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-6 inline-block rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm", children: "হোমে ফিরে যান" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-screen bg-background overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "border-b border-border bg-card px-4 py-3 flex items-center gap-2 flex-wrap z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-lg flex-1 truncate", children: "The Talk Nook" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-mono ${timerActive && !ended ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }),
        " ",
        formatMs(remaining)
      ] }),
      !ended && session.status !== "ended" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowEndDialog(true), className: "flex-shrink-0 text-xs px-3 py-1.5 rounded-full border border-destructive/30 text-destructive hover:bg-destructive/10 transition font-medium whitespace-nowrap", children: "চ্যাট শেষ করুন" }),
      ended && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-destructive/10 text-destructive font-medium animate-pulse whitespace-nowrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3 w-3" }),
        " সেশন শেষ হয়েছে"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: scrollRef, className: "flex-1 overflow-y-auto px-4 py-6 space-y-4 max-w-2xl w-full mx-auto scroll-smooth", style: {
      scrollbarWidth: "thin"
    }, children: [
      !session.listener_joined_at && !ended && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-sm text-muted-foreground py-12 animate-pulse", children: "আপনার লিসেনারের যুক্ত হওয়ার অপেক্ষায়…" }),
      messages.map((m, idx) => {
        if (m.sender_role === "system") return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-xs text-muted-foreground py-4 opacity-70", children: [
          "— ",
          m.content,
          " —"
        ] }, m.id || idx);
        const mine = asListener ? m.sender_role === "listener" : m.sender_role === "user";
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${mine ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${mine ? "bg-primary text-primary-foreground rounded-tr-none" : "bg-secondary text-secondary-foreground rounded-tl-none"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold opacity-60 mb-1", children: m.sender_display_name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[15px] whitespace-pre-wrap leading-relaxed", children: m.content })
        ] }) }, m.id || idx);
      }),
      otherTyping && !ended && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl rounded-tl-none bg-secondary text-secondary-foreground px-4 py-3 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold opacity-60 mb-1", children: [
          otherName,
          " লিখছেন…"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 h-5", "aria-label": `${otherName} লিখছেন`, children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-current opacity-50 animate-bounce", style: {
          animationDelay: `${i * 150}ms`,
          animationDuration: "1s"
        } }, i)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: messagesEndRef, className: "h-4 w-full" }),
      ended && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block px-6 py-3 rounded-xl bg-muted text-muted-foreground text-sm border border-border font-medium", children: "এই সেশন শেষ হয়েছে।" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border bg-card pb-safe shadow-lg z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-4 flex items-end gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 1, value: text, onChange: (e) => {
        const value = e.target.value;
        setText(value);
        e.target.style.height = "inherit";
        e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
        if (!value.trim()) {
          lastTypingSentRef.current = 0;
          sendTyping(false);
        } else {
          const now = Date.now();
          if (now - lastTypingSentRef.current > 2e3) {
            lastTypingSentRef.current = now;
            sendTyping(true);
          }
        }
      }, onKeyDown: (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          send();
          e.currentTarget.style.height = "inherit";
        }
      }, placeholder: ended ? "সেশন শেষ হয়েছে" : asListener && !session.listener_joined_at ? "শুভেচ্ছা জানাতে লিখুন…" : "আপনার মনের কথা লিখুন…", disabled: ended, className: "flex-1 rounded-2xl border border-input bg-background px-4 py-3 text-sm resize-none disabled:opacity-60 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none", style: {
        minHeight: "44px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        send();
        const textarea = document.querySelector("textarea");
        if (textarea) textarea.style.height = "inherit";
      }, disabled: ended || !text.trim(), className: "h-11 w-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-40 hover:scale-105 active:scale-95 transition-all shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-5 w-5" }) })
    ] }) }),
    showFeedback && !asListener && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-card rounded-t-3xl p-8 pb-12 shadow-2xl animate-in slide-in-from-bottom duration-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl leading-snug text-center mb-2", children: "কেমন লাগলো?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-muted-foreground mb-8", children: "আপনার মতামত The Talk Nook-কে আরও ভালো করতে আমাদের সাহায্য করে।" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-4 mb-8", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFeedbackRating(star), className: `text-4xl transition-all hover:scale-125 ${feedbackRating >= star ? "text-yellow-400 drop-shadow-md" : "text-muted-foreground/20"}`, children: "★" }, star)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: feedbackComment, onChange: (e) => setFeedbackComment(e.target.value.slice(0, 200)), placeholder: "আর কিছু বলতে চাইলে লিখুন…", rows: 3, className: "w-full rounded-2xl border border-input bg-background px-5 py-4 text-sm resize-none mb-2 outline-none focus:ring-2 focus:ring-primary/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right text-xs font-bold text-muted-foreground/50 mb-6", children: [
        feedbackComment.length.toLocaleString("bn-BD"),
        " / ",
        200 .toLocaleString("bn-BD")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleFeedbackSubmit, disabled: feedbackRating === 0 || feedbackSubmitting, className: "w-full rounded-full bg-primary text-primary-foreground py-4 text-sm font-bold shadow-lg hover:shadow-xl disabled:opacity-40 transition-all", children: feedbackSubmitting ? "পাঠানো হচ্ছে..." : "মতামত পাঠান" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowFeedback(false), className: "w-full text-center text-xs font-bold text-muted-foreground mt-5 hover:text-foreground transition-colors", children: "এখন নয়" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: showEndDialog, onOpenChange: setShowEndDialog, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { className: "rounded-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "font-serif text-2xl leading-snug", children: "সেশন শেষ করবেন?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "text-base", children: "আপনি কি নিশ্চিত? এরপর আর কোনো বার্তা পাঠাতে পারবেন না।" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { className: "mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { className: "rounded-full border-none bg-muted text-foreground font-bold text-xs", children: "থাকুন" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: handleEndSession, className: "rounded-full bg-destructive text-destructive-foreground font-bold text-xs hover:bg-destructive/90", children: "সেশন শেষ করুন" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: showEndedAlert, onOpenChange: setShowEndedAlert, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { className: "rounded-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { className: "flex items-center gap-2 text-destructive font-serif text-2xl leading-snug", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-6 w-6" }),
          "সেশন শেষ"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "text-base", children: "২৫ মিনিটের সময় শেষ হয়েছে। আপনার সময় দেওয়ার জন্য ধন্যবাদ।" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogFooter, { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: () => setShowEndedAlert(false), className: "rounded-full bg-primary font-bold text-xs", children: "বুঝেছি" }) })
    ] }) })
  ] });
}
function formatMs(ms) {
  const s = Math.max(0, Math.floor(ms / 1e3));
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const r = (s % 60).toString().padStart(2, "0");
  return `${m}:${r}`.replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);
}
export {
  ChatPage as component
};
