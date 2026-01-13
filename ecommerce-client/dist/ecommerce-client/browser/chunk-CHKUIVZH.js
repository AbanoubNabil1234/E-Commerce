import {
  ShipmentStatus
} from "./chunk-QYDMYAB3.js";
import {
  ShipmentsService
} from "./chunk-Y5DYWHUJ.js";
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
  DecimalPipe,
  NgForOf,
  NgIf,
  Subject,
  debounceTime,
  distinctUntilChanged,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate6
} from "./chunk-IGAGZNZV.js";
import {
  __async
} from "./chunk-N7TOP6ZD.js";

// src/app/features/shipments/pages/shipment-list/shipment-list.component.ts
var _c0 = () => [];
var _c1 = (a0) => ["/shipments", a0];
var _c2 = (a0) => ["/orders", a0];
function ShipmentListComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 51);
    \u0275\u0275element(2, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Alert ");
    \u0275\u0275elementEnd();
  }
}
function ShipmentListComponent_option_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r1 = ctx.$implicit;
    \u0275\u0275property("value", status_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(status_r1);
  }
}
function ShipmentListComponent_option_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 53);
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
function ShipmentListComponent_tr_92_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 74);
    \u0275\u0275listener("click", function ShipmentListComponent_tr_92_button_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const shipment_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.markAsShipped(shipment_r4.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 6);
    \u0275\u0275element(2, "path", 75)(3, "path", 76);
    \u0275\u0275elementEnd()();
  }
}
function ShipmentListComponent_tr_92_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function ShipmentListComponent_tr_92_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const shipment_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.markAsDelivered(shipment_r4.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 6);
    \u0275\u0275element(2, "path", 78);
    \u0275\u0275elementEnd()();
  }
}
function ShipmentListComponent_tr_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 54)(1, "td", 55)(2, "a", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 55)(5, "a", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 55)(8, "div")(9, "p", 58);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 59);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "td", 55)(14, "div", 60);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 61);
    \u0275\u0275element(16, "path", 62)(17, "path", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "td", 55)(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 55)(23, "div", 64)(24, "div", 65);
    \u0275\u0275element(25, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 66);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "td", 67)(29, "div", 68)(30, "a", 69);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 6);
    \u0275\u0275element(32, "path", 70)(33, "path", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, ShipmentListComponent_tr_92_button_34_Template, 4, 0, "button", 72)(35, ShipmentListComponent_tr_92_button_35_Template, 3, 0, "button", 73);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const shipment_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c1, shipment_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" #", shipment_r4.trackingNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c2, shipment_r4.orderNumber));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", shipment_r4.orderNumber, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(shipment_r4.recipientName || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(shipment_r4.shippingMethod);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", shipment_r4.deliveryCity || "N/A", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("px-3 py-1 rounded-full text-xs font-medium " + ctx_r4.getStatusClass(shipment_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", shipment_r4.status, " ");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r4.getProgressClass(shipment_r4.status) + " h-full rounded-full transition-all duration-500");
    \u0275\u0275styleProp("width", ctx_r4.getProgressPercent(shipment_r4.status), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r4.getProgressPercent(shipment_r4.status), "%");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c1, shipment_r4.id));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", shipment_r4.status === ctx_r4.ShipmentStatus.Pending || shipment_r4.status === ctx_r4.ShipmentStatus.Assigned);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", shipment_r4.status === ctx_r4.ShipmentStatus.InTransit || shipment_r4.status === ctx_r4.ShipmentStatus.OutForDelivery);
  }
}
function ShipmentListComponent_tr_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 79);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 80);
    \u0275\u0275element(3, "path", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 82);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "SHIPMENTS.NO_SHIPMENTS"));
  }
}
function ShipmentListComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84)(2, "div")(3, "p", 85);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 86);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 87)(11, "div", 88);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 61);
    \u0275\u0275element(13, "path", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div", 88);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 61);
    \u0275\u0275element(17, "path", 62)(18, "path", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 90)(21, "div", 65);
    \u0275\u0275element(22, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 59);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "a", 91);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const shipment_r7 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 15, "SHIPMENTS.TABLE.ID"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c1, shipment_r7.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", shipment_r7.trackingNumber, "");
    \u0275\u0275advance();
    \u0275\u0275classMap("px-2.5 py-1 rounded-full text-xs font-medium " + ctx_r4.getStatusClass(shipment_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", shipment_r7.status, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", shipment_r7.recipientName || "N/A", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", shipment_r7.deliveryCity || "N/A", " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r4.getProgressClass(shipment_r7.status) + " h-full rounded-full");
    \u0275\u0275styleProp("width", ctx_r4.getProgressPercent(shipment_r7.status), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r4.getProgressPercent(shipment_r7.status), "%");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(21, _c1, shipment_r7.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 17, "SHIPMENTS.DETAILS"), " ");
  }
}
function ShipmentListComponent_button_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 92);
    \u0275\u0275listener("click", function ShipmentListComponent_button_108_Template_button_click_0_listener() {
      const i_r9 = \u0275\u0275restoreView(_r8).index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.goToPage(i_r9 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap("px-3 py-1.5 rounded-lg text-sm font-medium " + (ctx_r4.currentPage() === i_r9 + 1 ? "bg-indigo-600 text-white" : "text-slate-600 hover:bg-slate-100"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", i_r9 + 1, " ");
  }
}
function ShipmentListComponent_span_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275text(1, "...");
    \u0275\u0275elementEnd();
  }
}
function ShipmentListComponent_span_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.totalPages());
  }
}
function ShipmentListComponent_div_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275element(1, "div", 96);
    \u0275\u0275elementEnd();
  }
}
function ShipmentListComponent_div_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap("fixed bottom-6 right-6 px-4 py-3 rounded-lg shadow-lg text-white z-50 transition-all " + (ctx_r4.toastType === "success" ? "bg-green-600" : "bg-red-600"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.toastMessage, "\n");
  }
}
var ShipmentListComponent = class _ShipmentListComponent {
  shipmentService = inject(ShipmentsService);
  warehouseService = inject(WarehousesService);
  translateService = inject(TranslateService);
  destroy$ = new Subject();
  // Make Math available in template
  Math = Math;
  // Data
  shipments = signal([]);
  warehouses = signal([]);
  loading = signal(false);
  error = signal(null);
  // Pagination
  currentPage = signal(1);
  pageSize = signal(10);
  totalCount = signal(0);
  totalPages = signal(0);
  // Filters
  searchTerm = signal("");
  statusFilter = signal(null);
  warehouseFilter = signal(null);
  searchSubject = new Subject();
  // Stats
  stats = signal({ totalActive: 0, atRisk: 0, deliveredToday: 0 });
  // Enums for template
  ShipmentStatus = ShipmentStatus;
  statuses = Object.values(ShipmentStatus);
  // Toast
  showToast = false;
  toastMessage = "";
  toastType = "success";
  ngOnInit() {
    this.loadShipments();
    this.loadWarehouses();
    this.setupSearch();
    this.calculateStats();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  setupSearch() {
    this.searchSubject.pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$)).subscribe(() => {
      this.currentPage.set(1);
      this.loadShipments();
    });
  }
  loadShipments() {
    this.loading.set(true);
    this.error.set(null);
    const filter = {
      pageNumber: this.currentPage(),
      pageSize: this.pageSize(),
      search: this.searchTerm() || void 0,
      status: this.statusFilter() || void 0,
      warehouseId: this.warehouseFilter() || void 0
    };
    this.shipmentService.getList(filter).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.shipments.set(response.items);
        this.totalCount.set(response.totalCount);
        this.totalPages.set(response.totalPages);
        this.loading.set(false);
        this.calculateStats();
      },
      error: (err) => {
        console.error("Failed to load shipments:", err);
        this.error.set("Failed to load shipments");
        this.loading.set(false);
      }
    });
  }
  loadWarehouses() {
    this.warehouseService.getAll().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.warehouses.set(data),
      error: (err) => console.error("Failed to load warehouses:", err)
    });
  }
  calculateStats() {
    const all = this.shipments();
    const stats = {
      totalActive: all.filter((s) => s.status !== ShipmentStatus.Delivered && s.status !== ShipmentStatus.Cancelled).length,
      atRisk: all.filter((s) => s.status === ShipmentStatus.Delayed || s.status === ShipmentStatus.Failed).length,
      deliveredToday: all.filter((s) => s.status === ShipmentStatus.Delivered).length
    };
    this.stats.set(stats);
  }
  onSearchChange(term) {
    this.searchTerm.set(term);
    this.searchSubject.next(term);
  }
  onStatusChange(status) {
    this.statusFilter.set(status ? status : null);
    this.currentPage.set(1);
    this.loadShipments();
  }
  onWarehouseChange(warehouseId) {
    this.warehouseFilter.set(warehouseId);
    this.currentPage.set(1);
    this.loadShipments();
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadShipments();
    }
  }
  // Actions
  markAsShipped(id) {
    return __async(this, null, function* () {
      try {
        yield this.shipmentService.markAsShipped(id).toPromise();
        this.showNotification("success", "SHIPMENTS.SHIPPED_SUCCESS");
        this.loadShipments();
      } catch {
        this.showNotification("error", "SHIPMENTS.SHIPPED_ERROR");
      }
    });
  }
  markAsDelivered(id) {
    return __async(this, null, function* () {
      try {
        yield this.shipmentService.markAsDelivered(id).toPromise();
        this.showNotification("success", "SHIPMENTS.DELIVERED_SUCCESS");
        this.loadShipments();
      } catch {
        this.showNotification("error", "SHIPMENTS.DELIVERED_ERROR");
      }
    });
  }
  getStatusClass(status) {
    const classes = {
      [ShipmentStatus.Pending]: "bg-amber-100 text-amber-800",
      [ShipmentStatus.Assigned]: "bg-blue-100 text-blue-800",
      [ShipmentStatus.LabelCreated]: "bg-purple-100 text-purple-800",
      [ShipmentStatus.PickedUp]: "bg-indigo-100 text-indigo-800",
      [ShipmentStatus.InTransit]: "bg-blue-100 text-blue-800",
      [ShipmentStatus.OutForDelivery]: "bg-cyan-100 text-cyan-800",
      [ShipmentStatus.Delivered]: "bg-green-100 text-green-800",
      [ShipmentStatus.Delayed]: "bg-red-100 text-red-800",
      [ShipmentStatus.Failed]: "bg-red-100 text-red-800",
      [ShipmentStatus.Returned]: "bg-slate-100 text-slate-800",
      [ShipmentStatus.Cancelled]: "bg-slate-100 text-slate-800"
    };
    return classes[status] || "bg-slate-100 text-slate-800";
  }
  getProgressPercent(status) {
    const progress = {
      [ShipmentStatus.Pending]: 5,
      [ShipmentStatus.Assigned]: 15,
      [ShipmentStatus.LabelCreated]: 25,
      [ShipmentStatus.PickedUp]: 40,
      [ShipmentStatus.InTransit]: 60,
      [ShipmentStatus.OutForDelivery]: 85,
      [ShipmentStatus.Delivered]: 100,
      [ShipmentStatus.Delayed]: 50,
      [ShipmentStatus.Failed]: 50,
      [ShipmentStatus.Returned]: 100,
      [ShipmentStatus.Cancelled]: 0
    };
    return progress[status] || 0;
  }
  getProgressClass(status) {
    if (status === ShipmentStatus.Delivered)
      return "bg-green-500";
    if (status === ShipmentStatus.Delayed || status === ShipmentStatus.Failed)
      return "bg-red-500";
    return "bg-blue-500";
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }
  showNotification(type, key) {
    this.toastType = type;
    this.toastMessage = this.translateService.instant(key);
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3e3);
  }
  static \u0275fac = function ShipmentListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShipmentListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShipmentListComponent, selectors: [["app-shipment-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 116, vars: 89, consts: [[1, "p-6", "lg:p-8", "max-w-7xl", "mx-auto"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-center", "lg:justify-between", "gap-4", "mb-6"], [1, "text-2xl", "font-bold", "text-slate-800"], [1, "text-slate-500", "text-sm", "mt-1"], [1, "flex", "gap-3"], [1, "px-4", "py-2", "border", "border-slate-200", "rounded-lg", "text-slate-700", "hover:bg-slate-50", "flex", "items-center", "gap-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], ["routerLink", "/shipments/create", 1, "px-4", "py-2", "bg-indigo-600", "text-white", "rounded-lg", "hover:bg-indigo-700", "flex", "items-center", "gap-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4", "mb-6"], [1, "bg-white", "rounded-xl", "p-5", "shadow-sm", "border", "border-slate-100"], [1, "text-xs", "font-medium", "text-slate-500", "uppercase", "tracking-wide"], [1, "flex", "items-end", "gap-2", "mt-2"], [1, "text-3xl", "font-bold", "text-slate-800"], [1, "text-xs", "font-medium", "text-green-600", "bg-green-50", "px-2", "py-0.5", "rounded-full"], ["class", "text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full flex items-center gap-1", 4, "ngIf"], [1, "bg-white", "rounded-xl", "shadow-sm", "border", "border-slate-100", "mb-6"], [1, "p-4", "flex", "flex-col", "lg:flex-row", "gap-4"], [1, "flex-1"], [1, "relative"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-5", "h-5", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", 1, "w-full", "pl-10", "pr-4", "py-2.5", "border", "border-slate-200", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", 3, "input", "value", "placeholder"], [1, "px-4", "py-2.5", "border", "border-slate-200", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500", "bg-white", "min-w-[140px]", 3, "change", "value"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "px-4", "py-2.5", "border", "border-slate-200", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500", "bg-white", "min-w-[160px]", 3, "change", "value"], [1, "hidden", "lg:block", "bg-white", "rounded-xl", "shadow-sm", "border", "border-slate-100", "overflow-hidden"], [1, "w-full"], [1, "bg-slate-50", "border-b", "border-slate-100"], [1, "text-left", "px-6", "py-4", "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wide"], [1, "text-center", "px-6", "py-4", "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wide"], [1, "divide-y", "divide-slate-100"], ["class", "hover:bg-slate-50 transition-colors", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "lg:hidden", "space-y-4"], ["class", "bg-white rounded-xl shadow-sm border border-slate-100 p-4", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-4", "mt-6", "px-2"], [1, "text-sm", "text-slate-500"], [1, "flex", "items-center", "gap-1"], [1, "p-2", "rounded-lg", "hover:bg-slate-100", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-slate-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "px-2 text-slate-400", 4, "ngIf"], ["class", "px-3 py-1.5 text-sm text-slate-600", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], ["class", "fixed inset-0 bg-white/50 flex items-center justify-center z-50", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "text-xs", "font-medium", "text-red-600", "bg-red-50", "px-2", "py-0.5", "rounded-full", "flex", "items-center", "gap-1"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-3", "h-3"], ["fill-rule", "evenodd", "d", "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], [3, "value"], [1, "hover:bg-slate-50", "transition-colors"], [1, "px-6", "py-4"], [1, "text-indigo-600", "hover:text-indigo-800", "font-medium", 3, "routerLink"], [1, "text-slate-700", "hover:text-indigo-600", 3, "routerLink"], [1, "font-medium", "text-slate-800"], [1, "text-xs", "text-slate-500"], [1, "flex", "items-center", "gap-1.5", "text-slate-600"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "flex", "items-center", "gap-3"], [1, "flex-1", "bg-slate-100", "rounded-full", "h-2", "overflow-hidden"], [1, "text-xs", "text-slate-500", "min-w-[32px]"], [1, "px-6", "py-4", "text-center"], [1, "flex", "items-center", "justify-center", "gap-2"], ["title", "View Details", 1, "p-2", "text-slate-400", "hover:text-indigo-600", "hover:bg-indigo-50", "rounded-lg", "transition-colors", 3, "routerLink"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["class", "p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors", "title", "Mark as Shipped", 3, "click", 4, "ngIf"], ["class", "p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors", "title", "Mark as Delivered", 3, "click", 4, "ngIf"], ["title", "Mark as Shipped", 1, "p-2", "text-slate-400", "hover:text-blue-600", "hover:bg-blue-50", "rounded-lg", "transition-colors", 3, "click"], ["d", "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"], ["title", "Mark as Delivered", 1, "p-2", "text-slate-400", "hover:text-green-600", "hover:bg-green-50", "rounded-lg", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], ["colspan", "7", 1, "px-6", "py-12", "text-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "mx-auto", "text-slate-300", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"], [1, "text-slate-500"], [1, "bg-white", "rounded-xl", "shadow-sm", "border", "border-slate-100", "p-4"], [1, "flex", "justify-between", "items-start", "mb-3"], [1, "text-xs", "text-slate-500", "uppercase"], [1, "text-indigo-600", "font-semibold", 3, "routerLink"], [1, "space-y-2", "text-sm"], [1, "flex", "items-center", "gap-2", "text-slate-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], [1, "flex", "items-center", "gap-3", "mt-4"], [1, "block", "w-full", "mt-4", "py-2.5", "bg-indigo-600", "text-white", "text-center", "rounded-lg", "font-medium", "hover:bg-indigo-700", 3, "routerLink"], [3, "click"], [1, "px-2", "text-slate-400"], [1, "px-3", "py-1.5", "text-sm", "text-slate-600"], [1, "fixed", "inset-0", "bg-white/50", "flex", "items-center", "justify-center", "z-50"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-4", "border-indigo-600", "border-t-transparent"]], template: function ShipmentListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4)(10, "button", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 6);
      \u0275\u0275element(12, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "a", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 6);
      \u0275\u0275element(17, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "div", 10)(21, "div", 11)(22, "p", 12);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 13)(26, "span", 14);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 15);
      \u0275\u0275text(30, "+12%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 11)(32, "p", 12);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 13)(36, "span", 14);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275template(38, ShipmentListComponent_span_38_Template, 4, 0, "span", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 11)(40, "p", 12);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 13)(44, "span", 14);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "span", 15);
      \u0275\u0275text(47, "+5%");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "div", 17)(49, "div", 18)(50, "div", 19)(51, "div", 20);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(52, "svg", 21);
      \u0275\u0275element(53, "path", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(54, "input", 23);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275listener("input", function ShipmentListComponent_Template_input_input_54_listener($event) {
        return ctx.onSearchChange($event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(56, "select", 24);
      \u0275\u0275listener("change", function ShipmentListComponent_Template_select_change_56_listener($event) {
        return ctx.onStatusChange($event.target.value);
      });
      \u0275\u0275elementStart(57, "option", 25);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(60, ShipmentListComponent_option_60_Template, 2, 2, "option", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "select", 27);
      \u0275\u0275listener("change", function ShipmentListComponent_Template_select_change_61_listener($event) {
        return ctx.onWarehouseChange($event.target.value ? +$event.target.value : null);
      });
      \u0275\u0275elementStart(62, "option", 25);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(65, ShipmentListComponent_option_65_Template, 2, 2, "option", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "div", 28)(67, "table", 29)(68, "thead", 30)(69, "tr")(70, "th", 31);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "th", 31);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "th", 31);
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "th", 31);
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th", 31);
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "th", 31);
      \u0275\u0275text(86);
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th", 32);
      \u0275\u0275text(89);
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(91, "tbody", 33);
      \u0275\u0275template(92, ShipmentListComponent_tr_92_Template, 36, 24, "tr", 34)(93, ShipmentListComponent_tr_93_Template, 7, 3, "tr", 35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(94, "div", 36);
      \u0275\u0275template(95, ShipmentListComponent_div_95_Template, 28, 23, "div", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 38)(97, "p", 39);
      \u0275\u0275text(98);
      \u0275\u0275pipe(99, "translate");
      \u0275\u0275pipe(100, "number");
      \u0275\u0275pipe(101, "translate");
      \u0275\u0275pipe(102, "number");
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "div", 40)(105, "button", 41);
      \u0275\u0275listener("click", function ShipmentListComponent_Template_button_click_105_listener() {
        return ctx.goToPage(ctx.currentPage() - 1);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(106, "svg", 42);
      \u0275\u0275element(107, "path", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(108, ShipmentListComponent_button_108_Template, 2, 3, "button", 44)(109, ShipmentListComponent_span_109_Template, 2, 0, "span", 45)(110, ShipmentListComponent_span_110_Template, 2, 1, "span", 46);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(111, "button", 41);
      \u0275\u0275listener("click", function ShipmentListComponent_Template_button_click_111_listener() {
        return ctx.goToPage(ctx.currentPage() + 1);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(112, "svg", 42);
      \u0275\u0275element(113, "path", 47);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(114, ShipmentListComponent_div_114_Template, 2, 0, "div", 48)(115, ShipmentListComponent_div_115_Template, 2, 3, "div", 49);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 42, "SHIPMENTS.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 44, "SHIPMENTS.SUBTITLE"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 46, "SHIPMENTS.EXPORT"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 48, "SHIPMENTS.NEW_SHIPMENT"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 50, "SHIPMENTS.STATS.TOTAL_ACTIVE"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 52, ctx.totalCount()));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 54, "SHIPMENTS.STATS.AT_RISK"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.stats().atRisk);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.stats().atRisk > 0);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 56, "SHIPMENTS.STATS.DELIVERED_TODAY"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.stats().deliveredToday);
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.searchTerm())("placeholder", \u0275\u0275pipeBind1(55, 58, "SHIPMENTS.SEARCH_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.statusFilter() || "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 60, "SHIPMENTS.FILTER.ALL_STATUS"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.statuses);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.warehouseFilter() || "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 62, "SHIPMENTS.FILTER.ALL_WAREHOUSES"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.warehouses());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 64, "SHIPMENTS.TABLE.ID"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 66, "SHIPMENTS.TABLE.ORDER"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(78, 68, "SHIPMENTS.TABLE.CUSTOMER"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 70, "SHIPMENTS.TABLE.DESTINATION"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 72, "SHIPMENTS.TABLE.STATUS"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(87, 74, "SHIPMENTS.TABLE.PROGRESS"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 76, "SHIPMENTS.TABLE.ACTION"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.shipments());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.shipments().length === 0 && !ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.shipments());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate6(" ", \u0275\u0275pipeBind1(99, 78, "SHIPMENTS.SHOWING"), " ", (ctx.currentPage() - 1) * ctx.pageSize() + 1, "-", \u0275\u0275pipeBind1(100, 80, ctx.currentPage() * ctx.pageSize()), " ", \u0275\u0275pipeBind1(101, 82, "SHIPMENTS.OF"), " ", \u0275\u0275pipeBind1(102, 84, ctx.totalCount()), " ", \u0275\u0275pipeBind1(103, 86, "SHIPMENTS.SHIPMENTS"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.currentPage() === 1);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(88, _c0).constructor(ctx.Math.min(5, ctx.totalPages())));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalPages() > 5);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalPages() > 5);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() === ctx.totalPages());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showToast);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShipmentListComponent, { className: "ShipmentListComponent", filePath: "src\\app\\features\\shipments\\pages\\shipment-list\\shipment-list.component.ts", lineNumber: 19 });
})();
export {
  ShipmentListComponent
};
//# sourceMappingURL=chunk-CHKUIVZH.js.map
