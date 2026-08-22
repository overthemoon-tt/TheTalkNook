"use strict";
const _libs_react = require("./react.mjs");
const _libs_reactDom = require("./react-dom.mjs");
const _libs__radixUi_reactSlot = require("./radix-ui__react-slot.mjs");
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = _libs__radixUi_reactSlot.createSlot$1(`Primitive.${node}`);
  const Node = _libs_react.reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) _libs_reactDom.reactDomExports.flushSync(() => target.dispatchEvent(event));
}
exports.Primitive = Primitive;
exports.dispatchDiscreteCustomEvent = dispatchDiscreteCustomEvent;
