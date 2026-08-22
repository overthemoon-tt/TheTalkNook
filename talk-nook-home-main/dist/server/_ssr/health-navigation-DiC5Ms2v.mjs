"use strict";
const _libs_react = require("../_libs/react.mjs");
const _libs__tanstack_reactRouter = require("../_libs/tanstack__react-router.mjs");
const SiteShellCxrl0jzj = require("./SiteShell-Cxrl0jzj.mjs");
const accordion0YUX3eCL = require("./accordion-0YUX3eCL.mjs");
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
require("../_libs/radix-ui__react-accordion.mjs");
require("../_libs/radix-ui__react-context.mjs");
require("../_libs/radix-ui__react-collection.mjs");
require("../_libs/radix-ui__react-compose-refs.mjs");
require("../_libs/radix-ui__react-slot.mjs");
require("../_libs/radix-ui__primitive.mjs");
require("../_libs/@radix-ui/react-use-controllable-state+[...].mjs");
require("../_libs/@radix-ui/react-use-layout-effect+[...].mjs");
require("../_libs/radix-ui__react-primitive.mjs");
require("../_libs/radix-ui__react-collapsible.mjs");
require("../_libs/radix-ui__react-presence.mjs");
require("../_libs/radix-ui__react-id.mjs");
require("../_libs/radix-ui__react-direction.mjs");
require("./utils-H80jjgLf.mjs");
require("../_libs/clsx.mjs");
require("../_libs/tailwind-merge.mjs");
function HealthPage() {
  return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs(SiteShellCxrl0jzj.SiteShell, { children: [
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-3xl px-5 pt-16 pb-10", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-accent", children: "Health Navigation" }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h1", { className: "mt-3 font-serif text-4xl sm:text-5xl leading-tight", children: "Confused about where to start? We'll help you figure it out." }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground text-lg", children: "Talk to a trained medical student. They'll help you understand your symptoms and which kind of doctor to consult — without ever diagnosing you." })
    ] }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-3xl px-5", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-destructive/50 bg-destructive/5 p-6 flex gap-4", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs_lucideReact.TriangleAlert, { className: "h-5 w-5 text-destructive mt-0.5 flex-none" }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl text-destructive", children: "Important disclaimer" }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-foreground", children: "This service does not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional. If you are experiencing a medical emergency, please go to the nearest hospital immediately." })
      ] })
    ] }) }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl px-5 py-16", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl text-center mb-10", children: "How it works" }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-3", children: [[_libs_lucideReact.Search, "Ask", "Tell us what's going on — symptoms, worries, confusion."], [_libs_lucideReact.UserCheck, "Connect", "Chat with a trained medical student volunteer."], [_libs_lucideReact.Stethoscope, "Navigate", "Get pointed toward the right specialist — never a diagnosis."]].map(([Icon, t, d], i) => /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "mt-3 font-serif text-lg", children: t }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: d })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-3xl px-5", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl", children: "Which specialist should I see?" }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "We help you map symptoms to the right type of doctor — GP, dermatologist, gastroenterologist, and more." })
      ] }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl", children: "Should I go to the hospital right now?" }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "We help you understand urgency — but if in doubt, always go to the hospital." })
      ] })
    ] }) }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-3xl px-5 py-16", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl", children: "Our medical student volunteers" }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Our navigators are medical students from leading institutions in Bangladesh, trained in active listening, basic clinical reasoning, and the ethical limits of their role. They will never diagnose, prescribe, or replace your doctor." })
    ] }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-3xl px-5 pb-20", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl text-center mb-8", children: "Common questions" }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(accordion0YUX3eCL.Accordion, { type: "single", collapsible: true, className: "space-y-2", children: [["Can I get a diagnosis here?", "No. Our navigators do not diagnose, prescribe, or replace a doctor."], ["Is this confidential?", "Yes. Conversations stay between you and the navigator."], ["What if it's urgent?", "If you think this is an emergency, go to the nearest hospital immediately."]].map(([q, a]) => /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs(accordion0YUX3eCL.AccordionItem, { value: q, className: "rounded-2xl border border-border bg-card px-5", children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs(accordion0YUX3eCL.AccordionTrigger, { className: "text-left font-serif text-base flex items-center gap-2", children: [
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs_lucideReact.CircleQuestionMark, { className: "h-4 w-4 text-primary" }),
          " ",
          q
        ] }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(accordion0YUX3eCL.AccordionContent, { className: "text-muted-foreground", children: a })
      ] }, q)) }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__tanstack_reactRouter.Link, { to: "/book", search: {
        s: "text_health"
      }, className: "inline-block rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm font-medium hover:opacity-90", children: "Get health guidance" }) })
    ] })
  ] });
}
exports.component = HealthPage;
