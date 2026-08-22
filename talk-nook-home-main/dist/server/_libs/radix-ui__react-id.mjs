"use strict";
const _libs_react = require("./react.mjs");
const _libs__radixUi_reactUseLayoutEffect = require("./@radix-ui/react-use-layout-effect+[...].mjs");
var useReactId = _libs_react.React$1[" useId ".trim().toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
  const [id, setId] = _libs_react.reactExports.useState(useReactId());
  _libs__radixUi_reactUseLayoutEffect.useLayoutEffect2(() => {
    setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return id ? `radix-${id}` : "";
}
exports.useId = useId;
