"use strict";
const _libs_react = require("./react.mjs");
const _libs__radixUi_primitive = require("./radix-ui__primitive.mjs");
const _libs__radixUi_reactComposeRefs = require("./radix-ui__react-compose-refs.mjs");
const _libs__radixUi_reactContext = require("./radix-ui__react-context.mjs");
const _libs__radixUi_reactId = require("./radix-ui__react-id.mjs");
const _libs__radixUi_reactUseControllableState = require("./@radix-ui/react-use-controllable-state+[...].mjs");
const _libs__radixUi_reactDismissableLayer = require("./@radix-ui/react-dismissable-layer+[...].mjs");
const _libs__radixUi_reactFocusScope = require("./radix-ui__react-focus-scope.mjs");
const _libs__radixUi_reactPortal = require("./radix-ui__react-portal.mjs");
const _libs__radixUi_reactPresence = require("./radix-ui__react-presence.mjs");
const _libs__radixUi_reactPrimitive = require("./radix-ui__react-primitive.mjs");
const _libs__radixUi_reactFocusGuards = require("./radix-ui__react-focus-guards.mjs");
const _libs_reactRemoveScroll = require("./react-remove-scroll.mjs");
const _libs_ariaHidden = require("./aria-hidden.mjs");
const _libs__radixUi_reactSlot = require("./radix-ui__react-slot.mjs");
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = _libs__radixUi_reactContext.createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props) => {
  const {
    __scopeDialog,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const triggerRef = _libs_react.reactExports.useRef(null);
  const contentRef = _libs_react.reactExports.useRef(null);
  const [open, setOpen] = _libs__radixUi_reactUseControllableState.useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: DIALOG_NAME
  });
  return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
    DialogProvider,
    {
      scope: __scopeDialog,
      triggerRef,
      contentRef,
      contentId: _libs__radixUi_reactId.useId(),
      titleId: _libs__radixUi_reactId.useId(),
      descriptionId: _libs__radixUi_reactId.useId(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: _libs_react.reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children
    }
  );
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = _libs_react.reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = _libs__radixUi_reactComposeRefs.useComposedRefs(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
      _libs__radixUi_reactPrimitive.Primitive.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: _libs__radixUi_primitive.composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, {
  forceMount: void 0
});
var DialogPortal = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = useDialogContext(PORTAL_NAME, __scopeDialog);
  return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(PortalProvider, { scope: __scopeDialog, forceMount, children: _libs_react.reactExports.Children.map(children, (child) => /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__radixUi_reactPresence.Presence, { present: forceMount || context.open, children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__radixUi_reactPortal.Portal, { asChild: true, container, children: child }) })) });
};
DialogPortal.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = _libs_react.reactExports.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__radixUi_reactPresence.Presence, { present: forceMount || context.open, children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(DialogOverlayImpl, { ...overlayProps, ref: forwardedRef }) }) : null;
  }
);
DialogOverlay.displayName = OVERLAY_NAME;
var Slot = _libs__radixUi_reactSlot.createSlot$2("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = _libs_react.reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs_reactRemoveScroll.ReactRemoveScroll, { as: Slot, allowPinchZoom: true, shards: [context.contentRef], children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
        _libs__radixUi_reactPrimitive.Primitive.div,
        {
          "data-state": getState(context.open),
          ...overlayProps,
          ref: forwardedRef,
          style: { pointerEvents: "auto", ...overlayProps.style }
        }
      ) })
    );
  }
);
var CONTENT_NAME = "DialogContent";
var DialogContent = _libs_react.reactExports.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__radixUi_reactPresence.Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(DialogContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(DialogContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = _libs_react.reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = _libs_react.reactExports.useRef(null);
    const composedRefs = _libs__radixUi_reactComposeRefs.useComposedRefs(forwardedRef, context.contentRef, contentRef);
    _libs_react.reactExports.useEffect(() => {
      const content = contentRef.current;
      if (content) return _libs_ariaHidden.hideOthers(content);
    }, []);
    return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
      DialogContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: _libs__radixUi_primitive.composeEventHandlers(props.onCloseAutoFocus, (event) => {
          event.preventDefault();
          context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: _libs__radixUi_primitive.composeEventHandlers(props.onPointerDownOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: _libs__radixUi_primitive.composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault()
        )
      }
    );
  }
);
var DialogContentNonModal = _libs_react.reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = _libs_react.reactExports.useRef(false);
    const hasPointerDownOutsideRef = _libs_react.reactExports.useRef(false);
    return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
      DialogContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          props.onCloseAutoFocus?.(event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          props.onInteractOutside?.(event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = context.triggerRef.current?.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }
);
var DialogContentImpl = _libs_react.reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    const contentRef = _libs_react.reactExports.useRef(null);
    const composedRefs = _libs__radixUi_reactComposeRefs.useComposedRefs(forwardedRef, contentRef);
    _libs__radixUi_reactFocusGuards.useFocusGuards();
    return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs(_libs_react.jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
        _libs__radixUi_reactFocusScope.FocusScope,
        {
          asChild: true,
          loop: true,
          trapped: trapFocus,
          onMountAutoFocus: onOpenAutoFocus,
          onUnmountAutoFocus: onCloseAutoFocus,
          children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
            _libs__radixUi_reactDismissableLayer.DismissableLayer,
            {
              role: "dialog",
              id: context.contentId,
              "aria-describedby": context.descriptionId,
              "aria-labelledby": context.titleId,
              "data-state": getState(context.open),
              ...contentProps,
              ref: composedRefs,
              onDismiss: () => context.onOpenChange(false)
            }
          )
        }
      ),
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs(_libs_react.jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(TitleWarning, { titleId: context.titleId }),
        /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(DescriptionWarning, { contentRef, descriptionId: context.descriptionId })
      ] })
    ] });
  }
);
var TITLE_NAME = "DialogTitle";
var DialogTitle = _libs_react.reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__radixUi_reactPrimitive.Primitive.h2, { id: context.titleId, ...titleProps, ref: forwardedRef });
  }
);
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = _libs_react.reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__radixUi_reactPrimitive.Primitive.p, { id: context.descriptionId, ...descriptionProps, ref: forwardedRef });
  }
);
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = _libs_react.reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
      _libs__radixUi_reactPrimitive.Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: _libs__radixUi_primitive.composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }
);
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = _libs__radixUi_reactContext.createContext2(TITLE_WARNING_NAME, {
  contentName: CONTENT_NAME,
  titleName: TITLE_NAME,
  docsSlug: "dialog"
});
var TitleWarning = ({ titleId }) => {
  const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
  const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
  _libs_react.reactExports.useEffect(() => {
    if (titleId) {
      const hasTitle = document.getElementById(titleId);
      if (!hasTitle) console.error(MESSAGE);
    }
  }, [MESSAGE, titleId]);
  return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId }) => {
  const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
  const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
  _libs_react.reactExports.useEffect(() => {
    const describedById = contentRef.current?.getAttribute("aria-describedby");
    if (descriptionId && describedById) {
      const hasDescription = document.getElementById(descriptionId);
      if (!hasDescription) console.warn(MESSAGE);
    }
  }, [MESSAGE, contentRef, descriptionId]);
  return null;
};
var Root = Dialog;
var Trigger = DialogTrigger;
var Portal = DialogPortal;
var Overlay = DialogOverlay;
var Content = DialogContent;
var Title = DialogTitle;
var Description = DialogDescription;
var Close = DialogClose;
exports.Close = Close;
exports.Content = Content;
exports.Description = Description;
exports.Overlay = Overlay;
exports.Portal = Portal;
exports.Root = Root;
exports.Title = Title;
exports.Trigger = Trigger;
exports.WarningProvider = WarningProvider;
exports.createDialogScope = createDialogScope;
