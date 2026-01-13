import {
  OrderService
} from "./chunk-INGYDYDZ.js";
import {
  WarehousesService
} from "./chunk-ZFKGYVVN.js";
import "./chunk-ZICMI5CI.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-XIYZMPFO.js";
import {
  FormsModule,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-74XXAL65.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-BOQBRULU.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  Subject,
  computed,
  inject,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate6
} from "./chunk-IGAGZNZV.js";
import "./chunk-N7TOP6ZD.js";

// src/app/features/orders/pages/order-list/order-list.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _c1 = (a0) => ["/orders", a0];
var _c2 = (a0) => ["/orders", a0, "edit"];
function OrderListComponent_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r1 = ctx.$implicit;
    \u0275\u0275property("value", status_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, status_r1.label), " ");
  }
}
function OrderListComponent_option_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wh_r2 = ctx.$implicit;
    \u0275\u0275property("value", wh_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(wh_r2.name);
  }
}
function OrderListComponent_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function OrderListComponent_button_41_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearFilters());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.CLEAR_FILTERS"), " ");
  }
}
function OrderListComponent_button_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function OrderListComponent_button_43_Template_button_click_0_listener() {
      const status_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onStatusChange(status_r6.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r3.selectedStatus() === status_r6.value ? "px-4 py-2 rounded-full text-sm font-medium bg-indigo-600 text-white whitespace-nowrap" : "px-4 py-2 rounded-full text-sm font-medium bg-white border border-slate-300 text-slate-700 whitespace-nowrap");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, status_r6.label), " ");
  }
}
function OrderListComponent_div_44_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275element(2, "div", 41);
    \u0275\u0275elementStart(3, "div", 42);
    \u0275\u0275element(4, "div", 43)(5, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 45);
    \u0275\u0275elementEnd()();
  }
}
function OrderListComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, OrderListComponent_div_44_div_1_Template, 7, 0, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function OrderListComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 48);
    \u0275\u0275element(3, "path", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 50);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 51);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 10);
    \u0275\u0275element(12, "path", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "ORDERS.EMPTY_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, "ORDERS.EMPTY_DESCRIPTION"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 7, "ORDERS.CREATE_FIRST"), " ");
  }
}
function OrderListComponent_div_46_tr_29_div_32_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 94);
    \u0275\u0275listener("click", function OrderListComponent_div_46_tr_29_div_32_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const order_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.confirmOrder(order_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ORDERS.CONFIRM_ORDER"), " ");
  }
}
function OrderListComponent_div_46_tr_29_div_32_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 95);
    \u0275\u0275listener("click", function OrderListComponent_div_46_tr_29_div_32_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const order_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.shipOrder(order_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ORDERS.SHIP_ORDER"), " ");
  }
}
function OrderListComponent_div_46_tr_29_div_32_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 96);
    \u0275\u0275listener("click", function OrderListComponent_div_46_tr_29_div_32_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const order_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.cancelOrder(order_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ORDERS.CANCEL_ORDER"), " ");
  }
}
function OrderListComponent_div_46_tr_29_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "a", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, OrderListComponent_div_46_tr_29_div_32_button_4_Template, 3, 3, "button", 91)(5, OrderListComponent_div_46_tr_29_div_32_button_5_Template, 3, 3, "button", 92)(6, OrderListComponent_div_46_tr_29_div_32_button_6_Template, 3, 3, "button", 93);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c1, order_r9.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "ORDERS.VIEW_ORDER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.canConfirm(order_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.canShip(order_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.canCancel(order_r9));
  }
}
function OrderListComponent_div_46_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 73)(1, "td", 74)(2, "a", 75);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 74)(5, "div", 76);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 62);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 77);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 78);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 79);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 80)(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 81);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 74)(22, "div", 82)(23, "a", 83);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 10);
    \u0275\u0275element(26, "path", 84)(27, "path", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "div", 15)(29, "button", 86);
    \u0275\u0275listener("click", function OrderListComponent_div_46_tr_29_Template_button_click_29_listener() {
      const order_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleMenu(order_r9.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 10);
    \u0275\u0275element(31, "path", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, OrderListComponent_div_46_tr_29_div_32_Template, 7, 9, "div", 88);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const order_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c1, order_r9.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" #", order_r9.orderNumber, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r9.customerName || "Guest");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r9.customerId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", order_r9.warehouseName || "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", order_r9.itemCount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatCurrency(order_r9.totalAmount, order_r9.currency), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("inline-flex px-3 py-1 text-xs font-semibold rounded-full " + ctx_r3.getStatusClass(order_r9.orderStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 14, "ORDERS.STATUS." + order_r9.orderStatus.toUpperCase()), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(order_r9.createdAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c1, order_r9.id))("title", \u0275\u0275pipeBind1(24, 16, "COMMON.VIEW"));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r3.activeMenuOrderId() === order_r9.id);
  }
}
function OrderListComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "table", 54)(2, "thead", 55)(3, "tr")(4, "th", 56);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 56);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 56);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 57);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 58);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 57);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 56);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 57);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "tbody", 59);
    \u0275\u0275template(29, OrderListComponent_div_46_tr_29_Template, 33, 22, "tr", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 61)(31, "div", 62);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 63)(37, "div", 64)(38, "span", 62);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "select", 65);
    \u0275\u0275listener("change", function OrderListComponent_div_46_Template_select_change_41_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPageSizeChange(+$event.target.value));
    });
    \u0275\u0275elementStart(42, "option", 34);
    \u0275\u0275text(43, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 34);
    \u0275\u0275text(45, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 34);
    \u0275\u0275text(47, "50");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 66)(49, "button", 67);
    \u0275\u0275listener("click", function OrderListComponent_div_46_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPageChange(ctx_r3.pageNumber() - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(50, "svg", 68);
    \u0275\u0275element(51, "path", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(52, "span", 70);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 71);
    \u0275\u0275listener("click", function OrderListComponent_div_46_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPageChange(ctx_r3.pageNumber() + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(55, "svg", 68);
    \u0275\u0275element(56, "path", 72);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 22, "ORDERS.TABLE.ORDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 24, "ORDERS.TABLE.CUSTOMER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 26, "ORDERS.TABLE.WAREHOUSE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 28, "ORDERS.TABLE.ITEMS"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 30, "ORDERS.TABLE.TOTAL"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 32, "ORDERS.TABLE.STATUS"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 34, "ORDERS.TABLE.DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 36, "ORDERS.TABLE.ACTIONS"), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.filteredOrders());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate6(" ", \u0275\u0275pipeBind1(33, 38, "COMMON.SHOWING"), " ", (ctx_r3.pageNumber() - 1) * ctx_r3.pageSize() + 1, " - ", ctx_r3.pageNumber() * ctx_r3.pageSize(), " ", \u0275\u0275pipeBind1(34, 40, "COMMON.OF"), " ", ctx_r3.filteredOrders().length, " ", \u0275\u0275pipeBind1(35, 42, "ORDERS.ORDERS"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(40, 44, "COMMON.ROWS_PER_PAGE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r3.pageSize());
    \u0275\u0275advance();
    \u0275\u0275property("value", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 20);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 50);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.pageNumber() === 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.pageNumber());
  }
}
function OrderListComponent_div_47_div_1_a_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 112);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c1, order_r13.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "ORDERS.VIEW_DETAILS"), " ");
  }
}
function OrderListComponent_div_47_div_1_a_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 113);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c2, order_r13.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "ORDERS.EDIT_DRAFT"), " ");
  }
}
function OrderListComponent_div_47_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "div", 100)(2, "div", 101)(3, "div");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 10);
    \u0275\u0275element(5, "path", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div")(7, "div", 102);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 103);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 104)(15, "div", 105)(16, "span", 106);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 107);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 105)(22, "span", 106);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 108);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 105)(28, "span", 106);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 109);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(33, OrderListComponent_div_47_div_1_a_33_Template, 3, 6, "a", 110)(34, OrderListComponent_div_47_div_1_a_34_Template, 3, 6, "a", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r13 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("w-10 h-10 rounded-lg flex items-center justify-center " + (order_r13.orderStatus === "Draft" ? "bg-amber-100" : order_r13.orderStatus === "Shipped" ? "bg-purple-100" : order_r13.orderStatus === "Delivered" ? "bg-green-100" : "bg-indigo-100"));
    \u0275\u0275advance();
    \u0275\u0275classMap(order_r13.orderStatus === "Draft" ? "text-amber-600" : order_r13.orderStatus === "Shipped" ? "text-purple-600" : order_r13.orderStatus === "Delivered" ? "text-green-600" : "text-indigo-600");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", order_r13.orderNumber, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getRelativeTime(order_r13.createdAt));
    \u0275\u0275advance();
    \u0275\u0275classMap("px-3 py-1 text-xs font-semibold rounded-full " + ctx_r3.getStatusClass(order_r13.orderStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 17, "ORDERS.STATUS." + order_r13.orderStatus.toUpperCase()), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(18, 19, "ORDERS.CUSTOMER"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r13.customerName || "Guest");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(24, 21, "ORDERS.WAREHOUSE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r13.warehouseName || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(30, 23, "ORDERS.TOTAL"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatCurrency(order_r13.totalAmount, order_r13.currency));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r13.orderStatus !== "Draft");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r13.orderStatus === "Draft");
  }
}
function OrderListComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275template(1, OrderListComponent_div_47_div_1_Template, 35, 25, "div", 98);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.filteredOrders());
  }
}
function OrderListComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 114);
    \u0275\u0275listener("click", function OrderListComponent_div_48_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showToast = false);
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classMap("fixed bottom-4 right-4 px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 z-50 " + (ctx_r3.toastType === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.toastMessage);
  }
}
function OrderListComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275listener("click", function OrderListComponent_div_49_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeMenu());
    });
    \u0275\u0275elementEnd();
  }
}
var OrderListComponent = class _OrderListComponent {
  orderService = inject(OrderService);
  warehouseService = inject(WarehousesService);
  translateService = inject(TranslateService);
  destroy$ = new Subject();
  // State
  orders = signal([]);
  warehouses = signal([]);
  loading = signal(true);
  error = signal(null);
  // Filters
  searchTerm = signal("");
  selectedStatus = signal("");
  selectedWarehouseId = signal(null);
  fromDate = signal("");
  toDate = signal("");
  // Pagination
  pageNumber = signal(1);
  pageSize = signal(10);
  totalOrders = signal(0);
  // UI States
  showToast = false;
  toastMessage = "";
  toastType = "success";
  // Action menu
  activeMenuOrderId = signal(null);
  // Status options for filter
  statusOptions = [
    { value: "", label: "ORDERS.STATUS.ALL" },
    { value: "Draft", label: "ORDERS.STATUS.DRAFT" },
    { value: "Confirmed", label: "ORDERS.STATUS.CONFIRMED" },
    { value: "Shipped", label: "ORDERS.STATUS.SHIPPED" },
    { value: "Delivered", label: "ORDERS.STATUS.DELIVERED" },
    { value: "Cancelled", label: "ORDERS.STATUS.CANCELLED" }
  ];
  // Computed: filtered orders
  filteredOrders = computed(() => {
    let filtered = this.orders();
    const search = this.searchTerm().toLowerCase();
    if (search) {
      filtered = filtered.filter((o) => o.orderNumber.toLowerCase().includes(search) || o.customerName?.toLowerCase().includes(search));
    }
    return filtered;
  });
  ngOnInit() {
    this.loadWarehouses();
    this.loadOrders();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadWarehouses() {
    this.warehouseService.getAll().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.warehouses.set(data),
      error: (err) => console.error("Failed to load warehouses", err)
    });
  }
  loadOrders() {
    this.loading.set(true);
    this.error.set(null);
    const filter = {
      pageNumber: this.pageNumber(),
      pageSize: this.pageSize()
    };
    if (this.selectedStatus())
      filter.status = this.selectedStatus();
    if (this.selectedWarehouseId())
      filter.warehouseId = this.selectedWarehouseId();
    if (this.fromDate())
      filter.fromDate = this.fromDate();
    if (this.toDate())
      filter.toDate = this.toDate();
    if (this.searchTerm())
      filter.searchTerm = this.searchTerm();
    this.orderService.getAll(filter).pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        this.orders.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set("Failed to load orders");
        this.loading.set(false);
        console.error("Load orders error:", err);
      }
    });
  }
  // Filter handlers
  onSearchChange(term) {
    this.searchTerm.set(term);
    this.pageNumber.set(1);
    this.loadOrders();
  }
  onStatusChange(status) {
    this.selectedStatus.set(status);
    this.pageNumber.set(1);
    this.loadOrders();
  }
  onWarehouseChange(warehouseId) {
    this.selectedWarehouseId.set(warehouseId);
    this.pageNumber.set(1);
    this.loadOrders();
  }
  onDateRangeChange() {
    this.pageNumber.set(1);
    this.loadOrders();
  }
  clearFilters() {
    this.searchTerm.set("");
    this.selectedStatus.set("");
    this.selectedWarehouseId.set(null);
    this.fromDate.set("");
    this.toDate.set("");
    this.pageNumber.set(1);
    this.loadOrders();
  }
  hasActiveFilters() {
    return !!(this.searchTerm() || this.selectedStatus() || this.selectedWarehouseId() || this.fromDate() || this.toDate());
  }
  // Pagination
  onPageChange(page) {
    this.pageNumber.set(page);
    this.loadOrders();
  }
  onPageSizeChange(size) {
    this.pageSize.set(size);
    this.pageNumber.set(1);
    this.loadOrders();
  }
  // Actions menu
  toggleMenu(orderId) {
    this.activeMenuOrderId.set(this.activeMenuOrderId() === orderId ? null : orderId);
  }
  closeMenu() {
    this.activeMenuOrderId.set(null);
  }
  // Order actions
  confirmOrder(order) {
    this.orderService.confirm(order.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.showNotification("success", "ORDERS.CONFIRM_SUCCESS");
        this.loadOrders();
      },
      error: (err) => {
        this.showNotification("error", "ORDERS.CONFIRM_ERROR");
        console.error("Confirm error:", err);
      }
    });
    this.closeMenu();
  }
  cancelOrder(order) {
    const reason = prompt(this.translateService.instant("ORDERS.CANCEL_REASON_PROMPT"));
    if (reason === null)
      return;
    this.orderService.cancel(order.id, reason).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.showNotification("success", "ORDERS.CANCEL_SUCCESS");
        this.loadOrders();
      },
      error: (err) => {
        this.showNotification("error", "ORDERS.CANCEL_ERROR");
        console.error("Cancel error:", err);
      }
    });
    this.closeMenu();
  }
  shipOrder(order) {
    this.orderService.ship(order.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.showNotification("success", "ORDERS.SHIP_SUCCESS");
        this.loadOrders();
      },
      error: (err) => {
        this.showNotification("error", "ORDERS.SHIP_ERROR");
        console.error("Ship error:", err);
      }
    });
    this.closeMenu();
  }
  // Helpers
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
  formatCurrency(amount, currency = "USD") {
    return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
  }
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  }
  getRelativeTime(dateString) {
    const date = new Date(dateString);
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 6e4);
    const diffHours = Math.floor(diffMs / 36e5);
    const diffDays = Math.floor(diffMs / 864e5);
    if (diffMins < 1)
      return this.translateService.instant("COMMON.JUST_NOW");
    if (diffMins < 60)
      return `${diffMins} ${this.translateService.instant("COMMON.MINS_AGO")}`;
    if (diffHours < 24)
      return `${diffHours} ${this.translateService.instant("COMMON.HOURS_AGO")}`;
    return `${diffDays} ${this.translateService.instant("COMMON.DAYS_AGO")}`;
  }
  showNotification(type, key) {
    this.toastType = type;
    this.toastMessage = this.translateService.instant(key);
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3e3);
  }
  canConfirm(order) {
    return order.orderStatus === "Draft";
  }
  canCancel(order) {
    return order.orderStatus === "Draft" || order.orderStatus === "Confirmed";
  }
  canShip(order) {
    return order.orderStatus === "Confirmed";
  }
  static \u0275fac = function OrderListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderListComponent, selectors: [["app-order-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 50, vars: 33, consts: [[1, "min-h-screen", "bg-slate-50"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-6"], [1, "mb-6"], [1, "text-sm", "text-slate-500", "mb-2"], ["routerLink", "/dashboard", 1, "hover:text-indigo-600"], [1, "mx-2"], [1, "text-slate-700"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-slate-900"], ["routerLink", "/orders/create", 1, "inline-flex", "items-center", "justify-center", "gap-2", "px-4", "py-2.5", "bg-indigo-600", "text-white", "rounded-lg", "hover:bg-indigo-700", "transition-colors", "font-medium"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "bg-white", "rounded-xl", "shadow-sm", "border", "border-slate-200", "p-4", "mb-6"], [1, "flex", "flex-col", "lg:flex-row", "gap-4"], [1, "flex-1"], [1, "relative"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-5", "h-5", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", 1, "w-full", "pl-10", "pr-4", "py-2.5", "border", "border-slate-200", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", 3, "input", "value", "placeholder"], [1, "w-full", "lg:w-48"], [1, "w-full", "px-3", "py-2.5", "border", "border-slate-200", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500", "bg-white", 3, "change", "value"], [3, "value", 4, "ngFor", "ngForOf"], ["value", ""], [1, "flex", "gap-2"], ["type", "date", 1, "px-3", "py-2.5", "border", "border-slate-200", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500", 3, "change", "value"], ["class", "text-indigo-600 hover:text-indigo-800 font-medium whitespace-nowrap", 3, "click", 4, "ngIf"], [1, "flex", "gap-2", "mt-4", "overflow-x-auto", "pb-2", "lg:hidden"], [3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "space-y-4", 4, "ngIf"], ["class", "bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center", 4, "ngIf"], ["class", "hidden lg:block bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden", 4, "ngIf"], ["class", "lg:hidden space-y-4", 4, "ngIf"], [3, "class", 4, "ngIf"], ["class", "fixed inset-0 z-0", 3, "click", 4, "ngIf"], [3, "value"], [1, "text-indigo-600", "hover:text-indigo-800", "font-medium", "whitespace-nowrap", 3, "click"], [3, "click"], [1, "space-y-4"], ["class", "bg-white rounded-xl p-4 animate-pulse", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-xl", "p-4", "animate-pulse"], [1, "flex", "gap-4"], [1, "w-12", "h-12", "bg-slate-200", "rounded-lg"], [1, "flex-1", "space-y-2"], [1, "h-4", "bg-slate-200", "rounded", "w-1/4"], [1, "h-3", "bg-slate-200", "rounded", "w-1/3"], [1, "h-6", "bg-slate-200", "rounded-full", "w-20"], [1, "bg-white", "rounded-xl", "shadow-sm", "border", "border-slate-200", "p-12", "text-center"], [1, "w-16", "h-16", "mx-auto", "mb-4", "bg-slate-100", "rounded-full", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], [1, "text-lg", "font-semibold", "text-slate-900", "mb-2"], [1, "text-slate-500", "mb-6"], ["routerLink", "/orders/create", 1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "bg-indigo-600", "text-white", "rounded-lg", "hover:bg-indigo-700"], [1, "hidden", "lg:block", "bg-white", "rounded-xl", "shadow-sm", "border", "border-slate-200", "overflow-hidden"], [1, "w-full"], [1, "bg-slate-50", "border-b", "border-slate-200"], [1, "px-6", "py-4", "text-left", "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wider"], [1, "px-6", "py-4", "text-center", "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wider"], [1, "px-6", "py-4", "text-right", "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wider"], [1, "divide-y", "divide-slate-100"], ["class", "hover:bg-slate-50 transition-colors", 4, "ngFor", "ngForOf"], [1, "px-6", "py-4", "border-t", "border-slate-200", "flex", "items-center", "justify-between"], [1, "text-sm", "text-slate-500"], [1, "flex", "items-center", "gap-4"], [1, "flex", "items-center", "gap-2"], [1, "border", "border-slate-200", "rounded", "px-2", "py-1", "text-sm", 3, "change", "value"], [1, "flex", "items-center", "gap-1"], [1, "p-2", "rounded-lg", "border", "border-slate-200", "disabled:opacity-50", "disabled:cursor-not-allowed", "hover:bg-slate-50", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "px-3", "py-2", "bg-indigo-600", "text-white", "rounded-lg", "text-sm", "font-medium"], [1, "p-2", "rounded-lg", "border", "border-slate-200", "hover:bg-slate-50", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "hover:bg-slate-50", "transition-colors"], [1, "px-6", "py-4"], [1, "text-indigo-600", "hover:text-indigo-800", "font-medium", 3, "routerLink"], [1, "font-medium", "text-slate-900"], [1, "px-6", "py-4", "text-slate-600"], [1, "px-6", "py-4", "text-center", "text-slate-600"], [1, "px-6", "py-4", "text-right", "font-semibold", "text-slate-900"], [1, "px-6", "py-4", "text-center"], [1, "px-6", "py-4", "text-slate-500", "text-sm"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "p-2", "text-slate-400", "hover:text-indigo-600", "hover:bg-indigo-50", "rounded-lg", "transition-colors", 3, "routerLink", "title"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], [1, "p-2", "text-slate-400", "hover:text-slate-600", "hover:bg-slate-100", "rounded-lg", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"], ["class", "absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-1 z-10", 4, "ngIf"], [1, "absolute", "right-0", "mt-2", "w-48", "bg-white", "rounded-lg", "shadow-lg", "border", "border-slate-200", "py-1", "z-10"], [1, "block", "px-4", "py-2", "text-sm", "text-slate-700", "hover:bg-slate-50", 3, "routerLink"], ["class", "w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-blue-50", 3, "click", 4, "ngIf"], ["class", "w-full text-left px-4 py-2 text-sm text-purple-600 hover:bg-purple-50", 3, "click", 4, "ngIf"], ["class", "w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50", 3, "click", 4, "ngIf"], [1, "w-full", "text-left", "px-4", "py-2", "text-sm", "text-blue-600", "hover:bg-blue-50", 3, "click"], [1, "w-full", "text-left", "px-4", "py-2", "text-sm", "text-purple-600", "hover:bg-purple-50", 3, "click"], [1, "w-full", "text-left", "px-4", "py-2", "text-sm", "text-red-600", "hover:bg-red-50", 3, "click"], [1, "lg:hidden", "space-y-4"], ["class", "bg-white rounded-xl shadow-sm border border-slate-200 p-4", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-xl", "shadow-sm", "border", "border-slate-200", "p-4"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "flex", "items-center", "gap-3"], [1, "font-semibold", "text-slate-900"], [1, "text-xs", "text-slate-500"], [1, "space-y-2", "mb-4"], [1, "flex", "justify-between", "text-sm"], [1, "text-slate-500"], [1, "text-slate-900", "font-medium"], [1, "text-slate-900"], [1, "text-indigo-600", "font-semibold"], ["class", "block w-full py-2.5 text-center bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors", 3, "routerLink", 4, "ngIf"], ["class", "block w-full py-2.5 text-center bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors", 3, "routerLink", 4, "ngIf"], [1, "block", "w-full", "py-2.5", "text-center", "bg-indigo-600", "text-white", "rounded-lg", "font-medium", "hover:bg-indigo-700", "transition-colors", 3, "routerLink"], [1, "block", "w-full", "py-2.5", "text-center", "bg-white", "border", "border-slate-300", "text-slate-700", "rounded-lg", "font-medium", "hover:bg-slate-50", "transition-colors", 3, "routerLink"], [1, "hover:opacity-80", 3, "click"], [1, "fixed", "inset-0", "z-0", 3, "click"]], template: function OrderListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "nav", 3)(4, "a", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 6);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 7)(13, "h1", 8);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(17, "svg", 10);
      \u0275\u0275element(18, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "div", 12)(22, "div", 13)(23, "div", 14)(24, "div", 15);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(25, "svg", 16);
      \u0275\u0275element(26, "path", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "input", 18);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275listener("input", function OrderListComponent_Template_input_input_27_listener($event) {
        return ctx.onSearchChange($event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 19)(30, "select", 20);
      \u0275\u0275listener("change", function OrderListComponent_Template_select_change_30_listener($event) {
        return ctx.onStatusChange($event.target.value);
      });
      \u0275\u0275template(31, OrderListComponent_option_31_Template, 3, 4, "option", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 19)(33, "select", 20);
      \u0275\u0275listener("change", function OrderListComponent_Template_select_change_33_listener($event) {
        return ctx.onWarehouseChange($event.target.value ? +$event.target.value : null);
      });
      \u0275\u0275elementStart(34, "option", 22);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(37, OrderListComponent_option_37_Template, 2, 2, "option", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 23)(39, "input", 24);
      \u0275\u0275listener("change", function OrderListComponent_Template_input_change_39_listener($event) {
        ctx.fromDate.set($event.target.value);
        return ctx.onDateRangeChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "input", 24);
      \u0275\u0275listener("change", function OrderListComponent_Template_input_change_40_listener($event) {
        ctx.toDate.set($event.target.value);
        return ctx.onDateRangeChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(41, OrderListComponent_button_41_Template, 3, 3, "button", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 26);
      \u0275\u0275template(43, OrderListComponent_button_43_Template, 3, 5, "button", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(44, OrderListComponent_div_44_Template, 2, 2, "div", 28)(45, OrderListComponent_div_45_Template, 15, 9, "div", 29)(46, OrderListComponent_div_46_Template, 57, 46, "div", 30)(47, OrderListComponent_div_47_Template, 2, 1, "div", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(48, OrderListComponent_div_48_Template, 5, 3, "div", 32)(49, OrderListComponent_div_49_Template, 1, 0, "div", 33);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 21, "NAV.DASHBOARD"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 23, "ORDERS.TITLE"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 25, "ORDERS.TITLE"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 27, "ORDERS.CREATE_ORDER"), " ");
      \u0275\u0275advance(8);
      \u0275\u0275property("value", ctx.searchTerm())("placeholder", \u0275\u0275pipeBind1(28, 29, "ORDERS.SEARCH_PLACEHOLDER"));
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.selectedStatus());
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.statusOptions);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.selectedWarehouseId() || "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 31, "ORDERS.ALL_WAREHOUSES"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.warehouses());
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.fromDate());
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.toDate());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasActiveFilters());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.statusOptions);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.filteredOrders().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.filteredOrders().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.filteredOrders().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showToast);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeMenuOrderId());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderListComponent, { className: "OrderListComponent", filePath: "src\\app\\features\\orders\\pages\\order-list\\order-list.component.ts", lineNumber: 18 });
})();
export {
  OrderListComponent
};
//# sourceMappingURL=chunk-GZZRWCOX.js.map
