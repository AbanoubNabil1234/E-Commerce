import {
  ProductService
} from "./chunk-RSR6U7PL.js";
import {
  InventoryService
} from "./chunk-52QYXEQ7.js";
import {
  WarehousesService
} from "./chunk-ZFKGYVVN.js";
import {
  BrandService
} from "./chunk-UMMWDTGH.js";
import {
  CategoryService
} from "./chunk-QGEU43LX.js";
import {
  ConfirmModalComponent
} from "./chunk-3AUUQ3ZH.js";
import {
  LanguageService
} from "./chunk-SBRLR34M.js";
import {
  NotificationService
} from "./chunk-ZICMI5CI.js";
import {
  ActivatedRoute,
  Router,
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
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  Subject,
  catchError,
  debounceTime,
  finalize,
  forkJoin,
  merge,
  of,
  switchMap,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate7
} from "./chunk-IGAGZNZV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-N7TOP6ZD.js";

// src/app/features/products/pages/product-list/product-list.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _c1 = (a0) => ["/products", a0];
var _c2 = (a0) => ["/products", a0, "edit"];
var _c3 = () => [1, 2, 3, 4];
function ProductListComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "button", 59);
    \u0275\u0275listener("click", function ProductListComponent_div_55_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSort("updatedAt"));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 59);
    \u0275\u0275listener("click", function ProductListComponent_div_55_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSort("name"));
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 59);
    \u0275\u0275listener("click", function ProductListComponent_div_55_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSort("unitPrice"));
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 59);
    \u0275\u0275listener("click", function ProductListComponent_div_55_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSort("sku"));
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("text-indigo-600", ctx_r1.sortField === "updatedAt")("font-semibold", ctx_r1.sortField === "updatedAt");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 20, "PRODUCTS.SORT_LAST_UPDATED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-indigo-600", ctx_r1.sortField === "name")("font-semibold", ctx_r1.sortField === "name");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 22, "PRODUCTS.SORT_NAME"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-indigo-600", ctx_r1.sortField === "unitPrice")("font-semibold", ctx_r1.sortField === "unitPrice");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 24, "PRODUCTS.SORT_PRICE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-indigo-600", ctx_r1.sortField === "sku")("font-semibold", ctx_r1.sortField === "sku");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 26, "PRODUCTS.SORT_SKU"), " ");
  }
}
function ProductListComponent_button_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function ProductListComponent_button_77_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFilter("all"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PRODUCTS.CLEAR_ALL"), " ");
  }
}
function ProductListComponent_div_79_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "div", 64)(2, "div", 65);
    \u0275\u0275elementStart(3, "div", 66);
    \u0275\u0275element(4, "div", 67)(5, "div", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 69)(7, "div", 70)(8, "div", 71);
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275template(1, ProductListComponent_div_79_div_1_Template, 9, 0, "div", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function ProductListComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73);
    \u0275\u0275element(2, "i", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 75);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 76);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 77);
    \u0275\u0275element(10, "i", 15);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "PRODUCTS.EMPTY_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "PRODUCTS.EMPTY_DESC"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 7, "PRODUCTS.CREATE_PRODUCT"), " ");
  }
}
function ProductListComponent_table_81_tr_33_img_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 115);
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", product_r6.primaryImageUrl, \u0275\u0275sanitizeUrl)("alt", product_r6.name);
  }
}
function ProductListComponent_table_81_tr_33_i_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 116);
  }
}
function ProductListComponent_table_81_tr_33_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "PRODUCTS.IN_STOCK"));
  }
}
function ProductListComponent_table_81_tr_33_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "PRODUCTS.LOW_STOCK"));
  }
}
function ProductListComponent_table_81_tr_33_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "PRODUCTS.OUT_OF_STOCK"));
  }
}
function ProductListComponent_table_81_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 87)(1, "td", 88)(2, "input", 81);
    \u0275\u0275listener("change", function ProductListComponent_table_81_tr_33_Template_input_change_2_listener() {
      const product_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSelection(product_r6.id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td", 88)(4, "div", 10)(5, "div", 89);
    \u0275\u0275template(6, ProductListComponent_table_81_tr_33_img_6_Template, 1, 2, "img", 90)(7, ProductListComponent_table_81_tr_33_i_7_Template, 1, 0, "i", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 92)(9, "a", 93);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 94);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td", 88)(14, "span", 95);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 96)(17, "span", 97);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 96)(20, "span", 98);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 88)(23, "div", 99)(24, "span", 100);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 101);
    \u0275\u0275elementContainerStart(27, 102);
    \u0275\u0275template(28, ProductListComponent_table_81_tr_33_span_28_Template, 3, 3, "span", 103)(29, ProductListComponent_table_81_tr_33_span_29_Template, 3, 3, "span", 103)(30, ProductListComponent_table_81_tr_33_span_30_Template, 3, 3, "span", 103);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "td", 88)(32, "span", 104);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "td", 88)(35, "span", 105);
    \u0275\u0275element(36, "span", 106);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "td", 107)(41, "span", 45);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "td", 108)(44, "div", 109)(45, "a", 110);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275element(47, "i", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "a", 110);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275element(50, "i", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 113);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275listener("click", function ProductListComponent_table_81_tr_33_Template_button_click_51_listener() {
      const product_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteProduct(product_r6));
    });
    \u0275\u0275element(53, "i", 114);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-indigo-50", ctx_r1.isSelected(product_r6.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isSelected(product_r6.id));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", product_r6.primaryImageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !product_r6.primaryImageUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(40, _c1, product_r6.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", product_r6.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r6.shortDescription || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r6.sku);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r6.brandName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", product_r6.categoryName, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getStockQty(product_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getStockBadgeClass(ctx_r1.getStockStatus(product_r6)));
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", ctx_r1.getStockStatus(product_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "in-stock");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "low-stock");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "out-of-stock");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatPrice(product_r6.unitPrice));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getStatusBadgeClass(product_r6.isActive));
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-emerald-500", product_r6.isActive)("bg-slate-400", !product_r6.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", product_r6.isActive ? \u0275\u0275pipeBind1(38, 30, "COMMON.ACTIVE") : \u0275\u0275pipeBind1(39, 32, "COMMON.INACTIVE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(product_r6.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(42, _c1, product_r6.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(46, 34, "COMMON.VIEW"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(44, _c2, product_r6.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(49, 36, "COMMON.EDIT"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(52, 38, "COMMON.DELETE"));
  }
}
function ProductListComponent_table_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "table", 78)(1, "thead", 79)(2, "tr")(3, "th", 80)(4, "input", 81);
    \u0275\u0275listener("change", function ProductListComponent_table_81_Template_input_change_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSelectAll());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 82);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 82);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 83);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 83);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 82);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 82);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 82);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 84);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 85);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "tbody", 61);
    \u0275\u0275template(33, ProductListComponent_table_81_tr_33_Template, 54, 46, "tr", 86);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r1.isAllSelected);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 11, "PRODUCTS.COLUMN_PRODUCT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 13, "PRODUCTS.COLUMN_SKU"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 15, "PRODUCTS.COLUMN_BRAND"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 17, "PRODUCTS.COLUMN_CATEGORY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 19, "PRODUCTS.COLUMN_STOCK"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 21, "PRODUCTS.COLUMN_PRICE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 23, "COMMON.STATUS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 25, "PRODUCTS.COLUMN_UPDATED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 27, "COMMON.ACTIONS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.products);
  }
}
function ProductListComponent_div_82_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 121);
    \u0275\u0275listener("click", function ProductListComponent_div_82_button_12_Template_button_click_0_listener() {
      const page_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(page_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", page_r9 === ctx_r1.pageNumber ? "bg-indigo-600 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r9, " ");
  }
}
function ProductListComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 117)(1, "div", 97);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 99)(8, "button", 118);
    \u0275\u0275listener("click", function ProductListComponent_div_82_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.pageNumber - 1));
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 119);
    \u0275\u0275template(12, ProductListComponent_div_82_button_12_Template, 2, 2, "button", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 118);
    \u0275\u0275listener("click", function ProductListComponent_div_82_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.pageNumber + 1));
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate7(" ", \u0275\u0275pipeBind1(3, 12, "COMMON.SHOWING"), " ", ctx_r1.showingFrom, " ", \u0275\u0275pipeBind1(4, 14, "COMMON.TO"), " ", ctx_r1.showingTo, " ", \u0275\u0275pipeBind1(5, 16, "COMMON.OF"), " ", ctx_r1.totalCount, " ", \u0275\u0275pipeBind1(6, 18, "COMMON.RESULTS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.pageNumber === 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 20, "COMMON.PREVIOUS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.pagesArray);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.pageNumber === ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 22, "COMMON.NEXT"), " ");
  }
}
function ProductListComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 122)(1, "span", 123)(2, "span", 124);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 125);
    \u0275\u0275elementStart(7, "button", 126);
    \u0275\u0275listener("click", function ProductListComponent_div_83_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bulkActivate());
    });
    \u0275\u0275element(8, "i", 127);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 128);
    \u0275\u0275listener("click", function ProductListComponent_div_83_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bulkDeactivate());
    });
    \u0275\u0275element(12, "i", 129);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 130);
    \u0275\u0275listener("click", function ProductListComponent_div_83_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmBulkDelete());
    });
    \u0275\u0275element(16, "i", 114);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 131);
    \u0275\u0275listener("click", function ProductListComponent_div_83_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSelection());
    });
    \u0275\u0275element(20, "i", 132);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedCount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "PRODUCTS.SELECTED"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "PRODUCTS.BULK_ACTIVATE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 9, "PRODUCTS.BULK_ARCHIVE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 11, "PRODUCTS.BULK_DELETE"), " ");
  }
}
function ProductListComponent_div_112_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135)(1, "div", 136);
    \u0275\u0275element(2, "div", 137);
    \u0275\u0275elementStart(3, "div", 66);
    \u0275\u0275element(4, "div", 138)(5, "div", 139)(6, "div", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 140);
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_div_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275template(1, ProductListComponent_div_112_div_1_Template, 8, 0, "div", 134);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c3));
  }
}
function ProductListComponent_div_113_div_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 115);
  }
  if (rf & 2) {
    const product_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", product_r11.primaryImageUrl, \u0275\u0275sanitizeUrl)("alt", product_r11.name);
  }
}
function ProductListComponent_div_113_div_1_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 156);
  }
}
function ProductListComponent_div_113_div_1_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "i", 157);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const product_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(3, 2, "PRODUCTS.IN_STOCK"), " (", ctx_r1.getStockQty(product_r11), ") ");
  }
}
function ProductListComponent_div_113_div_1_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "i", 158);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const product_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(3, 2, "PRODUCTS.LOW_STOCK"), " (", ctx_r1.getStockQty(product_r11), ") ");
  }
}
function ProductListComponent_div_113_div_1_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "i", 159);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "PRODUCTS.OUT_OF_STOCK"), " ");
  }
}
function ProductListComponent_div_113_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 142)(1, "div", 136)(2, "div", 143);
    \u0275\u0275template(3, ProductListComponent_div_113_div_1_img_3_Template, 1, 2, "img", 90)(4, ProductListComponent_div_113_div_1_i_4_Template, 1, 0, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 145)(6, "div", 146)(7, "h3", 147);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 148);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 149);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 150)(14, "span", 151);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 151);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 152)(19, "span", 153);
    \u0275\u0275elementContainerStart(20, 102);
    \u0275\u0275template(21, ProductListComponent_div_113_div_1_ng_container_21_Template, 4, 4, "ng-container", 103)(22, ProductListComponent_div_113_div_1_ng_container_22_Template, 4, 4, "ng-container", 103)(23, ProductListComponent_div_113_div_1_ng_container_23_Template, 4, 3, "ng-container", 103);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 99)(25, "a", 154);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 155);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", product_r11.primaryImageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !product_r11.primaryImageUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r11.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatPrice(product_r11.unitPrice));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("SKU: ", product_r11.sku, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r11.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r11.brandName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getStockBadgeClass(ctx_r1.getStockStatus(product_r11)));
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", ctx_r1.getStockStatus(product_r11));
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "in-stock");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "low-stock");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "out-of-stock");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c1, product_r11.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 16, "COMMON.VIEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c2, product_r11.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 18, "COMMON.EDIT"), " ");
  }
}
function ProductListComponent_div_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275template(1, ProductListComponent_div_113_div_1_Template, 31, 24, "div", 141);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.products);
  }
}
function ProductListComponent_div_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 160)(1, "div", 161);
    \u0275\u0275element(2, "i", 162);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 75);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 163);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "PRODUCTS.EMPTY_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "PRODUCTS.EMPTY_DESC"));
  }
}
function ProductListComponent_app_confirm_modal_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-confirm-modal", 164);
    \u0275\u0275listener("confirmed", function ProductListComponent_app_confirm_modal_117_Template_app_confirm_modal_confirmed_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirmDelete());
    })("cancelled", function ProductListComponent_app_confirm_modal_117_Template_app_confirm_modal_cancelled_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("config", ctx_r1.deleteModalConfig);
  }
}
function ProductListComponent_app_confirm_modal_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-confirm-modal", 164);
    \u0275\u0275listener("confirmed", function ProductListComponent_app_confirm_modal_118_Template_app_confirm_modal_confirmed_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirmBulkDelete());
    })("cancelled", function ProductListComponent_app_confirm_modal_118_Template_app_confirm_modal_cancelled_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBulkDeleteModal());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("config", ctx_r1.bulkDeleteModalConfig);
  }
}
var ProductListComponent = class _ProductListComponent {
  productService;
  brandService;
  categoryService;
  translate;
  notificationService;
  languageService;
  inventoryService;
  destroy$ = new Subject();
  // State
  products = [];
  brands = [];
  categories = [];
  isLoading = false;
  totalCount = 0;
  pageNumber = 1;
  pageSize = 10;
  // Inventory Stock Map (productId -> stock data)
  stockMap = /* @__PURE__ */ new Map();
  isLoadingStock = false;
  // Selection
  selectedProducts = /* @__PURE__ */ new Set();
  isAllSelected = false;
  // Filters & Sort
  searchControl = new FormControl("");
  brandControl = new FormControl(null);
  categoryControl = new FormControl(null);
  statusControl = new FormControl(null);
  activeFilter = "all";
  sortField = "updatedAt";
  sortDescending = true;
  showSortDropdown = false;
  // Responsive
  isMobile = false;
  isTablet = false;
  // Delete Confirmation Modal
  showDeleteModal = false;
  productToDelete = null;
  deleteModalConfig = {
    type: "danger",
    title: "",
    message: "",
    confirmText: "",
    cancelText: ""
  };
  // Bulk delete
  showBulkDeleteModal = false;
  bulkDeleteModalConfig = {
    type: "danger",
    title: "",
    message: "",
    confirmText: "",
    cancelText: ""
  };
  constructor(productService, brandService, categoryService, translate, notificationService, languageService, inventoryService) {
    this.productService = productService;
    this.brandService = brandService;
    this.categoryService = categoryService;
    this.translate = translate;
    this.notificationService = notificationService;
    this.languageService = languageService;
    this.inventoryService = inventoryService;
    this.checkScreenSize();
  }
  onResize() {
    this.checkScreenSize();
  }
  onDocumentClick(event) {
    const target = event.target;
    if (!target.closest(".sort-dropdown")) {
      this.showSortDropdown = false;
    }
  }
  checkScreenSize() {
    const width = window.innerWidth;
    this.isMobile = width < 768;
    this.isTablet = width >= 768 && width < 1024;
  }
  get dir() {
    return this.languageService.currentLanguage === "ar" ? "rtl" : "ltr";
  }
  ngOnInit() {
    this.setupLanguageReactiveData();
    this.loadProducts();
    this.setupFilters();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  setupLanguageReactiveData() {
    this.loadBrands();
    this.loadCategories();
    this.translate.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.brands = [];
      this.categories = [];
      this.products = [];
      this.loadBrands();
      this.loadCategories();
      this.loadProducts();
    });
  }
  loadBrands() {
    this.brandService.getAll().pipe(takeUntil(this.destroy$)).subscribe({
      next: (brands) => this.brands = brands,
      error: (err) => console.error("Failed to load brands", err)
    });
  }
  loadCategories() {
    this.categoryService.getDropdown().pipe(takeUntil(this.destroy$)).subscribe({
      next: (categories) => this.categories = categories,
      error: (err) => console.error("Failed to load categories", err)
    });
  }
  loadProducts() {
    this.isLoading = true;
    this.clearSelection();
    let isActive;
    if (this.activeFilter === "active")
      isActive = true;
    else if (this.activeFilter === "inactive")
      isActive = false;
    this.productService.getPaged(this.pageNumber, this.pageSize, this.searchControl.value || void 0, this.brandControl.value || void 0, this.categoryControl.value || void 0, isActive, void 0, void 0, this.sortField, this.sortDescending).pipe(takeUntil(this.destroy$), finalize(() => this.isLoading = false)).subscribe({
      next: (response) => {
        this.products = response.items;
        this.totalCount = response.totalCount;
        this.loadStockData();
      },
      error: (err) => {
        console.error("Failed to load products", err);
        this.notificationService.error(this.translate.instant("COMMON.ERROR"));
        this.products = [];
        this.totalCount = 0;
      }
    });
  }
  setupFilters() {
    this.searchControl.valueChanges.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe(() => {
      this.pageNumber = 1;
      this.loadProducts();
    });
    this.brandControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.pageNumber = 1;
      this.loadProducts();
    });
    this.categoryControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.pageNumber = 1;
      this.loadProducts();
    });
  }
  // Filter chips
  setFilter(filter) {
    this.activeFilter = filter;
    this.pageNumber = 1;
    this.loadProducts();
  }
  // Sort
  toggleSortDropdown() {
    this.showSortDropdown = !this.showSortDropdown;
  }
  setSort(field) {
    if (this.sortField === field) {
      this.sortDescending = !this.sortDescending;
    } else {
      this.sortField = field;
      this.sortDescending = true;
    }
    this.showSortDropdown = false;
    this.loadProducts();
  }
  getSortLabel() {
    const labels = {
      updatedAt: "PRODUCTS.SORT_LAST_UPDATED",
      name: "PRODUCTS.SORT_NAME",
      unitPrice: "PRODUCTS.SORT_PRICE",
      sku: "PRODUCTS.SORT_SKU"
    };
    return this.translate.instant(labels[this.sortField]);
  }
  // Selection
  toggleSelection(productId) {
    if (this.selectedProducts.has(productId)) {
      this.selectedProducts.delete(productId);
    } else {
      this.selectedProducts.add(productId);
    }
    this.updateAllSelectedState();
  }
  toggleSelectAll() {
    if (this.isAllSelected) {
      this.clearSelection();
    } else {
      this.products.forEach((p) => this.selectedProducts.add(p.id));
      this.isAllSelected = true;
    }
  }
  clearSelection() {
    this.selectedProducts.clear();
    this.isAllSelected = false;
  }
  updateAllSelectedState() {
    this.isAllSelected = this.products.length > 0 && this.products.every((p) => this.selectedProducts.has(p.id));
  }
  isSelected(productId) {
    return this.selectedProducts.has(productId);
  }
  get selectedCount() {
    return this.selectedProducts.size;
  }
  // Bulk Actions
  bulkActivate() {
    const ids = Array.from(this.selectedProducts);
    ids.forEach((id) => {
      this.productService.toggleStatus(id, true).pipe(takeUntil(this.destroy$)).subscribe();
    });
    this.notificationService.success(this.translate.instant("PRODUCTS.BULK_ACTIVATED"));
    this.clearSelection();
    setTimeout(() => this.loadProducts(), 500);
  }
  bulkDeactivate() {
    const ids = Array.from(this.selectedProducts);
    ids.forEach((id) => {
      this.productService.toggleStatus(id, false).pipe(takeUntil(this.destroy$)).subscribe();
    });
    this.notificationService.success(this.translate.instant("PRODUCTS.BULK_DEACTIVATED"));
    this.clearSelection();
    setTimeout(() => this.loadProducts(), 500);
  }
  confirmBulkDelete() {
    this.bulkDeleteModalConfig = {
      type: "danger",
      title: this.translate.instant("PRODUCTS.BULK_DELETE_TITLE"),
      message: this.translate.instant("PRODUCTS.BULK_DELETE_MESSAGE", { count: this.selectedCount }),
      confirmText: this.translate.instant("PRODUCTS.BULK_DELETE_BUTTON"),
      cancelText: this.translate.instant("COMMON.CANCEL")
    };
    this.showBulkDeleteModal = true;
  }
  onConfirmBulkDelete() {
    const ids = Array.from(this.selectedProducts);
    let completed = 0;
    ids.forEach((id) => {
      this.productService.delete(id).pipe(takeUntil(this.destroy$)).subscribe({
        next: () => {
          completed++;
          if (completed === ids.length) {
            this.notificationService.success(this.translate.instant("PRODUCTS.BULK_DELETED"));
            this.clearSelection();
            this.loadProducts();
          }
        }
      });
    });
    this.showBulkDeleteModal = false;
  }
  closeBulkDeleteModal() {
    this.showBulkDeleteModal = false;
  }
  // Single product actions
  toggleStatus(product) {
    const newStatus = !product.isActive;
    const previousStatus = product.isActive;
    product.isActive = newStatus;
    this.productService.toggleStatus(product.id, newStatus).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.notificationService.success(this.translate.instant("MESSAGES.PRODUCT_STATUS_UPDATED"));
      },
      error: (err) => {
        console.error("Failed to toggle status", err);
        this.notificationService.error(this.translate.instant("COMMON.ERROR"));
        product.isActive = previousStatus;
      }
    });
  }
  deleteProduct(product) {
    this.productToDelete = product;
    this.deleteModalConfig = {
      type: "danger",
      title: this.translate.instant("PRODUCTS.DELETE_TITLE"),
      message: this.translate.instant("PRODUCTS.DELETE_MESSAGE"),
      confirmText: this.translate.instant("PRODUCTS.DELETE_BUTTON"),
      cancelText: this.translate.instant("COMMON.CANCEL"),
      itemName: product.name
    };
    this.showDeleteModal = true;
  }
  onConfirmDelete() {
    if (!this.productToDelete)
      return;
    this.productService.delete(this.productToDelete.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.products = this.products.filter((p) => p.id !== this.productToDelete.id);
        this.totalCount--;
        this.notificationService.success(this.translate.instant("MESSAGES.PRODUCT_DELETED"));
        this.closeDeleteModal();
      },
      error: (err) => {
        console.error("Failed to delete product", err);
        this.notificationService.error(this.translate.instant("COMMON.ERROR"));
        this.closeDeleteModal();
      }
    });
  }
  closeDeleteModal() {
    this.showDeleteModal = false;
    this.productToDelete = null;
  }
  // Pagination
  onPageChange(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.pageNumber = page;
    this.loadProducts();
  }
  onPageSizeChange(size) {
    this.pageSize = size;
    this.pageNumber = 1;
    this.loadProducts();
  }
  get totalPages() {
    return Math.ceil(this.totalCount / this.pageSize);
  }
  get pagesArray() {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, this.pageNumber - Math.floor(maxVisible / 2));
    let end = Math.min(this.totalPages, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  get showingFrom() {
    return (this.pageNumber - 1) * this.pageSize + 1;
  }
  get showingTo() {
    return Math.min(this.pageNumber * this.pageSize, this.totalCount);
  }
  // Helpers
  formatPrice(price) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(price);
  }
  // Load stock data for all visible products
  loadStockData() {
    if (this.products.length === 0)
      return;
    this.isLoadingStock = true;
    this.inventoryService.getAllStock().pipe(catchError((err) => {
      console.error("Failed to load stock data", err);
      return of([]);
    }), takeUntil(this.destroy$)).subscribe((stocks) => {
      this.stockMap.clear();
      stocks.forEach((stock) => {
        const existing = this.stockMap.get(stock.productId);
        if (existing) {
          this.stockMap.set(stock.productId, __spreadProps(__spreadValues({}, existing), {
            quantityOnHand: existing.quantityOnHand + stock.quantityOnHand,
            quantityReserved: existing.quantityReserved + stock.quantityReserved,
            quantityAvailable: existing.quantityAvailable + stock.quantityAvailable,
            isLowStock: existing.isLowStock || stock.isLowStock
          }));
        } else {
          this.stockMap.set(stock.productId, stock);
        }
      });
      this.isLoadingStock = false;
    });
  }
  getStockStatus(product) {
    const stock = this.stockMap.get(product.id);
    if (!stock)
      return "out-of-stock";
    if (stock.quantityAvailable <= 0)
      return "out-of-stock";
    if (stock.isLowStock)
      return "low-stock";
    return "in-stock";
  }
  getStockQty(product) {
    const stock = this.stockMap.get(product.id);
    return stock?.quantityAvailable ?? 0;
  }
  getStockBadgeClass(status) {
    switch (status) {
      case "in-stock":
        return "bg-emerald-100 text-emerald-700";
      case "low-stock":
        return "bg-amber-100 text-amber-700";
      case "out-of-stock":
        return "bg-red-100 text-red-700";
    }
  }
  getStatusBadgeClass(isActive) {
    return isActive ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600";
  }
  formatDate(date) {
    if (!date)
      return "-";
    const d = new Date(date);
    const now = /* @__PURE__ */ new Date();
    const diff = now.getTime() - d.getTime();
    const days = Math.floor(diff / (1e3 * 60 * 60 * 24));
    if (days === 0)
      return this.translate.instant("COMMON.TODAY");
    if (days === 1)
      return this.translate.instant("COMMON.YESTERDAY");
    if (days < 7)
      return this.translate.instant("COMMON.DAYS_AGO", { days });
    return d.toLocaleDateString();
  }
  static \u0275fac = function ProductListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductListComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(BrandService), \u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(LanguageService), \u0275\u0275directiveInject(InventoryService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductListComponent, selectors: [["app-product-list"]], hostBindings: function ProductListComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function ProductListComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, \u0275\u0275resolveWindow)("click", function ProductListComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 119, vars: 99, consts: [[1, "min-h-full", "bg-slate-50"], [1, "hidden", "md:block", "p-6", "lg:p-8", "space-y-6"], [1, "flex", "items-center", "gap-2", "text-sm", "text-slate-500"], ["routerLink", "/dashboard", 1, "hover:text-indigo-600", "transition-colors"], [1, "fas", "fa-chevron-right", "text-xs", "text-slate-300", "rtl:rotate-180"], [1, "text-slate-400"], [1, "text-slate-800", "font-medium"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-start", "lg:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-slate-800"], [1, "mt-1", "text-sm", "text-slate-500"], [1, "flex", "items-center", "gap-3"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-white", "border", "border-slate-200", "text-slate-700", "font-medium", "rounded-xl", "hover:bg-slate-50", "hover:border-slate-300", "transition-all", "duration-200"], [1, "fas", "fa-file-import", "text-sm"], [1, "fas", "fa-download", "text-sm"], ["routerLink", "/products/add", 1, "inline-flex", "items-center", "gap-2", "px-5", "py-2.5", "bg-indigo-600", "text-white", "font-semibold", "rounded-xl", "hover:bg-indigo-700", "transition-all", "duration-200", "shadow-lg", "shadow-indigo-200", "hover:-translate-y-0.5", "active:scale-[0.98]"], [1, "fas", "fa-plus"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-sm", "p-4"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-center", "gap-4"], [1, "relative", "flex-1", "max-w-md"], [1, "fas", "fa-search", "absolute", "start-4", "top-1/2", "-translate-y-1/2", "text-slate-400"], ["type", "text", 1, "w-full", "ps-11", "pe-4", "py-2.5", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "focus:bg-white", "transition-all", "duration-200", 3, "formControl", "placeholder"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-slate-50", "border", "border-slate-200", "text-slate-700", "font-medium", "rounded-xl", "hover:bg-slate-100", "transition-colors"], [1, "fas", "fa-filter", "text-sm"], [1, "px-1.5", "py-0.5", "bg-indigo-100", "text-indigo-700", "text-xs", "font-semibold", "rounded-md"], [1, "relative", "sort-dropdown"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-white", "border", "border-slate-200", "text-slate-700", "font-medium", "rounded-xl", "hover:bg-slate-50", "transition-colors", 3, "click"], [1, "text-slate-500", "text-sm"], [1, "text-sm", "font-semibold"], [1, "fas", "fa-chevron-down", "text-xs", "text-slate-400", "transition-transform", "duration-200"], ["class", "absolute end-0 top-full mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg z-20 py-1 animate-fade-in", 4, "ngIf"], [1, "flex", "items-center", "gap-2", "mt-4", "pt-4", "border-t", "border-slate-100"], [1, "text-xs", "font-medium", "text-slate-500", "uppercase", "tracking-wide"], [1, "px-3", "py-1.5", "rounded-lg", "text-sm", "font-medium", "transition-all", "duration-200", 3, "click", "ngClass"], [1, "fas", "fa-exclamation-triangle", "text-xs", "me-1"], [1, "fas", "fa-times-circle", "text-xs", "me-1"], ["class", "ms-auto text-sm text-slate-500 hover:text-slate-700 transition-colors", 3, "click", 4, "ngIf"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-sm", "overflow-hidden"], ["class", "divide-y divide-slate-100", 4, "ngIf"], ["class", "py-16 text-center", 4, "ngIf"], ["class", "w-full", 4, "ngIf"], ["class", "px-4 py-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-slate-50", 4, "ngIf"], ["class", "fixed bottom-6 start-1/2 -translate-x-1/2 bg-slate-800 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-4 z-50 animate-slide-up", 4, "ngIf"], [1, "md:hidden", "min-h-screen", "flex", "flex-col", "bg-slate-50"], [1, "flex-1", "overflow-y-auto", "p-4", "pb-40", "space-y-4"], [1, "text-xl", "font-bold", "text-slate-800"], [1, "text-sm", "text-slate-500"], [1, "relative"], ["type", "text", 1, "w-full", "ps-11", "pe-4", "py-3", "bg-white", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", 3, "formControl", "placeholder"], [1, "flex", "items-center", "gap-2", "overflow-x-auto", "pb-2", "-mx-4", "px-4", "scrollbar-hide"], [1, "flex-shrink-0", "px-4", "py-2", "rounded-full", "text-sm", "font-medium", "transition-all", 3, "click", "ngClass"], [1, "flex-shrink-0", "px-4", "py-2", "rounded-full", "text-sm", "font-medium", "transition-all", "flex", "items-center", "gap-1.5", 3, "click", "ngClass"], [1, "fas", "fa-exclamation-triangle", "text-xs"], [1, "fas", "fa-times-circle", "text-xs"], ["class", "space-y-3", 4, "ngIf"], ["class", "py-12 text-center", 4, "ngIf"], ["routerLink", "/products/add", 1, "fixed", "bottom-24", "end-4", "w-14", "h-14", "bg-indigo-600", "text-white", "rounded-2xl", "shadow-lg", "flex", "items-center", "justify-center", "hover:bg-indigo-700", "active:scale-95", "transition-all", "z-40"], [1, "fas", "fa-plus", "text-xl"], [3, "config", "confirmed", "cancelled", 4, "ngIf"], [1, "absolute", "end-0", "top-full", "mt-2", "w-48", "bg-white", "border", "border-slate-200", "rounded-xl", "shadow-lg", "z-20", "py-1", "animate-fade-in"], [1, "w-full", "px-4", "py-2", "text-start", "text-sm", "hover:bg-slate-50", "transition-colors", 3, "click"], [1, "ms-auto", "text-sm", "text-slate-500", "hover:text-slate-700", "transition-colors", 3, "click"], [1, "divide-y", "divide-slate-100"], ["class", "p-4 flex items-center gap-4 animate-pulse", 4, "ngFor", "ngForOf"], [1, "p-4", "flex", "items-center", "gap-4", "animate-pulse"], [1, "w-5", "h-5", "bg-slate-200", "rounded"], [1, "w-12", "h-12", "bg-slate-200", "rounded-lg"], [1, "flex-1", "space-y-2"], [1, "h-4", "bg-slate-200", "rounded", "w-1/3"], [1, "h-3", "bg-slate-100", "rounded", "w-1/4"], [1, "h-4", "bg-slate-200", "rounded", "w-20"], [1, "h-4", "bg-slate-200", "rounded", "w-16"], [1, "h-6", "bg-slate-200", "rounded-full", "w-16"], [1, "py-16", "text-center"], [1, "w-20", "h-20", "mx-auto", "mb-4", "bg-slate-100", "rounded-2xl", "flex", "items-center", "justify-center"], [1, "fas", "fa-box-open", "text-3xl", "text-slate-400"], [1, "text-lg", "font-semibold", "text-slate-800", "mb-1"], [1, "text-sm", "text-slate-500", "mb-6", "max-w-sm", "mx-auto"], ["routerLink", "/products/add", 1, "inline-flex", "items-center", "gap-2", "px-5", "py-2.5", "bg-indigo-600", "text-white", "font-semibold", "rounded-xl", "hover:bg-indigo-700", "transition-all"], [1, "w-full"], [1, "bg-slate-50", "border-b", "border-slate-200"], [1, "w-12", "px-4", "py-3"], ["type", "checkbox", 1, "w-4", "h-4", "text-indigo-600", "border-slate-300", "rounded", "focus:ring-indigo-500", 3, "change", "checked"], [1, "px-4", "py-3", "text-start", "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wide"], [1, "px-4", "py-3", "text-start", "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wide", "hidden", "lg:table-cell"], [1, "px-4", "py-3", "text-start", "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wide", "hidden", "xl:table-cell"], [1, "px-4", "py-3", "text-end", "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wide"], ["class", "transition-colors duration-200 hover:bg-slate-50", 3, "bg-indigo-50", 4, "ngFor", "ngForOf"], [1, "transition-colors", "duration-200", "hover:bg-slate-50"], [1, "px-4", "py-3"], [1, "w-10", "h-10", "bg-slate-100", "rounded-lg", "flex", "items-center", "justify-center", "overflow-hidden", "flex-shrink-0"], ["class", "w-full h-full object-cover", 3, "src", "alt", 4, "ngIf"], ["class", "fas fa-box text-slate-400", 4, "ngIf"], [1, "min-w-0"], [1, "font-medium", "text-slate-800", "hover:text-indigo-600", "transition-colors", "truncate", "block", 3, "routerLink"], [1, "text-xs", "text-slate-500", "truncate"], [1, "text-sm", "font-mono", "text-slate-600"], [1, "px-4", "py-3", "hidden", "lg:table-cell"], [1, "text-sm", "text-slate-600"], [1, "px-2", "py-1", "bg-slate-100", "text-slate-600", "text-xs", "font-medium", "rounded-md"], [1, "flex", "items-center", "gap-2"], [1, "text-sm", "font-semibold", "text-slate-700"], [1, "px-2", "py-0.5", "text-xs", "font-medium", "rounded-full", 3, "ngClass"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "text-sm", "font-semibold", "text-slate-800"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "w-1.5", "h-1.5", "rounded-full"], [1, "px-4", "py-3", "hidden", "xl:table-cell"], [1, "px-4", "py-3", "text-end"], [1, "flex", "items-center", "justify-end", "gap-1"], [1, "p-2", "text-slate-400", "hover:text-indigo-600", "hover:bg-indigo-50", "rounded-lg", "transition-colors", 3, "routerLink"], [1, "fas", "fa-eye"], [1, "fas", "fa-pen"], [1, "p-2", "text-slate-400", "hover:text-red-600", "hover:bg-red-50", "rounded-lg", "transition-colors", 3, "click"], [1, "fas", "fa-trash"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "fas", "fa-box", "text-slate-400"], [1, "px-4", "py-3", "border-t", "border-slate-200", "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-3", "bg-slate-50"], [1, "px-3", "py-1.5", "text-sm", "font-medium", "bg-white", "border", "border-slate-200", "rounded-lg", "hover:bg-slate-50", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", 3, "click", "disabled"], [1, "flex", "items-center", "gap-1"], ["class", "w-8 h-8 text-sm font-medium rounded-lg transition-colors", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "w-8", "h-8", "text-sm", "font-medium", "rounded-lg", "transition-colors", 3, "click", "ngClass"], [1, "fixed", "bottom-6", "start-1/2", "-translate-x-1/2", "bg-slate-800", "text-white", "px-6", "py-3", "rounded-2xl", "shadow-2xl", "flex", "items-center", "gap-4", "z-50", "animate-slide-up"], [1, "text-sm", "font-medium"], [1, "bg-indigo-500", "px-2", "py-0.5", "rounded-md", "me-2"], [1, "h-6", "w-px", "bg-slate-600"], [1, "flex", "items-center", "gap-2", "px-3", "py-1.5", "bg-emerald-500", "text-white", "text-sm", "font-medium", "rounded-lg", "hover:bg-emerald-600", "transition-colors", 3, "click"], [1, "fas", "fa-check"], [1, "flex", "items-center", "gap-2", "px-3", "py-1.5", "bg-slate-600", "text-white", "text-sm", "font-medium", "rounded-lg", "hover:bg-slate-500", "transition-colors", 3, "click"], [1, "fas", "fa-archive"], [1, "flex", "items-center", "gap-2", "px-3", "py-1.5", "bg-red-500", "text-white", "text-sm", "font-medium", "rounded-lg", "hover:bg-red-600", "transition-colors", 3, "click"], [1, "p-1.5", "text-slate-400", "hover:text-white", "transition-colors", 3, "click"], [1, "fas", "fa-times"], [1, "space-y-3"], ["class", "bg-white rounded-2xl border border-slate-200 p-4 animate-pulse", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-2xl", "border", "border-slate-200", "p-4", "animate-pulse"], [1, "flex", "gap-3"], [1, "w-16", "h-16", "bg-slate-200", "rounded-xl"], [1, "h-4", "bg-slate-200", "rounded", "w-3/4"], [1, "h-3", "bg-slate-100", "rounded", "w-1/2"], [1, "h-5", "bg-slate-200", "rounded", "w-16"], ["class", "bg-white rounded-2xl border border-slate-200 p-4 hover:shadow-md transition-shadow", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-2xl", "border", "border-slate-200", "p-4", "hover:shadow-md", "transition-shadow"], [1, "w-16", "h-16", "bg-slate-100", "rounded-xl", "flex", "items-center", "justify-center", "overflow-hidden", "flex-shrink-0"], ["class", "fas fa-box text-xl text-slate-400", 4, "ngIf"], [1, "flex-1", "min-w-0"], [1, "flex", "items-start", "justify-between", "gap-2"], [1, "font-semibold", "text-slate-800", "truncate"], [1, "text-indigo-600", "font-bold", "text-sm", "flex-shrink-0"], [1, "text-xs", "text-slate-500", "mt-0.5"], [1, "flex", "items-center", "gap-2", "mt-2"], [1, "px-2", "py-0.5", "bg-slate-100", "text-slate-600", "text-xs", "rounded-md"], [1, "flex", "items-center", "justify-between", "mt-3", "pt-3", "border-t", "border-slate-100"], [1, "inline-flex", "items-center", "gap-1.5", "px-2", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "px-3", "py-1", "text-xs", "font-medium", "text-slate-600", "hover:text-indigo-600", "transition-colors", 3, "routerLink"], [1, "px-3", "py-1", "text-xs", "font-medium", "bg-indigo-600", "text-white", "rounded-lg", "hover:bg-indigo-700", "transition-colors", 3, "routerLink"], [1, "fas", "fa-box", "text-xl", "text-slate-400"], [1, "fas", "fa-check-circle"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-times-circle"], [1, "py-12", "text-center"], [1, "w-16", "h-16", "mx-auto", "mb-4", "bg-slate-100", "rounded-2xl", "flex", "items-center", "justify-center"], [1, "fas", "fa-box-open", "text-2xl", "text-slate-400"], [1, "text-sm", "text-slate-500", "mb-4"], [3, "confirmed", "cancelled", "config"]], template: function ProductListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nav", 2)(3, "a", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "i", 4);
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "i", 4);
      \u0275\u0275elementStart(11, "span", 6);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 7)(15, "div")(16, "h1", 8);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 9);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 10)(23, "button", 11);
      \u0275\u0275element(24, "i", 12);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 11);
      \u0275\u0275element(28, "i", 13);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "a", 14);
      \u0275\u0275element(32, "i", 15);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 16)(36, "div", 17)(37, "div", 18);
      \u0275\u0275element(38, "i", 19)(39, "input", 20);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "button", 21);
      \u0275\u0275element(42, "i", 22);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementStart(45, "span", 23);
      \u0275\u0275text(46, "3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 24)(48, "button", 25);
      \u0275\u0275listener("click", function ProductListComponent_Template_button_click_48_listener() {
        return ctx.toggleSortDropdown();
      });
      \u0275\u0275elementStart(49, "span", 26);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "span", 27);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd();
      \u0275\u0275element(54, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275template(55, ProductListComponent_div_55_Template, 13, 28, "div", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 30)(57, "span", 31);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "button", 32);
      \u0275\u0275listener("click", function ProductListComponent_Template_button_click_60_listener() {
        return ctx.setFilter("all");
      });
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "button", 32);
      \u0275\u0275listener("click", function ProductListComponent_Template_button_click_63_listener() {
        return ctx.setFilter("active");
      });
      \u0275\u0275text(64);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "button", 32);
      \u0275\u0275listener("click", function ProductListComponent_Template_button_click_66_listener() {
        return ctx.setFilter("inactive");
      });
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "button", 32);
      \u0275\u0275listener("click", function ProductListComponent_Template_button_click_69_listener() {
        return ctx.setFilter("low-stock");
      });
      \u0275\u0275element(70, "i", 33);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "button", 32);
      \u0275\u0275listener("click", function ProductListComponent_Template_button_click_73_listener() {
        return ctx.setFilter("out-of-stock");
      });
      \u0275\u0275element(74, "i", 34);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(77, ProductListComponent_button_77_Template, 3, 3, "button", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 36);
      \u0275\u0275template(79, ProductListComponent_div_79_Template, 2, 2, "div", 37)(80, ProductListComponent_div_80_Template, 13, 9, "div", 38)(81, ProductListComponent_table_81_Template, 34, 29, "table", 39)(82, ProductListComponent_div_82_Template, 16, 24, "div", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275template(83, ProductListComponent_div_83_Template, 21, 13, "div", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 42)(85, "div", 43)(86, "div")(87, "h2", 44);
      \u0275\u0275text(88);
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "p", 45);
      \u0275\u0275text(91);
      \u0275\u0275pipe(92, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 46);
      \u0275\u0275element(94, "i", 19)(95, "input", 47);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 48)(98, "button", 49);
      \u0275\u0275listener("click", function ProductListComponent_Template_button_click_98_listener() {
        return ctx.setFilter("all");
      });
      \u0275\u0275text(99);
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "button", 50);
      \u0275\u0275listener("click", function ProductListComponent_Template_button_click_101_listener() {
        return ctx.setFilter("low-stock");
      });
      \u0275\u0275element(102, "i", 51);
      \u0275\u0275text(103);
      \u0275\u0275pipe(104, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "button", 50);
      \u0275\u0275listener("click", function ProductListComponent_Template_button_click_105_listener() {
        return ctx.setFilter("out-of-stock");
      });
      \u0275\u0275element(106, "i", 52);
      \u0275\u0275text(107);
      \u0275\u0275pipe(108, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "button", 49);
      \u0275\u0275listener("click", function ProductListComponent_Template_button_click_109_listener() {
        return ctx.setFilter("active");
      });
      \u0275\u0275text(110);
      \u0275\u0275pipe(111, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(112, ProductListComponent_div_112_Template, 2, 2, "div", 53)(113, ProductListComponent_div_113_Template, 2, 1, "div", 53)(114, ProductListComponent_div_114_Template, 9, 6, "div", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "a", 55);
      \u0275\u0275element(116, "i", 56);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(117, ProductListComponent_app_confirm_modal_117_Template, 1, 1, "app-confirm-modal", 57)(118, ProductListComponent_app_confirm_modal_118_Template, 1, 1, "app-confirm-modal", 57);
    }
    if (rf & 2) {
      \u0275\u0275attribute("dir", ctx.dir);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 51, "COMMON.HOME"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 53, "SIDEBAR.INVENTORY"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 55, "PRODUCTS.TITLE"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 57, "PRODUCTS.MANAGEMENT_TITLE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 59, "PRODUCTS.MANAGEMENT_SUBTITLE"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 61, "COMMON.IMPORT"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 63, "COMMON.EXPORT"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 65, "PRODUCTS.CREATE_PRODUCT"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275property("formControl", ctx.searchControl)("placeholder", \u0275\u0275pipeBind1(40, 67, "PRODUCTS.SEARCH_PLACEHOLDER"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 69, "COMMON.FILTER"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(51, 71, "PRODUCTS.SORT_BY"), ":");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getSortLabel());
      \u0275\u0275advance();
      \u0275\u0275classProp("rotate-180", ctx.showSortDropdown);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSortDropdown);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(59, 73, "PRODUCTS.ACTIVE_FILTERS"), ":");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.activeFilter === "all" ? "bg-indigo-600 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(62, 75, "PRODUCTS.FILTER_ALL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.activeFilter === "active" ? "bg-emerald-600 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(65, 77, "PRODUCTS.FILTER_ACTIVE"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.activeFilter === "inactive" ? "bg-slate-600 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(68, 79, "PRODUCTS.FILTER_INACTIVE"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.activeFilter === "low-stock" ? "bg-amber-500 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(72, 81, "PRODUCTS.FILTER_LOW_STOCK"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.activeFilter === "out-of-stock" ? "bg-red-500 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(76, 83, "PRODUCTS.FILTER_OUT_OF_STOCK"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.activeFilter !== "all");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.products.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.products.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.products.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedCount > 0);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 85, "PRODUCTS.LIST_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(92, 87, "PRODUCTS.LIST_SUBTITLE"));
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.searchControl)("placeholder", \u0275\u0275pipeBind1(96, 89, "PRODUCTS.MOBILE_SEARCH_PLACEHOLDER"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", ctx.activeFilter === "all" ? "bg-indigo-600 text-white" : "bg-white border border-slate-200 text-slate-600");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(100, 91, "PRODUCTS.FILTER_ALL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.activeFilter === "low-stock" ? "bg-amber-500 text-white" : "bg-white border border-slate-200 text-slate-600");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(104, 93, "PRODUCTS.FILTER_LOW_STOCK"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.activeFilter === "out-of-stock" ? "bg-red-500 text-white" : "bg-white border border-slate-200 text-slate-600");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(108, 95, "PRODUCTS.FILTER_OUT_OF_STOCK"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.activeFilter === "active" ? "bg-emerald-500 text-white" : "bg-white border border-slate-200 text-slate-600");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(111, 97, "PRODUCTS.FILTER_ACTIVE"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.products.length === 0);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showDeleteModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showBulkDeleteModal);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, RouterModule, RouterLink, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlDirective, TranslateModule, TranslatePipe, ConfirmModalComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductListComponent, { className: "ProductListComponent", filePath: "src\\app\\features\\products\\pages\\product-list\\product-list.component.ts", lineNumber: 33 });
})();

// src/app/features/products/pages/product-form/product-form.component.ts
function ProductFormComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275element(2, "div", 28);
    \u0275\u0275elementStart(3, "p", 29);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "COMMON.LOADING"));
  }
}
function ProductFormComponent_form_29_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 81);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "VALIDATION.REQUIRED"), " ");
  }
}
function ProductFormComponent_form_29_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const brand_r3 = ctx.$implicit;
    \u0275\u0275property("value", brand_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", brand_r3.name, " ");
  }
}
function ProductFormComponent_form_29_p_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 81);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "VALIDATION.REQUIRED"), " ");
  }
}
function ProductFormComponent_form_29_option_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    \u0275\u0275property("value", category_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r4.name);
  }
}
function ProductFormComponent_form_29_p_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 81);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "VALIDATION.REQUIRED"), " ");
  }
}
function ProductFormComponent_form_29_div_59_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 81);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "VALIDATION.REQUIRED"), " ");
  }
}
function ProductFormComponent_form_29_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div")(2, "label", 39);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span", 40);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "input", 84);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275template(9, ProductFormComponent_form_29_div_59_p_9_Template, 3, 3, "p", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "label", 39);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 85);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "label", 39);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "textarea", 86);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementStart(22, "p", 87);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 11, "PRODUCTS.NAME"), " (English) ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-300", ctx_r1.hasError("nameEn"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 13, "PRODUCTS.NAME_PLACEHOLDER_EN"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getError("nameEn", "required"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 15, "PRODUCTS.SHORT_DESCRIPTION"), " (English) ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 17, "PRODUCTS.SHORT_DESCRIPTION_PLACEHOLDER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 19, "PRODUCTS.DESCRIPTION"), " (English) ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 21, "PRODUCTS.DESCRIPTION_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.descriptionLength, " ", \u0275\u0275pipeBind1(24, 23, "BRANDS.CREATE.CHARACTERS"), " ");
  }
}
function ProductFormComponent_form_29_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "div")(2, "label", 39);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 89);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "label", 39);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 90);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "label", 39);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "textarea", 91);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "PRODUCTS.NAME"), " (\u0627\u0644\u0639\u0631\u0628\u064A\u0629) ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 8, "PRODUCTS.NAME_PLACEHOLDER_AR"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 10, "PRODUCTS.SHORT_DESCRIPTION"), " (\u0627\u0644\u0639\u0631\u0628\u064A\u0629) ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 12, "PRODUCTS.SHORT_DESCRIPTION_PLACEHOLDER_AR"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 14, "PRODUCTS.DESCRIPTION"), " (\u0627\u0644\u0639\u0631\u0628\u064A\u0629) ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(18, 16, "PRODUCTS.DESCRIPTION_PLACEHOLDER_AR"));
  }
}
function ProductFormComponent_form_29_p_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 81);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "VALIDATION.REQUIRED"), " ");
  }
}
function ProductFormComponent_form_29_div_134_div_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 101);
    \u0275\u0275listener("click", function ProductFormComponent_form_29_div_134_div_1_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const i_r6 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setPrimaryImage(i_r6));
    });
    \u0275\u0275element(1, "i", 102);
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_form_29_div_134_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 103);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PRODUCTS.PRIMARY"), " ");
  }
}
function ProductFormComponent_form_29_div_134_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275listener("dragstart", function ProductFormComponent_form_29_div_134_div_1_Template_div_dragstart_0_listener($event) {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDragStart($event, i_r6));
    })("dragover", function ProductFormComponent_form_29_div_134_div_1_Template_div_dragover_0_listener($event) {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDragOver($event, i_r6));
    })("dragleave", function ProductFormComponent_form_29_div_134_div_1_Template_div_dragleave_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDragLeave());
    })("drop", function ProductFormComponent_form_29_div_134_div_1_Template_div_drop_0_listener($event) {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDrop($event, i_r6));
    });
    \u0275\u0275element(1, "img", 95);
    \u0275\u0275elementStart(2, "div", 96);
    \u0275\u0275template(3, ProductFormComponent_form_29_div_134_div_1_button_3_Template, 2, 0, "button", 97);
    \u0275\u0275elementStart(4, "button", 98);
    \u0275\u0275listener("click", function ProductFormComponent_form_29_div_134_div_1_Template_button_click_4_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeImage(i_r6));
    });
    \u0275\u0275element(5, "i", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ProductFormComponent_form_29_div_134_div_1_span_6_Template, 3, 3, "span", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const image_r8 = ctx.$implicit;
    \u0275\u0275classProp("ring-2", image_r8.isPrimary)("ring-indigo-500", image_r8.isPrimary);
    \u0275\u0275advance();
    \u0275\u0275property("src", image_r8.preview || image_r8.imageUrl, \u0275\u0275sanitizeUrl)("alt", image_r8.altText);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !image_r8.isPrimary);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", image_r8.isPrimary);
  }
}
function ProductFormComponent_form_29_div_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275template(1, ProductFormComponent_form_29_div_134_div_1_Template, 7, 8, "div", 93);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.images);
  }
}
function ProductFormComponent_form_29_i_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 104);
  }
}
function ProductFormComponent_form_29_i_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 105);
  }
}
function ProductFormComponent_form_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 30);
    \u0275\u0275listener("ngSubmit", function ProductFormComponent_form_29_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 31)(2, "div", 32)(3, "div", 33)(4, "div", 34)(5, "div", 35);
    \u0275\u0275element(6, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2", 37);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 38)(11, "div")(12, "label", 39);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementStart(15, "span", 40);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "input", 41);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275template(19, ProductFormComponent_form_29_p_19_Template, 3, 3, "p", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 43)(21, "div")(22, "label", 39);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementStart(25, "span", 40);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "select", 44)(28, "option", 45);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, ProductFormComponent_form_29_option_31_Template, 2, 2, "option", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, ProductFormComponent_form_29_p_32_Template, 3, 3, "p", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div")(34, "label", 39);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementStart(37, "span", 40);
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "select", 47)(40, "option", 45);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, ProductFormComponent_form_29_option_43_Template, 2, 2, "option", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, ProductFormComponent_form_29_p_44_Template, 3, 3, "p", 42);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 33)(46, "div", 48)(47, "div", 49)(48, "div", 50);
    \u0275\u0275element(49, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "h2", 37);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 52)(54, "button", 53);
    \u0275\u0275listener("click", function ProductFormComponent_form_29_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveTab("en"));
    });
    \u0275\u0275text(55, " \u{1F1FA}\u{1F1F8} English ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 53);
    \u0275\u0275listener("click", function ProductFormComponent_form_29_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveTab("ar"));
    });
    \u0275\u0275text(57, " \u{1F1F8}\u{1F1E6} \u0627\u0644\u0639\u0631\u0628\u064A\u0629 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 38);
    \u0275\u0275template(59, ProductFormComponent_form_29_div_59_Template, 25, 25, "div", 54)(60, ProductFormComponent_form_29_div_60_Template, 19, 18, "div", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 33)(62, "div", 34)(63, "div", 56);
    \u0275\u0275element(64, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "h2", 37);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 58)(69, "div", 43)(70, "div")(71, "label", 39);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementStart(74, "span", 40);
    \u0275\u0275text(75, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 59)(77, "span", 60);
    \u0275\u0275text(78, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(79, "input", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275template(80, ProductFormComponent_form_29_p_80_Template, 3, 3, "p", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div")(82, "label", 39);
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementStart(85, "span", 62);
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 59)(89, "span", 60);
    \u0275\u0275text(90, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(91, "input", 63);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(92, "div", 64)(93, "div", 33)(94, "div", 65)(95, "h2", 37);
    \u0275\u0275text(96);
    \u0275\u0275pipe(97, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 38)(99, "div", 66)(100, "div")(101, "p", 67);
    \u0275\u0275text(102);
    \u0275\u0275pipe(103, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "p", 68);
    \u0275\u0275text(105);
    \u0275\u0275pipe(106, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "button", 69);
    \u0275\u0275listener("click", function ProductFormComponent_form_29_Template_button_click_107_listener() {
      let tmp_2_0;
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.productForm.patchValue({ isActive: !((tmp_2_0 = ctx_r1.productForm.get("isActive")) == null ? null : tmp_2_0.value) }));
    });
    \u0275\u0275element(108, "span", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div", 66)(110, "div")(111, "p", 67);
    \u0275\u0275text(112);
    \u0275\u0275pipe(113, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "p", 68);
    \u0275\u0275text(115);
    \u0275\u0275pipe(116, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "button", 69);
    \u0275\u0275listener("click", function ProductFormComponent_form_29_Template_button_click_117_listener() {
      let tmp_2_0;
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.productForm.patchValue({ isFeatured: !((tmp_2_0 = ctx_r1.productForm.get("isFeatured")) == null ? null : tmp_2_0.value) }));
    });
    \u0275\u0275element(118, "span", 70);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(119, "div", 33)(120, "div", 65)(121, "h2", 37);
    \u0275\u0275text(122);
    \u0275\u0275pipe(123, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(124, "div", 58)(125, "div", 71);
    \u0275\u0275listener("click", function ProductFormComponent_form_29_Template_div_click_125_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDropzoneClick());
    })("dragover", function ProductFormComponent_form_29_Template_div_dragover_125_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDropzoneDragOver($event));
    })("dragleave", function ProductFormComponent_form_29_Template_div_dragleave_125_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDropzoneDragLeave($event));
    })("drop", function ProductFormComponent_form_29_Template_div_drop_125_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDropzoneDrop($event));
    });
    \u0275\u0275elementStart(126, "div", 72);
    \u0275\u0275element(127, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "p", 74);
    \u0275\u0275text(129);
    \u0275\u0275pipe(130, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "p", 75);
    \u0275\u0275text(132);
    \u0275\u0275pipe(133, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(134, ProductFormComponent_form_29_div_134_Template, 2, 1, "div", 76);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(135, "div", 77)(136, "button", 78);
    \u0275\u0275listener("click", function ProductFormComponent_form_29_Template_button_click_136_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(137);
    \u0275\u0275pipe(138, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "button", 79);
    \u0275\u0275listener("click", function ProductFormComponent_form_29_Template_button_click_139_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit(true));
    });
    \u0275\u0275text(140);
    \u0275\u0275pipe(141, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "button", 80);
    \u0275\u0275template(143, ProductFormComponent_form_29_i_143_Template, 1, 0, "i", 24)(144, ProductFormComponent_form_29_i_144_Template, 1, 0, "i", 25);
    \u0275\u0275text(145);
    \u0275\u0275pipe(146, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_33_0;
    let tmp_34_0;
    let tmp_37_0;
    let tmp_38_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.productForm);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 54, "PRODUCTS.BASIC_INFO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 56, "PRODUCTS.SKU"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-300", ctx_r1.hasError("sku"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(18, 58, "PRODUCTS.SKU_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getError("sku", "required"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 60, "PRODUCTS.BRAND"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-300", ctx_r1.hasError("brandId"));
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 62, "PRODUCTS.SELECT_BRAND"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.brands);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getError("brandId", "required"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 64, "PRODUCTS.CATEGORY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-300", ctx_r1.hasError("categoryId"));
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 66, "PRODUCTS.SELECT_CATEGORY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getError("categoryId", "required"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 68, "PRODUCTS.TRANSLATIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.activeTab === "en" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-600 hover:text-slate-800");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.activeTab === "ar" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-600 hover:text-slate-800");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "en");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "ar");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 70, "PRODUCTS.CREATE.PRICING"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(73, 72, "PRODUCTS.CREATE.BASE_PRICE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275classProp("border-red-300", ctx_r1.hasError("unitPrice"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getError("unitPrice", "required"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(84, 74, "PRODUCTS.CREATE.COST_PRICE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(87, 76, "COMMON.OPTIONAL"), ")");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(97, 78, "PRODUCTS.CREATE.STATUS_VISIBILITY"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(103, 80, "PRODUCTS.ACTIVE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(106, 82, "PRODUCTS.ACTIVE_DESC"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ((tmp_33_0 = ctx_r1.productForm.get("isActive")) == null ? null : tmp_33_0.value) ? "bg-indigo-600" : "bg-slate-300");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ((tmp_34_0 = ctx_r1.productForm.get("isActive")) == null ? null : tmp_34_0.value) ? "translate-x-5 rtl:-translate-x-5" : "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(113, 84, "PRODUCTS.FEATURED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(116, 86, "PRODUCTS.FEATURED_DESC"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ((tmp_37_0 = ctx_r1.productForm.get("isFeatured")) == null ? null : tmp_37_0.value) ? "bg-indigo-600" : "bg-slate-300");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ((tmp_38_0 = ctx_r1.productForm.get("isFeatured")) == null ? null : tmp_38_0.value) ? "translate-x-5 rtl:-translate-x-5" : "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(123, 88, "PRODUCTS.CREATE.PRODUCT_MEDIA"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.dragOverDropzone ? "border-indigo-400 bg-indigo-50" : "border-slate-200 hover:border-indigo-300 hover:bg-slate-50");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(130, 90, "PRODUCTS.CREATE.CLICK_UPLOAD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(133, 92, "PRODUCTS.CREATE.ACCEPTED_FORMATS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.images.length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(138, 94, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(141, 96, "PRODUCTS.CREATE.SAVE_NEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(146, 98, "PRODUCTS.CREATE.SAVE_PRODUCT"), " ");
  }
}
function ProductFormComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "div", 106);
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_form_41_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275element(1, "img", 95);
    \u0275\u0275elementStart(2, "button", 135);
    \u0275\u0275listener("click", function ProductFormComponent_form_41_div_19_Template_button_click_2_listener() {
      const i_r11 = \u0275\u0275restoreView(_r10).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeImage(i_r11));
    });
    \u0275\u0275element(3, "i", 136);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const image_r12 = ctx.$implicit;
    \u0275\u0275classProp("ring-2", image_r12.isPrimary)("ring-indigo-500", image_r12.isPrimary);
    \u0275\u0275advance();
    \u0275\u0275property("src", image_r12.preview || image_r12.imageUrl, \u0275\u0275sanitizeUrl)("alt", image_r12.altText);
  }
}
function ProductFormComponent_form_41_option_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const brand_r13 = ctx.$implicit;
    \u0275\u0275property("value", brand_r13.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(brand_r13.name);
  }
}
function ProductFormComponent_form_41_option_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r14 = ctx.$implicit;
    \u0275\u0275property("value", category_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", category_r14.name, " ");
  }
}
function ProductFormComponent_form_41_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137)(1, "div")(2, "label", 119);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span", 40);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "input", 138);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "label", 119);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 139);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "label", 119);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "textarea", 140);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, "PRODUCTS.NAME"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-300", ctx_r1.hasError("nameEn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, "PRODUCTS.SHORT_DESCRIPTION"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 9, "PRODUCTS.DESCRIPTION"));
  }
}
function ProductFormComponent_form_41_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141)(1, "div")(2, "label", 119);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "label", 119);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 143);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "label", 119);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "textarea", 144);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "PRODUCTS.NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, "PRODUCTS.SHORT_DESCRIPTION"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 7, "PRODUCTS.DESCRIPTION"));
  }
}
function ProductFormComponent_form_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 107);
    \u0275\u0275listener("ngSubmit", function ProductFormComponent_form_41_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 108)(2, "div", 109)(3, "h3", 37);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 75);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 110);
    \u0275\u0275listener("click", function ProductFormComponent_form_41_Template_div_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDropzoneClick());
    });
    \u0275\u0275elementStart(10, "div", 111);
    \u0275\u0275element(11, "i", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 113);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 75);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 114);
    \u0275\u0275template(19, ProductFormComponent_form_41_div_19_Template, 4, 6, "div", 115);
    \u0275\u0275elementStart(20, "button", 116);
    \u0275\u0275listener("click", function ProductFormComponent_form_41_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDropzoneClick());
    });
    \u0275\u0275element(21, "i", 117);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 118)(23, "h3", 37);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "label", 119);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementStart(30, "span", 40);
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(32, "input", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 121)(34, "div")(35, "label", 119);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementStart(38, "span", 40);
    \u0275\u0275text(39, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "select", 122)(41, "option", 45);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, ProductFormComponent_form_41_option_44_Template, 2, 2, "option", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div")(46, "label", 119);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementStart(49, "span", 40);
    \u0275\u0275text(50, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "select", 123)(52, "option", 45);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(55, ProductFormComponent_form_41_option_55_Template, 2, 2, "option", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 121)(57, "div")(58, "label", 119);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementStart(61, "span", 40);
    \u0275\u0275text(62, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 59)(64, "span", 124);
    \u0275\u0275text(65, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "input", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div")(68, "label", 119);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 59)(72, "span", 124);
    \u0275\u0275text(73, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(74, "input", 126);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(75, "div", 118)(76, "div", 127)(77, "h3", 37);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 128)(81, "button", 129);
    \u0275\u0275listener("click", function ProductFormComponent_form_41_Template_button_click_81_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveTab("en"));
    });
    \u0275\u0275text(82, " \u{1F1FA}\u{1F1F8} English ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "button", 129);
    \u0275\u0275listener("click", function ProductFormComponent_form_41_Template_button_click_83_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveTab("ar"));
    });
    \u0275\u0275text(84, " \u{1F1F8}\u{1F1E6} \u0627\u0644\u0639\u0631\u0628\u064A\u0629 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(85, ProductFormComponent_form_41_div_85_Template, 18, 11, "div", 130)(86, ProductFormComponent_form_41_div_86_Template, 16, 9, "div", 131);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 132)(88, "h3", 37);
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 66)(92, "span", 133);
    \u0275\u0275text(93);
    \u0275\u0275pipe(94, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "button", 69);
    \u0275\u0275listener("click", function ProductFormComponent_form_41_Template_button_click_95_listener() {
      let tmp_2_0;
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.productForm.patchValue({ isActive: !((tmp_2_0 = ctx_r1.productForm.get("isActive")) == null ? null : tmp_2_0.value) }));
    });
    \u0275\u0275element(96, "span", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "div", 66)(98, "span", 133);
    \u0275\u0275text(99);
    \u0275\u0275pipe(100, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "button", 69);
    \u0275\u0275listener("click", function ProductFormComponent_form_41_Template_button_click_101_listener() {
      let tmp_2_0;
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.productForm.patchValue({ isFeatured: !((tmp_2_0 = ctx_r1.productForm.get("isFeatured")) == null ? null : tmp_2_0.value) }));
    });
    \u0275\u0275element(102, "span", 70);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_30_0;
    let tmp_31_0;
    let tmp_33_0;
    let tmp_34_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.productForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 38, "PRODUCTS.CREATE.PRODUCT_MEDIA"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 40, "COMMON.OPTIONAL"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 42, "PRODUCTS.CREATE.MAIN_IMAGE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 44, "PRODUCTS.CREATE.TAP_UPLOAD"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.images);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 46, "PRODUCTS.BASIC_INFO"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(29, 48, "PRODUCTS.SKU"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-300", ctx_r1.hasError("sku"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(37, 50, "PRODUCTS.BRAND"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-300", ctx_r1.hasError("brandId"));
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 52, "PRODUCTS.SELECT_BRAND"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.brands);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(48, 54, "PRODUCTS.CATEGORY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-300", ctx_r1.hasError("categoryId"));
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 56, "PRODUCTS.SELECT_CATEGORY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(60, 58, "PRODUCTS.PRICE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275classProp("border-red-300", ctx_r1.hasError("unitPrice"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 60, "PRODUCTS.CREATE.COST_PRICE"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 62, "PRODUCTS.TRANSLATIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.activeTab === "en" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-600");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.activeTab === "ar" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-600");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "en");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "ar");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 64, "PRODUCTS.CREATE.STATUS_VISIBILITY"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(94, 66, "PRODUCTS.ACTIVE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ((tmp_30_0 = ctx_r1.productForm.get("isActive")) == null ? null : tmp_30_0.value) ? "bg-indigo-600" : "bg-slate-300");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ((tmp_31_0 = ctx_r1.productForm.get("isActive")) == null ? null : tmp_31_0.value) ? "translate-x-5 rtl:-translate-x-5" : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(100, 68, "PRODUCTS.FEATURED"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ((tmp_33_0 = ctx_r1.productForm.get("isFeatured")) == null ? null : tmp_33_0.value) ? "bg-indigo-600" : "bg-slate-300");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ((tmp_34_0 = ctx_r1.productForm.get("isFeatured")) == null ? null : tmp_34_0.value) ? "translate-x-5 rtl:-translate-x-5" : "");
  }
}
function ProductFormComponent_i_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 104);
  }
}
function ProductFormComponent_i_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 105);
  }
}
var ProductFormComponent = class _ProductFormComponent {
  fb;
  route;
  router;
  translate;
  productService;
  brandService;
  categoryService;
  notificationService;
  languageService;
  destroy$ = new Subject();
  productForm;
  isEditMode = false;
  productId;
  isLoading = false;
  isSaving = false;
  activeTab = "en";
  brands = [];
  categories = [];
  images = [];
  dragOverDropzone = false;
  dragOverIndex = null;
  // Responsive
  isMobile = false;
  isTablet = false;
  constructor(fb, route, router, translate, productService, brandService, categoryService, notificationService, languageService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.translate = translate;
    this.productService = productService;
    this.brandService = brandService;
    this.categoryService = categoryService;
    this.notificationService = notificationService;
    this.languageService = languageService;
    this.checkScreenSize();
  }
  onResize() {
    this.checkScreenSize();
  }
  checkScreenSize() {
    const width = window.innerWidth;
    this.isMobile = width < 768;
    this.isTablet = width >= 768 && width < 1024;
  }
  get dir() {
    return this.languageService.currentLanguage === "ar" ? "rtl" : "ltr";
  }
  ngOnInit() {
    this.initForm();
    this.loadBrands();
    this.loadCategories();
    this.checkEditMode();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  initForm() {
    this.productForm = this.fb.group({
      // Database fields only
      sku: ["", [Validators.required, Validators.maxLength(50)]],
      brandId: [null, Validators.required],
      categoryId: [null, Validators.required],
      unitPrice: [null, [Validators.required, Validators.min(0.01)]],
      costPrice: [null, [Validators.min(0)]],
      isActive: [true],
      isFeatured: [false],
      // English Translation
      nameEn: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      shortDescriptionEn: ["", Validators.maxLength(500)],
      descriptionEn: [""],
      // Arabic Translation
      nameAr: ["", [Validators.minLength(2), Validators.maxLength(200)]],
      shortDescriptionAr: ["", Validators.maxLength(500)],
      descriptionAr: [""]
    });
  }
  loadBrands() {
    this.brandService.getAll().pipe(takeUntil(this.destroy$)).subscribe({
      next: (brands) => this.brands = brands,
      error: (err) => console.error("Failed to load brands", err)
    });
  }
  loadCategories() {
    this.categoryService.getDropdown().pipe(takeUntil(this.destroy$)).subscribe({
      next: (categories) => this.categories = categories,
      error: (err) => console.error("Failed to load categories", err)
    });
  }
  checkEditMode() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.isEditMode = true;
      this.productId = +id;
      this.loadProduct(this.productId);
    }
  }
  loadProduct(id) {
    this.isLoading = true;
    this.productService.getById(id).pipe(takeUntil(this.destroy$), finalize(() => this.isLoading = false)).subscribe({
      next: (product) => {
        this.populateForm(product);
      },
      error: (err) => {
        console.error("Failed to load product", err);
        this.router.navigate(["/products"]);
      }
    });
  }
  populateForm(product) {
    this.productForm.patchValue({
      sku: product.sku,
      brandId: product.brandId,
      categoryId: product.categoryId,
      unitPrice: product.unitPrice,
      costPrice: product.costPrice,
      isActive: product.isActive,
      isFeatured: product.isFeatured,
      nameEn: product.name,
      shortDescriptionEn: product.shortDescription,
      descriptionEn: product.description
    });
    if (product.primaryImageUrl) {
      this.images = [{
        imageUrl: product.primaryImageUrl,
        altText: product.name,
        displayOrder: 0,
        isPrimary: true
      }];
    }
  }
  // Image handling
  onDropzoneClick() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = true;
    input.onchange = (e) => this.onFileSelect(e);
    input.click();
  }
  onFileSelect(event) {
    const input = event.target;
    if (input.files) {
      this.processFiles(Array.from(input.files));
    }
  }
  onDropzoneDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    this.dragOverDropzone = true;
  }
  onDropzoneDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    this.dragOverDropzone = false;
  }
  onDropzoneDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.dragOverDropzone = false;
    const files = event.dataTransfer?.files;
    if (files) {
      this.processFiles(Array.from(files));
    }
  }
  processFiles(files) {
    files.forEach((file) => {
      if (!file.type.startsWith("image/"))
        return;
      const reader = new FileReader();
      reader.onload = () => {
        this.images.push({
          imageUrl: "",
          altText: file.name,
          displayOrder: this.images.length,
          isPrimary: this.images.length === 0,
          file,
          preview: reader.result
        });
      };
      reader.readAsDataURL(file);
    });
  }
  setPrimaryImage(index) {
    this.images.forEach((img, i) => img.isPrimary = i === index);
  }
  removeImage(index) {
    const wasPrimary = this.images[index].isPrimary;
    this.images.splice(index, 1);
    if (wasPrimary && this.images.length > 0) {
      this.images[0].isPrimary = true;
    }
    this.images.forEach((img, i) => img.displayOrder = i);
  }
  onDragStart(event, index) {
    event.dataTransfer?.setData("text/plain", index.toString());
  }
  onDragOver(event, index) {
    event.preventDefault();
    this.dragOverIndex = index;
  }
  onDragLeave() {
    this.dragOverIndex = null;
  }
  onDrop(event, index) {
    event.preventDefault();
    const fromIndex = parseInt(event.dataTransfer?.getData("text/plain") || "0", 10);
    if (fromIndex !== index) {
      const item = this.images.splice(fromIndex, 1)[0];
      this.images.splice(index, 0, item);
      this.images.forEach((img, i) => img.displayOrder = i);
    }
    this.dragOverIndex = null;
  }
  // Form submission
  onSubmit(addAnother = false) {
    if (this.productForm.invalid) {
      this.markFormGroupTouched();
      return;
    }
    this.isSaving = true;
    if (this.isEditMode && this.productId) {
      const request = this.prepareUpdateRequest();
      this.productService.update(this.productId, request).pipe(takeUntil(this.destroy$), finalize(() => this.isSaving = false)).subscribe({
        next: () => {
          this.notificationService.success(this.translate.instant("MESSAGES.PRODUCT_UPDATED"));
          this.router.navigate(["/products"]);
        },
        error: (err) => {
          console.error("Failed to update product", err);
          this.notificationService.error(this.translate.instant("COMMON.ERROR"));
        }
      });
    } else {
      const request = this.prepareCreateRequest();
      this.productService.create(request).pipe(takeUntil(this.destroy$), finalize(() => this.isSaving = false)).subscribe({
        next: () => {
          this.notificationService.success(this.translate.instant("MESSAGES.PRODUCT_CREATED"));
          if (addAnother) {
            this.resetForm();
          } else {
            this.router.navigate(["/products"]);
          }
        },
        error: (err) => {
          console.error("Failed to create product", err);
          this.notificationService.error(this.translate.instant("COMMON.ERROR"));
        }
      });
    }
  }
  resetForm() {
    this.productForm.reset({
      isActive: true,
      isFeatured: false
    });
    this.images = [];
  }
  prepareCreateRequest() {
    const value = this.productForm.value;
    return {
      sku: value.sku,
      slug: this.generateSlug(value.nameEn),
      unitPrice: value.unitPrice,
      costPrice: value.costPrice,
      brandId: value.brandId,
      categoryId: value.categoryId,
      isFeatured: value.isFeatured,
      isActive: value.isActive,
      translations: this.buildTranslations(value),
      images: this.buildImages()
    };
  }
  prepareUpdateRequest() {
    const value = this.productForm.value;
    return {
      id: this.productId,
      sku: value.sku,
      slug: this.generateSlug(value.nameEn),
      unitPrice: value.unitPrice,
      costPrice: value.costPrice,
      brandId: value.brandId,
      categoryId: value.categoryId,
      isFeatured: value.isFeatured,
      isActive: value.isActive,
      translations: this.buildTranslations(value),
      images: this.buildImages()
    };
  }
  buildTranslations(value) {
    const translations = [
      {
        languageCode: "en",
        name: value.nameEn,
        shortDescription: value.shortDescriptionEn,
        description: value.descriptionEn
      }
    ];
    if (value.nameAr) {
      translations.push({
        languageCode: "ar",
        name: value.nameAr,
        shortDescription: value.shortDescriptionAr,
        description: value.descriptionAr
      });
    }
    return translations;
  }
  buildImages() {
    return this.images.filter((img) => img.imageUrl || img.preview).map((img, i) => ({
      id: img.id,
      imageUrl: img.imageUrl || img.preview || "",
      altText: img.altText,
      displayOrder: i,
      isPrimary: img.isPrimary
    }));
  }
  generateSlug(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }
  markFormGroupTouched() {
    Object.values(this.productForm.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
  cancel() {
    this.router.navigate(["/products"]);
  }
  // Validation helpers
  hasError(field) {
    const control = this.productForm.get(field);
    return control ? control.invalid && control.touched : false;
  }
  getError(field, error) {
    const control = this.productForm.get(field);
    return control ? control.hasError(error) && control.touched : false;
  }
  get descriptionLength() {
    return this.productForm.get("descriptionEn")?.value?.length || 0;
  }
  setActiveTab(tab) {
    this.activeTab = tab;
  }
  static \u0275fac = function ProductFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(BrandService), \u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(LanguageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductFormComponent, selectors: [["app-product-form"]], hostBindings: function ProductFormComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function ProductFormComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, \u0275\u0275resolveWindow);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 51, vars: 41, consts: [[1, "min-h-full", "bg-slate-50"], [1, "hidden", "md:block", "p-6", "lg:p-8"], [1, "flex", "items-center", "gap-2", "text-sm", "text-slate-500", "mb-4"], ["routerLink", "/dashboard", 1, "hover:text-indigo-600", "transition-colors"], [1, "fas", "fa-chevron-right", "text-xs", "text-slate-300", "rtl:rotate-180"], [1, "text-slate-400"], ["routerLink", "/products", 1, "hover:text-indigo-600", "transition-colors"], [1, "text-slate-800", "font-medium"], [1, "flex", "items-start", "justify-between", "mb-6"], [1, "text-2xl", "font-bold", "text-slate-800"], [1, "mt-1", "text-sm", "text-slate-500"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "space-y-6", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "md:hidden", "min-h-screen", "flex", "flex-col", "bg-slate-50"], [1, "sticky", "top-0", "z-50", "bg-white", "border-b", "border-slate-200", "px-4", "py-3", "flex", "items-center", "gap-3"], ["type", "button", 1, "p-2", "-ms-2", "text-slate-500", "hover:text-slate-700", "transition-colors", 3, "click"], [1, "fas", "fa-arrow-left", "rtl:rotate-180"], [1, "font-semibold", "text-slate-800", "flex-1", "text-center"], [1, "w-8"], [1, "flex-1", "overflow-y-auto", "p-4", "pb-32", "space-y-4"], ["class", "space-y-4", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "fixed", "bottom-0", "inset-x-0", "z-40", "bg-white", "border-t", "border-slate-200", "px-4", "py-3", "flex", "items-center", "gap-3", "safe-area-bottom"], ["type", "button", 1, "flex-1", "py-3", "text-sm", "font-medium", "text-slate-600", "bg-slate-100", "rounded-xl", "hover:bg-slate-200", "transition-colors", 3, "click"], ["type", "button", 1, "flex-[2]", "py-3", "text-sm", "font-semibold", "text-white", "bg-indigo-600", "rounded-xl", "hover:bg-indigo-700", "transition-all", "disabled:opacity-50", "flex", "items-center", "justify-center", "gap-2", 3, "click", "disabled"], ["class", "fas fa-spinner fa-spin", 4, "ngIf"], ["class", "fas fa-check", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-20"], [1, "text-center"], [1, "w-12", "h-12", "border-4", "border-indigo-200", "border-t-indigo-600", "rounded-full", "animate-spin", "mx-auto", "mb-4"], [1, "text-slate-500"], [1, "space-y-6", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "space-y-6"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-sm", "overflow-hidden"], [1, "px-6", "py-4", "border-b", "border-slate-100", "flex", "items-center", "gap-3"], [1, "w-8", "h-8", "bg-indigo-100", "rounded-lg", "flex", "items-center", "justify-center"], [1, "fas", "fa-info-circle", "text-indigo-600"], [1, "font-semibold", "text-slate-800"], [1, "p-6", "space-y-5"], [1, "block", "text-sm", "font-medium", "text-slate-700", "mb-1.5"], [1, "text-red-500"], ["type", "text", "formControlName", "sku", 1, "w-full", "px-4", "py-2.5", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", 3, "placeholder"], ["class", "mt-1 text-sm text-red-500", 4, "ngIf"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], ["formControlName", "brandId", 1, "w-full", "px-4", "py-2.5", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", "bg-white"], [3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "categoryId", 1, "w-full", "px-4", "py-2.5", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", "bg-white"], [1, "px-6", "py-4", "border-b", "border-slate-100", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-3"], [1, "w-8", "h-8", "bg-purple-100", "rounded-lg", "flex", "items-center", "justify-center"], [1, "fas", "fa-language", "text-purple-600"], [1, "flex", "items-center", "bg-slate-100", "rounded-lg", "p-1"], ["type", "button", 1, "px-4", "py-1.5", "text-sm", "font-medium", "rounded-md", "transition-all", 3, "click", "ngClass"], ["class", "space-y-5", 4, "ngIf"], ["class", "space-y-5", "dir", "rtl", 4, "ngIf"], [1, "w-8", "h-8", "bg-emerald-100", "rounded-lg", "flex", "items-center", "justify-center"], [1, "fas", "fa-dollar-sign", "text-emerald-600"], [1, "p-6"], [1, "relative"], [1, "absolute", "start-4", "top-1/2", "-translate-y-1/2", "text-slate-400"], ["type", "number", "formControlName", "unitPrice", "step", "0.01", "placeholder", "0.00", 1, "w-full", "ps-8", "pe-4", "py-2.5", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all"], [1, "text-slate-400", "font-normal"], ["type", "number", "formControlName", "costPrice", "step", "0.01", "placeholder", "0.00", 1, "w-full", "ps-8", "pe-4", "py-2.5", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all"], [1, "space-y-6"], [1, "px-6", "py-4", "border-b", "border-slate-100"], [1, "flex", "items-center", "justify-between", "py-2"], [1, "text-sm", "font-medium", "text-slate-700"], [1, "text-xs", "text-slate-500"], ["type", "button", 1, "relative", "w-11", "h-6", "rounded-full", "transition-colors", "duration-200", 3, "click", "ngClass"], [1, "absolute", "top-0.5", "start-0.5", "w-5", "h-5", "bg-white", "rounded-full", "shadow", "transition-transform", "duration-200", 3, "ngClass"], [1, "border-2", "border-dashed", "rounded-xl", "p-8", "text-center", "cursor-pointer", "transition-all", "duration-200", 3, "click", "dragover", "dragleave", "drop", "ngClass"], [1, "w-12", "h-12", "mx-auto", "mb-3", "bg-slate-100", "rounded-full", "flex", "items-center", "justify-center"], [1, "fas", "fa-cloud-upload-alt", "text-xl", "text-slate-400"], [1, "text-sm", "text-slate-600", "mb-1"], [1, "text-xs", "text-slate-400"], ["class", "grid grid-cols-3 gap-3 mt-4", 4, "ngIf"], [1, "flex", "items-center", "justify-end", "gap-3", "pt-6", "border-t", "border-slate-200"], ["type", "button", 1, "px-5", "py-2.5", "text-sm", "font-medium", "text-slate-600", "hover:text-slate-800", "transition-colors", 3, "click"], ["type", "button", 1, "px-5", "py-2.5", "text-sm", "font-medium", "bg-white", "border", "border-slate-200", "text-slate-700", "rounded-xl", "hover:bg-slate-50", "transition-all", "disabled:opacity-50", 3, "click", "disabled"], ["type", "submit", 1, "px-6", "py-2.5", "text-sm", "font-semibold", "bg-indigo-600", "text-white", "rounded-xl", "hover:bg-indigo-700", "transition-all", "shadow-lg", "shadow-indigo-200", "hover:-translate-y-0.5", "active:scale-[0.98]", "disabled:opacity-50", "flex", "items-center", "gap-2", 3, "disabled"], [1, "mt-1", "text-sm", "text-red-500"], [3, "value"], [1, "space-y-5"], ["type", "text", "formControlName", "nameEn", 1, "w-full", "px-4", "py-2.5", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", 3, "placeholder"], ["type", "text", "formControlName", "shortDescriptionEn", 1, "w-full", "px-4", "py-2.5", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", 3, "placeholder"], ["formControlName", "descriptionEn", "rows", "4", 1, "w-full", "px-4", "py-3", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", "resize-none", 3, "placeholder"], [1, "mt-1", "text-xs", "text-slate-400", "text-end"], ["dir", "rtl", 1, "space-y-5"], ["type", "text", "formControlName", "nameAr", 1, "w-full", "px-4", "py-2.5", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", "text-right", 3, "placeholder"], ["type", "text", "formControlName", "shortDescriptionAr", 1, "w-full", "px-4", "py-2.5", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", "text-right", 3, "placeholder"], ["formControlName", "descriptionAr", "rows", "4", 1, "w-full", "px-4", "py-3", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", "resize-none", "text-right", 3, "placeholder"], [1, "grid", "grid-cols-3", "gap-3", "mt-4"], ["class", "relative group aspect-square rounded-lg overflow-hidden border border-slate-200", "draggable", "true", 3, "ring-2", "ring-indigo-500", "dragstart", "dragover", "dragleave", "drop", 4, "ngFor", "ngForOf"], ["draggable", "true", 1, "relative", "group", "aspect-square", "rounded-lg", "overflow-hidden", "border", "border-slate-200", 3, "dragstart", "dragover", "dragleave", "drop"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-black/50", "opacity-0", "group-hover:opacity-100", "transition-opacity", "flex", "items-center", "justify-center", "gap-2"], ["type", "button", "class", "p-2 bg-white rounded-lg text-slate-600 hover:text-indigo-600 transition-colors", 3, "click", 4, "ngIf"], ["type", "button", 1, "p-2", "bg-white", "rounded-lg", "text-slate-600", "hover:text-red-600", "transition-colors", 3, "click"], [1, "fas", "fa-trash"], ["class", "absolute top-1 start-1 px-2 py-0.5 bg-indigo-600 text-white text-xs font-medium rounded", 4, "ngIf"], ["type", "button", 1, "p-2", "bg-white", "rounded-lg", "text-slate-600", "hover:text-indigo-600", "transition-colors", 3, "click"], [1, "fas", "fa-star"], [1, "absolute", "top-1", "start-1", "px-2", "py-0.5", "bg-indigo-600", "text-white", "text-xs", "font-medium", "rounded"], [1, "fas", "fa-spinner", "fa-spin"], [1, "fas", "fa-check"], [1, "w-10", "h-10", "border-4", "border-indigo-200", "border-t-indigo-600", "rounded-full", "animate-spin"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "bg-white", "rounded-2xl", "border", "border-slate-200", "p-4"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "border-2", "border-dashed", "border-slate-200", "rounded-xl", "p-6", "text-center", "mb-3", 3, "click"], [1, "w-10", "h-10", "mx-auto", "mb-2", "bg-indigo-50", "rounded-lg", "flex", "items-center", "justify-center"], [1, "fas", "fa-image", "text-indigo-500"], [1, "text-sm", "text-slate-600"], [1, "flex", "items-center", "gap-2", "overflow-x-auto", "pb-2"], ["class", "relative w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden border border-slate-200", 3, "ring-2", "ring-indigo-500", 4, "ngFor", "ngForOf"], ["type", "button", 1, "w-14", "h-14", "flex-shrink-0", "border-2", "border-dashed", "border-slate-200", "rounded-lg", "flex", "items-center", "justify-center", "text-slate-400", "hover:border-indigo-300", "hover:text-indigo-500", "transition-colors", 3, "click"], [1, "fas", "fa-plus"], [1, "bg-white", "rounded-2xl", "border", "border-slate-200", "p-4", "space-y-4"], [1, "block", "text-sm", "text-slate-600", "mb-1"], ["type", "text", "formControlName", "sku", "placeholder", "NK-AM99-001", 1, "w-full", "px-4", "py-3", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], [1, "grid", "grid-cols-2", "gap-3"], ["formControlName", "brandId", 1, "w-full", "px-4", "py-3", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "bg-white"], ["formControlName", "categoryId", 1, "w-full", "px-4", "py-3", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "bg-white"], [1, "absolute", "start-3", "top-1/2", "-translate-y-1/2", "text-slate-400"], ["type", "number", "formControlName", "unitPrice", "step", "0.01", "placeholder", "0.00", 1, "w-full", "ps-8", "pe-4", "py-3", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], ["type", "number", "formControlName", "costPrice", "step", "0.01", "placeholder", "0.00", 1, "w-full", "ps-8", "pe-4", "py-3", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], [1, "flex", "items-center", "justify-between"], [1, "flex", "bg-slate-100", "rounded-lg", "p-1"], ["type", "button", 1, "flex-1", "py-2", "text-sm", "font-medium", "rounded-md", "transition-all", 3, "click", "ngClass"], ["class", "space-y-4", 4, "ngIf"], ["class", "space-y-4", "dir", "rtl", 4, "ngIf"], [1, "bg-white", "rounded-2xl", "border", "border-slate-200", "p-4", "space-y-3"], [1, "text-sm", "text-slate-700"], [1, "relative", "w-14", "h-14", "flex-shrink-0", "rounded-lg", "overflow-hidden", "border", "border-slate-200"], ["type", "button", 1, "absolute", "top-0.5", "end-0.5", "w-4", "h-4", "bg-red-500", "text-white", "rounded-full", "text-xs", "flex", "items-center", "justify-center", 3, "click"], [1, "fas", "fa-times", "text-[8px]"], [1, "space-y-4"], ["type", "text", "formControlName", "nameEn", "placeholder", "Nike Air Max 99", 1, "w-full", "px-4", "py-3", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], ["type", "text", "formControlName", "shortDescriptionEn", "placeholder", "Brief product summary...", 1, "w-full", "px-4", "py-3", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], ["formControlName", "descriptionEn", "rows", "3", "placeholder", "Describe the product features...", 1, "w-full", "px-4", "py-3", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "resize-none"], ["dir", "rtl", 1, "space-y-4"], ["type", "text", "formControlName", "nameAr", "placeholder", "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629", 1, "w-full", "px-4", "py-3", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "text-right"], ["type", "text", "formControlName", "shortDescriptionAr", "placeholder", "\u0645\u0644\u062E\u0635 \u0645\u0648\u062C\u0632 \u0644\u0644\u0645\u0646\u062A\u062C...", 1, "w-full", "px-4", "py-3", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "text-right"], ["formControlName", "descriptionAr", "rows", "3", "placeholder", "\u0635\u0641 \u0645\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C...", 1, "w-full", "px-4", "py-3", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "resize-none", "text-right"]], template: function ProductFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nav", 2)(3, "a", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "i", 4);
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "i", 4);
      \u0275\u0275elementStart(11, "a", 6);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "i", 4);
      \u0275\u0275elementStart(15, "span", 7);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 8)(20, "div")(21, "h1", 9);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p", 10);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(28, ProductFormComponent_div_28_Template, 6, 3, "div", 11)(29, ProductFormComponent_form_29_Template, 147, 100, "form", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 13)(31, "div", 14)(32, "button", 15);
      \u0275\u0275listener("click", function ProductFormComponent_Template_button_click_32_listener() {
        return ctx.cancel();
      });
      \u0275\u0275element(33, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "h1", 17);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "div", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 19);
      \u0275\u0275template(40, ProductFormComponent_div_40_Template, 2, 0, "div", 11)(41, ProductFormComponent_form_41_Template, 103, 70, "form", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 21)(43, "button", 22);
      \u0275\u0275listener("click", function ProductFormComponent_Template_button_click_43_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "button", 23);
      \u0275\u0275listener("click", function ProductFormComponent_Template_button_click_46_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275template(47, ProductFormComponent_i_47_Template, 1, 0, "i", 24)(48, ProductFormComponent_i_48_Template, 1, 0, "i", 25);
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275attribute("dir", ctx.dir);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 17, "COMMON.HOME"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 19, "SIDEBAR.INVENTORY"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 21, "PRODUCTS.TITLE"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? \u0275\u0275pipeBind1(17, 23, "PRODUCTS.EDIT_PRODUCT") : \u0275\u0275pipeBind1(18, 25, "PRODUCTS.CREATE.BREADCRUMB"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? \u0275\u0275pipeBind1(23, 27, "PRODUCTS.EDIT_PRODUCT") : \u0275\u0275pipeBind1(24, 29, "PRODUCTS.CREATE.TITLE"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 31, "PRODUCTS.CREATE.SUBTITLE"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? \u0275\u0275pipeBind1(36, 33, "PRODUCTS.EDIT_PRODUCT") : \u0275\u0275pipeBind1(37, 35, "PRODUCTS.CREATE.TITLE"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 37, "COMMON.CANCEL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(50, 39, "PRODUCTS.CREATE.SAVE_PRODUCT"), " ");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductFormComponent, { className: "ProductFormComponent", filePath: "src\\app\\features\\products\\pages\\product-form\\product-form.component.ts", lineNumber: 34 });
})();

// src/app/features/products/pages/product-detail/product-detail.component.ts
function ProductDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275element(2, "div", 9);
    \u0275\u0275elementStart(3, "p", 10);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "COMMON.LOADING"));
  }
}
function ProductDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275element(2, "i", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 14);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 15);
    \u0275\u0275listener("click", function ProductDetailComponent_div_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.ngOnInit());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, ctx_r1.error));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "COMMON.RETRY"), " ");
  }
}
function ProductDetailComponent_ng_container_4_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "p", 66);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 67);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "PRODUCTS.DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.product.description);
  }
}
function ProductDetailComponent_ng_container_4_div_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 68);
    \u0275\u0275element(2, "div", 69)(3, "div", 70)(4, "div", 71);
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_ng_container_4_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73);
    \u0275\u0275element(2, "i", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 26);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "INVENTORY.NO_MOVEMENTS"));
  }
}
function ProductDetailComponent_ng_container_4_div_90_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 82)(1, "td", 83)(2, "div", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 84);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 83)(7, "span", 85);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 83)(11, "span", 86);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 87)(14, "span", 88);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const movement_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(movement_r4.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.formatTime(movement_r4.createdAt), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getMovementTypeClass(movement_r4.movementType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 11, ctx_r1.getMovementTypeLabel(movement_r4.movementType)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(movement_r4.warehouseName);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-emerald-600", movement_r4.quantity > 0)("text-red-600", movement_r4.quantity < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", movement_r4.quantity > 0 ? "+" : "", "", movement_r4.quantity, " ");
  }
}
function ProductDetailComponent_ng_container_4_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "table", 76)(2, "thead", 77)(3, "tr")(4, "th", 78);
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
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody", 80);
    \u0275\u0275template(17, ProductDetailComponent_ng_container_4_div_90_tr_17_Template, 16, 13, "tr", 81);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "INVENTORY.DATE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 7, "INVENTORY.TYPE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 9, "INVENTORY.WAREHOUSE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 11, "INVENTORY.QTY_CHANGE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.stockMovements);
  }
}
function ProductDetailComponent_ng_container_4_img_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 89);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.selectedImageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r1.product.name);
  }
}
function ProductDetailComponent_ng_container_4_div_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275element(1, "i", 91);
    \u0275\u0275elementStart(2, "p", 92);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "PRODUCTS.NO_IMAGE"));
  }
}
function ProductDetailComponent_ng_container_4_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.currentImageNumber, "/", ctx_r1.imageCount, " ");
  }
}
function ProductDetailComponent_ng_container_4_button_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 94);
    \u0275\u0275listener("click", function ProductDetailComponent_ng_container_4_button_103_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevImage());
    });
    \u0275\u0275element(1, "i", 95);
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_ng_container_4_button_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 96);
    \u0275\u0275listener("click", function ProductDetailComponent_ng_container_4_button_104_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextImage());
    });
    \u0275\u0275element(1, "i", 97);
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_ng_container_4_div_105_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function ProductDetailComponent_ng_container_4_div_105_button_1_Template_button_click_0_listener() {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onImageSelect(i_r8));
    });
    \u0275\u0275element(1, "img", 101);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r9 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.selectedImageIndex === i_r8 ? "border-indigo-600 ring-1 ring-indigo-600" : "border-transparent hover:border-slate-300");
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r9.imageUrl, \u0275\u0275sanitizeUrl)("alt", img_r9.altText);
  }
}
function ProductDetailComponent_ng_container_4_div_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275template(1, ProductDetailComponent_ng_container_4_div_105_button_1_Template, 2, 3, "button", 99);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.product.images);
  }
}
function ProductDetailComponent_ng_container_4_span_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275element(1, "span", 103);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.getStockStatusClass());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx_r1.getStockStatusLabel()), " ");
  }
}
function ProductDetailComponent_ng_container_4_div_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275element(1, "div", 105);
    \u0275\u0275elementStart(2, "div", 106);
    \u0275\u0275element(3, "div", 107)(4, "div", 107)(5, "div", 107);
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_ng_container_4_ng_container_114_div_1_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 118);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wh_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", wh_r12.id)("selected", wh_r12.id === ctx_r1.selectedWarehouseId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", wh_r12.name, " ");
  }
}
function ProductDetailComponent_ng_container_4_ng_container_114_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 115);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 116);
    \u0275\u0275listener("change", function ProductDetailComponent_ng_container_4_ng_container_114_div_1_Template_select_change_4_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onWarehouseChange(+$event.target.value));
    });
    \u0275\u0275template(5, ProductDetailComponent_ng_container_4_ng_container_114_div_1_option_5_Template, 2, 3, "option", 117);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "INVENTORY.WAREHOUSE_LOCATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.warehouses);
  }
}
function ProductDetailComponent_ng_container_4_ng_container_114_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "div", 119)(2, "p", 120);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 121);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 122)(8, "p", 123);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 121);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 124)(14, "p", 125);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 121);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.productStock.quantityOnHand, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "INVENTORY.ON_HAND"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.productStock.quantityReserved, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, "INVENTORY.RESERVED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.productStock.quantityAvailable);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 10, "INVENTORY.AVAILABLE"));
  }
}
function ProductDetailComponent_ng_container_4_ng_container_114_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "div", 119)(2, "p", 120);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 121);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 122)(8, "p", 123);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 121);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 124)(14, "p", 125);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 121);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.stockSummary.totalQuantityOnHand);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "INVENTORY.ON_HAND"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.stockSummary.totalQuantityReserved);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, "INVENTORY.RESERVED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.stockSummary.totalQuantityAvailable);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 10, "INVENTORY.AVAILABLE"));
  }
}
function ProductDetailComponent_ng_container_4_ng_container_114_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126)(1, "p", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "INVENTORY.NO_STOCK_DATA"));
  }
}
function ProductDetailComponent_ng_container_4_ng_container_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductDetailComponent_ng_container_4_ng_container_114_div_1_Template, 6, 4, "div", 4)(2, ProductDetailComponent_ng_container_4_ng_container_114_div_2_Template, 19, 12, "div", 108)(3, ProductDetailComponent_ng_container_4_ng_container_114_div_3_Template, 19, 12, "div", 108)(4, ProductDetailComponent_ng_container_4_ng_container_114_div_4_Template, 4, 3, "div", 109);
    \u0275\u0275elementStart(5, "button", 110);
    \u0275\u0275listener("click", function ProductDetailComponent_ng_container_4_ng_container_114_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.adjustStock());
    });
    \u0275\u0275element(6, "i", 111);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 112);
    \u0275\u0275element(10, "i", 113);
    \u0275\u0275elementStart(11, "p", 114);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.warehouses.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.productStock);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.productStock && ctx_r1.stockSummary);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.productStock && !ctx_r1.stockSummary);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 6, "INVENTORY.ADJUST_STOCK"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 8, "INVENTORY.WAREHOUSE_NOTE"), " ");
  }
}
function ProductDetailComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "nav", 16)(2, "a", 17);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "i", 18);
    \u0275\u0275elementStart(6, "a", 19);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "i", 18);
    \u0275\u0275elementStart(10, "span", 20);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 21)(13, "div")(14, "div", 22)(15, "h1", 23);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 24);
    \u0275\u0275element(18, "span", 25);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "p", 26)(22, "span", 27);
    \u0275\u0275text(23, "SKU:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 28)(26, "button", 29);
    \u0275\u0275listener("click", function ProductDetailComponent_ng_container_4_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(27, "i", 30);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 31);
    \u0275\u0275listener("click", function ProductDetailComponent_ng_container_4_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editProduct());
    });
    \u0275\u0275element(31, "i", 32);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 33)(35, "div", 34)(36, "div", 35)(37, "div", 36)(38, "h2", 37);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 38)(42, "div", 39)(43, "div")(44, "p", 40);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 41);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div")(50, "p", 40);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "p", 42);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div")(56, "p", 40);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "p", 41);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div")(62, "p", 40);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "p", 41);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div")(68, "p", 40);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "p", 43);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div")(74, "p", 40);
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "p", 41);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(79, ProductDetailComponent_ng_container_4_div_79_Template, 6, 4, "div", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 35)(81, "div", 45)(82, "h2", 37);
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "button", 46);
    \u0275\u0275listener("click", function ProductDetailComponent_ng_container_4_Template_button_click_85_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewInventoryHistory());
    });
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(88, ProductDetailComponent_ng_container_4_div_88_Template, 5, 0, "div", 47)(89, ProductDetailComponent_ng_container_4_div_89_Template, 6, 3, "div", 48)(90, ProductDetailComponent_ng_container_4_div_90_Template, 18, 13, "div", 49);
    \u0275\u0275elementStart(91, "div", 50)(92, "div", 51);
    \u0275\u0275element(93, "i", 52);
    \u0275\u0275elementStart(94, "p", 53);
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(97, "div", 54)(98, "div", 35)(99, "div", 55);
    \u0275\u0275template(100, ProductDetailComponent_ng_container_4_img_100_Template, 1, 2, "img", 56)(101, ProductDetailComponent_ng_container_4_div_101_Template, 5, 3, "div", 57)(102, ProductDetailComponent_ng_container_4_div_102_Template, 2, 2, "div", 58)(103, ProductDetailComponent_ng_container_4_button_103_Template, 2, 0, "button", 59)(104, ProductDetailComponent_ng_container_4_button_104_Template, 2, 0, "button", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275template(105, ProductDetailComponent_ng_container_4_div_105_Template, 2, 1, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "div", 35)(107, "div", 45)(108, "h2", 37);
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(111, ProductDetailComponent_ng_container_4_span_111_Template, 4, 4, "span", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "div", 63);
    \u0275\u0275template(113, ProductDetailComponent_ng_container_4_div_113_Template, 6, 0, "div", 64)(114, ProductDetailComponent_ng_container_4_ng_container_114_Template, 14, 10, "ng-container", 4);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 43, "COMMON.HOME"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 45, "PRODUCTS.TITLE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.product.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.product.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.product.isActive ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-600");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-emerald-500", ctx_r1.product.isActive)("bg-slate-400", !ctx_r1.product.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 47, ctx_r1.product.isActive ? "COMMON.ACTIVE" : "COMMON.INACTIVE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.product.sku, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 49, "COMMON.BACK"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 51, "PRODUCTS.EDIT_PRODUCT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 53, "PRODUCTS.BASIC_INFO"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 55, "PRODUCTS.NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.product.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(52, 57, "PRODUCTS.SKU"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.product.sku);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 59, "PRODUCTS.BRAND"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.product.brandName || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(64, 61, "PRODUCTS.CATEGORY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.product.categoryName || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 63, "PRODUCTS.CREATE.BASE_PRICE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatPrice(ctx_r1.product.unitPrice));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(76, 65, "PRODUCTS.CREATE.COST_PRICE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.product.costPrice ? ctx_r1.formatPrice(ctx_r1.product.costPrice) : "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.product.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 67, "INVENTORY.RECENT_ACTIVITY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(87, 69, "INVENTORY.VIEW_ALL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isLoadingInventory);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingInventory && ctx_r1.stockMovements.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingInventory && ctx_r1.stockMovements.length > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(96, 71, "INVENTORY.WAREHOUSE_NOTE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.selectedImageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedImageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.imageCount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.imageCount > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.imageCount > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.imageCount > 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(110, 73, "INVENTORY.TITLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.productStock || ctx_r1.stockSummary);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isLoadingInventory);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingInventory);
  }
}
function ProductDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275element(1, "div", 128);
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_ng_container_7_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.getStockStatusClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r1.getStockStatusLabel()), " ");
  }
}
function ProductDetailComponent_ng_container_7_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 151)(1, "div", 152)(2, "p", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 53);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 153)(8, "p", 154);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 53);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 155)(14, "p", 156);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 53);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = (tmp_2_0 = ctx_r1.productStock == null ? null : ctx_r1.productStock.quantityOnHand) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : ctx_r1.stockSummary == null ? null : ctx_r1.stockSummary.totalQuantityOnHand) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "INVENTORY.ON_HAND"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_4_0 = (tmp_4_0 = ctx_r1.productStock == null ? null : ctx_r1.productStock.quantityReserved) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : ctx_r1.stockSummary == null ? null : ctx_r1.stockSummary.totalQuantityReserved) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, "INVENTORY.RESERVED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_6_0 = (tmp_6_0 = ctx_r1.productStock == null ? null : ctx_r1.productStock.quantityAvailable) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : ctx_r1.stockSummary == null ? null : ctx_r1.stockSummary.totalQuantityAvailable) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 10, "INVENTORY.AVAILABLE"));
  }
}
function ProductDetailComponent_ng_container_7_img_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 89);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.selectedImageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r1.product.name);
  }
}
function ProductDetailComponent_ng_container_7_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275element(1, "i", 91);
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_ng_container_7_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.currentImageNumber, "/", ctx_r1.imageCount, " ");
  }
}
function ProductDetailComponent_ng_container_7_div_63_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 159);
    \u0275\u0275listener("click", function ProductDetailComponent_ng_container_7_div_63_button_1_Template_button_click_0_listener() {
      const i_r15 = \u0275\u0275restoreView(_r14).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onImageSelect(i_r15));
    });
    \u0275\u0275element(1, "img", 160);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r16 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.selectedImageIndex === i_r15 ? "border-indigo-600" : "border-transparent");
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r16.imageUrl, \u0275\u0275sanitizeUrl);
  }
}
function ProductDetailComponent_ng_container_7_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157);
    \u0275\u0275template(1, ProductDetailComponent_ng_container_7_div_63_button_1_Template, 2, 2, "button", 158);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.product.images);
  }
}
function ProductDetailComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 129)(2, "div", 130)(3, "button", 131);
    \u0275\u0275listener("click", function ProductDetailComponent_ng_container_7_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(4, "i", 30);
    \u0275\u0275elementStart(5, "span", 132);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 133);
    \u0275\u0275element(9, "i", 134);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 135)(11, "div")(12, "h1", 136);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 137)(15, "span", 138);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 102);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 139);
    \u0275\u0275listener("click", function ProductDetailComponent_ng_container_7_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editProduct());
    });
    \u0275\u0275element(21, "i", 32);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 140)(25, "h3", 141);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 142)(29, "div", 143)(30, "span", 26);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 41);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 143)(36, "span", 26);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 41);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 144)(42, "span", 26);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 145);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "div", 140)(48, "div", 146)(49, "h3", 37);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(52, ProductDetailComponent_ng_container_7_span_52_Template, 3, 4, "span", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275template(53, ProductDetailComponent_ng_container_7_div_53_Template, 19, 12, "div", 147);
    \u0275\u0275elementStart(54, "button", 148);
    \u0275\u0275listener("click", function ProductDetailComponent_ng_container_7_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.adjustStock());
    });
    \u0275\u0275element(55, "i", 111);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 149)(59, "div", 55);
    \u0275\u0275template(60, ProductDetailComponent_ng_container_7_img_60_Template, 1, 2, "img", 56)(61, ProductDetailComponent_ng_container_7_div_61_Template, 2, 0, "div", 57)(62, ProductDetailComponent_ng_container_7_div_62_Template, 2, 2, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275template(63, ProductDetailComponent_ng_container_7_div_63_Template, 2, 1, "div", 150);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 21, "PRODUCTS.TITLE"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.product.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("SKU: ", ctx_r1.product.sku, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.product.isActive ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 23, ctx_r1.product.isActive ? "COMMON.ACTIVE" : "COMMON.INACTIVE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 25, "PRODUCTS.EDIT_PRODUCT"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 27, "PRODUCTS.DETAILS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 29, "PRODUCTS.BRAND"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.product.brandName || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 31, "PRODUCTS.CATEGORY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.product.categoryName || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 33, "PRODUCTS.PRICE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatPrice(ctx_r1.product.unitPrice));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 35, "INVENTORY.TITLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.productStock || ctx_r1.stockSummary);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.productStock || ctx_r1.stockSummary);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 37, "INVENTORY.ADJUST_STOCK"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.selectedImageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedImageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.imageCount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.imageCount > 1);
  }
}
var ProductDetailComponent = class _ProductDetailComponent {
  route;
  router;
  productService;
  translate;
  languageService;
  inventoryService;
  warehousesService;
  destroy$ = new Subject();
  product = null;
  isLoading = false;
  error = null;
  productId = null;
  // Image Gallery
  selectedImageIndex = 0;
  // Responsive
  isMobile = false;
  isTablet = false;
  // Inventory Data (Real)
  warehouses = [];
  selectedWarehouseId = null;
  stockSummary = null;
  productStock = null;
  stockMovements = [];
  isLoadingInventory = false;
  inventoryError = null;
  constructor(route, router, productService, translate, languageService, inventoryService, warehousesService) {
    this.route = route;
    this.router = router;
    this.productService = productService;
    this.translate = translate;
    this.languageService = languageService;
    this.inventoryService = inventoryService;
    this.warehousesService = warehousesService;
    this.checkScreenSize();
  }
  onResize() {
    this.checkScreenSize();
  }
  checkScreenSize() {
    const width = window.innerWidth;
    this.isMobile = width < 768;
    this.isTablet = width >= 768 && width < 1024;
  }
  get dir() {
    return this.languageService.currentLanguage === "ar" ? "rtl" : "ltr";
  }
  get imageCount() {
    return this.product?.images?.length || 0;
  }
  get currentImageNumber() {
    return this.selectedImageIndex + 1;
  }
  get selectedWarehouse() {
    return this.warehouses.find((w) => w.id === this.selectedWarehouseId);
  }
  ngOnInit() {
    this.isLoading = true;
    this.warehousesService.getActive().pipe(takeUntil(this.destroy$)).subscribe({
      next: (warehouses) => {
        this.warehouses = warehouses;
        const defaultWh = warehouses.find((w) => w.isDefault) || warehouses[0];
        if (defaultWh) {
          this.selectedWarehouseId = defaultWh.id;
        }
      },
      error: (err) => console.error("Error loading warehouses:", err)
    });
    merge(this.route.paramMap, this.translate.onLangChange).pipe(switchMap(() => {
      const id = this.productId || Number(this.route.snapshot.paramMap.get("id"));
      if (!id)
        throw new Error("Invalid Product ID");
      this.productId = id;
      this.isLoading = true;
      this.product = null;
      return this.productService.getById(id);
    }), takeUntil(this.destroy$)).subscribe({
      next: (product) => {
        this.product = product;
        if (product.images && product.images.length > 0) {
          this.selectedImageIndex = 0;
        }
        this.isLoading = false;
        this.loadInventoryData();
      },
      error: (err) => {
        console.error("Error loading product:", err);
        this.error = "PRODUCTS.LOAD_ERROR";
        this.isLoading = false;
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ==================== Inventory ==================== //
  loadInventoryData() {
    if (!this.productId)
      return;
    this.isLoadingInventory = true;
    this.inventoryError = null;
    forkJoin({
      summary: this.inventoryService.getStockSummary(this.productId).pipe(catchError((err) => {
        console.error("Error loading stock summary:", err);
        return of(null);
      })),
      movements: this.inventoryService.getMovementHistory(this.productId, void 0, 1, 5).pipe(catchError((err) => {
        console.error("Error loading movements:", err);
        return of([]);
      }))
    }).subscribe({
      next: (result) => {
        this.stockSummary = result.summary;
        this.stockMovements = result.movements;
        this.isLoadingInventory = false;
        if (this.selectedWarehouseId) {
          this.loadWarehouseStock();
        }
      },
      error: (err) => {
        console.error("Error loading inventory:", err);
        this.inventoryError = "INVENTORY.LOAD_ERROR";
        this.isLoadingInventory = false;
      }
    });
  }
  loadWarehouseStock() {
    if (!this.productId || !this.selectedWarehouseId)
      return;
    this.inventoryService.getStockByProduct(this.productId, this.selectedWarehouseId).pipe(catchError((err) => {
      console.error("Error loading warehouse stock:", err);
      return of(null);
    }), takeUntil(this.destroy$)).subscribe((stock) => {
      this.productStock = stock;
    });
  }
  onWarehouseChange(warehouseId) {
    this.selectedWarehouseId = warehouseId;
    this.loadWarehouseStock();
  }
  getStockStatus() {
    if (!this.productStock) {
      if (this.stockSummary) {
        if (this.stockSummary.totalQuantityAvailable <= 0)
          return "out-of-stock";
        if (this.stockSummary.isLowStock)
          return "low-stock";
        return "in-stock";
      }
      return "out-of-stock";
    }
    if (this.productStock.quantityAvailable <= 0)
      return "out-of-stock";
    if (this.productStock.isLowStock)
      return "low-stock";
    return "in-stock";
  }
  getStockStatusClass() {
    switch (this.getStockStatus()) {
      case "in-stock":
        return "bg-emerald-100 text-emerald-700";
      case "low-stock":
        return "bg-amber-100 text-amber-700";
      case "out-of-stock":
        return "bg-red-100 text-red-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  }
  getStockStatusLabel() {
    switch (this.getStockStatus()) {
      case "in-stock":
        return "INVENTORY.IN_STOCK";
      case "low-stock":
        return "INVENTORY.LOW_STOCK";
      case "out-of-stock":
        return "INVENTORY.OUT_OF_STOCK";
      default:
        return "";
    }
  }
  getMovementTypeLabel(type) {
    const labels = {
      0: "INVENTORY.TYPE_IN",
      1: "INVENTORY.TYPE_OUT",
      2: "INVENTORY.TYPE_TRANSFER",
      3: "INVENTORY.TYPE_ADJUSTMENT",
      4: "INVENTORY.TYPE_DAMAGED",
      5: "INVENTORY.TYPE_RETURN"
    };
    return labels[type] || "INVENTORY.TYPE_OTHER";
  }
  getMovementTypeClass(type) {
    switch (type) {
      case 0:
        return "text-emerald-600";
      case 1:
        return "text-red-600";
      case 2:
        return "text-blue-600";
      case 3:
        return "text-amber-600";
      case 4:
        return "text-red-600";
      case 5:
        return "text-purple-600";
      default:
        return "text-slate-600";
    }
  }
  // ==================== Image Gallery ==================== //
  get selectedImageUrl() {
    if (!this.product?.images?.length)
      return this.product?.primaryImageUrl;
    return this.product.images[this.selectedImageIndex]?.imageUrl;
  }
  onImageSelect(index) {
    this.selectedImageIndex = index;
  }
  nextImage() {
    if (this.product?.images?.length) {
      this.selectedImageIndex = (this.selectedImageIndex + 1) % this.product.images.length;
    }
  }
  prevImage() {
    if (this.product?.images?.length) {
      this.selectedImageIndex = (this.selectedImageIndex - 1 + this.product.images.length) % this.product.images.length;
    }
  }
  // ==================== Formatters ==================== //
  formatPrice(price) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);
  }
  formatDate(dateStr) {
    const date = new Date(dateStr);
    const now = /* @__PURE__ */ new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1e3 * 60 * 60 * 24));
    if (days === 0)
      return this.translate.instant("COMMON.TODAY");
    if (days === 1)
      return this.translate.instant("COMMON.YESTERDAY");
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }
  formatTime(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
  }
  // ==================== Navigation ==================== //
  goBack() {
    this.router.navigate(["/products"]);
  }
  editProduct() {
    if (this.product) {
      this.router.navigate(["/products", this.product.id, "edit"]);
    }
  }
  adjustStock() {
    if (this.product) {
      this.router.navigate(["/inventory"], {
        queryParams: {
          productId: this.product.id,
          warehouseId: this.selectedWarehouseId
        }
      });
    }
  }
  viewInventoryHistory() {
    if (this.product) {
      this.router.navigate(["/inventory"], {
        queryParams: { productId: this.product.id }
      });
    }
  }
  static \u0275fac = function ProductDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(LanguageService), \u0275\u0275directiveInject(InventoryService), \u0275\u0275directiveInject(WarehousesService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], hostBindings: function ProductDetailComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function ProductDetailComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, \u0275\u0275resolveWindow);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 6, consts: [[1, "min-h-full", "bg-slate-50"], [1, "hidden", "md:block", "p-6", "lg:p-8"], ["class", "flex items-center justify-center py-24", 4, "ngIf"], ["class", "flex flex-col items-center justify-center py-24", 4, "ngIf"], [4, "ngIf"], [1, "md:hidden", "min-h-screen", "flex", "flex-col", "bg-slate-50"], ["class", "flex-1 flex items-center justify-center", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-24"], [1, "text-center"], [1, "w-12", "h-12", "border-4", "border-indigo-200", "border-t-indigo-600", "rounded-full", "animate-spin", "mx-auto", "mb-4"], [1, "text-slate-500"], [1, "flex", "flex-col", "items-center", "justify-center", "py-24"], [1, "w-16", "h-16", "bg-red-100", "rounded-full", "flex", "items-center", "justify-center", "mb-4"], [1, "fas", "fa-exclamation-triangle", "text-2xl", "text-red-500"], [1, "text-lg", "font-semibold", "text-slate-800", "mb-2"], [1, "text-indigo-600", "hover:text-indigo-700", "font-medium", 3, "click"], [1, "flex", "items-center", "gap-2", "text-sm", "text-slate-500", "mb-4"], ["routerLink", "/dashboard", 1, "hover:text-indigo-600", "transition-colors"], [1, "fas", "fa-chevron-right", "text-xs", "text-slate-300", "rtl:rotate-180"], ["routerLink", "/products", 1, "hover:text-indigo-600", "transition-colors"], [1, "text-slate-800", "font-medium", "truncate", "max-w-[200px]"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-start", "lg:justify-between", "gap-4", "mb-6"], [1, "flex", "items-center", "gap-3", "mb-1"], [1, "text-2xl", "lg:text-3xl", "font-bold", "text-slate-800"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-full", "text-xs", "font-semibold", 3, "ngClass"], [1, "w-1.5", "h-1.5", "rounded-full"], [1, "text-sm", "text-slate-500"], [1, "font-medium"], [1, "flex", "items-center", "gap-3"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-white", "border", "border-slate-200", "text-slate-700", "font-medium", "rounded-xl", "hover:bg-slate-50", "hover:border-slate-300", "transition-all", 3, "click"], [1, "fas", "fa-arrow-left", "rtl:rotate-180"], [1, "inline-flex", "items-center", "gap-2", "px-5", "py-2.5", "bg-indigo-600", "text-white", "font-semibold", "rounded-xl", "hover:bg-indigo-700", "transition-all", "shadow-lg", "shadow-indigo-200", "hover:-translate-y-0.5", "active:scale-[0.98]", 3, "click"], [1, "fas", "fa-pen"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "space-y-6"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-sm", "overflow-hidden"], [1, "px-6", "py-4", "border-b", "border-slate-100"], [1, "font-semibold", "text-slate-800"], [1, "p-6"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "text-xs", "font-medium", "text-slate-400", "uppercase", "tracking-wide", "mb-1"], [1, "text-sm", "font-medium", "text-slate-800"], [1, "text-sm", "font-mono", "text-slate-800"], [1, "text-lg", "font-bold", "text-slate-800"], ["class", "mt-6 pt-6 border-t border-slate-100", 4, "ngIf"], [1, "px-6", "py-4", "border-b", "border-slate-100", "flex", "items-center", "justify-between"], [1, "text-sm", "text-indigo-600", "hover:text-indigo-700", "font-medium", 3, "click"], ["class", "p-6", 4, "ngIf"], ["class", "p-6 text-center", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], [1, "px-6", "py-4", "bg-slate-50", "border-t", "border-slate-100"], [1, "flex", "items-start", "gap-3"], [1, "fas", "fa-info-circle", "text-slate-400", "mt-0.5"], [1, "text-xs", "text-slate-500"], [1, "space-y-6"], [1, "relative", "aspect-square", "bg-slate-100"], ["class", "w-full h-full object-contain p-4", 3, "src", "alt", 4, "ngIf"], ["class", "w-full h-full flex flex-col items-center justify-center text-slate-400", 4, "ngIf"], ["class", "absolute bottom-3 end-3 px-2 py-1 bg-black/60 text-white text-xs font-medium rounded-md", 4, "ngIf"], ["class", "absolute start-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full shadow flex items-center justify-center text-slate-600 hover:bg-white transition-colors", 3, "click", 4, "ngIf"], ["class", "absolute end-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full shadow flex items-center justify-center text-slate-600 hover:bg-white transition-colors", 3, "click", 4, "ngIf"], ["class", "p-4 flex items-center gap-2 overflow-x-auto", 4, "ngIf"], ["class", "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold", 3, "ngClass", 4, "ngIf"], [1, "p-6", "space-y-5"], ["class", "animate-pulse space-y-4", 4, "ngIf"], [1, "mt-6", "pt-6", "border-t", "border-slate-100"], [1, "text-xs", "font-medium", "text-slate-400", "uppercase", "tracking-wide", "mb-2"], [1, "text-sm", "text-slate-600", "leading-relaxed"], [1, "animate-pulse", "space-y-3"], [1, "h-4", "bg-slate-200", "rounded", "w-3/4"], [1, "h-4", "bg-slate-200", "rounded", "w-1/2"], [1, "h-4", "bg-slate-200", "rounded", "w-2/3"], [1, "p-6", "text-center"], [1, "w-12", "h-12", "bg-slate-100", "rounded-full", "flex", "items-center", "justify-center", "mx-auto", "mb-3"], [1, "fas", "fa-history", "text-slate-400"], [1, "overflow-x-auto"], [1, "w-full"], [1, "bg-slate-50"], [1, "px-6", "py-3", "text-start", "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wide"], [1, "px-6", "py-3", "text-end", "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wide"], [1, "divide-y", "divide-slate-100"], ["class", "hover:bg-slate-50 transition-colors", 4, "ngFor", "ngForOf"], [1, "hover:bg-slate-50", "transition-colors"], [1, "px-6", "py-4"], [1, "text-xs", "text-slate-400"], [1, "text-sm", "font-medium", 3, "ngClass"], [1, "text-sm", "text-slate-600"], [1, "px-6", "py-4", "text-end"], [1, "text-sm", "font-bold"], [1, "w-full", "h-full", "object-contain", "p-4", 3, "src", "alt"], [1, "w-full", "h-full", "flex", "flex-col", "items-center", "justify-center", "text-slate-400"], [1, "fas", "fa-image", "text-4xl", "mb-2"], [1, "text-sm"], [1, "absolute", "bottom-3", "end-3", "px-2", "py-1", "bg-black/60", "text-white", "text-xs", "font-medium", "rounded-md"], [1, "absolute", "start-2", "top-1/2", "-translate-y-1/2", "w-8", "h-8", "bg-white/90", "rounded-full", "shadow", "flex", "items-center", "justify-center", "text-slate-600", "hover:bg-white", "transition-colors", 3, "click"], [1, "fas", "fa-chevron-left", "rtl:rotate-180"], [1, "absolute", "end-2", "top-1/2", "-translate-y-1/2", "w-8", "h-8", "bg-white/90", "rounded-full", "shadow", "flex", "items-center", "justify-center", "text-slate-600", "hover:bg-white", "transition-colors", 3, "click"], [1, "fas", "fa-chevron-right", "rtl:rotate-180"], [1, "p-4", "flex", "items-center", "gap-2", "overflow-x-auto"], ["class", "w-14 h-14 flex-shrink-0 rounded-lg border-2 overflow-hidden bg-slate-100 transition-all", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "w-14", "h-14", "flex-shrink-0", "rounded-lg", "border-2", "overflow-hidden", "bg-slate-100", "transition-all", 3, "click", "ngClass"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-0.5", "rounded-full", "text-xs", "font-semibold", 3, "ngClass"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-current"], [1, "animate-pulse", "space-y-4"], [1, "h-10", "bg-slate-200", "rounded-xl"], [1, "grid", "grid-cols-3", "gap-3"], [1, "h-16", "bg-slate-200", "rounded-xl"], ["class", "grid grid-cols-3 gap-3", 4, "ngIf"], ["class", "text-center py-4", 4, "ngIf"], [1, "w-full", "inline-flex", "items-center", "justify-center", "gap-2", "px-4", "py-2.5", "bg-white", "border", "border-slate-200", "text-slate-700", "font-medium", "rounded-xl", "hover:bg-slate-50", "hover:border-slate-300", "transition-all", 3, "click"], [1, "fas", "fa-sliders-h"], [1, "flex", "items-start", "gap-3", "p-3", "bg-amber-50", "border", "border-amber-100", "rounded-xl"], [1, "fas", "fa-exclamation-circle", "text-amber-500", "mt-0.5"], [1, "text-xs", "text-amber-700"], [1, "block", "text-xs", "font-medium", "text-slate-500", "uppercase", "tracking-wide", "mb-2"], [1, "w-full", "px-4", "py-2.5", "bg-white", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"], [1, "text-center", "p-3", "bg-slate-50", "rounded-xl"], [1, "text-2xl", "font-bold", "text-slate-800"], [1, "text-xs", "text-slate-500", "uppercase"], [1, "text-center", "p-3", "bg-amber-50", "rounded-xl"], [1, "text-2xl", "font-bold", "text-amber-600"], [1, "text-center", "p-3", "bg-emerald-50", "rounded-xl"], [1, "text-2xl", "font-bold", "text-emerald-600"], [1, "text-center", "py-4"], [1, "flex-1", "flex", "items-center", "justify-center"], [1, "w-10", "h-10", "border-4", "border-indigo-200", "border-t-indigo-600", "rounded-full", "animate-spin"], [1, "sticky", "top-0", "z-50", "bg-white", "border-b", "border-slate-200", "px-4", "py-3"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-2", "text-slate-600", 3, "click"], [1, "text-sm", "font-medium"], [1, "p-2", "text-slate-500"], [1, "fas", "fa-ellipsis-v"], [1, "flex-1", "overflow-y-auto", "p-4", "pb-32", "space-y-4"], [1, "text-xl", "font-bold", "text-slate-800", "mb-1"], [1, "flex", "items-center", "gap-3", "flex-wrap"], [1, "text-xs", "text-slate-500", "bg-slate-100", "px-2", "py-0.5", "rounded"], [1, "w-full", "inline-flex", "items-center", "justify-center", "gap-2", "px-5", "py-3", "bg-indigo-600", "text-white", "font-semibold", "rounded-xl", 3, "click"], [1, "bg-white", "rounded-2xl", "border", "border-slate-200", "p-4"], [1, "font-semibold", "text-slate-800", "mb-4"], [1, "space-y-3"], [1, "flex", "justify-between", "items-center", "py-2", "border-b", "border-slate-100"], [1, "flex", "justify-between", "items-center", "py-2"], [1, "text-lg", "font-bold", "text-indigo-600"], [1, "flex", "items-center", "justify-between", "mb-4"], ["class", "grid grid-cols-3 gap-2 mb-4", 4, "ngIf"], [1, "w-full", "inline-flex", "items-center", "justify-center", "gap-2", "px-4", "py-2.5", "bg-slate-100", "text-slate-700", "font-medium", "rounded-xl", 3, "click"], [1, "bg-white", "rounded-2xl", "border", "border-slate-200", "overflow-hidden"], ["class", "p-3 flex items-center gap-2 overflow-x-auto", 4, "ngIf"], [1, "grid", "grid-cols-3", "gap-2", "mb-4"], [1, "text-center", "p-2", "bg-slate-50", "rounded-xl"], [1, "text-center", "p-2", "bg-amber-50", "rounded-xl"], [1, "text-lg", "font-bold", "text-amber-600"], [1, "text-center", "p-2", "bg-emerald-50", "rounded-xl"], [1, "text-lg", "font-bold", "text-emerald-600"], [1, "p-3", "flex", "items-center", "gap-2", "overflow-x-auto"], ["class", "w-12 h-12 flex-shrink-0 rounded-lg border-2 overflow-hidden bg-slate-100", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "w-12", "h-12", "flex-shrink-0", "rounded-lg", "border-2", "overflow-hidden", "bg-slate-100", 3, "click", "ngClass"], [1, "w-full", "h-full", "object-cover", 3, "src"]], template: function ProductDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, ProductDetailComponent_div_2_Template, 6, 3, "div", 2)(3, ProductDetailComponent_div_3_Template, 9, 6, "div", 3)(4, ProductDetailComponent_ng_container_4_Template, 115, 75, "ng-container", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275template(6, ProductDetailComponent_div_6_Template, 2, 0, "div", 6)(7, ProductDetailComponent_ng_container_7_Template, 64, 39, "ng-container", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275attribute("dir", ctx.dir);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.product && !ctx.isLoading);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.product && !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "src\\app\\features\\products\\pages\\product-detail\\product-detail.component.ts", lineNumber: 24 });
})();

// src/app/features/products/products.routes.ts
var PRODUCTS_ROUTES = [
  { path: "", component: ProductListComponent },
  { path: "add", component: ProductFormComponent },
  { path: ":id", component: ProductDetailComponent },
  { path: ":id/edit", component: ProductFormComponent }
];
export {
  PRODUCTS_ROUTES
};
//# sourceMappingURL=chunk-BOSIQVG5.js.map
