import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteShell } from "./SiteShell-Cxrl0jzj.mjs";
import { s as supabase } from "./router-FozfxTEg.mjs";
import "../_libs/sonner.mjs";
import { e as MessageCircle, o as Calendar, U as UserCheck, H as Heart, p as Users, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HowItWorks, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Impact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-float-slow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-32 -right-10 h-80 w-80 rounded-full bg-accent/15 blur-3xl animate-float-slower" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-secondary/60 blur-3xl animate-float-slow" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-5 pt-20 pb-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs uppercase tracking-[0.18em] text-muted-foreground bg-secondary/60 px-3 py-1 rounded-full", children: "Peer support · Bangladesh" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-foreground animate-fade-up", children: [
        "You don't need to have it all figured out.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary italic", children: "You can say what burdens you." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-xl mx-auto", children: "A safe, judgment-free space where a trained peer listener meets you exactly where you are." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-9 flex flex-col sm:flex-row gap-3 justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/book", search: {
        s: "text_peer"
      }, className: "group inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:opacity-90 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
        " Talk to a Listener"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs text-muted-foreground", children: "Not therapy. Not medical advice. Just real, human conversation." })
    ] })
  ] });
}
function StepCard({
  n,
  icon: Icon,
  title,
  desc
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl border border-border bg-card p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-serif text-primary/70", children: String(n).padStart(2, "0") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-primary" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-4 font-serif text-lg", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: desc })
  ] });
}
function HowItWorks() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-5 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl sm:text-4xl", children: "How it works" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Simple, gentle, and yours to pace." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-10 md:grid-cols-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-accent mb-4 font-medium", children: "Peer Listening" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StepCard, { n: 1, icon: Calendar, title: "Book", desc: "Pick a time and a session that fits — text or voice." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StepCard, { n: 2, icon: UserCheck, title: "Match", desc: "We match you with a trained peer listener." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StepCard, { n: 3, icon: MessageCircle, title: "Talk", desc: "Show up as you are. Be heard. Leave lighter." })
      ] })
    ] }) })
  ] });
}
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-5 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5" }), title: "Peer Listening", desc: "Trained peer listeners who hold space without judgment. Text or voice. 25–30 minutes.", to: "/peer-support" }) }) });
}
function ServiceCard({
  icon,
  title,
  desc,
  to
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-3xl border border-border bg-card p-8 hover:border-primary/40 transition", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-11 w-11 rounded-full bg-primary/12 text-primary flex items-center justify-center", children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: desc }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, className: "mt-6 inline-flex items-center gap-2 text-sm text-primary font-medium", children: [
      "Learn more ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition" })
    ] })
  ] });
}
function Counter({
  value,
  label
}) {
  const [n, setN] = reactExports.useState(0);
  reactExports.useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1200;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-5xl text-primary", children: n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: label })
  ] });
}
function Impact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 py-20 mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl sm:text-4xl", children: "Our quiet impact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Every number here is a person who chose to speak." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { value: 19, label: "Sessions held" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { value: 11, label: "People heard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { value: 5, label: "Listeners active" })
    ] })
  ] }) });
}
function Testimonials() {
  const [reviews, setReviews] = reactExports.useState([]);
  reactExports.useEffect(() => {
    supabase.from("session_feedback").select("rating, comment, created_at").not("comment", "is", null).gte("rating", 4).order("created_at", {
      ascending: false
    }).limit(6).then(({
      data
    }) => {
      if (data && data.length > 0) setReviews(data);
    });
  }, []);
  const hardcoded = [{
    q: "I didn't realize how much I needed someone to just listen. No advice. Just listening.",
    a: "— University student, Dhaka"
  }, {
    q: "I was scared to call. I'm so glad I did. They didn't make me feel small.",
    a: "— Anonymous"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-5 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl sm:text-4xl", children: "In their own words" }),
      reviews.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Real feedback from real sessions." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-3", children: reviews.length > 0 ? reviews.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mb-3", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-lg ${r.rating >= star ? "text-yellow-400" : "text-muted-foreground/20"}`, children: "★" }, star)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-serif text-lg leading-snug", children: [
        '"',
        r.comment,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "— Anonymous" })
    ] }, i)) : hardcoded.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-accent mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-serif text-lg leading-snug", children: [
        '"',
        t.q,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: t.a })
    ] }, i)) })
  ] });
}
export {
  Index as component
};
