"use strict";
const _libs_react = require("./react.mjs");
const _libs__radixUi_primitive = require("./radix-ui__primitive.mjs");
const _libs__radixUi_reactContext = require("./radix-ui__react-context.mjs");
const _libs__radixUi_reactUseControllableState = require("./@radix-ui/react-use-controllable-state+[...].mjs");
const _libs__radixUi_reactUseLayoutEffect = require("./@radix-ui/react-use-layout-effect+[...].mjs");
const _libs__radixUi_reactComposeRefs = require("./radix-ui__react-compose-refs.mjs");
const _libs__radixUi_reactPrimitive = require("./radix-ui__react-primitive.mjs");
const _libs__radixUi_reactPresence = require("./radix-ui__react-presence.mjs");
const _libs__radixUi_reactId = require("./radix-ui__react-id.mjs");
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = _libs__radixUi_reactContext.createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = _libs_react.reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCollapsible,
      open: openProp,
      defaultOpen,
      disabled,
      onOpenChange,
      ...collapsibleProps
    } = props;
    const [open, setOpen] = _libs__radixUi_reactUseControllableState.useControllableState({
      prop: openProp,
      defaultProp: defaultOpen ?? false,
      onChange: onOpenChange,
      caller: COLLAPSIBLE_NAME
    });
    return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
      CollapsibleProvider,
      {
        scope: __scopeCollapsible,
        disabled,
        contentId: _libs__radixUi_reactId.useId(),
        open,
        onOpenToggle: _libs_react.reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
          _libs__radixUi_reactPrimitive.Primitive.div,
          {
            "data-state": getState(open),
            "data-disabled": disabled ? "" : void 0,
            ...collapsibleProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME = "CollapsibleTrigger";
var CollapsibleTrigger = _libs_react.reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME, __scopeCollapsible);
    return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
      _libs__radixUi_reactPrimitive.Primitive.button,
      {
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": getState(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled,
        ...triggerProps,
        ref: forwardedRef,
        onClick: _libs__radixUi_primitive.composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
CollapsibleTrigger.displayName = TRIGGER_NAME;
var CONTENT_NAME = "CollapsibleContent";
var CollapsibleContent = _libs_react.reactExports.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME, props.__scopeCollapsible);
    return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__radixUi_reactPresence.Presence, { present: forceMount || context.open, children: ({ present }) => /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(CollapsibleContentImpl, { ...contentProps, ref: forwardedRef, present }) });
  }
);
CollapsibleContent.displayName = CONTENT_NAME;
var CollapsibleContentImpl = _libs_react.reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = useCollapsibleContext(CONTENT_NAME, __scopeCollapsible);
  const [isPresent, setIsPresent] = _libs_react.reactExports.useState(present);
  const ref = _libs_react.reactExports.useRef(null);
  const composedRefs = _libs__radixUi_reactComposeRefs.useComposedRefs(forwardedRef, ref);
  const heightRef = _libs_react.reactExports.useRef(0);
  const height = heightRef.current;
  const widthRef = _libs_react.reactExports.useRef(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = _libs_react.reactExports.useRef(isOpen);
  const originalStylesRef = _libs_react.reactExports.useRef(void 0);
  _libs_react.reactExports.useEffect(() => {
    const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
    return () => cancelAnimationFrame(rAF);
  }, []);
  _libs__radixUi_reactUseLayoutEffect.useLayoutEffect2(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [context.open, present]);
  return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
    _libs__radixUi_reactPrimitive.Primitive.div,
    {
      "data-state": getState(context.open),
      "data-disabled": context.disabled ? "" : void 0,
      id: context.contentId,
      hidden: !isOpen,
      ...contentProps,
      ref: composedRefs,
      style: {
        [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
        [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
        ...props.style
      },
      children: isOpen && children
    }
  );
});
function getState(open) {
  return open ? "open" : "closed";
}
var Root = Collapsible;
var Trigger = CollapsibleTrigger;
var Content = CollapsibleContent;
exports.Content = Content;
exports.Root = Root;
exports.Trigger = Trigger;
exports.createCollapsibleScope = createCollapsibleScope;
