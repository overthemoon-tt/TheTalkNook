"use strict";
const _libs_react = require("../react.mjs");
function useCallbackRef(callback) {
  const callbackRef = _libs_react.reactExports.useRef(callback);
  _libs_react.reactExports.useEffect(() => {
    callbackRef.current = callback;
  });
  return _libs_react.reactExports.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}
exports.useCallbackRef = useCallbackRef;
