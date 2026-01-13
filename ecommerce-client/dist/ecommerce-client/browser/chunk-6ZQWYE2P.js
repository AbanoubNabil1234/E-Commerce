import {
  WarehousesService
} from "./chunk-ZFKGYVVN.js";
import {
  FormsModule
} from "./chunk-74XXAL65.js";
import {
  TranslateModule,
  environment
} from "./chunk-BOQBRULU.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  HttpClient,
  HttpParams,
  Subject,
  computed,
  forkJoin,
  inject,
  signal,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-IGAGZNZV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-N7TOP6ZD.js";

// src/app/features/analytics/services/analytics.service.ts
var AnalyticsService = class _AnalyticsService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/analytics`;
  // Signals for reactive state
  _overview = signal(null);
  _sales = signal(null);
  _inventory = signal(null);
  _logistics = signal(null);
  _customers = signal(null);
  _loading = signal(false);
  _error = signal(null);
  // Public readonly signals
  overview = this._overview.asReadonly();
  sales = this._sales.asReadonly();
  inventory = this._inventory.asReadonly();
  logistics = this._logistics.asReadonly();
  customers = this._customers.asReadonly();
  loading = this._loading.asReadonly();
  error = this._error.asReadonly();
  // Computed values
  hasData = computed(() => this._overview() !== null || this._sales() !== null || this._inventory() !== null);
  buildParams(filter) {
    let params = new HttpParams();
    if (filter?.startDate)
      params = params.set("startDate", filter.startDate);
    if (filter?.endDate)
      params = params.set("endDate", filter.endDate);
    if (filter?.warehouseId)
      params = params.set("warehouseId", filter.warehouseId);
    if (filter?.categoryId)
      params = params.set("categoryId", filter.categoryId);
    return params;
  }
  getOverview(filter) {
    this._loading.set(true);
    return this.http.get(`${this.apiUrl}/overview`, { params: this.buildParams(filter) }).pipe(tap({
      next: (data) => {
        this._overview.set(data);
        this._loading.set(false);
      },
      error: (err) => {
        this._error.set(err.message);
        this._loading.set(false);
      }
    }));
  }
  getSales(filter) {
    this._loading.set(true);
    return this.http.get(`${this.apiUrl}/sales`, { params: this.buildParams(filter) }).pipe(tap({
      next: (data) => {
        this._sales.set(data);
        this._loading.set(false);
      },
      error: (err) => {
        this._error.set(err.message);
        this._loading.set(false);
      }
    }));
  }
  getInventory(filter) {
    this._loading.set(true);
    return this.http.get(`${this.apiUrl}/inventory`, { params: this.buildParams(filter) }).pipe(tap({
      next: (data) => {
        this._inventory.set(data);
        this._loading.set(false);
      },
      error: (err) => {
        this._error.set(err.message);
        this._loading.set(false);
      }
    }));
  }
  getLogistics(filter) {
    this._loading.set(true);
    return this.http.get(`${this.apiUrl}/logistics`, { params: this.buildParams(filter) }).pipe(tap({
      next: (data) => {
        this._logistics.set(data);
        this._loading.set(false);
      },
      error: (err) => {
        this._error.set(err.message);
        this._loading.set(false);
      }
    }));
  }
  getCustomers(filter) {
    this._loading.set(true);
    return this.http.get(`${this.apiUrl}/customers`, { params: this.buildParams(filter) }).pipe(tap({
      next: (data) => {
        this._customers.set(data);
        this._loading.set(false);
      },
      error: (err) => {
        this._error.set(err.message);
        this._loading.set(false);
      }
    }));
  }
  // Load all analytics data at once
  loadAll(filter) {
    this.getOverview(filter).subscribe();
    this.getSales(filter).subscribe();
    this.getInventory(filter).subscribe();
    this.getLogistics(filter).subscribe();
    this.getCustomers(filter).subscribe();
  }
  // Clear all cached data
  clearCache() {
    this._overview.set(null);
    this._sales.set(null);
    this._inventory.set(null);
    this._logistics.set(null);
    this._customers.set(null);
    this._error.set(null);
  }
  static \u0275fac = function AnalyticsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnalyticsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AnalyticsService, factory: _AnalyticsService.\u0275fac, providedIn: "root" });
};

// src/app/features/analytics/pages/analytics-dashboard/analytics-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.date;
var _forTrack1 = ($index, $item) => $item.category;
var _forTrack2 = ($index, $item) => $item.productId;
var _forTrack3 = ($index, $item) => $item.id;
var _c0 = () => [];
var _c1 = () => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function AnalyticsDashboardComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading analytics...");
    \u0275\u0275elementEnd()();
  }
}
function AnalyticsDashboardComponent_Conditional_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("up", ctx_r1.overview().revenueGrowth > 0)("down", ctx_r1.overview().revenueGrowth < 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-arrow-up", ctx_r1.overview().revenueGrowth > 0)("fa-arrow-down", ctx_r1.overview().revenueGrowth < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.overview().revenueGrowth > 0 ? "+" : "", "", \u0275\u0275pipeBind2(3, 10, ctx_r1.overview().revenueGrowth, "1.1-1"), "% ");
  }
}
function AnalyticsDashboardComponent_Conditional_15_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("up", ctx_r1.overview().ordersGrowth > 0)("down", ctx_r1.overview().ordersGrowth < 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-arrow-up", ctx_r1.overview().ordersGrowth > 0)("fa-arrow-down", ctx_r1.overview().ordersGrowth < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.overview().ordersGrowth > 0 ? "+" : "", "", \u0275\u0275pipeBind2(3, 10, ctx_r1.overview().ordersGrowth, "1.1-1"), "% ");
  }
}
function AnalyticsDashboardComponent_Conditional_15_For_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "div", 52);
    \u0275\u0275elementStart(2, "span", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const point_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx_r1.revenueChartData().maxValue > 0 ? point_r3.value / ctx_r1.revenueChartData().maxValue * 100 : 5, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(point_r3.label);
  }
}
function AnalyticsDashboardComponent_Conditional_15_Conditional_66_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "div", 54);
    \u0275\u0275elementStart(2, "span", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(day_r4);
  }
}
function AnalyticsDashboardComponent_Conditional_15_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AnalyticsDashboardComponent_Conditional_15_Conditional_66_For_1_Template, 4, 1, "div", 33, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function AnalyticsDashboardComponent_Conditional_15_For_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 55);
    \u0275\u0275element(2, "span", 56);
    \u0275\u0275elementStart(3, "span", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 58)(6, "div", 59);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 60);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const status_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", status_r5.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(status_r5.category);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", status_r5.percentage, "%")("background", status_r5.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", status_r5.value, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 9, status_r5.percentage, "1.0-0"), "%");
  }
}
function AnalyticsDashboardComponent_Conditional_15_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 55);
    \u0275\u0275element(2, "span", 61);
    \u0275\u0275elementStart(3, "span", 57);
    \u0275\u0275text(4, "Pending");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 58)(6, "div", 62);
    \u0275\u0275text(7, "0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 60);
    \u0275\u0275text(9, "0%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 35)(11, "div", 55);
    \u0275\u0275element(12, "span", 63);
    \u0275\u0275elementStart(13, "span", 57);
    \u0275\u0275text(14, "Processing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 58)(16, "div", 64);
    \u0275\u0275text(17, "0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "span", 60);
    \u0275\u0275text(19, "0%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 35)(21, "div", 55);
    \u0275\u0275element(22, "span", 65);
    \u0275\u0275elementStart(23, "span", 57);
    \u0275\u0275text(24, "Shipped");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 58)(26, "div", 66);
    \u0275\u0275text(27, "0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "span", 60);
    \u0275\u0275text(29, "0%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 35)(31, "div", 55);
    \u0275\u0275element(32, "span", 67);
    \u0275\u0275elementStart(33, "span", 57);
    \u0275\u0275text(34, "Delivered");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 58)(36, "div", 68);
    \u0275\u0275text(37, "0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "span", 60);
    \u0275\u0275text(39, "0%");
    \u0275\u0275elementEnd()();
  }
}
function AnalyticsDashboardComponent_Conditional_15_For_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 43)(1, "span", 69);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 70);
    \u0275\u0275elementStart(4, "div", 71)(5, "h4", 72);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 73);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 74);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 75);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    const \u0275$index_307_r7 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_307_r7 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("src", product_r6.imageUrl || "assets/images/placeholder.png", \u0275\u0275sanitizeUrl)("alt", product_r6.productName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r6.productName || "Product " + (\u0275$index_307_r7 + 1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r6.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r6.quantitySold);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(product_r6.revenue));
  }
}
function AnalyticsDashboardComponent_Conditional_15_ForEmpty_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 44);
    \u0275\u0275text(1, "No data available");
    \u0275\u0275elementEnd();
  }
}
function AnalyticsDashboardComponent_Conditional_15_For_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 45);
    \u0275\u0275element(1, "img", 70);
    \u0275\u0275elementStart(2, "div", 71)(3, "h4", 72);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 73);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 76)(8, "span", 77);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 78);
    \u0275\u0275element(13, "div", 79);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", product_r8.imageUrl || "assets/images/placeholder.png", \u0275\u0275sanitizeUrl)("alt", product_r8.productName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r8.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r8.warehouseName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(10, 10, product_r8.currentStock), " / ", \u0275\u0275pipeBind1(11, 12, product_r8.reorderLevel), "");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.getStockLevel(product_r8.currentStock, product_r8.reorderLevel));
    \u0275\u0275styleProp("width", product_r8.reorderLevel > 0 ? product_r8.currentStock / product_r8.reorderLevel * 100 : 0, "%");
  }
}
function AnalyticsDashboardComponent_Conditional_15_ForEmpty_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 44);
    \u0275\u0275text(1, "All stock levels healthy");
    \u0275\u0275elementEnd();
  }
}
function AnalyticsDashboardComponent_Conditional_15_For_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 48)(1, "div", 80);
    \u0275\u0275element(2, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 81)(4, "span", 82);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 83);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 84);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const activity_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(activity_r9.type);
    \u0275\u0275advance();
    \u0275\u0275classMap(activity_r9.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(activity_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activity_r9.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 7, activity_r9.time, "shortTime"));
  }
}
function AnalyticsDashboardComponent_Conditional_15_ForEmpty_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 49);
    \u0275\u0275text(1, "No recent activity");
    \u0275\u0275elementEnd();
  }
}
function AnalyticsDashboardComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 8)(1, "div", 9)(2, "div", 10)(3, "div", 11);
    \u0275\u0275element(4, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AnalyticsDashboardComponent_Conditional_15_Conditional_5_Template, 4, 13, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 14);
    \u0275\u0275text(7, "Total Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "div", 16);
    \u0275\u0275element(13, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, AnalyticsDashboardComponent_Conditional_15_Conditional_14_Template, 4, 13, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 14);
    \u0275\u0275text(16, "Total Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h2", 15);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 9)(20, "div", 10)(21, "div", 18);
    \u0275\u0275element(22, "i", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "p", 14);
    \u0275\u0275text(24, "Active Shipments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "h2", 15);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 9)(28, "div", 10)(29, "div", 20);
    \u0275\u0275element(30, "i", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "p", 14);
    \u0275\u0275text(32, "Low Stock Alert");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "h2", 15);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 9)(36, "div", 10)(37, "div", 22);
    \u0275\u0275element(38, "i", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "p", 14);
    \u0275\u0275text(40, "Delivered");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "h2", 15);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 9)(44, "div", 10)(45, "div", 24);
    \u0275\u0275element(46, "i", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "p", 14);
    \u0275\u0275text(48, "Average Order Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "h2", 15);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "section", 26)(52, "div", 27)(53, "div", 28)(54, "h3", 29);
    \u0275\u0275text(55, "Sales Performance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 30)(57, "button", 31);
    \u0275\u0275listener("click", function AnalyticsDashboardComponent_Conditional_15_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setChartView("daily"));
    });
    \u0275\u0275text(58, "Daily");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 31);
    \u0275\u0275listener("click", function AnalyticsDashboardComponent_Conditional_15_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setChartView("weekly"));
    });
    \u0275\u0275text(60, "Weekly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 31);
    \u0275\u0275listener("click", function AnalyticsDashboardComponent_Conditional_15_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setChartView("monthly"));
    });
    \u0275\u0275text(62, "Monthly");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "div", 32);
    \u0275\u0275repeaterCreate(64, AnalyticsDashboardComponent_Conditional_15_For_65_Template, 4, 3, "div", 33, _forTrack0);
    \u0275\u0275template(66, AnalyticsDashboardComponent_Conditional_15_Conditional_66_Template, 2, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 27)(68, "div", 28)(69, "h3", 29);
    \u0275\u0275text(70, "Order Status");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 34);
    \u0275\u0275repeaterCreate(72, AnalyticsDashboardComponent_Conditional_15_For_73_Template, 11, 12, "div", 35, _forTrack1);
    \u0275\u0275template(74, AnalyticsDashboardComponent_Conditional_15_Conditional_74_Template, 40, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 36)(76, "span", 37);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span", 38);
    \u0275\u0275text(79, "Total Orders");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(80, "section", 39)(81, "div", 40)(82, "div", 28)(83, "h3", 29);
    \u0275\u0275text(84, "Top Selling Products");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 41)(86, "span");
    \u0275\u0275text(87, "Rank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "span");
    \u0275\u0275text(89, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275element(90, "span");
    \u0275\u0275elementStart(91, "span");
    \u0275\u0275text(92, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "span");
    \u0275\u0275text(94, "Qty Sold");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "span");
    \u0275\u0275text(96, "Revenue");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "ul", 42);
    \u0275\u0275repeaterCreate(98, AnalyticsDashboardComponent_Conditional_15_For_99_Template, 13, 7, "li", 43, _forTrack2, false, AnalyticsDashboardComponent_Conditional_15_ForEmpty_100_Template, 2, 0, "li", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div", 40)(102, "div", 28)(103, "h3", 29);
    \u0275\u0275text(104, "Low Stock Alerts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "ul", 42);
    \u0275\u0275repeaterCreate(106, AnalyticsDashboardComponent_Conditional_15_For_107_Template, 14, 14, "li", 45, _forTrack2, false, AnalyticsDashboardComponent_Conditional_15_ForEmpty_108_Template, 2, 0, "li", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(109, "section", 46)(110, "div", 28)(111, "h3", 29);
    \u0275\u0275text(112, "Activity Feed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "ul", 47);
    \u0275\u0275repeaterCreate(114, AnalyticsDashboardComponent_Conditional_15_For_115_Template, 11, 10, "li", 48, _forTrack3, false, AnalyticsDashboardComponent_Conditional_15_ForEmpty_116_Template, 2, 0, "li", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_1_0 = ctx_r1.overview()) == null ? null : tmp_1_0.revenueGrowth) && ctx_r1.overview().revenueGrowth !== 0 ? 5 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(((tmp_2_0 = ctx_r1.overview()) == null ? null : tmp_2_0.totalRevenue) || 0));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_3_0 = ctx_r1.overview()) == null ? null : tmp_3_0.ordersGrowth) && ctx_r1.overview().ordersGrowth !== 0 ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatNumber(((tmp_4_0 = ctx_r1.overview()) == null ? null : tmp_4_0.totalOrders) || 0));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatNumber(((tmp_5_0 = ctx_r1.overview()) == null ? null : tmp_5_0.activeShipments) || 0));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatNumber(((tmp_6_0 = ctx_r1.overview()) == null ? null : tmp_6_0.lowStockProducts) || 0));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatNumber(((tmp_7_0 = ctx_r1.overview()) == null ? null : tmp_7_0.deliveredOrders) || 0));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(((tmp_8_0 = ctx_r1.overview()) == null ? null : tmp_8_0.averageOrderValue) || 0));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("active", ctx_r1.chartView === "daily");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.chartView === "weekly");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.chartView === "monthly");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(((tmp_12_0 = ctx_r1.sales()) == null ? null : tmp_12_0.revenueOverTime) || \u0275\u0275pureFunction0(20, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!((tmp_13_0 = ctx_r1.sales()) == null ? null : tmp_13_0.revenueOverTime == null ? null : tmp_13_0.revenueOverTime.length) ? 66 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.orderStatusData());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.orderStatusData().length ? 74 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatNumber(((tmp_16_0 = ctx_r1.overview()) == null ? null : tmp_16_0.totalOrders) || 0));
    \u0275\u0275advance(21);
    \u0275\u0275repeater((tmp_17_0 = ctx_r1.sales()) == null ? null : tmp_17_0.bestSellingProducts == null ? null : tmp_17_0.bestSellingProducts.slice(0, 4));
    \u0275\u0275advance(8);
    \u0275\u0275repeater((tmp_18_0 = ctx_r1.inventory()) == null ? null : tmp_18_0.lowStockProducts == null ? null : tmp_18_0.lowStockProducts.slice(0, 4));
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.recentActivities());
  }
}
var AnalyticsDashboardComponent = class _AnalyticsDashboardComponent {
  analyticsService = inject(AnalyticsService);
  warehouseService = inject(WarehousesService);
  destroy$ = new Subject();
  // State signals
  loading = signal(true);
  selectedPeriod = "month";
  selectedWarehouse = "";
  chartView = "daily";
  // Data from service
  overview = this.analyticsService.overview;
  sales = this.analyticsService.sales;
  inventory = this.analyticsService.inventory;
  logistics = this.analyticsService.logistics;
  // Warehouses list
  warehouses = signal([]);
  // Recent activities (mock for demo)
  recentActivities = signal([]);
  // Chart data (computed without chart library)
  revenueChartData = computed(() => {
    const data = this.sales()?.revenueOverTime || [];
    return {
      labels: data.map((d) => d.label),
      values: data.map((d) => d.value),
      maxValue: Math.max(...data.map((d) => d.value), 0)
    };
  });
  orderStatusData = computed(() => {
    const data = this.sales()?.orderStatusSummary || [];
    const total = data.reduce((sum, d) => sum + d.value, 0);
    return data.map((d) => __spreadProps(__spreadValues({}, d), {
      percentage: total > 0 ? d.value / total * 100 : 0,
      color: this.getStatusColor(d.category)
    }));
  });
  ngOnInit() {
    this.loadWarehouses();
    this.loadAnalytics();
    this.loadRecentActivities();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadWarehouses() {
    this.warehouseService.getAll().pipe(takeUntil(this.destroy$)).subscribe((warehouses) => {
      this.warehouses.set(warehouses.map((w) => ({ id: w.id, name: w.name })));
    });
  }
  loadAnalytics() {
    this.loading.set(true);
    const filter = this.buildFilter();
    forkJoin({
      overview: this.analyticsService.getOverview(filter),
      sales: this.analyticsService.getSales(filter),
      inventory: this.analyticsService.getInventory(filter),
      logistics: this.analyticsService.getLogistics(filter)
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => this.loading.set(false),
      error: () => this.loading.set(false)
    });
  }
  buildFilter() {
    const now = /* @__PURE__ */ new Date();
    let startDate;
    switch (this.selectedPeriod) {
      case "today":
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        break;
      case "week":
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1e3);
        break;
      case "year":
        startDate = new Date(now.getFullYear(), 0, 1);
        break;
      case "month":
      default:
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    }
    return {
      startDate: startDate.toISOString(),
      endDate: now.toISOString(),
      warehouseId: this.selectedWarehouse ? parseInt(this.selectedWarehouse) : void 0
    };
  }
  setPeriod(period) {
    this.selectedPeriod = period;
    this.loadAnalytics();
  }
  onWarehouseChange() {
    this.loadAnalytics();
  }
  setChartView(view) {
    this.chartView = view;
  }
  getStatusColor(status) {
    const colors = {
      "Draft": "#94a3b8",
      "Pending": "#f59e0b",
      "Confirmed": "#3b82f6",
      "Processing": "#8b5cf6",
      "Shipped": "#06b6d4",
      "Delivered": "#22c55e",
      "Cancelled": "#ef4444"
    };
    return colors[status] || "#6b7280";
  }
  getStockLevel(current, reorder) {
    const ratio = current / reorder;
    if (ratio <= 0.25)
      return "critical";
    if (ratio <= 0.5)
      return "low";
    return "safe";
  }
  loadRecentActivities() {
    this.recentActivities.set([
      {
        id: 1,
        type: "order",
        icon: "fa-shopping-cart",
        title: "New Order #ORD-2026-001234",
        description: "3 items - $299.00",
        time: new Date(Date.now() - 5 * 60 * 1e3)
      },
      {
        id: 2,
        type: "shipment",
        icon: "fa-truck",
        title: "Shipment Dispatched",
        description: "Order #ORD-2026-001230 via DHL",
        time: new Date(Date.now() - 15 * 60 * 1e3)
      },
      {
        id: 3,
        type: "stock",
        icon: "fa-box",
        title: "Stock Adjusted",
        description: "SKU-12345 +50 units",
        time: new Date(Date.now() - 30 * 60 * 1e3)
      },
      {
        id: 4,
        type: "alert",
        icon: "fa-exclamation-triangle",
        title: "Low Stock Alert",
        description: "SKU-67890 - Only 5 units left",
        time: new Date(Date.now() - 45 * 60 * 1e3)
      },
      {
        id: 5,
        type: "shipment",
        icon: "fa-check-circle",
        title: "Delivery Confirmed",
        description: "Order #ORD-2026-001225",
        time: new Date(Date.now() - 60 * 60 * 1e3)
      }
    ]);
  }
  // Format currency for display
  formatCurrency(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  }
  // Format number for display
  formatNumber(value) {
    return new Intl.NumberFormat("en-US").format(value);
  }
  static \u0275fac = function AnalyticsDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnalyticsDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticsDashboardComponent, selectors: [["app-analytics-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 9, consts: [[1, "analytics-dashboard"], [1, "page-header"], [1, "page-title"], [1, "filters-section"], [1, "filter-group"], [1, "filter-btn", 3, "click"], [1, "loading-overlay"], [1, "spinner"], [1, "kpi-section"], [1, "kpi-card"], [1, "kpi-header"], [1, "kpi-icon", "revenue"], [1, "fas", "fa-dollar-sign"], [1, "kpi-trend", 3, "up", "down"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-icon", "orders"], [1, "fas", "fa-shopping-cart"], [1, "kpi-icon", "shipments"], [1, "fas", "fa-truck"], [1, "kpi-icon", "lowstock"], [1, "fas", "fa-exclamation-triangle"], [1, "kpi-icon", "delivered"], [1, "fas", "fa-check-circle"], [1, "kpi-icon", "customers"], [1, "fas", "fa-wallet"], [1, "charts-grid"], [1, "chart-card"], [1, "chart-header"], [1, "chart-title"], [1, "chart-actions"], [1, "chart-action-btn", 3, "click"], [1, "chart-container", "simple-bars"], [1, "bar-item"], [1, "status-list"], [1, "status-item"], [1, "donut-total"], [1, "donut-value"], [1, "donut-label"], [1, "products-section"], [1, "products-card"], [1, "table-header"], [1, "product-list"], [1, "product-item"], [1, "product-item", "empty"], [1, "low-stock-item"], [1, "activity-section"], [1, "activity-list"], [1, "activity-item"], [1, "activity-item", "empty"], [1, "kpi-trend"], [1, "fas"], [1, "bar"], [1, "bar-label"], [1, "bar", 2, "height", "20%"], [1, "status-info"], [1, "status-dot"], [1, "status-name"], [1, "status-bar-container"], [1, "status-bar"], [1, "status-value"], [1, "status-dot", 2, "background", "#f59e0b"], [1, "status-bar", 2, "width", "40%", "background", "#f59e0b"], [1, "status-dot", 2, "background", "#3b82f6"], [1, "status-bar", 2, "width", "30%", "background", "#3b82f6"], [1, "status-dot", 2, "background", "#06b6d4"], [1, "status-bar", 2, "width", "20%", "background", "#06b6d4"], [1, "status-dot", 2, "background", "#10b981"], [1, "status-bar", 2, "width", "60%", "background", "#10b981"], [1, "product-rank"], ["loading", "lazy", 1, "product-image", 3, "src", "alt"], [1, "product-info"], [1, "product-name"], [1, "product-sku"], [1, "product-sold"], [1, "product-revenue"], [1, "stock-status"], [1, "stock-badge"], [1, "stock-progress"], [1, "stock-progress-bar"], [1, "activity-icon"], [1, "activity-content"], [1, "activity-title"], [1, "activity-description"], [1, "activity-time"]], template: function AnalyticsDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Analytics Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "button", 5);
      \u0275\u0275listener("click", function AnalyticsDashboardComponent_Template_button_click_6_listener() {
        return ctx.setPeriod("today");
      });
      \u0275\u0275text(7, " Today ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function AnalyticsDashboardComponent_Template_button_click_8_listener() {
        return ctx.setPeriod("week");
      });
      \u0275\u0275text(9, " This Week ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 5);
      \u0275\u0275listener("click", function AnalyticsDashboardComponent_Template_button_click_10_listener() {
        return ctx.setPeriod("month");
      });
      \u0275\u0275text(11, " This Month ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 5);
      \u0275\u0275listener("click", function AnalyticsDashboardComponent_Template_button_click_12_listener() {
        return ctx.setPeriod("year");
      });
      \u0275\u0275text(13, " This Year ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(14, AnalyticsDashboardComponent_Conditional_14_Template, 4, 0, "div", 6)(15, AnalyticsDashboardComponent_Conditional_15_Template, 117, 21);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275classProp("active", ctx.selectedPeriod === "today");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedPeriod === "week");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedPeriod === "month");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedPeriod === "year");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 14 : 15);
    }
  }, dependencies: [
    CommonModule,
    DecimalPipe,
    DatePipe,
    FormsModule,
    TranslateModule
  ], styles: ['\n\n[_nghost-%COMP%] {\n  --bg-main: #0a0e1a;\n  --bg-card: #111827;\n  --bg-card-alt: #1a2236;\n  --bg-input: #1f2937;\n  --text-white: #ffffff;\n  --text-light: #e2e8f0;\n  --text-gray: #9ca3af;\n  --text-muted: #6b7280;\n  --primary: #6366f1;\n  --success: #10b981;\n  --warning: #f59e0b;\n  --danger: #ef4444;\n  --info: #3b82f6;\n  --cyan: #06b6d4;\n  --border: rgba(255, 255, 255, 0.08);\n  display: block;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.analytics-dashboard[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--bg-main);\n  padding: 24px 32px;\n  color: var(--text-white);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--text-white);\n  margin: 0;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  display: none;\n}\n.filters-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: transparent;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  color: var(--text-gray);\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--text-white);\n}\n.filter-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: white;\n}\n.kpi-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border-radius: 16px;\n  padding: 20px;\n  border: 1px solid var(--border);\n}\n.kpi-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.kpi-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  background: rgba(99, 102, 241, 0.15);\n}\n.kpi-icon.revenue[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.15);\n  color: var(--primary);\n}\n.kpi-icon.orders[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: var(--success);\n}\n.kpi-icon.shipments[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.15);\n  color: var(--cyan);\n}\n.kpi-icon.lowstock[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: var(--danger);\n}\n.kpi-icon.delivered[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: var(--success);\n}\n.kpi-icon.customers[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.15);\n  color: var(--primary);\n}\n.kpi-trend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n.kpi-trend.up[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: var(--success);\n}\n.kpi-trend.down[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: var(--danger);\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-gray);\n  margin-bottom: 8px;\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--text-white);\n  margin: 0;\n  letter-spacing: -0.5px;\n}\n.kpi-comparison[_ngcontent-%COMP%] {\n  display: none;\n}\n.charts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.chart-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border-radius: 16px;\n  padding: 20px;\n  border: 1px solid var(--border);\n}\n.chart-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.chart-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-white);\n  margin: 0;\n}\n.chart-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.chart-action-btn[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  background: transparent;\n  border: none;\n  border-radius: 6px;\n  color: var(--text-muted);\n  font-size: 12px;\n  cursor: pointer;\n}\n.chart-action-btn[_ngcontent-%COMP%]:hover {\n  color: var(--text-gray);\n}\n.chart-action-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.chart-container[_ngcontent-%COMP%] {\n  height: 220px;\n  display: flex;\n  flex-direction: column;\n}\n.chart-container.simple-bars[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 12px;\n  padding-top: 20px;\n  border-bottom: 1px solid var(--border);\n}\n.bar-item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.bar[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 32px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--primary) 0%,\n      rgba(99, 102, 241, 0.3) 100%);\n  border-radius: 4px 4px 0 0;\n  min-height: 8px;\n  transition: all 0.3s ease;\n}\n.bar[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      180deg,\n      #818cf8 0%,\n      var(--primary) 100%);\n}\n.bar-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-align: center;\n}\n.status-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.status-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 90px 1fr 60px;\n  align-items: center;\n  gap: 12px;\n}\n.status-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.status-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-light);\n}\n.status-bar-container[_ngcontent-%COMP%] {\n  height: 24px;\n  background: var(--bg-input);\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n}\n.status-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  color: white;\n  font-weight: 600;\n  min-width: 30px;\n}\n.status-value[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-gray);\n  text-align: right;\n}\n.donut-total[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 16px;\n  background: var(--bg-input);\n  border-radius: 12px;\n  text-align: center;\n}\n.donut-value[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: var(--text-white);\n  display: block;\n}\n.donut-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-gray);\n}\n.products-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.products-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border-radius: 16px;\n  padding: 20px;\n  border: 1px solid var(--border);\n}\n.product-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.table-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px 48px 1fr 100px 80px 100px;\n  gap: 12px;\n  padding: 12px 0;\n  border-bottom: 1px solid var(--border);\n  font-size: 12px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.product-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px 48px 1fr 100px 80px 100px;\n  gap: 12px;\n  align-items: center;\n  padding: 14px 0;\n  border-bottom: 1px solid var(--border);\n}\n.product-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.product-item.empty[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 40px;\n  color: var(--text-muted);\n  grid-column: 1/-1;\n}\n.product-rank[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  background: var(--bg-input);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-white);\n}\n.product-image[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: var(--bg-input);\n  object-fit: cover;\n}\n.product-info[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.product-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-white);\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.product-sku[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.product-stats[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.product-sold[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-white);\n}\n.product-revenue[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--success);\n}\n.low-stock-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 48px 1fr 120px 150px;\n  gap: 12px;\n  align-items: center;\n  padding: 14px 0;\n  border-bottom: 1px solid var(--border);\n}\n.low-stock-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.stock-status[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.stock-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-white);\n}\n.stock-progress[_ngcontent-%COMP%] {\n  height: 8px;\n  background: var(--bg-input);\n  border-radius: 4px;\n  overflow: hidden;\n  width: 100%;\n}\n.stock-progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.3s;\n}\n.stock-progress-bar.critical[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.stock-progress-bar.low[_ngcontent-%COMP%] {\n  background: var(--warning);\n}\n.stock-progress-bar.safe[_ngcontent-%COMP%] {\n  background: var(--success);\n}\n.warehouse-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n}\n.warehouse-card[_ngcontent-%COMP%] {\n  background: var(--bg-input);\n  border-radius: 12px;\n  padding: 16px;\n  text-align: center;\n}\n.warehouse-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-white);\n  margin: 0 0 12px 0;\n}\n.warehouse-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.warehouse-stat-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--primary);\n}\n.warehouse-stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n}\n.activity-section[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border-radius: 16px;\n  padding: 20px;\n  border: 1px solid var(--border);\n}\n.activity-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.activity-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px;\n  background: var(--bg-input);\n  border-radius: 10px;\n}\n.activity-item.empty[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.activity-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.activity-icon.order[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.15);\n  color: var(--primary);\n}\n.activity-icon.shipment[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: var(--warning);\n}\n.activity-icon.stock[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: var(--success);\n}\n.activity-icon.alert[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: var(--danger);\n}\n.activity-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.activity-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-white);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.activity-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 4px 0 0;\n}\n.activity-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px;\n  gap: 16px;\n  color: var(--text-gray);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1400px) {\n  .kpi-section[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 1200px) {\n  .charts-grid[_ngcontent-%COMP%], \n   .products-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .activity-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 992px) {\n  .kpi-section[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .product-item[_ngcontent-%COMP%] {\n    grid-template-columns: 40px 40px 1fr 80px;\n  }\n}\n@media (max-width: 768px) {\n  .analytics-dashboard[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .filters-section[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-x: auto;\n  }\n  .kpi-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .kpi-value[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n@media (max-width: 480px) {\n  .kpi-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=analytics-dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticsDashboardComponent, { className: "AnalyticsDashboardComponent", filePath: "src\\app\\features\\analytics\\pages\\analytics-dashboard\\analytics-dashboard.component.ts", lineNumber: 38 });
})();
export {
  AnalyticsDashboardComponent
};
//# sourceMappingURL=chunk-6ZQWYE2P.js.map
