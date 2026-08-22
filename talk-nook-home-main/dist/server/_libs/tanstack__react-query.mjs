"use strict";
const _libs_react = require("./react.mjs");
var QueryClientContext = _libs_react.reactExports.createContext(
  void 0
);
var QueryClientProvider = ({
  client,
  children
}) => {
  _libs_react.reactExports.useEffect(() => {
    client.mount();
    return () => {
      client.unmount();
    };
  }, [client]);
  return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(QueryClientContext.Provider, { value: client, children });
};
exports.QueryClientProvider = QueryClientProvider;
