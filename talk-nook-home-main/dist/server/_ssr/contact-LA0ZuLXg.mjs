import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteShell } from "./SiteShell-C6-qY__4.mjs";
import { s as supabase } from "./client-Xq59pGEw.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { i as Mail, F as Facebook } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
function ContactPage() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = reactExports.useState(false);
  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return toast.error("অনুগ্রহ করে সবগুলো ঘর পূরণ করুন।");
    setLoading(true);
    const {
      error
    } = await supabase.from("contact_messages").insert(form);
    setLoading(false);
    if (error) return toast.error(error.message);
    toast.success("ধন্যবাদ। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করবো।");
    setForm({
      name: "",
      email: "",
      message: ""
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-3xl px-5 pt-16 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-accent", children: "যোগাযোগ" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-serif text-4xl sm:text-5xl leading-snug", children: "যোগাযোগ করুন" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "আমরা সাধারণত এক থেকে দুইদিনের মাঝে প্রতিটি মেসেজের জবাব দেই।" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-8 md:grid-cols-[1fr,300px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "rounded-3xl border border-border bg-card p-7 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm", children: "আপনার নাম" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5", value: form.name, onChange: (e) => setForm({
            ...form,
            name: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm", children: "ইমেইল" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", className: "mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5", value: form.email, onChange: (e) => setForm({
            ...form,
            email: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm", children: "আপনার বার্তা" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, className: "mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5", value: form.message, onChange: (e) => setForm({
            ...form,
            message: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: loading, className: "rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:opacity-90 disabled:opacity-50", children: loading ? "পাঠানো হচ্ছে..." : "সেন্ড মেসেজ" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:thetalknook@proton.me", className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:border-primary/40 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "ইমেইল" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: "thetalknook@proton.me" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.facebook.com/thetalknook", target: "_blank", rel: "noreferrer", className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:border-primary/40 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "ফেসবুক" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: "@thetalknook" })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  ContactPage as component
};
