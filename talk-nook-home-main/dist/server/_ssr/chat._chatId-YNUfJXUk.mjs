import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteShell } from "./SiteShell-Cxrl0jzj.mjs";
import { a as Route, s as supabase } from "./router-FozfxTEg.mjs";
import { R as Root2, P as Portal2, C as Content2, T as Title2, D as Description2, a as Cancel, A as Action, O as Overlay2 } from "../_libs/radix-ui__react-alert-dialog.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import "../_libs/sonner.mjs";
import { q as ArrowLeft, r as Clock, d as CircleAlert, s as Send } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
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
    if (messages.length > 0) {
      const timeoutId = setTimeout(() => scrollToBottom("smooth"), 100);
      return () => clearTimeout(timeoutId);
    }
  }, [messages]);
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
    const ch = supabase.channel(`chat_${chatId}`).on("postgres_changes", {
      event: "INSERT",
      schema: "public",
      table: "chat_messages",
      filter: `chat_id=eq.${chatId}`
    }, (p) => {
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
  }, [chatId, asListener, timerActive]);
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
          content: "Listener has joined."
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
            content: "Session has ended. Thank you for choosing The Talk Nook."
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
    const role = asListener ? "listener" : "user";
    const name = asListener ? "Listener" : booking?.is_anonymous ? "Friend" : booking?.user_name || "You";
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
      content: "Session has ended. Thank you for choosing The Talk Nook."
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
  booking?.session_type === "text_health" ? "Health Navigation — Text" : "Peer Support — Text";
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-sm", children: "Loading your session…" }) });
  }
  if (!session) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-md px-5 py-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl", children: "Chat not found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "This chat link is invalid or has expired." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-6 inline-block rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm", children: "Back home" })
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
      !ended && session.status !== "ended" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowEndDialog(true), className: "flex-shrink-0 text-xs px-3 py-1.5 rounded-full border border-destructive/30 text-destructive hover:bg-destructive/10 transition font-medium", children: "End Chat" }),
      ended && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-destructive/10 text-destructive font-medium animate-pulse", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3 w-3" }),
        " Session Ended"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: scrollRef, className: "flex-1 overflow-y-auto px-4 py-6 space-y-4 max-w-2xl w-full mx-auto scroll-smooth", style: {
      scrollbarWidth: "thin"
    }, children: [
      !session.listener_joined_at && !ended && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-sm text-muted-foreground py-12 animate-pulse", children: "Waiting for your listener to join…" }),
      messages.map((m, idx) => {
        if (m.sender_role === "system") return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-[11px] text-muted-foreground py-4 uppercase tracking-widest opacity-60", children: [
          "— ",
          m.content,
          " —"
        ] }, m.id || idx);
        const mine = asListener ? m.sender_role === "listener" : m.sender_role === "user";
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${mine ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${mine ? "bg-primary text-primary-foreground rounded-tr-none" : "bg-secondary text-secondary-foreground rounded-tl-none"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-tighter opacity-50 mb-1", children: m.sender_display_name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[15px] whitespace-pre-wrap leading-relaxed", children: m.content })
        ] }) }, m.id || idx);
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: messagesEndRef, className: "h-4 w-full" }),
      ended && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block px-6 py-3 rounded-xl bg-muted text-muted-foreground text-sm border border-border font-medium", children: "This session has ended." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border bg-card pb-safe shadow-lg z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-4 flex items-end gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 1, value: text, onChange: (e) => {
        setText(e.target.value);
        e.target.style.height = "inherit";
        e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
      }, onKeyDown: (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          send();
          e.currentTarget.style.height = "inherit";
        }
      }, placeholder: ended ? "Session has ended" : asListener && !session.listener_joined_at ? "Type to greet…" : "Say what's on your mind…", disabled: ended, className: "flex-1 rounded-2xl border border-input bg-background px-4 py-3 text-sm resize-none disabled:opacity-60 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none", style: {
        minHeight: "44px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        send();
        const textarea = document.querySelector("textarea");
        if (textarea) textarea.style.height = "inherit";
      }, disabled: ended || !text.trim(), className: "h-11 w-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-40 hover:scale-105 active:scale-95 transition-all shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-5 w-5" }) })
    ] }) }),
    showFeedback && !asListener && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-card rounded-t-3xl p-8 pb-12 shadow-2xl animate-in slide-in-from-bottom duration-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl text-center mb-2", children: "How was it?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-muted-foreground mb-8", children: "Your feedback helps us make The Talk Nook better." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-4 mb-8", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFeedbackRating(star), className: `text-4xl transition-all hover:scale-125 ${feedbackRating >= star ? "text-yellow-400 drop-shadow-md" : "text-muted-foreground/20"}`, children: "★" }, star)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: feedbackComment, onChange: (e) => setFeedbackComment(e.target.value.slice(0, 200)), placeholder: "Anything else you'd like to share?", rows: 3, className: "w-full rounded-2xl border border-input bg-background px-5 py-4 text-sm resize-none mb-2 outline-none focus:ring-2 focus:ring-primary/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 mb-6", children: [
        feedbackComment.length,
        " / 200"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleFeedbackSubmit, disabled: feedbackRating === 0 || feedbackSubmitting, className: "w-full rounded-full bg-primary text-primary-foreground py-4 text-sm font-bold shadow-lg hover:shadow-xl disabled:opacity-40 transition-all", children: feedbackSubmitting ? "Sending..." : "Submit Feedback" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowFeedback(false), className: "w-full text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mt-5 hover:text-foreground transition-colors", children: "Maybe later" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: showEndDialog, onOpenChange: setShowEndDialog, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { className: "rounded-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "font-serif text-2xl", children: "End this session?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "text-base", children: "Are you sure? You won't be able to send more messages in this quiet corner." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { className: "mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { className: "rounded-full border-none bg-muted text-foreground font-bold uppercase tracking-widest text-[10px]", children: "Stay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: handleEndSession, className: "rounded-full bg-destructive text-destructive-foreground font-bold uppercase tracking-widest text-[10px] hover:bg-destructive/90", children: "End Session" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: showEndedAlert, onOpenChange: setShowEndedAlert, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { className: "rounded-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { className: "flex items-center gap-2 text-destructive font-serif text-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-6 w-6" }),
          "Session Finished"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "text-base", children: "The 25-minute timer has completed. Thank you for your time." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogFooter, { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: () => setShowEndedAlert(false), className: "rounded-full bg-primary font-bold uppercase tracking-widest text-[10px]", children: "Understood" }) })
    ] }) })
  ] });
}
function formatMs(ms) {
  const s = Math.max(0, Math.floor(ms / 1e3));
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const r = (s % 60).toString().padStart(2, "0");
  return `${m}:${r}`;
}
export {
  ChatPage as component
};
