"use strict";
const _libs_react = require("../_libs/react.mjs");
const _libs__radixUi_reactAccordion = require("../_libs/radix-ui__react-accordion.mjs");
const utilsH80jjgLf = require("./utils-H80jjgLf.mjs");
const _libs_lucideReact = require("../_libs/lucide-react.mjs");
const Accordion = _libs__radixUi_reactAccordion.Root2;
const AccordionItem = _libs_react.reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__radixUi_reactAccordion.Item, { ref, className: utilsH80jjgLf.cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = _libs_react.reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs__radixUi_reactAccordion.Header, { className: "flex", children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsxs(
  _libs__radixUi_reactAccordion.Trigger2,
  {
    ref,
    className: utilsH80jjgLf.cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(_libs_lucideReact.ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = _libs__radixUi_reactAccordion.Trigger2.displayName;
const AccordionContent = _libs_react.reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx(
  _libs__radixUi_reactAccordion.Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ _libs_react.jsxRuntimeExports.jsx("div", { className: utilsH80jjgLf.cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = _libs__radixUi_reactAccordion.Content2.displayName;
exports.Accordion = Accordion;
exports.AccordionContent = AccordionContent;
exports.AccordionItem = AccordionItem;
exports.AccordionTrigger = AccordionTrigger;
