"use strict";
const _libs_react = require("./react.mjs");
const _libs__radixUi_reactContext = require("./radix-ui__react-context.mjs");
const _libs__radixUi_reactComposeRefs = require("./radix-ui__react-compose-refs.mjs");
const _libs__radixUi_reactDialog = require("./radix-ui__react-dialog.mjs");
const _libs__radixUi_primitive = require("./radix-ui__primitive.mjs");
const _libs__radixUi_reactSlot = require("./radix-ui__react-slot.mjs");
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext] = _libs__radixUi_reactContext.createContextScope(ROOT_NAME, [
  _libs__radixUi_reactDialog.createDialogScope
]);
var useDialogScope = _libs__radixUi_reactDialog.createDialogScope();
var AlertDialog = (props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__radixUi_reactDialog.Root, { ...dialogScope, ...alertDialogProps, modal: true });
};
AlertDialog.displayName = ROOT_NAME;
var TRIGGER_NAME = "AlertDialogTrigger";
var AlertDialogTrigger = _libs_react.reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...triggerProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__radixUi_reactDialog.Trigger, { ...dialogScope, ...triggerProps, ref: forwardedRef });
  }
);
AlertDialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "AlertDialogPortal";
var AlertDialogPortal = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__radixUi_reactDialog.Portal, { ...dialogScope, ...portalProps });
};
AlertDialogPortal.displayName = PORTAL_NAME;
var OVERLAY_NAME = "AlertDialogOverlay";
var AlertDialogOverlay = _libs_react.reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...overlayProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__radixUi_reactDialog.Overlay, { ...dialogScope, ...overlayProps, ref: forwardedRef });
  }
);
AlertDialogOverlay.displayName = OVERLAY_NAME;
var CONTENT_NAME = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME);
var Slottable = _libs__radixUi_reactSlot.createSlottable("AlertDialogContent");
var AlertDialogContent = _libs_react.reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, children, ...contentProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const contentRef = _libs_react.reactExports.useRef(null);
    const composedRefs = _libs__radixUi_reactComposeRefs.useComposedRefs(forwardedRef, contentRef);
    const cancelRef = _libs_react.reactExports.useRef(null);
    return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
      _libs__radixUi_reactDialog.WarningProvider,
      {
        contentName: CONTENT_NAME,
        titleName: TITLE_NAME,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(AlertDialogContentProvider, { scope: __scopeAlertDialog, cancelRef, children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs(
          _libs__radixUi_reactDialog.Content,
          {
            role: "alertdialog",
            ...dialogScope,
            ...contentProps,
            ref: composedRefs,
            onOpenAutoFocus: _libs__radixUi_primitive.composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
              event.preventDefault();
              cancelRef.current?.focus({ preventScroll: true });
            }),
            onPointerDownOutside: (event) => event.preventDefault(),
            onInteractOutside: (event) => event.preventDefault(),
            children: [
              /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(Slottable, { children }),
              /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(DescriptionWarning, { contentRef })
            ]
          }
        ) })
      }
    );
  }
);
AlertDialogContent.displayName = CONTENT_NAME;
var TITLE_NAME = "AlertDialogTitle";
var AlertDialogTitle = _libs_react.reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...titleProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__radixUi_reactDialog.Title, { ...dialogScope, ...titleProps, ref: forwardedRef });
  }
);
AlertDialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "AlertDialogDescription";
var AlertDialogDescription = _libs_react.reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__radixUi_reactDialog.Description, { ...dialogScope, ...descriptionProps, ref: forwardedRef });
});
AlertDialogDescription.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction = _libs_react.reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...actionProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__radixUi_reactDialog.Close, { ...dialogScope, ...actionProps, ref: forwardedRef });
  }
);
AlertDialogAction.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel = _libs_react.reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...cancelProps } = props;
    const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const ref = _libs__radixUi_reactComposeRefs.useComposedRefs(forwardedRef, cancelRef);
    return /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__radixUi_reactDialog.Close, { ...dialogScope, ...cancelProps, ref });
  }
);
AlertDialogCancel.displayName = CANCEL_NAME;
var DescriptionWarning = ({ contentRef }) => {
  const MESSAGE = `\`${CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${CONTENT_NAME}\` by passing a \`${DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  _libs_react.reactExports.useEffect(() => {
    const hasDescription = document.getElementById(
      contentRef.current?.getAttribute("aria-describedby")
    );
    if (!hasDescription) console.warn(MESSAGE);
  }, [MESSAGE, contentRef]);
  return null;
};
var Root2 = AlertDialog;
var Portal2 = AlertDialogPortal;
var Overlay2 = AlertDialogOverlay;
var Content2 = AlertDialogContent;
var Action = AlertDialogAction;
var Cancel = AlertDialogCancel;
var Title2 = AlertDialogTitle;
var Description2 = AlertDialogDescription;
exports.Action = Action;
exports.Cancel = Cancel;
exports.Content2 = Content2;
exports.Description2 = Description2;
exports.Overlay2 = Overlay2;
exports.Portal2 = Portal2;
exports.Root2 = Root2;
exports.Title2 = Title2;
