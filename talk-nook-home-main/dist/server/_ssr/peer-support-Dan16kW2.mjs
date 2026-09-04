"use strict";
const _libs_react = require("../_libs/react.mjs");
const _libs__tanstack_reactRouter = require("../_libs/tanstack__react-router.mjs");
const SiteShellCxrl0jzj = require("./SiteShell-Cxrl0jzj.mjs");
const accordionBK2cthPu = require("./accordion-BK2cthPu.mjs");
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
function PeerPage() {
  return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs(SiteShellCxrl0jzj.SiteShell, { children: [
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-3xl px-5 pt-16 pb-10", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-accent", children: "Peer Listening" }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h1", { className: "mt-3 font-serif text-4xl sm:text-5xl leading-tight", children: "A trained ear. No advice unless you ask." }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground text-lg", children: "Sometimes you don't need a solution — you need to feel less alone. That's what peer listening is for." })
    ] }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-3xl px-5", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-accent/40 bg-accent/8 p-6 flex gap-4", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs_lucideReact.Info, { className: "h-5 w-5 text-accent mt-0.5 flex-none" }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl", children: "This is not therapy or counselling." }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Our peer listeners are trained to hold space, listen actively, and respond with empathy. They are not licensed mental health professionals. If you need clinical care, we'll gently help you find it." })
      ] })
    ] }) }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl px-5 py-16", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl text-center mb-10", children: "How it works" }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-4", children: [["01", "Book", "Choose a session type and time."], ["02", "Pay via bKash", "Quick, manual confirmation."], ["03", "Get matched", "We pair you with a trained listener."], ["04", "Be heard", "Show up. We hold space."]].map(([n, t, d]) => /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5", children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "font-serif text-2xl text-primary/70", children: n }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "mt-2 font-serif text-lg", children: t }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: d })
      ] }, n)) })
    ] }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-4xl px-5", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl text-center mb-8", children: "Session Types" }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-7", children: [
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs_lucideReact.MessageCircle, { className: "h-6 w-6 text-primary" }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h3", { className: "mt-3 font-serif text-2xl", children: "Text Session" }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Real-time chat. 25 minutes. Type at your own pace." }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-baseline gap-2", children: [
            /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("span", { className: "font-serif text-3xl text-primary", children: "BDT 99" }),
            /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "/ session" })
          ] }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__tanstack_reactRouter.Link, { to: "/book", search: {
            s: "text_peer"
          }, className: "mt-6 inline-block rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90", children: "Book text session" })
        ] }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-7", children: [
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs_lucideReact.Phone, { className: "h-6 w-6 text-primary" }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h3", { className: "mt-3 font-serif text-2xl", children: "Voice Session" }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Via Google Meet link. 30 minutes. Hear and be heard." }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-baseline gap-2", children: [
            /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("span", { className: "font-serif text-3xl text-primary", children: "BDT 149" }),
            /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "/ session" })
          ] }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__tanstack_reactRouter.Link, { to: "/book", search: {
            s: "voice_peer"
          }, className: "mt-6 inline-block rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90", children: "Book voice session" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-3xl px-5 py-20", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl text-center mb-8", children: "Common questions" }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(accordionBK2cthPu.Accordion, { type: "single", collapsible: true, className: "space-y-2", children: [["Is this confidential?", "Yes. Sessions are private between you and your listener. We never share your conversation."], ["Can I be anonymous?", "Yes. You can choose to share only a first name or stay completely anonymous."], ["What if I need a therapist?", "If your listener feels you'd benefit from clinical care, they'll gently let you know and help you find resources."], ["What if I miss my session?", "Reach out to us and we'll do our best to reschedule."]].map(([q, a]) => /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs(accordionBK2cthPu.AccordionItem, { value: q, className: "rounded-2xl border border-border bg-card px-5", children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(accordionBK2cthPu.AccordionTrigger, { className: "text-left font-serif text-base", children: q }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(accordionBK2cthPu.AccordionContent, { className: "text-muted-foreground", children: a })
      ] }, q)) }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__tanstack_reactRouter.Link, { to: "/book", className: "inline-block rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm font-medium hover:opacity-90", children: "Book a session" }) })
    ] })
  ] });
}
exports.component = PeerPage;
