"use strict";
const _libs__tanstack_queryCore = require("../_libs/tanstack__query-core.mjs");
const _libs__tanstack_reactQuery = require("../_libs/tanstack__react-query.mjs");
const _libs__tanstack_reactRouter = require("../_libs/tanstack__react-router.mjs");
const _libs_react = require("../_libs/react.mjs");
const _libs_sonner = require("../_libs/sonner.mjs");
const _libs__supabase_supabaseJs = require("../_libs/supabase__supabase-js.mjs");
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
require("../_libs/supabase__postgrest-js.mjs");
require("../_libs/supabase__realtime-js.mjs");
require("../_libs/supabase__phoenix.mjs");
require("../_libs/supabase__storage-js.mjs");
require("../_libs/iceberg-js.mjs");
require("../_libs/supabase__auth-js.mjs");
require("tslib");
require("../_libs/supabase__functions-js.mjs");
const appCss = "/assets/styles-Bqgxu2S4.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
    _libs_sonner.Toaster,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h1", { className: "font-serif text-6xl text-foreground", children: "404" }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "This page wandered off somewhere quiet." }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__tanstack_reactRouter.Link, { to: "/", className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90", children: "Back home" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = _libs__tanstack_reactRouter.useRouter();
  _libs_react.reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("h1", { className: "font-serif text-2xl text-foreground", children: "Something didn't load." }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "It's not you — let's try that again." }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-secondary", children: "Go home" })
    ] })
  ] }) });
}
const Route$8 = _libs__tanstack_reactRouter.createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Talk Nook — You can say what burdens you" },
      { name: "description", content: "Peer emotional support and basic health navigation in Bangladesh. Not therapy. A space to be heard." },
      { property: "og:title", content: "The Talk Nook — You can say what burdens you" },
      { property: "og:description", content: "Peer emotional support and basic health navigation in Bangladesh. Not therapy. A space to be heard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "The Talk Nook — You can say what burdens you" },
      { name: "twitter:description", content: "Peer emotional support and basic health navigation in Bangladesh. Not therapy. A space to be heard." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c7ed1fd3-1b5b-4754-8c97-e32343a274cd/id-preview-329eb026--924507dc-6719-42cc-b002-47d824f96add.lovable.app-1780224386083.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c7ed1fd3-1b5b-4754-8c97-e32343a274cd/id-preview-329eb026--924507dc-6719-42cc-b002-47d824f96add.lovable.app-1780224386083.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__tanstack_reactRouter.HeadContent, {}) }),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__tanstack_reactRouter.Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs(_libs__tanstack_reactQuery.QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__tanstack_reactRouter.Outlet, {}),
    /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(Toaster, {})
  ] });
}
const $$splitComponentImporter$7 = () => Promise.resolve().then(function() {
  return require("./talknook-admin-panel-DdZ8Ejdn.mjs");
});
const Route$7 = _libs__tanstack_reactRouter.createFileRoute("/talknook-admin-panel")({
  head: () => ({
    meta: [{
      title: "Admin — The Talk Nook"
    }, {
      name: "robots",
      content: "noindex,nofollow"
    }]
  }),
  component: _libs__tanstack_reactRouter.lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => Promise.resolve().then(function() {
  return require("./peer-support-CybGJ1By.mjs");
});
const Route$6 = _libs__tanstack_reactRouter.createFileRoute("/peer-support")({
  head: () => ({
    meta: [{
      title: "Peer Support — Talk Nook"
    }, {
      name: "description",
      content: "Talk to a trained peer listener. Text or voice. Not therapy — just being heard."
    }, {
      property: "og:title",
      content: "Peer Support — Talk Nook"
    }, {
      property: "og:description",
      content: "Trained peer listeners. Text or voice sessions."
    }]
  }),
  component: _libs__tanstack_reactRouter.lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => Promise.resolve().then(function() {
  return require("./health-navigation-DiC5Ms2v.mjs");
});
const Route$5 = _libs__tanstack_reactRouter.createFileRoute("/health-navigation")({
  head: () => ({
    meta: [{
      title: "Health Navigation — Talk Nook"
    }, {
      name: "description",
      content: "Trained medical students help you figure out which specialist to see. Not medical advice."
    }, {
      property: "og:title",
      content: "Health Navigation — Talk Nook"
    }, {
      property: "og:description",
      content: "Guidance from medical student volunteers. Not a diagnosis."
    }]
  }),
  component: _libs__tanstack_reactRouter.lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => Promise.resolve().then(function() {
  return require("./contact-BanQKGQr.mjs");
});
const Route$4 = _libs__tanstack_reactRouter.createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Talk Nook"
    }, {
      name: "description",
      content: "Get in touch with Talk Nook."
    }]
  }),
  component: _libs__tanstack_reactRouter.lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => Promise.resolve().then(function() {
  return require("./book-B8EpOnYn.mjs");
});
const Route$3 = _libs__tanstack_reactRouter.createFileRoute("/book")({
  validateSearch: (s) => ({
    s: s.s || void 0
  }),
  head: () => ({
    meta: [{
      title: "Book a Session — The Talk Nook"
    }, {
      name: "description",
      content: "Book a peer support or health navigation session."
    }]
  }),
  component: _libs__tanstack_reactRouter.lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => Promise.resolve().then(function() {
  return require("./about-CZVLg3v2.mjs");
});
const Route$2 = _libs__tanstack_reactRouter.createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Talk Nook"
    }, {
      name: "description",
      content: "Our mission to make emotional support accessible to everyone in Bangladesh — no appointments, no stigma."
    }, {
      property: "og:title",
      content: "About Talk Nook"
    }, {
      property: "og:description",
      content: "Making emotional support accessible to everyone in Bangladesh."
    }]
  }),
  component: _libs__tanstack_reactRouter.lazyRouteComponent($$splitComponentImporter$2, "component")
});
function createSupabaseClient() {
  const SUPABASE_URL = "https://wbniqxwcwygvtcushndo.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_-BRSvkudigQLeGhiu5N4Zg_Iw0v7TL-";
  return _libs__supabase_supabaseJs.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      storage: typeof window !== "undefined" ? localStorage : void 0,
      persistSession: true,
      autoRefreshToken: true
    }
  });
}
let _supabase;
const supabase = new Proxy({}, {
  get(_, prop, receiver) {
    if (!_supabase) _supabase = createSupabaseClient();
    return Reflect.get(_supabase, prop, receiver);
  }
});
const $$splitComponentImporter$1 = () => Promise.resolve().then(function() {
  return require("./index-RyOBDDSB.mjs");
});
const Route$1 = _libs__tanstack_reactRouter.createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "The Talk Nook — A space to be heard"
    }, {
      name: "description",
      content: "Peer emotional support in Bangladesh. Not therapy. No judgment."
    }, {
      property: "og:title",
      content: "The Talk Nook — A space to be heard"
    }, {
      property: "og:description",
      content: "Peer emotional support in Bangladesh."
    }]
  }),
  component: _libs__tanstack_reactRouter.lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => Promise.resolve().then(function() {
  return require("./chat._chatId-CmgOztNF.mjs");
});
const Route = _libs__tanstack_reactRouter.createFileRoute("/chat/$chatId")({
  head: () => ({
    meta: [{
      title: "Your chat — The Talk Nook"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: _libs__tanstack_reactRouter.lazyRouteComponent($$splitComponentImporter, "component")
});
const TalknookAdminPanelRoute = Route$7.update({
  id: "/talknook-admin-panel",
  path: "/talknook-admin-panel",
  getParentRoute: () => Route$8
});
const PeerSupportRoute = Route$6.update({
  id: "/peer-support",
  path: "/peer-support",
  getParentRoute: () => Route$8
});
const HealthNavigationRoute = Route$5.update({
  id: "/health-navigation",
  path: "/health-navigation",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const BookRoute = Route$3.update({
  id: "/book",
  path: "/book",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const ChatChatIdRoute = Route.update({
  id: "/chat/$chatId",
  path: "/chat/$chatId",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BookRoute,
  ContactRoute,
  HealthNavigationRoute,
  PeerSupportRoute,
  TalknookAdminPanelRoute,
  ChatChatIdRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new _libs__tanstack_queryCore.QueryClient();
  const router2 = _libs__tanstack_reactRouter.createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
exports.R = Route$3;
exports.a = Route;
exports.r = router;
exports.s = supabase;
