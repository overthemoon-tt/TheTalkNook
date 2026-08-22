"use strict";
const _libs_react = require("../react.mjs");
const _libs__radixUi_reactUseCallbackRef = require("./react-use-callback-ref+[...].mjs");
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
  const onEscapeKeyDown = _libs__radixUi_reactUseCallbackRef.useCallbackRef(onEscapeKeyDownProp);
  _libs_react.reactExports.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    };
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [onEscapeKeyDown, ownerDocument]);
}
exports.useEscapeKeydown = useEscapeKeydown;
