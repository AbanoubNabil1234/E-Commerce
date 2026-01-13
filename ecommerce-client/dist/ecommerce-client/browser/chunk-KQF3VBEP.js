import {
  ShipmentsService
} from "./chunk-Y5DYWHUJ.js";
import {
  OrderService
} from "./chunk-INGYDYDZ.js";
import {
  WarehousesService
} from "./chunk-ZFKGYVVN.js";
import "./chunk-ZICMI5CI.js";
import {
  Router,
  RouterModule
} from "./chunk-XIYZMPFO.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
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
  DecimalPipe,
  NgForOf,
  NgIf,
  computed,
  debounceTime,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-IGAGZNZV.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-N7TOP6ZD.js";

// src/app/features/shipments/pages/shipment-create/shipment-create.component.ts
function ShipmentCreateComponent_div_20__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 44);
    \u0275\u0275element(1, "path", 45);
    \u0275\u0275elementEnd();
  }
}
function ShipmentCreateComponent_div_20_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(step_r1.number);
  }
}
function ShipmentCreateComponent_div_20_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const step_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap("flex-1 h-0.5 mx-3 " + (step_r1.status === "completed" ? "bg-green-500" : "bg-slate-200"));
  }
}
function ShipmentCreateComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "div");
    \u0275\u0275template(3, ShipmentCreateComponent_div_20__svg_svg_3_Template, 2, 0, "svg", 42)(4, ShipmentCreateComponent_div_20_span_4_Template, 2, 1, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ShipmentCreateComponent_div_20_div_8_Template, 1, 2, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    \u0275\u0275classProp("flex-1", !last_r2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all " + (step_r1.status === "completed" ? "bg-green-500 text-white" : step_r1.status === "active" ? "bg-indigo-600 text-white ring-4 ring-indigo-100" : "bg-slate-100 text-slate-400"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", step_r1.status === "completed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", step_r1.status !== "completed");
    \u0275\u0275advance();
    \u0275\u0275classMap("text-xs mt-2 hidden md:block " + (step_r1.status === "active" ? "text-indigo-600 font-medium" : "text-slate-500"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 10, step_r1.label), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !last_r2);
  }
}
function ShipmentCreateComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 44);
    \u0275\u0275element(2, "path", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 48);
    \u0275\u0275listener("click", function ShipmentCreateComponent_div_24_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.error.set(null));
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.error());
  }
}
function ShipmentCreateComponent_div_25_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "div", 55);
    \u0275\u0275elementEnd();
  }
}
function ShipmentCreateComponent_div_25_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function ShipmentCreateComponent_div_25_div_8_div_1_Template_div_click_0_listener() {
      const order_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.selectOrder(order_r6));
    });
    \u0275\u0275elementStart(1, "div", 3)(2, "div")(3, "p", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 61)(8, "p", 35);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 62);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const order_r6 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", order_r6.orderNumber, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r6.customerName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(10, 4, order_r6.totalAmount, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", order_r6.itemCount, " items");
  }
}
function ShipmentCreateComponent_div_25_div_8_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 63);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SHIPMENTS.CREATE.NO_ORDERS"), " ");
  }
}
function ShipmentCreateComponent_div_25_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275template(1, ShipmentCreateComponent_div_25_div_8_div_1_Template, 13, 7, "div", 57)(2, ShipmentCreateComponent_div_25_div_8_p_2_Template, 3, 3, "p", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.orders());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.orders().length === 0);
  }
}
function ShipmentCreateComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "h2", 50);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 51);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ShipmentCreateComponent_div_25_div_7_Template, 2, 0, "div", 52)(8, ShipmentCreateComponent_div_25_div_8_Template, 3, 2, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "SHIPMENTS.CREATE.SELECT_ORDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "SHIPMENTS.CREATE.SELECT_ORDER_DESC"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.ordersLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.ordersLoading());
  }
}
function ShipmentCreateComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "h2", 50);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 64)(5, "div", 65)(6, "div")(7, "label", 66);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "label", 66);
    \u0275\u0275text(13, "L (cm)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "label", 66);
    \u0275\u0275text(17, "W (cm)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "label", 66);
    \u0275\u0275text(21, "H (cm)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "label", 66);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "textarea", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 72)(29, "label", 73);
    \u0275\u0275element(30, "input", 74);
    \u0275\u0275elementStart(31, "span", 75);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "label", 73);
    \u0275\u0275element(35, "input", 76);
    \u0275\u0275elementStart(36, "span", 75);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "SHIPMENTS.CREATE.PACKAGE_DETAILS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r3.packageForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 8, "SHIPMENTS.CREATE.WEIGHT"), " (kg)");
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 10, "SHIPMENTS.CREATE.SPECIAL_HANDLING"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\u{1F532} ", \u0275\u0275pipeBind1(33, 12, "SHIPMENTS.CREATE.FRAGILE"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u2B06\uFE0F ", \u0275\u0275pipeBind1(38, 14, "SHIPMENTS.CREATE.KEEP_UPRIGHT"), "");
  }
}
function ShipmentCreateComponent_div_27_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275property("value", c_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r8.name);
  }
}
function ShipmentCreateComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "h2", 50);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 64)(5, "div", 77)(6, "div")(7, "label", 66);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "select", 78)(11, "option", 79);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ShipmentCreateComponent_div_27_option_14_Template, 2, 2, "option", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "label", 66);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 81)(20, "option", 79);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 82);
    \u0275\u0275text(24, "Standard Ground (3-5 days)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 83);
    \u0275\u0275text(26, "Express (1-2 days)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 84);
    \u0275\u0275text(28, "Overnight");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div")(30, "label", 66);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 85);
    \u0275\u0275element(34, "input", 86);
    \u0275\u0275elementStart(35, "button", 87);
    \u0275\u0275listener("click", function ShipmentCreateComponent_div_27_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.generateTracking());
    });
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div")(39, "label", 66);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 88);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 10, "SHIPMENTS.CREATE.LOGISTICS_DETAILS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r3.logisticsForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 12, "SHIPMENTS.CREATE.COURIER"), " *");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 14, "SHIPMENTS.CREATE.SELECT_COURIER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.couriers());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(18, 16, "SHIPMENTS.CREATE.SHIPPING_METHOD"), " *");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 18, "SHIPMENTS.CREATE.SELECT_METHOD"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 20, "SHIPMENTS.CREATE.TRACKING_NUMBER"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 22, "SHIPMENTS.CREATE.GENERATE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(41, 24, "SHIPMENTS.CREATE.ESTIMATED_DELIVERY"), " *");
  }
}
function ShipmentCreateComponent_div_28_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275listener("click", function ShipmentCreateComponent_div_28_div_6_Template_div_click_0_listener() {
      const wh_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.warehouseForm.patchValue({ warehouseId: wh_r10.id }));
    });
    \u0275\u0275elementStart(1, "div", 93)(2, "div", 94);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 95);
    \u0275\u0275element(4, "path", 96);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div")(6, "p", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const wh_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("p-4 border rounded-lg cursor-pointer transition-all " + (ctx_r3.warehouseForm.value.warehouseId === wh_r10.id ? "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-200" : "border-slate-200 hover:border-indigo-300"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(wh_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(wh_r10.location);
  }
}
function ShipmentCreateComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "h2", 50);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 90)(5, "div", 56);
    \u0275\u0275template(6, ShipmentCreateComponent_div_28_div_6_Template, 10, 4, "div", 91);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "SHIPMENTS.CREATE.DISPATCH_WAREHOUSE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r3.warehouseForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.warehouses());
  }
}
function ShipmentCreateComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "h2", 97);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21)(5, "div", 98)(6, "p", 99);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 100);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 101);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 102)(14, "div")(15, "p", 103);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 35);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "p", 103);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 35);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 102)(27, "div")(28, "p", 103);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 35);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div")(34, "p", 103);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p", 60);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 14, "SHIPMENTS.CREATE.CONFIRM_DETAILS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 16, "SHIPMENTS.CREATE.ORDER_SUMMARY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", (tmp_3_0 = ctx_r3.selectedOrder()) == null ? null : tmp_3_0.orderNumber, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r3.selectedOrder()) == null ? null : tmp_4_0.customerName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 18, "SHIPMENTS.CREATE.WEIGHT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.packageForm.value.weight, " kg");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 20, "SHIPMENTS.CREATE.DIMENSIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", ctx_r3.packageForm.value.length, "\xD7", ctx_r3.packageForm.value.width, "\xD7", ctx_r3.packageForm.value.height, " cm");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 22, "SHIPMENTS.CREATE.COURIER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.selectedCourierName());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(36, 24, "SHIPMENTS.CREATE.TRACKING_NUMBER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.logisticsForm.value.trackingNumber || "-", " ");
  }
}
function ShipmentCreateComponent_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 104);
    \u0275\u0275listener("click", function ShipmentCreateComponent_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.prevStep());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 105);
    \u0275\u0275element(2, "path", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "COMMON.PREVIOUS"), " ");
  }
}
function ShipmentCreateComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function ShipmentCreateComponent_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 107);
    \u0275\u0275listener("click", function ShipmentCreateComponent_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.nextStep());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 105);
    \u0275\u0275element(4, "path", 108);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.NEXT"), " ");
  }
}
function ShipmentCreateComponent_button_34__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 105);
    \u0275\u0275element(1, "path", 112);
    \u0275\u0275elementEnd();
  }
}
function ShipmentCreateComponent_button_34_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 113);
  }
}
function ShipmentCreateComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 109);
    \u0275\u0275listener("click", function ShipmentCreateComponent_button_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.submitShipment());
    });
    \u0275\u0275template(1, ShipmentCreateComponent_button_34__svg_svg_1_Template, 2, 0, "svg", 110)(2, ShipmentCreateComponent_button_34_span_2_Template, 1, 0, "span", 111);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r3.loading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "SHIPMENTS.CREATE.CREATE_SHIPMENT"), " ");
  }
}
function ShipmentCreateComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "h3", 114);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 115)(5, "div", 33)(6, "span", 34);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 60);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 33)(12, "span", 34);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 35);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 33)(18, "span", 34);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 35);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    let tmp_7_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "SHIPMENTS.CREATE.ORDER_INFO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, "SHIPMENTS.CREATE.ORDER_ID"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", (tmp_3_0 = ctx_r3.selectedOrder()) == null ? null : tmp_3_0.orderNumber, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 11, "SHIPMENTS.CREATE.CUSTOMER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r3.selectedOrder()) == null ? null : tmp_5_0.customerName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 13, "SHIPMENTS.CREATE.ITEMS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r3.selectedOrder()) == null ? null : tmp_7_0.itemCount);
  }
}
function ShipmentCreateComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.error(), "\n");
  }
}
var ShipmentCreateComponent = class _ShipmentCreateComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  orderService = inject(OrderService);
  shipmentService = inject(ShipmentsService);
  warehouseService = inject(WarehousesService);
  translate = inject(TranslateService);
  // Stepper
  currentStep = signal(1);
  totalSteps = 5;
  steps = [
    { number: 1, label: "SHIPMENTS.CREATE.STEP_ORDER", status: "active" },
    { number: 2, label: "SHIPMENTS.CREATE.STEP_PACKAGE", status: "pending" },
    { number: 3, label: "SHIPMENTS.CREATE.STEP_LOGISTICS", status: "pending" },
    { number: 4, label: "SHIPMENTS.CREATE.STEP_WAREHOUSE", status: "pending" },
    { number: 5, label: "SHIPMENTS.CREATE.STEP_CONFIRM", status: "pending" }
  ];
  // Forms
  logisticsForm;
  packageForm;
  warehouseForm;
  // Data
  orders = signal([]);
  warehouses = signal([]);
  couriers = signal([]);
  selectedOrder = signal(null);
  // Loading & Error
  loading = signal(false);
  ordersLoading = signal(false);
  error = signal(null);
  // Cost Calculation
  baseFreight = signal(0);
  surcharges = signal(0);
  tax = signal(0);
  totalCost = computed(() => this.baseFreight() + this.surcharges() + this.tax());
  // Selected Courier Name (computed for template)
  selectedCourierName = computed(() => {
    const carrierId = this.logisticsForm?.value?.carrierId;
    if (!carrierId)
      return "-";
    const courier = this.couriers().find((c) => c.id === Number(carrierId));
    return courier?.name || "-";
  });
  constructor() {
    this.packageForm = this.fb.group({
      weight: [0, [Validators.required, Validators.min(0.1)]],
      length: [0, [Validators.required, Validators.min(1)]],
      width: [0, [Validators.required, Validators.min(1)]],
      height: [0, [Validators.required, Validators.min(1)]],
      specialHandling: [""],
      isFragile: [false],
      keepUpright: [false]
    });
    this.logisticsForm = this.fb.group({
      carrierId: ["", Validators.required],
      shippingMethod: ["", Validators.required],
      trackingNumber: [""],
      estimatedDeliveryDate: ["", Validators.required]
    });
    this.warehouseForm = this.fb.group({
      warehouseId: [null, Validators.required]
    });
    this.packageForm.get("weight")?.valueChanges.pipe(debounceTime(500)).subscribe((weight) => {
      if (weight) {
        this.calculateCost(weight);
      }
    });
  }
  ngOnInit() {
    this.loadOrders();
    this.loadWarehouses();
    this.loadCouriers();
  }
  // Data Loading
  loadOrders() {
    this.ordersLoading.set(true);
    this.orderService.getAll({ status: "Confirmed" }).subscribe({
      next: (data) => {
        this.orders.set(data);
        this.ordersLoading.set(false);
      },
      error: () => {
        this.ordersLoading.set(false);
        this.error.set("Failed to load eligible orders");
      }
    });
  }
  loadWarehouses() {
    this.warehouseService.getActive().subscribe((data) => this.warehouses.set(data));
  }
  loadCouriers() {
    this.shipmentService.getCarriers().subscribe((data) => this.couriers.set(data));
  }
  // Workflow Actions
  selectOrder(order) {
    this.selectedOrder.set(order);
    this.nextStep();
  }
  nextStep() {
    if (this.currentStep() < this.totalSteps) {
      this.currentStep.update((v) => v + 1);
      this.updateStepStatuses();
    }
  }
  prevStep() {
    if (this.currentStep() > 1) {
      this.currentStep.update((v) => v - 1);
      this.updateStepStatuses();
    }
  }
  updateStepStatuses() {
    const current = this.currentStep();
    this.steps = this.steps.map((step) => __spreadProps(__spreadValues({}, step), {
      status: step.number < current ? "completed" : step.number === current ? "active" : "pending"
    }));
  }
  // Logic
  calculateCost(weight) {
    const base = 15 + weight * 2.5;
    const methodMultiplier = this.logisticsForm.value.shippingMethod === "Express" ? 1.5 : 1;
    this.baseFreight.set(base * methodMultiplier);
    this.surcharges.set(this.baseFreight() * 0.1);
    this.tax.set((this.baseFreight() + this.surcharges()) * 0.08);
  }
  generateTracking() {
    const carrier = this.couriers().find((c) => c.id === Number(this.logisticsForm.value.carrierId));
    const prefix = carrier ? carrier.code.substring(0, 3).toUpperCase() : "TRK";
    const random = Math.floor(Math.random() * 1e9);
    this.logisticsForm.patchValue({ trackingNumber: `${prefix}-${random}` });
  }
  submitShipment() {
    return __async(this, null, function* () {
      if (this.loading())
        return;
      const order = this.selectedOrder();
      if (!order) {
        this.error.set("Please select an order");
        return;
      }
      const warehouseId = this.warehouseForm.value.warehouseId;
      if (!warehouseId || warehouseId === 0) {
        this.error.set("Please select a warehouse");
        return;
      }
      const carrierId = this.logisticsForm.value.carrierId;
      if (!carrierId) {
        this.error.set("Please select a carrier");
        return;
      }
      this.loading.set(true);
      this.error.set(null);
      try {
        const request = {
          orderId: order.id,
          warehouseId: Number(warehouseId),
          carrierId: Number(carrierId),
          trackingNumber: this.logisticsForm.value.trackingNumber || "",
          shippingMethod: this.logisticsForm.value.shippingMethod || "Standard",
          estimatedDeliveryDate: new Date(this.logisticsForm.value.estimatedDeliveryDate).toISOString(),
          shippingCost: this.totalCost(),
          weight: this.packageForm.value.weight || 1,
          dimensions: `${this.packageForm.value.length || 10}x${this.packageForm.value.width || 10}x${this.packageForm.value.height || 10} cm`,
          items: []
        };
        console.log("Submitting shipment:", request);
        yield this.shipmentService.create(request).toPromise();
        this.router.navigate(["/shipments"]);
      } catch (err) {
        console.error("Shipment creation error:", err);
        this.error.set("Failed to create shipment. Please check all fields.");
      } finally {
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function ShipmentCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShipmentCreateComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShipmentCreateComponent, selectors: [["app-shipment-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 82, vars: 60, consts: [[1, "min-h-screen", "bg-slate-50"], [1, "bg-white", "border-b", "border-slate-200"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-6"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-bold", "text-slate-800"], [1, "text-slate-500", "text-sm", "mt-1"], [1, "flex", "gap-3"], [1, "px-4", "py-2", "border", "border-slate-200", "rounded-lg", "text-slate-600", "hover:bg-slate-50"], [1, "px-5", "py-2", "bg-indigo-600", "text-white", "rounded-lg", "hover:bg-indigo-700", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "mt-8"], [1, "flex", "items-center", "justify-between", "max-w-3xl"], ["class", "flex items-center", 3, "flex-1", 4, "ngFor", "ngForOf"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-8"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "space-y-6"], ["class", "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2", 4, "ngIf"], ["class", "bg-white rounded-xl shadow-sm border border-slate-100 p-6", 4, "ngIf"], ["class", "px-4 py-2 text-slate-600 hover:text-slate-800 flex items-center gap-2", 3, "click", 4, "ngIf"], [4, "ngIf"], ["class", "px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2", 3, "click", 4, "ngIf"], ["class", "px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center gap-2", 3, "disabled", "click", 4, "ngIf"], [1, "space-y-6"], [1, "bg-white", "rounded-xl", "shadow-sm", "border", "border-slate-100", "overflow-hidden"], [1, "p-4", "border-b", "border-slate-100"], [1, "font-semibold", "text-slate-800"], [1, "h-48", "bg-gradient-to-br", "from-blue-50", "to-indigo-50", "flex", "items-center", "justify-center"], [1, "text-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-indigo-200", "mx-auto", "mb-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"], [1, "text-sm", "text-slate-500"], [1, "bg-white", "rounded-xl", "shadow-sm", "border", "border-slate-100", "p-5"], [1, "font-semibold", "text-slate-800", "mb-4"], [1, "space-y-3", "text-sm"], [1, "flex", "justify-between"], [1, "text-slate-500"], [1, "font-medium", "text-slate-800"], [1, "border-t", "border-slate-100", "pt-3", "flex", "justify-between"], [1, "font-bold", "text-lg", "text-indigo-600"], ["class", "bg-white rounded-xl shadow-sm border border-slate-100 p-5", 4, "ngIf"], ["class", "fixed bottom-6 right-6 px-4 py-3 bg-red-600 text-white rounded-lg shadow-lg z-50", 4, "ngIf"], [1, "flex", "items-center"], [1, "flex", "flex-col", "items-center"], ["class", "w-5 h-5", "fill", "currentColor", "viewBox", "0 0 20 20", 4, "ngIf"], [3, "class", 4, "ngIf"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-5", "h-5"], ["fill-rule", "evenodd", "d", "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", "clip-rule", "evenodd"], [1, "bg-red-50", "border", "border-red-200", "text-red-700", "px-4", "py-3", "rounded-lg", "flex", "items-center", "gap-2"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], [1, "ml-auto", "text-red-500", "hover:text-red-700", 3, "click"], [1, "bg-white", "rounded-xl", "shadow-sm", "border", "border-slate-100", "p-6"], [1, "text-lg", "font-semibold", "text-slate-800", "mb-4"], [1, "text-slate-500", "text-sm", "mb-6"], ["class", "text-center py-8", 4, "ngIf"], ["class", "space-y-3", 4, "ngIf"], [1, "text-center", "py-8"], [1, "animate-spin", "rounded-full", "h-8", "w-8", "border-4", "border-indigo-600", "border-t-transparent", "mx-auto"], [1, "space-y-3"], ["class", "p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer transition-all", 3, "click", 4, "ngFor", "ngForOf"], ["class", "text-center py-8 text-slate-500", 4, "ngIf"], [1, "p-4", "border", "border-slate-200", "rounded-lg", "hover:border-indigo-300", "hover:bg-indigo-50", "cursor-pointer", "transition-all", 3, "click"], [1, "font-medium", "text-indigo-600"], [1, "text-right"], [1, "text-xs", "text-slate-400"], [1, "text-center", "py-8", "text-slate-500"], [1, "space-y-6", 3, "formGroup"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-4"], [1, "block", "text-sm", "font-medium", "text-slate-700", "mb-1"], ["type", "number", "formControlName", "weight", "step", "0.1", 1, "w-full", "px-3", "py-2", "border", "border-slate-200", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500"], ["type", "number", "formControlName", "length", 1, "w-full", "px-3", "py-2", "border", "border-slate-200", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500"], ["type", "number", "formControlName", "width", 1, "w-full", "px-3", "py-2", "border", "border-slate-200", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500"], ["type", "number", "formControlName", "height", 1, "w-full", "px-3", "py-2", "border", "border-slate-200", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500"], ["formControlName", "specialHandling", "rows", "2", "placeholder", "Fragile, refrigerated, etc.", 1, "w-full", "px-3", "py-2", "border", "border-slate-200", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500"], [1, "flex", "flex-wrap", "gap-4"], [1, "flex", "items-center", "gap-2", "cursor-pointer"], ["type", "checkbox", "formControlName", "isFragile", 1, "w-4", "h-4", "text-indigo-600", "rounded"], [1, "text-sm", "text-slate-700"], ["type", "checkbox", "formControlName", "keepUpright", 1, "w-4", "h-4", "text-indigo-600", "rounded"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], ["formControlName", "carrierId", 1, "w-full", "px-3", "py-2.5", "border", "border-slate-200", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500", "bg-white"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "shippingMethod", 1, "w-full", "px-3", "py-2.5", "border", "border-slate-200", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500", "bg-white"], ["value", "Standard"], ["value", "Express"], ["value", "Overnight"], [1, "flex", "gap-2"], ["type", "text", "formControlName", "trackingNumber", "placeholder", "e.g. 1Z999AA10123456784", 1, "flex-1", "px-3", "py-2", "border", "border-slate-200", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500"], ["type", "button", 1, "px-4", "py-2", "bg-slate-100", "text-slate-700", "rounded-lg", "hover:bg-slate-200", 3, "click"], ["type", "date", "formControlName", "estimatedDeliveryDate", 1, "w-full", "px-3", "py-2", "border", "border-slate-200", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500"], [3, "value"], [3, "formGroup"], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "flex", "items-center", "gap-4"], [1, "w-10", "h-10", "bg-indigo-100", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-indigo-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], [1, "text-lg", "font-semibold", "text-slate-800", "mb-6"], [1, "p-4", "bg-slate-50", "rounded-lg"], [1, "text-xs", "font-medium", "text-slate-500", "uppercase", "mb-2"], [1, "font-semibold", "text-indigo-600", "text-lg"], [1, "text-slate-600"], [1, "grid", "grid-cols-2", "gap-4"], [1, "text-xs", "text-slate-500"], [1, "px-4", "py-2", "text-slate-600", "hover:text-slate-800", "flex", "items-center", "gap-2", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "px-5", "py-2.5", "bg-indigo-600", "text-white", "rounded-lg", "hover:bg-indigo-700", "flex", "items-center", "gap-2", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "px-6", "py-2.5", "bg-green-600", "text-white", "rounded-lg", "hover:bg-green-700", "disabled:opacity-50", "flex", "items-center", "gap-2", 3, "click", "disabled"], ["class", "w-4 h-4", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "animate-spin", "rounded-full", "h-4", "w-4", "border-2", "border-white", "border-t-transparent"], [1, "font-semibold", "text-slate-800", "mb-3"], [1, "space-y-2", "text-sm"], [1, "fixed", "bottom-6", "right-6", "px-4", "py-3", "bg-red-600", "text-white", "rounded-lg", "shadow-lg", "z-50"]], template: function ShipmentCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "h1", 4);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 5);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 6)(12, "button", 7);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 8);
      \u0275\u0275listener("click", function ShipmentCreateComponent_Template_button_click_15_listener() {
        return ctx.submitShipment();
      });
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 9)(19, "div", 10);
      \u0275\u0275template(20, ShipmentCreateComponent_div_20_Template, 9, 12, "div", 11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "div", 13)(23, "div", 14);
      \u0275\u0275template(24, ShipmentCreateComponent_div_24_Template, 7, 1, "div", 15)(25, ShipmentCreateComponent_div_25_Template, 9, 8, "div", 16)(26, ShipmentCreateComponent_div_26_Template, 39, 16, "div", 16)(27, ShipmentCreateComponent_div_27_Template, 43, 26, "div", 16)(28, ShipmentCreateComponent_div_28_Template, 7, 5, "div", 16)(29, ShipmentCreateComponent_div_29_Template, 39, 26, "div", 16);
      \u0275\u0275elementStart(30, "div", 3);
      \u0275\u0275template(31, ShipmentCreateComponent_button_31_Template, 5, 3, "button", 17)(32, ShipmentCreateComponent_div_32_Template, 1, 0, "div", 18)(33, ShipmentCreateComponent_button_33_Template, 5, 3, "button", 19)(34, ShipmentCreateComponent_button_34_Template, 5, 6, "button", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 21)(36, "div", 22)(37, "div", 23)(38, "h3", 24);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 25)(42, "div", 26);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(43, "svg", 27);
      \u0275\u0275element(44, "path", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(45, "p", 29);
      \u0275\u0275text(46, "Route Preview");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "div", 30)(48, "h3", 31);
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 32)(52, "div", 33)(53, "span", 34);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "span", 35);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 33)(60, "span", 34);
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "span", 35);
      \u0275\u0275text(64);
      \u0275\u0275pipe(65, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 33)(67, "span", 34);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "span", 35);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 36)(74, "span", 24);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "span", 37);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "number");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(80, ShipmentCreateComponent_div_80_Template, 23, 15, "div", 38);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(81, ShipmentCreateComponent_div_81_Template, 2, 1, "div", 39);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 28, "SHIPMENTS.CREATE.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 30, "SHIPMENTS.CREATE.SUBTITLE"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 32, "COMMON.SAVE_DRAFT"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.currentStep() < ctx.totalSteps || ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 34, "SHIPMENTS.CREATE.CREATE_SHIPMENT"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.steps);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep() === 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep() === 2);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep() === 3);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep() === 4);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep() === 5);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.currentStep() > 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep() === 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep() < ctx.totalSteps);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep() === ctx.totalSteps);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 36, "SHIPMENTS.CREATE.ROUTE_MAP"));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 38, "SHIPMENTS.CREATE.COST_SUMMARY"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 40, "SHIPMENTS.CREATE.BASE_FREIGHT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(58, 42, ctx.baseFreight(), "1.2-2"), "");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 45, "SHIPMENTS.CREATE.SURCHARGES"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(65, 47, ctx.surcharges(), "1.2-2"), "");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 50, "SHIPMENTS.CREATE.TAX"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(72, 52, ctx.tax(), "1.2-2"), "");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(76, 55, "SHIPMENTS.CREATE.ESTIMATED_TOTAL"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(79, 57, ctx.totalCost(), "1.2-2"), "");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.selectedOrder());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslateModule, TranslatePipe, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShipmentCreateComponent, { className: "ShipmentCreateComponent", filePath: "src\\app\\features\\shipments\\pages\\shipment-create\\shipment-create.component.ts", lineNumber: 20 });
})();
export {
  ShipmentCreateComponent
};
//# sourceMappingURL=chunk-KQF3VBEP.js.map
