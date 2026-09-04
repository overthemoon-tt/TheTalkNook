"use strict";
const _libs_react = require("../_libs/react.mjs");
const SiteShellCxrl0jzj = require("./SiteShell-Cxrl0jzj.mjs");
const routerKFaBQ86c = require("./router-kFaBQ86c.mjs");
const _libs_sonner = require("../_libs/sonner.mjs");
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
function ContactPage() {
  const [form, setForm] = _libs_react.reactExports.useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = _libs_react.reactExports.useState(false);
  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return _libs_sonner.toast.error("Please fill all fields.");
    setLoading(true);
    const {
      error
    } = await routerKFaBQ86c.s.from("contact_messages").insert(form);
    setLoading(false);
    if (error) return _libs_sonner.toast.error(error.message);
    _libs_sonner.toast.success("Thank you. We'll get back to you soon.");
    setForm({
      name: "",
      email: "",
      message: ""
    });
  };
  return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(SiteShellCxrl0jzj.SiteShell, { children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-3xl px-5 pt-16 pb-20", children: [
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-accent", children: "Contact" }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h1", { className: "mt-3 font-serif text-4xl sm:text-5xl leading-tight", children: "Say hello." }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "We respond to every message — usually within a day or two." }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-8 md:grid-cols-[1fr,300px]", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "rounded-3xl border border-border bg-card p-7 space-y-4", children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("label", { className: "text-sm", children: "Your name" }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("input", { className: "mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5", value: form.name, onChange: (e) => setForm({
            ...form,
            name: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("label", { className: "text-sm", children: "Email" }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("input", { type: "email", className: "mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5", value: form.email, onChange: (e) => setForm({
            ...form,
            email: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("label", { className: "text-sm", children: "Message" }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("textarea", { rows: 5, className: "mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5", value: form.message, onChange: (e) => setForm({
            ...form,
            message: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("button", { disabled: loading, className: "rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:opacity-90 disabled:opacity-50", children: loading ? "Sending..." : "Send message" })
      ] }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("a", { href: "mailto:thetalknook@proton.me", className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:border-primary/40 transition", children: [
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs_lucideReact.Mail, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Email" }),
            /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "text-sm", children: "thetalknook@proton.me" })
          ] })
        ] }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("a", { href: "https://www.facebook.com/thetalknook", target: "_blank", rel: "noreferrer", className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:border-primary/40 transition", children: [
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs_lucideReact.Facebook, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Facebook" }),
            /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "text-sm", children: "@thetalknook" })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
exports.component = ContactPage;
