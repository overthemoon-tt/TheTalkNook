"use strict";
const _libs_react = require("../_libs/react.mjs");
const SiteShellCxrl0jzj = require("./SiteShell-Cxrl0jzj.mjs");
const _libs_lucideReact = require("../_libs/lucide-react.mjs");
require("../_libs/tanstack__react-router.mjs");
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
function AboutPage() {
  return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs(SiteShellCxrl0jzj.SiteShell, { children: [
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-3xl px-5 pt-20 pb-16", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-accent", children: "About us" }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h1", { className: "mt-4 font-serif text-4xl sm:text-5xl leading-tight", children: "Being truly heard is a basic human need — not a luxury." })
    ] }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-3xl px-5 pb-12", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl mb-4", children: "Our Mission" }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "At Talk Nook, our mission is to make emotional support accessible to everyone in Bangladesh — no appointments, no stigma, no judgment. We believe that being truly heard is a basic human need, not a luxury. Through trained peer listeners and guided health navigation, we create a safe space where anyone — regardless of age, background, or circumstance — can show up exactly as they are, and leave feeling a little less alone." }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl mt-10 mb-4", children: "Our Vision" }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We envision a Bangladesh where no one suffers in silence. A future where asking for support is as normal as asking for directions — where mental wellness is part of everyday conversation, not a whispered secret. Talk Nook aims to build the largest community-driven emotional support network in the country, one honest conversation at a time." })
    ] }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl px-5 pb-24", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl text-center mb-10", children: "Our Values" }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "grid gap-5 grid-cols-2 md:grid-cols-4", children: [{
        icon: _libs_lucideReact.Heart,
        label: "Empathy"
      }, {
        icon: _libs_lucideReact.Lock,
        label: "Confidentiality"
      }, {
        icon: _libs_lucideReact.HandHeart,
        label: "Accessibility"
      }, {
        icon: _libs_lucideReact.Sparkles,
        label: "Non-Judgment"
      }].map((v) => /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 text-center", children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("span", { className: "h-11 w-11 rounded-full bg-primary/12 text-primary mx-auto flex items-center justify-center", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(v.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "mt-4 font-serif text-lg", children: v.label })
      ] }, v.label)) })
    ] })
  ] });
}
exports.component = AboutPage;
