import {
  AuthService
} from "./chunk-ABDOFPM2.js";
import "./chunk-VH7VZDZM.js";
import "./chunk-6OPCIAWL.js";
import {
  WarehousesService
} from "./chunk-ZFKGYVVN.js";
import {
  LanguageService
} from "./chunk-SBRLR34M.js";
import "./chunk-ZICMI5CI.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-XIYZMPFO.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  NgControlStatus,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-74XXAL65.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-BOQBRULU.js";
import {
  CommonModule,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  Subject,
  TemplateRef,
  ViewContainerRef,
  debounceTime,
  distinctUntilChanged,
  finalize,
  inject,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-IGAGZNZV.js";
import "./chunk-N7TOP6ZD.js";

// src/app/shared/directives/has-permission.directive.ts
var HasPermissionDirective = class _HasPermissionDirective {
  templateRef = inject(TemplateRef);
  viewContainer = inject(ViewContainerRef);
  authService = inject(AuthService);
  permission = "";
  hasView = false;
  set hasPermission(permission) {
    this.permission = permission;
    this.updateView();
  }
  ngOnInit() {
    this.updateView();
  }
  updateView() {
    const hasPermission = this.authService.hasPermission(this.permission);
    if (hasPermission && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!hasPermission && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
  static \u0275fac = function HasPermissionDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HasPermissionDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HasPermissionDirective, selectors: [["", "hasPermission", ""]], inputs: { hasPermission: "hasPermission" }, standalone: true });
};

// src/app/features/warehouses/components/status-confirm-dialog/status-confirm-dialog.component.ts
function StatusConfirmDialogComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "p", 13);
    \u0275\u0275element(2, "i", 14);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "WAREHOUSES.CONFIRM_DEACTIVATE"));
  }
}
var StatusConfirmDialogComponent = class _StatusConfirmDialogComponent {
  isDeactivate = false;
  onConfirm = new EventEmitter();
  onCancel = new EventEmitter();
  static \u0275fac = function StatusConfirmDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatusConfirmDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusConfirmDialogComponent, selectors: [["app-status-confirm-dialog"]], inputs: { isDeactivate: "isDeactivate" }, outputs: { onConfirm: "onConfirm", onCancel: "onCancel" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 19, consts: [[1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-slate-900/60", "backdrop-blur-sm", "animate-in", "fade-in", "duration-200"], [1, "bg-white", "dark:bg-slate-800", "rounded-2xl", "shadow-2xl", "max-w-md", "w-full", "overflow-hidden", "border", "border-slate-200", "dark:border-slate-700", "animate-in", "zoom-in-95", "duration-200"], [1, "px-6", "py-4", "border-b", "border-slate-100", "dark:border-slate-700", "flex", "items-center", "gap-3"], [1, "p-2", "rounded-xl"], [1, "fas"], [1, "text-lg", "font-semibold", "text-slate-800", "dark:text-white"], [1, "px-6", "py-6"], [1, "text-slate-600", "dark:text-slate-400"], ["class", "mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 rounded-lg", 4, "ngIf"], [1, "px-6", "py-4", "bg-slate-50", "dark:bg-slate-800/50", "flex", "items-center", "justify-end", "gap-3", "font-medium"], [1, "px-4", "py-2", "text-sm", "text-slate-600", "dark:text-slate-400", "hover:bg-white", "dark:hover:bg-slate-700", "rounded-xl", "transition-all", 3, "click"], [1, "px-4", "py-2", "text-sm", "text-white", "rounded-xl", "shadow-lg", "transition-all", "active:scale-95", 3, "click"], [1, "mt-4", "p-3", "bg-amber-50", "dark:bg-amber-900/20", "border", "border-amber-100", "dark:border-amber-800", "rounded-lg"], [1, "text-xs", "text-amber-700", "dark:text-amber-400", "flex", "gap-2"], [1, "fas", "fa-info-circle", "mt-0.5"]], template: function StatusConfirmDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h3", 5);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "p", 7);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, StatusConfirmDialogComponent_div_12_Template, 6, 3, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 9)(14, "button", 10);
      \u0275\u0275listener("click", function StatusConfirmDialogComponent_Template_button_click_14_listener() {
        return ctx.onCancel.emit();
      });
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 11);
      \u0275\u0275listener("click", function StatusConfirmDialogComponent_Template_button_click_17_listener() {
        return ctx.onConfirm.emit();
      });
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275classMap(ctx.isDeactivate ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600");
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.isDeactivate ? "fa-exclamation-triangle" : "fa-check-circle");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 11, ctx.isDeactivate ? "WAREHOUSES.CONFIRM_DEACTIVATE" : "WAREHOUSES.CONFIRM_ACTIVATE"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 13, "WAREHOUSES.DELETE_MESSAGE"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isDeactivate);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 15, "COMMON.CANCEL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.isDeactivate ? "bg-red-600 hover:bg-red-700 shadow-red-200" : "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 17, ctx.isDeactivate ? "COMMON.CONFIRM" : "COMMON.CONFIRM"), " ");
    }
  }, dependencies: [CommonModule, NgIf, TranslateModule, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=status-confirm-dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusConfirmDialogComponent, { className: "StatusConfirmDialogComponent", filePath: "src\\app\\features\\warehouses\\components\\status-confirm-dialog\\status-confirm-dialog.component.ts", lineNumber: 62 });
})();

// src/app/features/warehouses/pages/warehouse-list/warehouse-list.component.ts
var _c0 = (a0) => [a0, "edit"];
function WarehouseListComponent_a_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 59);
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "WAREHOUSES.ADD_WAREHOUSE"), " ");
  }
}
function WarehouseListComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275element(1, "div", 62);
    \u0275\u0275elementEnd();
  }
}
function WarehouseListComponent_div_54_a_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 69);
    \u0275\u0275element(1, "i", 70);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "WAREHOUSES.ADD_WAREHOUSE"), " ");
  }
}
function WarehouseListComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64);
    \u0275\u0275element(2, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 66);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 67);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, WarehouseListComponent_div_54_a_9_Template, 4, 3, "a", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "WAREHOUSES.NO_WAREHOUSES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "WAREHOUSES.EMPTY_DESC"));
    \u0275\u0275advance(2);
    \u0275\u0275property("hasPermission", "Warehouses.Manage");
  }
}
function WarehouseListComponent_table_55_tr_26_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 98);
    \u0275\u0275element(1, "i", 99);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "WAREHOUSES.DEFAULT"), " ");
  }
}
function WarehouseListComponent_table_55_tr_26_a_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 100);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "i", 101);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, w_r4.id))("title", \u0275\u0275pipeBind1(1, 2, "COMMON.EDIT"));
  }
}
function WarehouseListComponent_table_55_tr_26_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 102);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function WarehouseListComponent_table_55_tr_26_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const w_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmStatusToggle(w_r4));
    });
    \u0275\u0275element(2, "i", 103);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("disabled", w_r4.isDefault && w_r4.isActive)("title", \u0275\u0275pipeBind1(1, 4, w_r4.isActive ? "COMMON.DEACTIVATE" : "COMMON.ACTIVATE"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(w_r4.isActive ? "fa-toggle-on text-emerald-500" : "fa-toggle-off");
  }
}
function WarehouseListComponent_table_55_tr_26_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 104);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function WarehouseListComponent_table_55_tr_26_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const w_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setAsDefault(w_r4));
    });
    \u0275\u0275element(2, "i", 105);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "WAREHOUSES.SET_DEFAULT"));
  }
}
function WarehouseListComponent_table_55_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 81)(1, "td", 82)(2, "input", 74);
    \u0275\u0275listener("change", function WarehouseListComponent_table_55_tr_26_Template_input_change_2_listener() {
      const w_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSelection(w_r4.id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td", 82)(4, "div", 9)(5, "div", 83);
    \u0275\u0275element(6, "i", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 85)(8, "div", 86)(9, "a", 87);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, WarehouseListComponent_table_55_tr_26_span_11_Template, 4, 3, "span", 88);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td", 82)(13, "span", 89);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 90)(16, "span", 91);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 82)(19, "span", 92);
    \u0275\u0275element(20, "span", 93);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 82)(24, "div", 94);
    \u0275\u0275template(25, WarehouseListComponent_table_55_tr_26_a_25_Template, 3, 6, "a", 95)(26, WarehouseListComponent_table_55_tr_26_button_26_Template, 3, 6, "button", 96)(27, WarehouseListComponent_table_55_tr_26_button_27_Template, 3, 3, "button", 97);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const w_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-indigo-50", ctx_r1.isSelected(w_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isSelected(w_r4.id));
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, w_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", w_r4.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", w_r4.isDefault);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", w_r4.code, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(w_r4.location);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", w_r4.isActive ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", w_r4.isActive ? "bg-emerald-500" : "bg-slate-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 14, w_r4.isActive ? "COMMON.ACTIVE" : "COMMON.INACTIVE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("hasPermission", "Warehouses.Manage");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "Warehouses.Manage");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !w_r4.isDefault && w_r4.isActive);
  }
}
function WarehouseListComponent_table_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "table", 71)(1, "thead")(2, "tr", 72)(3, "th", 73)(4, "input", 74);
    \u0275\u0275listener("change", function WarehouseListComponent_table_55_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSelectAll($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 75)(6, "span", 76);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "th", 75)(10, "span", 76);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "th", 77)(14, "span", 76);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "th", 75)(18, "span", 76);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "th", 78)(22, "span", 76);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "tbody", 79);
    \u0275\u0275template(26, WarehouseListComponent_table_55_tr_26_Template, 28, 18, "tr", 80);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r1.selectedIds.size === ctx_r1.filteredWarehouses.length && ctx_r1.filteredWarehouses.length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "WAREHOUSES.NAME"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 9, "WAREHOUSES.CODE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 11, "WAREHOUSES.LOCATION"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 13, "COMMON.STATUS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 15, "COMMON.ACTIONS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.filteredWarehouses);
  }
}
function WarehouseListComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "div", 91);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span", 107);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "span", 107);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.SHOWING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.filteredWarehouses.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "COMMON.OF"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.warehouses.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, "COMMON.RESULTS"), " ");
  }
}
function WarehouseListComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "select", 109)(2, "option", 19);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 20);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 21);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.statusFilter);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "COMMON.ALL_STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "COMMON.ACTIVE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "COMMON.INACTIVE"));
  }
}
function WarehouseListComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275element(1, "div", 62);
    \u0275\u0275elementEnd();
  }
}
function WarehouseListComponent_div_72_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "div", 115);
    \u0275\u0275element(2, "i", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 117);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 118);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "WAREHOUSES.NO_WAREHOUSES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "WAREHOUSES.EMPTY_DESC"));
  }
}
function WarehouseListComponent_div_72_div_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 129);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "WAREHOUSES.DEFAULT"), " ");
  }
}
function WarehouseListComponent_div_72_div_2_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 130)(1, "a", 131);
    \u0275\u0275element(2, "i", 132);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 133);
    \u0275\u0275listener("click", function WarehouseListComponent_div_72_div_2_div_22_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const w_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmStatusToggle(w_r8));
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const w_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, w_r8.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "COMMON.EDIT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", w_r8.isDefault && w_r8.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, w_r8.isActive ? "COMMON.DEACTIVATE" : "COMMON.ACTIVATE"), " ");
  }
}
function WarehouseListComponent_div_72_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "div", 120)(2, "div", 9)(3, "div", 121);
    \u0275\u0275element(4, "i", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 86)(7, "h3", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, WarehouseListComponent_div_72_div_2_span_9_Template, 3, 3, "span", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 123);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "span", 124);
    \u0275\u0275element(13, "span", 93);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 125)(17, "span", 126);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 127);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, WarehouseListComponent_div_72_div_2_div_22_Template, 8, 10, "div", 128);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r8 = ctx.$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(w_r8.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", w_r8.isDefault);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(w_r8.location);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", w_r8.isActive ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", w_r8.isActive ? "bg-emerald-500" : "bg-slate-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 9, w_r8.isActive ? "COMMON.ACTIVE" : "COMMON.INACTIVE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 11, "WAREHOUSES.CODE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(w_r8.code);
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "Warehouses.Manage");
  }
}
function WarehouseListComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275template(1, WarehouseListComponent_div_72_div_1_Template, 9, 6, "div", 112)(2, WarehouseListComponent_div_72_div_2_Template, 23, 13, "div", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredWarehouses.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredWarehouses);
  }
}
function WarehouseListComponent_a_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 134);
    \u0275\u0275element(1, "i", 135);
    \u0275\u0275elementEnd();
  }
}
function WarehouseListComponent_app_status_confirm_dialog_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-status-confirm-dialog", 136);
    \u0275\u0275listener("onConfirm", function WarehouseListComponent_app_status_confirm_dialog_96_Template_app_status_confirm_dialog_onConfirm_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleStatus());
    })("onCancel", function WarehouseListComponent_app_status_confirm_dialog_96_Template_app_status_confirm_dialog_onCancel_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDialog = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("isDeactivate", (ctx_r1.selectedWarehouse == null ? null : ctx_r1.selectedWarehouse.isActive) || false);
  }
}
var WarehouseListComponent = class _WarehouseListComponent {
  warehouseService = inject(WarehousesService);
  languageService = inject(LanguageService);
  destroy$ = new Subject();
  // Data
  warehouses = [];
  filteredWarehouses = [];
  loading = false;
  // Filters
  searchControl = new FormControl("");
  statusFilter = new FormControl("");
  // Selection
  selectedIds = /* @__PURE__ */ new Set();
  // Dialog
  showDialog = false;
  selectedWarehouse = null;
  // Mobile
  showMobileFilters = false;
  isMobile = false;
  get dir() {
    return this.languageService.currentLanguage === "ar" ? "rtl" : "ltr";
  }
  onResize() {
    this.isMobile = window.innerWidth < 768;
  }
  ngOnInit() {
    this.isMobile = window.innerWidth < 768;
    this.fetchWarehouses();
    this.searchControl.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(300), distinctUntilChanged()).subscribe(() => this.applyFilters());
    this.statusFilter.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => this.applyFilters());
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  fetchWarehouses() {
    this.loading = true;
    this.warehouseService.getAll().pipe(takeUntil(this.destroy$), finalize(() => this.loading = false)).subscribe({
      next: (data) => {
        this.warehouses = data;
        this.applyFilters();
      },
      error: (err) => console.error("Error fetching warehouses:", err)
    });
  }
  applyFilters() {
    let result = [...this.warehouses];
    const search = this.searchControl.value?.toLowerCase() || "";
    if (search) {
      result = result.filter((w) => w.name.toLowerCase().includes(search) || w.code.toLowerCase().includes(search) || w.location.toLowerCase().includes(search));
    }
    const status = this.statusFilter.value;
    if (status === "active") {
      result = result.filter((w) => w.isActive);
    } else if (status === "inactive") {
      result = result.filter((w) => !w.isActive);
    }
    this.filteredWarehouses = result;
  }
  getCountByStatus(active) {
    return this.warehouses.filter((w) => w.isActive === active).length;
  }
  // ==================== Selection ====================
  isSelected(id) {
    return this.selectedIds.has(id);
  }
  toggleSelection(id) {
    if (this.selectedIds.has(id)) {
      this.selectedIds.delete(id);
    } else {
      this.selectedIds.add(id);
    }
  }
  toggleSelectAll(event) {
    const checked = event.target.checked;
    if (checked) {
      this.filteredWarehouses.forEach((w) => this.selectedIds.add(w.id));
    } else {
      this.selectedIds.clear();
    }
  }
  // ==================== Actions ====================
  confirmStatusToggle(warehouse) {
    this.selectedWarehouse = warehouse;
    this.showDialog = true;
  }
  toggleStatus() {
    if (!this.selectedWarehouse)
      return;
    this.showDialog = false;
    this.loading = true;
    const action = this.selectedWarehouse.isActive ? this.warehouseService.deactivate(this.selectedWarehouse.id) : this.warehouseService.activate(this.selectedWarehouse.id);
    action.pipe(takeUntil(this.destroy$), finalize(() => this.loading = false)).subscribe({
      next: () => {
        this.fetchWarehouses();
        this.selectedWarehouse = null;
      },
      error: (err) => {
        console.error("Error toggling status:", err);
      }
    });
  }
  setAsDefault(warehouse) {
    this.loading = true;
    this.warehouseService.setDefault(warehouse.id).pipe(takeUntil(this.destroy$), finalize(() => this.loading = false)).subscribe({
      next: () => this.fetchWarehouses(),
      error: (err) => console.error("Error setting default:", err)
    });
  }
  static \u0275fac = function WarehouseListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WarehouseListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WarehouseListComponent, selectors: [["app-warehouse-list"]], hostBindings: function WarehouseListComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function WarehouseListComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, \u0275\u0275resolveWindow);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 97, vars: 67, consts: [[1, "min-h-full", "bg-slate-50"], [1, "hidden", "md:block", "p-6", "lg:p-8", "space-y-6"], [1, "flex", "items-center", "gap-2", "text-sm", "text-slate-500"], ["routerLink", "/dashboard", 1, "hover:text-indigo-600", "transition-colors"], [1, "fas", "fa-chevron-right", "text-xs", "text-slate-300", "rtl:rotate-180"], [1, "text-slate-800", "font-medium"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-center", "lg:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-slate-800"], [1, "mt-1", "text-sm", "text-slate-500"], [1, "flex", "items-center", "gap-3"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-white", "border", "border-slate-200", "text-slate-700", "font-medium", "rounded-xl", "hover:bg-slate-50", "transition-all"], [1, "fas", "fa-download", "text-sm"], ["routerLink", "create", "class", "inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200", 4, "hasPermission"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-sm", "p-4"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-center", "gap-4"], [1, "relative", "flex-1", "max-w-md"], [1, "fas", "fa-search", "absolute", "left-4", "top-1/2", "-translate-y-1/2", "text-slate-400"], ["type", "text", 1, "w-full", "pl-11", "pr-4", "py-2.5", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", 3, "formControl", "placeholder"], [1, "px-4", "py-2.5", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "text-slate-700", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "min-w-[150px]", 3, "formControl"], ["value", ""], ["value", "active"], ["value", "inactive"], [1, "hidden", "xl:flex", "items-center", "gap-4", "px-4", "py-2", "bg-slate-50", "rounded-xl", "text-sm"], [1, "flex", "items-center", "gap-1.5"], [1, "w-2", "h-2", "bg-emerald-500", "rounded-full"], [1, "text-slate-600"], [1, "w-2", "h-2", "bg-slate-400", "rounded-full"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-sm", "overflow-hidden"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "flex flex-col items-center justify-center py-20", 4, "ngIf"], ["class", "min-w-full", 4, "ngIf"], ["class", "flex items-center justify-between px-6 py-4 bg-slate-50 border-t border-slate-200", 4, "ngIf"], [1, "md:hidden", "min-h-screen", "flex", "flex-col", "bg-slate-50"], [1, "sticky", "top-0", "z-40", "bg-white", "border-b", "border-slate-200"], [1, "flex", "items-center", "justify-between", "px-4", "py-3"], [1, "font-semibold", "text-slate-800"], ["type", "button", 1, "p-2", "text-slate-600", 3, "click"], [1, "fas", "fa-filter"], [1, "px-4", "pb-3"], [1, "relative"], [1, "fas", "fa-search", "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-slate-400", "text-sm"], ["type", "text", 1, "w-full", "pl-10", "pr-4", "py-2.5", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "formControl", "placeholder"], ["class", "px-4 pb-3 flex gap-2", 4, "ngIf"], ["class", "flex-1 flex items-center justify-center", 4, "ngIf"], ["class", "flex-1 overflow-y-auto p-4 pb-24 space-y-3", 4, "ngIf"], ["routerLink", "create", "class", "fixed bottom-20 end-4 w-14 h-14 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-300 flex items-center justify-center z-50", 4, "hasPermission"], [1, "fixed", "bottom-0", "inset-x-0", "bg-white", "border-t", "border-slate-200", "z-40"], [1, "flex", "items-center", "justify-around", "py-2"], ["routerLink", "/dashboard", 1, "flex", "flex-col", "items-center", "gap-1", "py-2", "px-4", "text-slate-400"], [1, "fas", "fa-home", "text-lg"], [1, "text-xs"], ["routerLink", "/inventory", 1, "flex", "flex-col", "items-center", "gap-1", "py-2", "px-4", "text-slate-400"], [1, "fas", "fa-boxes", "text-lg"], ["routerLink", "/warehouses", 1, "flex", "flex-col", "items-center", "gap-1", "py-2", "px-4", "text-indigo-600"], [1, "fas", "fa-warehouse", "text-lg"], [1, "text-xs", "font-medium"], ["routerLink", "/settings", 1, "flex", "flex-col", "items-center", "gap-1", "py-2", "px-4", "text-slate-400"], [1, "fas", "fa-cog", "text-lg"], [3, "isDeactivate", "onConfirm", "onCancel", 4, "ngIf"], ["routerLink", "create", 1, "inline-flex", "items-center", "gap-2", "px-5", "py-2.5", "bg-indigo-600", "text-white", "font-semibold", "rounded-xl", "hover:bg-indigo-700", "transition-all", "shadow-lg", "shadow-indigo-200"], [1, "fas", "fa-plus", "text-sm"], [1, "flex", "items-center", "justify-center", "py-20"], [1, "w-10", "h-10", "border-4", "border-indigo-200", "border-t-indigo-600", "rounded-full", "animate-spin"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20"], [1, "w-16", "h-16", "bg-slate-100", "rounded-2xl", "flex", "items-center", "justify-center", "mb-4"], [1, "fas", "fa-warehouse", "text-2xl", "text-slate-400"], [1, "text-lg", "font-semibold", "text-slate-700", "mb-1"], [1, "text-sm", "text-slate-500", "mb-4"], ["routerLink", "create", "class", "inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-all", 4, "hasPermission"], ["routerLink", "create", 1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "bg-indigo-600", "text-white", "font-medium", "rounded-xl", "hover:bg-indigo-700", "transition-all"], [1, "fas", "fa-plus"], [1, "min-w-full"], [1, "bg-slate-50", "border-b", "border-slate-200"], [1, "w-12", "px-4", "py-4"], ["type", "checkbox", 1, "w-4", "h-4", "text-indigo-600", "border-slate-300", "rounded", "focus:ring-indigo-500", 3, "change", "checked"], [1, "px-4", "py-4", "text-start"], [1, "text-xs", "font-semibold", "text-slate-600", "uppercase", "tracking-wider"], [1, "px-4", "py-4", "text-start", "hidden", "lg:table-cell"], [1, "px-4", "py-4", "text-end"], [1, "divide-y", "divide-slate-100"], ["class", "transition-colors duration-200 hover:bg-slate-50", 3, "bg-indigo-50", 4, "ngFor", "ngForOf"], [1, "transition-colors", "duration-200", "hover:bg-slate-50"], [1, "px-4", "py-4"], [1, "w-10", "h-10", "bg-indigo-100", "rounded-lg", "flex", "items-center", "justify-center", "flex-shrink-0"], [1, "fas", "fa-warehouse", "text-indigo-600"], [1, "min-w-0"], [1, "flex", "items-center", "gap-2"], [1, "font-medium", "text-slate-800", "hover:text-indigo-600", "transition-colors", "truncate", 3, "routerLink"], ["class", "px-2 py-0.5 bg-indigo-100 text-indigo-600 text-xs font-semibold rounded-full flex items-center gap-1", 4, "ngIf"], [1, "px-2.5", "py-1", "bg-slate-100", "text-slate-600", "text-xs", "font-mono", "font-medium", "rounded-lg"], [1, "px-4", "py-4", "hidden", "lg:table-cell"], [1, "text-sm", "text-slate-600"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-full", "text-xs", "font-semibold", 3, "ngClass"], [1, "w-1.5", "h-1.5", "rounded-full", 3, "ngClass"], [1, "flex", "items-center", "justify-end", "gap-1"], ["class", "p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all", 3, "routerLink", "title", 4, "hasPermission"], ["type", "button", "class", "p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all disabled:opacity-30 disabled:pointer-events-none", 3, "disabled", "title", "click", 4, "hasPermission"], ["type", "button", "class", "p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all", 3, "title", "click", 4, "ngIf"], [1, "px-2", "py-0.5", "bg-indigo-100", "text-indigo-600", "text-xs", "font-semibold", "rounded-full", "flex", "items-center", "gap-1"], [1, "fas", "fa-star", "text-[8px]"], [1, "p-2", "text-slate-400", "hover:text-indigo-600", "hover:bg-indigo-50", "rounded-lg", "transition-all", 3, "routerLink", "title"], [1, "fas", "fa-edit"], ["type", "button", 1, "p-2", "text-slate-400", "hover:text-emerald-600", "hover:bg-emerald-50", "rounded-lg", "transition-all", "disabled:opacity-30", "disabled:pointer-events-none", 3, "click", "disabled", "title"], [1, "fas"], ["type", "button", 1, "p-2", "text-slate-400", "hover:text-amber-600", "hover:bg-amber-50", "rounded-lg", "transition-all", 3, "click", "title"], [1, "fas", "fa-star"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "bg-slate-50", "border-t", "border-slate-200"], [1, "font-semibold"], [1, "px-4", "pb-3", "flex", "gap-2"], [1, "flex-1", "px-3", "py-2", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", 3, "formControl"], [1, "flex-1", "flex", "items-center", "justify-center"], [1, "flex-1", "overflow-y-auto", "p-4", "pb-24", "space-y-3"], ["class", "flex flex-col items-center justify-center py-12 text-center", 4, "ngIf"], ["class", "bg-white rounded-xl border border-slate-200 p-4 shadow-sm", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "items-center", "justify-center", "py-12", "text-center"], [1, "w-14", "h-14", "bg-slate-100", "rounded-xl", "flex", "items-center", "justify-center", "mb-3"], [1, "fas", "fa-warehouse", "text-xl", "text-slate-400"], [1, "font-semibold", "text-slate-700", "mb-1"], [1, "text-sm", "text-slate-500"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-4", "shadow-sm"], [1, "flex", "items-start", "justify-between", "mb-3"], [1, "w-10", "h-10", "bg-indigo-100", "rounded-lg", "flex", "items-center", "justify-center"], ["class", "px-1.5 py-0.5 bg-indigo-100 text-indigo-600 text-[10px] font-bold rounded-full", 4, "ngIf"], [1, "text-xs", "text-slate-500"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-1", "rounded-full", "text-xs", "font-semibold", 3, "ngClass"], [1, "flex", "items-center", "justify-between", "text-sm", "mb-3", "pb-3", "border-b", "border-slate-100"], [1, "text-slate-500"], [1, "font-mono", "text-slate-700", "bg-slate-100", "px-2", "py-0.5", "rounded"], ["class", "flex gap-2", 4, "hasPermission"], [1, "px-1.5", "py-0.5", "bg-indigo-100", "text-indigo-600", "text-[10px]", "font-bold", "rounded-full"], [1, "flex", "gap-2"], [1, "flex-1", "py-2.5", "bg-slate-100", "text-slate-700", "font-medium", "rounded-xl", "text-sm", "text-center", "hover:bg-slate-200", "transition-colors", 3, "routerLink"], [1, "fas", "fa-edit", "me-1"], ["type", "button", 1, "flex-1", "py-2.5", "bg-indigo-50", "text-indigo-600", "font-medium", "rounded-xl", "text-sm", "hover:bg-indigo-100", "transition-colors", "disabled:opacity-40", 3, "click", "disabled"], ["routerLink", "create", 1, "fixed", "bottom-20", "end-4", "w-14", "h-14", "bg-indigo-600", "text-white", "rounded-2xl", "shadow-lg", "shadow-indigo-300", "flex", "items-center", "justify-center", "z-50"], [1, "fas", "fa-plus", "text-xl"], [3, "onConfirm", "onCancel", "isDeactivate"]], template: function WarehouseListComponent_Template(rf, ctx) {
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
      \u0275\u0275template(23, WarehouseListComponent_a_23_Template, 4, 3, "a", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 13)(25, "div", 14)(26, "div", 15);
      \u0275\u0275element(27, "i", 16)(28, "input", 17);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 9)(31, "select", 18)(32, "option", 19);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "option", 20);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "option", 21);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 22)(42, "span", 23);
      \u0275\u0275element(43, "span", 24);
      \u0275\u0275elementStart(44, "span", 25);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "span", 23);
      \u0275\u0275element(48, "span", 26);
      \u0275\u0275elementStart(49, "span", 25);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(52, "div", 27);
      \u0275\u0275template(53, WarehouseListComponent_div_53_Template, 2, 0, "div", 28)(54, WarehouseListComponent_div_54_Template, 10, 7, "div", 29)(55, WarehouseListComponent_table_55_Template, 27, 17, "table", 30)(56, WarehouseListComponent_div_56_Template, 12, 11, "div", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 32)(58, "div", 33)(59, "div", 34)(60, "h1", 35);
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "button", 36);
      \u0275\u0275listener("click", function WarehouseListComponent_Template_button_click_63_listener() {
        return ctx.showMobileFilters = !ctx.showMobileFilters;
      });
      \u0275\u0275element(64, "i", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 38)(66, "div", 39);
      \u0275\u0275element(67, "i", 40)(68, "input", 41);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(70, WarehouseListComponent_div_70_Template, 11, 10, "div", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275template(71, WarehouseListComponent_div_71_Template, 2, 0, "div", 43)(72, WarehouseListComponent_div_72_Template, 3, 2, "div", 44)(73, WarehouseListComponent_a_73_Template, 2, 0, "a", 45);
      \u0275\u0275elementStart(74, "div", 46)(75, "div", 47)(76, "a", 48);
      \u0275\u0275element(77, "i", 49);
      \u0275\u0275elementStart(78, "span", 50);
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "a", 51);
      \u0275\u0275element(82, "i", 52);
      \u0275\u0275elementStart(83, "span", 50);
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "a", 53);
      \u0275\u0275element(87, "i", 54);
      \u0275\u0275elementStart(88, "span", 55);
      \u0275\u0275text(89);
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "a", 56);
      \u0275\u0275element(92, "i", 57);
      \u0275\u0275elementStart(93, "span", 50);
      \u0275\u0275text(94);
      \u0275\u0275pipe(95, "translate");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(96, WarehouseListComponent_app_status_confirm_dialog_96_Template, 1, 1, "app-status-confirm-dialog", 58);
    }
    if (rf & 2) {
      \u0275\u0275attribute("dir", ctx.dir);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 33, "COMMON.HOME"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 35, "WAREHOUSES.TITLE"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 37, "WAREHOUSES.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 39, "WAREHOUSES.DESCRIPTION"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 41, "COMMON.EXPORT"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("hasPermission", "Warehouses.Manage");
      \u0275\u0275advance(5);
      \u0275\u0275property("formControl", ctx.searchControl)("placeholder", \u0275\u0275pipeBind1(29, 43, "WAREHOUSES.SEARCH_PLACEHOLDER"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formControl", ctx.statusFilter);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 45, "COMMON.ALL_STATUS"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 47, "COMMON.ACTIVE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 49, "COMMON.INACTIVE"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(46, 51, "COMMON.ACTIVE"), ": ", ctx.getCountByStatus(true), "");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(51, 53, "COMMON.INACTIVE"), ": ", ctx.getCountByStatus(false), "");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredWarehouses.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredWarehouses.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredWarehouses.length > 0);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 55, "WAREHOUSES.TITLE"));
      \u0275\u0275advance(7);
      \u0275\u0275property("formControl", ctx.searchControl)("placeholder", \u0275\u0275pipeBind1(69, 57, "WAREHOUSES.SEARCH_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showMobileFilters);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("hasPermission", "Warehouses.Manage");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 59, "SIDEBAR.DASHBOARD"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 61, "SIDEBAR.INVENTORY"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 63, "SIDEBAR.WAREHOUSES"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(95, 65, "SIDEBAR.SETTINGS"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showDialog);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    RouterModule,
    RouterLink,
    ReactiveFormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    FormControlDirective,
    TranslateModule,
    TranslatePipe,
    HasPermissionDirective,
    StatusConfirmDialogComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WarehouseListComponent, { className: "WarehouseListComponent", filePath: "src\\app\\features\\warehouses\\pages\\warehouse-list\\warehouse-list.component.ts", lineNumber: 32 });
})();
export {
  WarehouseListComponent
};
//# sourceMappingURL=chunk-UAHZOLOS.js.map
