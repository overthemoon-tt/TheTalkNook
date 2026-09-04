"use strict";
const _libs_react = require("../_libs/react.mjs");
const _libs__tanstack_reactRouter = require("../_libs/tanstack__react-router.mjs");
const SiteShellCxrl0jzj = require("./SiteShell-Cxrl0jzj.mjs");
const routerCpCDZ1M0 = require("./router-CpCDZ1M0.mjs");
const _libs__radixUi_reactAlertDialog = require("../_libs/radix-ui__react-alert-dialog.mjs");
const utilsH80jjgLf = require("./utils-H80jjgLf.mjs");
const _libs__radixUi_reactSlot = require("../_libs/radix-ui__react-slot.mjs");
const _libs_classVarianceAuthority = require("../_libs/class-variance-authority.mjs");
require("../_libs/sonner.mjs");
const _libs_lucideReact = require("../_libs/lucide-react.mjs");
require("../_libs/tanstack__router-core.mjs");
require("../_libs/tanstack__history.mjs");
require("../_libs/cookie-es.mjs");
require("../_libs/seroval.mjs");
require("../_libs/seroval-plugins.mjs");
require("node:stream/web");
require("node:stream");
require("../_libs/react-dom.mjs");
require("util");
require("crypto");
require("async_hooks");
require("stream");
require("../_libs/isbot.mjs");
require("../_libs/tanstack__query-core.mjs");
require("../_libs/tanstack__react-query.mjs");
require("../_libs/supabase__supabase-js.mjs");
require("../_libs/supabase__postgrest-js.mjs");
require("../_libs/supabase__realtime-js.mjs");
require("../_libs/supabase__phoenix.mjs");
require("../_libs/supabase__storage-js.mjs");
require("../_libs/iceberg-js.mjs");
require("../_libs/supabase__auth-js.mjs");
require("tslib");
require("../_libs/supabase__functions-js.mjs");
require("../_libs/radix-ui__react-context.mjs");
require("../_libs/radix-ui__react-compose-refs.mjs");
require("../_libs/radix-ui__react-dialog.mjs");
require("../_libs/radix-ui__primitive.mjs");
require("../_libs/radix-ui__react-id.mjs");
require("../_libs/@radix-ui/react-use-layout-effect+[...].mjs");
require("../_libs/@radix-ui/react-use-controllable-state+[...].mjs");
require("../_libs/@radix-ui/react-dismissable-layer+[...].mjs");
require("../_libs/radix-ui__react-primitive.mjs");
require("../_libs/@radix-ui/react-use-callback-ref+[...].mjs");
require("../_libs/@radix-ui/react-use-escape-keydown+[...].mjs");
require("../_libs/radix-ui__react-focus-scope.mjs");
require("../_libs/radix-ui__react-portal.mjs");
require("../_libs/radix-ui__react-presence.mjs");
require("../_libs/radix-ui__react-focus-guards.mjs");
require("../_libs/react-remove-scroll.mjs");
require("../_libs/react-remove-scroll-bar.mjs");
require("../_libs/react-style-singleton.mjs");
require("../_libs/get-nonce.mjs");
require("../_libs/use-sidecar.mjs");
require("../_libs/use-callback-ref.mjs");
require("../_libs/aria-hidden.mjs");
require("../_libs/clsx.mjs");
require("../_libs/tailwind-merge.mjs");
const buttonVariants = _libs_classVarianceAuthority.cva(
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
const Button = _libs_react.reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? _libs__radixUi_reactSlot.Slot : "button";
    return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(Comp, { className: utilsH80jjgLf.cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const AlertDialog = _libs__radixUi_reactAlertDialog.Root2;
const AlertDialogPortal = _libs__radixUi_reactAlertDialog.Portal2;
const AlertDialogOverlay = _libs_react.reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
  _libs__radixUi_reactAlertDialog.Overlay2,
  {
    className: utilsH80jjgLf.cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = _libs__radixUi_reactAlertDialog.Overlay2.displayName;
const AlertDialogContent = _libs_react.reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
    _libs__radixUi_reactAlertDialog.Content2,
    {
      ref,
      className: utilsH80jjgLf.cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = _libs__radixUi_reactAlertDialog.Content2.displayName;
const AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: utilsH80jjgLf.cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
  "div",
  {
    className: utilsH80jjgLf.cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = _libs_react.reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
  _libs__radixUi_reactAlertDialog.Title2,
  {
    ref,
    className: utilsH80jjgLf.cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = _libs__radixUi_reactAlertDialog.Title2.displayName;
const AlertDialogDescription = _libs_react.reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
  _libs__radixUi_reactAlertDialog.Description2,
  {
    ref,
    className: utilsH80jjgLf.cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = _libs__radixUi_reactAlertDialog.Description2.displayName;
const AlertDialogAction = _libs_react.reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__radixUi_reactAlertDialog.Action, { ref, className: utilsH80jjgLf.cn(buttonVariants(), className), ...props }));
AlertDialogAction.displayName = _libs__radixUi_reactAlertDialog.Action.displayName;
const AlertDialogCancel = _libs_react.reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
  _libs__radixUi_reactAlertDialog.Cancel,
  {
    ref,
    className: utilsH80jjgLf.cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
    ...props
  }
));
AlertDialogCancel.displayName = _libs__radixUi_reactAlertDialog.Cancel.displayName;
const SESSION_MS = 25 * 60 * 1e3;
const TYPING_IDLE_MS = 1500;
function ChatPage() {
  const {
    chatId
  } = routerCpCDZ1M0.a.useParams();
  const search = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const asListener = search.get("as") === "listener";
  const [session, setSession] = _libs_react.reactExports.useState(null);
  const [messages, setMessages] = _libs_react.reactExports.useState([]);
  const [text, setText] = _libs_react.reactExports.useState("");
  const [booking, setBooking] = _libs_react.reactExports.useState(null);
  const [remaining, setRemaining] = _libs_react.reactExports.useState(SESSION_MS);
  const [ended, setEnded] = _libs_react.reactExports.useState(false);
  const [showEndDialog, setShowEndDialog] = _libs_react.reactExports.useState(false);
  const [showEndedAlert, setShowEndedAlert] = _libs_react.reactExports.useState(false);
  const [showFeedback, setShowFeedback] = _libs_react.reactExports.useState(false);
  const [feedbackRating, setFeedbackRating] = _libs_react.reactExports.useState(0);
  const [feedbackComment, setFeedbackComment] = _libs_react.reactExports.useState("");
  const [feedbackSubmitting, setFeedbackSubmitting] = _libs_react.reactExports.useState(false);
  const [loading, setLoading] = _libs_react.reactExports.useState(true);
  const scrollRef = _libs_react.reactExports.useRef(null);
  const messagesEndRef = _libs_react.reactExports.useRef(null);
  const endedRef = _libs_react.reactExports.useRef(false);
  const [timerActive, setTimerActive] = _libs_react.reactExports.useState(false);
  const localStartTimeRef = _libs_react.reactExports.useRef(null);
  const [otherTyping, setOtherTyping] = _libs_react.reactExports.useState(false);
  const channelRef = _libs_react.reactExports.useRef(null);
  const typingTimeoutRef = _libs_react.reactExports.useRef(null);
  const myRole = asListener ? "listener" : "user";
  const broadcastTyping = (isTyping) => {
    channelRef.current?.send({
      type: "broadcast",
      event: "typing",
      payload: {
        role: myRole,
        isTyping
      }
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
  const scrollToBottom = (behavior = "smooth") => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior
      });
    }
  };
  _libs_react.reactExports.useEffect(() => {
    if (messages.length > 0) {
      const timeoutId = setTimeout(() => scrollToBottom("smooth"), 100);
      return () => clearTimeout(timeoutId);
    }
  }, [messages]);
  _libs_react.reactExports.useEffect(() => {
    if (otherTyping) {
      const timeoutId = setTimeout(() => scrollToBottom("smooth"), 50);
      return () => clearTimeout(timeoutId);
    }
  }, [otherTyping]);
  _libs_react.reactExports.useEffect(() => {
    let mounted = true;
    (async () => {
      const {
        data: s
      } = await routerCpCDZ1M0.s.from("chat_sessions").select("*").eq("id", chatId).maybeSingle();
      if (!mounted) return;
      setSession(s);
      setLoading(false);
      if (s) {
        const {
          data: b
        } = await routerCpCDZ1M0.s.from("bookings").select("*").eq("id", s.booking_id).maybeSingle();
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
      } = await routerCpCDZ1M0.s.from("chat_messages").select("*").eq("chat_id", chatId).order("created_at");
      if (mounted) {
        setMessages(msgs || []);
        setTimeout(() => scrollToBottom("auto"), 200);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [chatId]);
  _libs_react.reactExports.useEffect(() => {
    const ch = routerCpCDZ1M0.s.channel(`chat_${chatId}`).on("postgres_changes", {
      event: "INSERT",
      schema: "public",
      table: "chat_messages",
      filter: `chat_id=eq.${chatId}`
    }, (p) => {
      const newMsg = p.new;
      setMessages((prev) => {
        if (prev.some((m) => m.id === newMsg.id)) return prev;
        return [...prev, newMsg];
      });
      if (newMsg.sender_role !== myRole) {
        setOtherTyping(false);
      }
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
        setOtherTyping(false);
        if (asListener) setShowEndedAlert(true);
        if (!asListener) setShowFeedback(true);
      }
    }).on("broadcast", {
      event: "typing"
    }, (payload) => {
      const {
        role,
        isTyping
      } = payload.payload || {};
      if (role !== myRole) {
        setOtherTyping(isTyping);
      }
    }).subscribe();
    channelRef.current = ch;
    return () => {
      routerCpCDZ1M0.s.removeChannel(ch);
      channelRef.current = null;
    };
  }, [chatId, asListener, timerActive, myRole]);
  _libs_react.reactExports.useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, []);
  const listenerJoinedHandled = _libs_react.reactExports.useRef(false);
  _libs_react.reactExports.useEffect(() => {
    if (!asListener || !session || ended || listenerJoinedHandled.current) return;
    if (!session.listener_joined_at) {
      listenerJoinedHandled.current = true;
      routerCpCDZ1M0.s.from("chat_sessions").update({
        listener_joined_at: (/* @__PURE__ */ new Date()).toISOString(),
        status: "active"
      }).eq("id", chatId).then(() => {
        routerCpCDZ1M0.s.from("chat_messages").insert({
          chat_id: chatId,
          sender_role: "system",
          sender_display_name: "System",
          content: "Listener has joined."
        });
      });
    }
  }, [asListener, session?.id, chatId, ended]);
  _libs_react.reactExports.useEffect(() => {
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
        routerCpCDZ1M0.s.from("chat_sessions").update({
          session_ended_at: (/* @__PURE__ */ new Date()).toISOString(),
          status: "ended"
        }).eq("id", chatId).is("session_ended_at", null).then(() => {
          routerCpCDZ1M0.s.from("chat_messages").insert({
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
    stopTyping();
    const role = asListener ? "listener" : "user";
    const name = asListener ? "Listener" : booking?.is_anonymous ? "Friend" : booking?.user_name || "You";
    await routerCpCDZ1M0.s.from("chat_messages").insert({
      chat_id: chatId,
      sender_role: role,
      sender_display_name: name,
      content: msg
    });
    if (asListener && session && !session.session_started_at) {
      await routerCpCDZ1M0.s.from("chat_sessions").update({
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
    stopTyping();
    setOtherTyping(false);
    await routerCpCDZ1M0.s.from("chat_sessions").update({
      session_ended_at: (/* @__PURE__ */ new Date()).toISOString(),
      status: "ended"
    }).eq("id", chatId).is("session_ended_at", null);
    await routerCpCDZ1M0.s.from("chat_messages").insert({
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
    } = await routerCpCDZ1M0.s.from("session_feedback").insert({
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
    return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-screen", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-sm", children: "Loading your session…" }) });
  }
  if (!session) {
    return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(SiteShellCxrl0jzj.SiteShell, { children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-md px-5 py-20 text-center", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl", children: "Chat not found" }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "This chat link is invalid or has expired." }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__tanstack_reactRouter.Link, { to: "/", className: "mt-6 inline-block rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm", children: "Back home" })
    ] }) });
  }
  const otherName = asListener ? booking?.is_anonymous ? "Friend" : booking?.user_name || "User" : "Listener";
  return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-screen bg-background overflow-hidden", children: [
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("header", { className: "border-b border-border bg-card px-4 py-3 flex items-center gap-2 flex-wrap z-10", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__tanstack_reactRouter.Link, { to: "/", className: "text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs_lucideReact.ArrowLeft, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("span", { className: "font-serif text-lg flex-1 truncate", children: "The Talk Nook" }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-mono ${timerActive && !ended ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"}`, children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs_lucideReact.Clock, { className: "h-4 w-4" }),
        " ",
        formatMs(remaining)
      ] }),
      !ended && session.status !== "ended" && /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("button", { onClick: () => setShowEndDialog(true), className: "flex-shrink-0 text-xs px-3 py-1.5 rounded-full border border-destructive/30 text-destructive hover:bg-destructive/10 transition font-medium", children: "End Chat" }),
      ended && /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-destructive/10 text-destructive font-medium animate-pulse", children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs_lucideReact.CircleAlert, { className: "h-3 w-3" }),
        " Session Ended"
      ] })
    ] }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { ref: scrollRef, className: "flex-1 overflow-y-auto px-4 py-6 space-y-4 max-w-2xl w-full mx-auto scroll-smooth", style: {
      scrollbarWidth: "thin"
    }, children: [
      !session.listener_joined_at && !ended && /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "text-center text-sm text-muted-foreground py-12 animate-pulse", children: "Waiting for your listener to join…" }),
      messages.map((m, idx) => {
        if (m.sender_role === "system") return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "text-center text-[11px] text-muted-foreground py-4 uppercase tracking-widest opacity-60", children: [
          "— ",
          m.content,
          " —"
        ] }, m.id || idx);
        const mine = asListener ? m.sender_role === "listener" : m.sender_role === "user";
        return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: `flex ${mine ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`, children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: `max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${mine ? "bg-primary text-primary-foreground rounded-tr-none" : "bg-secondary text-secondary-foreground rounded-tl-none"}`, children: [
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-tighter opacity-50 mb-1", children: m.sender_display_name }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "text-[15px] whitespace-pre-wrap leading-relaxed", children: m.content })
        ] }) }, m.id || idx);
      }),
      otherTyping && !ended && /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-200", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "max-w-[85%] rounded-2xl rounded-tl-none px-4 py-3 shadow-sm bg-secondary text-secondary-foreground", children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-tighter opacity-50 mb-1", children: otherName }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 h-4 py-1", children: [
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-bounce [animation-delay:-0.3s]" }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-bounce [animation-delay:-0.15s]" }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-bounce" })
        ] })
      ] }) }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { ref: messagesEndRef, className: "h-4 w-full" }),
      ended && /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "text-center py-8", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "inline-block px-6 py-3 rounded-xl bg-muted text-muted-foreground text-sm border border-border font-medium", children: "This session has ended." }) })
    ] }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "border-t border-border bg-card pb-safe shadow-lg z-10", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-4 flex items-end gap-3", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("textarea", { rows: 1, value: text, onChange: (e) => {
        setText(e.target.value);
        e.target.style.height = "inherit";
        e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
        handleTypingInput();
      }, onKeyDown: (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          send();
          e.currentTarget.style.height = "inherit";
        }
      }, onBlur: stopTyping, placeholder: ended ? "Session has ended" : asListener && !session.listener_joined_at ? "Type to greet…" : "Say what's on your mind…", disabled: ended, className: "flex-1 rounded-2xl border border-input bg-background px-4 py-3 text-sm resize-none disabled:opacity-60 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none", style: {
        minHeight: "44px"
      } }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("button", { onClick: () => {
        send();
        const textarea = document.querySelector("textarea");
        if (textarea) textarea.style.height = "inherit";
      }, disabled: ended || !text.trim(), className: "h-11 w-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-40 hover:scale-105 active:scale-95 transition-all shadow-md", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs_lucideReact.Send, { className: "h-5 w-5" }) })
    ] }) }),
    showFeedback && !asListener && /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm transition-all", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-card rounded-t-3xl p-8 pb-12 shadow-2xl animate-in slide-in-from-bottom duration-500", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl text-center mb-2", children: "How was it?" }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-muted-foreground mb-8", children: "Your feedback helps us make The Talk Nook better." }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-4 mb-8", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("button", { onClick: () => setFeedbackRating(star), className: `text-4xl transition-all hover:scale-125 ${feedbackRating >= star ? "text-yellow-400 drop-shadow-md" : "text-muted-foreground/20"}`, children: "★" }, star)) }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("textarea", { value: feedbackComment, onChange: (e) => setFeedbackComment(e.target.value.slice(0, 200)), placeholder: "Anything else you'd like to share?", rows: 3, className: "w-full rounded-2xl border border-input bg-background px-5 py-4 text-sm resize-none mb-2 outline-none focus:ring-2 focus:ring-primary/20" }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "text-right text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 mb-6", children: [
        feedbackComment.length,
        " / 200"
      ] }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("button", { onClick: handleFeedbackSubmit, disabled: feedbackRating === 0 || feedbackSubmitting, className: "w-full rounded-full bg-primary text-primary-foreground py-4 text-sm font-bold shadow-lg hover:shadow-xl disabled:opacity-40 transition-all", children: feedbackSubmitting ? "Sending..." : "Submit Feedback" }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("button", { onClick: () => setShowFeedback(false), className: "w-full text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mt-5 hover:text-foreground transition-colors", children: "Maybe later" })
    ] }) }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(AlertDialog, { open: showEndDialog, onOpenChange: setShowEndDialog, children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs(AlertDialogContent, { className: "rounded-2xl", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(AlertDialogTitle, { className: "font-serif text-2xl", children: "End this session?" }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(AlertDialogDescription, { className: "text-base", children: "Are you sure? You won't be able to send more messages in this quiet corner." })
      ] }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs(AlertDialogFooter, { className: "mt-4", children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(AlertDialogCancel, { className: "rounded-full border-none bg-muted text-foreground font-bold uppercase tracking-widest text-[10px]", children: "Stay" }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(AlertDialogAction, { onClick: handleEndSession, className: "rounded-full bg-destructive text-destructive-foreground font-bold uppercase tracking-widest text-[10px] hover:bg-destructive/90", children: "End Session" })
      ] })
    ] }) }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(AlertDialog, { open: showEndedAlert, onOpenChange: setShowEndedAlert, children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs(AlertDialogContent, { className: "rounded-2xl", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs(AlertDialogTitle, { className: "flex items-center gap-2 text-destructive font-serif text-2xl", children: [
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs_lucideReact.CircleAlert, { className: "h-6 w-6" }),
          "Session Finished"
        ] }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(AlertDialogDescription, { className: "text-base", children: "The 25-minute timer has completed. Thank you for your time." })
      ] }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(AlertDialogFooter, { className: "mt-4", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(AlertDialogAction, { onClick: () => setShowEndedAlert(false), className: "rounded-full bg-primary font-bold uppercase tracking-widest text-[10px]", children: "Understood" }) })
    ] }) })
  ] });
}
function formatMs(ms) {
  const s = Math.max(0, Math.floor(ms / 1e3));
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const r = (s % 60).toString().padStart(2, "0");
  return `${m}:${r}`;
}
exports.component = ChatPage;
