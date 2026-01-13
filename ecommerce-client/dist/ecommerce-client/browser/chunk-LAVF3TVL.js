import {
  OrderService
} from "./chunk-INGYDYDZ.js";
import "./chunk-ZICMI5CI.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-XIYZMPFO.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-BOQBRULU.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  Subject,
  computed,
  inject,
  signal,
  switchMap,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-IGAGZNZV.js";
import "./chunk-N7TOP6ZD.js";

// src/app/features/orders/pages/order-detail/order-detail.component.ts
var _c0 = () => [1, 2, 3, 4];
function OrderDetailComponent_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function OrderDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "div", 8);
    \u0275\u0275template(3, OrderDetailComponent_div_1_div_3_Template, 1, 0, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function OrderDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "p", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 14);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u2190 ", \u0275\u0275pipeBind1(5, 2, "ORDERS.TITLE"), " ");
  }
}
function OrderDetailComponent_ng_container_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "div", 88)(2, "div", 89);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 90);
    \u0275\u0275element(4, "path", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 92);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 13);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 93);
    \u0275\u0275listener("click", function OrderDetailComponent_ng_container_3_div_1_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewShortages());
    });
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 27);
    \u0275\u0275element(15, "path", 94);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "ORDER_DETAILS.INSUFFICIENT_STOCK"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.shortageCount(), " ", \u0275\u0275pipeBind1(10, 6, "ORDER_DETAILS.ITEMS_EXCEED_STOCK"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 8, "ORDER_DETAILS.VIEW_SHORTAGES"), " ");
  }
}
function OrderDetailComponent_ng_container_3_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 95);
    \u0275\u0275listener("click", function OrderDetailComponent_ng_container_3_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelOrder());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.actionLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "ORDERS.CANCEL_ORDER"), " ");
  }
}
function OrderDetailComponent_ng_container_3_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 96);
    \u0275\u0275listener("click", function OrderDetailComponent_ng_container_3_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.reserveStock());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.actionLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "ORDER_DETAILS.RESERVE_STOCK"), " ");
  }
}
function OrderDetailComponent_ng_container_3_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 96);
    \u0275\u0275listener("click", function OrderDetailComponent_ng_container_3_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.shipOrder());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.actionLoading() || ctx_r0.hasInsufficientStock());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "ORDER_DETAILS.SHIP_ORDER"), " ");
  }
}
function OrderDetailComponent_ng_container_3_tr_97_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 107);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const stock_r7 = ctx.ngIf;
    const item_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getStockStatusClass(stock_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", stock_r7.available >= item_r8.quantity ? item_r8.quantity : stock_r7.available, " / ", item_r8.quantity, " ");
  }
}
function OrderDetailComponent_ng_container_3_tr_97_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275element(2, "span", 108);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const stock_r9 = ctx.ngIf;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap("inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full " + ctx_r0.getStockStatusBadge(stock_r9.status));
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-green-500", stock_r9.status === "in-stock")("bg-amber-500", stock_r9.status === "low-stock")("bg-red-500", stock_r9.status === "out-of-stock");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", stock_r9.status === "in-stock" ? "READY" : stock_r9.status === "low-stock" ? "LOW STOCK" : "OUT OF STOCK", " ");
  }
}
function OrderDetailComponent_ng_container_3_tr_97_ng_container_15_button_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 110);
    \u0275\u0275text(1, "Reorder");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_ng_container_3_tr_97_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OrderDetailComponent_ng_container_3_tr_97_ng_container_15_button_1_Template, 2, 0, "button", 109);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const stock_r10 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stock_r10.status === "out-of-stock");
  }
}
function OrderDetailComponent_ng_container_3_tr_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 97)(1, "td", 98)(2, "div", 99)(3, "div", 100);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 101);
    \u0275\u0275element(5, "path", 102);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span", 103);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td", 104);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 105);
    \u0275\u0275template(11, OrderDetailComponent_ng_container_3_tr_97_ng_container_11_Template, 3, 4, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 105);
    \u0275\u0275template(13, OrderDetailComponent_ng_container_3_tr_97_ng_container_13_Template, 4, 9, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 106);
    \u0275\u0275template(15, OrderDetailComponent_ng_container_3_tr_97_ng_container_15_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(item_r8.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.sku);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.getStockStatus(item_r8));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.getStockStatus(item_r8));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.getStockStatus(item_r8));
  }
}
function OrderDetailComponent_ng_container_3_div_99_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const stock_r11 = ctx.ngIf;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap("inline-flex items-center gap-1 mt-1 px-2 py-0.5 text-xs font-medium rounded-full " + ctx_r0.getStockStatusBadge(stock_r11.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", stock_r11.status === "in-stock" ? "In Stock" : stock_r11.status === "low-stock" ? "Low Stock" : "Out of Stock", " ");
  }
}
function OrderDetailComponent_ng_container_3_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "div", 83)(2, "div", 112);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 113);
    \u0275\u0275element(4, "path", 102);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 72)(6, "p", 103);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 114);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, OrderDetailComponent_ng_container_3_div_99_ng_container_10_Template, 3, 3, "ng-container", 3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(item_r12.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r12.sku, " \u2022 Qty: ", item_r12.quantity, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getStockStatus(item_r12));
  }
}
function OrderDetailComponent_ng_container_3_div_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 115)(2, "p", 116);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 117)(7, "div")(8, "p", 118);
    \u0275\u0275text(9, "In Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 119);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "p", 118);
    \u0275\u0275text(14, "Reserved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 119);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const alloc_r13 = ctx.$implicit;
    \u0275\u0275classMap("p-3 rounded-lg border " + (alloc_r13.status === "critical" ? "border-red-200 bg-red-50" : "border-slate-200 bg-slate-50"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Aisle ", alloc_r13.aisle, ", Bin ", alloc_r13.bin, "");
    \u0275\u0275advance();
    \u0275\u0275classMap("px-2 py-0.5 text-xs font-semibold rounded " + (alloc_r13.status === "optimized" ? "bg-green-100 text-green-700" : alloc_r13.status === "critical" ? "bg-red-100 text-red-700" : "bg-slate-100 text-slate-700"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", alloc_r13.statusLabel, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(alloc_r13.inStock);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(alloc_r13.reserved);
  }
}
function OrderDetailComponent_ng_container_3_div_112__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 127);
    \u0275\u0275element(1, "path", 128);
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_ng_container_3_div_112__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 129);
    \u0275\u0275element(1, "path", 102);
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_ng_container_3_div_112__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 130);
    \u0275\u0275element(1, "path", 81);
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_ng_container_3_div_112__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 131);
    \u0275\u0275element(1, "path", 132);
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_ng_container_3_div_112_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 133);
  }
}
function OrderDetailComponent_ng_container_3_div_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 120)(2, "div");
    \u0275\u0275template(3, OrderDetailComponent_ng_container_3_div_112__svg_svg_3_Template, 2, 0, "svg", 121)(4, OrderDetailComponent_ng_container_3_div_112__svg_svg_4_Template, 2, 0, "svg", 122)(5, OrderDetailComponent_ng_container_3_div_112__svg_svg_5_Template, 2, 0, "svg", 123)(6, OrderDetailComponent_ng_container_3_div_112__svg_svg_6_Template, 2, 0, "svg", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, OrderDetailComponent_ng_container_3_div_112_div_7_Template, 1, 0, "div", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 126)(9, "p", 103);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 35);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const activity_r14 = ctx.$implicit;
    const last_r15 = ctx.last;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("w-8 h-8 rounded-full flex items-center justify-center " + (activity_r14.status === "completed" ? "bg-green-100" : "bg-slate-100"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", activity_r14.icon === "check");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", activity_r14.icon === "box");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", activity_r14.icon === "truck");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", activity_r14.icon === "clock");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r15);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, activity_r14.title));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(activity_r14.timestamp));
  }
}
function OrderDetailComponent_ng_container_3_button_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 134);
    \u0275\u0275listener("click", function OrderDetailComponent_ng_container_3_button_132_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.triggerReplenishment());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ORDER_DETAILS.TRIGGER_REPLENISHMENT"), " ");
  }
}
function OrderDetailComponent_ng_container_3_button_152_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 135);
    \u0275\u0275listener("click", function OrderDetailComponent_ng_container_3_button_152_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelOrder());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ORDERS.CANCEL"), " ");
  }
}
function OrderDetailComponent_ng_container_3_button_153_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 136);
    \u0275\u0275listener("click", function OrderDetailComponent_ng_container_3_button_153_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.reserveStock());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ORDER_DETAILS.RESERVE"), " ");
  }
}
function OrderDetailComponent_ng_container_3_button_154_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 137);
    \u0275\u0275listener("click", function OrderDetailComponent_ng_container_3_button_154_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.shipOrder());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.hasInsufficientStock());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "ORDER_DETAILS.CONFIRM_ORDER"), " ");
  }
}
function OrderDetailComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OrderDetailComponent_ng_container_3_div_1_Template, 16, 10, "div", 15);
    \u0275\u0275elementStart(2, "div", 16)(3, "div", 17)(4, "nav", 18)(5, "a", 19);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 20);
    \u0275\u0275text(9, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 21);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 22)(13, "div", 23)(14, "h1", 24);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 25)(20, "button", 26);
    \u0275\u0275listener("click", function OrderDetailComponent_ng_container_3_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.printInvoice());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 27);
    \u0275\u0275element(22, "path", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, OrderDetailComponent_ng_container_3_button_25_Template, 3, 4, "button", 29)(26, OrderDetailComponent_ng_container_3_button_26_Template, 3, 4, "button", 30)(27, OrderDetailComponent_ng_container_3_button_27_Template, 3, 4, "button", 30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "div", 31)(29, "div", 32)(30, "div", 33)(31, "p", 34);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 35);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 36)(38, "div")(39, "p", 37);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p", 38);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p", 35);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div")(47, "p", 37);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p", 38);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p", 39);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div")(55, "p", 37);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p", 38);
    \u0275\u0275text(59, "Standard Ground");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "p", 35);
    \u0275\u0275text(61, "2-5 business days");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div")(63, "p", 37);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "p", 40);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "p", 35);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(70, "div", 41)(71, "div", 42)(72, "div", 43)(73, "div", 44)(74, "h2", 45);
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 46)(78, "table", 47)(79, "thead", 48)(80, "tr")(81, "th", 49);
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "th", 49);
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "th", 50);
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "th", 50);
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "th", 51);
    \u0275\u0275text(94);
    \u0275\u0275pipe(95, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "tbody", 52);
    \u0275\u0275template(97, OrderDetailComponent_ng_container_3_tr_97_Template, 16, 5, "tr", 53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(98, "div", 54);
    \u0275\u0275template(99, OrderDetailComponent_ng_container_3_div_99_Template, 11, 4, "div", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "div", 56)(101, "div", 57)(102, "h3", 58);
    \u0275\u0275text(103);
    \u0275\u0275pipe(104, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "div", 59);
    \u0275\u0275template(106, OrderDetailComponent_ng_container_3_div_106_Template, 17, 9, "div", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 57)(108, "h3", 58);
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "div", 61);
    \u0275\u0275template(112, OrderDetailComponent_ng_container_3_div_112_Template, 14, 11, "div", 62);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(113, "div", 63)(114, "div", 64)(115, "h3", 58);
    \u0275\u0275text(116);
    \u0275\u0275pipe(117, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "div", 65)(119, "div", 66);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(120, "svg", 67);
    \u0275\u0275element(121, "circle", 68)(122, "circle", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(123, "div", 70)(124, "span", 71);
    \u0275\u0275text(125);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(126, "div", 72)(127, "p", 37);
    \u0275\u0275text(128);
    \u0275\u0275pipe(129, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "p", 71);
    \u0275\u0275text(131);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(132, OrderDetailComponent_ng_container_3_button_132_Template, 3, 3, "button", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "div", 74)(134, "h3", 75);
    \u0275\u0275text(135);
    \u0275\u0275pipe(136, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "div", 76)(138, "button", 77);
    \u0275\u0275listener("click", function OrderDetailComponent_ng_container_3_Template_button_click_138_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPickList());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(139, "svg", 78);
    \u0275\u0275element(140, "path", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(141, "p", 80);
    \u0275\u0275text(142);
    \u0275\u0275pipe(143, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(144, "button", 77);
    \u0275\u0275listener("click", function OrderDetailComponent_ng_container_3_Template_button_click_144_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToCarrierAssign());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(145, "svg", 78);
    \u0275\u0275element(146, "path", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(147, "p", 80);
    \u0275\u0275text(148);
    \u0275\u0275pipe(149, "translate");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(150, "div", 82)(151, "div", 83);
    \u0275\u0275template(152, OrderDetailComponent_ng_container_3_button_152_Template, 3, 3, "button", 84)(153, OrderDetailComponent_ng_container_3_button_153_Template, 3, 3, "button", 85)(154, OrderDetailComponent_ng_container_3_button_154_Template, 3, 4, "button", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasInsufficientStock());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 53, "ORDERS.TITLE"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("#", ctx_r0.order().orderNumber, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(16, 55, "ORDER_DETAILS.ORDER"), " #", ctx_r0.order().orderNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("px-3 py-1 text-xs font-semibold rounded-full uppercase " + ctx_r0.getStatusClass(ctx_r0.order().orderStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.order().orderStatus, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 57, "ORDER_DETAILS.PRINT_LABEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.canCancel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canReserve());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canShip());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 59, "ORDER_DETAILS.ORDER_SUMMARY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(36, 61, "ORDER_DETAILS.LAST_UPDATED"), ": ", ctx_r0.formatTime(ctx_r0.order().createdAt), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 63, "ORDERS.CUSTOMER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.order().customerName || "Guest");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("ID: ", ctx_r0.order().customerId, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 65, "ORDER_DETAILS.ORDER_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.order().createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.order().warehouseName || "Main Warehouse");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(57, 67, "ORDER_DETAILS.SHIPPING_METHOD"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 69, "ORDERS.TOTAL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(ctx_r0.order().totalAmount, ctx_r0.order().currency));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.order().items.length, " items");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(76, 71, "ORDER_DETAILS.ORDER_ITEMS"), " (", ctx_r0.order().items.length, ")");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(83, 73, "ORDER_DETAILS.PRODUCT"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(86, 75, "ORDER_DETAILS.SKU"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(89, 77, "ORDER_DETAILS.QTY"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(92, 79, "ORDER_DETAILS.STATUS"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(95, 81, "ORDER_DETAILS.ACTION"), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.order().items);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.order().items);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(104, 83, "ORDER_DETAILS.INVENTORY_ALLOCATION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.inventoryAllocations());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(110, 85, "ORDER_DETAILS.ACTIVITY_LOG"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.activityLog());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(117, 87, "ORDER_DETAILS.FULFILLMENT_READINESS"));
    \u0275\u0275advance(6);
    \u0275\u0275attribute("stroke", ctx_r0.fulfillmentPercentage() >= 75 ? "#10b981" : ctx_r0.fulfillmentPercentage() >= 50 ? "#f59e0b" : "#6366f1")("stroke-dasharray", 251.33)("stroke-dashoffset", 251.33 - 251.33 * ctx_r0.fulfillmentPercentage() / 100);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.fulfillmentPercentage(), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(129, 89, "ORDER_DETAILS.ITEMS_AVAILABLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.itemsReady(), " / ", ctx_r0.totalItems(), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasInsufficientStock());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(136, 91, "ORDER_DETAILS.OPERATIONS_HUB"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(143, 93, "ORDER_DETAILS.PICKING_LIST"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(149, 95, "ORDER_DETAILS.CARRIER_ASSIGN"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.canCancel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canReserve());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canShip());
  }
}
function OrderDetailComponent_div_4_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ORDER_DETAILS.CONFIRM_RESERVE"));
  }
}
function OrderDetailComponent_div_4_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ORDER_DETAILS.CONFIRM_SHIP"));
  }
}
function OrderDetailComponent_div_4_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ORDER_DETAILS.CONFIRM_CANCEL"));
  }
}
function OrderDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "div", 139)(2, "h3", 140);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 141);
    \u0275\u0275elementContainerStart(6, 142);
    \u0275\u0275template(7, OrderDetailComponent_div_4_span_7_Template, 3, 3, "span", 143)(8, OrderDetailComponent_div_4_span_8_Template, 3, 3, "span", 143)(9, OrderDetailComponent_div_4_span_9_Template, 3, 3, "span", 143);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 144)(11, "button", 145);
    \u0275\u0275listener("click", function OrderDetailComponent_div_4_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showConfirmDialog.set(false));
    });
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 146);
    \u0275\u0275listener("click", function OrderDetailComponent_div_4_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmAction());
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 9, "ORDER_DETAILS.CONFIRM_ACTION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngSwitch", ctx_r0.confirmDialogAction());
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "reserve");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "ship");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "cancel");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 11, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("px-4 py-2 rounded-lg text-white " + (ctx_r0.confirmDialogAction() === "cancel" ? "bg-red-600 hover:bg-red-700" : "bg-indigo-600 hover:bg-indigo-700"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 13, "COMMON.CONFIRM"), " ");
  }
}
function OrderDetailComponent_div_5_div_10_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 159)(1, "p", 160);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 161);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 162)(6, "div")(7, "p", 163);
    \u0275\u0275text(8, "REQUIRED");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 164);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "p", 163);
    \u0275\u0275text(13, "AVAILABLE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 164);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "p", 163);
    \u0275\u0275text(18, "SHORTAGE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 164);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const stock_r22 = \u0275\u0275nextContext().ngIf;
    const item_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r23.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("SKU: ", item_r23.sku, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r23.quantity);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(stock_r22.available);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r23.quantity - stock_r22.available);
  }
}
function OrderDetailComponent_div_5_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OrderDetailComponent_div_5_div_10_ng_container_1_div_1_Template, 21, 5, "div", 158);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const stock_r22 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stock_r22.status !== "in-stock");
  }
}
function OrderDetailComponent_div_5_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157);
    \u0275\u0275template(1, OrderDetailComponent_div_5_div_10_ng_container_1_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r23 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getStockStatus(item_r23));
  }
}
function OrderDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "div", 147)(2, "div", 148)(3, "h3", 45);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 149);
    \u0275\u0275listener("click", function OrderDetailComponent_div_5_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showShortagesModal.set(false));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 150);
    \u0275\u0275element(8, "path", 151);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 152);
    \u0275\u0275template(10, OrderDetailComponent_div_5_div_10_Template, 2, 1, "div", 153);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 154)(12, "button", 155);
    \u0275\u0275listener("click", function OrderDetailComponent_div_5_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showShortagesModal.set(false));
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 156);
    \u0275\u0275listener("click", function OrderDetailComponent_div_5_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.triggerReplenishment();
      return \u0275\u0275resetView(ctx_r0.showShortagesModal.set(false));
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "ORDER_DETAILS.STOCK_SHORTAGES"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.order().items);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 6, "COMMON.CLOSE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 8, "ORDER_DETAILS.TRIGGER_REPLENISHMENT"), " ");
  }
}
function OrderDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 165);
    \u0275\u0275listener("click", function OrderDetailComponent_div_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showToast = false);
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("fixed bottom-20 lg:bottom-4 right-4 px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 z-50 " + (ctx_r0.toastType === "success" ? "bg-green-600 text-white" : ctx_r0.toastType === "warning" ? "bg-amber-500 text-white" : "bg-red-600 text-white"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.toastMessage);
  }
}
var OrderDetailComponent = class _OrderDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  orderService = inject(OrderService);
  translateService = inject(TranslateService);
  destroy$ = new Subject();
  // State
  order = signal(null);
  loading = signal(true);
  error = signal(null);
  actionLoading = signal(false);
  // Toast
  showToast = false;
  toastMessage = "";
  toastType = "success";
  // Modal States
  showShortagesModal = signal(false);
  showConfirmDialog = signal(false);
  confirmDialogAction = signal(null);
  // Mock Inventory Allocation
  inventoryAllocations = signal([
    { zone: "A", aisle: "4", bin: "B-12", inStock: 142, reserved: 2, status: "optimized", statusLabel: "OPTIMIZED" },
    { zone: "G", aisle: "1", bin: "C-05", inStock: 21, reserved: 0, status: "critical", statusLabel: "CRITICAL" }
  ]);
  // Mock Item Stock Status
  itemStockStatus = signal(/* @__PURE__ */ new Map());
  // Computed: Fulfillment
  fulfillmentPercentage = computed(() => {
    const o = this.order();
    if (!o || o.items.length === 0)
      return 0;
    const stockMap = this.itemStockStatus();
    if (stockMap.size === 0)
      return this.getDefaultFulfillment(o.orderStatus);
    let ready = 0;
    o.items.forEach((item) => {
      const stock = stockMap.get(item.productId);
      if (stock && stock.available >= item.quantity)
        ready++;
    });
    return Math.round(ready / o.items.length * 100);
  });
  itemsReady = computed(() => {
    const o = this.order();
    if (!o)
      return 0;
    const stockMap = this.itemStockStatus();
    let ready = 0;
    o.items.forEach((item) => {
      const stock = stockMap.get(item.productId);
      if (stock && stock.available >= item.quantity)
        ready++;
    });
    return ready;
  });
  totalItems = computed(() => this.order()?.items.length || 0);
  shortageCount = computed(() => {
    const o = this.order();
    if (!o)
      return 0;
    const stockMap = this.itemStockStatus();
    let shortages = 0;
    o.items.forEach((item) => {
      const stock = stockMap.get(item.productId);
      if (!stock || stock.available < item.quantity)
        shortages++;
    });
    return shortages;
  });
  hasInsufficientStock = computed(() => this.shortageCount() > 0);
  activityLog = computed(() => {
    const o = this.order();
    if (!o)
      return [];
    const log = [];
    log.push({
      icon: "clipboard",
      title: "ORDER_DETAILS.ACTIVITY.CREATED",
      description: "Customer Portal",
      timestamp: o.createdAt,
      status: "completed"
    });
    if (o.confirmedAt) {
      log.push({
        icon: "check",
        title: "ORDER_DETAILS.ACTIVITY.CONFIRMED",
        description: "System auto-triggered by API",
        timestamp: o.confirmedAt,
        status: "completed"
      });
    }
    if (o.confirmedAt && o.orderStatus !== "Draft" && o.orderStatus !== "Pending") {
      log.push({
        icon: "box",
        title: "ORDER_DETAILS.ACTIVITY.RESERVED",
        description: "Stock checked and reserved",
        timestamp: o.confirmedAt,
        status: "completed"
      });
    }
    if (o.shippedAt) {
      log.push({
        icon: "truck",
        title: "ORDER_DETAILS.ACTIVITY.SHIPPED",
        description: "Carrier pickup completed",
        timestamp: o.shippedAt,
        status: "completed"
      });
    }
    if (o.deliveredAt) {
      log.push({
        icon: "check",
        title: "ORDER_DETAILS.ACTIVITY.DELIVERED",
        description: "Customer signed",
        timestamp: o.deliveredAt,
        status: "completed"
      });
    }
    if (o.cancelledAt) {
      log.push({
        icon: "x",
        title: "ORDER_DETAILS.ACTIVITY.CANCELLED",
        description: o.cancellationReason || "Cancelled",
        timestamp: o.cancelledAt,
        status: "completed"
      });
    }
    if (!o.confirmedAt && o.orderStatus === "Draft") {
      log.push({
        icon: "clock",
        title: "ORDER_DETAILS.ACTIVITY.AWAITING_CONFIRM",
        timestamp: o.createdAt,
        status: "pending"
      });
    }
    return log.reverse();
  });
  ngOnInit() {
    this.route.paramMap.pipe(switchMap((params) => {
      const id = Number(params.get("id"));
      this.loading.set(true);
      return this.orderService.getById(id);
    }), takeUntil(this.destroy$)).subscribe({
      next: (order) => {
        this.order.set(order);
        this.generateMockStockStatus(order);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set("Failed to load order");
        this.loading.set(false);
        console.error("Load order error:", err);
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // Generate mock stock status for items
  generateMockStockStatus(order) {
    const stockMap = /* @__PURE__ */ new Map();
    order.items.forEach((item, index) => {
      const scenarios = [
        { productId: item.productId, available: item.quantity + 10, ordered: item.quantity, reserved: 0, status: "in-stock" },
        { productId: item.productId, available: item.quantity + 2, ordered: item.quantity, reserved: 0, status: "low-stock" },
        { productId: item.productId, available: Math.max(0, item.quantity - 2), ordered: item.quantity, reserved: 0, status: "out-of-stock" }
      ];
      const scenario = index === 1 ? scenarios[2] : index === 2 ? scenarios[1] : scenarios[0];
      stockMap.set(item.productId, scenario);
    });
    this.itemStockStatus.set(stockMap);
  }
  getDefaultFulfillment(status) {
    const fulfillmentMap = {
      "Draft": 0,
      "Pending": 25,
      "Confirmed": 50,
      "Processing": 75,
      "PartiallyShipped": 85,
      "Shipped": 100,
      "Delivered": 100,
      "Cancelled": 0,
      "Refunded": 0
    };
    return fulfillmentMap[status] || 0;
  }
  // Actions
  reserveStock() {
    this.confirmDialogAction.set("reserve");
    this.showConfirmDialog.set(true);
  }
  shipOrder() {
    if (this.hasInsufficientStock()) {
      this.showNotification("warning", "ORDER_DETAILS.INSUFFICIENT_STOCK_WARNING");
      return;
    }
    this.confirmDialogAction.set("ship");
    this.showConfirmDialog.set(true);
  }
  cancelOrder() {
    this.confirmDialogAction.set("cancel");
    this.showConfirmDialog.set(true);
  }
  confirmAction() {
    const action = this.confirmDialogAction();
    const o = this.order();
    if (!o || !action)
      return;
    this.actionLoading.set(true);
    this.showConfirmDialog.set(false);
    switch (action) {
      case "reserve":
        this.orderService.confirm(o.id).pipe(takeUntil(this.destroy$)).subscribe({
          next: (updated) => {
            this.order.set(updated);
            this.showNotification("success", "ORDER_DETAILS.RESERVE_SUCCESS");
            this.actionLoading.set(false);
          },
          error: () => {
            this.showNotification("error", "ORDER_DETAILS.RESERVE_ERROR");
            this.actionLoading.set(false);
          }
        });
        break;
      case "ship":
        this.orderService.ship(o.id).pipe(takeUntil(this.destroy$)).subscribe({
          next: (updated) => {
            this.order.set(updated);
            this.showNotification("success", "ORDERS.SHIP_SUCCESS");
            this.actionLoading.set(false);
          },
          error: () => {
            this.showNotification("error", "ORDERS.SHIP_ERROR");
            this.actionLoading.set(false);
          }
        });
        break;
      case "cancel":
        const reason = "Cancelled by admin";
        this.orderService.cancel(o.id, reason).pipe(takeUntil(this.destroy$)).subscribe({
          next: (updated) => {
            this.order.set(updated);
            this.showNotification("success", "ORDERS.CANCEL_SUCCESS");
            this.actionLoading.set(false);
          },
          error: () => {
            this.showNotification("error", "ORDERS.CANCEL_ERROR");
            this.actionLoading.set(false);
          }
        });
        break;
    }
  }
  printInvoice() {
    window.print();
  }
  viewShortages() {
    this.showShortagesModal.set(true);
  }
  triggerReplenishment() {
    this.showNotification("success", "ORDER_DETAILS.REPLENISHMENT_TRIGGERED");
  }
  goToPickList() {
    this.router.navigate(["/orders", this.order()?.id, "picking"]);
  }
  goToCarrierAssign() {
    this.router.navigate(["/shipments/create"], { queryParams: { orderId: this.order()?.id } });
  }
  // Helpers
  getStockStatus(item) {
    return this.itemStockStatus().get(item.productId) || null;
  }
  getStockStatusClass(status) {
    const classes = {
      "in-stock": "text-green-600",
      "low-stock": "text-amber-600",
      "out-of-stock": "text-red-600"
    };
    return classes[status] || "text-slate-500";
  }
  getStockStatusBadge(status) {
    const classes = {
      "in-stock": "bg-green-100 text-green-700",
      "low-stock": "bg-amber-100 text-amber-700",
      "out-of-stock": "bg-red-100 text-red-700"
    };
    return classes[status] || "bg-slate-100 text-slate-700";
  }
  getStatusClass(status) {
    const classes = {
      "Draft": "bg-slate-100 text-slate-700",
      "Pending": "bg-amber-100 text-amber-700",
      "Confirmed": "bg-blue-100 text-blue-700",
      "Processing": "bg-cyan-100 text-cyan-700",
      "PartiallyShipped": "bg-indigo-100 text-indigo-700",
      "Shipped": "bg-purple-100 text-purple-700",
      "Delivered": "bg-green-100 text-green-700",
      "Cancelled": "bg-red-100 text-red-700",
      "Refunded": "bg-rose-100 text-rose-700"
    };
    return classes[status] || "bg-slate-100 text-slate-700";
  }
  getPaymentStatusClass(status) {
    const classes = {
      "Paid": "bg-green-100 text-green-700",
      "Pending": "bg-amber-100 text-amber-700",
      "Failed": "bg-red-100 text-red-700",
      "Refunded": "bg-rose-100 text-rose-700"
    };
    return classes[status] || "bg-slate-100 text-slate-700";
  }
  formatCurrency(amount, currency = "USD") {
    return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
  }
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }
  formatDateTime(dateString) {
    return new Date(dateString).toLocaleString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  formatTime(dateString) {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  canReserve() {
    const status = this.order()?.orderStatus;
    return status === "Draft" || status === "Pending";
  }
  canShip() {
    return this.order()?.orderStatus === "Confirmed";
  }
  canCancel() {
    const status = this.order()?.orderStatus;
    return status === "Draft" || status === "Pending" || status === "Confirmed";
  }
  showNotification(type, key) {
    this.toastType = type;
    this.toastMessage = this.translateService.instant(key);
    this.showToast = true;
    setTimeout(() => this.showToast = false, 4e3);
  }
  static \u0275fac = function OrderDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetailComponent, selectors: [["app-order-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 6, consts: [[1, "min-h-screen", "bg-slate-50"], ["class", "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 animate-pulse space-y-6", 4, "ngIf"], ["class", "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-red-50 border border-red-200 rounded-xl p-8 text-center", 4, "ngIf"], [4, "ngIf"], ["class", "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-6", "animate-pulse", "space-y-6"], [1, "h-8", "bg-slate-200", "rounded", "w-1/3"], [1, "grid", "grid-cols-1", "md:grid-cols-4", "gap-4"], ["class", "bg-white rounded-xl p-6 h-24", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-xl", "p-6", "h-64"], [1, "bg-white", "rounded-xl", "p-6", "h-24"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-6", "bg-red-50", "border", "border-red-200", "rounded-xl", "p-8", "text-center"], [1, "text-red-600"], ["routerLink", "/orders", 1, "mt-4", "inline-block", "text-indigo-600", "hover:text-indigo-800"], ["class", "bg-red-50 border-b border-red-200 px-4 sm:px-6 lg:px-8 py-3", 4, "ngIf"], [1, "bg-white", "border-b", "border-slate-200"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-5"], [1, "text-sm", "text-slate-500", "mb-3", "hidden", "sm:block"], ["routerLink", "/orders", 1, "hover:text-indigo-600"], [1, "mx-2"], [1, "text-slate-700"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-center", "lg:justify-between", "gap-4"], [1, "flex", "items-center", "gap-3", "flex-wrap"], [1, "text-xl", "sm:text-2xl", "font-bold", "text-slate-900"], [1, "hidden", "lg:flex", "items-center", "gap-3"], [1, "px-4", "py-2", "border", "border-slate-200", "text-slate-600", "rounded-lg", "hover:bg-slate-50", "flex", "items-center", "gap-2", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"], ["class", "px-4 py-2 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 disabled:opacity-50", 3, "disabled", "click", 4, "ngIf"], ["class", "px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 flex items-center gap-2", 3, "disabled", "click", 4, "ngIf"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-6"], [1, "bg-white", "rounded-xl", "shadow-sm", "border", "border-slate-200", "p-5", "mb-6"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-xs", "text-slate-400", "uppercase", "tracking-wider"], [1, "text-xs", "text-slate-400"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-4", "md:gap-6"], [1, "text-xs", "text-slate-500", "uppercase"], [1, "font-semibold", "text-slate-900"], [1, "text-xs", "text-indigo-600"], [1, "font-bold", "text-xl", "text-slate-900"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "space-y-6"], [1, "bg-white", "rounded-xl", "shadow-sm", "border", "border-slate-200", "overflow-hidden"], [1, "px-5", "py-4", "border-b", "border-slate-200", "flex", "items-center", "justify-between"], [1, "text-lg", "font-semibold", "text-slate-900"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "w-full"], [1, "bg-slate-50"], [1, "px-5", "py-3", "text-left", "text-xs", "font-semibold", "text-slate-500", "uppercase"], [1, "px-5", "py-3", "text-center", "text-xs", "font-semibold", "text-slate-500", "uppercase"], [1, "px-5", "py-3", "text-right", "text-xs", "font-semibold", "text-slate-500", "uppercase"], [1, "divide-y", "divide-slate-100"], ["class", "hover:bg-slate-50", 4, "ngFor", "ngForOf"], [1, "md:hidden", "divide-y", "divide-slate-100"], ["class", "p-4", 4, "ngFor", "ngForOf"], [1, "hidden", "lg:grid", "grid-cols-2", "gap-6"], [1, "bg-white", "rounded-xl", "shadow-sm", "border", "border-slate-200", "p-5"], [1, "font-semibold", "text-slate-900", "mb-4"], [1, "space-y-3"], [3, "class", 4, "ngFor", "ngForOf"], [1, "space-y-4"], ["class", "flex gap-3", 4, "ngFor", "ngForOf"], [1, "space-y-6"], [1, "bg-white", "rounded-xl", "shadow-sm", "border", "border-slate-200", "p-6"], [1, "flex", "items-center", "gap-6"], [1, "relative", "w-24", "h-24"], [1, "w-full", "h-full", "transform", "-rotate-90"], ["cx", "48", "cy", "48", "r", "40", "fill", "none", "stroke", "#e2e8f0", "stroke-width", "8"], ["cx", "48", "cy", "48", "r", "40", "fill", "none", "stroke-width", "8", "stroke-linecap", "round"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center"], [1, "text-2xl", "font-bold", "text-slate-900"], [1, "flex-1"], ["class", "w-full mt-4 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 font-medium text-sm", 3, "click", 4, "ngIf"], [1, "bg-indigo-50", "border", "border-indigo-100", "rounded-xl", "p-5"], [1, "font-semibold", "text-indigo-900", "mb-3"], [1, "grid", "grid-cols-2", "gap-3"], [1, "bg-white", "border", "border-slate-200", "rounded-lg", "p-4", "hover:border-indigo-300", "transition-colors", "text-center", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-indigo-600", "mx-auto", "mb-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], [1, "text-sm", "font-medium", "text-slate-700"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"], [1, "lg:hidden", "fixed", "bottom-0", "left-0", "right-0", "bg-white", "border-t", "border-slate-200", "p-4", "shadow-lg", "z-40"], [1, "flex", "gap-3"], ["class", "flex-1 px-4 py-3 border border-slate-200 text-slate-600 rounded-lg font-medium", 3, "click", 4, "ngIf"], ["class", "flex-1 px-4 py-3 bg-indigo-600 text-white rounded-lg font-medium", 3, "click", 4, "ngIf"], ["class", "flex-1 px-4 py-3 bg-indigo-600 text-white rounded-lg font-medium disabled:opacity-50", 3, "disabled", "click", 4, "ngIf"], [1, "bg-red-50", "border-b", "border-red-200", "px-4", "sm:px-6", "lg:px-8", "py-3"], [1, "max-w-7xl", "mx-auto", "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-2"], [1, "flex", "items-center", "gap-2"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-5", "h-5", "text-red-600"], ["fill-rule", "evenodd", "d", "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], [1, "text-red-800", "font-medium"], [1, "text-red-700", "hover:text-red-900", "font-medium", "text-sm", "flex", "items-center", "gap-1", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "px-4", "py-2", "border", "border-slate-200", "text-slate-600", "rounded-lg", "hover:bg-slate-50", "disabled:opacity-50", 3, "click", "disabled"], [1, "px-5", "py-2", "bg-indigo-600", "text-white", "rounded-lg", "hover:bg-indigo-700", "disabled:opacity-50", "flex", "items-center", "gap-2", 3, "click", "disabled"], [1, "hover:bg-slate-50"], [1, "px-5", "py-4"], [1, "flex", "items-center", "gap-3"], [1, "w-12", "h-12", "rounded-lg", "bg-slate-100", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], [1, "font-medium", "text-slate-900"], [1, "px-5", "py-4", "text-slate-500", "font-mono", "text-sm"], [1, "px-5", "py-4", "text-center"], [1, "px-5", "py-4", "text-right"], [1, "font-semibold"], [1, "w-1.5", "h-1.5", "rounded-full"], ["class", "text-indigo-600 hover:text-indigo-800 text-sm font-medium", 4, "ngIf"], [1, "text-indigo-600", "hover:text-indigo-800", "text-sm", "font-medium"], [1, "p-4"], [1, "w-16", "h-16", "rounded-lg", "bg-slate-100", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-7", "h-7", "text-slate-400"], [1, "text-sm", "text-slate-500", "font-mono"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "font-medium", "text-slate-800"], [1, "flex", "gap-6", "mt-2", "text-sm"], [1, "text-xs", "text-slate-400", "uppercase"], [1, "font-semibold", "text-slate-800"], [1, "flex", "flex-col", "items-center"], ["class", "w-4 h-4 text-green-600", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-4 h-4 text-blue-600", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-4 h-4 text-purple-600", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-4 h-4 text-slate-400", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-0.5 h-6 bg-slate-200", 4, "ngIf"], [1, "pb-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-blue-600"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-purple-600"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "w-0.5", "h-6", "bg-slate-200"], [1, "w-full", "mt-4", "px-4", "py-2", "bg-slate-100", "text-slate-700", "rounded-lg", "hover:bg-slate-200", "font-medium", "text-sm", 3, "click"], [1, "flex-1", "px-4", "py-3", "border", "border-slate-200", "text-slate-600", "rounded-lg", "font-medium", 3, "click"], [1, "flex-1", "px-4", "py-3", "bg-indigo-600", "text-white", "rounded-lg", "font-medium", 3, "click"], [1, "flex-1", "px-4", "py-3", "bg-indigo-600", "text-white", "rounded-lg", "font-medium", "disabled:opacity-50", 3, "click", "disabled"], [1, "fixed", "inset-0", "bg-black/50", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "bg-white", "rounded-xl", "shadow-xl", "max-w-md", "w-full", "p-6"], [1, "text-lg", "font-semibold", "text-slate-900", "mb-2"], [1, "text-slate-600", "mb-6"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "flex", "gap-3", "justify-end"], [1, "px-4", "py-2", "border", "border-slate-200", "text-slate-600", "rounded-lg", "hover:bg-slate-50", 3, "click"], [3, "click"], [1, "bg-white", "rounded-xl", "shadow-xl", "max-w-lg", "w-full", "max-h-[80vh]", "overflow-hidden"], [1, "px-6", "py-4", "border-b", "border-slate-200", "flex", "items-center", "justify-between"], [1, "text-slate-400", "hover:text-slate-600", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6", "overflow-y-auto", "max-h-96"], ["class", "mb-4", 4, "ngFor", "ngForOf"], [1, "px-6", "py-4", "border-t", "border-slate-200", "flex", "justify-end", "gap-3"], [1, "px-4", "py-2", "border", "border-slate-200", "text-slate-600", "rounded-lg", 3, "click"], [1, "px-4", "py-2", "bg-indigo-600", "text-white", "rounded-lg", 3, "click"], [1, "mb-4"], ["class", "p-4 bg-red-50 border border-red-200 rounded-lg", 4, "ngIf"], [1, "p-4", "bg-red-50", "border", "border-red-200", "rounded-lg"], [1, "font-medium", "text-red-800"], [1, "text-sm", "text-red-600"], [1, "mt-2", "grid", "grid-cols-3", "gap-4", "text-sm"], [1, "text-xs", "text-red-500"], [1, "font-semibold", "text-red-800"], [1, "hover:opacity-80", 3, "click"]], template: function OrderDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, OrderDetailComponent_div_1_Template, 5, 2, "div", 1)(2, OrderDetailComponent_div_2_Template, 6, 4, "div", 2)(3, OrderDetailComponent_ng_container_3_Template, 155, 97, "ng-container", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, OrderDetailComponent_div_4_Template, 17, 15, "div", 4)(5, OrderDetailComponent_div_5_Template, 18, 10, "div", 4)(6, OrderDetailComponent_div_6_Template, 5, 3, "div", 5);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error() && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.order() && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showConfirmDialog());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showShortagesModal());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showToast);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgSwitch, NgSwitchCase, RouterModule, RouterLink, TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetailComponent, { className: "OrderDetailComponent", filePath: "src\\app\\features\\orders\\pages\\order-detail\\order-detail.component.ts", lineNumber: 41 });
})();
export {
  OrderDetailComponent
};
//# sourceMappingURL=chunk-LAVF3TVL.js.map
