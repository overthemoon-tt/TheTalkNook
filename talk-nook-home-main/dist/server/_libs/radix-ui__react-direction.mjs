"use strict";
const _libs_react = require("./react.mjs");
var DirectionContext = _libs_react.reactExports.createContext(void 0);
function useDirection(localDir) {
  const globalDir = _libs_react.reactExports.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}
exports.useDirection = useDirection;
