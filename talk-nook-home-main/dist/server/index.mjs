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
  "/assets/book-DM3H5L7r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3331-oGv9OZun9PuGABtaFKxDqCBmFwo"',
    "mtime": "2026-06-12T12:07:37.631Z",
    "size": 13105,
    "path": "../client/assets/book-DM3H5L7r.js"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"8028-RMLo7lQ/C97RVs0wQCiSEUN4G6c"',
    "mtime": "2026-06-01T06:45:10.418Z",
    "size": 32808,
    "path": "../client/favicon.ico"
  },
  "/assets/circle-alert-BQUAnKAg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"106-2XvPYhVyH2I4P3vsHRXh39B45jo"',
    "mtime": "2026-06-12T12:07:37.631Z",
    "size": 262,
    "path": "../client/assets/circle-alert-BQUAnKAg.js"
  },
  "/assets/about-Cw9aFnmK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d70-pcyocMda+b137l9BQm2bPeNpB9A"',
    "mtime": "2026-06-12T12:07:37.631Z",
    "size": 3440,
    "path": "../client/assets/about-Cw9aFnmK.js"
  },
  "/assets/contact-BkIOPjrR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c35-GcU2IuVdiIAgZVO+Ax6d4Jv6R0Y"',
    "mtime": "2026-06-12T12:07:37.631Z",
    "size": 3125,
    "path": "../client/assets/contact-BkIOPjrR.js"
  },
  "/assets/arrow-right-CBCifblm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b1-veugJTSyxuazGHX+v4fer5iqjOA"',
    "mtime": "2026-06-12T12:07:37.631Z",
    "size": 177,
    "path": "../client/assets/arrow-right-CBCifblm.js"
  },
  "/assets/createLucideIcon-DmZgVtpl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4b2-oGUTXA7CMlaxLOX5olPn1VE0/IM"',
    "mtime": "2026-06-12T12:07:37.631Z",
    "size": 1202,
    "path": "../client/assets/createLucideIcon-DmZgVtpl.js"
  },
  "/assets/heart-DxmEXAVv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10e-jEQub7MVR0k9X66pKhDBgwJUyOo"',
    "mtime": "2026-06-12T12:07:37.631Z",
    "size": 270,
    "path": "../client/assets/heart-DxmEXAVv.js"
  },
  "/assets/chat._chatId-dlHsK889.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b37e-XumqcJNly9zIEhqMWuDBV3c4YSg"',
    "mtime": "2026-06-12T12:07:37.631Z",
    "size": 45950,
    "path": "../client/assets/chat._chatId-dlHsK889.js"
  },
  "/assets/index-BPwRMzly.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a37-uGwPr/uRacrfPbvjRIfgzRznmaw"',
    "mtime": "2026-06-12T12:07:37.631Z",
    "size": 6711,
    "path": "../client/assets/index-BPwRMzly.js"
  },
  "/assets/accordion-CNiwVxtG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2440-Upk4EPFhL/nxjrzjZZaSGtcOCqM"',
    "mtime": "2026-06-12T12:07:37.631Z",
    "size": 9280,
    "path": "../client/assets/accordion-CNiwVxtG.js"
  },
  "/assets/health-navigation-LpG3Y52C.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14e5-qDDmAcbDhgvnxDRY309l4EfbEcI"',
    "mtime": "2026-06-12T12:07:37.631Z",
    "size": 5349,
    "path": "../client/assets/health-navigation-LpG3Y52C.js"
  },
  "/assets/index-CD8R6N8d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ec5-6Bc0h22XdYdMiTjXDE5lQuiWpzM"',
    "mtime": "2026-06-12T12:07:37.631Z",
    "size": 7877,
    "path": "../client/assets/index-CD8R6N8d.js"
  },
  "/assets/message-circle-htlz33U7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fd-Oe1/EBMKjjGdNx7QEP5zkFp8uHE"',
    "mtime": "2026-06-12T12:07:37.631Z",
    "size": 253,
    "path": "../client/assets/message-circle-htlz33U7.js"
  },
  "/assets/peer-support-C7hXUuR8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1494-X8jO6uvOSfzHLKMn1CZuLzvKXm0"',
    "mtime": "2026-06-12T12:07:37.630Z",
    "size": 5268,
    "path": "../client/assets/peer-support-C7hXUuR8.js"
  },
  "/assets/search-BFhGjuE8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b5-rS+WwaAkJDiftnJNjXoHTdOr5sM"',
    "mtime": "2026-06-12T12:07:37.631Z",
    "size": 181,
    "path": "../client/assets/search-BFhGjuE8.js"
  },
  "/assets/SiteShell-DdxNuGF4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"17f4-DntmE4P6GQH04iZhB/4yCX/Kyns"',
    "mtime": "2026-06-12T12:07:37.631Z",
    "size": 6132,
    "path": "../client/assets/SiteShell-DdxNuGF4.js"
  },
  "/assets/talknook-admin-panel-BeqjIZXy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4294-0ipCy7mQiDFJMu/x0uEsjNAQ73I"',
    "mtime": "2026-06-12T12:07:37.631Z",
    "size": 17044,
    "path": "../client/assets/talknook-admin-panel-BeqjIZXy.js"
  },
  "/assets/user-check-D2Ud470F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fa-s+BKg+VDP3Y+UcmaSo72dlye4Bc"',
    "mtime": "2026-06-12T12:07:37.631Z",
    "size": 250,
    "path": "../client/assets/user-check-D2Ud470F.js"
  },
  "/assets/styles-Bqgxu2S4.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"14c3d-mhgrCOCeaPklWwp2qn2RvGCTbmM"',
    "mtime": "2026-06-12T12:07:37.630Z",
    "size": 85053,
    "path": "../client/assets/styles-Bqgxu2S4.css"
  },
  "/assets/utils-DCADjnpI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6b9b-tSfrzcIHWeVNKawNWV0bEDmYWfc"',
    "mtime": "2026-06-12T12:07:37.631Z",
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
  "/assets/phone-CMxvzZ6N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14e-ZhiBa45aXfriP+4LfgswTe3dIWA"',
    "mtime": "2026-06-12T12:07:37.631Z",
    "size": 334,
    "path": "../client/assets/phone-CMxvzZ6N.js"
  },
  "/assets/index-Bt-yJPdx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"91c0b-zA4BdzZVauTHUHScF6+WaXwopco"',
    "mtime": "2026-06-12T12:07:37.631Z",
    "size": 597003,
    "path": "../client/assets/index-Bt-yJPdx.js"
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
const _6Kwhhh = defineHandler((event) => {
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
const _lazy_nyPU92 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_nyPU92 };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const globalMiddleware = [
  toEventHandler(_6Kwhhh)
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
