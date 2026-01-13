import {
  CategoryService
} from "./chunk-QGEU43LX.js";
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
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  Subject,
  debounceTime,
  distinctUntilChanged,
  finalize,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
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
  __spreadProps,
  __spreadValues
} from "./chunk-N7TOP6ZD.js";

// src/app/features/categories/components/category-form/category-form.component.ts
function CategoryFormComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 44);
  }
}
function CategoryFormComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 44);
  }
}
function CategoryFormComponent_div_26_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 52);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "VALIDATION.required"));
  }
}
function CategoryFormComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div")(2, "label", 46);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 47);
    \u0275\u0275listener("blur", function CategoryFormComponent_div_26_Template_input_blur_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateSlug());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CategoryFormComponent_div_26_div_6_Template, 4, 3, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "label", 49);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "textarea", 50);
    \u0275\u0275elementStart(12, "p", 51);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.getTranslation("en"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "CATEGORIES.CATEGORY_NAME"), " (English) * ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-red-300", ((tmp_3_0 = ctx_r1.getTranslation("en").get("name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.getTranslation("en").get("name")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r1.getTranslation("en").get("name")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.getTranslation("en").get("name")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "CATEGORIES.CATEGORY_DESCRIPTION"), " (English) ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ((tmp_6_0 = ctx_r1.getTranslation("en").get("description")) == null ? null : tmp_6_0.value == null ? null : tmp_6_0.value.length) || 0, " / 500 ");
  }
}
function CategoryFormComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div")(2, "label", 53);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "label", 55);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "textarea", 56);
    \u0275\u0275elementStart(11, "p", 57);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.getTranslation("ar"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "CATEGORIES.CATEGORY_NAME"), " (\u0627\u0644\u0639\u0631\u0628\u064A\u0629) ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "CATEGORIES.CATEGORY_DESCRIPTION"), " (\u0627\u0644\u0639\u0631\u0628\u064A\u0629) ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ((tmp_4_0 = ctx_r1.getTranslation("ar").get("description")) == null ? null : tmp_4_0.value == null ? null : tmp_4_0.value.length) || 0, " / 500 ");
  }
}
function CategoryFormComponent_option_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const parent_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", parent_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", parent_r3.name, " ");
  }
}
var CategoryFormComponent = class _CategoryFormComponent {
  fb;
  categoryService;
  category = null;
  save = new EventEmitter();
  cancel = new EventEmitter();
  categoryForm;
  isEditMode = false;
  parents = [];
  activeLanguage = "en";
  constructor(fb, categoryService) {
    this.fb = fb;
    this.categoryService = categoryService;
    this.categoryForm = this.fb.group({
      slug: ["", [Validators.required, Validators.pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)]],
      parentId: [null],
      displayOrder: [0],
      isActive: [true],
      imageUrl: [""],
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
    return this.categoryForm.get("translations");
  }
  getTranslation(lang) {
    return this.translations.controls.find((c) => c.get("languageCode")?.value === lang);
  }
  get currentTranslation() {
    return this.getTranslation(this.activeLanguage);
  }
  ngOnInit() {
    this.loadParents();
  }
  loadParents() {
    this.categoryService.getDropdown().subscribe((parents) => {
      this.parents = parents;
      if (this.isEditMode && this.category) {
        this.parents = this.parents.filter((p) => p.id !== this.category.id);
      }
    });
  }
  ngOnChanges(changes) {
    if (changes["category"]) {
      if (this.category) {
        this.isEditMode = true;
        this.categoryForm.patchValue({
          slug: this.category.slug,
          parentId: this.category.parentId,
          displayOrder: this.category.displayOrder,
          isActive: this.category.isActive,
          imageUrl: this.category.imageUrl
        });
        if (this.category.translations) {
          this.category.translations.forEach((t) => {
            const translationForm = this.getTranslation(t.languageCode);
            if (translationForm) {
              translationForm.patchValue(t);
            }
          });
        } else {
          this.getTranslation("en").patchValue({
            name: this.category.name,
            description: this.category.description
          });
        }
        if (this.parents.length > 0) {
          this.parents = this.parents.filter((p) => p.id !== this.category.id);
        }
      } else {
        this.isEditMode = false;
        this.categoryForm.reset({ isActive: true, displayOrder: 0 });
        this.translations.clear();
        this.translations.push(this.createTranslation("en"));
        this.translations.push(this.createTranslation("ar"));
        this.loadParents();
      }
    }
  }
  setActiveLanguage(lang) {
    this.activeLanguage = lang;
  }
  toggleActive() {
    const current = this.categoryForm.get("isActive")?.value;
    this.categoryForm.patchValue({ isActive: !current });
  }
  onSubmit() {
    if (this.categoryForm.valid) {
      const formValue = this.categoryForm.value;
      const translations = formValue.translations.filter((t) => t.name?.trim());
      this.save.emit(__spreadProps(__spreadValues({}, formValue), {
        translations
      }));
    } else {
      this.categoryForm.markAllAsTouched();
      if (this.getTranslation("en").invalid) {
        this.activeLanguage = "en";
      }
    }
  }
  onCancel() {
    this.cancel.emit();
  }
  generateSlug() {
    if (!this.categoryForm.get("slug")?.dirty) {
      const name = this.getTranslation("en").get("name")?.value || "";
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
      this.categoryForm.patchValue({ slug });
    }
  }
  static \u0275fac = function CategoryFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CategoryService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryFormComponent, selectors: [["app-category-form"]], inputs: { category: "category" }, outputs: { save: "save", cancel: "cancel" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 87, vars: 64, consts: [[1, "bg-white", "rounded-lg", "px-4", "pt-5", "pb-4", "sm:p-6", "sm:pb-4"], [1, "sm:flex", "sm:items-start"], [1, "mt-3", "text-center", "sm:mt-0", "sm:ms-4", "sm:text-start", "w-full"], [1, "flex", "justify-between", "items-center", "mb-5"], ["id", "modal-title", 1, "text-lg", "leading-6", "font-bold", "text-gray-900", "tracking-tight"], ["type", "button", 1, "bg-white", "rounded-md", "text-gray-400", "hover:text-gray-500", "focus:outline-none", "transition-colors", "duration-200", 3, "click"], [1, "sr-only"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "transform", "hover:rotate-90", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [3, "ngSubmit", "formGroup"], [1, "mb-6"], [1, "border-b", "border-gray-200"], ["aria-label", "Language Tabs", 1, "flex", "-mb-px"], ["type", "button", 1, "w-1/2", "py-3", "px-1", "text-center", "border-b-2", "font-medium", "text-sm", "transition-colors", 3, "click", "ngClass"], [1, "flex", "items-center", "justify-center", "gap-2"], ["class", "w-2 h-2 bg-red-500 rounded-full", 4, "ngIf"], ["class", "space-y-4", 3, "formGroup", 4, "ngIf"], [1, "mt-6", "pt-4", "border-t", "border-gray-100", "space-y-4"], [1, "text-xs", "font-medium", "text-gray-500", "uppercase", "tracking-wide"], ["for", "slug", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["type", "text", "id", "slug", "formControlName", "slug", "readonly", "", 1, "input-premium", "bg-gray-50", "text-gray-500", 3, "placeholder"], ["for", "parentId", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["id", "parentId", "formControlName", "parentId", 1, "input-premium", "w-full"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "p-3", "bg-gray-50", "rounded-lg", "border", "border-gray-100", "transition-colors", "hover:border-blue-100"], [1, "flex-grow", "flex", "flex-col", "items-start"], [1, "text-sm", "font-medium", "text-gray-900"], [1, "text-sm", "text-gray-500"], ["type", "button", 1, "relative", "inline-flex", "flex-shrink-0", "h-6", "w-11", "border-2", "border-transparent", "rounded-full", "cursor-pointer", "transition-colors", "ease-in-out", "duration-200", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-blue-500", 3, "click", "ngClass"], ["aria-hidden", "true", 1, "pointer-events-none", "inline-block", "h-5", "w-5", "rounded-full", "bg-white", "shadow", "transform", "ring-0", "transition", "ease-in-out", "duration-200", 3, "ngClass"], [1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], [1, "group", "flex", "justify-center", "px-6", "pt-5", "pb-6", "border-2", "border-gray-300", "border-dashed", "rounded-md", "hover:border-blue-400", "hover:bg-blue-50", "transition-all", "duration-300", "cursor-pointer"], [1, "space-y-1", "text-center"], [1, "mx-auto", "h-12", "w-12", "text-blue-500", "bg-blue-50", "rounded-full", "flex", "items-center", "justify-center", "group-hover:bg-white", "group-hover:shadow-sm", "transition-all", "duration-300"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "flex", "text-sm", "text-gray-600", "justify-center"], [1, "font-medium", "text-blue-600"], [1, "ps-1"], [1, "text-xs", "text-gray-500"], [1, "bg-gray-50", "px-4", "py-3", "sm:px-6", "sm:flex", "sm:flex-row-reverse", "rounded-b-lg", "border-t", "border-gray-100"], ["type", "button", 1, "w-full", "sm:w-auto", "sm:ms-3", "btn-primary", "shadow-lg", "shadow-blue-500/30", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["type", "button", 1, "mt-3", "w-full", "sm:w-auto", "sm:mt-0", "sm:ms-3", "btn-secondary", 3, "click"], [1, "w-2", "h-2", "bg-red-500", "rounded-full"], [1, "space-y-4", 3, "formGroup"], ["for", "name_en", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["type", "text", "id", "name_en", "formControlName", "name", "dir", "ltr", "placeholder", "e.g. Electronics", 1, "input-premium", 3, "blur"], [4, "ngIf"], ["for", "desc_en", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["id", "desc_en", "rows", "3", "formControlName", "description", "dir", "ltr", "placeholder", "Describe this category...", 1, "input-premium"], [1, "mt-1", "text-xs", "text-gray-500", "text-end"], [1, "mt-1", "text-xs", "text-red-600"], ["for", "name_ar", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1", "text-right"], ["type", "text", "id", "name_ar", "formControlName", "name", "dir", "rtl", "placeholder", "\u0645\u062B\u0627\u0644: \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0627\u062A", 1, "input-premium", "text-right"], ["for", "desc_ar", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1", "text-right"], ["id", "desc_ar", "rows", "3", "formControlName", "description", "dir", "rtl", "placeholder", "\u0635\u0641 \u0647\u0630\u0647 \u0627\u0644\u0641\u0626\u0629...", 1, "input-premium", "text-right"], [1, "mt-1", "text-xs", "text-gray-500", "text-start"]], template: function CategoryFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function CategoryFormComponent_Template_button_click_8_listener() {
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
      \u0275\u0275listener("ngSubmit", function CategoryFormComponent_Template_form_ngSubmit_14_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(15, "div", 10)(16, "div", 11)(17, "nav", 12)(18, "button", 13);
      \u0275\u0275listener("click", function CategoryFormComponent_Template_button_click_18_listener() {
        return ctx.setActiveLanguage("en");
      });
      \u0275\u0275elementStart(19, "span", 14);
      \u0275\u0275text(20, " \u{1F1FA}\u{1F1F8} English ");
      \u0275\u0275template(21, CategoryFormComponent_span_21_Template, 1, 0, "span", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "button", 13);
      \u0275\u0275listener("click", function CategoryFormComponent_Template_button_click_22_listener() {
        return ctx.setActiveLanguage("ar");
      });
      \u0275\u0275elementStart(23, "span", 14);
      \u0275\u0275text(24, " \u{1F1F8}\u{1F1E6} \u0627\u0644\u0639\u0631\u0628\u064A\u0629 ");
      \u0275\u0275template(25, CategoryFormComponent_span_25_Template, 1, 0, "span", 15);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(26, CategoryFormComponent_div_26_Template, 14, 11, "div", 16)(27, CategoryFormComponent_div_27_Template, 13, 8, "div", 16);
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
      \u0275\u0275elementStart(38, "div")(39, "label", 21);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "select", 22)(43, "option", 23);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(46, CategoryFormComponent_option_46_Template, 2, 2, "option", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 25)(48, "span", 26)(49, "span", 27);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "span", 28);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "button", 29);
      \u0275\u0275listener("click", function CategoryFormComponent_Template_button_click_55_listener() {
        return ctx.toggleActive();
      });
      \u0275\u0275elementStart(56, "span", 6);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(59, "span", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div")(61, "label", 31);
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 32)(65, "div", 33)(66, "div", 34);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(67, "svg", 35);
      \u0275\u0275element(68, "path", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(69, "div", 37)(70, "span", 38);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "span", 39);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "p", 40);
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(79, "div", 41)(80, "button", 42);
      \u0275\u0275listener("click", function CategoryFormComponent_Template_button_click_80_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275text(81);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "button", 43);
      \u0275\u0275listener("click", function CategoryFormComponent_Template_button_click_84_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(85);
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_18_0;
      let tmp_20_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? \u0275\u0275pipeBind1(6, 28, "CATEGORIES.EDIT_CATEGORY") : \u0275\u0275pipeBind1(7, 30, "CATEGORIES.ADD_NEW_CATEGORY"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 32, "COMMON.CLOSE"));
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.categoryForm);
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
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 34, "COMMON.SETTINGS"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 36, "CATEGORIES.CATEGORY_SLUG"), " * ");
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(37, 38, "CATEGORIES.PLACEHOLDER_SLUG"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 40, "CATEGORIES.PARENT_CATEGORY"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 42, "CATEGORIES.NO_PARENT"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.parents);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 44, "CATEGORIES.ACTIVE_STATUS"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 46, "CATEGORIES.ACTIVE_STATUS_DESC"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ((tmp_18_0 = ctx.categoryForm.get("isActive")) == null ? null : tmp_18_0.value) ? "bg-blue-600" : "bg-gray-200");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 48, "COMMON.STATUS"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ((tmp_20_0 = ctx.categoryForm.get("isActive")) == null ? null : tmp_20_0.value) ? "translate-x-5 rtl:-translate-x-5" : "translate-x-0");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 50, "CATEGORIES.CATEGORY_IMAGE"));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 52, "CATEGORIES.UPLOAD_IMAGE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 54, "BRANDS.DRAG_DROP"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(78, 56, "BRANDS.FILE_TYPES"));
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.categoryForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? \u0275\u0275pipeBind1(82, 58, "CATEGORIES.UPDATE_CATEGORY") : \u0275\u0275pipeBind1(83, 60, "CATEGORIES.CREATE_CATEGORY"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(86, 62, "COMMON.CANCEL"), " ");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryFormComponent, { className: "CategoryFormComponent", filePath: "src\\app\\features\\categories\\components\\category-form\\category-form.component.ts", lineNumber: 13 });
})();

// src/app/features/categories/pages/category-list/category-list.component.ts
function CategoryListComponent_tr_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 62)(2, "div", 63);
    \u0275\u0275element(3, "div", 64);
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "COMMON.LOADING"));
  }
}
function CategoryListComponent_tr_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 62)(2, "div", 63)(3, "div", 65);
    \u0275\u0275element(4, "i", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 67);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 68);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 69);
    \u0275\u0275listener("click", function CategoryListComponent_tr_92_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275element(12, "i", 13);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "COMMON.NO_DATA"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 5, "CATEGORIES.EMPTY_DESC"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 7, "CATEGORIES.ADD_NEW"), " ");
  }
}
function CategoryListComponent_tr_93_img_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 91);
  }
  if (rf & 2) {
    const category_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", category_r4.imageUrl, \u0275\u0275sanitizeUrl)("alt", category_r4.name);
  }
}
function CategoryListComponent_tr_93_i_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 92);
  }
}
function CategoryListComponent_tr_93_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 93);
  }
}
function CategoryListComponent_tr_93_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r4.parentName, " ");
  }
}
function CategoryListComponent_tr_93_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function CategoryListComponent_tr_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 70)(1, "td", 71);
    \u0275\u0275element(2, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 71)(4, "div", 72)(5, "div", 49)(6, "div", 73);
    \u0275\u0275template(7, CategoryListComponent_tr_93_img_7_Template, 1, 2, "img", 74)(8, CategoryListComponent_tr_93_i_8_Template, 1, 0, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, CategoryListComponent_tr_93_span_9_Template, 1, 0, "span", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 77)(11, "p", 78);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 79);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "td", 71);
    \u0275\u0275template(16, CategoryListComponent_tr_93_span_16_Template, 2, 1, "span", 80)(17, CategoryListComponent_tr_93_span_17_Template, 2, 0, "span", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 82)(19, "span", 83);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 82)(22, "button", 84);
    \u0275\u0275listener("click", function CategoryListComponent_tr_93_Template_button_click_22_listener() {
      const category_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleStatus(category_r4));
    });
    \u0275\u0275element(23, "span", 85);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 71)(27, "div", 86)(28, "button", 87);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275listener("click", function CategoryListComponent_tr_93_Template_button_click_28_listener() {
      const category_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editCategory(category_r4));
    });
    \u0275\u0275element(30, "i", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 89);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275listener("click", function CategoryListComponent_tr_93_Template_button_click_31_listener() {
      const category_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteCategory(category_r4));
    });
    \u0275\u0275element(33, "i", 90);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", category_r4.imageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !category_r4.imageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", category_r4.isActive);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", category_r4.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r4.slug);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", category_r4.parentName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !category_r4.parentName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", category_r4.productsCount || 0, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", category_r4.isActive ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200" : "bg-slate-100 text-slate-600 hover:bg-slate-200");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-emerald-500", category_r4.isActive)("bg-slate-400", !category_r4.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 16, category_r4.isActive ? "COMMON.ACTIVE" : "COMMON.INACTIVE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 18, "COMMON.EDIT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(32, 20, "COMMON.DELETE"));
  }
}
function CategoryListComponent_div_94_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 103);
    \u0275\u0275listener("click", function CategoryListComponent_div_94_ng_container_19_Template_button_click_1_listener() {
      const page_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(page_r7));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", page_r7 === ctx_r1.pageNumber ? "bg-indigo-600 text-white shadow-sm" : "text-slate-600 hover:bg-white hover:border-slate-200 border border-transparent");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r7, " ");
  }
}
function CategoryListComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span", 97);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "span", 97);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span", 97);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 98)(17, "button", 99);
    \u0275\u0275listener("click", function CategoryListComponent_div_94_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.pageNumber - 1));
    });
    \u0275\u0275element(18, "i", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, CategoryListComponent_div_94_ng_container_19_Template, 3, 2, "ng-container", 101);
    \u0275\u0275elementStart(20, "button", 99);
    \u0275\u0275listener("click", function CategoryListComponent_div_94_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.pageNumber + 1));
    });
    \u0275\u0275element(21, "i", 102);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 10, "COMMON.SHOWING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.pageNumber - 1) * ctx_r1.pageSize + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 12, "COMMON.TO"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.Math.min(ctx_r1.pageNumber * ctx_r1.pageSize, ctx_r1.totalCount));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 14, "COMMON.OF"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.totalCount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 16, "COMMON.RESULTS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pageNumber === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.pageNumber >= ctx_r1.totalPages);
  }
}
function CategoryListComponent_div_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275element(1, "div", 105);
    \u0275\u0275elementEnd();
  }
}
function CategoryListComponent_div_124_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106)(1, "div", 107);
    \u0275\u0275element(2, "i", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 108);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 109);
    \u0275\u0275listener("click", function CategoryListComponent_div_124_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275element(7, "i", 13);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "COMMON.NO_DATA"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 4, "CATEGORIES.ADD_NEW"), " ");
  }
}
function CategoryListComponent_div_125_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 91);
  }
  if (rf & 2) {
    const category_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", category_r10.imageUrl, \u0275\u0275sanitizeUrl)("alt", category_r10.name);
  }
}
function CategoryListComponent_div_125_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 92);
  }
}
function CategoryListComponent_div_125_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 127);
  }
}
function CategoryListComponent_div_125_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 98);
    \u0275\u0275element(1, "i", 92);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", category_r10.parentName, " ");
  }
}
function CategoryListComponent_div_125_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110)(1, "div", 111)(2, "div", 49)(3, "div", 112);
    \u0275\u0275template(4, CategoryListComponent_div_125_img_4_Template, 1, 2, "img", 74)(5, CategoryListComponent_div_125_i_5_Template, 1, 0, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CategoryListComponent_div_125_span_6_Template, 1, 0, "span", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 114)(8, "div", 115)(9, "h3", 116);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 117);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p", 118);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 119);
    \u0275\u0275template(17, CategoryListComponent_div_125_span_17_Template, 3, 1, "span", 120);
    \u0275\u0275elementStart(18, "span", 98);
    \u0275\u0275element(19, "i", 121);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 122)(23, "button", 123);
    \u0275\u0275listener("click", function CategoryListComponent_div_125_Template_button_click_23_listener() {
      const category_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editCategory(category_r10));
    });
    \u0275\u0275element(24, "i", 124);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 125);
    \u0275\u0275listener("click", function CategoryListComponent_div_125_Template_button_click_27_listener() {
      const category_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteCategory(category_r10));
    });
    \u0275\u0275element(28, "i", 126);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const category_r10 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", category_r10.imageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !category_r10.imageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", category_r10.isActive);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(category_r10.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", category_r10.isActive ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 12, category_r10.isActive ? "COMMON.ACTIVE" : "COMMON.INACTIVE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(category_r10.slug);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", category_r10.parentName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", category_r10.productsCount || 0, " ", \u0275\u0275pipeBind1(21, 14, "CATEGORIES.PRODUCTS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 16, "COMMON.EDIT"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 18, "COMMON.DELETE"), " ");
  }
}
function CategoryListComponent_div_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 128)(1, "div", 129)(2, "div", 130);
    \u0275\u0275listener("click", function CategoryListComponent_div_128_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 131);
    \u0275\u0275text(4, "\u200B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 132)(6, "app-category-form", 133);
    \u0275\u0275listener("save", function CategoryListComponent_div_128_Template_app_category_form_save_6_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSaveCategory($event));
    })("cancel", function CategoryListComponent_div_128_Template_app_category_form_cancel_6_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("category", ctx_r1.selectedCategory);
  }
}
var CategoryListComponent = class _CategoryListComponent {
  categoryService;
  languageService;
  translate;
  notificationService;
  router;
  categories = [];
  isLoading = false;
  totalCount = 0;
  pageSize = 10;
  pageNumber = 1;
  totalPages = 1;
  searchControl = new FormControl("");
  statusControl = new FormControl(null);
  // Responsive
  isMobile = false;
  isTablet = false;
  // Modal State
  showModal = false;
  selectedCategory = null;
  // Delete Confirmation Modal
  showDeleteModal = false;
  categoryToDelete = null;
  deleteModalConfig = {
    type: "danger",
    title: "",
    message: "",
    confirmText: "",
    cancelText: ""
  };
  destroy$ = new Subject();
  // Helpers
  get Math() {
    return Math;
  }
  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  get dir() {
    return this.languageService.currentLanguage === "ar" ? "rtl" : "ltr";
  }
  constructor(categoryService, languageService, translate, notificationService, router) {
    this.categoryService = categoryService;
    this.languageService = languageService;
    this.translate = translate;
    this.notificationService = notificationService;
    this.router = router;
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
  ngOnInit() {
    this.translate.use(this.languageService.currentLanguage);
    this.languageService.currentLanguage$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.translate.use(lang);
      this.loadCategories();
    });
    this.searchControl.valueChanges.pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$)).subscribe(() => {
      this.pageNumber = 1;
      this.loadCategories();
    });
    this.statusControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.pageNumber = 1;
      this.loadCategories();
    });
    this.loadCategories();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadCategories() {
    this.isLoading = true;
    const search = this.searchControl.value || void 0;
    const isActive = this.statusControl.value ?? void 0;
    this.categoryService.getPaged(this.pageNumber, this.pageSize, search, isActive).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.categories = response.items;
        this.totalCount = response.totalCount;
        this.totalPages = response.totalPages || Math.ceil(response.totalCount / this.pageSize);
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Failed to load categories:", error);
        this.isLoading = false;
        this.notificationService.error(this.translate.instant("COMMON.ERROR"));
        this.categories = [];
      }
    });
  }
  onPageChange(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.pageNumber = page;
    this.loadCategories();
  }
  toggleStatus(category) {
    this.categoryService.toggleStatus(category).pipe(takeUntil(this.destroy$)).subscribe({
      next: (updated) => {
        const index = this.categories.findIndex((c) => c.id === category.id);
        if (index !== -1) {
          this.categories[index].isActive = !category.isActive;
        }
        this.notificationService.success(this.translate.instant("MESSAGES.CATEGORY_STATUS_UPDATED"));
      },
      error: (error) => {
        console.error("Failed to toggle category status:", error);
        this.notificationService.error(this.translate.instant("COMMON.ERROR"));
      }
    });
  }
  openAddModal() {
    this.selectedCategory = null;
    this.showModal = true;
  }
  editCategory(category) {
    this.router.navigate(["/categories/edit", category.id]);
  }
  deleteCategory(category) {
    this.categoryToDelete = category;
    this.deleteModalConfig = {
      type: "danger",
      title: this.translate.instant("CATEGORIES.DELETE_TITLE"),
      message: this.translate.instant("CATEGORIES.DELETE_MESSAGE"),
      confirmText: this.translate.instant("CATEGORIES.DELETE_BUTTON"),
      cancelText: this.translate.instant("COMMON.CANCEL"),
      itemName: category.name
    };
    this.showDeleteModal = true;
  }
  onConfirmDelete() {
    if (!this.categoryToDelete)
      return;
    this.categoryService.delete(this.categoryToDelete.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.notificationService.success(this.translate.instant("MESSAGES.CATEGORY_DELETED"));
        this.loadCategories();
        this.closeDeleteModal();
      },
      error: (error) => {
        console.error("Failed to delete category:", error);
        this.notificationService.error(this.translate.instant("COMMON.ERROR"));
        this.closeDeleteModal();
      }
    });
  }
  closeDeleteModal() {
    this.showDeleteModal = false;
    this.categoryToDelete = null;
  }
  closeModal() {
    this.showModal = false;
    this.selectedCategory = null;
  }
  onSaveCategory(data) {
    const enTranslation = data.translations?.find((t) => t.languageCode === "en");
    const name = enTranslation?.name || "";
    const description = enTranslation?.description || "";
    const translations = (data.translations || []).map((t) => ({
      languageCode: t.languageCode,
      name: t.name,
      description: t.description || "",
      slug: data.slug
      // Use same slug for all translations
    }));
    if (this.selectedCategory) {
      const updateRequest = {
        id: this.selectedCategory.id,
        parentId: data.parentId,
        name,
        slug: data.slug,
        description,
        imageUrl: data.imageUrl,
        displayOrder: data.displayOrder || 0,
        isActive: data.isActive,
        translations
      };
      this.categoryService.update(this.selectedCategory.id, updateRequest).pipe(takeUntil(this.destroy$)).subscribe({
        next: () => {
          this.notificationService.success(this.translate.instant("MESSAGES.CATEGORY_UPDATED"));
          this.closeModal();
          this.loadCategories();
        },
        error: (error) => {
          console.error("Failed to update category:", error);
          this.notificationService.error(this.translate.instant("COMMON.ERROR"));
        }
      });
    } else {
      const createRequest = {
        parentId: data.parentId,
        name,
        slug: data.slug,
        description,
        imageUrl: data.imageUrl,
        displayOrder: data.displayOrder || 0,
        translations
      };
      this.categoryService.create(createRequest).pipe(takeUntil(this.destroy$)).subscribe({
        next: () => {
          this.notificationService.success(this.translate.instant("MESSAGES.CATEGORY_CREATED"));
          this.closeModal();
          this.loadCategories();
        },
        error: (error) => {
          console.error("Failed to create category:", error);
          this.notificationService.error(this.translate.instant("COMMON.ERROR"));
        }
      });
    }
  }
  static \u0275fac = function CategoryListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryListComponent)(\u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(LanguageService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryListComponent, selectors: [["app-category-list"]], hostBindings: function CategoryListComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function CategoryListComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, \u0275\u0275resolveWindow);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 130, vars: 103, consts: [[1, "min-h-full", "bg-slate-50"], [1, "hidden", "md:block", "p-6", "lg:p-8", "space-y-6"], [1, "flex", "items-center", "gap-2", "text-sm", "text-slate-500"], ["routerLink", "/dashboard", 1, "hover:text-indigo-600", "transition-colors"], [1, "fas", "fa-chevron-right", "text-xs", "text-slate-300", "rtl:rotate-180"], [1, "text-slate-800", "font-medium"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-start", "lg:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-slate-800"], [1, "mt-1", "text-sm", "text-slate-500"], [1, "flex", "items-center", "gap-3"], ["type", "button", 1, "hidden", "sm:inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-white", "border", "border-slate-200", "text-slate-700", "font-medium", "rounded-xl", "hover:bg-slate-50", "hover:border-slate-300", "transition-all"], [1, "fas", "fa-download", "text-sm"], ["routerLink", "/categories/create", 1, "inline-flex", "items-center", "gap-2", "px-5", "py-2.5", "bg-indigo-600", "text-white", "font-semibold", "rounded-xl", "hover:bg-indigo-700", "transition-all", "shadow-lg", "shadow-indigo-200", "hover:-translate-y-0.5", "active:scale-[0.98]"], [1, "fas", "fa-plus"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-sm", "p-4"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-center", "gap-4"], [1, "relative", "flex-1", "max-w-md"], [1, "fas", "fa-search", "absolute", "start-4", "top-1/2", "-translate-y-1/2", "text-slate-400"], ["type", "text", 1, "w-full", "ps-11", "pe-4", "py-2.5", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "placeholder-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", 3, "formControl", "placeholder"], [1, "px-4", "py-2.5", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "text-slate-700", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", "cursor-pointer", 3, "formControl"], [3, "ngValue"], [1, "hidden", "lg:flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-slate-50", "rounded-xl", "border", "border-slate-200"], [1, "text-sm", "text-slate-500"], [1, "text-sm", "font-bold", "text-slate-800"], [1, "flex", "items-center", "gap-2", "mt-4", "pt-4", "border-t", "border-slate-100"], [1, "text-xs", "font-medium", "text-slate-500", "uppercase", "tracking-wide"], [1, "px-3", "py-1.5", "rounded-lg", "text-sm", "font-medium", "transition-all", "duration-200", 3, "click", "ngClass"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-sm", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full"], [1, "bg-slate-50", "border-b", "border-slate-200"], ["scope", "col", 1, "px-6", "py-4", "text-start", "w-12"], ["type", "checkbox", 1, "w-4", "h-4", "text-indigo-600", "bg-white", "border-slate-300", "rounded", "focus:ring-2", "focus:ring-indigo-500", "cursor-pointer"], ["scope", "col", 1, "px-6", "py-4", "text-start"], [1, "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wide"], ["scope", "col", 1, "px-6", "py-4", "text-center"], ["scope", "col", 1, "px-6", "py-4", "text-end"], [1, "divide-y", "divide-slate-100"], [4, "ngIf"], ["class", "hover:bg-slate-50 transition-colors duration-150 group", 4, "ngFor", "ngForOf"], ["class", "px-6 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50", 4, "ngIf"], [1, "md:hidden", "min-h-screen", "flex", "flex-col", "bg-slate-50"], [1, "sticky", "top-0", "z-40", "bg-white", "border-b", "border-slate-200", "px-4", "py-3"], [1, "flex", "items-center", "justify-between"], [1, "text-lg", "font-bold", "text-slate-800"], [1, "text-xs", "text-slate-500"], [1, "p-2", "text-slate-500"], [1, "fas", "fa-ellipsis-v"], [1, "px-4", "py-3", "bg-white", "border-b", "border-slate-100"], [1, "relative"], [1, "fas", "fa-search", "absolute", "start-3", "top-1/2", "-translate-y-1/2", "text-slate-400", "text-sm"], ["type", "text", 1, "w-full", "ps-10", "pe-4", "py-2.5", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "placeholder-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "formControl", "placeholder"], [1, "px-4", "py-2", "bg-white", "border-b", "border-slate-100", "flex", "items-center", "gap-2", "overflow-x-auto"], [1, "flex-shrink-0", "px-3", "py-1.5", "rounded-full", "text-xs", "font-semibold", "transition-all", 3, "click", "ngClass"], [1, "flex-1", "overflow-y-auto", "p-4", "pb-24", "space-y-3"], ["class", "flex items-center justify-center py-12", 4, "ngIf"], ["class", "text-center py-12", 4, "ngIf"], ["class", "bg-white rounded-2xl border border-slate-200 p-4 shadow-sm", 4, "ngFor", "ngForOf"], [1, "fixed", "bottom-6", "end-6", "w-14", "h-14", "bg-indigo-600", "text-white", "rounded-2xl", "shadow-lg", "shadow-indigo-300", "flex", "items-center", "justify-center", "hover:bg-indigo-700", "active:scale-95", "transition-all", "z-40", 3, "click"], [1, "fas", "fa-plus", "text-xl"], ["class", "fixed inset-0 z-50 overflow-y-auto", "aria-labelledby", "modal-title", "role", "dialog", "aria-modal", "true", 4, "ngIf"], [3, "confirmed", "cancelled", "isOpen", "config"], ["colspan", "6", 1, "px-6", "py-20"], [1, "flex", "flex-col", "items-center", "justify-center"], [1, "w-12", "h-12", "border-4", "border-indigo-200", "border-t-indigo-600", "rounded-full", "animate-spin", "mb-4"], [1, "w-16", "h-16", "bg-slate-100", "rounded-2xl", "flex", "items-center", "justify-center", "mb-4"], [1, "fas", "fa-folder-open", "text-2xl", "text-slate-400"], [1, "text-lg", "font-semibold", "text-slate-800", "mb-1"], [1, "text-sm", "text-slate-500", "mb-6"], [1, "inline-flex", "items-center", "gap-2", "px-5", "py-2.5", "bg-indigo-600", "text-white", "font-semibold", "rounded-xl", "hover:bg-indigo-700", "transition-all", 3, "click"], [1, "hover:bg-slate-50", "transition-colors", "duration-150", "group"], [1, "px-6", "py-4"], [1, "flex", "items-center", "gap-4"], [1, "w-12", "h-12", "rounded-xl", "bg-slate-100", "border", "border-slate-200", "flex", "items-center", "justify-center", "overflow-hidden", "group-hover:scale-105", "transition-transform"], ["class", "w-full h-full object-cover", 3, "src", "alt", 4, "ngIf"], ["class", "fas fa-folder text-slate-400", 4, "ngIf"], ["class", "absolute -bottom-0.5 -end-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white", 4, "ngIf"], [1, "min-w-0"], [1, "text-sm", "font-semibold", "text-slate-800", "truncate", "group-hover:text-indigo-600", "transition-colors", "cursor-pointer"], [1, "text-xs", "text-slate-400", "font-mono", "truncate"], ["class", "inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700", 4, "ngIf"], ["class", "text-sm text-slate-400", 4, "ngIf"], [1, "px-6", "py-4", "text-center"], [1, "inline-flex", "items-center", "justify-center", "min-w-[36px]", "px-2.5", "py-1", "rounded-lg", "text-xs", "font-bold", "bg-blue-50", "text-blue-600"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-full", "text-xs", "font-semibold", "transition-all", "cursor-pointer", 3, "click", "ngClass"], [1, "w-1.5", "h-1.5", "rounded-full"], [1, "flex", "items-center", "justify-end", "gap-1"], [1, "p-2", "text-slate-400", "hover:text-amber-600", "hover:bg-amber-50", "rounded-lg", "transition-all", 3, "click", "title"], [1, "fas", "fa-pen", "text-sm"], [1, "p-2", "text-slate-400", "hover:text-red-600", "hover:bg-red-50", "rounded-lg", "transition-all", 3, "click", "title"], [1, "fas", "fa-trash", "text-sm"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "fas", "fa-folder", "text-slate-400"], [1, "absolute", "-bottom-0.5", "-end-0.5", "w-3.5", "h-3.5", "bg-emerald-500", "rounded-full", "border-2", "border-white"], [1, "inline-flex", "items-center", "px-2.5", "py-1", "rounded-lg", "text-xs", "font-medium", "bg-slate-100", "text-slate-700"], [1, "text-sm", "text-slate-400"], [1, "px-6", "py-4", "border-t", "border-slate-100", "flex", "items-center", "justify-between", "bg-slate-50/50"], [1, "font-semibold", "text-slate-700"], [1, "flex", "items-center", "gap-1"], [1, "p-2", "text-slate-400", "hover:text-indigo-600", "hover:bg-white", "rounded-lg", "border", "border-transparent", "hover:border-slate-200", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition-all", 3, "click", "disabled"], [1, "fas", "fa-chevron-left", "rtl:rotate-180"], [4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-right", "rtl:rotate-180"], [1, "w-9", "h-9", "flex", "items-center", "justify-center", "text-sm", "font-semibold", "rounded-lg", "transition-all", 3, "click", "ngClass"], [1, "flex", "items-center", "justify-center", "py-12"], [1, "w-10", "h-10", "border-4", "border-indigo-200", "border-t-indigo-600", "rounded-full", "animate-spin"], [1, "text-center", "py-12"], [1, "w-16", "h-16", "bg-slate-100", "rounded-2xl", "flex", "items-center", "justify-center", "mx-auto", "mb-4"], [1, "text-sm", "text-slate-500", "mb-4"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "bg-indigo-600", "text-white", "text-sm", "font-semibold", "rounded-xl", 3, "click"], [1, "bg-white", "rounded-2xl", "border", "border-slate-200", "p-4", "shadow-sm"], [1, "flex", "items-start", "gap-3"], [1, "w-14", "h-14", "rounded-xl", "bg-slate-100", "border", "border-slate-200", "flex", "items-center", "justify-center", "overflow-hidden"], ["class", "absolute -bottom-0.5 -end-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white", 4, "ngIf"], [1, "flex-1", "min-w-0"], [1, "flex", "items-center", "justify-between", "mb-1"], [1, "text-sm", "font-semibold", "text-slate-800", "truncate"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-0.5", "rounded-full", "text-[10px]", "font-semibold", 3, "ngClass"], [1, "text-xs", "text-slate-400", "font-mono", "truncate", "mb-2"], [1, "flex", "items-center", "gap-3", "text-xs", "text-slate-500"], ["class", "flex items-center gap-1", 4, "ngIf"], [1, "fas", "fa-box", "text-blue-400"], [1, "flex", "items-center", "gap-2", "mt-3", "pt-3", "border-t", "border-slate-100"], [1, "flex-1", "inline-flex", "items-center", "justify-center", "gap-1.5", "px-3", "py-2", "text-xs", "font-medium", "text-indigo-600", "bg-indigo-50", "rounded-xl", "hover:bg-indigo-100", "transition-colors", 3, "click"], [1, "fas", "fa-pen"], [1, "flex-1", "inline-flex", "items-center", "justify-center", "gap-1.5", "px-3", "py-2", "text-xs", "font-medium", "text-red-600", "bg-red-50", "rounded-xl", "hover:bg-red-100", "transition-colors", 3, "click"], [1, "fas", "fa-trash"], [1, "absolute", "-bottom-0.5", "-end-0.5", "w-3", "h-3", "bg-emerald-500", "rounded-full", "border-2", "border-white"], ["aria-labelledby", "modal-title", "role", "dialog", "aria-modal", "true", 1, "fixed", "inset-0", "z-50", "overflow-y-auto"], [1, "flex", "items-end", "justify-center", "min-h-screen", "pt-4", "px-4", "pb-20", "text-center", "sm:block", "sm:p-0"], [1, "fixed", "inset-0", "bg-slate-900/60", "backdrop-blur-sm", "transition-opacity", 3, "click"], [1, "hidden", "sm:inline-block", "sm:align-middle", "sm:h-screen"], [1, "relative", "inline-block", "align-bottom", "bg-white", "rounded-2xl", "text-start", "overflow-hidden", "shadow-xl", "transform", "transition-all", "sm:my-8", "sm:align-middle", "sm:max-w-2xl", "sm:w-full"], [3, "save", "cancel", "category"]], template: function CategoryListComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(23, "a", 12);
      \u0275\u0275element(24, "i", 13);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 14)(28, "div", 15)(29, "div", 16);
      \u0275\u0275element(30, "i", 17)(31, "input", 18);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 9)(34, "select", 19)(35, "option", 20);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "option", 20);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "option", 20);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 21)(45, "span", 22);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span", 23);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 24)(51, "span", 25);
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "button", 26);
      \u0275\u0275listener("click", function CategoryListComponent_Template_button_click_54_listener() {
        return ctx.statusControl.setValue(null);
      });
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "button", 26);
      \u0275\u0275listener("click", function CategoryListComponent_Template_button_click_57_listener() {
        return ctx.statusControl.setValue(true);
      });
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "button", 26);
      \u0275\u0275listener("click", function CategoryListComponent_Template_button_click_60_listener() {
        return ctx.statusControl.setValue(false);
      });
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "div", 27)(64, "div", 28)(65, "table", 29)(66, "thead", 30)(67, "tr")(68, "th", 31);
      \u0275\u0275element(69, "input", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 33)(71, "span", 34);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "th", 33)(75, "span", 34);
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "th", 35)(79, "span", 34);
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "th", 35)(83, "span", 34);
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "th", 36)(87, "span", 34);
      \u0275\u0275text(88);
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(90, "tbody", 37);
      \u0275\u0275template(91, CategoryListComponent_tr_91_Template, 7, 3, "tr", 38)(92, CategoryListComponent_tr_92_Template, 15, 9, "tr", 38)(93, CategoryListComponent_tr_93_Template, 34, 22, "tr", 39);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(94, CategoryListComponent_div_94_Template, 22, 18, "div", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 41)(96, "div", 42)(97, "div", 43)(98, "div")(99, "h1", 44);
      \u0275\u0275text(100);
      \u0275\u0275pipe(101, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "p", 45);
      \u0275\u0275text(103);
      \u0275\u0275pipe(104, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "button", 46);
      \u0275\u0275element(106, "i", 47);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "div", 48)(108, "div", 49);
      \u0275\u0275element(109, "i", 50)(110, "input", 51);
      \u0275\u0275pipe(111, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "div", 52)(113, "button", 53);
      \u0275\u0275listener("click", function CategoryListComponent_Template_button_click_113_listener() {
        return ctx.statusControl.setValue(null);
      });
      \u0275\u0275text(114);
      \u0275\u0275pipe(115, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "button", 53);
      \u0275\u0275listener("click", function CategoryListComponent_Template_button_click_116_listener() {
        return ctx.statusControl.setValue(true);
      });
      \u0275\u0275text(117);
      \u0275\u0275pipe(118, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "button", 53);
      \u0275\u0275listener("click", function CategoryListComponent_Template_button_click_119_listener() {
        return ctx.statusControl.setValue(false);
      });
      \u0275\u0275text(120);
      \u0275\u0275pipe(121, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 54);
      \u0275\u0275template(123, CategoryListComponent_div_123_Template, 2, 0, "div", 55)(124, CategoryListComponent_div_124_Template, 10, 6, "div", 56)(125, CategoryListComponent_div_125_Template, 31, 20, "div", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "button", 58);
      \u0275\u0275listener("click", function CategoryListComponent_Template_button_click_126_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(127, "i", 59);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(128, CategoryListComponent_div_128_Template, 7, 1, "div", 60);
      \u0275\u0275elementStart(129, "app-confirm-modal", 61);
      \u0275\u0275listener("confirmed", function CategoryListComponent_Template_app_confirm_modal_confirmed_129_listener() {
        return ctx.onConfirmDelete();
      })("cancelled", function CategoryListComponent_Template_app_confirm_modal_cancelled_129_listener() {
        return ctx.closeDeleteModal();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275attribute("dir", ctx.dir);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 51, "COMMON.HOME"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 53, "CATEGORIES.TITLE"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 55, "CATEGORIES.MANAGEMENT_TITLE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 57, "CATEGORIES.MANAGEMENT_SUBTITLE"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 59, "COMMON.EXPORT"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 61, "CATEGORIES.ADD_NEW"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275property("formControl", ctx.searchControl)("placeholder", \u0275\u0275pipeBind1(32, 63, "COMMON.SEARCH_PLACEHOLDER"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formControl", ctx.statusControl);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 65, "COMMON.ALL_STATUS"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngValue", true);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 67, "COMMON.ACTIVE"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngValue", false);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 69, "COMMON.INACTIVE"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(47, 71, "COMMON.RESULTS"), ":");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalCount);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(53, 73, "PRODUCTS.ACTIVE_FILTERS"), ":");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.statusControl.value === null ? "bg-indigo-600 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 75, "COMMON.ALL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.statusControl.value === true ? "bg-emerald-600 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(59, 77, "COMMON.ACTIVE"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.statusControl.value === false ? "bg-slate-700 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(62, 79, "COMMON.INACTIVE"), " ");
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(73, 81, "CATEGORIES.CATEGORY"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(77, 83, "CATEGORIES.PARENT"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(81, 85, "CATEGORIES.PRODUCTS"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(85, 87, "COMMON.STATUS"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(89, 89, "COMMON.ACTIONS"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.categories.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalCount > ctx.pageSize);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(101, 91, "CATEGORIES.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.totalCount, " ", \u0275\u0275pipeBind1(104, 93, "COMMON.RESULTS"), "");
      \u0275\u0275advance(7);
      \u0275\u0275property("formControl", ctx.searchControl)("placeholder", \u0275\u0275pipeBind1(111, 95, "COMMON.SEARCH_PLACEHOLDER"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", ctx.statusControl.value === null ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(115, 97, "COMMON.ALL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.statusControl.value === true ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(118, 99, "COMMON.ACTIVE"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.statusControl.value === false ? "bg-slate-700 text-white" : "bg-slate-100 text-slate-600");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(121, 101, "COMMON.INACTIVE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.categories.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showModal);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showDeleteModal)("config", ctx.deleteModalConfig);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, ReactiveFormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, FormControlDirective, TranslateModule, TranslatePipe, ConfirmModalComponent, CategoryFormComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryListComponent, { className: "CategoryListComponent", filePath: "src\\app\\features\\categories\\pages\\category-list\\category-list.component.ts", lineNumber: 19 });
})();

// src/app/features/categories/pages/category-create/category-create.component.ts
function CategoryCreateComponent_div_45_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 100);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "VALIDATION.required"), " ");
  }
}
function CategoryCreateComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95)(1, "div")(2, "label", 37);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span", 29);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "input", 96);
    \u0275\u0275listener("blur", function CategoryCreateComponent_div_45_Template_input_blur_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.generateSlug());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CategoryCreateComponent_div_45_p_8_Template, 3, 3, "p", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div")(10, "label", 37);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "textarea", 98);
    \u0275\u0275elementStart(14, "p", 99);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "CATEGORIES.CATEGORY_NAME"), " (English) ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-300", ctx_r2.nameEnControl.invalid && ctx_r2.nameEnControl.touched);
    \u0275\u0275property("formControl", ctx_r2.nameEnControl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.nameEnControl.invalid && ctx_r2.nameEnControl.touched);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 11, "CATEGORIES.CATEGORY_DESCRIPTION"), " (English) ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r2.descEnControl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", (ctx_r2.descEnControl.value == null ? null : ctx_r2.descEnControl.value.length) || 0, " / 500 ", \u0275\u0275pipeBind1(16, 13, "COMMON.CHARACTERS"), " ");
  }
}
function CategoryCreateComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95)(1, "div")(2, "label", 101);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "label", 101);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "textarea", 103);
    \u0275\u0275elementStart(11, "p", 104);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "CATEGORIES.CATEGORY_NAME"), " (\u0627\u0644\u0639\u0631\u0628\u064A\u0629) ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r2.nameArControl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, "CATEGORIES.CATEGORY_DESCRIPTION"), " (\u0627\u0644\u0639\u0631\u0628\u064A\u0629) ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r2.descArControl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", (ctx_r2.descArControl.value == null ? null : ctx_r2.descArControl.value.length) || 0, " / 500 ", \u0275\u0275pipeBind1(13, 10, "COMMON.CHARACTERS"), " ");
  }
}
function CategoryCreateComponent_option_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const parent_r4 = ctx.$implicit;
    \u0275\u0275property("ngValue", parent_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", parent_r4.name, " ");
  }
}
function CategoryCreateComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105)(1, "div", 106);
    \u0275\u0275element(2, "img", 107);
    \u0275\u0275elementStart(3, "button", 108);
    \u0275\u0275listener("click", function CategoryCreateComponent_div_86_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeImage());
    });
    \u0275\u0275element(4, "i", 109);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.imagePreview, \u0275\u0275sanitizeUrl);
  }
}
function CategoryCreateComponent_i_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 110);
  }
}
function CategoryCreateComponent_i_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 111);
  }
}
function CategoryCreateComponent_div_154_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112)(1, "div")(2, "label", 37);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span", 29);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "input", 113);
    \u0275\u0275listener("blur", function CategoryCreateComponent_div_154_Template_input_blur_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.generateSlug());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "label", 37);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "textarea", 114);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "CATEGORIES.CATEGORY_NAME"), " (English) ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-300", ctx_r2.nameEnControl.invalid && ctx_r2.nameEnControl.touched);
    \u0275\u0275property("formControl", ctx_r2.nameEnControl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 8, "CATEGORIES.CATEGORY_DESCRIPTION"), " (English) ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r2.descEnControl);
  }
}
function CategoryCreateComponent_div_155_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "div")(2, "label", 101);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "label", 101);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "textarea", 116);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "CATEGORIES.CATEGORY_NAME"), " (\u0627\u0644\u0639\u0631\u0628\u064A\u0629) ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r2.nameArControl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "CATEGORIES.CATEGORY_DESCRIPTION"), " (\u0627\u0644\u0639\u0631\u0628\u064A\u0629) ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r2.descArControl);
  }
}
function CategoryCreateComponent_option_177_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const parent_r8 = ctx.$implicit;
    \u0275\u0275property("ngValue", parent_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(parent_r8.name);
  }
}
function CategoryCreateComponent_div_183_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 117);
    \u0275\u0275element(1, "img", 107);
    \u0275\u0275elementStart(2, "button", 118);
    \u0275\u0275listener("click", function CategoryCreateComponent_div_183_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeImage());
    });
    \u0275\u0275element(3, "i", 119);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.imagePreview, \u0275\u0275sanitizeUrl);
  }
}
function CategoryCreateComponent_i_194_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 110);
  }
}
function CategoryCreateComponent_i_195_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 111);
  }
}
var CategoryCreateComponent = class _CategoryCreateComponent {
  fb;
  categoryService;
  languageService;
  translate;
  notificationService;
  router;
  route;
  categoryForm;
  parents = [];
  isSubmitting = false;
  isLoading = false;
  activeTab = "en";
  // Edit mode
  isEditMode = false;
  categoryId = null;
  currentCategory = null;
  // Responsive
  isMobile = false;
  isTablet = false;
  // Image upload
  selectedImage = null;
  imagePreview = null;
  isDragging = false;
  destroy$ = new Subject();
  get dir() {
    return this.languageService.currentLanguage === "ar" ? "rtl" : "ltr";
  }
  get translations() {
    return this.categoryForm.get("translations");
  }
  // Helper methods for form controls with proper typing
  get nameEnControl() {
    return this.getTranslation("en").get("name");
  }
  get nameArControl() {
    return this.getTranslation("ar").get("name");
  }
  get descEnControl() {
    return this.getTranslation("en").get("description");
  }
  get descArControl() {
    return this.getTranslation("ar").get("description");
  }
  get slugControl() {
    return this.categoryForm.get("slug");
  }
  get pageTitle() {
    return this.isEditMode ? "CATEGORIES.EDIT_CATEGORY" : "CATEGORIES.CREATE_CATEGORY";
  }
  get submitButtonText() {
    return this.isEditMode ? "CATEGORIES.UPDATE_CATEGORY" : "CATEGORIES.CREATE_CATEGORY";
  }
  constructor(fb, categoryService, languageService, translate, notificationService, router, route) {
    this.fb = fb;
    this.categoryService = categoryService;
    this.languageService = languageService;
    this.translate = translate;
    this.notificationService = notificationService;
    this.router = router;
    this.route = route;
    this.checkScreenSize();
    this.categoryForm = this.fb.group({
      slug: ["", [Validators.required, Validators.pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)]],
      parentId: [null],
      displayOrder: [0],
      isActive: [true],
      imageUrl: [""],
      translations: this.fb.array([
        this.createTranslation("en"),
        this.createTranslation("ar")
      ])
    });
  }
  onResize() {
    this.checkScreenSize();
  }
  checkScreenSize() {
    const width = window.innerWidth;
    this.isMobile = width < 768;
    this.isTablet = width >= 768 && width < 1024;
  }
  createTranslation(languageCode) {
    return this.fb.group({
      languageCode: [languageCode],
      name: ["", languageCode === "en" ? [Validators.required, Validators.maxLength(100)] : [Validators.maxLength(100)]],
      description: ["", [Validators.maxLength(500)]]
    });
  }
  getTranslation(lang) {
    return this.translations.controls.find((c) => c.get("languageCode")?.value === lang);
  }
  ngOnInit() {
    this.loadParents();
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.categoryId = parseInt(id, 10);
      this.isEditMode = true;
      this.loadCategory();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadParents() {
    this.categoryService.getDropdown().pipe(takeUntil(this.destroy$)).subscribe((parents) => {
      this.parents = parents;
      if (this.isEditMode && this.categoryId) {
        this.parents = this.parents.filter((p) => p.id !== this.categoryId);
      }
    });
  }
  loadCategory() {
    if (!this.categoryId)
      return;
    this.isLoading = true;
    this.categoryService.getById(this.categoryId).pipe(takeUntil(this.destroy$), finalize(() => this.isLoading = false)).subscribe({
      next: (category) => {
        this.currentCategory = category;
        this.populateForm(category);
      },
      error: (error) => {
        console.error("Failed to load category:", error);
        this.notificationService.error(this.translate.instant("COMMON.ERROR"));
        this.router.navigate(["/categories"]);
      }
    });
  }
  populateForm(category) {
    this.categoryForm.patchValue({
      slug: category.slug,
      parentId: category.parentId,
      displayOrder: category.displayOrder || 0,
      isActive: category.isActive,
      imageUrl: category.imageUrl || ""
    });
    if (category.imageUrl) {
      this.imagePreview = category.imageUrl;
    }
    if (category.translations && category.translations.length > 0) {
      category.translations.forEach((t) => {
        const translationForm = this.getTranslation(t.languageCode);
        if (translationForm) {
          translationForm.patchValue({
            name: t.name,
            description: t.description || ""
          });
        }
      });
    } else {
      this.getTranslation("en").patchValue({
        name: category.name,
        description: category.description || ""
      });
    }
    this.categoryForm.get("slug")?.markAsDirty();
  }
  setActiveTab(tab) {
    this.activeTab = tab;
  }
  generateSlug() {
    if (!this.categoryForm.get("slug")?.dirty && !this.isEditMode) {
      const name = this.getTranslation("en").get("name")?.value || "";
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
      this.categoryForm.patchValue({ slug });
    }
  }
  regenerateSlug() {
    const name = this.getTranslation("en").get("name")?.value || "";
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    this.categoryForm.patchValue({ slug });
    this.categoryForm.get("slug")?.markAsDirty();
  }
  toggleActive() {
    const current = this.categoryForm.get("isActive")?.value;
    this.categoryForm.patchValue({ isActive: !current });
  }
  // Image handling
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }
  onDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleImageFile(files[0]);
    }
  }
  onImageSelect(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this.handleImageFile(input.files[0]);
    }
  }
  handleImageFile(file) {
    if (!file.type.startsWith("image/")) {
      this.notificationService.error(this.translate.instant("VALIDATION.INVALID_IMAGE"));
      return;
    }
    this.selectedImage = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }
  removeImage() {
    this.selectedImage = null;
    this.imagePreview = null;
    this.categoryForm.patchValue({ imageUrl: "" });
  }
  onSubmit() {
    if (this.categoryForm.invalid) {
      this.categoryForm.markAllAsTouched();
      if (this.getTranslation("en").invalid) {
        this.activeTab = "en";
      }
      return;
    }
    this.isSubmitting = true;
    const formValue = this.categoryForm.value;
    const enTranslation = formValue.translations.find((t) => t.languageCode === "en");
    const name = enTranslation?.name || "";
    const description = enTranslation?.description || "";
    const translations = formValue.translations.filter((t) => t.name?.trim()).map((t) => ({
      languageCode: t.languageCode,
      name: t.name,
      description: t.description || "",
      slug: formValue.slug
    }));
    if (this.isEditMode && this.categoryId) {
      const request = {
        id: this.categoryId,
        parentId: formValue.parentId,
        name,
        slug: formValue.slug,
        description,
        imageUrl: formValue.imageUrl,
        displayOrder: formValue.displayOrder || 0,
        isActive: formValue.isActive,
        translations
      };
      this.categoryService.update(this.categoryId, request).pipe(takeUntil(this.destroy$)).subscribe({
        next: () => {
          this.notificationService.success(this.translate.instant("MESSAGES.CATEGORY_UPDATED"));
          this.router.navigate(["/categories"]);
        },
        error: (error) => {
          console.error("Failed to update category:", error);
          this.notificationService.error(this.translate.instant("COMMON.ERROR"));
          this.isSubmitting = false;
        }
      });
    } else {
      const request = {
        parentId: formValue.parentId,
        name,
        slug: formValue.slug,
        description,
        imageUrl: formValue.imageUrl,
        displayOrder: formValue.displayOrder || 0,
        translations
      };
      this.categoryService.create(request).pipe(takeUntil(this.destroy$)).subscribe({
        next: () => {
          this.notificationService.success(this.translate.instant("MESSAGES.CATEGORY_CREATED"));
          this.router.navigate(["/categories"]);
        },
        error: (error) => {
          console.error("Failed to create category:", error);
          this.notificationService.error(this.translate.instant("COMMON.ERROR"));
          this.isSubmitting = false;
        }
      });
    }
  }
  onCancel() {
    this.router.navigate(["/categories"]);
  }
  static \u0275fac = function CategoryCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(LanguageService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryCreateComponent, selectors: [["app-category-create"]], hostBindings: function CategoryCreateComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function CategoryCreateComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, \u0275\u0275resolveWindow);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 201, vars: 179, consts: [["fileInput", ""], ["fileInputMobile", ""], [1, "min-h-full", "bg-slate-50"], [1, "hidden", "md:block", "p-6", "lg:p-8", "space-y-6"], [1, "flex", "items-center", "gap-2", "text-sm", "text-slate-500"], ["routerLink", "/dashboard", 1, "hover:text-indigo-600", "transition-colors"], [1, "fas", "fa-chevron-right", "text-xs", "text-slate-300", "rtl:rotate-180"], ["routerLink", "/categories", 1, "hover:text-indigo-600", "transition-colors"], [1, "text-slate-800", "font-medium"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-start", "lg:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-slate-800"], [1, "mt-1", "text-sm", "text-slate-500"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-white", "border", "border-slate-200", "text-slate-700", "font-medium", "rounded-xl", "hover:bg-slate-50", "hover:border-slate-300", "transition-all", 3, "click"], [1, "fas", "fa-arrow-left", "rtl:rotate-180"], [1, "bg-white", "rounded-2xl", "border", "border-slate-200", "shadow-sm", "overflow-hidden"], [3, "ngSubmit", "formGroup"], [1, "p-6", "lg:p-8", "border-b", "border-slate-100"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "rounded-xl", "bg-indigo-100", "flex", "items-center", "justify-center"], [1, "fas", "fa-info-circle", "text-indigo-600"], [1, "text-lg", "font-semibold", "text-slate-800"], [1, "flex", "items-center", "rounded-xl", "border", "border-slate-200", "overflow-hidden", "bg-white"], ["type", "button", 1, "px-4", "py-2", "text-sm", "font-medium", "transition-all", "flex", "items-center", "gap-2", 3, "click"], [1, "text-xs"], ["class", "space-y-6", 4, "ngIf"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6", "mt-6"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "block", "text-sm", "font-medium", "text-slate-700"], [1, "text-red-500"], [1, "text-xs", "text-indigo-600", "flex", "items-center", "gap-1"], [1, "fas", "fa-magic"], [1, "relative"], ["type", "text", "formControlName", "slug", "placeholder", "auto-generated-slug", "dir", "ltr", 1, "w-full", "px-4", "py-3", "pe-12", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "text-slate-600", "font-mono", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all"], ["type", "button", 1, "absolute", "end-3", "top-1/2", "-translate-y-1/2", "p-1.5", "text-slate-400", "hover:text-indigo-600", "transition-colors", 3, "click", "title"], [1, "fas", "fa-sync-alt"], [1, "mt-1", "text-xs", "text-slate-400"], [1, "block", "text-sm", "font-medium", "text-slate-700", "mb-2"], ["formControlName", "parentId", 1, "w-full", "px-4", "py-3", "bg-white", "border", "border-slate-200", "rounded-xl", "text-sm", "text-slate-700", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", "appearance-none", "cursor-pointer"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-down", "absolute", "end-4", "top-1/2", "-translate-y-1/2", "text-slate-400", "pointer-events-none"], [1, "flex", "items-center", "gap-3", "mb-6"], [1, "w-10", "h-10", "rounded-xl", "bg-purple-100", "flex", "items-center", "justify-center"], [1, "fas", "fa-image", "text-purple-600"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], ["class", "lg:col-span-1", 4, "ngIf"], [1, "relative", "border-2", "border-dashed", "rounded-xl", "p-8", "text-center", "cursor-pointer", "transition-all", 3, "dragover", "dragleave", "drop", "click"], ["type", "file", "accept", "image/*", 1, "hidden", 3, "change"], [1, "flex", "flex-col", "items-center"], [1, "w-14", "h-14", "rounded-xl", "bg-indigo-100", "flex", "items-center", "justify-center", "mb-4"], [1, "fas", "fa-cloud-upload-alt", "text-2xl", "text-indigo-600"], [1, "text-sm", "text-slate-700", "font-medium", "mb-1"], [1, "text-xs", "text-slate-400"], [1, "flex", "items-center", "justify-end", "mt-2"], [1, "fas", "fa-info-circle", "me-1"], [1, "flex", "items-center", "justify-between"], [1, "w-10", "h-10", "rounded-xl", "bg-emerald-100", "flex", "items-center", "justify-center"], [1, "fas", "fa-toggle-on", "text-emerald-600"], [1, "text-sm", "text-slate-500"], ["type", "button", 1, "relative", "inline-flex", "items-center", "h-7", "rounded-full", "w-14", "transition-colors", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-indigo-500", 3, "click"], [1, "inline-block", "w-5", "h-5", "transform", "bg-white", "rounded-full", "shadow", "transition-transform"], [1, "ms-2", "text-sm", "font-medium"], [1, "p-6", "lg:p-8", "bg-slate-50", "flex", "items-center", "justify-end", "gap-3"], ["type", "button", 1, "px-6", "py-3", "bg-white", "border", "border-slate-200", "text-slate-700", "font-medium", "rounded-xl", "hover:bg-slate-50", "hover:border-slate-300", "transition-all", 3, "click"], ["type", "submit", 1, "px-6", "py-3", "bg-indigo-600", "text-white", "font-semibold", "rounded-xl", "hover:bg-indigo-700", "transition-all", "shadow-lg", "shadow-indigo-200", "disabled:opacity-50", "disabled:cursor-not-allowed", "flex", "items-center", "gap-2", 3, "disabled"], ["class", "fas fa-spinner fa-spin", 4, "ngIf"], ["class", "fas fa-plus", 4, "ngIf"], [1, "md:hidden", "min-h-screen", "flex", "flex-col", "bg-slate-50"], [1, "sticky", "top-0", "z-40", "bg-white", "border-b", "border-slate-200", "px-4", "py-3"], ["type", "button", 1, "p-2", "-ms-2", "text-slate-600", 3, "click"], [1, "text-lg", "font-bold", "text-slate-800"], [1, "text-xs", "text-slate-500", "mt-1"], [1, "flex-1", "overflow-y-auto", "p-4", "pb-32"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-4"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-sm", "font-semibold", "text-slate-800"], [1, "flex", "items-center", "rounded-lg", "border", "border-slate-200", "overflow-hidden"], ["type", "button", 1, "px-3", "py-1.5", "text-xs", "font-medium", "transition-all", 3, "click"], ["class", "space-y-4", 4, "ngIf"], [1, "text-sm", "font-medium", "text-slate-700"], [1, "px-2", "py-0.5", "rounded-full", "text-[10px]", "font-semibold", "bg-indigo-100", "text-indigo-700"], ["type", "text", "formControlName", "slug", "placeholder", "category-slug", "dir", "ltr", 1, "w-full", "px-4", "py-3", "pe-12", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "font-mono", "text-slate-600", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], ["type", "button", 1, "absolute", "end-3", "top-1/2", "-translate-y-1/2", "p-1.5", "text-slate-400", 3, "click"], ["formControlName", "parentId", 1, "w-full", "px-4", "py-3", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "text-slate-700", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "appearance-none"], [1, "block", "text-sm", "font-medium", "text-slate-700", "mb-3"], ["class", "relative rounded-xl overflow-hidden mb-3 aspect-video", 4, "ngIf"], [1, "border-2", "border-dashed", "border-indigo-200", "rounded-xl", "p-6", "text-center", "cursor-pointer", "bg-indigo-50/50", 3, "click"], [1, "w-12", "h-12", "rounded-xl", "bg-indigo-100", "flex", "items-center", "justify-center", "mx-auto", "mb-2"], [1, "fas", "fa-cloud-upload-alt", "text-xl", "text-indigo-600"], [1, "text-sm", "text-indigo-600", "font-medium"], [1, "fixed", "bottom-0", "inset-x-0", "bg-white", "border-t", "border-slate-200", "p-4", "space-y-2", "z-40"], ["type", "button", 1, "w-full", "py-3.5", "bg-indigo-600", "text-white", "font-semibold", "rounded-xl", "hover:bg-indigo-700", "transition-all", "disabled:opacity-50", "flex", "items-center", "justify-center", "gap-2", 3, "click", "disabled"], ["type", "button", 1, "w-full", "py-3", "text-slate-600", "font-medium", "text-center", 3, "click"], [1, "space-y-6"], ["type", "text", "placeholder", "e.g. Summer Collection", "dir", "ltr", 1, "w-full", "px-4", "py-3", "bg-white", "border", "border-slate-200", "rounded-xl", "text-sm", "placeholder-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", 3, "blur", "formControl"], ["class", "mt-1 text-xs text-red-500", 4, "ngIf"], ["rows", "3", "placeholder", "Describe this category...", "dir", "ltr", 1, "w-full", "px-4", "py-3", "bg-white", "border", "border-slate-200", "rounded-xl", "text-sm", "placeholder-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", "resize-none", 3, "formControl"], [1, "mt-1", "text-xs", "text-slate-400", "text-end"], [1, "mt-1", "text-xs", "text-red-500"], [1, "block", "text-sm", "font-medium", "text-slate-700", "mb-2", "text-right"], ["type", "text", "placeholder", "\u0645\u062B\u0627\u0644: \u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u0644\u0635\u064A\u0641", "dir", "rtl", 1, "w-full", "px-4", "py-3", "bg-white", "border", "border-slate-200", "rounded-xl", "text-sm", "placeholder-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", "text-right", 3, "formControl"], ["rows", "3", "placeholder", "\u0635\u0641 \u0647\u0630\u0647 \u0627\u0644\u0641\u0626\u0629...", "dir", "rtl", 1, "w-full", "px-4", "py-3", "bg-white", "border", "border-slate-200", "rounded-xl", "text-sm", "placeholder-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", "resize-none", "text-right", 3, "formControl"], [1, "mt-1", "text-xs", "text-slate-400", "text-start"], [1, "lg:col-span-1"], [1, "relative", "rounded-xl", "overflow-hidden", "border", "border-slate-200", "bg-slate-50", "aspect-square"], ["alt", "Preview", 1, "w-full", "h-full", "object-cover", 3, "src"], ["type", "button", 1, "absolute", "top-2", "end-2", "p-2", "bg-red-500", "text-white", "rounded-lg", "hover:bg-red-600", "transition-colors", 3, "click"], [1, "fas", "fa-trash", "text-sm"], [1, "fas", "fa-spinner", "fa-spin"], [1, "fas", "fa-plus"], [1, "space-y-4"], ["type", "text", "placeholder", "e.g. Electronics", "dir", "ltr", 1, "w-full", "px-4", "py-3", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "placeholder-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "blur", "formControl"], ["rows", "3", "placeholder", "Describe this category...", "dir", "ltr", 1, "w-full", "px-4", "py-3", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "placeholder-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "resize-none", 3, "formControl"], ["type", "text", "placeholder", "\u0645\u062B\u0627\u0644: \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0627\u062A", "dir", "rtl", 1, "w-full", "px-4", "py-3", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "placeholder-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "text-right", 3, "formControl"], ["rows", "3", "placeholder", "\u0635\u0641 \u0647\u0630\u0647 \u0627\u0644\u0641\u0626\u0629...", "dir", "rtl", 1, "w-full", "px-4", "py-3", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "placeholder-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "resize-none", "text-right", 3, "formControl"], [1, "relative", "rounded-xl", "overflow-hidden", "mb-3", "aspect-video"], ["type", "button", 1, "absolute", "top-2", "end-2", "p-2", "bg-red-500", "text-white", "rounded-lg", 3, "click"], [1, "fas", "fa-times"]], template: function CategoryCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nav", 4)(3, "a", 5);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "i", 6);
      \u0275\u0275elementStart(7, "a", 7);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "i", 6);
      \u0275\u0275elementStart(11, "span", 8);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 9)(15, "div")(16, "h1", 10);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 11);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "button", 12);
      \u0275\u0275listener("click", function CategoryCreateComponent_Template_button_click_22_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCancel());
      });
      \u0275\u0275element(23, "i", 13);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 14)(27, "form", 15);
      \u0275\u0275listener("ngSubmit", function CategoryCreateComponent_Template_form_ngSubmit_27_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(28, "div", 16)(29, "div", 17)(30, "div", 18)(31, "div", 19);
      \u0275\u0275element(32, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "h2", 21);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 22)(37, "button", 23);
      \u0275\u0275listener("click", function CategoryCreateComponent_Template_button_click_37_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setActiveTab("en"));
      });
      \u0275\u0275elementStart(38, "span", 24);
      \u0275\u0275text(39, "US");
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, " English ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "button", 23);
      \u0275\u0275listener("click", function CategoryCreateComponent_Template_button_click_41_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setActiveTab("ar"));
      });
      \u0275\u0275elementStart(42, "span", 24);
      \u0275\u0275text(43, "SA");
      \u0275\u0275elementEnd();
      \u0275\u0275text(44, " \u0627\u0644\u0639\u0631\u0628\u064A\u0629 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(45, CategoryCreateComponent_div_45_Template, 17, 15, "div", 25)(46, CategoryCreateComponent_div_46_Template, 14, 12, "div", 25);
      \u0275\u0275elementStart(47, "div", 26)(48, "div")(49, "div", 27)(50, "label", 28);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementStart(53, "span", 29);
      \u0275\u0275text(54, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "span", 30);
      \u0275\u0275element(56, "i", 31);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 32);
      \u0275\u0275element(60, "input", 33);
      \u0275\u0275elementStart(61, "button", 34);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275listener("click", function CategoryCreateComponent_Template_button_click_61_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.regenerateSlug());
      });
      \u0275\u0275element(63, "i", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "p", 36);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div")(68, "label", 37);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 32)(72, "select", 38)(73, "option", 39);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(76, CategoryCreateComponent_option_76_Template, 2, 2, "option", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275element(77, "i", 41);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(78, "div", 16)(79, "div", 42)(80, "div", 43);
      \u0275\u0275element(81, "i", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "h2", 21);
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 45);
      \u0275\u0275template(86, CategoryCreateComponent_div_86_Template, 5, 1, "div", 46);
      \u0275\u0275elementStart(87, "div")(88, "div", 47);
      \u0275\u0275listener("dragover", function CategoryCreateComponent_Template_div_dragover_88_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDragOver($event));
      })("dragleave", function CategoryCreateComponent_Template_div_dragleave_88_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDragLeave($event));
      })("drop", function CategoryCreateComponent_Template_div_drop_88_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDrop($event));
      })("click", function CategoryCreateComponent_Template_div_click_88_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r6 = \u0275\u0275reference(90);
        return \u0275\u0275resetView(fileInput_r6.click());
      });
      \u0275\u0275elementStart(89, "input", 48, 0);
      \u0275\u0275listener("change", function CategoryCreateComponent_Template_input_change_89_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onImageSelect($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 49)(92, "div", 50);
      \u0275\u0275element(93, "i", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "p", 52);
      \u0275\u0275text(95);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p", 53);
      \u0275\u0275text(98, " SVG, PNG, JPG or GIF (max 800x400px) ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(99, "div", 54)(100, "span", 53);
      \u0275\u0275element(101, "i", 55);
      \u0275\u0275text(102);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(103, "div", 16)(104, "div", 56)(105, "div", 18)(106, "div", 57);
      \u0275\u0275element(107, "i", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div")(109, "h2", 21);
      \u0275\u0275text(110);
      \u0275\u0275pipe(111, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "p", 59);
      \u0275\u0275text(113);
      \u0275\u0275pipe(114, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "button", 60);
      \u0275\u0275listener("click", function CategoryCreateComponent_Template_button_click_115_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleActive());
      });
      \u0275\u0275element(116, "span", 61);
      \u0275\u0275elementStart(117, "span", 62);
      \u0275\u0275text(118);
      \u0275\u0275pipe(119, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(120, "div", 63)(121, "button", 64);
      \u0275\u0275listener("click", function CategoryCreateComponent_Template_button_click_121_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCancel());
      });
      \u0275\u0275text(122);
      \u0275\u0275pipe(123, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "button", 65);
      \u0275\u0275template(125, CategoryCreateComponent_i_125_Template, 1, 0, "i", 66)(126, CategoryCreateComponent_i_126_Template, 1, 0, "i", 67);
      \u0275\u0275text(127);
      \u0275\u0275pipe(128, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(129, "div", 68)(130, "div", 69)(131, "div", 18)(132, "button", 70);
      \u0275\u0275listener("click", function CategoryCreateComponent_Template_button_click_132_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCancel());
      });
      \u0275\u0275element(133, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "h1", 71);
      \u0275\u0275text(135);
      \u0275\u0275pipe(136, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "p", 72);
      \u0275\u0275text(138);
      \u0275\u0275pipe(139, "translate");
      \u0275\u0275pipe(140, "translate");
      \u0275\u0275pipe(141, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "div", 73)(143, "form", 74);
      \u0275\u0275listener("ngSubmit", function CategoryCreateComponent_Template_form_ngSubmit_143_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(144, "div", 75)(145, "div", 76)(146, "h3", 77);
      \u0275\u0275text(147);
      \u0275\u0275pipe(148, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "div", 78)(150, "button", 79);
      \u0275\u0275listener("click", function CategoryCreateComponent_Template_button_click_150_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setActiveTab("en"));
      });
      \u0275\u0275text(151, " EN ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "button", 79);
      \u0275\u0275listener("click", function CategoryCreateComponent_Template_button_click_152_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setActiveTab("ar"));
      });
      \u0275\u0275text(153, " AR ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(154, CategoryCreateComponent_div_154_Template, 13, 10, "div", 80)(155, CategoryCreateComponent_div_155_Template, 11, 8, "div", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "div", 75)(157, "div", 27)(158, "label", 81);
      \u0275\u0275text(159);
      \u0275\u0275pipe(160, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "span", 82);
      \u0275\u0275text(162);
      \u0275\u0275pipe(163, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "div", 32);
      \u0275\u0275element(165, "input", 83);
      \u0275\u0275elementStart(166, "button", 84);
      \u0275\u0275listener("click", function CategoryCreateComponent_Template_button_click_166_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.regenerateSlug());
      });
      \u0275\u0275element(167, "i", 35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(168, "div", 75)(169, "label", 37);
      \u0275\u0275text(170);
      \u0275\u0275pipe(171, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "div", 32)(173, "select", 85)(174, "option", 39);
      \u0275\u0275text(175);
      \u0275\u0275pipe(176, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(177, CategoryCreateComponent_option_177_Template, 2, 2, "option", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275element(178, "i", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(179, "div", 75)(180, "label", 86);
      \u0275\u0275text(181);
      \u0275\u0275pipe(182, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(183, CategoryCreateComponent_div_183_Template, 4, 1, "div", 87);
      \u0275\u0275elementStart(184, "div", 88);
      \u0275\u0275listener("click", function CategoryCreateComponent_Template_div_click_184_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInputMobile_r10 = \u0275\u0275reference(186);
        return \u0275\u0275resetView(fileInputMobile_r10.click());
      });
      \u0275\u0275elementStart(185, "input", 48, 1);
      \u0275\u0275listener("change", function CategoryCreateComponent_Template_input_change_185_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onImageSelect($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "div", 89);
      \u0275\u0275element(188, "i", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "p", 91);
      \u0275\u0275text(190);
      \u0275\u0275pipe(191, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(192, "div", 92)(193, "button", 93);
      \u0275\u0275listener("click", function CategoryCreateComponent_Template_button_click_193_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275template(194, CategoryCreateComponent_i_194_Template, 1, 0, "i", 66)(195, CategoryCreateComponent_i_195_Template, 1, 0, "i", 67);
      \u0275\u0275text(196);
      \u0275\u0275pipe(197, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "button", 94);
      \u0275\u0275listener("click", function CategoryCreateComponent_Template_button_click_198_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCancel());
      });
      \u0275\u0275text(199);
      \u0275\u0275pipe(200, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_23_0;
      let tmp_43_0;
      let tmp_44_0;
      let tmp_45_0;
      let tmp_46_0;
      let tmp_47_0;
      let tmp_48_0;
      let tmp_49_0;
      let tmp_50_0;
      let tmp_51_0;
      \u0275\u0275attribute("dir", ctx.dir);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 113, "COMMON.HOME"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 115, "CATEGORIES.TITLE"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 117, ctx.pageTitle));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 119, ctx.pageTitle), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 121, ctx.isEditMode ? "CATEGORIES.EDIT_SUBTITLE" : "CATEGORIES.CREATE_SUBTITLE"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 123, "CATEGORIES.BACK_TO_LIST"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.categoryForm);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(35, 125, "CATEGORIES.GENERAL_INFO"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("bg-indigo-600", ctx.activeTab === "en")("text-white", ctx.activeTab === "en")("text-slate-600", ctx.activeTab !== "en")("hover:bg-slate-50", ctx.activeTab !== "en");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("bg-indigo-600", ctx.activeTab === "ar")("text-white", ctx.activeTab === "ar")("text-slate-600", ctx.activeTab !== "ar")("hover:bg-slate-50", ctx.activeTab !== "ar");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.activeTab === "en");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "ar");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(52, 127, "CATEGORIES.CATEGORY_SLUG"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 129, "COMMON.AUTO_GENERATED"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("border-red-300", ((tmp_23_0 = ctx.categoryForm.get("slug")) == null ? null : tmp_23_0.invalid) && ((tmp_23_0 = ctx.categoryForm.get("slug")) == null ? null : tmp_23_0.touched));
      \u0275\u0275advance();
      \u0275\u0275propertyInterpolate("title", \u0275\u0275pipeBind1(62, 131, "COMMON.REGENERATE"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(66, 133, "CATEGORIES.SLUG_HELPER"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 135, "CATEGORIES.PARENT_CATEGORY"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 137, "CATEGORIES.NO_PARENT"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.parents);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(84, 139, "CATEGORIES.CATEGORY_IMAGE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.imagePreview);
      \u0275\u0275advance();
      \u0275\u0275classProp("lg:col-span-2", ctx.imagePreview)("lg:col-span-3", !ctx.imagePreview);
      \u0275\u0275advance();
      \u0275\u0275classProp("border-indigo-400", ctx.isDragging)("bg-indigo-50", ctx.isDragging)("border-slate-200", !ctx.isDragging)("hover:border-indigo-300", !ctx.isDragging)("hover:bg-slate-50", !ctx.isDragging);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(96, 141, "CATEGORIES.CLICK_TO_UPLOAD"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.imagePreview ? "Image selected" : "No image set", " ");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(111, 143, "CATEGORIES.CATEGORY_STATUS"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(114, 145, "CATEGORIES.STATUS_HELPER"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-indigo-600", (tmp_43_0 = ctx.categoryForm.get("isActive")) == null ? null : tmp_43_0.value)("bg-slate-200", !((tmp_44_0 = ctx.categoryForm.get("isActive")) == null ? null : tmp_44_0.value));
      \u0275\u0275advance();
      \u0275\u0275classProp("translate-x-8", (tmp_45_0 = ctx.categoryForm.get("isActive")) == null ? null : tmp_45_0.value)("translate-x-1", !((tmp_46_0 = ctx.categoryForm.get("isActive")) == null ? null : tmp_46_0.value))("rtl:-translate-x-8", ((tmp_47_0 = ctx.categoryForm.get("isActive")) == null ? null : tmp_47_0.value) && ctx.dir === "rtl")("rtl:-translate-x-1", !((tmp_48_0 = ctx.categoryForm.get("isActive")) == null ? null : tmp_48_0.value) && ctx.dir === "rtl");
      \u0275\u0275advance();
      \u0275\u0275classProp("text-white", (tmp_49_0 = ctx.categoryForm.get("isActive")) == null ? null : tmp_49_0.value)("text-slate-600", !((tmp_50_0 = ctx.categoryForm.get("isActive")) == null ? null : tmp_50_0.value));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(119, 147, ((tmp_51_0 = ctx.categoryForm.get("isActive")) == null ? null : tmp_51_0.value) ? "COMMON.ACTIVE" : "COMMON.INACTIVE"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(123, 149, "COMMON.CANCEL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(128, 151, "CATEGORIES.CREATE_CATEGORY"), " ");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(136, 153, "CATEGORIES.CREATE_CATEGORY"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(139, 155, "COMMON.HOME"), " > ", \u0275\u0275pipeBind1(140, 157, "CATEGORIES.TITLE"), " > ", \u0275\u0275pipeBind1(141, 159, "COMMON.CREATE"), "");
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.categoryForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(148, 161, "CATEGORIES.GENERAL_INFO"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("bg-indigo-600", ctx.activeTab === "en")("text-white", ctx.activeTab === "en")("text-slate-600", ctx.activeTab !== "en");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-indigo-600", ctx.activeTab === "ar")("text-white", ctx.activeTab === "ar")("text-slate-600", ctx.activeTab !== "ar");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.activeTab === "en");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "ar");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(160, 163, "CATEGORIES.CATEGORY_SLUG"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(163, 165, "COMMON.AUTO_GENERATED"), " ");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(171, 167, "CATEGORIES.PARENT_CATEGORY"));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(176, 169, "CATEGORIES.CHOOSE_PARENT"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.parents);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(182, 171, "CATEGORIES.CATEGORY_IMAGE"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.imagePreview);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(191, 173, "CATEGORIES.TAP_TO_UPLOAD"));
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(197, 175, "CATEGORIES.CREATE_CATEGORY"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(200, 177, "COMMON.CANCEL"), " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryCreateComponent, { className: "CategoryCreateComponent", filePath: "src\\app\\features\\categories\\pages\\category-create\\category-create.component.ts", lineNumber: 23 });
})();

// src/app/features/categories/categories.module.ts
var routes = [
  { path: "", component: CategoryListComponent },
  { path: "create", component: CategoryCreateComponent },
  { path: "edit/:id", component: CategoryCreateComponent }
];
var CategoriesModule = class _CategoriesModule {
  static \u0275fac = function CategoriesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoriesModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CategoriesModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    TranslateModule,
    LanguageSwitcherComponent,
    CategoryListComponent,
    CategoryCreateComponent
  ] });
};
export {
  CategoriesModule
};
//# sourceMappingURL=chunk-OBNSX66O.js.map
