"use strict";
const _libs_react = require("./react.mjs");
const _libs_reactDom = require("./react-dom.mjs");
const _libs__radixUi_reactPrimitive = require("./radix-ui__react-primitive.mjs");
const _libs__radixUi_reactUseLayoutEffect = require("./@radix-ui/react-use-layout-effect+[...].mjs");
var PORTAL_NAME = "Portal";
var Portal = _libs_react.reactExports.forwardRef((props, forwardedRef) => {
  const { container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = _libs_react.reactExports.useState(false);
  _libs__radixUi_reactUseLayoutEffect.useLayoutEffect2(() => setMounted(true), []);
  const container = containerProp || mounted && globalThis?.document?.body;
  return container ? _libs_reactDom.ReactDOM.createPortal(/* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__radixUi_reactPrimitive.Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
});
Portal.displayName = PORTAL_NAME;
exports.Portal = Portal;
