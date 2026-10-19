import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteShell } from "./SiteShell-C6-qY__4.mjs";
import { e as MessageCircle } from "../_libs/lucide-react.mjs";
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
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-float-slow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-32 -right-10 h-80 w-80 rounded-full bg-accent/15 blur-3xl animate-float-slower" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-secondary/60 blur-3xl animate-float-slow" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-5 pt-20 pb-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs text-muted-foreground bg-secondary/60 px-3 py-1 rounded-full", children: "বাংলাদেশ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-8 font-serif text-foreground animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xl sm:text-2xl md:text-3xl font-semibold leading-snug text-foreground/80", children: "মনের কথাগুলো কি ঠিক গুছিয়ে উঠতে পারছেন না?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-5 block text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.35] text-primary", children: [
          "এলোমেলো ভাবেই বলুন নাহয়। ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", {}),
          "আমরা শুনবো, সবটুকু"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-xl mx-auto", children: "একটি নিরাপদ, judgement free জায়গা, যেখানে প্রশিক্ষিত একজন লিসেনার আপনার পাশে থাকেন।" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-9 flex flex-col sm:flex-row gap-3 justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/book", search: {
        s: "text_peer"
      }, className: "group inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:opacity-90 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
        " কথা বলুন"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs text-muted-foreground", children: "এটি থেরাপি নয়। চিকিৎসা পরামর্শও নয়।" })
    ] })
  ] });
}
export {
  Index as component
};
