globalThis.__nitro_main__ = import.meta.url;
import { N as NodeResponse, s as serve } from "./_libs/srvx.mjs";
import { H as HTTPError, d as defineHandler, t as toEventHandler, a as defineLazyEventHandler, b as H3Core } from "./_libs/h3.mjs";
import { d as decodePath, w as withLeadingSlash, a as withoutTrailingSlash, j as joinURL } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "./_libs/rou3.mjs";
function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
const headers = ((m) => function headersRouteRule(event) {
  for (const [key2, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key2, value);
  }
});
const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"8028-RMLo7lQ/C97RVs0wQCiSEUN4G6c"',
    "mtime": "2026-06-01T06:45:10.418Z",
    "size": 32808,
    "path": "../client/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"69-Kkggy7GD8KmwPVArO4TFeroACLA"',
    "mtime": "2026-08-24T18:25:24.485Z",
    "size": 105,
    "path": "../client/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": '"2b8-ZwVvqctYrMHzKE8Wc7FWEbEhuj0"',
    "mtime": "2026-08-24T18:27:27.648Z",
    "size": 696,
    "path": "../client/sitemap.xml"
  },
  "/assets/about-BzXu-i0U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e0b-SdHXKJ2zcNt/ct3wxtQbrtIZ1qs"',
    "mtime": "2026-10-16T06:14:46.127Z",
    "size": 3595,
    "path": "../client/assets/about-BzXu-i0U.js"
  },
  "/assets/accordion-D6ApiQV1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2440-q/o3m+B7fpBCHPLlTl5bqGGCO3Q"',
    "mtime": "2026-10-16T06:14:46.127Z",
    "size": 9280,
    "path": "../client/assets/accordion-D6ApiQV1.js"
  },
  "/assets/book-DCdtTuF4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4424-bnn6jnhaVZFIxgviLvVQq5rZP1U"',
    "mtime": "2026-10-16T06:14:46.127Z",
    "size": 17444,
    "path": "../client/assets/book-DCdtTuF4.js"
  },
  "/assets/chat._chatId-DKjcSaXI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b3a0-/2LJ6Z+c3Xuva711aAAFNU0qy3Q"',
    "mtime": "2026-10-16T06:14:46.127Z",
    "size": 45984,
    "path": "../client/assets/chat._chatId-DKjcSaXI.js"
  },
  "/assets/circle-alert-C75NIoju.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"106-St9mSE1ptFf3PpwvYq8+yA8/y3c"',
    "mtime": "2026-10-16T06:14:46.127Z",
    "size": 262,
    "path": "../client/assets/circle-alert-C75NIoju.js"
  },
  "/assets/client-jxe03CZ8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"32e36-OMoQc+nSM6cyJ+ZM9yELRYygLiw"',
    "mtime": "2026-10-16T06:14:46.129Z",
    "size": 208438,
    "path": "../client/assets/client-jxe03CZ8.js"
  },
  "/assets/createLucideIcon-CoWS0kAQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4b2-W7NXl7XBy9UxW9HNOOKcjQM2kaQ"',
    "mtime": "2026-10-16T06:14:46.127Z",
    "size": 1202,
    "path": "../client/assets/createLucideIcon-CoWS0kAQ.js"
  },
  "/assets/health-navigation-CEi1ZtgA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1574-54F17M1BOa94rLMS10gLwQHemsE"',
    "mtime": "2026-10-16T06:14:46.127Z",
    "size": 5492,
    "path": "../client/assets/health-navigation-CEi1ZtgA.js"
  },
  "/assets/index-f_C5DVfR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7d8-Yx64uB8dIbC08DPSsDVBL1ZRLRk"',
    "mtime": "2026-10-16T06:14:46.127Z",
    "size": 2008,
    "path": "../client/assets/index-f_C5DVfR.js"
  },
  "/assets/contact-9obPClug.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-9g9csA0zHQFWLwo0/nRooHqfn/s"',
    "mtime": "2026-10-16T06:14:46.127Z",
    "size": 3159,
    "path": "../client/assets/contact-9obPClug.js"
  },
  "/assets/index-DGwteNXj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a37-ykWrnPXMCvVMWSQimGUOoZiPK1s"',
    "mtime": "2026-10-16T06:14:46.127Z",
    "size": 6711,
    "path": "../client/assets/index-DGwteNXj.js"
  },
  "/assets/message-circle-lKN9DTzm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fd-h2ShAdmertJEh35J6Ze/SCGDXjI"',
    "mtime": "2026-10-16T06:14:46.127Z",
    "size": 253,
    "path": "../client/assets/message-circle-lKN9DTzm.js"
  },
  "/assets/peer-support-Dlu8tpBb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1493-LFXH8PMKFMHQS8CGjP1VR3EN1iU"',
    "mtime": "2026-10-16T06:14:46.127Z",
    "size": 5267,
    "path": "../client/assets/peer-support-Dlu8tpBb.js"
  },
  "/assets/phone-4qk3h3om.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14e-SF2Za0N9iCrM6nonTxad6gyb24k"',
    "mtime": "2026-10-16T06:14:46.127Z",
    "size": 334,
    "path": "../client/assets/phone-4qk3h3om.js"
  },
  "/assets/index-DDs3_wHu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5f2e9-QxE18fbyIhRbEaedAhPtpGJTMvs"',
    "mtime": "2026-10-16T06:14:46.127Z",
    "size": 389865,
    "path": "../client/assets/index-DDs3_wHu.js"
  },
  "/assets/styles-BwmkEffB.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"14938-qvHqDvznAXL8F4tVM277JYD3ZaY"',
    "mtime": "2026-10-16T06:14:46.126Z",
    "size": 84280,
    "path": "../client/assets/styles-BwmkEffB.css"
  },
  "/public/_routes.json": {
    "type": "application/json",
    "etag": '"44-hDnBW6E/py1yn8eBKrOtcOgv+FE"',
    "mtime": "2026-06-11T08:16:44.870Z",
    "size": 68,
    "path": "../client/public/_routes.json"
  },
  "/assets/utils-DCADjnpI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6b9b-tSfrzcIHWeVNKawNWV0bEDmYWfc"',
    "mtime": "2026-10-16T06:14:46.127Z",
    "size": 27547,
    "path": "../client/assets/utils-DCADjnpI.js"
  },
  "/assets/talknook-admin-panel-6ZbIi2qz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"42b6-gzu/ZtblWGpfRZVCe5Q9VIg5d3I"',
    "mtime": "2026-10-16T06:14:46.127Z",
    "size": 17078,
    "path": "../client/assets/talknook-admin-panel-6ZbIi2qz.js"
  },
  "/assets/search-18uu5MhL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b5-Tn7+rrZZLvZiVpvCkHsPPNCGfSU"',
    "mtime": "2026-10-16T06:14:46.127Z",
    "size": 181,
    "path": "../client/assets/search-18uu5MhL.js"
  },
  "/assets/SiteShell-Cf9Z7v0q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"17f4-kHVSEQ6zO3L1mIzfcajbJ0l5gXk"',
    "mtime": "2026-10-16T06:14:46.127Z",
    "size": 6132,
    "path": "../client/assets/SiteShell-Cf9Z7v0q.js"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve(serverDir, assets[id].path));
}
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
function getAsset(id) {
  return assets[id];
}
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
  gzip: ".gz",
  br: ".br",
  zstd: ".zst"
};
const _QHEYcw = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_ow2vq5 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_ow2vq5 };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const globalMiddleware = [
  toEventHandler(_QHEYcw)
].filter(Boolean);
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function createNitroApp() {
  const hooks = void 0;
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({
          error,
          context: errorCtx
        });
      }
    }
  };
  const h3App = createH3App({ onError(error, event) {
    return errorHandler(error, event);
  } });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  const app = {
    fetch: appHandler,
    h3: h3App,
    hooks,
    captureError
  };
  return app;
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~middleware"].push(...globalMiddleware);
  {
    h3App["~getMiddleware"] = (event, route) => {
      const pathname = event.url.pathname;
      const method = event.req.method;
      const middleware = [];
      {
        const routeRules = getRouteRules(method, pathname);
        event.context.routeRules = routeRules?.routeRules;
        if (routeRules?.routeRuleMiddleware.length) {
          middleware.push(...routeRules.routeRuleMiddleware);
        }
      }
      middleware.push(...h3App["~middleware"]);
      if (route?.data?.middleware?.length) {
        middleware.push(...route.data.middleware);
      }
      return middleware;
    };
  }
  return h3App;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
  process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
  process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
const tracingSrvxPlugins = [];
const _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
const port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
serve({
  port,
  hostname: host,
  tls: cert && key ? {
    cert,
    key
  } : void 0,
  fetch: nitroApp.fetch,
  plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
const nodeServer = {};
export {
  nodeServer as default
};
