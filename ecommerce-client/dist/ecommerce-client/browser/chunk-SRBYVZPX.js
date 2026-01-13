import {
  ProductService
} from "./chunk-RSR6U7PL.js";
import {
  InventoryService
} from "./chunk-52QYXEQ7.js";
import {
  OrderService
} from "./chunk-INGYDYDZ.js";
import {
  WarehousesService
} from "./chunk-ZFKGYVVN.js";
import "./chunk-SBRLR34M.js";
import "./chunk-ZICMI5CI.js";
import {
  Router,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-IGAGZNZV.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-N7TOP6ZD.js";

// src/app/features/orders/pages/order-create/order-create.component.ts
function OrderCreateComponent_option_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wh_r1 = ctx.$implicit;
    \u0275\u0275property("value", wh_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", wh_r1.name, " - ", wh_r1.location, " ");
  }
}
function OrderCreateComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "div", 59);
    \u0275\u0275elementEnd();
  }
}
function OrderCreateComponent_div_64_button_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 70);
  }
  if (rf & 2) {
    const product_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", product_r3.primaryImageUrl, \u0275\u0275sanitizeUrl);
  }
}
function OrderCreateComponent_div_64_button_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 72);
    \u0275\u0275element(2, "path", 73);
    \u0275\u0275elementEnd()();
  }
}
function OrderCreateComponent_div_64_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function OrderCreateComponent_div_64_button_1_Template_button_click_0_listener() {
      const product_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.addProduct(product_r3));
    });
    \u0275\u0275template(1, OrderCreateComponent_div_64_button_1_img_1_Template, 1, 1, "img", 63)(2, OrderCreateComponent_div_64_button_1_div_2_Template, 3, 0, "div", 64);
    \u0275\u0275elementStart(3, "div", 65)(4, "p", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 67);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 68);
    \u0275\u0275element(9, "path", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r3.primaryImageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !product_r3.primaryImageUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", product_r3.sku, " \u2022 ", ctx_r3.formatCurrency(product_r3.unitPrice), "");
  }
}
function OrderCreateComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275template(1, OrderCreateComponent_div_64_button_1_Template, 10, 5, "button", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.products());
  }
}
function OrderCreateComponent_div_65_tr_18_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 70);
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r6.productImageUrl, \u0275\u0275sanitizeUrl);
  }
}
function OrderCreateComponent_div_65_tr_18_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 72);
    \u0275\u0275element(2, "path", 99);
    \u0275\u0275elementEnd()();
  }
}
function OrderCreateComponent_div_65_tr_18_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 100);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r6.availableStock, " ", \u0275\u0275pipeBind1(2, 2, "CREATE_ORDER.IN_STOCK"), " ");
  }
}
function OrderCreateComponent_div_65_tr_18_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 101);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r6.availableStock, " ", \u0275\u0275pipeBind1(2, 2, "CREATE_ORDER.LOW_STOCK"), " ");
  }
}
function OrderCreateComponent_div_65_tr_18_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0 ", \u0275\u0275pipeBind1(2, 1, "CREATE_ORDER.EXCEEDS"), " ");
  }
}
function OrderCreateComponent_div_65_tr_18_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 103);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CREATE_ORDER.SELECT_WAREHOUSE_FIRST"), " ");
  }
}
function OrderCreateComponent_div_65_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 80)(2, "div", 83);
    \u0275\u0275template(3, OrderCreateComponent_div_65_tr_18_img_3_Template, 1, 1, "img", 63)(4, OrderCreateComponent_div_65_tr_18_div_4_Template, 3, 0, "div", 64);
    \u0275\u0275elementStart(5, "div")(6, "p", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 67);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td", 80)(11, "div", 84)(12, "button", 85);
    \u0275\u0275listener("click", function OrderCreateComponent_div_65_tr_18_Template_button_click_12_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.decreaseQuantity(item_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 86);
    \u0275\u0275element(14, "path", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "span", 88);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 89);
    \u0275\u0275listener("click", function OrderCreateComponent_div_65_tr_18_Template_button_click_17_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.increaseQuantity(item_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 86);
    \u0275\u0275element(19, "path", 69);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "td", 90);
    \u0275\u0275template(21, OrderCreateComponent_div_65_tr_18_span_21_Template, 3, 4, "span", 91)(22, OrderCreateComponent_div_65_tr_18_span_22_Template, 3, 4, "span", 92)(23, OrderCreateComponent_div_65_tr_18_span_23_Template, 3, 3, "span", 93)(24, OrderCreateComponent_div_65_tr_18_span_24_Template, 3, 3, "span", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 95);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 80)(28, "button", 96);
    \u0275\u0275listener("click", function OrderCreateComponent_div_65_tr_18_Template_button_click_28_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeItem(item_r6.productId));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 97);
    \u0275\u0275element(30, "path", 98);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", item_r6.productImageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r6.productImageUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.sku);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", item_r6.quantity <= 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r6.quantity);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.getStockStatus(item_r6) === "ok");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getStockStatus(item_r6) === "low");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getStockStatus(item_r6) === "exceeded");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getStockStatus(item_r6) === "unknown");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatCurrency(item_r6.totalPrice), " ");
  }
}
function OrderCreateComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "table", 75)(2, "thead", 76)(3, "tr")(4, "th", 77);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 78);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 78);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 79);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "th", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tbody", 81);
    \u0275\u0275template(18, OrderCreateComponent_div_65_tr_18_Template, 31, 11, "tr", 82);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "CREATE_ORDER.PRODUCT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "CREATE_ORDER.QTY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, "CREATE_ORDER.AVAILABLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 11, "CREATE_ORDER.TOTAL"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.orderItems());
  }
}
function OrderCreateComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 105);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 106);
    \u0275\u0275element(3, "path", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 42);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 108);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "CREATE_ORDER.NO_ITEMS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 4, "CREATE_ORDER.SEARCH_TO_ADD"));
  }
}
function OrderCreateComponent_div_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109)(1, "p", 110);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 97);
    \u0275\u0275element(3, "path", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "CREATE_ORDER.STOCK_WARNING"), " ");
  }
}
function OrderCreateComponent__svg_svg_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 97);
    \u0275\u0275element(1, "path", 112);
    \u0275\u0275elementEnd();
  }
}
function OrderCreateComponent_div_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 113);
  }
}
function OrderCreateComponent_div_152_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 114);
    \u0275\u0275listener("click", function OrderCreateComponent_div_152_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
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
function OrderCreateComponent_div_153_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275listener("click", function OrderCreateComponent_div_153_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeProductDropdown());
    });
    \u0275\u0275elementEnd();
  }
}
var OrderCreateComponent = class _OrderCreateComponent {
  router = inject(Router);
  orderService = inject(OrderService);
  warehouseService = inject(WarehousesService);
  productService = inject(ProductService);
  inventoryService = inject(InventoryService);
  translateService = inject(TranslateService);
  destroy$ = new Subject();
  // State
  warehouses = signal([]);
  products = signal([]);
  orderItems = signal([]);
  loading = signal(false);
  productSearchLoading = signal(false);
  // Form
  customerId = signal("");
  customerName = signal("");
  selectedWarehouseId = signal(null);
  productSearch = signal("");
  orderNotes = signal("");
  // Shipping
  shippingName = signal("");
  shippingAddress = signal("");
  shippingCity = signal("");
  shippingCountry = signal("");
  shippingPhone = signal("");
  // Product search
  showProductDropdown = signal(false);
  productSearchSubject = new Subject();
  // Toast
  showToast = false;
  toastMessage = "";
  toastType = "success";
  // Computed
  selectedWarehouse = computed(() => {
    const id = this.selectedWarehouseId();
    return this.warehouses().find((w) => w.id === id);
  });
  subtotal = computed(() => {
    return this.orderItems().reduce((sum, item) => sum + item.totalPrice, 0);
  });
  taxRate = 0.05;
  // 5% tax
  taxAmount = computed(() => this.subtotal() * this.taxRate);
  shippingAmount = signal(0);
  totalAmount = computed(() => this.subtotal() + this.taxAmount() + this.shippingAmount());
  itemCount = computed(() => this.orderItems().reduce((sum, item) => sum + item.quantity, 0));
  canConfirm = computed(() => {
    return this.customerId().trim() !== "" && this.selectedWarehouseId() !== null && this.orderItems().length > 0 && !this.hasStockIssues();
  });
  ngOnInit() {
    this.loadWarehouses();
    this.setupProductSearch();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadWarehouses() {
    this.warehouseService.getAll().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.warehouses.set(data.filter((w) => w.isActive)),
      error: (err) => console.error("Failed to load warehouses", err)
    });
  }
  setupProductSearch() {
    this.productSearchSubject.pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$)).subscribe((term) => {
      if (term.length >= 2) {
        this.searchProducts(term);
      } else {
        this.products.set([]);
      }
    });
  }
  onProductSearchChange(term) {
    this.productSearch.set(term);
    this.productSearchSubject.next(term);
    this.showProductDropdown.set(term.length >= 2);
  }
  searchProducts(term) {
    this.productSearchLoading.set(true);
    this.productService.getPaged(1, 10, term, void 0, void 0, true).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.products.set(response.items);
        this.productSearchLoading.set(false);
      },
      error: (err) => {
        console.error("Product search error:", err);
        this.productSearchLoading.set(false);
      }
    });
  }
  onWarehouseChange(warehouseId) {
    this.selectedWarehouseId.set(warehouseId);
    this.refreshStockLevels();
  }
  refreshStockLevels() {
    const warehouseId = this.selectedWarehouseId();
    if (!warehouseId)
      return;
    const items = this.orderItems();
    items.forEach((item) => {
      this.inventoryService.getStockByProduct(item.productId, warehouseId).pipe(takeUntil(this.destroy$)).subscribe({
        next: (stock) => {
          this.updateItemStock(item.productId, stock.quantityAvailable);
        },
        error: () => {
          this.updateItemStock(item.productId, 0);
        }
      });
    });
  }
  updateItemStock(productId, available) {
    const items = this.orderItems();
    const updated = items.map((item) => item.productId === productId ? __spreadProps(__spreadValues({}, item), { availableStock: available }) : item);
    this.orderItems.set(updated);
  }
  addProduct(product) {
    const existing = this.orderItems().find((i) => i.productId === product.id);
    if (existing) {
      this.increaseQuantity(existing);
      this.closeProductDropdown();
      return;
    }
    const warehouseId = this.selectedWarehouseId();
    if (warehouseId) {
      this.inventoryService.getStockByProduct(product.id, warehouseId).pipe(takeUntil(this.destroy$)).subscribe({
        next: (stock) => {
          this.addLineItem(product, stock.quantityAvailable);
        },
        error: () => {
          this.addLineItem(product, 0);
        }
      });
    } else {
      this.addLineItem(product, 0);
    }
    this.closeProductDropdown();
  }
  addLineItem(product, availableStock) {
    const newItem = {
      productId: product.id,
      sku: product.sku,
      productName: product.name,
      productImageUrl: product.primaryImageUrl,
      unitPrice: product.unitPrice,
      quantity: 1,
      availableStock,
      totalPrice: product.unitPrice
    };
    this.orderItems.update((items) => [...items, newItem]);
  }
  closeProductDropdown() {
    this.showProductDropdown.set(false);
    this.productSearch.set("");
    this.products.set([]);
  }
  increaseQuantity(item) {
    if (item.quantity >= item.availableStock && item.availableStock > 0) {
      this.showNotification("error", "CREATE_ORDER.EXCEEDS_STOCK");
      return;
    }
    this.updateQuantity(item.productId, item.quantity + 1);
  }
  decreaseQuantity(item) {
    if (item.quantity > 1) {
      this.updateQuantity(item.productId, item.quantity - 1);
    }
  }
  updateQuantity(productId, quantity) {
    const items = this.orderItems();
    const updated = items.map((item) => item.productId === productId ? __spreadProps(__spreadValues({}, item), { quantity, totalPrice: item.unitPrice * quantity }) : item);
    this.orderItems.set(updated);
  }
  removeItem(productId) {
    this.orderItems.update((items) => items.filter((i) => i.productId !== productId));
  }
  hasStockIssues() {
    return this.orderItems().some((item) => item.availableStock > 0 && item.quantity > item.availableStock);
  }
  getStockStatus(item) {
    if (item.availableStock === 0)
      return "unknown";
    if (item.quantity > item.availableStock)
      return "exceeded";
    if (item.availableStock <= 5)
      return "low";
    return "ok";
  }
  // Actions
  saveDraft() {
    return __async(this, null, function* () {
      if (!this.customerId() || !this.selectedWarehouseId()) {
        this.showNotification("error", "CREATE_ORDER.CUSTOMER_WAREHOUSE_REQUIRED");
        return;
      }
      this.loading.set(true);
      const request = {
        customerId: this.customerId(),
        warehouseId: this.selectedWarehouseId(),
        shippingName: this.shippingName() || this.customerName(),
        shippingAddress: this.shippingAddress(),
        shippingCity: this.shippingCity(),
        shippingCountry: this.shippingCountry(),
        shippingPhone: this.shippingPhone(),
        notes: this.orderNotes()
      };
      try {
        const order = yield this.orderService.create(request).toPromise();
        for (const item of this.orderItems()) {
          const addRequest = {
            productId: item.productId,
            quantity: item.quantity
          };
          yield this.orderService.addItem(order.id, addRequest).toPromise();
        }
        this.showNotification("success", "CREATE_ORDER.DRAFT_SAVED");
        this.router.navigate(["/orders", order.id]);
      } catch (err) {
        console.error("Save draft error:", err);
        this.showNotification("error", "CREATE_ORDER.SAVE_ERROR");
      } finally {
        this.loading.set(false);
      }
    });
  }
  confirmOrder() {
    return __async(this, null, function* () {
      if (!this.canConfirm()) {
        return;
      }
      this.loading.set(true);
      try {
        const request = {
          customerId: this.customerId(),
          warehouseId: this.selectedWarehouseId(),
          shippingName: this.shippingName() || this.customerName(),
          shippingAddress: this.shippingAddress(),
          shippingCity: this.shippingCity(),
          shippingCountry: this.shippingCountry(),
          shippingPhone: this.shippingPhone(),
          notes: this.orderNotes()
        };
        const order = yield this.orderService.create(request).toPromise();
        for (const item of this.orderItems()) {
          const addRequest = {
            productId: item.productId,
            quantity: item.quantity
          };
          yield this.orderService.addItem(order.id, addRequest).toPromise();
        }
        yield this.orderService.confirm(order.id).toPromise();
        this.showNotification("success", "CREATE_ORDER.ORDER_CONFIRMED");
        this.router.navigate(["/orders", order.id]);
      } catch (err) {
        console.error("Confirm order error:", err);
        this.showNotification("error", "CREATE_ORDER.CONFIRM_ERROR");
      } finally {
        this.loading.set(false);
      }
    });
  }
  formatCurrency(amount) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
  }
  showNotification(type, key) {
    this.toastType = type;
    this.toastMessage = this.translateService.instant(key);
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3e3);
  }
  static \u0275fac = function OrderCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderCreateComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderCreateComponent, selectors: [["app-order-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 154, vars: 126, consts: [[1, "min-h-screen", "bg-slate-50"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-6"], [1, "mb-6"], [1, "text-sm", "text-slate-500", "mb-2"], ["routerLink", "/dashboard", 1, "hover:text-indigo-600"], [1, "mx-2"], ["routerLink", "/orders", 1, "hover:text-indigo-600"], [1, "text-slate-700"], [1, "text-2xl", "font-bold", "text-slate-900"], [1, "text-slate-500", "text-sm", "mt-1"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "space-y-6"], [1, "bg-white", "rounded-xl", "shadow-sm", "border", "border-slate-200", "p-6"], [1, "text-lg", "font-semibold", "text-slate-900", "mb-4"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "block", "text-sm", "font-medium", "text-slate-700", "mb-2"], ["type", "text", 1, "w-full", "px-4", "py-2.5", "border", "border-slate-200", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", 3, "input", "value", "placeholder"], ["type", "text", 1, "w-full", "px-4", "py-2.5", "border", "border-slate-200", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500", "mt-2", 3, "input", "value", "placeholder"], [1, "w-full", "px-4", "py-2.5", "border", "border-slate-200", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500", "bg-white", 3, "change", "value"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "text-xs", "text-slate-500", "mt-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "inline-block", "mr-1", "text-blue-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-lg", "font-semibold", "text-slate-900"], [1, "relative", "mb-6"], [1, "relative"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-5", "h-5", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", 1, "w-full", "pl-10", "pr-4", "py-3", "border", "border-slate-200", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500", 3, "input", "focus", "value", "placeholder"], ["class", "absolute right-3 top-1/2 -translate-y-1/2", 4, "ngIf"], ["class", "absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-slate-200 max-h-64 overflow-y-auto", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], ["class", "text-center py-12", 4, "ngIf"], ["rows", "3", 1, "w-full", "px-4", "py-3", "border", "border-slate-200", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500", "resize-none", 3, "input", "value", "placeholder"], ["type", "text", 1, "w-full", "px-4", "py-2.5", "border", "border-slate-200", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500", 3, "input", "value"], [1, "md:col-span-2"], [1, "space-y-6"], [1, "bg-white", "rounded-xl", "shadow-sm", "border", "border-slate-200", "p-6", "sticky", "top-6"], [1, "space-y-3"], [1, "flex", "justify-between", "text-sm"], [1, "text-slate-500"], [1, "border-t", "border-slate-200", "pt-3"], [1, "flex", "justify-between", "font-semibold", "text-lg"], [1, "text-slate-900"], [1, "text-indigo-600"], ["class", "mt-4 p-3 bg-red-50 border border-red-200 rounded-lg", 4, "ngIf"], [1, "mt-6", "space-y-3"], [1, "w-full", "py-3", "bg-indigo-600", "text-white", "rounded-lg", "font-medium", "hover:bg-indigo-700", "transition-colors", "disabled:opacity-50", "disabled:cursor-not-allowed", "flex", "items-center", "justify-center", "gap-2", 3, "click", "disabled"], ["class", "w-5 h-5", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin", 4, "ngIf"], [1, "w-full", "py-3", "border", "border-slate-300", "text-slate-700", "rounded-lg", "font-medium", "hover:bg-slate-50", "transition-colors", "disabled:opacity-50", 3, "click", "disabled"], ["routerLink", "/orders", 1, "block", "w-full", "py-3", "text-center", "text-red-600", "hover:text-red-800", "font-medium"], [1, "text-xs", "text-slate-400", "mt-4", "text-center"], [3, "class", 4, "ngIf"], ["class", "fixed inset-0 z-0", 3, "click", 4, "ngIf"], [3, "value"], [1, "absolute", "right-3", "top-1/2", "-translate-y-1/2"], [1, "w-5", "h-5", "border-2", "border-indigo-500", "border-t-transparent", "rounded-full", "animate-spin"], [1, "absolute", "z-10", "w-full", "mt-1", "bg-white", "rounded-lg", "shadow-lg", "border", "border-slate-200", "max-h-64", "overflow-y-auto"], ["class", "w-full px-4 py-3 flex items-center gap-3 hover:bg-slate-50 border-b border-slate-100 last:border-b-0", 3, "click", 4, "ngFor", "ngForOf"], [1, "w-full", "px-4", "py-3", "flex", "items-center", "gap-3", "hover:bg-slate-50", "border-b", "border-slate-100", "last:border-b-0", 3, "click"], ["class", "w-10 h-10 rounded-lg object-cover bg-slate-100", 3, "src", 4, "ngIf"], ["class", "w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center", 4, "ngIf"], [1, "flex-1", "text-left"], [1, "font-medium", "text-slate-900"], [1, "text-sm", "text-slate-500"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-indigo-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "w-10", "h-10", "rounded-lg", "object-cover", "bg-slate-100", 3, "src"], [1, "w-10", "h-10", "rounded-lg", "bg-slate-100", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "overflow-x-auto"], [1, "w-full"], [1, "bg-slate-50"], [1, "px-4", "py-3", "text-left", "text-xs", "font-semibold", "text-slate-500", "uppercase"], [1, "px-4", "py-3", "text-center", "text-xs", "font-semibold", "text-slate-500", "uppercase"], [1, "px-4", "py-3", "text-right", "text-xs", "font-semibold", "text-slate-500", "uppercase"], [1, "px-4", "py-3"], [1, "divide-y", "divide-slate-100"], [4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-3"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "w-8", "h-8", "rounded-lg", "border", "border-slate-200", "flex", "items-center", "justify-center", "hover:bg-slate-50", "disabled:opacity-50", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 12H4"], [1, "w-8", "text-center", "font-medium"], [1, "w-8", "h-8", "rounded-lg", "border", "border-slate-200", "flex", "items-center", "justify-center", "hover:bg-slate-50", 3, "click"], [1, "px-4", "py-3", "text-center"], ["class", "text-green-600 font-medium", 4, "ngIf"], ["class", "text-amber-600 font-medium", 4, "ngIf"], ["class", "text-red-600 font-medium", 4, "ngIf"], ["class", "text-slate-400", 4, "ngIf"], [1, "px-4", "py-3", "text-right", "font-semibold", "text-slate-900"], [1, "p-2", "text-red-400", "hover:text-red-600", "hover:bg-red-50", "rounded-lg", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16l4.586-4.586a2 2 0 012.828 0L16 16"], [1, "text-green-600", "font-medium"], [1, "text-amber-600", "font-medium"], [1, "text-red-600", "font-medium"], [1, "text-slate-400"], [1, "text-center", "py-12"], [1, "w-16", "h-16", "mx-auto", "mb-4", "bg-slate-100", "rounded-full", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"], [1, "text-sm", "text-slate-400"], [1, "mt-4", "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg"], [1, "text-sm", "text-red-600", "flex", "items-center", "gap-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "w-5", "h-5", "border-2", "border-white", "border-t-transparent", "rounded-full", "animate-spin"], [3, "click"], [1, "fixed", "inset-0", "z-0", 3, "click"]], template: function OrderCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "nav", 3)(4, "a", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 6);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 5);
      \u0275\u0275text(13, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 7);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "h1", 8);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p", 9);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 10)(24, "div", 11)(25, "div", 12)(26, "h2", 13);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 14)(30, "div")(31, "label", 15);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 16);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275listener("input", function OrderCreateComponent_Template_input_input_34_listener($event) {
        return ctx.customerId.set($event.target.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "input", 17);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275listener("input", function OrderCreateComponent_Template_input_input_36_listener($event) {
        return ctx.customerName.set($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div")(39, "label", 15);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "select", 18);
      \u0275\u0275listener("change", function OrderCreateComponent_Template_select_change_42_listener($event) {
        return ctx.onWarehouseChange(+$event.target.value);
      });
      \u0275\u0275elementStart(43, "option", 19);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(46, OrderCreateComponent_option_46_Template, 2, 3, "option", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "p", 21);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(48, "svg", 22);
      \u0275\u0275element(49, "path", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(52, "div", 12)(53, "div", 24)(54, "h2", 25);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 26)(58, "div", 27);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(59, "svg", 28);
      \u0275\u0275element(60, "path", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(61, "input", 30);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275listener("input", function OrderCreateComponent_Template_input_input_61_listener($event) {
        return ctx.onProductSearchChange($event.target.value);
      })("focus", function OrderCreateComponent_Template_input_focus_61_listener() {
        return ctx.showProductDropdown.set(ctx.productSearch().length >= 2);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(63, OrderCreateComponent_div_63_Template, 2, 0, "div", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(64, OrderCreateComponent_div_64_Template, 2, 1, "div", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275template(65, OrderCreateComponent_div_65_Template, 19, 13, "div", 33)(66, OrderCreateComponent_div_66_Template, 10, 6, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 12)(68, "h2", 13);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "textarea", 35);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275listener("input", function OrderCreateComponent_Template_textarea_input_71_listener($event) {
        return ctx.orderNotes.set($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 12)(74, "h2", 13);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 14)(78, "div")(79, "label", 15);
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "input", 36);
      \u0275\u0275listener("input", function OrderCreateComponent_Template_input_input_82_listener($event) {
        return ctx.shippingName.set($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div")(84, "label", 15);
      \u0275\u0275text(85);
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "input", 36);
      \u0275\u0275listener("input", function OrderCreateComponent_Template_input_input_87_listener($event) {
        return ctx.shippingPhone.set($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div", 37)(89, "label", 15);
      \u0275\u0275text(90);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "input", 36);
      \u0275\u0275listener("input", function OrderCreateComponent_Template_input_input_92_listener($event) {
        return ctx.shippingAddress.set($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div")(94, "label", 15);
      \u0275\u0275text(95);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "input", 36);
      \u0275\u0275listener("input", function OrderCreateComponent_Template_input_input_97_listener($event) {
        return ctx.shippingCity.set($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div")(99, "label", 15);
      \u0275\u0275text(100);
      \u0275\u0275pipe(101, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "input", 36);
      \u0275\u0275listener("input", function OrderCreateComponent_Template_input_input_102_listener($event) {
        return ctx.shippingCountry.set($event.target.value);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(103, "div", 38)(104, "div", 39)(105, "h2", 13);
      \u0275\u0275text(106);
      \u0275\u0275pipe(107, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div", 40)(109, "div", 41)(110, "span", 42);
      \u0275\u0275text(111);
      \u0275\u0275pipe(112, "translate");
      \u0275\u0275pipe(113, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "span", 7);
      \u0275\u0275text(115);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "div", 41)(117, "span", 42);
      \u0275\u0275text(118);
      \u0275\u0275pipe(119, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "span", 7);
      \u0275\u0275text(121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 41)(123, "span", 42);
      \u0275\u0275text(124);
      \u0275\u0275pipe(125, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "span", 7);
      \u0275\u0275text(127);
      \u0275\u0275pipe(128, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "div", 43)(130, "div", 44)(131, "span", 45);
      \u0275\u0275text(132);
      \u0275\u0275pipe(133, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "span", 46);
      \u0275\u0275text(135);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(136, OrderCreateComponent_div_136_Template, 6, 3, "div", 47);
      \u0275\u0275elementStart(137, "div", 48)(138, "button", 49);
      \u0275\u0275listener("click", function OrderCreateComponent_Template_button_click_138_listener() {
        return ctx.confirmOrder();
      });
      \u0275\u0275template(139, OrderCreateComponent__svg_svg_139_Template, 2, 0, "svg", 50)(140, OrderCreateComponent_div_140_Template, 1, 0, "div", 51);
      \u0275\u0275text(141);
      \u0275\u0275pipe(142, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "button", 52);
      \u0275\u0275listener("click", function OrderCreateComponent_Template_button_click_143_listener() {
        return ctx.saveDraft();
      });
      \u0275\u0275text(144);
      \u0275\u0275pipe(145, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "a", 53);
      \u0275\u0275text(147);
      \u0275\u0275pipe(148, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "p", 54);
      \u0275\u0275text(150);
      \u0275\u0275pipe(151, "translate");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(152, OrderCreateComponent_div_152_Template, 5, 3, "div", 55)(153, OrderCreateComponent_div_153_Template, 1, 0, "div", 56);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 60, "NAV.DASHBOARD"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 62, "ORDERS.TITLE"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 64, "CREATE_ORDER.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 66, "CREATE_ORDER.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 68, "CREATE_ORDER.SUBTITLE"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 70, "CREATE_ORDER.CUSTOMER_WAREHOUSE"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 72, "CREATE_ORDER.CUSTOMER"), " * ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.customerId())("placeholder", \u0275\u0275pipeBind1(35, 74, "CREATE_ORDER.CUSTOMER_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.customerName())("placeholder", \u0275\u0275pipeBind1(37, 76, "CREATE_ORDER.CUSTOMER_NAME_PLACEHOLDER"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 78, "CREATE_ORDER.WAREHOUSE"), " * ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.selectedWarehouseId() || "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 80, "CREATE_ORDER.SELECT_WAREHOUSE"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.warehouses());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 82, "CREATE_ORDER.WAREHOUSE_NOTE"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 84, "CREATE_ORDER.PRODUCT_SELECTION"));
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.productSearch())("placeholder", \u0275\u0275pipeBind1(62, 86, "CREATE_ORDER.SEARCH_PRODUCTS"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.productSearchLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showProductDropdown() && ctx.products().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.orderItems().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.orderItems().length === 0);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(70, 88, "CREATE_ORDER.ORDER_NOTES"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.orderNotes())("placeholder", \u0275\u0275pipeBind1(72, 90, "CREATE_ORDER.NOTES_PLACEHOLDER"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(76, 92, "CREATE_ORDER.SHIPPING_INFO"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 94, "CREATE_ORDER.SHIP_TO_NAME"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.shippingName());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(86, 96, "CREATE_ORDER.PHONE"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.shippingPhone());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(91, 98, "CREATE_ORDER.ADDRESS"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.shippingAddress());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(96, 100, "CREATE_ORDER.CITY"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.shippingCity());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(101, 102, "CREATE_ORDER.COUNTRY"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.shippingCountry());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(107, 104, "CREATE_ORDER.ORDER_SUMMARY"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(112, 106, "CREATE_ORDER.SUBTOTAL"), " (", ctx.itemCount(), " ", \u0275\u0275pipeBind1(113, 108, "CREATE_ORDER.ITEMS"), ")");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.subtotal()));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(119, 110, "CREATE_ORDER.TAX"), " (", ctx.taxRate * 100, "%)");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.taxAmount()));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(125, 112, "CREATE_ORDER.SHIPPING"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.shippingAmount() === 0 ? \u0275\u0275pipeBind1(128, 114, "CREATE_ORDER.FREE") : ctx.formatCurrency(ctx.shippingAmount()));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(133, 116, "CREATE_ORDER.TOTAL"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.totalAmount()));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasStockIssues());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.canConfirm() || ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(142, 118, "CREATE_ORDER.CONFIRM_ORDER"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(145, 120, "CREATE_ORDER.SAVE_DRAFT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(148, 122, "COMMON.CANCEL"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(151, 124, "CREATE_ORDER.CONFIRM_NOTE"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showToast);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showProductDropdown());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderCreateComponent, { className: "OrderCreateComponent", filePath: "src\\app\\features\\orders\\pages\\order-create\\order-create.component.ts", lineNumber: 31 });
})();
export {
  OrderCreateComponent
};
//# sourceMappingURL=chunk-SRBYVZPX.js.map
