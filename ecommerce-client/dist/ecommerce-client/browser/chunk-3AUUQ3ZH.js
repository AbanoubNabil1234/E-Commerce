import {
  TranslateModule,
  TranslatePipe
} from "./chunk-BOQBRULU.js";
import {
  CommonModule,
  EventEmitter,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-IGAGZNZV.js";

// src/app/shared/components/confirm-modal/confirm-modal.component.ts
function ConfirmModalComponent_div_0__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.getIconColorClass());
  }
}
function ConfirmModalComponent_div_0__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.getIconColorClass());
  }
}
function ConfirmModalComponent_div_0__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.getIconColorClass());
  }
}
function ConfirmModalComponent_div_0_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' "', ctx_r1.config.itemName, '" ');
  }
}
function ConfirmModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275listener("click", function ConfirmModalComponent_div_0_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4);
    \u0275\u0275listener("click", function ConfirmModalComponent_div_0_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 5)(5, "div", 6);
    \u0275\u0275elementContainerStart(6, 7);
    \u0275\u0275template(7, ConfirmModalComponent_div_0__svg_svg_7_Template, 2, 2, "svg", 8)(8, ConfirmModalComponent_div_0__svg_svg_8_Template, 2, 2, "svg", 8)(9, ConfirmModalComponent_div_0__svg_svg_9_Template, 2, 2, "svg", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 10)(11, "h3", 11);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 12);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ConfirmModalComponent_div_0_p_15_Template, 2, 1, "p", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 14)(17, "button", 15);
    \u0275\u0275listener("click", function ConfirmModalComponent_div_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 16);
    \u0275\u0275listener("click", function ConfirmModalComponent_div_0_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r1.getIconBgClass());
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", ctx_r1.config.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "danger");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "warning");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.config.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.config.message, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.itemName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.config.cancelText || \u0275\u0275pipeBind1(19, 12, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getConfirmButtonClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.config.confirmText || \u0275\u0275pipeBind1(22, 14, "COMMON.CONFIRM"), " ");
  }
}
var ConfirmModalComponent = class _ConfirmModalComponent {
  isOpen = false;
  config = {
    type: "danger",
    title: "Confirm Action",
    message: "Are you sure you want to proceed?"
  };
  confirmed = new EventEmitter();
  cancelled = new EventEmitter();
  onEscapeKey() {
    if (this.isOpen) {
      this.onCancel();
    }
  }
  onConfirm() {
    this.confirmed.emit();
  }
  onCancel() {
    this.cancelled.emit();
  }
  getIconBgClass() {
    switch (this.config.type) {
      case "danger":
        return "bg-red-100";
      case "warning":
        return "bg-amber-100";
      default:
        return "bg-blue-100";
    }
  }
  getIconColorClass() {
    switch (this.config.type) {
      case "danger":
        return "text-red-600";
      case "warning":
        return "text-amber-600";
      default:
        return "text-blue-600";
    }
  }
  getConfirmButtonClass() {
    switch (this.config.type) {
      case "danger":
        return "bg-red-600 hover:bg-red-700 focus:ring-red-500 shadow-lg shadow-red-500/30";
      case "warning":
        return "bg-amber-600 hover:bg-amber-700 focus:ring-amber-500 shadow-lg shadow-amber-500/30";
      default:
        return "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 shadow-lg shadow-blue-500/30";
    }
  }
  static \u0275fac = function ConfirmModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmModalComponent, selectors: [["app-confirm-modal"]], hostBindings: function ConfirmModalComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.escape", function ConfirmModalComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscapeKey();
      }, false, \u0275\u0275resolveDocument);
    }
  }, inputs: { isOpen: "isOpen", config: "config" }, outputs: { confirmed: "confirmed", cancelled: "cancelled" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "fixed inset-0 z-[9999] overflow-y-auto", "role", "dialog", "aria-modal", "true", "aria-labelledby", "confirm-modal-title", 4, "ngIf"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "confirm-modal-title", 1, "fixed", "inset-0", "z-[9999]", "overflow-y-auto"], ["aria-hidden", "true", 1, "fixed", "inset-0", "bg-gray-900/60", "backdrop-blur-sm", "transition-opacity", "animate-fade-in", 3, "click"], [1, "flex", "min-h-full", "items-center", "justify-center", "p-4"], [1, "relative", "bg-white", "rounded-2xl", "shadow-2xl", "max-w-md", "w-full", "transform", "transition-all", "animate-scale-in", 3, "click"], [1, "pt-6", "pb-2", "flex", "justify-center"], [1, "rounded-full", "p-3"], [3, "ngSwitch"], ["class", "h-8 w-8", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 3, "class", 4, "ngSwitchCase"], ["class", "h-8 w-8", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 3, "class", 4, "ngSwitchDefault"], [1, "px-6", "pb-4", "text-center"], ["id", "confirm-modal-title", 1, "text-xl", "font-bold", "text-gray-900", "mb-2"], [1, "text-gray-600", "text-sm", "leading-relaxed"], ["class", "mt-2 font-semibold text-gray-800", 4, "ngIf"], [1, "px-6", "pb-6", "flex", "flex-col-reverse", "sm:flex-row", "gap-3", "sm:justify-center"], ["type", "button", 1, "w-full", "sm:w-auto", "px-6", "py-2.5", "text-sm", "font-medium", "text-gray-700", "bg-gray-100", "rounded-xl", "hover:bg-gray-200", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-gray-300", "transition-all", "duration-200", 3, "click"], ["type", "button", 1, "w-full", "sm:w-auto", "px-6", "py-2.5", "text-sm", "font-medium", "text-white", "rounded-xl", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "transition-all", "duration-200", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "h-8", "w-8"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "mt-2", "font-semibold", "text-gray-800"]], template: function ConfirmModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ConfirmModalComponent_div_0_Template, 23, 16, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, TranslateModule, TranslatePipe], styles: ["\n\n.animate-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n.animate-scale-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n/*# sourceMappingURL=confirm-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmModalComponent, { className: "ConfirmModalComponent", filePath: "src\\app\\shared\\components\\confirm-modal\\confirm-modal.component.ts", lineNumber: 115 });
})();

export {
  ConfirmModalComponent
};
//# sourceMappingURL=chunk-3AUUQ3ZH.js.map
