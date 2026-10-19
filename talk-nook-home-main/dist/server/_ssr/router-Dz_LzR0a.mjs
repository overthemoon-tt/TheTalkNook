import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
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
const appCss = "/assets/styles-DzCI-SMJ.css";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-6xl text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "এই পাতাটি কোনো নিরিবিলি জায়গায় হারিয়ে গেছে।" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90", children: "হোমে ফিরে যান" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-2xl text-foreground", children: "কিছু একটা লোড হয়নি।" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "এটা আপনার দোষ নয় — চলুন আবার চেষ্টা করি।" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90",
          children: "আবার চেষ্টা করুন"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-secondary", children: "হোমে যান" })
    ] })
  ] }) });
}
const TITLE = "The Talk Nook — আপনার মনের ভারের কথা বলতে পারেন";
const DESCRIPTION = "এটি থেরাপি নয়। নিজের কথা বলার এবং শোনা হওয়ার একটি জায়গা।";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c7ed1fd3-1b5b-4754-8c97-e32343a274cd/id-preview-329eb026--924507dc-6719-42cc-b002-47d824f96add.lovable.app-1780224386083.png";
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Serif+Bengali:wght@400;500;600;700&display=swap" }
    ],
    scripts: [
      { src: "https://www.googletagmanager.com/gtag/js?id=G-6DVLQHZ9LZ", async: true },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6DVLQHZ9LZ');
        `
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "bn", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] });
}
const $$splitComponentImporter$7 = () => import("./talknook-admin-panel-DggxNt35.mjs");
const Route$7 = createFileRoute("/talknook-admin-panel")({
  head: () => ({
    meta: [{
      title: "Admin — The Talk Nook"
    }, {
      name: "robots",
      content: "noindex,nofollow"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./peer-support-C4Ct4PYk.mjs");
const Route$6 = createFileRoute("/peer-support")({
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
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./health-navigation-DaJ7v5Qg.mjs");
const Route$5 = createFileRoute("/health-navigation")({
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
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-LA0ZuLXg.mjs");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "যোগাযোগ — Talk Nook"
    }, {
      name: "description",
      content: "Talk Nook-এর সাথে যোগাযোগ করুন।"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./book-YaZfcRpt.mjs");
const Route$3 = createFileRoute("/book")({
  validateSearch: (s) => ({
    s: s.s || void 0
  }),
  head: () => ({
    meta: [{
      title: "কথা বলুন — The Talk Nook"
    }, {
      name: "description",
      content: "পিয়ার লিসেনিং সেশনে লিসেনারের সাথে কথা বলুন।"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./about-DfMfuuJE.mjs");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "আমাদের সম্পর্কে — Talk Nook"
    }, {
      name: "description",
      content: "বাংলাদেশের সবার জন্য মানসিক সহায়তা সহজলভ্য করাই আমাদের উদ্দেশ্য।"
    }, {
      property: "og:title",
      content: "আমাদের সম্পর্কে — Talk Nook"
    }, {
      property: "og:description",
      content: "বাংলাদেশের সবার জন্য মানসিক সহায়তা সহজলভ্য করা।"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-4_J9kBAQ.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "The Talk Nook — নিজের কথা বলার একটি জায়গা"
    }, {
      name: "description",
      content: "এটি থেরাপি নয়। কোনো judgement or advice নেই।"
    }, {
      property: "og:title",
      content: "The Talk Nook — নিজের কথা বলার একটি জায়গা"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./chat._chatId-DpO_7Aj4.mjs");
const Route = createFileRoute("/chat/$chatId")({
  head: () => ({
    meta: [{
      title: "আপনার চ্যাট — The Talk Nook"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
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
  const queryClient = new QueryClient();
  const router2 = createRouter({
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
export {
  Route$3 as R,
  Route as a,
  router as r
};
