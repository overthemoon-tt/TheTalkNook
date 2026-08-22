"use strict";
const _libs_clsx = require("../_libs/clsx.mjs");
const _libs_tailwindMerge = require("../_libs/tailwind-merge.mjs");
function cn(...inputs) {
  return _libs_tailwindMerge.twMerge(_libs_clsx.clsx(inputs));
}
exports.cn = cn;
