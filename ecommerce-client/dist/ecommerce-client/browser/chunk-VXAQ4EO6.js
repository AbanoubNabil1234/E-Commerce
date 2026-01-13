import {
  permissionGuard
} from "./chunk-U74PNTE4.js";
import {
  InventoryService
} from "./chunk-52QYXEQ7.js";
import "./chunk-6OPCIAWL.js";
import {
  WarehousesService
} from "./chunk-ZFKGYVVN.js";
import {
  LanguageService
} from "./chunk-SBRLR34M.js";
import "./chunk-ZICMI5CI.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-XIYZMPFO.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-74XXAL65.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-BOQBRULU.js";
import {
  CommonModule,
  DatePipe,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  SlicePipe,
  Subject,
  computed,
  debounceTime,
  distinctUntilChanged,
  inject,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IGAGZNZV.js";
import "./chunk-N7TOP6ZD.js";

// src/app/features/inventory/components/stock-status-badge/stock-status-badge.component.ts
var StockStatusBadgeComponent = class _StockStatusBadgeComponent {
  // Inputs: Expects either numbers to calculate status or direct boolean flags
  quantityOnHand = 0;
  reorderLevel;
  // Computed status
  status = computed(() => {
    if (this.quantityOnHand <= 0)
      return "out";
    if (this.reorderLevel !== void 0 && this.quantityOnHand <= this.reorderLevel)
      return "low";
    return "in";
  });
  // Badge styling based on status - Matching Product List ERP Style
  badgeClass = computed(() => {
    switch (this.status()) {
      case "in":
        return "bg-emerald-100 text-emerald-700";
      case "low":
        return "bg-amber-100 text-amber-700";
      case "out":
        return "bg-red-100 text-red-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  });
  // Dot styling - Matching Product List ERP Style
  dotClass = computed(() => {
    switch (this.status()) {
      case "in":
        return "bg-emerald-500";
      case "low":
        return "bg-amber-500";
      case "out":
        return "bg-red-500";
      default:
        return "bg-slate-500";
    }
  });
  // Translation key
  label = computed(() => {
    switch (this.status()) {
      case "in":
        return "INVENTORY.IN_STOCK";
      case "low":
        return "INVENTORY.LOW_STOCK";
      case "out":
        return "INVENTORY.OUT_OF_STOCK";
      default:
        return "Unknown";
    }
  });
  static \u0275fac = function StockStatusBadgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StockStatusBadgeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockStatusBadgeComponent, selectors: [["app-stock-status-badge"]], inputs: { quantityOnHand: "quantityOnHand", reorderLevel: "reorderLevel" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 7, consts: [[1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-full", "text-xs", "font-semibold"], [1, "w-1.5", "h-1.5", "rounded-full"]], template: function StockStatusBadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "span", 0);
      \u0275\u0275element(1, "span", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.badgeClass());
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.dotClass());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, ctx.label()), " ");
    }
  }, dependencies: [CommonModule, TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockStatusBadgeComponent, { className: "StockStatusBadgeComponent", filePath: "src\\app\\features\\inventory\\components\\stock-status-badge\\stock-status-badge.component.ts", lineNumber: 16 });
})();

// src/app/features/inventory/models/inventory.models.ts
var MovementType;
(function(MovementType2) {
  MovementType2[MovementType2["In"] = 0] = "In";
  MovementType2[MovementType2["Out"] = 1] = "Out";
  MovementType2[MovementType2["Transfer"] = 2] = "Transfer";
  MovementType2[MovementType2["Adjustment"] = 3] = "Adjustment";
  MovementType2[MovementType2["Damaged"] = 4] = "Damaged";
  MovementType2[MovementType2["Return"] = 5] = "Return";
})(MovementType || (MovementType = {}));
var AdjustmentType;
(function(AdjustmentType2) {
  AdjustmentType2[AdjustmentType2["Increase"] = 0] = "Increase";
  AdjustmentType2[AdjustmentType2["Decrease"] = 1] = "Decrease";
  AdjustmentType2[AdjustmentType2["SetAbsolute"] = 2] = "SetAbsolute";
})(AdjustmentType || (AdjustmentType = {}));

// src/app/features/inventory/components/adjust-stock-dialog/adjust-stock-dialog.component.ts
var _c0 = (a0) => ({ product: a0 });
function AdjustStockDialogComponent_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "INVENTORY.VALIDATION.QUANTITY_REQUIRED"), " ");
  }
}
function AdjustStockDialogComponent_div_0_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "INVENTORY.VALIDATION.REASON_REQUIRED"), " ");
  }
}
function AdjustStockDialogComponent_div_0_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 26);
    \u0275\u0275element(2, "circle", 27)(3, "path", 28);
    \u0275\u0275elementEnd()();
  }
}
function AdjustStockDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 8);
    \u0275\u0275element(8, "path", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 10)(10, "h3", 11);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 12)(14, "p", 13);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "form", 14)(18, "div")(19, "label", 15);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 16);
    \u0275\u0275element(23, "input", 17);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, AdjustStockDialogComponent_div_0_div_25_Template, 3, 3, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "label", 15);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "textarea", 19);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275template(32, AdjustStockDialogComponent_div_0_div_32_Template, 3, 3, "div", 18);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(33, "div", 20)(34, "button", 21);
    \u0275\u0275listener("click", function AdjustStockDialogComponent_div_0_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275template(35, AdjustStockDialogComponent_div_0_span_35_Template, 4, 0, "span", 22);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 23);
    \u0275\u0275listener("click", function AdjustStockDialogComponent_div_0_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_11_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275classMap(ctx_r1.iconBgClass);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.iconClass);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 19, ctx_r1.titleKey), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 21, "INVENTORY.ADJUST_MODAL.DESCRIPTION", \u0275\u0275pureFunction1(36, _c0, ctx_r1.productName)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 24, "INVENTORY.QUANTITY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(24, 26, "INVENTORY.PLACEHOLDERS.QUANTITY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx_r1.form.get("quantity")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.form.get("quantity")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 28, "INVENTORY.REASON"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(31, 30, "INVENTORY.PLACEHOLDERS.REASON"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r1.form.get("reason")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r1.form.get("reason")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.submitBtnClass);
    \u0275\u0275property("disabled", ctx_r1.form.invalid || ctx_r1.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 32, "COMMON.CONFIRM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 34, "COMMON.CANCEL"), " ");
  }
}
var AdjustStockDialogComponent = class _AdjustStockDialogComponent {
  isOpen = false;
  productName = "";
  currentQuantity = 0;
  type = AdjustmentType.SetAbsolute;
  isSubmitting = false;
  onClose = new EventEmitter();
  onConfirm = new EventEmitter();
  fb = inject(FormBuilder);
  form = this.fb.group({
    quantity: [null, [Validators.required, Validators.min(1)]],
    reason: ["", [Validators.required, Validators.maxLength(200)]]
  });
  get titleKey() {
    switch (this.type) {
      case AdjustmentType.Increase:
        return "INVENTORY.ACTIONS.INCREASE_STOCK";
      case AdjustmentType.Decrease:
        return "INVENTORY.ACTIONS.DECREASE_STOCK";
      default:
        return "INVENTORY.ACTIONS.ADJUST_STOCK";
    }
  }
  get iconBgClass() {
    switch (this.type) {
      case AdjustmentType.Increase:
        return "bg-green-100 dark:bg-green-900/30";
      case AdjustmentType.Decrease:
        return "bg-red-100 dark:bg-red-900/30";
      default:
        return "bg-blue-100 dark:bg-blue-900/30";
    }
  }
  get iconClass() {
    switch (this.type) {
      case AdjustmentType.Increase:
        return "text-green-600 dark:text-green-400";
      case AdjustmentType.Decrease:
        return "text-red-600 dark:text-red-400";
      default:
        return "text-blue-600 dark:text-blue-400";
    }
  }
  get submitBtnClass() {
    switch (this.type) {
      case AdjustmentType.Increase:
        return "bg-green-600 hover:bg-green-500";
      case AdjustmentType.Decrease:
        return "bg-red-600 hover:bg-red-500";
      default:
        return "bg-blue-600 hover:bg-blue-500";
    }
  }
  submit() {
    if (this.form.valid) {
      const { quantity, reason } = this.form.value;
      this.onConfirm.emit({
        quantity,
        reason
      });
    }
  }
  close() {
    this.form.reset();
    this.onClose.emit();
  }
  static \u0275fac = function AdjustStockDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdjustStockDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdjustStockDialogComponent, selectors: [["app-adjust-stock-dialog"]], inputs: { isOpen: "isOpen", productName: "productName", currentQuantity: "currentQuantity", type: "type", isSubmitting: "isSubmitting" }, outputs: { onClose: "onClose", onConfirm: "onConfirm" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "fixed inset-0 z-50 overflow-y-auto", "aria-labelledby", "modal-title", "role", "dialog", "aria-modal", "true", 4, "ngIf"], ["aria-labelledby", "modal-title", "role", "dialog", "aria-modal", "true", 1, "fixed", "inset-0", "z-50", "overflow-y-auto"], [1, "fixed", "inset-0", "bg-slate-900/50", "transition-opacity", "backdrop-blur-sm"], [1, "flex", "min-h-full", "items-end", "justify-center", "p-4", "text-center", "sm:items-center", "sm:p-0"], [1, "relative", "transform", "overflow-hidden", "rounded-lg", "bg-white", "dark:bg-slate-800", "text-start", "shadow-xl", "transition-all", "sm:my-8", "sm:w-full", "sm:max-w-lg"], [1, "bg-white", "dark:bg-slate-800", "px-4", "pb-4", "pt-5", "sm:p-6", "sm:pb-4"], [1, "sm:flex", "sm:items-start"], [1, "mx-auto", "flex", "h-12", "w-12", "flex-shrink-0", "items-center", "justify-center", "rounded-full", "sm:mx-0", "sm:h-10", "sm:w-10"], ["fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3.251l4.135 4.136a.75.75 0 01-1.058 1.06L12 13.06l-2.923 2.924a.75.75 0 01-1.06-1.06l4.136-4.136zM3 7.5l18 0M3 7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5m-18 0v0m18 0v0"], [1, "mt-3", "text-center", "sm:ms-4", "sm:mt-0", "sm:text-start", "w-full"], ["id", "modal-title", 1, "text-base", "font-semibold", "leading-6", "text-slate-900", "dark:text-white"], [1, "mt-2"], [1, "text-sm", "text-slate-500", "dark:text-slate-400"], [1, "mt-4", "space-y-4", 3, "formGroup"], [1, "block", "text-sm", "font-medium", "text-slate-700", "dark:text-slate-300"], [1, "mt-1", "relative", "rounded-md", "shadow-sm"], ["type", "number", "formControlName", "quantity", "min", "1", 1, "block", "w-full", "rounded-md", "border-slate-300", "dark:border-slate-600", "dark:bg-slate-700", "dark:text-white", "py-2", "px-3", "focus:border-primary-500", "focus:ring-primary-500", "sm:text-sm", 3, "placeholder"], ["class", "text-red-600 text-xs mt-1", 4, "ngIf"], ["formControlName", "reason", "rows", "3", 1, "block", "w-full", "rounded-md", "border-slate-300", "dark:border-slate-600", "dark:bg-slate-700", "dark:text-white", "py-2", "px-3", "focus:border-primary-500", "focus:ring-primary-500", "sm:text-sm", 3, "placeholder"], [1, "bg-slate-50", "dark:bg-slate-700/50", "px-4", "py-3", "sm:flex", "sm:flex-row-reverse", "sm:px-6"], ["type", "button", 1, "inline-flex", "w-full", "justify-center", "rounded-md", "px-3", "py-2", "text-sm", "font-semibold", "text-white", "shadow-sm", "sm:ms-3", "sm:w-auto", "transition-colors", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["class", "me-2", 4, "ngIf"], ["type", "button", 1, "mt-3", "inline-flex", "w-full", "justify-center", "rounded-md", "bg-white", "dark:bg-slate-800", "px-3", "py-2", "text-sm", "font-semibold", "text-slate-900", "dark:text-slate-300", "shadow-sm", "ring-1", "ring-inset", "ring-slate-300", "dark:ring-slate-600", "hover:bg-slate-50", "dark:hover:bg-slate-700", "sm:mt-0", "sm:w-auto", "transition-colors", 3, "click"], [1, "text-red-600", "text-xs", "mt-1"], [1, "me-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function AdjustStockDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AdjustStockDialogComponent_div_0_Template, 41, 38, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdjustStockDialogComponent, { className: "AdjustStockDialogComponent", filePath: "src\\app\\features\\inventory\\components\\adjust-stock-dialog\\adjust-stock-dialog.component.ts", lineNumber: 96 });
})();

// src/app/features/inventory/pages/inventory-list/inventory-list.component.ts
var _c02 = (a0) => ["/products", a0];
function InventoryListComponent_option_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wh_r1 = ctx.$implicit;
    \u0275\u0275property("value", wh_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(wh_r1.name);
  }
}
function InventoryListComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275element(1, "div", 56);
    \u0275\u0275elementStart(2, "span", 57);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "COMMON.LOADING"));
  }
}
function InventoryListComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59)(2, "div", 60);
    \u0275\u0275element(3, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 62);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 63);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "INVENTORY.NO_STOCK_FOUND"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 4, "INVENTORY.EMPTY_DESC"));
  }
}
function InventoryListComponent_div_61_div_1_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 81)(1, "td", 82)(2, "a", 83);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 82)(5, "span", 84);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 85)(8, "span", 86);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 85)(11, "span", 87);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 85)(14, "span", 88);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 85);
    \u0275\u0275element(17, "app-stock-status-badge", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 82)(19, "div", 90)(20, "a", 91);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275element(22, "i", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 93);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275listener("click", function InventoryListComponent_div_61_div_1_tr_43_Template_button_click_23_listener() {
      const stock_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openAdjustDialog(stock_r3, "increase"));
    });
    \u0275\u0275element(25, "i", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 95);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275listener("click", function InventoryListComponent_div_61_div_1_tr_43_Template_button_click_26_listener() {
      const stock_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openAdjustDialog(stock_r3, "decrease"));
    });
    \u0275\u0275element(28, "i", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 97);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275listener("click", function InventoryListComponent_div_61_div_1_tr_43_Template_button_click_29_listener() {
      const stock_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openTransferDialog(stock_r3));
    });
    \u0275\u0275element(31, "i", 98);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    const stock_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(27, _c02, stock_r3.productId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", stock_r3.productName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", stock_r3.productSKU, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stock_r3.quantityOnHand);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stock_r3.quantityReserved);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-emerald-600", stock_r3.quantityAvailable > ((tmp_10_0 = stock_r3.reorderLevel) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : 0))("text-amber-600", stock_r3.quantityAvailable > 0 && stock_r3.quantityAvailable <= ((tmp_11_0 = stock_r3.reorderLevel) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : 0))("text-red-600", stock_r3.quantityAvailable <= 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", stock_r3.quantityAvailable, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("quantityOnHand", stock_r3.quantityOnHand)("reorderLevel", stock_r3.reorderLevel);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(29, _c02, stock_r3.productId))("title", \u0275\u0275pipeBind1(21, 19, "COMMON.VIEW_DETAILS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(24, 21, "INVENTORY.ACTIONS.INCREASE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(27, 23, "INVENTORY.ACTIONS.DECREASE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(30, 25, "INVENTORY.TRANSFER_STOCK"));
  }
}
function InventoryListComponent_div_61_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67)(2, "div", 9)(3, "div", 68);
    \u0275\u0275element(4, "i", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h3", 70);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "span", 71);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 72)(12, "table", 73)(13, "thead")(14, "tr", 74)(15, "th", 75)(16, "span", 76);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "th", 75)(20, "span", 76);
    \u0275\u0275text(21, " SKU ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "th", 77)(23, "span", 76);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "th", 77)(27, "span", 76);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "th", 77)(31, "span", 76);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "th", 77)(35, "span", 76);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "th", 78)(39, "span", 76);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "tbody", 79);
    \u0275\u0275template(43, InventoryListComponent_div_61_div_1_tr_43_Template, 32, 31, "tr", 80);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(group_r5.warehouseName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", group_r5.productCount, " ", \u0275\u0275pipeBind1(10, 10, "INVENTORY.PRODUCTS"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 12, "INVENTORY.PRODUCT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 14, "INVENTORY.ON_HAND"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 16, "INVENTORY.RESERVED"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 18, "INVENTORY.AVAILABLE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 20, "INVENTORY.STATUS_LABEL"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 22, "COMMON.ACTIONS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", group_r5.stocks);
  }
}
function InventoryListComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275template(1, InventoryListComponent_div_61_div_1_Template, 44, 24, "div", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.stocksByWarehouse());
  }
}
function InventoryListComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "div", 100);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span", 101);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "COMMON.SHOWING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.stocks().length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "INVENTORY.ITEMS"), " ");
  }
}
function InventoryListComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275element(1, "div", 103);
    \u0275\u0275elementEnd();
  }
}
function InventoryListComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 60);
    \u0275\u0275element(2, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 62);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 57);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "INVENTORY.NO_STOCK_FOUND"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "INVENTORY.EMPTY_DESC"));
  }
}
function InventoryListComponent_div_86_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110)(1, "div", 111)(2, "div", 112)(3, "h3", 113);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 114);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "app-stock-status-badge", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 115)(9, "div", 116)(10, "span", 117);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 118);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 119)(16, "span", 117);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 120);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 116)(22, "span", 117);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 121);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 122)(28, "a", 123);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 124)(32, "button", 125);
    \u0275\u0275listener("click", function InventoryListComponent_div_86_div_8_Template_button_click_32_listener() {
      const stock_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openAdjustDialog(stock_r7, "increase"));
    });
    \u0275\u0275element(33, "i", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 127);
    \u0275\u0275listener("click", function InventoryListComponent_div_86_div_8_Template_button_click_34_listener() {
      const stock_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openAdjustDialog(stock_r7, "decrease"));
    });
    \u0275\u0275element(35, "i", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 129);
    \u0275\u0275listener("click", function InventoryListComponent_div_86_div_8_Template_button_click_36_listener() {
      const stock_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openTransferDialog(stock_r7));
    });
    \u0275\u0275element(37, "i", 130);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_14_0;
    const stock_r7 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(stock_r7.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stock_r7.productSKU);
    \u0275\u0275advance();
    \u0275\u0275property("quantityOnHand", stock_r7.quantityOnHand)("reorderLevel", stock_r7.reorderLevel);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 18, "INVENTORY.ON_HAND"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stock_r7.quantityOnHand);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 20, "INVENTORY.RESERVED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stock_r7.quantityReserved);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 22, "INVENTORY.AVAILABLE"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-emerald-600", stock_r7.quantityAvailable > ((tmp_13_0 = stock_r7.reorderLevel) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : 0))("text-amber-600", stock_r7.quantityAvailable > 0 && stock_r7.quantityAvailable <= ((tmp_14_0 = stock_r7.reorderLevel) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : 0))("text-red-600", stock_r7.quantityAvailable <= 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", stock_r7.quantityAvailable, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(26, _c02, stock_r7.productId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 24, "COMMON.VIEW_DETAILS"), " \u2192 ");
  }
}
function InventoryListComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "div", 106)(2, "div", 107);
    \u0275\u0275element(3, "i", 69);
    \u0275\u0275elementStart(4, "span", 70);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 108);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, InventoryListComponent_div_86_div_8_Template, 38, 28, "div", 109);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r8 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(group_r8.warehouseName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", group_r8.productCount, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", group_r8.stocks);
  }
}
function InventoryListComponent_div_90_option_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 143);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wh_r10 = ctx.$implicit;
    \u0275\u0275property("ngValue", wh_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", wh_r10.name, " ");
  }
}
function InventoryListComponent_div_90_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 152);
    \u0275\u0275element(1, "i", 153);
    \u0275\u0275elementEnd();
  }
}
function InventoryListComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 131)(1, "div", 132);
    \u0275\u0275listener("click", function InventoryListComponent_div_90_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeTransferDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 133)(3, "div", 134)(4, "div", 135)(5, "div", 9)(6, "div", 136);
    \u0275\u0275element(7, "i", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h3", 70);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 57);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 138)(15, "div")(16, "label", 139);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 140);
    \u0275\u0275text(20);
    \u0275\u0275elementStart(21, "span", 141);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div")(25, "label", 139);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 142);
    \u0275\u0275twoWayListener("ngModelChange", function InventoryListComponent_div_90_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.transferTargetWarehouseId, $event) || (ctx_r3.transferTargetWarehouseId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(29, "option", 143);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, InventoryListComponent_div_90_option_32_Template, 2, 2, "option", 144);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div")(34, "label", 139);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 145);
    \u0275\u0275twoWayListener("ngModelChange", function InventoryListComponent_div_90_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.transferQuantity, $event) || (ctx_r3.transferQuantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div")(39, "label", 139);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementStart(42, "span", 146);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "textarea", 147);
    \u0275\u0275twoWayListener("ngModelChange", function InventoryListComponent_div_90_Template_textarea_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.transferReason, $event) || (ctx_r3.transferReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 148)(47, "button", 149);
    \u0275\u0275listener("click", function InventoryListComponent_div_90_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeTransferDialog());
    });
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 150);
    \u0275\u0275listener("click", function InventoryListComponent_div_90_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmTransferStock());
    });
    \u0275\u0275template(51, InventoryListComponent_div_90_span_51_Template, 2, 0, "span", 151);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 21, "INVENTORY.TRANSFER_STOCK"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.transferDialogStock == null ? null : ctx_r3.transferDialogStock.productName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 23, "INVENTORY.FROM_WAREHOUSE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.transferDialogStock == null ? null : ctx_r3.transferDialogStock.warehouseName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" (", \u0275\u0275pipeBind1(23, 25, "INVENTORY.AVAILABLE"), ": ", ctx_r3.transferDialogStock == null ? null : ctx_r3.transferDialogStock.quantityAvailable, ") ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 27, "INVENTORY.TO_WAREHOUSE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.transferTargetWarehouseId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 29, "INVENTORY.SELECT_WAREHOUSE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.getAvailableWarehousesForTransfer());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 31, "INVENTORY.QUANTITY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.transferQuantity);
    \u0275\u0275property("max", (tmp_13_0 = ctx_r3.transferDialogStock == null ? null : ctx_r3.transferDialogStock.quantityAvailable) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 33, "INVENTORY.REASON"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(44, 35, "COMMON.OPTIONAL"), ")");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.transferReason);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 37, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r3.transferTargetWarehouseId || ctx_r3.transferQuantity <= 0 || ctx_r3.transferDialogSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.transferDialogSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 39, "INVENTORY.TRANSFER"), " ");
  }
}
function InventoryListComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span", 155);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r3.toastType === "success" ? "bg-emerald-600 text-white" : "bg-red-600 text-white");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r3.toastType === "success" ? "fas fa-check-circle" : "fas fa-exclamation-circle");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.toastMessage);
  }
}
var InventoryListComponent = class _InventoryListComponent {
  inventoryService = inject(InventoryService);
  warehouseService = inject(WarehousesService);
  languageService = inject(LanguageService);
  translateService = inject(TranslateService);
  destroy$ = new Subject();
  // Signals
  stocks = signal([]);
  warehouses = signal([]);
  isLoading = signal(true);
  // Computed: Stocks grouped by warehouse
  stocksByWarehouse = computed(() => {
    const allStocks = this.stocks();
    const groupMap = /* @__PURE__ */ new Map();
    for (const stock of allStocks) {
      if (!groupMap.has(stock.warehouseId)) {
        groupMap.set(stock.warehouseId, {
          warehouseId: stock.warehouseId,
          warehouseName: stock.warehouseName,
          productCount: 0,
          stocks: []
        });
      }
      const group = groupMap.get(stock.warehouseId);
      group.stocks.push(stock);
      group.productCount++;
    }
    return Array.from(groupMap.values()).sort((a, b) => a.warehouseName.localeCompare(b.warehouseName));
  });
  // Filters
  searchControl = new FormControl("");
  selectedWarehouseId;
  selectedStatus;
  lowStockOnly = false;
  // Adjust Stock Dialog
  adjustDialogOpen = false;
  adjustDialogStock = null;
  adjustDialogType = AdjustmentType.Increase;
  adjustDialogSubmitting = false;
  // Transfer Stock Dialog
  transferDialogOpen = false;
  transferDialogStock = null;
  transferDialogSubmitting = false;
  transferTargetWarehouseId = null;
  transferQuantity = 0;
  transferReason = "";
  // Responsive
  isMobile = false;
  isTablet = false;
  // Toast notification
  toastMessage = "";
  toastType = "success";
  showToast = false;
  get dir() {
    return this.languageService.currentLanguage === "ar" ? "rtl" : "ltr";
  }
  onResize() {
    this.checkScreenSize();
  }
  checkScreenSize() {
    const width = window.innerWidth;
    this.isMobile = width < 768;
    this.isTablet = width >= 768 && width < 1024;
  }
  ngOnInit() {
    this.checkScreenSize();
    this.loadWarehouses();
    this.loadData();
    this.searchControl.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(300), distinctUntilChanged()).subscribe(() => {
      this.loadData();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadWarehouses() {
    this.warehouseService.getActive().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.warehouses.set(data),
      error: () => console.error("Failed to load warehouses")
    });
  }
  loadData() {
    this.isLoading.set(true);
    this.inventoryService.getAllStock(this.selectedWarehouseId, this.lowStockOnly || void 0).subscribe({
      next: (data) => {
        let filtered = data;
        const search = this.searchControl.value?.toLowerCase() || "";
        if (search) {
          filtered = filtered.filter((s) => s.productName.toLowerCase().includes(search) || s.productSKU.toLowerCase().includes(search) || s.warehouseName.toLowerCase().includes(search));
        }
        if (this.selectedStatus) {
          filtered = filtered.filter((s) => {
            const status = this.getStockStatus(s);
            return status === this.selectedStatus;
          });
        }
        this.stocks.set(filtered);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  getStockStatus(stock) {
    if (stock.quantityOnHand <= 0)
      return "out_of_stock";
    if (stock.quantityOnHand <= (stock.reorderLevel ?? 0))
      return "low_stock";
    return "in_stock";
  }
  onWarehouseChange(event) {
    const value = event.target.value;
    this.selectedWarehouseId = value ? +value : void 0;
    this.loadData();
  }
  onStatusChange(event) {
    const value = event.target.value;
    this.selectedStatus = value || void 0;
    this.loadData();
  }
  onLowStockToggle() {
    this.lowStockOnly = !this.lowStockOnly;
    this.loadData();
  }
  // ==================== Adjust Stock Dialog ====================
  openAdjustDialog(stock, type) {
    this.adjustDialogStock = stock;
    this.adjustDialogType = type === "increase" ? AdjustmentType.Increase : AdjustmentType.Decrease;
    this.adjustDialogOpen = true;
  }
  closeAdjustDialog() {
    this.adjustDialogOpen = false;
    this.adjustDialogStock = null;
    this.adjustDialogSubmitting = false;
  }
  confirmAdjustStock(data) {
    if (!this.adjustDialogStock)
      return;
    this.adjustDialogSubmitting = true;
    const request = {
      productId: this.adjustDialogStock.productId,
      warehouseId: this.adjustDialogStock.warehouseId,
      quantity: data.quantity,
      adjustmentType: this.adjustDialogType,
      reason: data.reason
    };
    this.inventoryService.adjustStock(request).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.closeAdjustDialog();
        this.loadData();
        this.showNotification("success", "INVENTORY.ADJUST_SUCCESS");
      },
      error: (err) => {
        this.adjustDialogSubmitting = false;
        this.showNotification("error", "INVENTORY.ADJUST_ERROR");
        console.error("Adjust stock error:", err);
      }
    });
  }
  // ==================== Transfer Stock Dialog ====================
  openTransferDialog(stock) {
    this.transferDialogStock = stock;
    this.transferDialogOpen = true;
    this.transferQuantity = 0;
    this.transferReason = "";
    this.transferTargetWarehouseId = null;
  }
  closeTransferDialog() {
    this.transferDialogOpen = false;
    this.transferDialogStock = null;
    this.transferDialogSubmitting = false;
  }
  confirmTransferStock() {
    if (!this.transferDialogStock || !this.transferTargetWarehouseId || this.transferQuantity <= 0)
      return;
    this.transferDialogSubmitting = true;
    const request = {
      productId: this.transferDialogStock.productId,
      sourceWarehouseId: this.transferDialogStock.warehouseId,
      destinationWarehouseId: this.transferTargetWarehouseId,
      quantity: this.transferQuantity,
      reason: this.transferReason
    };
    this.inventoryService.transferStock(request).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.closeTransferDialog();
        this.loadData();
        this.showNotification("success", "INVENTORY.TRANSFER_SUCCESS");
      },
      error: (err) => {
        this.transferDialogSubmitting = false;
        this.showNotification("error", "INVENTORY.TRANSFER_ERROR");
        console.error("Transfer stock error:", err);
      }
    });
  }
  getAvailableWarehousesForTransfer() {
    if (!this.transferDialogStock)
      return [];
    return this.warehouses().filter((w) => w.id !== this.transferDialogStock.warehouseId);
  }
  // ==================== Toast Notification ====================
  showNotification(type, key) {
    this.toastType = type;
    this.toastMessage = this.translateService.instant(key);
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3e3);
  }
  static \u0275fac = function InventoryListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryListComponent, selectors: [["app-inventory-list"]], hostBindings: function InventoryListComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function InventoryListComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, \u0275\u0275resolveWindow);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 92, vars: 72, consts: [[1, "min-h-full", "bg-slate-50"], [1, "hidden", "md:block", "p-6", "lg:p-8", "space-y-6"], [1, "flex", "items-center", "gap-2", "text-sm", "text-slate-500"], ["routerLink", "/dashboard", 1, "hover:text-indigo-600", "transition-colors"], [1, "fas", "fa-chevron-right", "text-xs", "text-slate-300", "rtl:rotate-180"], [1, "text-slate-800", "font-medium"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-start", "lg:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-slate-800"], [1, "mt-1", "text-sm", "text-slate-500"], [1, "flex", "items-center", "gap-3"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-white", "border", "border-slate-200", "text-slate-700", "font-medium", "rounded-xl", "hover:bg-slate-50", "hover:border-slate-300", "transition-all"], [1, "fas", "fa-download", "text-sm"], ["routerLink", "/inventory/adjustments", 1, "inline-flex", "items-center", "gap-2", "px-5", "py-2.5", "bg-indigo-600", "text-white", "font-semibold", "rounded-xl", "hover:bg-indigo-700", "transition-all", "shadow-lg", "shadow-indigo-200", "hover:-translate-y-0.5", "active:scale-[0.98]"], [1, "fas", "fa-exchange-alt"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-sm", "p-4"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-center", "gap-4"], [1, "relative", "flex-1", "max-w-md"], [1, "fas", "fa-search", "absolute", "start-4", "top-1/2", "-translate-y-1/2", "text-slate-400"], ["type", "text", 1, "w-full", "ps-11", "pe-4", "py-2.5", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "focus:bg-white", "transition-all", 3, "formControl", "placeholder"], [1, "relative"], [1, "appearance-none", "px-4", "py-2.5", "pe-10", "bg-slate-50", "border", "border-slate-200", "text-slate-700", "font-medium", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "cursor-pointer", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-down", "absolute", "end-4", "top-1/2", "-translate-y-1/2", "text-slate-400", "pointer-events-none", "text-xs"], ["value", "in_stock"], ["value", "low_stock"], ["value", "out_of_stock"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "rounded-xl", "text-sm", "font-medium", "transition-all", 3, "click", "ngClass"], [1, "fas", "fa-exclamation-triangle"], ["class", "flex flex-col items-center justify-center py-24", 4, "ngIf"], ["class", "bg-white rounded-xl border border-slate-200 shadow-sm p-12", 4, "ngIf"], ["class", "space-y-6", 4, "ngIf"], ["class", "flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 bg-white rounded-xl border border-slate-200", 4, "ngIf"], [1, "md:hidden", "min-h-screen", "flex", "flex-col", "bg-slate-50"], [1, "sticky", "top-0", "z-40", "bg-white", "border-b", "border-slate-200", "px-4", "py-3"], [1, "text-lg", "font-bold", "text-slate-800", "mb-3"], [1, "relative", "flex-1"], [1, "fas", "fa-search", "absolute", "start-4", "top-1/2", "-translate-y-1/2", "text-slate-400", "text-sm"], ["type", "text", 1, "w-full", "ps-11", "pe-4", "py-3", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "formControl", "placeholder"], ["type", "button", 1, "p-3", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-slate-600"], [1, "fas", "fa-filter"], [1, "px-4", "py-3", "flex", "items-center", "gap-2", "overflow-x-auto", "bg-white", "border-b", "border-slate-100"], ["type", "button", 1, "flex-shrink-0", "px-3", "py-1.5", "rounded-full", "text-sm", "font-medium", "transition-all", 3, "ngClass"], ["type", "button", 1, "flex-shrink-0", "px-3", "py-1.5", "rounded-full", "text-sm", "font-medium", "transition-all", 3, "click", "ngClass"], [1, "fas", "fa-exclamation-triangle", "me-1", "text-xs"], [1, "flex-1", "overflow-y-auto", "p-4", "pb-24", "space-y-4"], ["class", "flex justify-center py-12", 4, "ngIf"], ["class", "flex flex-col items-center justify-center py-16 text-center", 4, "ngIf"], ["class", "space-y-3", 4, "ngFor", "ngForOf"], ["routerLink", "/inventory/adjustments", 1, "fixed", "bottom-6", "end-6", "w-14", "h-14", "bg-indigo-600", "text-white", "rounded-2xl", "shadow-lg", "shadow-indigo-300", "flex", "items-center", "justify-center", "hover:bg-indigo-700", "active:scale-95", "transition-all", "z-50"], [1, "fas", "fa-exchange-alt", "text-lg"], [3, "onClose", "onConfirm", "isOpen", "productName", "currentQuantity", "type", "isSubmitting"], ["class", "fixed inset-0 z-50 overflow-y-auto", 4, "ngIf"], ["class", "fixed bottom-6 start-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-fade-in", 3, "ngClass", 4, "ngIf"], [3, "value"], [1, "flex", "flex-col", "items-center", "justify-center", "py-24"], [1, "w-12", "h-12", "border-4", "border-indigo-200", "border-t-indigo-600", "rounded-full", "animate-spin", "mb-4"], [1, "text-sm", "text-slate-500"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-sm", "p-12"], [1, "flex", "flex-col", "items-center", "justify-center", "text-center"], [1, "w-16", "h-16", "bg-slate-100", "rounded-2xl", "flex", "items-center", "justify-center", "mb-4"], [1, "fas", "fa-boxes", "text-2xl", "text-slate-400"], [1, "text-lg", "font-semibold", "text-slate-800", "mb-1"], [1, "text-sm", "text-slate-500", "mb-6"], [1, "space-y-6"], ["class", "bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-sm", "overflow-hidden"], [1, "px-6", "py-4", "bg-slate-50", "border-b", "border-slate-200", "flex", "items-center", "justify-between"], [1, "w-10", "h-10", "bg-indigo-100", "rounded-xl", "flex", "items-center", "justify-center"], [1, "fas", "fa-warehouse", "text-indigo-600"], [1, "font-semibold", "text-slate-800"], [1, "px-3", "py-1", "bg-indigo-100", "text-indigo-700", "text-sm", "font-semibold", "rounded-full"], [1, "overflow-x-auto"], [1, "min-w-full"], [1, "bg-slate-50/50", "border-b", "border-slate-100"], [1, "px-6", "py-3", "text-start"], [1, "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wider"], [1, "px-6", "py-3", "text-center"], [1, "px-6", "py-3", "text-end"], [1, "divide-y", "divide-slate-100"], ["class", "hover:bg-slate-50 transition-colors duration-150", 4, "ngFor", "ngForOf"], [1, "hover:bg-slate-50", "transition-colors", "duration-150"], [1, "px-6", "py-4"], [1, "font-semibold", "text-slate-800", "hover:text-indigo-600", "transition-colors", 3, "routerLink"], [1, "text-sm", "font-mono", "text-slate-500", "bg-slate-100", "px-2", "py-0.5", "rounded"], [1, "px-6", "py-4", "text-center"], [1, "text-sm", "font-bold", "text-slate-800"], [1, "text-sm", "font-medium", "text-amber-600"], [1, "text-sm", "font-bold"], [3, "quantityOnHand", "reorderLevel"], [1, "flex", "items-center", "justify-end", "gap-1"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "text-sm", "font-medium", "text-slate-600", "hover:text-indigo-600", "hover:bg-indigo-50", "rounded-lg", "transition-all", 3, "routerLink", "title"], [1, "fas", "fa-eye", "text-xs"], ["type", "button", 1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "text-sm", "font-medium", "text-slate-600", "hover:text-emerald-600", "hover:bg-emerald-50", "rounded-lg", "transition-all", 3, "click", "title"], [1, "fas", "fa-plus", "text-xs"], ["type", "button", 1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "text-sm", "font-medium", "text-slate-600", "hover:text-red-600", "hover:bg-red-50", "rounded-lg", "transition-all", 3, "click", "title"], [1, "fas", "fa-minus", "text-xs"], ["type", "button", 1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "text-sm", "font-medium", "text-slate-600", "hover:text-blue-600", "hover:bg-blue-50", "rounded-lg", "transition-all", 3, "click", "title"], [1, "fas", "fa-exchange-alt", "text-xs"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-4", "px-6", "py-4", "bg-white", "rounded-xl", "border", "border-slate-200"], [1, "text-sm", "text-slate-600"], [1, "font-semibold"], [1, "flex", "justify-center", "py-12"], [1, "w-10", "h-10", "border-4", "border-indigo-200", "border-t-indigo-600", "rounded-full", "animate-spin"], [1, "flex", "flex-col", "items-center", "justify-center", "py-16", "text-center"], [1, "space-y-3"], [1, "flex", "items-center", "justify-between", "px-1"], [1, "flex", "items-center", "gap-2"], [1, "px-2", "py-0.5", "bg-indigo-100", "text-indigo-700", "text-xs", "font-semibold", "rounded-full"], ["class", "bg-white rounded-xl border border-slate-200 p-4 active:bg-slate-50 transition-colors", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-4", "active:bg-slate-50", "transition-colors"], [1, "flex", "items-start", "justify-between", "gap-3", "mb-3"], [1, "min-w-0"], [1, "font-semibold", "text-slate-800", "truncate"], [1, "text-xs", "font-mono", "text-slate-500"], [1, "grid", "grid-cols-3", "gap-2", "py-3", "border-t", "border-b", "border-slate-100"], [1, "text-center"], [1, "block", "text-xs", "text-slate-400", "uppercase", "tracking-wider", "mb-1"], [1, "text-lg", "font-bold", "text-slate-800"], [1, "text-center", "border-l", "border-r", "border-slate-100"], [1, "text-lg", "font-medium", "text-amber-600"], [1, "text-lg", "font-bold"], [1, "flex", "items-center", "justify-between", "mt-3"], [1, "text-sm", "font-medium", "text-indigo-600", 3, "routerLink"], [1, "flex", "items-center", "gap-1"], ["type", "button", 1, "p-2", "text-slate-400", "hover:text-emerald-600", "rounded-lg", 3, "click"], [1, "fas", "fa-plus", "text-sm"], ["type", "button", 1, "p-2", "text-slate-400", "hover:text-red-600", "rounded-lg", 3, "click"], [1, "fas", "fa-minus", "text-sm"], ["type", "button", 1, "p-2", "text-slate-400", "hover:text-blue-600", "rounded-lg", 3, "click"], [1, "fas", "fa-exchange-alt", "text-sm"], [1, "fixed", "inset-0", "z-50", "overflow-y-auto"], [1, "fixed", "inset-0", "bg-slate-900/50", "backdrop-blur-sm", 3, "click"], [1, "flex", "min-h-full", "items-center", "justify-center", "p-4"], [1, "relative", "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-lg"], [1, "px-6", "py-4", "border-b", "border-slate-200"], [1, "w-10", "h-10", "bg-blue-100", "rounded-xl", "flex", "items-center", "justify-center"], [1, "fas", "fa-exchange-alt", "text-blue-600"], [1, "p-6", "space-y-5"], [1, "block", "text-sm", "font-medium", "text-slate-700", "mb-2"], [1, "px-4", "py-3", "bg-slate-100", "rounded-xl", "text-slate-700", "font-medium"], [1, "text-sm", "text-slate-500", "ms-2"], [1, "w-full", "px-4", "py-3", "bg-white", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "number", "min", "1", "placeholder", "0", 1, "w-full", "px-4", "py-3", "bg-white", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", 3, "ngModelChange", "ngModel", "max"], [1, "text-slate-400"], ["rows", "2", "placeholder", "", 1, "w-full", "px-4", "py-3", "bg-white", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "resize-none", 3, "ngModelChange", "ngModel"], [1, "px-6", "py-4", "bg-slate-50", "border-t", "border-slate-200", "flex", "items-center", "justify-end", "gap-3"], ["type", "button", 1, "px-4", "py-2.5", "text-slate-600", "font-medium", "rounded-xl", "hover:bg-slate-100", "transition-colors", 3, "click"], ["type", "button", 1, "px-5", "py-2.5", "bg-blue-600", "text-white", "font-semibold", "rounded-xl", "hover:bg-blue-700", "transition-colors", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["class", "me-2", 4, "ngIf"], [1, "me-2"], [1, "fas", "fa-spinner", "fa-spin"], [1, "fixed", "bottom-6", "start-1/2", "-translate-x-1/2", "z-50", "px-6", "py-3", "rounded-xl", "shadow-lg", "flex", "items-center", "gap-3", "animate-fade-in", 3, "ngClass"], [1, "font-medium"]], template: function InventoryListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nav", 2)(3, "a", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "i", 4);
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "div")(12, "h1", 7);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 8);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 9)(19, "button", 10);
      \u0275\u0275element(20, "i", 11);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 12);
      \u0275\u0275element(24, "i", 13);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 14)(28, "div", 15)(29, "div", 16);
      \u0275\u0275element(30, "i", 17)(31, "input", 18);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 19)(34, "select", 20);
      \u0275\u0275listener("change", function InventoryListComponent_Template_select_change_34_listener($event) {
        return ctx.onWarehouseChange($event);
      });
      \u0275\u0275elementStart(35, "option", 21);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(38, InventoryListComponent_option_38_Template, 2, 2, "option", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 19)(41, "select", 20);
      \u0275\u0275listener("change", function InventoryListComponent_Template_select_change_41_listener($event) {
        return ctx.onStatusChange($event);
      });
      \u0275\u0275elementStart(42, "option", 21);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "option", 24);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "option", 25);
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "option", 26);
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(54, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "button", 27);
      \u0275\u0275listener("click", function InventoryListComponent_Template_button_click_55_listener() {
        return ctx.onLowStockToggle();
      });
      \u0275\u0275element(56, "i", 28);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(59, InventoryListComponent_div_59_Template, 5, 3, "div", 29)(60, InventoryListComponent_div_60_Template, 10, 6, "div", 30)(61, InventoryListComponent_div_61_Template, 2, 1, "div", 31)(62, InventoryListComponent_div_62_Template, 8, 7, "div", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 33)(64, "div", 34)(65, "h1", 35);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 9)(69, "div", 36);
      \u0275\u0275element(70, "i", 37)(71, "input", 38);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "button", 39);
      \u0275\u0275element(74, "i", 40);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(75, "div", 41)(76, "button", 42);
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "button", 43);
      \u0275\u0275listener("click", function InventoryListComponent_Template_button_click_79_listener() {
        return ctx.onLowStockToggle();
      });
      \u0275\u0275element(80, "i", 44);
      \u0275\u0275text(81);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 45);
      \u0275\u0275template(84, InventoryListComponent_div_84_Template, 2, 0, "div", 46)(85, InventoryListComponent_div_85_Template, 9, 6, "div", 47)(86, InventoryListComponent_div_86_Template, 9, 3, "div", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "a", 49);
      \u0275\u0275element(88, "i", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "app-adjust-stock-dialog", 51);
      \u0275\u0275listener("onClose", function InventoryListComponent_Template_app_adjust_stock_dialog_onClose_89_listener() {
        return ctx.closeAdjustDialog();
      })("onConfirm", function InventoryListComponent_Template_app_adjust_stock_dialog_onConfirm_89_listener($event) {
        return ctx.confirmAdjustStock($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(90, InventoryListComponent_div_90_Template, 54, 41, "div", 52)(91, InventoryListComponent_div_91_Template, 4, 4, "div", 53);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_32_0;
      let tmp_33_0;
      \u0275\u0275attribute("dir", ctx.dir);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 38, "COMMON.HOME"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 40, "INVENTORY.TITLE"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 42, "INVENTORY.MANAGEMENT_TITLE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 44, "INVENTORY.MANAGEMENT_SUBTITLE"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 46, "COMMON.EXPORT"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 48, "INVENTORY.STOCK_ADJUSTMENT"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275property("formControl", ctx.searchControl)("placeholder", \u0275\u0275pipeBind1(32, 50, "INVENTORY.SEARCH_PLACEHOLDER"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 52, "INVENTORY.ALL_WAREHOUSES"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.warehouses());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 54, "INVENTORY.ALL_STATUS"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 56, "INVENTORY.STATUS_IN_STOCK"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 58, "INVENTORY.STATUS_LOW_STOCK"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 60, "INVENTORY.STATUS_OUT_OF_STOCK"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", ctx.lowStockOnly ? "bg-amber-100 text-amber-700 border border-amber-200" : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 62, "INVENTORY.LOW_STOCK_ONLY"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.stocks().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.stocksByWarehouse().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.stocks().length > 0);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 64, "INVENTORY.TITLE"));
      \u0275\u0275advance(5);
      \u0275\u0275property("formControl", ctx.searchControl)("placeholder", \u0275\u0275pipeBind1(72, 66, "INVENTORY.SEARCH_PLACEHOLDER"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", !ctx.selectedWarehouseId ? "bg-indigo-100 text-indigo-700" : "bg-slate-100 text-slate-600");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(78, 68, "INVENTORY.ALL_WAREHOUSES"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.lowStockOnly ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-600");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(82, 70, "INVENTORY.LOW_STOCK"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.stocks().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.stocksByWarehouse());
      \u0275\u0275advance(3);
      \u0275\u0275property("isOpen", ctx.adjustDialogOpen)("productName", (tmp_32_0 = ctx.adjustDialogStock == null ? null : ctx.adjustDialogStock.productName) !== null && tmp_32_0 !== void 0 ? tmp_32_0 : "")("currentQuantity", (tmp_33_0 = ctx.adjustDialogStock == null ? null : ctx.adjustDialogStock.quantityOnHand) !== null && tmp_33_0 !== void 0 ? tmp_33_0 : 0)("type", ctx.adjustDialogType)("isSubmitting", ctx.adjustDialogSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.transferDialogOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showToast);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    RouterModule,
    RouterLink,
    TranslateModule,
    TranslatePipe,
    StockStatusBadgeComponent,
    ReactiveFormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    MinValidator,
    MaxValidator,
    FormControlDirective,
    FormsModule,
    NgModel,
    AdjustStockDialogComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryListComponent, { className: "InventoryListComponent", filePath: "src\\app\\features\\inventory\\pages\\inventory-list\\inventory-list.component.ts", lineNumber: 41 });
})();

// src/app/features/inventory/pages/inventory-details/inventory-details.component.ts
var _c03 = (a0, a1, a2) => ({ "text-emerald-600": a0, "text-red-600": a1, "text-slate-600": a2 });
var _c1 = (a0, a1) => ({ productId: a0, warehouseId: a1 });
var _c2 = (a0, a1) => ({ "text-emerald-600": a0, "text-red-600": a1 });
function InventoryDetailsComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 16);
    \u0275\u0275element(2, "div", 17);
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "COMMON.LOADING"));
  }
}
function InventoryDetailsComponent_ng_container_3_span_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "INVENTORY.COMMITTED"), " ");
  }
}
function InventoryDetailsComponent_ng_container_3_tr_161_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 79)(2, "div", 80)(3, "div", 81);
    \u0275\u0275element(4, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4", 83);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 18);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 2, "INVENTORY.NO_MOVEMENTS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 4, "INVENTORY.NO_MOVEMENTS_DESC"));
  }
}
function InventoryDetailsComponent_ng_container_3_tr_162_a_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const move_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", ctx_r1.getReferenceLink(move_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", move_r3.referenceType ? move_r3.referenceType + "-" : "#", "", move_r3.referenceId, " ");
  }
}
function InventoryDetailsComponent_ng_container_3_tr_162_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const move_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", move_r3.reason || "Manual", " ");
  }
}
function InventoryDetailsComponent_ng_container_3_tr_162_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 84)(1, "td", 85)(2, "div", 86);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 87);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 85)(9, "span", 88);
    \u0275\u0275element(10, "span", 89);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 74)(13, "span", 90);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 85);
    \u0275\u0275template(16, InventoryDetailsComponent_ng_container_3_tr_162_a_16_Template, 2, 3, "a", 91)(17, InventoryDetailsComponent_ng_container_3_tr_162_span_17_Template, 2, 1, "span", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 85)(19, "div", 93)(20, "div", 94);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 95);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const move_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 12, move_r3.createdAt, "MMM dd, yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 15, move_r3.createdAt, "hh:mm a"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getMovementBadgeClass(move_r3.movementType));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getMovementDotClass(move_r3.movementType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getMovementLabel(move_r3.movementType), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(18, _c03, move_r3.quantity > 0, move_r3.quantity < 0, move_r3.quantity === 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", move_r3.quantity > 0 ? "+" : "", "", move_r3.quantity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", move_r3.referenceId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !move_r3.referenceId);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(move_r3.performedBy), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(move_r3.performedBy || "System");
  }
}
function InventoryDetailsComponent_ng_container_3_div_163_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "div", 98);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span", 99);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 100)(9, "button", 101);
    \u0275\u0275element(10, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 103);
    \u0275\u0275text(12, " 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 101);
    \u0275\u0275element(14, "i", 104);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "COMMON.SHOWING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.movements().length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "COMMON.RESULTS"), " ");
  }
}
function InventoryDetailsComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "nav", 19)(2, "a", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "i", 21);
    \u0275\u0275elementStart(6, "a", 22);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "i", 21);
    \u0275\u0275elementStart(10, "span", 23);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 24)(13, "div")(14, "h1", 25);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 26);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "a", 27);
    \u0275\u0275element(21, "i", 28);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 29)(25, "div", 30)(26, "div")(27, "span", 31);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 32);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "span", 31);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 33);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 34)(39, "span", 31);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p", 35);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 34)(45, "span", 31);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p", 35);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div")(51, "span", 31);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 36);
    \u0275\u0275element(55, "i", 37);
    \u0275\u0275elementStart(56, "span", 38);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(58, "div", 39)(59, "div", 40)(60, "div", 41)(61, "div")(62, "span", 18);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 42)(66, "span", 43);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 18);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "p", 44);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 45)(75, "div", 46);
    \u0275\u0275element(76, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275element(77, "app-stock-status-badge", 48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "div", 40)(79, "div", 41)(80, "div")(81, "span", 18);
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 42)(85, "span", 43);
    \u0275\u0275text(86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "p", 44);
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 45)(91, "div", 49);
    \u0275\u0275element(92, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275template(93, InventoryDetailsComponent_ng_container_3_span_93_Template, 3, 3, "span", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(94, "div", 52)(95, "div", 41)(96, "div")(97, "span", 18);
    \u0275\u0275text(98);
    \u0275\u0275pipe(99, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 42)(101, "span", 53);
    \u0275\u0275text(102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "span", 18);
    \u0275\u0275text(104);
    \u0275\u0275pipe(105, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "p", 44);
    \u0275\u0275text(107);
    \u0275\u0275pipe(108, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div", 45)(110, "div", 54);
    \u0275\u0275element(111, "i", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "span", 56);
    \u0275\u0275text(113);
    \u0275\u0275pipe(114, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(115, "div", 57)(116, "div", 58)(117, "div", 59)(118, "div", 60);
    \u0275\u0275element(119, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "h3", 62);
    \u0275\u0275text(121);
    \u0275\u0275pipe(122, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "div", 59)(124, "button", 63);
    \u0275\u0275element(125, "i", 64);
    \u0275\u0275text(126);
    \u0275\u0275pipe(127, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "button", 65);
    \u0275\u0275listener("click", function InventoryDetailsComponent_ng_container_3_Template_button_click_128_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTransferModal());
    });
    \u0275\u0275element(129, "i", 66);
    \u0275\u0275text(130);
    \u0275\u0275pipe(131, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "button", 67);
    \u0275\u0275listener("click", function InventoryDetailsComponent_ng_container_3_Template_button_click_132_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAdjustModal(2));
    });
    \u0275\u0275element(133, "i", 68);
    \u0275\u0275text(134);
    \u0275\u0275pipe(135, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(136, "div", 69)(137, "table", 70)(138, "thead")(139, "tr", 71)(140, "th", 72)(141, "span", 73);
    \u0275\u0275text(142);
    \u0275\u0275pipe(143, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(144, "th", 72)(145, "span", 73);
    \u0275\u0275text(146);
    \u0275\u0275pipe(147, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(148, "th", 74)(149, "span", 73);
    \u0275\u0275text(150);
    \u0275\u0275pipe(151, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(152, "th", 72)(153, "span", 73);
    \u0275\u0275text(154);
    \u0275\u0275pipe(155, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(156, "th", 72)(157, "span", 73);
    \u0275\u0275text(158);
    \u0275\u0275pipe(159, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(160, "tbody", 75);
    \u0275\u0275template(161, InventoryDetailsComponent_ng_container_3_tr_161_Template, 11, 6, "tr", 2)(162, InventoryDetailsComponent_ng_container_3_tr_162_Template, 24, 22, "tr", 76);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(163, InventoryDetailsComponent_ng_container_3_div_163_Template, 15, 7, "div", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const productStock_r4 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 43, "COMMON.HOME"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 45, "INVENTORY.TITLE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(productStock_r4.productName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 47, "INVENTORY.DETAILS_TITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 49, "INVENTORY.DETAILS_SUBTITLE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 51, "INVENTORY.BACK_TO_LIST"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 53, "INVENTORY.PRODUCT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(productStock_r4.productName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 55, "INVENTORY.SKU"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(productStock_r4.productSKU);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 57, "COMMON.BRAND"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(productStock_r4.brandName || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 59, "COMMON.CATEGORY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(productStock_r4.categoryName || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 61, "INVENTORY.WAREHOUSE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(productStock_r4.warehouseName);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 63, "INVENTORY.QUANTITY_ON_HAND"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(productStock_r4.quantityOnHand);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 65, "COMMON.UNITS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 67, "INVENTORY.ON_HAND_DESC"));
    \u0275\u0275advance(5);
    \u0275\u0275property("quantityOnHand", productStock_r4.quantityOnHand)("reorderLevel", productStock_r4.reorderLevel);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(83, 69, "INVENTORY.QUANTITY_RESERVED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(productStock_r4.quantityReserved);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 71, "INVENTORY.RESERVED_DESC"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", productStock_r4.quantityReserved > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(99, 73, "INVENTORY.QUANTITY_AVAILABLE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(productStock_r4.quantityAvailable);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(105, 75, "COMMON.UNITS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(108, 77, "INVENTORY.AVAILABLE_DESC"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(114, 79, "INVENTORY.SELLABLE"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(122, 81, "INVENTORY.MOVEMENT_HISTORY"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(127, 83, "COMMON.EXPORT"), " CSV ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(131, 85, "INVENTORY.TRANSFER_STOCK"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(135, 87, "INVENTORY.ADJUST_STOCK"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(143, 89, "INVENTORY.DATE_TIME"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(147, 91, "INVENTORY.MOVEMENT_TYPE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(151, 93, "INVENTORY.QUANTITY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(155, 95, "INVENTORY.REFERENCE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(159, 97, "INVENTORY.PERFORMED_BY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.movements().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.movements());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.movements().length > 0);
  }
}
function InventoryDetailsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275element(1, "div", 106);
    \u0275\u0275elementEnd();
  }
}
function InventoryDetailsComponent_ng_container_27_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const productStock_r6 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", productStock_r6.brandName, " ");
  }
}
function InventoryDetailsComponent_ng_container_27_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157);
    \u0275\u0275element(1, "i", 158);
    \u0275\u0275elementStart(2, "p", 159);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "INVENTORY.NO_MOVEMENTS"));
  }
}
function InventoryDetailsComponent_ng_container_27_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 160)(1, "div", 59);
    \u0275\u0275element(2, "span", 161);
    \u0275\u0275elementStart(3, "div")(4, "span", 86);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 87);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "span", 90);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const move_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getMovementDotClass(move_r7.movementType));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getMovementLabel(move_r7.movementType), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 6, move_r7.createdAt, "MMM dd, yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c2, move_r7.quantity > 0, move_r7.quantity < 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", move_r7.quantity > 0 ? "+" : "", "", move_r7.quantity, " ");
  }
}
function InventoryDetailsComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 107)(2, "div", 108)(3, "div", 109)(4, "div", 110);
    \u0275\u0275element(5, "i", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 112)(7, "h3", 113);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 114)(10, "span", 115);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, InventoryDetailsComponent_ng_container_27_span_12_Template, 2, 1, "span", 116);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 117)(14, "div")(15, "span", 118);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 119);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "span", 118);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 120);
    \u0275\u0275element(25, "i", 121);
    \u0275\u0275elementStart(26, "span", 95);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(28, "div", 108)(29, "h4", 122);
    \u0275\u0275element(30, "span", 123);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 124)(34, "div")(35, "span", 18);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 125);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 126);
    \u0275\u0275element(41, "app-stock-status-badge", 48);
    \u0275\u0275elementStart(42, "div", 127);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(43, "svg", 128);
    \u0275\u0275element(44, "path", 129)(45, "path", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(46, "span", 131);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "div", 132)(49, "div")(50, "span", 118);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "p", 133);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div")(56, "span", 118);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "p", 134);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(61, "div", 135)(62, "button", 136);
    \u0275\u0275listener("click", function InventoryDetailsComponent_ng_container_27_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAdjustModal(2));
    });
    \u0275\u0275element(63, "i", 137);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 138);
    \u0275\u0275listener("click", function InventoryDetailsComponent_ng_container_27_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTransferModal());
    });
    \u0275\u0275element(67, "i", 139);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 108)(71, "div", 140)(72, "h4", 8);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "a", 141);
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 142);
    \u0275\u0275template(79, InventoryDetailsComponent_ng_container_27_div_79_Template, 5, 3, "div", 143)(80, InventoryDetailsComponent_ng_container_27_div_80_Template, 11, 12, "div", 144);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 145)(82, "div", 146)(83, "a", 147);
    \u0275\u0275element(84, "i", 148);
    \u0275\u0275elementStart(85, "span", 149);
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "a", 150);
    \u0275\u0275element(89, "i", 151);
    \u0275\u0275elementStart(90, "span", 152);
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "a", 153);
    \u0275\u0275element(94, "i", 154);
    \u0275\u0275elementStart(95, "span", 149);
    \u0275\u0275text(96);
    \u0275\u0275pipe(97, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "a", 155);
    \u0275\u0275element(99, "i", 156);
    \u0275\u0275elementStart(100, "span", 149);
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const productStock_r6 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(productStock_r6.productName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", productStock_r6.productSKU, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", productStock_r6.brandName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 29, "COMMON.CATEGORY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(productStock_r6.categoryName || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 31, "INVENTORY.WAREHOUSE"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(productStock_r6.warehouseName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 33, "INVENTORY.STOCK_SUMMARY"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 35, "INVENTORY.AVAILABLE_TO_SELL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", productStock_r6.quantityAvailable, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("quantityOnHand", productStock_r6.quantityOnHand)("reorderLevel", productStock_r6.reorderLevel);
    \u0275\u0275advance(4);
    \u0275\u0275attribute("stroke-dasharray", ctx_r1.getAvailabilityPercent() + ", 100");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getAvailabilityPercent(), "% ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 37, "INVENTORY.ON_HAND"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(productStock_r6.quantityOnHand);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 39, "INVENTORY.RESERVED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(productStock_r6.quantityReserved);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(65, 41, "INVENTORY.ADJUST_STOCK"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(69, 43, "INVENTORY.TRANSFER"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(74, 45, "INVENTORY.MOVEMENT_HISTORY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction2(57, _c1, ctx_r1.productId, ctx_r1.warehouseId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(77, 47, "INVENTORY.VIEW_ALL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.movements().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.movements().slice(0, 5));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(87, 49, "SIDEBAR.DASHBOARD"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(92, 51, "SIDEBAR.INVENTORY"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(97, 53, "SIDEBAR.ORDERS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(102, 55, "SIDEBAR.SETTINGS"));
  }
}
var InventoryDetailsComponent = class _InventoryDetailsComponent {
  route = inject(ActivatedRoute);
  inventoryService = inject(InventoryService);
  translate = inject(TranslateService);
  languageService = inject(LanguageService);
  destroy$ = new Subject();
  productId;
  warehouseId;
  // Data Signals
  stock = signal(null);
  movements = signal([]);
  isLoading = signal(true);
  // Modal State
  isModalOpen = false;
  modalType = AdjustmentType.SetAbsolute;
  isSubmitting = false;
  // Permissions
  canAdjust = true;
  canTransfer = true;
  // Responsive
  isMobile = false;
  get dir() {
    return this.languageService.currentLanguage === "ar" ? "rtl" : "ltr";
  }
  onResize() {
    this.checkScreenSize();
  }
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }
  ngOnInit() {
    this.checkScreenSize();
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.productId = +params.get("id");
      this.route.queryParamMap.pipe(takeUntil(this.destroy$)).subscribe((queryParams) => {
        this.warehouseId = +queryParams.get("warehouseId") || 1;
        this.loadData();
      });
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadData() {
    this.isLoading.set(true);
    this.inventoryService.getStockByProduct(this.productId, this.warehouseId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        this.stock.set(data);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
    this.inventoryService.getMovementHistory(this.productId, this.warehouseId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.movements.set(data)
    });
  }
  // ==================== Modal Actions ====================
  openAdjustModal(type) {
    this.modalType = type;
    this.isModalOpen = true;
  }
  openTransferModal() {
    console.log("Transfer modal not implemented yet");
  }
  onModalClose() {
    this.isModalOpen = false;
  }
  onModalConfirm(event) {
    if (!this.stock())
      return;
    this.isSubmitting = true;
    const request = {
      productId: this.productId,
      warehouseId: this.warehouseId,
      quantity: event.quantity,
      adjustmentType: this.modalType,
      reason: event.reason
    };
    this.inventoryService.adjustStock(request).pipe(takeUntil(this.destroy$)).subscribe({
      next: (updatedStock) => {
        this.stock.set(updatedStock);
        this.isSubmitting = false;
        this.isModalOpen = false;
        this.inventoryService.getMovementHistory(this.productId, this.warehouseId).pipe(takeUntil(this.destroy$)).subscribe((data) => this.movements.set(data));
      },
      error: (err) => {
        console.error("Adjustment failed", err);
        this.isSubmitting = false;
      }
    });
  }
  // ==================== Movement Type Helpers ====================
  getMovementBadgeClass(type) {
    switch (type) {
      case 0:
        return "bg-emerald-100 text-emerald-700";
      case 1:
        return "bg-red-100 text-red-700";
      case 2:
        return "bg-slate-100 text-slate-700";
      case 3:
        return "bg-amber-100 text-amber-700";
      case 4:
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  }
  getMovementDotClass(type) {
    switch (type) {
      case 0:
        return "bg-emerald-500";
      case 1:
        return "bg-red-500";
      case 2:
        return "bg-slate-500";
      case 3:
        return "bg-amber-500";
      case 4:
        return "bg-blue-500";
      default:
        return "bg-slate-500";
    }
  }
  getMovementLabel(type) {
    switch (type) {
      case 0:
        return this.translate.instant("INVENTORY.TYPE_IN") || "Inbound";
      case 1:
        return this.translate.instant("INVENTORY.TYPE_OUT") || "Outbound";
      case 2:
        return this.translate.instant("INVENTORY.TYPE_ADJUSTMENT") || "Adjustment";
      case 3:
        return this.translate.instant("INVENTORY.TYPE_RESERVE") || "Reserve";
      case 4:
        return this.translate.instant("INVENTORY.TYPE_TRANSFER") || "Transfer";
      default:
        return "Other";
    }
  }
  // ==================== Utility Methods ====================
  getInitials(name) {
    if (!name)
      return "SY";
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }
  getReferenceLink(move) {
    if (move.referenceType === "Order") {
      return ["/orders", move.referenceId?.toString() || ""];
    }
    if (move.referenceType === "Transfer") {
      return ["/inventory/transfers", move.referenceId?.toString() || ""];
    }
    return ["/inventory"];
  }
  getAvailabilityPercent() {
    const currentStock = this.stock();
    if (!currentStock || currentStock.quantityOnHand === 0)
      return 0;
    const percent = Math.round(currentStock.quantityAvailable / currentStock.quantityOnHand * 100);
    return Math.min(100, Math.max(0, percent));
  }
  get MovementType() {
    return AdjustmentType;
  }
  static \u0275fac = function InventoryDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryDetailsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryDetailsComponent, selectors: [["app-inventory-details"]], hostBindings: function InventoryDetailsComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function InventoryDetailsComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, \u0275\u0275resolveWindow);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 24, consts: [[1, "min-h-full", "bg-slate-50"], [1, "hidden", "md:block", "p-6", "lg:p-8", "space-y-6"], [4, "ngIf"], [1, "md:hidden", "min-h-screen", "flex", "flex-col", "bg-slate-50"], [1, "sticky", "top-0", "z-40", "bg-white", "border-b", "border-slate-200"], [1, "flex", "items-center", "justify-between", "px-4", "py-3"], ["routerLink", "/inventory", 1, "p-2", "-ml-2", "text-slate-600"], [1, "fas", "fa-arrow-left", "rtl:rotate-180"], [1, "font-semibold", "text-slate-800"], ["type", "button", 1, "p-2", "-mr-2", "text-slate-600"], [1, "fas", "fa-ellipsis-v"], [1, "px-4", "pb-3", "text-xs", "text-slate-500"], [1, "fas", "fa-chevron-right", "text-[10px]", "mx-1.5", "rtl:rotate-180"], [1, "text-slate-800", "font-medium"], ["class", "flex-1 flex items-center justify-center", 4, "ngIf"], [3, "onClose", "onConfirm", "isOpen", "productName", "currentQuantity", "type", "isSubmitting"], [1, "flex", "flex-col", "items-center", "justify-center", "min-h-[60vh]"], [1, "w-12", "h-12", "border-4", "border-indigo-200", "border-t-indigo-600", "rounded-full", "animate-spin", "mb-4"], [1, "text-sm", "text-slate-500"], [1, "flex", "items-center", "gap-2", "text-sm", "text-slate-500"], ["routerLink", "/dashboard", 1, "hover:text-indigo-600", "transition-colors"], [1, "fas", "fa-chevron-right", "text-xs", "text-slate-300", "rtl:rotate-180"], ["routerLink", "/inventory", 1, "hover:text-indigo-600", "transition-colors"], [1, "text-slate-800", "font-medium", "truncate", "max-w-[200px]"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-start", "lg:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-slate-800"], [1, "mt-1", "text-sm", "text-slate-500"], ["routerLink", "/inventory", 1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-white", "border", "border-slate-200", "text-slate-700", "font-medium", "rounded-xl", "hover:bg-slate-50", "hover:border-slate-300", "transition-all"], [1, "fas", "fa-arrow-left", "text-sm", "rtl:rotate-180"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-sm", "p-4"], [1, "grid", "grid-cols-2", "lg:grid-cols-5", "gap-4", "lg:gap-6"], [1, "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wider"], [1, "mt-1", "font-semibold", "text-slate-800", "truncate"], [1, "mt-1", "font-mono", "text-slate-700"], [1, "hidden", "lg:block"], [1, "mt-1", "text-slate-700"], [1, "mt-1", "flex", "items-center", "gap-1.5"], [1, "fas", "fa-warehouse", "text-slate-400", "text-sm"], [1, "text-slate-700"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-sm", "p-5"], [1, "flex", "items-start", "justify-between"], [1, "mt-2", "flex", "items-baseline", "gap-2"], [1, "text-3xl", "font-bold", "text-slate-800"], [1, "mt-2", "text-xs", "text-slate-400"], [1, "flex", "flex-col", "items-end", "gap-2"], [1, "w-10", "h-10", "bg-blue-50", "rounded-xl", "flex", "items-center", "justify-center"], [1, "fas", "fa-boxes", "text-blue-600"], [3, "quantityOnHand", "reorderLevel"], [1, "w-10", "h-10", "bg-amber-50", "rounded-xl", "flex", "items-center", "justify-center"], [1, "fas", "fa-lock", "text-amber-600"], ["class", "px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full", 4, "ngIf"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-sm", "p-5", "ring-2", "ring-indigo-100"], [1, "text-3xl", "font-bold", "text-indigo-600"], [1, "w-10", "h-10", "bg-indigo-50", "rounded-xl", "flex", "items-center", "justify-center"], [1, "fas", "fa-check-circle", "text-indigo-600"], [1, "px-2.5", "py-1", "bg-indigo-100", "text-indigo-700", "text-xs", "font-semibold", "rounded-full"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-sm", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-slate-100"], [1, "flex", "items-center", "gap-3"], [1, "w-9", "h-9", "bg-slate-100", "rounded-lg", "flex", "items-center", "justify-center"], [1, "fas", "fa-history", "text-slate-600"], [1, "text-lg", "font-semibold", "text-slate-800"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "px-3", "py-2", "text-sm", "text-slate-600", "hover:text-slate-800", "hover:bg-slate-50", "rounded-lg", "transition-colors"], [1, "fas", "fa-download", "text-xs"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-white", "border", "border-slate-200", "text-slate-700", "font-medium", "rounded-xl", "hover:bg-slate-50", "transition-all", 3, "click"], [1, "fas", "fa-exchange-alt", "text-sm"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-indigo-600", "text-white", "font-semibold", "rounded-xl", "hover:bg-indigo-700", "transition-all", "shadow-lg", "shadow-indigo-200", 3, "click"], [1, "fas", "fa-sliders-h", "text-sm"], [1, "overflow-x-auto"], [1, "min-w-full"], [1, "bg-slate-50", "border-b", "border-slate-200"], [1, "px-6", "py-4", "text-start"], [1, "text-xs", "font-semibold", "text-slate-600", "uppercase", "tracking-wider"], [1, "px-6", "py-4", "text-center"], [1, "divide-y", "divide-slate-100"], ["class", "hover:bg-slate-50 transition-colors", 4, "ngFor", "ngForOf"], ["class", "flex items-center justify-between px-6 py-4 bg-slate-50 border-t border-slate-200", 4, "ngIf"], [1, "px-2.5", "py-1", "bg-amber-100", "text-amber-700", "text-xs", "font-semibold", "rounded-full"], ["colspan", "5", 1, "px-6", "py-16"], [1, "flex", "flex-col", "items-center", "justify-center", "text-center"], [1, "w-14", "h-14", "bg-slate-100", "rounded-xl", "flex", "items-center", "justify-center", "mb-4"], [1, "fas", "fa-history", "text-xl", "text-slate-400"], [1, "text-lg", "font-semibold", "text-slate-700", "mb-1"], [1, "hover:bg-slate-50", "transition-colors"], [1, "px-6", "py-4"], [1, "text-sm", "font-medium", "text-slate-800"], [1, "text-xs", "text-slate-500"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-full", "text-xs", "font-semibold", 3, "ngClass"], [1, "w-1.5", "h-1.5", "rounded-full", 3, "ngClass"], [1, "text-sm", "font-bold", 3, "ngClass"], ["class", "text-sm text-indigo-600 hover:text-indigo-800 font-medium", 3, "routerLink", 4, "ngIf"], ["class", "text-sm text-slate-500", 4, "ngIf"], [1, "flex", "items-center", "gap-2"], [1, "w-7", "h-7", "bg-slate-200", "rounded-full", "flex", "items-center", "justify-center", "text-xs", "font-semibold", "text-slate-600"], [1, "text-sm", "text-slate-700"], [1, "text-sm", "text-indigo-600", "hover:text-indigo-800", "font-medium", 3, "routerLink"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "bg-slate-50", "border-t", "border-slate-200"], [1, "text-sm", "text-slate-600"], [1, "font-semibold"], [1, "flex", "items-center", "gap-1"], ["type", "button", "disabled", "", 1, "px-3", "py-2", "bg-white", "border", "border-slate-200", "text-slate-400", "rounded-lg", "text-sm", "cursor-not-allowed"], [1, "fas", "fa-chevron-left", "rtl:rotate-180"], ["type", "button", 1, "px-4", "py-2", "bg-indigo-600", "text-white", "rounded-lg", "text-sm", "font-semibold"], [1, "fas", "fa-chevron-right", "rtl:rotate-180"], [1, "flex-1", "flex", "items-center", "justify-center"], [1, "w-10", "h-10", "border-4", "border-indigo-200", "border-t-indigo-600", "rounded-full", "animate-spin"], [1, "flex-1", "overflow-y-auto", "p-4", "pb-32", "space-y-4"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-4"], [1, "flex", "items-start", "gap-3"], [1, "w-14", "h-14", "bg-slate-100", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0"], [1, "fas", "fa-box", "text-slate-400", "text-xl"], [1, "min-w-0", "flex-1"], [1, "font-semibold", "text-slate-800", "truncate"], [1, "flex", "items-center", "gap-2", "mt-1"], [1, "text-xs", "font-mono", "text-slate-500", "bg-slate-100", "px-2", "py-0.5", "rounded"], ["class", "text-xs text-slate-500", 4, "ngIf"], [1, "grid", "grid-cols-2", "gap-4", "mt-4", "pt-4", "border-t", "border-slate-100"], [1, "text-xs", "text-slate-400", "uppercase"], [1, "text-sm", "text-slate-700", "mt-0.5"], [1, "flex", "items-center", "gap-1", "mt-0.5"], [1, "fas", "fa-warehouse", "text-slate-400", "text-xs"], [1, "font-semibold", "text-slate-800", "mb-4", "flex", "items-center", "gap-2"], [1, "w-1", "h-4", "bg-indigo-600", "rounded-full"], [1, "flex", "items-center", "justify-between", "mb-4", "pb-4", "border-b", "border-slate-100"], [1, "text-3xl", "font-bold", "text-indigo-600", "mt-1"], [1, "flex", "flex-col", "items-center", "gap-2"], [1, "relative", "w-14", "h-14"], ["viewBox", "0 0 36 36", 1, "w-14", "h-14", "transform", "-rotate-90"], ["stroke", "currentColor", "stroke-width", "3", "fill", "none", "d", "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831", 1, "text-slate-200"], ["stroke", "currentColor", "stroke-width", "3", "fill", "none", "stroke-linecap", "round", "d", "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831", 1, "text-indigo-600"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "text-xs", "font-bold", "text-slate-600"], [1, "grid", "grid-cols-2", "gap-4"], [1, "text-2xl", "font-bold", "text-slate-800", "mt-1"], [1, "text-2xl", "font-bold", "text-amber-600", "mt-1"], [1, "grid", "grid-cols-2", "gap-3"], ["type", "button", 1, "flex", "items-center", "justify-center", "gap-2", "py-3", "bg-indigo-600", "text-white", "font-semibold", "rounded-xl", 3, "click"], [1, "fas", "fa-sliders-h"], ["type", "button", 1, "flex", "items-center", "justify-center", "gap-2", "py-3", "bg-white", "border", "border-slate-200", "text-slate-700", "font-medium", "rounded-xl", 3, "click"], [1, "fas", "fa-exchange-alt"], [1, "flex", "items-center", "justify-between", "mb-4"], ["routerLink", "/inventory/movements", 1, "text-sm", "text-indigo-600", "font-medium", 3, "queryParams"], [1, "space-y-3"], ["class", "py-8 text-center text-slate-400", 4, "ngIf"], ["class", "flex items-center justify-between py-3 border-b border-slate-100 last:border-0", 4, "ngFor", "ngForOf"], [1, "fixed", "bottom-0", "inset-x-0", "bg-white", "border-t", "border-slate-200", "z-50"], [1, "flex", "items-center", "justify-around", "py-2"], ["routerLink", "/dashboard", 1, "flex", "flex-col", "items-center", "gap-1", "py-2", "px-4", "text-slate-400"], [1, "fas", "fa-home", "text-lg"], [1, "text-xs"], ["routerLink", "/inventory", 1, "flex", "flex-col", "items-center", "gap-1", "py-2", "px-4", "text-indigo-600"], [1, "fas", "fa-boxes", "text-lg"], [1, "text-xs", "font-medium"], ["routerLink", "/orders", 1, "flex", "flex-col", "items-center", "gap-1", "py-2", "px-4", "text-slate-400"], [1, "fas", "fa-shopping-cart", "text-lg"], ["routerLink", "/settings", 1, "flex", "flex-col", "items-center", "gap-1", "py-2", "px-4", "text-slate-400"], [1, "fas", "fa-cog", "text-lg"], [1, "py-8", "text-center", "text-slate-400"], [1, "fas", "fa-history", "text-2xl", "mb-2"], [1, "text-sm"], [1, "flex", "items-center", "justify-between", "py-3", "border-b", "border-slate-100", "last:border-0"], [1, "w-2", "h-2", "rounded-full", 3, "ngClass"]], template: function InventoryDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, InventoryDetailsComponent_ng_container_2_Template, 6, 3, "ng-container", 2)(3, InventoryDetailsComponent_ng_container_3_Template, 164, 99, "ng-container", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "a", 6);
      \u0275\u0275element(8, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "h1", 8);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 9);
      \u0275\u0275element(13, "i", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 11)(15, "span");
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "i", 12);
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "i", 12);
      \u0275\u0275elementStart(23, "span", 13);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "slice");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(26, InventoryDetailsComponent_div_26_Template, 2, 0, "div", 14)(27, InventoryDetailsComponent_ng_container_27_Template, 103, 60, "ng-container", 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "app-adjust-stock-dialog", 15);
      \u0275\u0275listener("onClose", function InventoryDetailsComponent_Template_app_adjust_stock_dialog_onClose_28_listener() {
        return ctx.onModalClose();
      })("onConfirm", function InventoryDetailsComponent_Template_app_adjust_stock_dialog_onConfirm_28_listener($event) {
        return ctx.onModalConfirm($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_6_0;
      let tmp_10_0;
      let tmp_11_0;
      \u0275\u0275attribute("dir", ctx.dir);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.stock());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 14, "INVENTORY.DETAILS_TITLE"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 16, "COMMON.HOME"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 18, "INVENTORY.TITLE"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(25, 20, (tmp_6_0 = ctx.stock()) == null ? null : tmp_6_0.productName, 0, 20), "...");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.stock());
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.isModalOpen)("productName", ((tmp_10_0 = ctx.stock()) == null ? null : tmp_10_0.productName) || "")("currentQuantity", ((tmp_11_0 = ctx.stock()) == null ? null : tmp_11_0.quantityOnHand) || 0)("type", ctx.modalType)("isSubmitting", ctx.isSubmitting);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, SlicePipe, DatePipe, RouterModule, RouterLink, TranslateModule, TranslatePipe, AdjustStockDialogComponent, StockStatusBadgeComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryDetailsComponent, { className: "InventoryDetailsComponent", filePath: "src\\app\\features\\inventory\\pages\\inventory-details\\inventory-details.component.ts", lineNumber: 23 });
})();

// src/app/core/auth/auth.models.ts
var Permissions = {
  // Products
  PRODUCTS_VIEW: "Products.View",
  PRODUCTS_CREATE: "Products.Create",
  PRODUCTS_EDIT: "Products.Edit",
  PRODUCTS_DELETE: "Products.Delete",
  // Brands
  BRANDS_VIEW: "Brands.View",
  BRANDS_CREATE: "Brands.Create",
  BRANDS_EDIT: "Brands.Edit",
  BRANDS_DELETE: "Brands.Delete",
  // Categories
  CATEGORIES_VIEW: "Categories.View",
  CATEGORIES_CREATE: "Categories.Create",
  CATEGORIES_EDIT: "Categories.Edit",
  CATEGORIES_DELETE: "Categories.Delete",
  // Inventory
  INVENTORY_VIEW: "Inventory.View",
  INVENTORY_ADJUST: "Inventory.Adjust",
  INVENTORY_TRANSFER: "Inventory.Transfer",
  // Warehouses
  WAREHOUSES_VIEW: "Warehouses.View",
  WAREHOUSES_CREATE: "Warehouses.Create",
  WAREHOUSES_EDIT: "Warehouses.Edit",
  WAREHOUSES_DELETE: "Warehouses.Delete",
  // Orders
  ORDERS_VIEW: "Orders.View",
  ORDERS_CREATE: "Orders.Create",
  ORDERS_EDIT: "Orders.Edit",
  ORDERS_UPDATE_STATUS: "Orders.UpdateStatus",
  ORDERS_CANCEL: "Orders.Cancel",
  // Users
  USERS_VIEW: "Users.View",
  USERS_CREATE: "Users.Create",
  USERS_EDIT: "Users.Edit",
  USERS_DELETE: "Users.Delete",
  // Roles
  ROLES_VIEW: "Roles.View",
  ROLES_CREATE: "Roles.Create",
  ROLES_EDIT: "Roles.Edit",
  ROLES_DELETE: "Roles.Delete",
  ROLES_ASSIGN_PERMISSIONS: "Roles.AssignPermissions",
  // Reports
  REPORTS_VIEW: "Reports.View",
  REPORTS_EXPORT: "Reports.Export",
  // Settings
  SETTINGS_VIEW: "Settings.View",
  SETTINGS_EDIT: "Settings.Edit"
};

// src/app/features/inventory/inventory.routes.ts
var INVENTORY_ROUTES = [
  {
    path: "",
    component: InventoryListComponent,
    canActivate: [permissionGuard],
    data: { permission: Permissions.INVENTORY_VIEW }
  },
  {
    path: ":id",
    component: InventoryDetailsComponent,
    canActivate: [permissionGuard],
    data: { permission: Permissions.INVENTORY_VIEW }
  }
];
export {
  INVENTORY_ROUTES
};
//# sourceMappingURL=chunk-VXAQ4EO6.js.map
