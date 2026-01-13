import {
  BrandService
} from "./chunk-UMMWDTGH.js";
import {
  ConfirmModalComponent
} from "./chunk-3AUUQ3ZH.js";
import {
  LanguageSwitcherComponent
} from "./chunk-WMDPQZWM.js";
import {
  LanguageService
} from "./chunk-SBRLR34M.js";
import {
  NotificationService
} from "./chunk-ZICMI5CI.js";
import {
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
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
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
  Subject,
  UpperCasePipe,
  debounceTime,
  distinctUntilChanged,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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

// src/app/features/brands/pages/brand-list/brand-list.component.ts
var _c0 = (a0, a1) => ({ "bg-indigo-600 text-white": a0, "bg-white border border-slate-200 text-slate-600": a1 });
var _c1 = () => [1, 2, 3, 4, 5];
var _c2 = (a0) => ({ "bg-slate-50": a0, "hover:bg-indigo-50": true });
var _c3 = (a0, a1) => ({ "bg-emerald-100 text-emerald-700": a0, "bg-slate-100 text-slate-600": a1 });
var _c4 = (a0, a1) => ({ "bg-emerald-500": a0, "bg-slate-400": a1 });
var _c5 = (a0, a1) => ({ "bg-indigo-600 text-white": a0, "text-slate-600 hover:bg-slate-100": a1 });
var _c6 = () => [1, 2, 3];
function BrandListComponent_ng_container_118_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 61)(1, "td", 62);
    \u0275\u0275element(2, "div", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 62)(4, "div", 10);
    \u0275\u0275element(5, "div", 64);
    \u0275\u0275elementStart(6, "div", 65);
    \u0275\u0275element(7, "div", 66)(8, "div", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 62);
    \u0275\u0275element(10, "div", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 62);
    \u0275\u0275element(12, "div", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 62);
    \u0275\u0275element(14, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 62);
    \u0275\u0275element(16, "div", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 62);
    \u0275\u0275element(18, "div", 72);
    \u0275\u0275elementEnd()();
  }
}
function BrandListComponent_ng_container_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BrandListComponent_ng_container_118_tr_1_Template, 19, 0, "tr", 60);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function BrandListComponent_tr_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 73)(2, "div", 74)(3, "div", 75);
    \u0275\u0275element(4, "i", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 77);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 78);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 79);
    \u0275\u0275listener("click", function BrandListComponent_tr_119_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275element(12, "i", 14);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "COMMON.NO_DATA"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 5, "BRANDS.EMPTY_DESC"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 7, "BRANDS.ADD_BRAND"), " ");
  }
}
function BrandListComponent_tr_120_img_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 98);
  }
  if (rf & 2) {
    const brand_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", brand_r4.logoUrl, \u0275\u0275sanitizeUrl)("alt", brand_r4.name);
  }
}
function BrandListComponent_tr_120_i_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 99);
  }
}
function BrandListComponent_tr_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 80)(1, "td", 62);
    \u0275\u0275element(2, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 62)(4, "div", 10)(5, "div", 81);
    \u0275\u0275template(6, BrandListComponent_tr_120_img_6_Template, 1, 2, "img", 82)(7, BrandListComponent_tr_120_i_7_Template, 1, 0, "i", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "p", 84);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 85);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td", 62)(14, "span", 86);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 87);
    \u0275\u0275text(17, "SKUs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 62)(19, "span", 88);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 62)(22, "span", 89);
    \u0275\u0275element(23, "span", 90);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td", 62)(28, "span", 91);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "td", 92)(32, "div", 93)(33, "button", 94);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275listener("click", function BrandListComponent_tr_120_Template_button_click_33_listener() {
      const brand_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editBrand(brand_r4));
    });
    \u0275\u0275element(35, "i", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 96);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275listener("click", function BrandListComponent_tr_120_Template_button_click_36_listener() {
      const brand_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteBrand(brand_r4));
    });
    \u0275\u0275element(38, "i", 97);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const brand_r4 = ctx.$implicit;
    const even_r5 = ctx.even;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(24, _c2, even_r5));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", brand_r4.logoUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !brand_r4.logoUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(brand_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", brand_r4.slug || brand_r4.description || "-", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(brand_r4.productsCount || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", brand_r4.category || "General", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(26, _c3, brand_r4.isActive, !brand_r4.isActive));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(29, _c4, brand_r4.isActive, !brand_r4.isActive));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", brand_r4.isActive ? \u0275\u0275pipeBind1(25, 13, "BRANDS.STATUS_ACTIVE") : \u0275\u0275pipeBind1(26, 15, "BRANDS.STATUS_INACTIVE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 17, brand_r4.updatedAt, "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(34, 20, "COMMON.EDIT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(37, 22, "COMMON.DELETE"));
  }
}
function BrandListComponent_div_121_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 111);
    \u0275\u0275listener("click", function BrandListComponent_div_121_ng_container_33_Template_button_click_1_listener() {
      const page_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(page_r8));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const page_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c5, page_r8 === ctx_r1.pageNumber, page_r8 !== ctx_r1.pageNumber));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r8, " ");
  }
}
function BrandListComponent_div_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 91);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span", 101);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "span", 101);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span", 101);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 102)(17, "div", 2)(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 103)(22, "option", 104);
    \u0275\u0275text(23, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 105);
    \u0275\u0275text(25, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 106);
    \u0275\u0275text(27, "50");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 107)(29, "button", 108);
    \u0275\u0275listener("click", function BrandListComponent_div_121_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.pageNumber - 1));
    });
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 109);
    \u0275\u0275template(33, BrandListComponent_div_121_ng_container_33_Template, 3, 5, "ng-container", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 108);
    \u0275\u0275listener("click", function BrandListComponent_div_121_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.pageNumber + 1));
    });
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 13, "COMMON.SHOWING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.pageNumber - 1) * ctx_r1.pageSize + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 15, "COMMON.TO"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.Math.min(ctx_r1.pageNumber * ctx_r1.pageSize, ctx_r1.totalCount));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 17, "COMMON.OF"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.totalCount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 19, "COMMON.RESULTS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(20, 21, "COMMON.ROWS_PER_PAGE"), ":");
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.pageNumber === 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 23, "COMMON.PREVIOUS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.pages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.pageNumber === ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 25, "COMMON.NEXT"), " ");
  }
}
function BrandListComponent_i_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 112);
  }
}
function BrandListComponent_ng_container_143_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "div", 115);
    \u0275\u0275element(2, "div", 116);
    \u0275\u0275elementStart(3, "div", 117);
    \u0275\u0275element(4, "div", 66)(5, "div", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 70);
    \u0275\u0275elementEnd()();
  }
}
function BrandListComponent_ng_container_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BrandListComponent_ng_container_143_div_1_Template, 7, 0, "div", 113);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c6));
  }
}
function BrandListComponent_div_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118)(1, "div", 119);
    \u0275\u0275element(2, "i", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 77);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 91);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "COMMON.NO_DATA"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "BRANDS.EMPTY_DESC"));
  }
}
function BrandListComponent_div_145_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 98);
  }
  if (rf & 2) {
    const brand_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", brand_r10.logoUrl, \u0275\u0275sanitizeUrl)("alt", brand_r10.name);
  }
}
function BrandListComponent_div_145_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 99);
  }
}
function BrandListComponent_div_145_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 120)(2, "div", 115)(3, "div", 121);
    \u0275\u0275template(4, BrandListComponent_div_145_img_4_Template, 1, 2, "img", 82)(5, BrandListComponent_div_145_i_5_Template, 1, 0, "i", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 122)(7, "h3", 123);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 85);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 124);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 125)(18, "div")(19, "p", 126);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 127);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div")(26, "p", 126);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 127);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 128)(32, "button", 129);
    \u0275\u0275element(33, "i", 130);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 131);
    \u0275\u0275listener("click", function BrandListComponent_div_145_Template_button_click_36_listener() {
      const brand_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editBrand(brand_r10));
    });
    \u0275\u0275element(37, "i", 132);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const brand_r10 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", brand_r10.logoUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !brand_r10.logoUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(brand_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(11, 13, "BRANDS.UPDATED"), " ", \u0275\u0275pipeBind2(12, 15, brand_r10.updatedAt, "shortDate"), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(32, _c3, brand_r10.isActive, !brand_r10.isActive));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", brand_r10.isActive ? \u0275\u0275pipeBind1(15, 18, "BRANDS.STATUS_ACTIVE") : \u0275\u0275pipeBind1(16, 20, "BRANDS.STATUS_INACTIVE"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 22, "BRANDS.BRAND_CODE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 24, brand_r10.slug));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 26, "BRANDS.TOTAL_PRODUCTS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(brand_r10.productsCount || 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 28, "COMMON.VIEW"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 30, "COMMON.EDIT"), " ");
  }
}
var BrandListComponent = class _BrandListComponent {
  brandService;
  languageService;
  translate;
  notificationService;
  brands = [];
  isLoading = false;
  totalCount = 0;
  pageSize = 10;
  pageNumber = 1;
  totalPages = 1;
  searchControl = new FormControl("");
  statusControl = new FormControl(null);
  showModal = false;
  selectedBrand = null;
  // Delete Confirmation Modal
  showDeleteModal = false;
  brandToDelete = null;
  deleteModalConfig = {
    type: "danger",
    title: "",
    message: "",
    confirmText: "",
    cancelText: ""
  };
  destroy$ = new Subject();
  // Helper for pagination template
  get Math() {
    return Math;
  }
  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  // KPI Helpers
  getActiveCount() {
    return this.brands.filter((b) => b.isActive).length;
  }
  getInactiveCount() {
    return this.brands.filter((b) => !b.isActive).length;
  }
  constructor(brandService, languageService, translate, notificationService) {
    this.brandService = brandService;
    this.languageService = languageService;
    this.translate = translate;
    this.notificationService = notificationService;
  }
  ngOnInit() {
    this.translate.use(this.languageService.currentLanguage);
    this.languageService.currentLanguage$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.translate.use(lang);
      this.loadBrands();
    });
    this.searchControl.valueChanges.pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$)).subscribe(() => {
      this.pageNumber = 1;
      this.loadBrands();
    });
    this.statusControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.pageNumber = 1;
      this.loadBrands();
    });
    this.loadBrands();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadBrands() {
    this.isLoading = true;
    const search = this.searchControl.value || void 0;
    const isActive = this.statusControl.value ?? void 0;
    this.brandService.getPaged(this.pageNumber, this.pageSize, search, isActive).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.brands = response.items;
        this.totalCount = response.totalCount;
        this.totalPages = response.totalPages || Math.ceil(response.totalCount / this.pageSize);
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Failed to load brands:", error);
        this.isLoading = false;
        this.notificationService.error(this.translate.instant("COMMON.ERROR"));
        this.brands = [];
        this.totalCount = 0;
      }
    });
  }
  onPageChange(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.pageNumber = page;
    this.loadBrands();
  }
  toggleStatus(brand) {
    this.brandService.toggleStatus(brand).pipe(takeUntil(this.destroy$)).subscribe({
      next: (updated) => {
        const index = this.brands.findIndex((b) => b.id === brand.id);
        if (index !== -1) {
          this.brands[index].isActive = !brand.isActive;
        }
        this.notificationService.success(this.translate.instant("MESSAGES.BRAND_STATUS_UPDATED"));
      },
      error: (error) => {
        console.error("Failed to toggle brand status:", error);
        this.notificationService.error(this.translate.instant("COMMON.ERROR"));
      }
    });
  }
  openAddModal() {
    this.selectedBrand = null;
    this.showModal = true;
  }
  editBrand(brand) {
    this.selectedBrand = __spreadValues({}, brand);
    this.showModal = true;
  }
  // Delete with confirmation modal
  deleteBrand(brand) {
    this.brandToDelete = brand;
    this.deleteModalConfig = {
      type: "danger",
      title: this.translate.instant("BRANDS.DELETE_TITLE"),
      message: this.translate.instant("BRANDS.DELETE_MESSAGE"),
      confirmText: this.translate.instant("BRANDS.DELETE_BUTTON"),
      cancelText: this.translate.instant("COMMON.CANCEL"),
      itemName: brand.name
    };
    this.showDeleteModal = true;
  }
  onConfirmDelete() {
    if (!this.brandToDelete)
      return;
    this.brandService.delete(this.brandToDelete.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.notificationService.success(this.translate.instant("MESSAGES.BRAND_DELETED"));
        this.loadBrands();
        this.closeDeleteModal();
      },
      error: (error) => {
        console.error("Failed to delete brand:", error);
        this.notificationService.error(this.translate.instant("COMMON.ERROR"));
        this.closeDeleteModal();
      }
    });
  }
  closeDeleteModal() {
    this.showDeleteModal = false;
    this.brandToDelete = null;
  }
  closeModal() {
    this.showModal = false;
    this.selectedBrand = null;
  }
  onSaveBrand(brandData) {
    const enTranslation = brandData.translations?.find((t) => t.languageCode === "en");
    const name = enTranslation?.name || "";
    const description = enTranslation?.description || "";
    const translations = (brandData.translations || []).map((t) => ({
      languageCode: t.languageCode,
      name: t.name,
      description: t.description || "",
      slug: brandData.slug
      // Use same slug for all translations
    }));
    if (this.selectedBrand) {
      const updateRequest = {
        id: this.selectedBrand.id,
        name,
        slug: brandData.slug,
        description,
        logoUrl: brandData.logoUrl,
        website: brandData.website,
        isActive: brandData.isActive,
        translations
      };
      this.brandService.update(this.selectedBrand.id, updateRequest).pipe(takeUntil(this.destroy$)).subscribe({
        next: (updatedBrand) => {
          this.notificationService.success(this.translate.instant("MESSAGES.BRAND_UPDATED"));
          this.closeModal();
          this.loadBrands();
        },
        error: (error) => {
          console.error("Failed to update brand:", error);
          this.notificationService.error(this.translate.instant("COMMON.ERROR"));
        }
      });
    } else {
      const createRequest = {
        name,
        slug: brandData.slug,
        description,
        logoUrl: brandData.logoUrl,
        website: brandData.website,
        translations
      };
      this.brandService.create(createRequest).pipe(takeUntil(this.destroy$)).subscribe({
        next: (newBrand) => {
          this.notificationService.success(this.translate.instant("MESSAGES.BRAND_CREATED"));
          this.closeModal();
          this.loadBrands();
        },
        error: (error) => {
          console.error("Failed to create brand:", error);
          this.notificationService.error(this.translate.instant("COMMON.ERROR"));
        }
      });
    }
  }
  static \u0275fac = function BrandListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrandListComponent)(\u0275\u0275directiveInject(BrandService), \u0275\u0275directiveInject(LanguageService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(NotificationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrandListComponent, selectors: [["app-brand-list"]], decls: 147, vars: 108, consts: [[1, "min-h-full"], [1, "hidden", "md:block", "p-6", "lg:p-8", "space-y-6"], [1, "flex", "items-center", "gap-2", "text-sm", "text-slate-500"], ["routerLink", "/dashboard", 1, "hover:text-indigo-600", "transition-colors"], [1, "fas", "fa-chevron-right", "text-xs", "text-slate-300", "rtl:rotate-180"], [1, "text-slate-400"], [1, "text-slate-800", "font-medium"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-start", "lg:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-slate-800"], [1, "mt-1", "text-sm", "text-slate-500"], [1, "flex", "items-center", "gap-3"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-white", "border", "border-slate-200", "text-slate-700", "font-medium", "rounded-xl", "hover:bg-slate-50", "hover:border-slate-300", "transition-all", "duration-200"], [1, "fas", "fa-download", "text-sm"], ["routerLink", "/brands/create", 1, "inline-flex", "items-center", "gap-2", "px-5", "py-2.5", "bg-indigo-600", "text-white", "font-semibold", "rounded-xl", "hover:bg-indigo-700", "transition-all", "duration-200", "shadow-lg", "shadow-indigo-200", "hover:-translate-y-0.5", "active:scale-[0.98]"], [1, "fas", "fa-plus"], [1, "grid", "grid-cols-3", "gap-4"], [1, "bg-white", "rounded-xl", "border", "border-slate-100", "p-5", "flex", "items-center", "gap-4", "hover:shadow-md", "transition-shadow"], [1, "w-12", "h-12", "rounded-xl", "bg-indigo-50", "flex", "items-center", "justify-center"], [1, "fas", "fa-tags", "text-xl", "text-indigo-600"], [1, "text-xs", "font-medium", "text-slate-500", "uppercase", "tracking-wide"], [1, "w-12", "h-12", "rounded-xl", "bg-emerald-50", "flex", "items-center", "justify-center"], [1, "fas", "fa-check-circle", "text-xl", "text-emerald-600"], [1, "w-12", "h-12", "rounded-xl", "bg-amber-50", "flex", "items-center", "justify-center"], [1, "fas", "fa-clock", "text-xl", "text-amber-600"], [1, "bg-white", "rounded-2xl", "border", "border-slate-100", "shadow-sm", "overflow-hidden"], [1, "px-6", "py-4", "border-b", "border-slate-100", "flex", "flex-col", "lg:flex-row", "lg:items-center", "justify-between", "gap-4"], [1, "relative"], [1, "fas", "fa-search", "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-slate-400", "text-sm"], ["type", "text", 1, "w-64", "pl-10", "pr-4", "py-2.5", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", 3, "formControl", "placeholder"], [1, "appearance-none", "pl-4", "pr-10", "py-2.5", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "cursor-pointer", 3, "formControl"], [3, "ngValue"], [1, "fas", "fa-chevron-down", "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-slate-400", "text-xs", "pointer-events-none"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "text-sm", "font-medium", "text-slate-600", "hover:bg-slate-50", "rounded-xl", "transition-colors"], [1, "fas", "fa-sliders-h"], [1, "inline-flex", "items-center", "gap-1", "font-medium", "text-slate-700", "hover:text-indigo-600", "transition-colors"], [1, "fas", "fa-arrow-down", "text-xs"], [1, "overflow-x-auto"], [1, "w-full"], [1, "bg-slate-50/80", "border-b", "border-slate-100"], [1, "px-6", "py-4", "text-start", "w-12"], ["type", "checkbox", 1, "w-4", "h-4", "rounded", "border-slate-300", "text-indigo-600", "focus:ring-indigo-500"], [1, "px-6", "py-4", "text-start"], [1, "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wider"], [1, "px-6", "py-4", "text-end", "w-24"], [1, "divide-y", "divide-slate-50"], [4, "ngIf"], ["class", "transition-colors duration-200", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "px-6 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50", 4, "ngIf"], [1, "md:hidden", "pb-24"], [1, "p-4", "space-y-4"], [1, "fas", "fa-search", "absolute", "left-4", "top-1/2", "-translate-y-1/2", "text-slate-400"], ["type", "text", 1, "w-full", "pl-12", "pr-4", "py-3.5", "bg-white", "border", "border-slate-200", "rounded-2xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "shadow-sm", 3, "formControl", "placeholder"], [1, "flex", "items-center", "gap-2", "overflow-x-auto", "pb-2", "scrollbar-hide"], [1, "flex-shrink-0", "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-full", "text-sm", "font-medium", "transition-all", 3, "click", "ngClass"], ["class", "fas fa-check text-xs", 4, "ngIf"], [1, "flex-shrink-0", "px-4", "py-2", "rounded-full", "text-sm", "font-medium", "bg-white", "border", "border-slate-200", "text-slate-600"], [1, "px-4", "space-y-3"], ["class", "py-16 text-center", 4, "ngIf"], ["class", "bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden", 4, "ngFor", "ngForOf"], [3, "confirmed", "cancelled", "isOpen", "config"], ["class", "animate-pulse", 4, "ngFor", "ngForOf"], [1, "animate-pulse"], [1, "px-6", "py-4"], [1, "w-4", "h-4", "bg-slate-200", "rounded"], [1, "w-10", "h-10", "bg-slate-200", "rounded-lg"], [1, "space-y-2"], [1, "w-32", "h-4", "bg-slate-200", "rounded"], [1, "w-24", "h-3", "bg-slate-100", "rounded"], [1, "w-16", "h-4", "bg-slate-200", "rounded"], [1, "w-20", "h-6", "bg-slate-200", "rounded-lg"], [1, "w-16", "h-6", "bg-slate-200", "rounded-full"], [1, "w-24", "h-4", "bg-slate-200", "rounded"], [1, "w-12", "h-4", "bg-slate-200", "rounded"], ["colspan", "7", 1, "px-6", "py-16", "text-center"], [1, "flex", "flex-col", "items-center"], [1, "w-16", "h-16", "bg-slate-100", "rounded-full", "flex", "items-center", "justify-center", "mb-4"], [1, "fas", "fa-tags", "text-2xl", "text-slate-300"], [1, "text-lg", "font-semibold", "text-slate-800", "mb-1"], [1, "text-sm", "text-slate-500", "mb-6"], [1, "inline-flex", "items-center", "gap-2", "px-5", "py-2.5", "bg-indigo-600", "text-white", "font-medium", "rounded-xl", "hover:bg-indigo-700", "transition-colors", 3, "click"], [1, "transition-colors", "duration-200", 3, "ngClass"], [1, "w-10", "h-10", "bg-slate-100", "rounded-lg", "flex", "items-center", "justify-center", "overflow-hidden", "border", "border-slate-200"], ["class", "w-full h-full object-cover", 3, "src", "alt", 4, "ngIf"], ["class", "fas fa-image text-slate-300", 4, "ngIf"], [1, "text-sm", "font-semibold", "text-slate-800"], [1, "text-xs", "text-slate-500"], [1, "text-sm", "font-medium", "text-slate-700"], [1, "text-xs", "text-slate-400", "ms-1"], [1, "px-2.5", "py-1", "bg-slate-100", "text-slate-600", "text-xs", "font-medium", "rounded-lg"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "w-1.5", "h-1.5", "rounded-full", 3, "ngClass"], [1, "text-sm", "text-slate-500"], [1, "px-6", "py-4", "text-end"], [1, "flex", "items-center", "justify-end", "gap-1"], [1, "p-2", "text-slate-400", "hover:text-indigo-600", "hover:bg-indigo-50", "rounded-lg", "transition-all", 3, "click", "title"], [1, "fas", "fa-pen", "text-sm"], [1, "p-2", "text-slate-400", "hover:text-red-600", "hover:bg-red-50", "rounded-lg", "transition-all", 3, "click", "title"], [1, "fas", "fa-trash", "text-sm"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "fas", "fa-image", "text-slate-300"], [1, "px-6", "py-4", "border-t", "border-slate-100", "flex", "items-center", "justify-between", "bg-slate-50/50"], [1, "font-medium", "text-slate-700"], [1, "flex", "items-center", "gap-2"], [1, "appearance-none", "px-2", "py-1", "bg-white", "border", "border-slate-200", "rounded-lg", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], ["value", "10"], ["value", "25"], ["value", "50"], [1, "flex", "items-center", "gap-1", "ms-4"], [1, "px-3", "py-1.5", "text-sm", "font-medium", "text-slate-600", "hover:bg-slate-100", "rounded-lg", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", 3, "click", "disabled"], [1, "flex", "items-center", "gap-1"], [4, "ngFor", "ngForOf"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "text-sm", "font-medium", "rounded-lg", "transition-colors", 3, "click", "ngClass"], [1, "fas", "fa-check", "text-xs"], ["class", "bg-white rounded-2xl border border-slate-100 p-4 animate-pulse", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-2xl", "border", "border-slate-100", "p-4", "animate-pulse"], [1, "flex", "items-start", "gap-3"], [1, "w-12", "h-12", "bg-slate-200", "rounded-xl"], [1, "flex-1", "space-y-2"], [1, "py-16", "text-center"], [1, "w-16", "h-16", "bg-slate-100", "rounded-full", "flex", "items-center", "justify-center", "mx-auto", "mb-4"], [1, "p-4"], [1, "w-12", "h-12", "bg-slate-100", "rounded-xl", "flex", "items-center", "justify-center", "overflow-hidden", "border", "border-slate-200", "flex-shrink-0"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-bold", "text-slate-800"], [1, "flex-shrink-0", "px-3", "py-1", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "grid", "grid-cols-2", "gap-3", "mt-4"], [1, "text-[10px]", "font-medium", "text-slate-400", "uppercase", "tracking-wide"], [1, "text-sm", "font-bold", "text-slate-800", "mt-0.5"], [1, "grid", "grid-cols-2", "border-t", "border-slate-100"], [1, "flex", "items-center", "justify-center", "gap-2", "py-3", "text-sm", "font-medium", "text-slate-600", "hover:bg-slate-50", "transition-colors"], [1, "fas", "fa-eye"], [1, "flex", "items-center", "justify-center", "gap-2", "py-3", "text-sm", "font-medium", "text-indigo-600", "bg-indigo-50", "hover:bg-indigo-100", "transition-colors", 3, "click"], [1, "fas", "fa-pen"]], template: function BrandListComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(27, "a", 13);
      \u0275\u0275element(28, "i", 14);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 15)(32, "div", 16)(33, "div", 17);
      \u0275\u0275element(34, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div")(36, "p", 19);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "p", 8);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 16)(42, "div", 20);
      \u0275\u0275element(43, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div")(45, "p", 19);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p", 8);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 16)(51, "div", 22);
      \u0275\u0275element(52, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div")(54, "p", 19);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p", 8);
      \u0275\u0275text(58);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(59, "div", 24)(60, "div", 25)(61, "div", 10)(62, "div", 26);
      \u0275\u0275element(63, "i", 27)(64, "input", 28);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 26)(67, "select", 29)(68, "option", 30);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "option", 30);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "option", 30);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(77, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "button", 32);
      \u0275\u0275element(79, "i", 33);
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 2)(83, "span");
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "button", 34);
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275element(89, "i", 35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "div", 36)(91, "table", 37)(92, "thead")(93, "tr", 38)(94, "th", 39);
      \u0275\u0275element(95, "input", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "th", 41)(97, "span", 42);
      \u0275\u0275text(98);
      \u0275\u0275pipe(99, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "th", 41)(101, "span", 42);
      \u0275\u0275text(102);
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "th", 41)(105, "span", 42);
      \u0275\u0275text(106);
      \u0275\u0275pipe(107, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "th", 41)(109, "span", 42);
      \u0275\u0275text(110);
      \u0275\u0275pipe(111, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "th", 41)(113, "span", 42);
      \u0275\u0275text(114);
      \u0275\u0275pipe(115, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(116, "th", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "tbody", 44);
      \u0275\u0275template(118, BrandListComponent_ng_container_118_Template, 2, 2, "ng-container", 45)(119, BrandListComponent_tr_119_Template, 15, 9, "tr", 45)(120, BrandListComponent_tr_120_Template, 39, 32, "tr", 46);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(121, BrandListComponent_div_121_Template, 37, 27, "div", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 48)(123, "div", 49)(124, "div", 26);
      \u0275\u0275element(125, "i", 50)(126, "input", 51);
      \u0275\u0275pipe(127, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "div", 52)(129, "button", 53);
      \u0275\u0275listener("click", function BrandListComponent_Template_button_click_129_listener() {
        return ctx.statusControl.setValue(true);
      });
      \u0275\u0275template(130, BrandListComponent_i_130_Template, 1, 0, "i", 54);
      \u0275\u0275text(131);
      \u0275\u0275pipe(132, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "button", 53);
      \u0275\u0275listener("click", function BrandListComponent_Template_button_click_133_listener() {
        return ctx.statusControl.setValue(false);
      });
      \u0275\u0275text(134);
      \u0275\u0275pipe(135, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "button", 55);
      \u0275\u0275text(137);
      \u0275\u0275pipe(138, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "button", 55);
      \u0275\u0275text(140);
      \u0275\u0275pipe(141, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(142, "div", 56);
      \u0275\u0275template(143, BrandListComponent_ng_container_143_Template, 2, 2, "ng-container", 45)(144, BrandListComponent_div_144_Template, 9, 6, "div", 57)(145, BrandListComponent_div_145_Template, 40, 35, "div", 58);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(146, "app-confirm-modal", 59);
      \u0275\u0275listener("confirmed", function BrandListComponent_Template_app_confirm_modal_confirmed_146_listener() {
        return ctx.onConfirmDelete();
      })("cancelled", function BrandListComponent_Template_app_confirm_modal_cancelled_146_listener() {
        return ctx.closeDeleteModal();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 48, "COMMON.HOME"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 50, "SIDEBAR.INVENTORY"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 52, "BRANDS.TITLE"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 54, "BRANDS.TITLE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 56, "BRANDS.SUBTITLE"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 58, "COMMON.EXPORT"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 60, "BRANDS.ADD_BRAND"), " ");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 62, "BRANDS.TOTAL_BRANDS"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalCount);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 64, "BRANDS.STATUS_ACTIVE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getActiveCount());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 66, "BRANDS.PENDING_REVIEW"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getInactiveCount());
      \u0275\u0275advance(6);
      \u0275\u0275property("formControl", ctx.searchControl)("placeholder", \u0275\u0275pipeBind1(65, 68, "BRANDS.SEARCH_PLACEHOLDER"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formControl", ctx.statusControl);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 70, "BRANDS.STATUS_ALL"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngValue", true);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 72, "BRANDS.STATUS_ACTIVE"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngValue", false);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(76, 74, "BRANDS.STATUS_INACTIVE"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(81, 76, "COMMON.MORE_FILTERS"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(85, 78, "COMMON.SORT_BY"), ":");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(88, 80, "COMMON.NAME"), " ");
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(99, 82, "BRANDS.BRAND_DETAILS"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(103, 84, "BRANDS.PRODUCTS"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(107, 86, "COMMON.CATEGORY"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(111, 88, "COMMON.STATUS"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(115, 90, "COMMON.LAST_UPDATED"));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.brands.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.brands);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalCount > 0);
      \u0275\u0275advance(5);
      \u0275\u0275property("formControl", ctx.searchControl)("placeholder", \u0275\u0275pipeBind1(127, 92, "BRANDS.SEARCH_CODES"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(102, _c0, ctx.statusControl.value === true, ctx.statusControl.value !== true));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.statusControl.value === true);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(132, 94, "BRANDS.STATUS_ACTIVE"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(105, _c0, ctx.statusControl.value === false, ctx.statusControl.value !== false));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(135, 96, "BRANDS.STATUS_INACTIVE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(138, 98, "BRANDS.HIGH_STOCK"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(141, 100, "BRANDS.LOW_STOCK"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.brands.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.brands);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showDeleteModal)("config", ctx.deleteModalConfig);
    }
  }, dependencies: [NgClass, NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, FormControlDirective, RouterLink, ConfirmModalComponent, UpperCasePipe, DatePipe, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrandListComponent, { className: "BrandListComponent", filePath: "src\\app\\features\\brands\\pages\\brand-list\\brand-list.component.ts", lineNumber: 15 });
})();

// src/app/features/brands/components/brand-form/brand-form.component.ts
function BrandFormComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 40);
  }
}
function BrandFormComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 40);
  }
}
function BrandFormComponent_div_26_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 48);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "VALIDATION.BRAND.NAME_REQUIRED"));
  }
}
function BrandFormComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div")(2, "label", 42);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 43);
    \u0275\u0275template(6, BrandFormComponent_div_26_div_6_Template, 4, 3, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "label", 45);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "textarea", 46);
    \u0275\u0275elementStart(12, "p", 47);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.getTranslation("en"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "BRANDS.BRAND_NAME"), " (English) * ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-red-300", ((tmp_3_0 = ctx_r0.getTranslation("en").get("name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r0.getTranslation("en").get("name")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r0.getTranslation("en").get("name")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.getTranslation("en").get("name")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "BRANDS.BRAND_DESCRIPTION"), " (English) ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ((tmp_6_0 = ctx_r0.getTranslation("en").get("description")) == null ? null : tmp_6_0.value == null ? null : tmp_6_0.value.length) || 0, " / 500 ");
  }
}
function BrandFormComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div")(2, "label", 49);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "label", 51);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "textarea", 52);
    \u0275\u0275elementStart(11, "p", 53);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.getTranslation("ar"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "BRANDS.BRAND_NAME"), " (\u0627\u0644\u0639\u0631\u0628\u064A\u0629) ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "BRANDS.BRAND_DESCRIPTION"), " (\u0627\u0644\u0639\u0631\u0628\u064A\u0629) ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ((tmp_4_0 = ctx_r0.getTranslation("ar").get("description")) == null ? null : tmp_4_0.value == null ? null : tmp_4_0.value.length) || 0, " / 500 ");
  }
}
var BrandFormComponent = class _BrandFormComponent {
  fb;
  brand = null;
  save = new EventEmitter();
  cancel = new EventEmitter();
  brandForm;
  isEditMode = false;
  activeLanguage = "en";
  constructor(fb) {
    this.fb = fb;
    this.brandForm = this.fb.group({
      slug: ["", [Validators.required, Validators.pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)]],
      isActive: [true],
      logoUrl: [""],
      translations: this.fb.array([
        this.createTranslation("en"),
        this.createTranslation("ar")
      ])
    });
  }
  createTranslation(languageCode) {
    return this.fb.group({
      languageCode: [languageCode],
      name: ["", languageCode === "en" ? [Validators.required, Validators.maxLength(100)] : [Validators.maxLength(100)]],
      description: ["", [Validators.maxLength(500)]]
    });
  }
  get translations() {
    return this.brandForm.get("translations");
  }
  getTranslation(lang) {
    return this.translations.controls.find((c) => c.get("languageCode")?.value === lang);
  }
  get currentTranslation() {
    return this.getTranslation(this.activeLanguage);
  }
  ngOnInit() {
  }
  ngOnChanges(changes) {
    if (changes["brand"]) {
      if (this.brand) {
        this.isEditMode = true;
        this.brandForm.patchValue({
          slug: this.brand.slug,
          isActive: this.brand.isActive,
          logoUrl: this.brand.logoUrl
        });
        if (this.brand.translations) {
          this.brand.translations.forEach((t) => {
            const translationForm = this.getTranslation(t.languageCode);
            if (translationForm) {
              translationForm.patchValue(t);
            }
          });
        } else {
          this.getTranslation("en").patchValue({
            name: this.brand.name,
            description: this.brand.description
          });
        }
      } else {
        this.isEditMode = false;
        this.brandForm.reset({ isActive: true });
        this.translations.clear();
        this.translations.push(this.createTranslation("en"));
        this.translations.push(this.createTranslation("ar"));
      }
    }
  }
  setActiveLanguage(lang) {
    this.activeLanguage = lang;
  }
  toggleActive() {
    const current = this.brandForm.get("isActive")?.value;
    this.brandForm.patchValue({ isActive: !current });
  }
  onSubmit() {
    if (this.brandForm.valid) {
      const formValue = this.brandForm.value;
      const translations = formValue.translations.filter((t) => t.name?.trim());
      this.save.emit(__spreadProps(__spreadValues({}, formValue), {
        translations
      }));
    } else {
      this.brandForm.markAllAsTouched();
      if (this.getTranslation("en").invalid) {
        this.activeLanguage = "en";
      }
    }
  }
  onCancel() {
    this.cancel.emit();
  }
  static \u0275fac = function BrandFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrandFormComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrandFormComponent, selectors: [["app-brand-form"]], inputs: { brand: "brand" }, outputs: { save: "save", cancel: "cancel" }, features: [\u0275\u0275NgOnChangesFeature], decls: 78, vars: 56, consts: [[1, "bg-white", "rounded-lg", "px-4", "pt-5", "pb-4", "sm:p-6", "sm:pb-4"], [1, "sm:flex", "sm:items-start"], [1, "mt-3", "text-center", "sm:mt-0", "sm:ms-4", "sm:text-start", "w-full"], [1, "flex", "justify-between", "items-center", "mb-5"], ["id", "modal-title", 1, "text-lg", "leading-6", "font-bold", "text-gray-900", "tracking-tight"], ["type", "button", 1, "bg-white", "rounded-md", "text-gray-400", "hover:text-gray-500", "focus:outline-none", "transition-colors", "duration-200", 3, "click"], [1, "sr-only"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "transform", "hover:rotate-90", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [3, "ngSubmit", "formGroup"], [1, "mb-6"], [1, "border-b", "border-gray-200"], ["aria-label", "Language Tabs", 1, "flex", "-mb-px"], ["type", "button", 1, "w-1/2", "py-3", "px-1", "text-center", "border-b-2", "font-medium", "text-sm", "transition-colors", 3, "click", "ngClass"], [1, "flex", "items-center", "justify-center", "gap-2"], ["class", "w-2 h-2 bg-red-500 rounded-full", 4, "ngIf"], ["class", "space-y-4", 3, "formGroup", 4, "ngIf"], [1, "mt-6", "pt-4", "border-t", "border-gray-100", "space-y-4"], [1, "text-xs", "font-medium", "text-gray-500", "uppercase", "tracking-wide"], ["for", "slug", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["type", "text", "id", "slug", "formControlName", "slug", "readonly", "", 1, "input-premium", "bg-gray-50", "text-gray-500", 3, "placeholder"], [1, "flex", "items-center", "justify-between", "p-3", "bg-gray-50", "rounded-lg", "border", "border-gray-100", "transition-colors", "hover:border-blue-100"], [1, "flex-grow", "flex", "flex-col", "items-start"], [1, "text-sm", "font-medium", "text-gray-900"], [1, "text-sm", "text-gray-500"], ["type", "button", 1, "relative", "inline-flex", "flex-shrink-0", "h-6", "w-11", "border-2", "border-transparent", "rounded-full", "cursor-pointer", "transition-colors", "ease-in-out", "duration-200", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-blue-500", 3, "click", "ngClass"], ["aria-hidden", "true", 1, "pointer-events-none", "inline-block", "h-5", "w-5", "rounded-full", "bg-white", "shadow", "transform", "ring-0", "transition", "ease-in-out", "duration-200", 3, "ngClass"], [1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], [1, "group", "flex", "justify-center", "px-6", "pt-5", "pb-6", "border-2", "border-gray-300", "border-dashed", "rounded-md", "hover:border-blue-400", "hover:bg-blue-50", "transition-all", "duration-300", "cursor-pointer"], [1, "space-y-1", "text-center"], [1, "mx-auto", "h-12", "w-12", "text-blue-500", "bg-blue-50", "rounded-full", "flex", "items-center", "justify-center", "group-hover:bg-white", "group-hover:shadow-sm", "transition-all", "duration-300"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"], [1, "flex", "text-sm", "text-gray-600", "justify-center"], [1, "font-medium", "text-blue-600"], [1, "ps-1"], [1, "text-xs", "text-gray-500"], [1, "bg-gray-50", "px-4", "py-3", "sm:px-6", "sm:flex", "sm:flex-row-reverse", "rounded-b-lg", "border-t", "border-gray-100"], ["type", "button", 1, "w-full", "sm:w-auto", "sm:ms-3", "btn-primary", "shadow-lg", "shadow-blue-500/30", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["type", "button", 1, "mt-3", "w-full", "sm:w-auto", "sm:mt-0", "sm:ms-3", "btn-secondary", 3, "click"], [1, "w-2", "h-2", "bg-red-500", "rounded-full"], [1, "space-y-4", 3, "formGroup"], ["for", "name_en", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["type", "text", "id", "name_en", "formControlName", "name", "dir", "ltr", "placeholder", "e.g. Samsung", 1, "input-premium"], [4, "ngIf"], ["for", "desc_en", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["id", "desc_en", "rows", "3", "formControlName", "description", "dir", "ltr", "placeholder", "Enter brand description...", 1, "input-premium"], [1, "mt-1", "text-xs", "text-gray-500", "text-end"], [1, "mt-1", "text-xs", "text-red-600"], ["for", "name_ar", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1", "text-right"], ["type", "text", "id", "name_ar", "formControlName", "name", "dir", "rtl", "placeholder", "\u0645\u062B\u0627\u0644: \u0633\u0627\u0645\u0633\u0648\u0646\u062C", 1, "input-premium", "text-right"], ["for", "desc_ar", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1", "text-right"], ["id", "desc_ar", "rows", "3", "formControlName", "description", "dir", "rtl", "placeholder", "\u0623\u062F\u062E\u0644 \u0648\u0635\u0641 \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629...", 1, "input-premium", "text-right"], [1, "mt-1", "text-xs", "text-gray-500", "text-start"]], template: function BrandFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function BrandFormComponent_Template_button_click_8_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementStart(9, "span", 6);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 7);
      \u0275\u0275element(13, "path", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "form", 9);
      \u0275\u0275listener("ngSubmit", function BrandFormComponent_Template_form_ngSubmit_14_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(15, "div", 10)(16, "div", 11)(17, "nav", 12)(18, "button", 13);
      \u0275\u0275listener("click", function BrandFormComponent_Template_button_click_18_listener() {
        return ctx.setActiveLanguage("en");
      });
      \u0275\u0275elementStart(19, "span", 14);
      \u0275\u0275text(20, " \u{1F1FA}\u{1F1F8} English ");
      \u0275\u0275template(21, BrandFormComponent_span_21_Template, 1, 0, "span", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "button", 13);
      \u0275\u0275listener("click", function BrandFormComponent_Template_button_click_22_listener() {
        return ctx.setActiveLanguage("ar");
      });
      \u0275\u0275elementStart(23, "span", 14);
      \u0275\u0275text(24, " \u{1F1F8}\u{1F1E6} \u0627\u0644\u0639\u0631\u0628\u064A\u0629 ");
      \u0275\u0275template(25, BrandFormComponent_span_25_Template, 1, 0, "span", 15);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(26, BrandFormComponent_div_26_Template, 14, 11, "div", 16)(27, BrandFormComponent_div_27_Template, 13, 8, "div", 16);
      \u0275\u0275elementStart(28, "div", 17)(29, "p", 18);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div")(33, "label", 19);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "input", 20);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 21)(39, "span", 22)(40, "span", 23);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span", 24);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "button", 25);
      \u0275\u0275listener("click", function BrandFormComponent_Template_button_click_46_listener() {
        return ctx.toggleActive();
      });
      \u0275\u0275elementStart(47, "span", 6);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "span", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div")(52, "label", 27);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 28)(56, "div", 29)(57, "div", 30);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(58, "svg", 31);
      \u0275\u0275element(59, "path", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(60, "div", 33)(61, "span", 34);
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "span", 35);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "p", 36);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(70, "div", 37)(71, "button", 38);
      \u0275\u0275listener("click", function BrandFormComponent_Template_button_click_71_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "button", 39);
      \u0275\u0275listener("click", function BrandFormComponent_Template_button_click_75_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_14_0;
      let tmp_16_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? \u0275\u0275pipeBind1(6, 24, "BRANDS.EDIT_BRAND") : \u0275\u0275pipeBind1(7, 26, "BRANDS.ADD_NEW_BRAND"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 28, "COMMON.CLOSE"));
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.brandForm);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", ctx.activeLanguage === "en" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.getTranslation("en").invalid && ctx.getTranslation("en").touched);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.activeLanguage === "ar" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.getTranslation("ar").invalid && ctx.getTranslation("ar").touched);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeLanguage === "en");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeLanguage === "ar");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 30, "COMMON.SETTINGS"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 32, "BRANDS.BRAND_SLUG"), " * ");
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(37, 34, "BRANDS.PLACEHOLDER_NAME"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 36, "BRANDS.ACTIVE_STATUS"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 38, "BRANDS.ACTIVE_STATUS_DESC"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ((tmp_14_0 = ctx.brandForm.get("isActive")) == null ? null : tmp_14_0.value) ? "bg-blue-600" : "bg-gray-200");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 40, "COMMON.STATUS"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ((tmp_16_0 = ctx.brandForm.get("isActive")) == null ? null : tmp_16_0.value) ? "translate-x-5 rtl:-translate-x-5" : "translate-x-0");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 42, "BRANDS.BRAND_LOGO"));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 44, "BRANDS.UPLOAD_LOGO"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 46, "BRANDS.DRAG_DROP"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 48, "BRANDS.FILE_TYPES"));
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.brandForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? \u0275\u0275pipeBind1(73, 50, "BRANDS.UPDATE_BRAND") : \u0275\u0275pipeBind1(74, 52, "BRANDS.CREATE_BRAND"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(77, 54, "COMMON.CANCEL"), " ");
    }
  }, dependencies: [NgClass, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrandFormComponent, { className: "BrandFormComponent", filePath: "src\\app\\features\\brands\\components\\brand-form\\brand-form.component.ts", lineNumber: 10 });
})();

// src/app/features/brands/brands.module.ts
var routes = [
  { path: "", component: BrandListComponent },
  {
    path: "create",
    loadComponent: () => import("./chunk-34POLPIG.js").then((m) => m.CreateBrandComponent)
  }
];
var BrandsModule = class _BrandsModule {
  static \u0275fac = function BrandsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrandsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BrandsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    TranslateModule,
    LanguageSwitcherComponent,
    // Standalone component
    ConfirmModalComponent
    // Standalone component
  ] });
};
export {
  BrandsModule
};
//# sourceMappingURL=chunk-B6NBW5FA.js.map
