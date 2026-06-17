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
  "/assets/about-BCjQUwgq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d68-BojlRjfw1l7znBOyRhSLuUKB7JQ"',
    "mtime": "2026-06-17T10:58:15.392Z",
    "size": 3432,
    "path": "../client/assets/about-BCjQUwgq.js"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"8028-RMLo7lQ/C97RVs0wQCiSEUN4G6c"',
    "mtime": "2026-06-01T06:45:10.418Z",
    "size": 32808,
    "path": "../client/favicon.ico"
  },
  "/assets/accordion-C3_G_mLw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2440-gv1JdI931da1z88vfCU2+EiKhoE"',
    "mtime": "2026-06-17T10:58:15.392Z",
    "size": 9280,
    "path": "../client/assets/accordion-C3_G_mLw.js"
  },
  "/assets/contact-DMDZWu5J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c35-AhwFja6azibI8/oMs7mlPqGX+Rk"',
    "mtime": "2026-06-17T10:58:15.392Z",
    "size": 3125,
    "path": "../client/assets/contact-DMDZWu5J.js"
  },
  "/assets/circle-alert-CvJ8ySaE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"106-mAWoux4q41AXHH5mKLV126tyXzs"',
    "mtime": "2026-06-17T10:58:15.392Z",
    "size": 262,
    "path": "../client/assets/circle-alert-CvJ8ySaE.js"
  },
  "/assets/createLucideIcon-B6GWedN7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4b2-6hKg08SJCE9GQG2IKBV2SYQVE8A"',
    "mtime": "2026-06-17T10:58:15.392Z",
    "size": 1202,
    "path": "../client/assets/createLucideIcon-B6GWedN7.js"
  },
  "/assets/book-DvnpbyBt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"333a-vDi/IMnuOx9ot0p69QU936v3zas"',
    "mtime": "2026-06-17T10:58:15.392Z",
    "size": 13114,
    "path": "../client/assets/book-DvnpbyBt.js"
  },
  "/assets/arrow-right-i2ux-hhR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b1-cCI2rNGthtBzCNbJl1L6w0ev5gk"',
    "mtime": "2026-06-17T10:58:15.392Z",
    "size": 177,
    "path": "../client/assets/arrow-right-i2ux-hhR.js"
  },
  "/assets/health-navigation-3edw1WNb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14e5-KcxD+pL7u4SPRpwv1H+FCVbT1Ek"',
    "mtime": "2026-06-17T10:58:15.392Z",
    "size": 5349,
    "path": "../client/assets/health-navigation-3edw1WNb.js"
  },
  "/assets/heart-DzFmIU-S.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10e-MATaK6W/qo6sLP0iO/Co2I/THOg"',
    "mtime": "2026-06-17T10:58:15.392Z",
    "size": 270,
    "path": "../client/assets/heart-DzFmIU-S.js"
  },
  "/assets/chat._chatId-YbR5PA7r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b37e-SVl6JnpHU5FjRAoAT2QK6e2ThwM"',
    "mtime": "2026-06-17T10:58:15.392Z",
    "size": 45950,
    "path": "../client/assets/chat._chatId-YbR5PA7r.js"
  },
  "/assets/index-Bh0ey6rc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ec5-WcWlofJmSK34yGx/dFtjeTePwfo"',
    "mtime": "2026-06-17T10:58:15.392Z",
    "size": 7877,
    "path": "../client/assets/index-Bh0ey6rc.js"
  },
  "/assets/index-CavKdXgE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a37-rf6+2YsKaTkjucEvRDfpMhGAmiM"',
    "mtime": "2026-06-17T10:58:15.392Z",
    "size": 6711,
    "path": "../client/assets/index-CavKdXgE.js"
  },
  "/assets/message-circle-hP5daksW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fd-2gXZsakBExUKL4Eqyp768Z4Hxmo"',
    "mtime": "2026-06-17T10:58:15.392Z",
    "size": 253,
    "path": "../client/assets/message-circle-hP5daksW.js"
  },
  "/assets/phone-D10VCZXt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14e-cbrBTw0+Sg8+YS/yuofcFG2vYNc"',
    "mtime": "2026-06-17T10:58:15.392Z",
    "size": 334,
    "path": "../client/assets/phone-D10VCZXt.js"
  },
  "/assets/search-DbFbc7EN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b5-oys6K4/WLzBhQjpYfcB56yCxnQI"',
    "mtime": "2026-06-17T10:58:15.392Z",
    "size": 181,
    "path": "../client/assets/search-DbFbc7EN.js"
  },
  "/assets/SiteShell-BMT_-3kv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"17f4-yhxdg25tgKnAnAWQAvz5gFIQ+Bc"',
    "mtime": "2026-06-17T10:58:15.394Z",
    "size": 6132,
    "path": "../client/assets/SiteShell-BMT_-3kv.js"
  },
  "/assets/peer-support-f0BQ_6Ea.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1494-o8eYagSzlmIaRfUy5RZQOBpNjFU"',
    "mtime": "2026-06-17T10:58:15.392Z",
    "size": 5268,
    "path": "../client/assets/peer-support-f0BQ_6Ea.js"
  },
  "/assets/talknook-admin-panel-BBVZbntP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4294-kXJFbyTWd8k8aT60DJBeY7cWwkg"',
    "mtime": "2026-06-17T10:58:15.392Z",
    "size": 17044,
    "path": "../client/assets/talknook-admin-panel-BBVZbntP.js"
  },
  "/assets/user-check-dpEjEErB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fa-VkxSYPv0+xmtyTpYnOnZ4DLL83c"',
    "mtime": "2026-06-17T10:58:15.392Z",
    "size": 250,
    "path": "../client/assets/user-check-dpEjEErB.js"
  },
  "/assets/utils-DCADjnpI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6b9b-tSfrzcIHWeVNKawNWV0bEDmYWfc"',
    "mtime": "2026-06-17T10:58:15.392Z",
    "size": 27547,
    "path": "../client/assets/utils-DCADjnpI.js"
  },
  "/public/_routes.json": {
    "type": "application/json",
    "etag": '"44-hDnBW6E/py1yn8eBKrOtcOgv+FE"',
    "mtime": "2026-06-11T08:16:44.870Z",
    "size": 68,
    "path": "../client/public/_routes.json"
  },
  "/assets/styles-Bqgxu2S4.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"14c3d-mhgrCOCeaPklWwp2qn2RvGCTbmM"',
    "mtime": "2026-06-17T10:58:15.391Z",
    "size": 85053,
    "path": "../client/assets/styles-Bqgxu2S4.css"
  },
  "/assets/index-DiAPwc6y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"91bf3-9PGgPd9/qiv/iBKJHDF0o2sgUFo"',
    "mtime": "2026-06-17T10:58:15.394Z",
    "size": 596979,
    "path": "../client/assets/index-DiAPwc6y.js"
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
