"use strict";
const _libs_h3 = require("../_libs/h3.mjs");
require("../_libs/rou3.mjs");
require("../_libs/srvx.mjs");
require("node:http");
require("node:stream");
require("node:stream/promises");
require("node:https");
require("node:http2");
function fetchViteEnv(viteEnvName, input, init) {
  const envs = globalThis.__nitro_vite_envs__ || {};
  const viteEnv = envs[viteEnvName];
  if (!viteEnv) {
    throw _libs_h3.HTTPError.status(404);
  }
  return Promise.resolve(viteEnv.fetch(_libs_h3.toRequest(input, init)));
}
function ssrRenderer({ req }) {
  return fetchViteEnv("ssr", req);
}
exports.default = ssrRenderer;
