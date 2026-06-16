import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { S as SiteShell } from "./SiteShell-Cxrl0jzj.mjs";
import { R as Route$3, s as supabase } from "./router-C-SFFsZ6.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { j as Check, P as Phone, e as MessageCircle, k as Copy, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
const SERVICES = {
  text_peer: {
    label: "Text Venting",
    mins: 25,
    price: 29,
    icon: MessageCircle,
    desc: "Real-time chat with a trained peer listener."
  },
  voice_peer: {
    label: "Voice Venting",
    mins: 30,
    price: 99,
    icon: Phone,
    desc: "Google Meet call with a peer listener."
  }
};
function BookPage() {
  const {
    s
  } = Route$3.useSearch();
  const [step, setStep] = reactExports.useState(() => {
    if (typeof window === "undefined") return 1;
    const saved = localStorage.getItem("tn_confirmation");
    return saved ? 4 : 1;
  });
  const [service, setService] = reactExports.useState(() => {
    if (typeof window === "undefined") return s ?? null;
    const saved = localStorage.getItem("tn_confirmation");
    if (saved) return JSON.parse(saved).service;
    return s ?? null;
  });
  const [confirmation, setConfirmation] = reactExports.useState(() => {
    if (typeof window === "undefined") return null;
    const saved = localStorage.getItem("tn_confirmation");
    return saved ? JSON.parse(saved).confirmation : null;
  });
  const [userName, setUserName] = reactExports.useState("");
  const [isAnonymous, setIsAnonymous] = reactExports.useState(false);
  const [txid, setTxid] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (s) setService(s);
  }, [s]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-2xl px-5 pt-14 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-accent", children: "Book a session" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-serif text-4xl", children: "Let's set you up." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper, { step }),
    step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Step1, { service, setService, onNext: () => service && setStep(2) }),
    step === 2 && service && /* @__PURE__ */ jsxRuntimeExports.jsx(Step2, { service, userName, setUserName, isAnonymous, setIsAnonymous, onBack: () => setStep(1), onNext: () => setStep(3) }),
    step === 3 && service && /* @__PURE__ */ jsxRuntimeExports.jsx(Step3, { service, txid, setTxid, userName, isAnonymous, onBack: () => setStep(2), onConfirmed: (r, c, m, id) => {
      const data = {
        confirmation: {
          ref: r,
          chatId: c,
          meetLink: m,
          bookingId: id
        },
        service
      };
      localStorage.setItem("tn_confirmation", JSON.stringify(data));
      setConfirmation({
        ref: r,
        chatId: c,
        meetLink: m,
        bookingId: id
      });
      setStep(4);
    } }),
    step === 4 && confirmation && service && /* @__PURE__ */ jsxRuntimeExports.jsx(Step4, { service, confirmation })
  ] }) });
}
function Stepper({
  step
}) {
  const labels = ["Service", "Your details", "Payment", "Confirmed"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 mb-10 flex items-center gap-2", children: labels.map((l, i) => {
    const n = i + 1;
    const active = step === n;
    const done = step > n;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-7 w-7 rounded-full flex items-center justify-center text-xs ${done ? "bg-primary text-primary-foreground" : active ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground"}`, children: done ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }) : n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-2 text-xs hidden sm:block text-muted-foreground", children: l }),
      i < labels.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border mx-3" })
    ] }, l);
  }) });
}
function Step1({
  service,
  setService,
  onNext
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    Object.keys(SERVICES).map((k) => {
      const cfg = SERVICES[k];
      const Icon = cfg.icon;
      const active = service === k;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setService(k), className: `w-full text-left rounded-2xl border p-5 transition flex items-start gap-4 ${active ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/40"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 w-10 rounded-full bg-primary/12 text-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-lg", children: cfg.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif text-xl text-primary", children: [
              "BDT ",
              cfg.price
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: cfg.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
            cfg.mins,
            " minutes"
          ] })
        ] })
      ] }, k);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: !service, onClick: onNext, className: "mt-4 w-full rounded-full bg-primary text-primary-foreground py-3 text-sm font-medium disabled:opacity-40", children: "Continue" })
  ] });
}
function Step2({
  service,
  userName,
  setUserName,
  isAnonymous,
  setIsAnonymous,
  onBack,
  onNext
}) {
  const cfg = SERVICES[service];
  const submit = () => {
    if (!userName.trim()) return toast.error("Please enter your name.");
    onNext();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 rounded-3xl border border-border bg-card p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-serif text-xl", children: [
      "Your details for ",
      cfg.label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: isAnonymous, onChange: (e) => setIsAnonymous(e.target.checked) }),
      "I'd like to stay anonymous (we still need a name to call you)"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm", children: "Your name (or nickname) *" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: userName, onChange: (e) => setUserName(e.target.value), className: "mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-primary bg-primary/5 px-5 py-4 flex items-start gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-0.5 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-3 w-3 text-primary-foreground", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm", children: "As soon as possible (ASAP)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: "We'll match you with the next available listener and notify you shortly." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onBack, className: "rounded-full border border-border px-5 py-2.5 text-sm", children: "Back" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: submit, className: "flex-1 rounded-full bg-primary text-primary-foreground py-2.5 text-sm font-medium", children: "Continue to payment" })
    ] })
  ] });
}
function Step3({
  service,
  txid,
  setTxid,
  userName,
  isAnonymous,
  onBack,
  onConfirmed
}) {
  const cfg = SERVICES[service];
  const [loading, setLoading] = reactExports.useState(false);
  const submit = async () => {
    if (!txid.trim()) return toast.error("Please enter your bKash Transaction ID.");
    setLoading(true);
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const {
      data: booking,
      error
    } = await supabase.from("bookings").insert({
      user_name: userName,
      preferred_date: today,
      preferred_time: "ASAP",
      is_anonymous: isAnonymous,
      session_type: service,
      bkash_transaction_id: txid.trim(),
      status: "pending_verification"
    }).select("id, reference_code").maybeSingle();
    try {
      await fetch("http://localhost:4000/api/notify-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userName,
          service: cfg.label,
          txid: txid.trim(),
          ref: booking?.reference_code
        })
      });
    } catch (e) {
      console.error("Notification failed:", e);
    }
    if (error || !booking) {
      setLoading(false);
      return toast.error(error?.message || "Could not save booking.");
    }
    let meetLink;
    if (service === "voice_peer") {
      meetLink = "https://meet.google.com/sfj-czep-ujc";
    }
    let chatId;
    if (service === "text_peer" || service === "text_health") {
      const {
        data: cs
      } = await supabase.from("chat_sessions").insert({
        booking_id: booking.id,
        status: "waiting"
      }).select("id").maybeSingle();
      if (cs) {
        chatId = cs.id;
        await supabase.from("bookings").update({
          chat_id: chatId
        }).eq("id", booking.id);
      }
    }
    setLoading(false);
    onConfirmed(booking.reference_code, chatId, meetLink, booking.id);
  };
  const copyNumber = () => {
    navigator.clipboard.writeText("01301046838");
    toast.success("Number copied");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 rounded-3xl border border-border bg-card p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl", children: "Pay via bKash" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-2xl text-primary", children: [
        "BDT ",
        cfg.price
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "text-sm text-muted-foreground space-y-3 list-decimal pl-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "Send ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-foreground", children: [
          "BDT ",
          cfg.price
        ] }),
        " to bKash merchant:",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-2 rounded-xl bg-secondary/60 border border-border px-3 py-2 w-fit", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-foreground text-base", children: "01301046838" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: copyNumber, className: "text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Copy your bKash Transaction ID (TrxID)." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Paste it below and confirm." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm", children: "bKash Transaction ID *" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: txid, onChange: (e) => setTxid(e.target.value), placeholder: "e.g. 9A8B7C6D5E", className: "mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 font-mono" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onBack, className: "rounded-full border border-border px-5 py-2.5 text-sm", children: "Back" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: submit, disabled: loading, className: "flex-1 rounded-full bg-primary text-primary-foreground py-2.5 text-sm font-medium disabled:opacity-50", children: loading ? "Saving..." : "Confirm booking" })
    ] })
  ] });
}
function Step4({
  service,
  confirmation
}) {
  const navigate = useNavigate();
  console.log("confirmation:", confirmation);
  const [status, setStatus] = reactExports.useState("pending_verification");
  reactExports.useEffect(() => {
    if (!confirmation.bookingId) return;
    supabase.from("bookings").select("status").eq("id", confirmation.bookingId).maybeSingle().then(({
      data
    }) => {
      if (data?.status) setStatus(data.status);
    });
    const ch = supabase.channel(`booking_${confirmation.bookingId}`).on("postgres_changes", {
      event: "UPDATE",
      schema: "public",
      table: "bookings",
      filter: `id=eq.${confirmation.bookingId}`
    }, (p) => {
      console.log("Realtime update received:", p.new);
      const newStatus = p.new.status;
      if (newStatus) setStatus(newStatus);
    }).subscribe();
    return () => {
      supabase.removeChannel(ch);
    };
  }, [confirmation.bookingId]);
  reactExports.useEffect(() => {
    if (status === "completed") {
      localStorage.removeItem("tn_confirmation");
      window.location.href = "/book";
    }
  }, [status]);
  const isConfirmed = status === "confirmed";
  const isCancelled = status === "cancelled";
  const steps = [{
    label: "Booking received",
    done: true
  }, {
    label: "Your listener is being assigned...",
    done: isConfirmed,
    active: !isConfirmed && !isCancelled
  }, {
    label: "Room ready",
    done: isConfirmed
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-14 w-14 rounded-full bg-primary/15 text-primary flex items-center justify-center mb-4", children: isConfirmed ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-7 w-7" }) : isCancelled ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "✕" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", style: {
        animation: "pulse 2s infinite"
      }, children: "☕" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl", children: isConfirmed ? "Your Talk Nook is ready" : isCancelled ? "Booking cancelled" : "Your Talk Nook is being prepared" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: isConfirmed ? "Your listener is ready. Join whenever you are." : isCancelled ? "Your booking was cancelled. Please reach us at thetalknook@proton.me if this was a mistake." : "Typical connection time: 25 minutes" })
    ] }),
    !isConfirmed && !isCancelled && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 h-1 rounded-full bg-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-primary/40 rounded-full", style: {
      width: "60%",
      animation: "progressPulse 2.5s ease-in-out infinite"
    } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-8", children: steps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-500 ${step.done ? "bg-primary/8 border border-primary/20" : step.active ? "bg-secondary/60 border border-border" : "bg-secondary/30 border border-border opacity-50"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-6 w-6 rounded-full flex items-center justify-center text-xs shrink-0 ${step.done ? "bg-primary text-primary-foreground" : step.active ? "bg-border text-muted-foreground" : "bg-border/50 text-muted-foreground"}`, style: step.active ? {
        animation: "pulse 1.5s infinite"
      } : void 0, children: step.done ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }) : step.active ? "⏳" : "□" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm ${step.done ? "text-foreground font-medium" : step.active ? "text-foreground" : "text-muted-foreground"}`, children: step.label })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-secondary/60 border border-border px-5 py-4 text-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Booking reference" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-lg mt-1", children: confirmation.ref }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Save this code to return to your session" })
    ] }),
    isConfirmed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", style: {
      animation: "fadeSlideUp 0.5s ease forwards"
    }, children: [
      service === "voice_peer" && confirmation.meetLink && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: confirmation.meetLink, target: "_blank", rel: "noopener noreferrer", onClick: () => localStorage.removeItem("tn_confirmation"), className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-3 text-sm font-medium", children: [
        "📹 Join Session ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }),
      (service === "text_peer" || service === "text_health") && confirmation.chatId && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
        localStorage.removeItem("tn_confirmation");
        navigate({
          to: "/chat/$chatId",
          params: {
            chatId: confirmation.chatId
          }
        });
      }, className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-3 text-sm font-medium", children: [
        "Enter Chat Room ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes progressPulse {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(80%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      ` })
  ] });
}
export {
  BookPage as component
};
