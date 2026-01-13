import {
  WarehousesService
} from "./chunk-ZFKGYVVN.js";
import {
  LanguageService
} from "./chunk-SBRLR34M.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
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
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-74XXAL65.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-BOQBRULU.js";
import {
  CommonModule,
  NgIf,
  Subject,
  finalize,
  inject,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IGAGZNZV.js";
import "./chunk-N7TOP6ZD.js";

// src/app/features/warehouses/pages/warehouse-form/warehouse-form.component.ts
function WarehouseFormComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "div", 32);
    \u0275\u0275elementEnd();
  }
}
function WarehouseFormComponent_form_27_p_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 89);
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "WAREHOUSES.VALIDATION.NAME_REQUIRED"), " ");
  }
}
function WarehouseFormComponent_form_27_p_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 89);
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "WAREHOUSES.VALIDATION.CODE_REQUIRED"), " ");
  }
}
function WarehouseFormComponent_form_27_p_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 89);
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "WAREHOUSES.VALIDATION.ADDRESS_REQUIRED"), " ");
  }
}
function WarehouseFormComponent_form_27_p_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 89);
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "WAREHOUSES.VALIDATION.CITY_REQUIRED"), " ");
  }
}
function WarehouseFormComponent_form_27_p_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 89);
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "WAREHOUSES.VALIDATION.COUNTRY_REQUIRED"), " ");
  }
}
function WarehouseFormComponent_form_27_i_169_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 91);
  }
}
function WarehouseFormComponent_form_27_i_170_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 92);
  }
}
function WarehouseFormComponent_form_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 33);
    \u0275\u0275listener("ngSubmit", function WarehouseFormComponent_form_27_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 34)(2, "div", 35)(3, "div", 36)(4, "div", 37)(5, "div", 38);
    \u0275\u0275element(6, "i", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "h3", 19);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 40);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 41)(15, "div", 42)(16, "div")(17, "label", 43);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementStart(20, "span", 44);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "input", 45);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275template(24, WarehouseFormComponent_form_27_p_24_Template, 4, 3, "p", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div")(26, "label", 43);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementStart(29, "span", 44);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 47)(32, "input", 48);
    \u0275\u0275listener("input", function WarehouseFormComponent_form_27_Template_input_input_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toUpperCase("code"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 49);
    \u0275\u0275listener("click", function WarehouseFormComponent_form_27_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateCode());
    });
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "p", 50);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, WarehouseFormComponent_form_27_p_39_Template, 4, 3, "p", 46);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 36)(41, "div", 37)(42, "div", 51);
    \u0275\u0275element(43, "i", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div")(45, "h3", 19);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p", 40);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 53)(52, "div")(53, "label", 43);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementStart(56, "span", 44);
    \u0275\u0275text(57, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(58, "textarea", 54);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275template(60, WarehouseFormComponent_form_27_p_60_Template, 4, 3, "p", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 55)(62, "div")(63, "label", 43);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementStart(66, "span", 44);
    \u0275\u0275text(67, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(68, "input", 56);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275template(70, WarehouseFormComponent_form_27_p_70_Template, 4, 3, "p", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div")(72, "label", 43);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "input", 57);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div")(78, "label", 43);
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "translate");
    \u0275\u0275elementStart(81, "span", 44);
    \u0275\u0275text(82, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "select", 58)(84, "option", 59);
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "option", 60);
    \u0275\u0275text(88, "United Arab Emirates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "option", 61);
    \u0275\u0275text(90, "Saudi Arabia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "option", 62);
    \u0275\u0275text(92, "Egypt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "option", 63);
    \u0275\u0275text(94, "Jordan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "option", 64);
    \u0275\u0275text(96, "Kuwait");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(97, WarehouseFormComponent_form_27_p_97_Template, 4, 3, "p", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 42)(99, "div")(100, "label", 43);
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(103, "input", 65);
    \u0275\u0275pipe(104, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(105, "div", 36)(106, "div", 37)(107, "div", 66);
    \u0275\u0275element(108, "i", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "div")(110, "h3", 19);
    \u0275\u0275text(111);
    \u0275\u0275pipe(112, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "p", 40);
    \u0275\u0275text(114);
    \u0275\u0275pipe(115, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(116, "div", 68)(117, "div", 42)(118, "div")(119, "label", 43);
    \u0275\u0275text(120);
    \u0275\u0275pipe(121, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(122, "input", 69);
    \u0275\u0275pipe(123, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "div")(125, "label", 43);
    \u0275\u0275text(126);
    \u0275\u0275pipe(127, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(128, "input", 70);
    \u0275\u0275pipe(129, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(130, "div", 71)(131, "div", 36)(132, "div", 72)(133, "h3", 19);
    \u0275\u0275text(134);
    \u0275\u0275pipe(135, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(136, "div", 41)(137, "div")(138, "label", 73);
    \u0275\u0275element(139, "input", 74);
    \u0275\u0275elementStart(140, "div")(141, "span", 75);
    \u0275\u0275text(142);
    \u0275\u0275pipe(143, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "p", 76);
    \u0275\u0275text(145);
    \u0275\u0275pipe(146, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(147, "div", 77)(148, "div", 78)(149, "div", 79);
    \u0275\u0275element(150, "i", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "div")(152, "h4", 81);
    \u0275\u0275text(153);
    \u0275\u0275pipe(154, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "p", 82);
    \u0275\u0275text(156);
    \u0275\u0275pipe(157, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(158, "div", 83)(159, "span", 84)(160, "span", 44);
    \u0275\u0275text(161, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(162);
    \u0275\u0275pipe(163, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "div", 85)(165, "a", 86);
    \u0275\u0275text(166);
    \u0275\u0275pipe(167, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "button", 87);
    \u0275\u0275template(169, WarehouseFormComponent_form_27_i_169_Template, 1, 0, "i", 30)(170, WarehouseFormComponent_form_27_i_170_Template, 1, 0, "i", 88);
    \u0275\u0275text(171);
    \u0275\u0275pipe(172, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.warehouseForm);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 42, "WAREHOUSES.CREATE.GENERAL_INFO"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 44, "WAREHOUSES.CREATE.GENERAL_INFO_DESC"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 46, "WAREHOUSES.NAME"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(23, 48, "WAREHOUSES.PLACEHOLDERS.NAME"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showError("name", "required"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 50, "WAREHOUSES.CODE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 52, "COMMON.AUTOFILL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 54, "WAREHOUSES.VALIDATION.CODE_FORMAT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showError("code", "required"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 56, "WAREHOUSES.ADDRESS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 58, "WAREHOUSES.CREATE.ADDRESS_DESC"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 60, "WAREHOUSES.ADDRESS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(59, 62, "WAREHOUSES.PLACEHOLDERS.ADDRESS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showError("address", "required"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(65, 64, "WAREHOUSES.CITY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(69, 66, "WAREHOUSES.PLACEHOLDERS.CITY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showError("city", "required"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(74, 68, "WAREHOUSES.STATE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(76, 70, "WAREHOUSES.PLACEHOLDERS.STATE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(80, 72, "WAREHOUSES.COUNTRY"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(86, 74, "COMMON.SELECT"));
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r1.showError("country", "required"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(102, 76, "WAREHOUSES.POSTAL_CODE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(104, 78, "WAREHOUSES.PLACEHOLDERS.POSTAL_CODE"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(112, 80, "WAREHOUSES.CREATE.CONTACT_INFO"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(115, 82, "WAREHOUSES.CREATE.CONTACT_INFO_DESC"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(121, 84, "WAREHOUSES.PHONE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(123, 86, "WAREHOUSES.PLACEHOLDERS.PHONE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(127, 88, "WAREHOUSES.EMAIL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(129, 90, "WAREHOUSES.PLACEHOLDERS.EMAIL"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(135, 92, "WAREHOUSES.CREATE.STATUS_SETTINGS"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(143, 94, "WAREHOUSES.SET_DEFAULT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(146, 96, "WAREHOUSES.SET_DEFAULT_DESC"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(154, 98, "WAREHOUSES.CREATE.INFO_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(157, 100, "WAREHOUSES.CREATE.INFO_DESC"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(163, 102, "WAREHOUSES.REQUIRED_FIELDS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(167, 104, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.warehouseForm.invalid || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(172, 106, ctx_r1.isEditMode ? "COMMON.UPDATE" : "WAREHOUSES.CREATE.SUBMIT"), " ");
  }
}
function WarehouseFormComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275element(1, "div", 32);
    \u0275\u0275elementEnd();
  }
}
function WarehouseFormComponent_form_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 94);
    \u0275\u0275listener("ngSubmit", function WarehouseFormComponent_form_51_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 95)(2, "div", 96);
    \u0275\u0275element(3, "i", 39);
    \u0275\u0275elementStart(4, "h3", 19);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 97)(8, "div")(9, "label", 43);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span", 44);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "input", 98);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "label", 43);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementStart(20, "span", 44);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 47)(23, "input", 99);
    \u0275\u0275listener("input", function WarehouseFormComponent_form_51_Template_input_input_23_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toUpperCase("code"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 100);
    \u0275\u0275listener("click", function WarehouseFormComponent_form_51_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateCode());
    });
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(27, "div", 95)(28, "h3", 101);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "label", 73);
    \u0275\u0275element(32, "input", 102);
    \u0275\u0275elementStart(33, "span", 103);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 95)(37, "div", 96);
    \u0275\u0275element(38, "i", 52);
    \u0275\u0275elementStart(39, "h3", 19);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 97)(43, "div")(44, "label", 104);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "textarea", 105);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 106)(50, "div")(51, "label", 104);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "input", 107);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div")(57, "label", 104);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "input", 108);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 106)(63, "div")(64, "label", 104);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "select", 109)(68, "option", 59);
    \u0275\u0275text(69, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "option", 60);
    \u0275\u0275text(71, "UAE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "option", 61);
    \u0275\u0275text(73, "Saudi Arabia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "option", 62);
    \u0275\u0275text(75, "Egypt");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "div")(77, "label", 104);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(80, "input", 110);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(82, "div", 95)(83, "div", 96);
    \u0275\u0275element(84, "i", 67);
    \u0275\u0275elementStart(85, "h3", 19);
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 111)(89, "div")(90, "label", 104);
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(93, "input", 112);
    \u0275\u0275pipe(94, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div")(96, "label", 104);
    \u0275\u0275text(97);
    \u0275\u0275pipe(98, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(99, "input", 113);
    \u0275\u0275pipe(100, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.warehouseForm);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 23, "WAREHOUSES.CREATE.GENERAL_INFO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 25, "WAREHOUSES.NAME"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 27, "WAREHOUSES.PLACEHOLDERS.NAME"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 29, "WAREHOUSES.CODE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 31, "COMMON.AUTOFILL"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 33, "WAREHOUSES.CREATE.STATUS_SETTINGS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 35, "WAREHOUSES.SET_DEFAULT"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 37, "WAREHOUSES.ADDRESS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(46, 39, "WAREHOUSES.ADDRESS"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(48, 41, "WAREHOUSES.PLACEHOLDERS.ADDRESS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(53, 43, "WAREHOUSES.CITY"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(55, 45, "WAREHOUSES.PLACEHOLDERS.CITY"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 47, "WAREHOUSES.STATE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(61, 49, "WAREHOUSES.PLACEHOLDERS.STATE"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(66, 51, "WAREHOUSES.COUNTRY"), " *");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 53, "WAREHOUSES.POSTAL_CODE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(81, 55, "WAREHOUSES.PLACEHOLDERS.POSTAL_CODE"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(87, 57, "WAREHOUSES.CREATE.CONTACT_INFO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(92, 59, "WAREHOUSES.PHONE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(94, 61, "WAREHOUSES.PLACEHOLDERS.PHONE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(98, 63, "WAREHOUSES.EMAIL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(100, 65, "WAREHOUSES.PLACEHOLDERS.EMAIL"));
  }
}
function WarehouseFormComponent_i_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 91);
  }
}
var WarehouseFormComponent = class _WarehouseFormComponent {
  fb = inject(FormBuilder);
  warehouseService = inject(WarehousesService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  languageService = inject(LanguageService);
  destroy$ = new Subject();
  warehouseForm;
  loading = false;
  initializing = false;
  isEditMode = false;
  warehouseId;
  isMobile = false;
  get dir() {
    return this.languageService.currentLanguage === "ar" ? "rtl" : "ltr";
  }
  onResize() {
    this.isMobile = window.innerWidth < 768;
  }
  constructor() {
    this.initForm();
  }
  initForm() {
    this.warehouseForm = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(100)]],
      code: ["", [Validators.required, Validators.maxLength(20), Validators.pattern(/^[A-Z0-9\-_]+$/)]],
      address: ["", [Validators.required, Validators.maxLength(200)]],
      city: ["", [Validators.required, Validators.maxLength(100)]],
      state: ["", [Validators.maxLength(100)]],
      country: ["", [Validators.required]],
      postalCode: ["", [Validators.maxLength(20)]],
      phone: ["", [Validators.maxLength(30)]],
      email: ["", [Validators.email, Validators.maxLength(100)]],
      isDefault: [false]
    });
  }
  ngOnInit() {
    this.isMobile = window.innerWidth < 768;
    this.warehouseId = Number(this.route.snapshot.paramMap.get("id"));
    if (this.warehouseId) {
      this.isEditMode = true;
      this.loadWarehouse();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadWarehouse() {
    if (!this.warehouseId)
      return;
    this.initializing = true;
    this.warehouseService.getById(this.warehouseId).pipe(takeUntil(this.destroy$), finalize(() => this.initializing = false)).subscribe({
      next: (data) => this.warehouseForm.patchValue(data),
      error: (err) => {
        console.error("Error loading warehouse:", err);
        this.router.navigate(["/warehouses"]);
      }
    });
  }
  toUpperCase(fieldName) {
    const value = this.warehouseForm.get(fieldName)?.value;
    if (value) {
      this.warehouseForm.get(fieldName)?.setValue(value.toUpperCase(), { emitEvent: false });
    }
  }
  generateCode() {
    const prefix = "WH";
    const timestamp = Date.now().toString(36).toUpperCase().slice(-4);
    const random = Math.random().toString(36).toUpperCase().slice(-3);
    const code = `${prefix}-${timestamp}-${random}`;
    this.warehouseForm.get("code")?.setValue(code);
  }
  showError(control, error) {
    const field = this.warehouseForm.get(control);
    return !!(field?.invalid && (field.dirty || field.touched) && field.errors?.[error]);
  }
  onSubmit() {
    if (this.warehouseForm.invalid) {
      Object.keys(this.warehouseForm.controls).forEach((key) => {
        this.warehouseForm.get(key)?.markAsTouched();
      });
      return;
    }
    this.loading = true;
    const request = this.warehouseForm.value;
    const action = this.isEditMode ? this.warehouseService.update(this.warehouseId, request) : this.warehouseService.create(request);
    action.pipe(takeUntil(this.destroy$), finalize(() => this.loading = false)).subscribe({
      next: () => this.router.navigate(["/warehouses"]),
      error: (err) => {
        console.error("Error saving warehouse:", err);
      }
    });
  }
  static \u0275fac = function WarehouseFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WarehouseFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WarehouseFormComponent, selectors: [["app-warehouse-form"]], hostBindings: function WarehouseFormComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function WarehouseFormComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, \u0275\u0275resolveWindow);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 61, vars: 43, consts: [[1, "min-h-full", "bg-slate-50"], [1, "hidden", "md:block", "p-6", "lg:p-8", "space-y-6"], [1, "flex", "items-center", "gap-2", "text-sm", "text-slate-500"], ["routerLink", "/dashboard", 1, "hover:text-indigo-600", "transition-colors"], [1, "fas", "fa-chevron-right", "text-xs", "text-slate-300", "rtl:rotate-180"], ["routerLink", "/warehouses", 1, "hover:text-indigo-600", "transition-colors"], [1, "text-slate-800", "font-medium"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-center", "lg:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-slate-800"], [1, "mt-1", "text-sm", "text-slate-500"], ["routerLink", "/warehouses", 1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-white", "border", "border-slate-200", "text-slate-700", "font-medium", "rounded-xl", "hover:bg-slate-50", "transition-all"], [1, "fas", "fa-arrow-left", "text-sm", "rtl:rotate-180"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "space-y-6", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "md:hidden", "min-h-screen", "flex", "flex-col", "bg-slate-50"], [1, "sticky", "top-0", "z-40", "bg-white", "border-b", "border-slate-200"], [1, "flex", "items-center", "justify-between", "px-4", "py-3"], ["routerLink", "/warehouses", 1, "p-2", "-ml-2", "text-slate-600"], [1, "fas", "fa-arrow-left", "rtl:rotate-180"], [1, "font-semibold", "text-slate-800"], ["type", "button", 1, "p-2", "-mr-2", "text-slate-600"], [1, "fas", "fa-ellipsis-v"], [1, "px-4", "pb-3", "text-xs", "text-slate-500"], [1, "fas", "fa-chevron-right", "text-[10px]", "mx-1.5", "rtl:rotate-180"], ["class", "flex-1 flex items-center justify-center", 4, "ngIf"], ["class", "flex-1 overflow-y-auto p-4 pb-32 space-y-4", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "fixed", "bottom-0", "inset-x-0", "bg-white", "border-t", "border-slate-200", "p-4", "z-50"], [1, "flex", "gap-3"], ["routerLink", "/warehouses", 1, "flex-1", "py-3", "bg-white", "border", "border-slate-200", "text-slate-700", "font-medium", "rounded-xl", "text-center"], ["type", "button", 1, "flex-1", "py-3", "bg-indigo-600", "text-white", "font-semibold", "rounded-xl", "disabled:opacity-50", "flex", "items-center", "justify-center", "gap-2", 3, "click", "disabled"], ["class", "fas fa-spinner animate-spin", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-20"], [1, "w-10", "h-10", "border-4", "border-indigo-200", "border-t-indigo-600", "rounded-full", "animate-spin"], [1, "space-y-6", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "space-y-6"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-sm", "overflow-hidden"], [1, "flex", "items-center", "gap-3", "px-6", "py-4", "border-b", "border-slate-100"], [1, "w-9", "h-9", "bg-indigo-100", "rounded-lg", "flex", "items-center", "justify-center"], [1, "fas", "fa-warehouse", "text-indigo-600"], [1, "text-xs", "text-slate-500"], [1, "p-6", "space-y-5"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "block", "text-sm", "font-medium", "text-slate-700", "mb-1.5"], [1, "text-red-500"], ["type", "text", "formControlName", "name", 1, "w-full", "px-4", "py-3", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", 3, "placeholder"], ["class", "mt-1 text-xs text-red-500 flex items-center gap-1", 4, "ngIf"], [1, "relative"], ["type", "text", "formControlName", "code", "placeholder", "e.g. WH-DXB-001", 1, "w-full", "px-4", "py-3", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "font-mono", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", 3, "input"], ["type", "button", 1, "absolute", "end-2", "top-1/2", "-translate-y-1/2", "px-2.5", "py-1", "bg-indigo-100", "text-indigo-600", "text-xs", "font-semibold", "rounded-lg", "hover:bg-indigo-200", "transition-colors", 3, "click"], [1, "mt-1", "text-xs", "text-slate-400"], [1, "w-9", "h-9", "bg-blue-100", "rounded-lg", "flex", "items-center", "justify-center"], [1, "fas", "fa-map-marker-alt", "text-blue-600"], [1, "p-6", "space-y-4"], ["formControlName", "address", "rows", "2", 1, "w-full", "px-4", "py-3", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", "resize-none", 3, "placeholder"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4"], ["type", "text", "formControlName", "city", 1, "w-full", "px-4", "py-3", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "transition-all", 3, "placeholder"], ["type", "text", "formControlName", "state", 1, "w-full", "px-4", "py-3", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "transition-all", 3, "placeholder"], ["formControlName", "country", 1, "w-full", "px-4", "py-3", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "transition-all"], ["value", ""], ["value", "UAE"], ["value", "SA"], ["value", "EG"], ["value", "JO"], ["value", "KW"], ["type", "text", "formControlName", "postalCode", 1, "w-full", "px-4", "py-3", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "transition-all", 3, "placeholder"], [1, "w-9", "h-9", "bg-emerald-100", "rounded-lg", "flex", "items-center", "justify-center"], [1, "fas", "fa-phone-alt", "text-emerald-600"], [1, "p-6"], ["type", "tel", "formControlName", "phone", 1, "w-full", "px-4", "py-3", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "transition-all", 3, "placeholder"], ["type", "email", "formControlName", "email", 1, "w-full", "px-4", "py-3", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "transition-all", 3, "placeholder"], [1, "space-y-6"], [1, "px-6", "py-4", "border-b", "border-slate-100"], [1, "flex", "items-start", "gap-3", "cursor-pointer"], ["type", "checkbox", "formControlName", "isDefault", 1, "mt-1", "w-4", "h-4", "text-indigo-600", "border-slate-300", "rounded", "focus:ring-indigo-500"], [1, "text-sm", "font-medium", "text-slate-700"], [1, "text-xs", "text-slate-500", "mt-0.5"], [1, "bg-indigo-50", "rounded-xl", "border", "border-indigo-100", "p-5"], [1, "flex", "items-start", "gap-3"], [1, "w-8", "h-8", "bg-indigo-100", "rounded-lg", "flex", "items-center", "justify-center", "flex-shrink-0"], [1, "fas", "fa-info-circle", "text-indigo-600"], [1, "font-semibold", "text-indigo-800", "text-sm"], [1, "text-xs", "text-indigo-600", "mt-1"], [1, "flex", "items-center", "justify-between", "pt-6", "border-t", "border-slate-200"], [1, "text-sm", "text-slate-500"], [1, "flex", "items-center", "gap-3"], ["routerLink", "/warehouses", 1, "px-6", "py-2.5", "bg-white", "border", "border-slate-200", "text-slate-700", "font-medium", "rounded-xl", "hover:bg-slate-50", "transition-all"], ["type", "submit", 1, "inline-flex", "items-center", "gap-2", "px-6", "py-2.5", "bg-indigo-600", "text-white", "font-semibold", "rounded-xl", "hover:bg-indigo-700", "transition-all", "shadow-lg", "shadow-indigo-200", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], ["class", "fas fa-check", 4, "ngIf"], [1, "mt-1", "text-xs", "text-red-500", "flex", "items-center", "gap-1"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-spinner", "animate-spin"], [1, "fas", "fa-check"], [1, "flex-1", "flex", "items-center", "justify-center"], [1, "flex-1", "overflow-y-auto", "p-4", "pb-32", "space-y-4", 3, "ngSubmit", "formGroup"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-4"], [1, "flex", "items-center", "gap-2", "mb-4"], [1, "space-y-4"], ["type", "text", "formControlName", "name", 1, "w-full", "px-4", "py-3", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "placeholder"], ["type", "text", "formControlName", "code", "placeholder", "e.g. WH-DXB-001", 1, "w-full", "px-4", "py-3", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "font-mono", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "input"], ["type", "button", 1, "absolute", "end-2", "top-1/2", "-translate-y-1/2", "px-2", "py-1", "bg-indigo-100", "text-indigo-600", "text-xs", "font-semibold", "rounded-lg", 3, "click"], [1, "font-semibold", "text-slate-800", "mb-4"], ["type", "checkbox", "formControlName", "isDefault", 1, "mt-0.5", "w-4", "h-4", "text-indigo-600", "border-slate-300", "rounded"], [1, "text-sm", "text-slate-700"], [1, "block", "text-xs", "font-medium", "text-slate-600", "mb-1"], ["formControlName", "address", "rows", "2", 1, "w-full", "px-3", "py-2.5", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "resize-none", 3, "placeholder"], [1, "grid", "grid-cols-2", "gap-3"], ["type", "text", "formControlName", "city", 1, "w-full", "px-3", "py-2.5", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", 3, "placeholder"], ["type", "text", "formControlName", "state", 1, "w-full", "px-3", "py-2.5", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", 3, "placeholder"], ["formControlName", "country", 1, "w-full", "px-3", "py-2.5", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm"], ["type", "text", "formControlName", "postalCode", 1, "w-full", "px-3", "py-2.5", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", 3, "placeholder"], [1, "grid", "grid-cols-1", "gap-4"], ["type", "tel", "formControlName", "phone", 1, "w-full", "px-3", "py-2.5", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", 3, "placeholder"], ["type", "email", "formControlName", "email", 1, "w-full", "px-3", "py-2.5", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", 3, "placeholder"]], template: function WarehouseFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nav", 2)(3, "a", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "i", 4);
      \u0275\u0275elementStart(7, "a", 5);
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
      \u0275\u0275elementStart(22, "a", 10);
      \u0275\u0275element(23, "i", 11);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(26, WarehouseFormComponent_div_26_Template, 2, 0, "div", 12)(27, WarehouseFormComponent_form_27_Template, 173, 108, "form", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 14)(29, "div", 15)(30, "div", 16)(31, "a", 17);
      \u0275\u0275element(32, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "h1", 19);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 20);
      \u0275\u0275element(37, "i", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 22)(39, "span");
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "i", 23);
      \u0275\u0275elementStart(43, "span");
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "i", 23);
      \u0275\u0275elementStart(47, "span", 6);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(50, WarehouseFormComponent_div_50_Template, 2, 0, "div", 24)(51, WarehouseFormComponent_form_51_Template, 101, 67, "form", 25);
      \u0275\u0275elementStart(52, "div", 26)(53, "div", 27)(54, "a", 28);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "button", 29);
      \u0275\u0275listener("click", function WarehouseFormComponent_Template_button_click_57_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275template(58, WarehouseFormComponent_i_58_Template, 1, 0, "i", 30);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275attribute("dir", ctx.dir);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 19, "COMMON.HOME"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 21, "WAREHOUSES.TITLE"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 23, ctx.isEditMode ? "WAREHOUSES.EDIT_WAREHOUSE" : "WAREHOUSES.CREATE.TITLE"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 25, ctx.isEditMode ? "WAREHOUSES.EDIT_WAREHOUSE" : "WAREHOUSES.CREATE.TITLE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 27, "WAREHOUSES.CREATE.SUBTITLE"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 29, "WAREHOUSES.BACK_TO_LIST"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.initializing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.initializing);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 31, ctx.isEditMode ? "WAREHOUSES.EDIT_WAREHOUSE" : "WAREHOUSES.CREATE.TITLE"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 33, "COMMON.HOME"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 35, "WAREHOUSES.TITLE"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 37, "WAREHOUSES.CREATE.TITLE"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.initializing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.initializing);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 39, "COMMON.CANCEL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.warehouseForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(60, 41, ctx.isEditMode ? "COMMON.UPDATE" : "WAREHOUSES.CREATE.SUBMIT"), " ");
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WarehouseFormComponent, { className: "WarehouseFormComponent", filePath: "src\\app\\features\\warehouses\\pages\\warehouse-form\\warehouse-form.component.ts", lineNumber: 21 });
})();
export {
  WarehouseFormComponent
};
//# sourceMappingURL=chunk-CKAFJSAZ.js.map
