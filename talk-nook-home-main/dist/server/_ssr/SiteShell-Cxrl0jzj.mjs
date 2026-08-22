"use strict";
const _libs_react = require("../_libs/react.mjs");
const _libs__tanstack_reactRouter = require("../_libs/tanstack__react-router.mjs");
const _libs_lucideReact = require("../_libs/lucide-react.mjs");
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/peer-support", label: "Peer Support" },
  { to: "/health-navigation", label: "Health Navigation" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader() {
  const path = _libs__tanstack_reactRouter.useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = _libs_react.reactExports.useState(false);
  return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border/60", children: [
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs(_libs__tanstack_reactRouter.Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("span", { className: "h-8 w-8 rounded-full bg-primary/15 flex items-center justify-center", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-primary" }) }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("span", { className: "font-serif text-xl text-foreground", children: "The Talk Nook" })
      ] }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-7 text-sm", children: [
        nav.map((n) => /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
          _libs__tanstack_reactRouter.Link,
          {
            to: n.to,
            className: `transition-colors hover:text-foreground ${path === n.to ? "text-foreground font-medium" : "text-muted-foreground"}`,
            children: n.label
          },
          n.to
        )),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
          _libs__tanstack_reactRouter.Link,
          {
            to: "/book",
            className: "px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm hover:opacity-90 transition",
            children: "Book a Session"
          }
        )
      ] }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("button", { className: "md:hidden", onClick: () => setOpen(!open), "aria-label": "Toggle menu", children: open ? /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs_lucideReact.X, {}) : /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs_lucideReact.Menu, {}) })
    ] }),
    open && /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "md:hidden border-t border-border/60 bg-background", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 flex flex-col gap-3", children: [
      nav.map((n) => /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__tanstack_reactRouter.Link, { to: n.to, onClick: () => setOpen(false), className: "text-foreground py-1", children: n.label }, n.to)),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__tanstack_reactRouter.Link, { to: "/book", onClick: () => setOpen(false), className: "mt-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-center", children: "Book a Session" })
    ] }) })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("footer", { className: "mt-24 border-t border-border/60 bg-secondary/40", children: [
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 py-12 grid gap-10 md:grid-cols-4", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("span", { className: "h-8 w-8 rounded-full bg-primary/15 flex items-center justify-center", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-primary" }) }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("span", { className: "font-serif text-xl", children: "The Talk Nook" })
        ] }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: "A safe, judgment-free space to be heard. Based in Bangladesh." }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-3", children: [
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("a", { href: "https://www.facebook.com/thetalknook", target: "_blank", rel: "noreferrer", className: "h-9 w-9 rounded-full bg-background border border-border flex items-center justify-center hover:text-primary transition", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs_lucideReact.Facebook, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("a", { href: "#", className: "h-9 w-9 rounded-full bg-background border border-border flex items-center justify-center hover:text-primary transition", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs_lucideReact.Linkedin, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold mb-3", children: "Explore" }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__tanstack_reactRouter.Link, { to: "/about", className: "hover:text-foreground", children: "About" }) }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__tanstack_reactRouter.Link, { to: "/peer-support", className: "hover:text-foreground", children: "Peer Support" }) }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__tanstack_reactRouter.Link, { to: "/health-navigation", className: "hover:text-foreground", children: "Health Navigation" }) }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__tanstack_reactRouter.Link, { to: "/contact", className: "hover:text-foreground", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold mb-3", children: "Join Us" }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__tanstack_reactRouter.Link, { to: "/contact", className: "hover:text-foreground", children: "Become a Listener" }) }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__tanstack_reactRouter.Link, { to: "/contact", className: "hover:text-foreground", children: "Become a Navigator" }) }),
          /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__tanstack_reactRouter.Link, { to: "/contact", className: "hover:text-foreground", children: "Partnerships" }) })
        ] })
      ] }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold mb-3", children: "Reach Us" }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "thetalknook@proton.me" }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground leading-relaxed", children: "Talk Nook is not a medical or mental health service provider." })
      ] })
    ] }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "border-t border-border/60", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-3", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        "The Talk Nook. All rights reserved."
      ] }),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Privacy" }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Terms" }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Disclaimers" })
      ] })
    ] }) })
  ] });
}
function SiteShell({ children }) {
  return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
exports.SiteShell = SiteShell;
