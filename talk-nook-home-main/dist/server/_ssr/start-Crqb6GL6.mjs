"use strict";
const serverDZlzska_ = require("./server-DZlzska-.mjs");
const index = require("./index.mjs");
require("../_libs/seroval.mjs");
require("../_libs/react.mjs");
require("node:async_hooks");
require("../_libs/h3-v2.mjs");
require("../_libs/rou3.mjs");
require("../_libs/srvx.mjs");
require("node:http");
require("node:stream");
require("node:stream/promises");
require("node:https");
require("node:http2");
require("../_libs/tanstack__router-core.mjs");
require("../_libs/tanstack__history.mjs");
require("../_libs/cookie-es.mjs");
require("../_libs/seroval-plugins.mjs");
require("node:stream/web");
require("../_libs/tanstack__react-router.mjs");
require("../_libs/react-dom.mjs");
require("util");
require("crypto");
require("async_hooks");
require("stream");
require("../_libs/isbot.mjs");
function dedupeSerializationAdapters(deduped, serializationAdapters) {
  for (let i = 0, len = serializationAdapters.length; i < len; i++) {
    const current = serializationAdapters[i];
    if (!deduped.has(current)) {
      deduped.add(current);
      if (current.extends) dedupeSerializationAdapters(deduped, current.extends);
    }
  }
}
var createStart = (getOptions) => {
  return {
    getOptions: async () => {
      const options = await getOptions();
      if (options.serializationAdapters) {
        const deduped = /* @__PURE__ */ new Set();
        dedupeSerializationAdapters(deduped, options.serializationAdapters);
        options.serializationAdapters = Array.from(deduped);
      }
      return options;
    },
    createMiddleware: serverDZlzska_.c
  };
};
const errorMiddleware = serverDZlzska_.c().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(index.r(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" }
    });
  }
});
const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware]
}));
exports.startInstance = startInstance;
