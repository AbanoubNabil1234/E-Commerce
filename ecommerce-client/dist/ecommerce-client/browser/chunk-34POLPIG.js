import {
  BrandService
} from "./chunk-UMMWDTGH.js";
import {
  LanguageService
} from "./chunk-SBRLR34M.js";
import {
  NotificationService
} from "./chunk-ZICMI5CI.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-XIYZMPFO.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-74XXAL65.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-BOQBRULU.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  Subject,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-IGAGZNZV.js";
import "./chunk-N7TOP6ZD.js";

// src/app/features/brands/pages/create-brand/create-brand.component.ts
var _c0 = (a0, a1) => ({ "border-slate-200": a0, "border-red-400 bg-red-50": a1 });
var _c1 = (a0, a1, a2) => ({ "bg-slate-100 border-slate-200 text-slate-500": a0, "bg-slate-50 border-slate-200": a1, "border-red-400 bg-red-50": a2 });
var _c2 = (a0) => ({ "border-red-400 bg-red-50": a0 });
var _c3 = (a0, a1) => ({ "border-slate-300 bg-slate-50": a0, "border-indigo-500 bg-indigo-50": a1 });
function CreateBrandComponent_p_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 114);
    \u0275\u0275element(1, "i", 115);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("name"), " ");
  }
}
function CreateBrandComponent_p_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 116);
    \u0275\u0275element(1, "i", 115);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("slug"), " ");
  }
}
function CreateBrandComponent_p_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 116);
    \u0275\u0275element(1, "i", 115);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("website"), " ");
  }
}
function CreateBrandComponent_p_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 117);
    \u0275\u0275element(1, "i", 115);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("description"), " ");
  }
}
function CreateBrandComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275listener("dragover", function CreateBrandComponent_div_95_Template_div_dragover_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogoDragOver($event));
    })("dragleave", function CreateBrandComponent_div_95_Template_div_dragleave_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogoDragLeave($event));
    })("drop", function CreateBrandComponent_div_95_Template_div_drop_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogoDrop($event));
    });
    \u0275\u0275elementStart(1, "input", 119);
    \u0275\u0275listener("change", function CreateBrandComponent_div_95_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogoFileSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 120)(3, "div", 121);
    \u0275\u0275element(4, "i", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 123);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 124);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c3, !ctx_r1.isDraggingLogo, ctx_r1.isDraggingLogo));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "BRANDS.CREATE.UPLOAD_FILE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 5, "BRANDS.FILE_TYPES"));
  }
}
function CreateBrandComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275element(1, "img", 126);
    \u0275\u0275elementStart(2, "button", 127);
    \u0275\u0275listener("click", function CreateBrandComponent_div_96_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeLogo());
    });
    \u0275\u0275element(3, "i", 128);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.logoPreview, \u0275\u0275sanitizeUrl);
  }
}
function CreateBrandComponent_img_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 129);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.logoPreview, \u0275\u0275sanitizeUrl);
  }
}
function CreateBrandComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275element(1, "i", 131);
    \u0275\u0275elementEnd();
  }
}
function CreateBrandComponent_i_167_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 132);
  }
}
function CreateBrandComponent_p_194_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 133);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("name"));
  }
}
function CreateBrandComponent_div_215_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120)(1, "div", 134);
    \u0275\u0275element(2, "i", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 136);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 124);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 2, "BRANDS.CREATE.UPLOAD_LOGO"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "BRANDS.FILE_TYPES"));
  }
}
function CreateBrandComponent_img_216_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 137);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.logoPreview, \u0275\u0275sanitizeUrl);
  }
}
function CreateBrandComponent_i_237_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 138);
  }
}
var CreateBrandComponent = class _CreateBrandComponent {
  fb;
  brandService;
  router;
  translate;
  notificationService;
  languageService;
  brandForm;
  isSubmitting = false;
  autoGenerateSlug = true;
  logoPreview = null;
  bannerPreview = null;
  isDraggingLogo = false;
  isDraggingBanner = false;
  // Responsive
  isMobile = false;
  isTablet = false;
  // Character limits
  maxDescriptionLength = 500;
  destroy$ = new Subject();
  constructor(fb, brandService, router, translate, notificationService, languageService) {
    this.fb = fb;
    this.brandService = brandService;
    this.router = router;
    this.translate = translate;
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
  get descriptionLength() {
    return this.brandForm?.get("description")?.value?.length || 0;
  }
  ngOnInit() {
    this.initForm();
    this.setupSlugAutoGeneration();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  initForm() {
    this.brandForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      slug: ["", [Validators.required, Validators.pattern(/^[a-z0-9-]+$/)]],
      website: ["", [Validators.pattern(/^https?:\/\/.+/)]],
      description: ["", [Validators.maxLength(this.maxDescriptionLength)]],
      logoUrl: [""],
      bannerUrl: [""],
      isActive: [true]
    });
  }
  setupSlugAutoGeneration() {
    this.brandForm.get("name")?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((name) => {
      if (this.autoGenerateSlug && name) {
        const slug = this.generateSlug(name);
        this.brandForm.patchValue({ slug }, { emitEvent: false });
      }
    });
  }
  generateSlug(name) {
    return name.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
  }
  toggleAutoGenerateSlug() {
    this.autoGenerateSlug = !this.autoGenerateSlug;
    if (this.autoGenerateSlug) {
      const name = this.brandForm.get("name")?.value;
      if (name) {
        this.brandForm.patchValue({ slug: this.generateSlug(name) });
      }
    }
  }
  // File upload handlers
  onLogoDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDraggingLogo = true;
  }
  onLogoDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDraggingLogo = false;
  }
  onLogoDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDraggingLogo = false;
    const files = event.dataTransfer?.files;
    if (files?.length) {
      this.handleLogoFile(files[0]);
    }
  }
  onLogoFileSelect(event) {
    const input = event.target;
    if (input.files?.length) {
      this.handleLogoFile(input.files[0]);
    }
  }
  handleLogoFile(file) {
    if (!file.type.startsWith("image/")) {
      this.notificationService.error(this.translate.instant("BRANDS.CREATE.INVALID_IMAGE"));
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      this.logoPreview = e.target?.result;
      this.brandForm.patchValue({ logoUrl: this.logoPreview });
    };
    reader.readAsDataURL(file);
  }
  removeLogo() {
    this.logoPreview = null;
    this.brandForm.patchValue({ logoUrl: "" });
  }
  // Banner upload (similar pattern)
  onBannerFileSelect(event) {
    const input = event.target;
    if (input.files?.length) {
      this.handleBannerFile(input.files[0]);
    }
  }
  handleBannerFile(file) {
    if (!file.type.startsWith("image/")) {
      this.notificationService.error(this.translate.instant("BRANDS.CREATE.INVALID_IMAGE"));
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      this.bannerPreview = e.target?.result;
      this.brandForm.patchValue({ bannerUrl: this.bannerPreview });
    };
    reader.readAsDataURL(file);
  }
  removeBanner() {
    this.bannerPreview = null;
    this.brandForm.patchValue({ bannerUrl: "" });
  }
  // Form submission
  onSubmit(addAnother = false) {
    if (this.brandForm.invalid) {
      this.brandForm.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    const formValue = this.brandForm.value;
    const createRequest = {
      name: formValue.name,
      slug: formValue.slug,
      description: formValue.description,
      logoUrl: formValue.logoUrl,
      website: formValue.website,
      translations: [
        {
          languageCode: "en",
          name: formValue.name,
          description: formValue.description,
          slug: formValue.slug
        }
      ]
    };
    this.brandService.create(createRequest).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.notificationService.success(this.translate.instant("MESSAGES.BRAND_CREATED"));
        this.isSubmitting = false;
        if (addAnother) {
          this.resetForm();
        } else {
          this.router.navigate(["/brands"]);
        }
      },
      error: (error) => {
        console.error("Failed to create brand:", error);
        this.notificationService.error(this.translate.instant("COMMON.ERROR"));
        this.isSubmitting = false;
      }
    });
  }
  resetForm() {
    this.brandForm.reset({ isActive: true });
    this.logoPreview = null;
    this.bannerPreview = null;
    this.autoGenerateSlug = true;
  }
  onCancel() {
    this.router.navigate(["/brands"]);
  }
  // Validation helpers
  isFieldInvalid(fieldName) {
    const field = this.brandForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  getFieldError(fieldName) {
    const field = this.brandForm.get(fieldName);
    if (field?.errors) {
      if (field.errors["required"])
        return this.translate.instant("VALIDATION.REQUIRED");
      if (field.errors["minlength"])
        return this.translate.instant("VALIDATION.MIN_LENGTH", { min: field.errors["minlength"].requiredLength });
      if (field.errors["maxlength"])
        return this.translate.instant("VALIDATION.MAX_LENGTH", { max: field.errors["maxlength"].requiredLength });
      if (field.errors["pattern"])
        return this.translate.instant("VALIDATION.INVALID_FORMAT");
    }
    return "";
  }
  static \u0275fac = function CreateBrandComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateBrandComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(BrandService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(LanguageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateBrandComponent, selectors: [["app-create-brand"]], hostBindings: function CreateBrandComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function CreateBrandComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, \u0275\u0275resolveWindow);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 240, vars: 193, consts: [["logoInput", ""], [1, "min-h-full", "bg-slate-50"], [1, "hidden", "md:block"], [1, "p-6", "lg:p-8"], [1, "flex", "items-center", "gap-2", "text-sm", "text-slate-500", "mb-6"], ["routerLink", "/dashboard", 1, "hover:text-indigo-600", "transition-colors"], [1, "fas", "fa-chevron-right", "text-xs", "text-slate-300", "rtl:rotate-180"], ["routerLink", "/brands", 1, "hover:text-indigo-600", "transition-colors"], [1, "text-slate-800", "font-medium"], [1, "mb-8"], [1, "text-2xl", "font-bold", "text-slate-800"], [1, "mt-1", "text-sm", "text-slate-500"], [1, "grid", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "space-y-6"], [3, "ngSubmit", "formGroup"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-sm", "overflow-hidden", "mb-6"], [1, "px-6", "py-4", "border-b", "border-slate-100", "flex", "items-center", "gap-3"], [1, "w-8", "h-8", "rounded-lg", "bg-indigo-100", "flex", "items-center", "justify-center"], [1, "fas", "fa-info-circle", "text-indigo-600"], [1, "font-semibold", "text-slate-800"], [1, "p-6", "space-y-5"], ["for", "brandName", 1, "block", "text-sm", "font-medium", "text-slate-700", "mb-1.5"], [1, "text-red-500"], ["type", "text", "id", "brandName", "formControlName", "name", 1, "w-full", "px-4", "py-2.5", "bg-slate-50", "border", "rounded-xl", "text-sm", "transition-all", "duration-200", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "focus:bg-white", 3, "placeholder", "ngClass"], ["id", "name-error", "class", "mt-1.5 text-xs text-red-500 flex items-center gap-1", 4, "ngIf"], [1, "grid", "md:grid-cols-2", "gap-5"], ["for", "brandSlug", 1, "block", "text-sm", "font-medium", "text-slate-700", "mb-1.5"], [1, "flex", "items-center", "gap-2", "mb-2"], [1, "text-xs", "text-slate-500"], ["type", "button", "role", "switch", 1, "relative", "inline-flex", "h-5", "w-9", "flex-shrink-0", "cursor-pointer", "rounded-full", "border-2", "border-transparent", "transition-colors", "duration-200", "ease-in-out", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:ring-offset-2", 3, "click", "ngClass"], [1, "pointer-events-none", "inline-block", "h-4", "w-4", "transform", "rounded-full", "bg-white", "shadow", "ring-0", "transition", "duration-200", "ease-in-out", 3, "ngClass"], ["type", "text", "id", "brandSlug", "formControlName", "slug", 1, "w-full", "px-4", "py-2.5", "border", "rounded-xl", "text-sm", "transition-all", "duration-200", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "font-mono", 3, "readonly", "placeholder", "ngClass"], ["class", "mt-1.5 text-xs text-red-500 flex items-center gap-1", 4, "ngIf"], ["for", "website", 1, "block", "text-sm", "font-medium", "text-slate-700", "mb-1.5"], [1, "text-slate-400", "text-xs"], [1, "relative", "mt-7"], [1, "absolute", "inset-y-0", "start-0", "flex", "items-center", "ps-3", "text-slate-400", "text-sm"], ["type", "url", "id", "website", "formControlName", "website", "placeholder", "www.example.com", 1, "w-full", "ps-16", "pe-4", "py-2.5", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "transition-all", "duration-200", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "focus:bg-white", 3, "ngClass"], ["for", "description", 1, "block", "text-sm", "font-medium", "text-slate-700", "mb-1.5"], ["id", "description", "formControlName", "description", "rows", "4", 1, "w-full", "px-4", "py-3", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "transition-all", "duration-200", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "focus:bg-white", "resize-none", 3, "placeholder", "ngClass"], [1, "flex", "justify-between", "mt-1.5"], ["class", "text-xs text-red-500 flex items-center gap-1", 4, "ngIf"], [1, "text-xs", "text-slate-400", "ms-auto"], [1, "w-8", "h-8", "rounded-lg", "bg-purple-100", "flex", "items-center", "justify-center"], [1, "fas", "fa-image", "text-purple-600"], [1, "p-6"], [1, "block", "text-sm", "font-medium", "text-slate-700", "mb-2"], ["class", "relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 cursor-pointer hover:border-indigo-400 hover:bg-indigo-50/50", 3, "ngClass", "dragover", "dragleave", "drop", 4, "ngIf"], ["class", "relative inline-block", 4, "ngIf"], [1, "space-y-6"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-sm", "overflow-hidden", "sticky", "top-24"], [1, "px-6", "py-4", "border-b", "border-slate-100"], [1, "w-24", "h-24", "mx-auto", "bg-gradient-to-br", "from-indigo-100", "to-purple-100", "rounded-xl", "mb-4", "flex", "items-center", "justify-center", "overflow-hidden"], ["alt", "Brand preview", "class", "w-full h-full object-contain", 3, "src", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], [1, "font-semibold", "text-slate-800", "mb-1"], [1, "text-xs", "text-slate-500", "mb-3"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-full", "text-xs", "font-medium", "bg-emerald-100", "text-emerald-700"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-emerald-500"], [1, "px-6", "py-4", "bg-slate-50/50", "border-t", "border-slate-100"], [1, "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wide", "mb-3"], [1, "space-y-2", "text-sm"], [1, "flex", "justify-between"], [1, "text-slate-500"], [1, "text-slate-700", "font-medium", "flex", "items-center", "gap-2"], [1, "w-5", "h-5", "rounded-full", "bg-indigo-100", "flex", "items-center", "justify-center"], [1, "fas", "fa-user", "text-xs", "text-indigo-600"], [1, "text-slate-700", "font-medium"], [1, "bg-amber-50", "rounded-xl", "border", "border-amber-200", "overflow-hidden"], [1, "px-6", "py-4", "flex", "items-center", "gap-3"], [1, "w-8", "h-8", "rounded-lg", "bg-amber-100", "flex", "items-center", "justify-center"], [1, "fas", "fa-lightbulb", "text-amber-600"], [1, "font-semibold", "text-amber-800"], [1, "px-6", "pb-5"], [1, "space-y-2", "text-sm", "text-amber-700"], [1, "flex", "items-start", "gap-2"], [1, "fas", "fa-check", "text-xs", "mt-1", "text-amber-500"], [1, "sticky", "bottom-0", "bg-white", "border-t", "border-slate-200", "px-6", "lg:px-8", "py-4", "flex", "items-center", "justify-between", "shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "px-5", "py-2.5", "text-slate-700", "font-medium", "rounded-xl", "hover:bg-slate-100", "transition-all", "duration-200", "active:scale-[0.98]", 3, "click"], [1, "flex", "items-center", "gap-3"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "px-5", "py-2.5", "bg-slate-100", "text-slate-700", "font-medium", "rounded-xl", "hover:bg-slate-200", "transition-all", "duration-200", "disabled:opacity-50", "disabled:cursor-not-allowed", "active:scale-[0.98]", 3, "click", "disabled"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "px-6", "py-2.5", "bg-indigo-600", "text-white", "font-semibold", "rounded-xl", "hover:bg-indigo-700", "hover:-translate-y-0.5", "hover:shadow-lg", "transition-all", "duration-200", "disabled:opacity-50", "disabled:cursor-not-allowed", "disabled:hover:translate-y-0", "active:scale-[0.98]", "motion-reduce:transform-none", 3, "click", "disabled"], ["class", "fas fa-spinner fa-spin", 4, "ngIf"], [1, "md:hidden", "min-h-screen", "flex", "flex-col", "bg-slate-50"], [1, "sticky", "top-0", "z-50", "bg-white", "border-b", "border-slate-200", "px-4", "py-3", "flex", "items-center", "justify-between"], ["type", "button", 1, "p-2", "-ms-2", "text-slate-600", "hover:text-slate-900", "transition-colors", 3, "click"], [1, "fas", "fa-bars", "text-lg"], ["type", "button", 1, "p-2", "-me-2", "text-slate-400"], [1, "fas", "fa-question-circle", "text-lg"], [1, "flex-1", "overflow-y-auto", "p-4", "pb-40", "space-y-4"], [3, "formGroup"], [1, "mb-4"], [1, "text-xs", "font-bold", "text-slate-500", "uppercase", "tracking-wide", "mb-3"], [1, "bg-white", "rounded-2xl", "border", "border-slate-200", "p-4", "space-y-4"], ["for", "brandNameMobile", 1, "block", "text-sm", "font-medium", "text-slate-700", "mb-1.5"], ["type", "text", "id", "brandNameMobile", "formControlName", "name", 1, "w-full", "px-4", "py-3", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "focus:bg-white", 3, "placeholder", "ngClass"], ["class", "mt-1 text-xs text-red-500", 4, "ngIf"], ["for", "brandCodeMobile", 1, "block", "text-sm", "font-medium", "text-slate-700", "mb-1.5"], ["type", "text", "id", "brandCodeMobile", "formControlName", "slug", 1, "w-full", "px-4", "py-3", "border", "rounded-xl", "text-sm", "font-mono", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", 3, "readonly", "placeholder", "ngClass"], ["for", "descriptionMobile", 1, "block", "text-sm", "font-medium", "text-slate-700", "mb-1.5"], ["id", "descriptionMobile", "formControlName", "description", "rows", "3", 1, "w-full", "px-4", "py-3", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "focus:bg-white", "resize-none", 3, "placeholder"], [1, "bg-white", "rounded-2xl", "border", "border-slate-200", "p-4", "text-center", "cursor-pointer", "hover:border-indigo-400", "transition-colors", 3, "click"], ["type", "file", "accept", "image/*", 1, "hidden", 3, "change"], ["class", "space-y-2", 4, "ngIf"], ["alt", "Logo", "class", "w-24 h-24 mx-auto object-contain rounded-lg border border-slate-200", 3, "src", 4, "ngIf"], [1, "bg-white", "rounded-2xl", "border", "border-slate-200", "p-4"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "font-medium", "text-slate-700"], ["type", "button", "role", "switch", 1, "relative", "inline-flex", "h-6", "w-11", "flex-shrink-0", "cursor-pointer", "rounded-full", "border-2", "border-transparent", "transition-colors", "duration-200", "ease-in-out", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:ring-offset-2", 3, "click", "ngClass"], [1, "pointer-events-none", "inline-block", "h-5", "w-5", "transform", "rounded-full", "bg-white", "shadow", "ring-0", "transition", "duration-200", "ease-in-out", 3, "ngClass"], [1, "fixed", "bottom-0", "inset-x-0", "bg-white", "border-t", "border-slate-200", "p-4", "pb-[calc(1rem+env(safe-area-inset-bottom))]", "flex", "items-center", "gap-3", "z-40"], ["type", "button", 1, "flex-1", "px-4", "py-3", "text-slate-700", "font-medium", "rounded-xl", "border", "border-slate-200", "hover:bg-slate-50", "transition-colors", "active:scale-[0.98]", 3, "click"], ["type", "button", 1, "flex-1", "px-4", "py-3", "bg-indigo-600", "text-white", "font-semibold", "rounded-xl", "hover:bg-indigo-700", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", "active:scale-[0.98]", 3, "click", "disabled"], ["class", "fas fa-spinner fa-spin me-2", 4, "ngIf"], ["id", "name-error", 1, "mt-1.5", "text-xs", "text-red-500", "flex", "items-center", "gap-1"], [1, "fas", "fa-exclamation-circle"], [1, "mt-1.5", "text-xs", "text-red-500", "flex", "items-center", "gap-1"], [1, "text-xs", "text-red-500", "flex", "items-center", "gap-1"], [1, "relative", "border-2", "border-dashed", "rounded-xl", "p-8", "text-center", "transition-all", "duration-200", "cursor-pointer", "hover:border-indigo-400", "hover:bg-indigo-50/50", 3, "dragover", "dragleave", "drop", "ngClass"], ["type", "file", "accept", "image/*", 1, "absolute", "inset-0", "w-full", "h-full", "opacity-0", "cursor-pointer", 3, "change"], [1, "space-y-2"], [1, "w-12", "h-12", "mx-auto", "rounded-xl", "bg-slate-100", "flex", "items-center", "justify-center"], [1, "fas", "fa-cloud-upload-alt", "text-xl", "text-slate-400"], [1, "text-sm", "text-indigo-600", "font-medium"], [1, "text-xs", "text-slate-400"], [1, "relative", "inline-block"], ["alt", "Logo preview", 1, "w-32", "h-32", "object-contain", "bg-slate-50", "rounded-xl", "border", "border-slate-200", 3, "src"], ["type", "button", 1, "absolute", "top-2", "end-2", "p-1.5", "bg-white/90", "backdrop-blur", "rounded-lg", "shadow-sm", "hover:bg-red-50", "hover:text-red-600", "transition-colors", 3, "click"], [1, "fas", "fa-times", "text-sm"], ["alt", "Brand preview", 1, "w-full", "h-full", "object-contain", 3, "src"], [1, "text-center"], [1, "fas", "fa-image", "text-3xl", "text-indigo-200"], [1, "fas", "fa-spinner", "fa-spin"], [1, "mt-1", "text-xs", "text-red-500"], [1, "w-12", "h-12", "mx-auto", "rounded-xl", "bg-indigo-50", "flex", "items-center", "justify-center"], [1, "fas", "fa-image", "text-xl", "text-indigo-500"], [1, "text-sm", "font-medium", "text-indigo-600"], ["alt", "Logo", 1, "w-24", "h-24", "mx-auto", "object-contain", "rounded-lg", "border", "border-slate-200", 3, "src"], [1, "fas", "fa-spinner", "fa-spin", "me-2"]], template: function CreateBrandComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "nav", 4)(4, "a", 5);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "i", 6);
      \u0275\u0275elementStart(8, "a", 7);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "i", 6);
      \u0275\u0275elementStart(12, "span", 8);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 9)(16, "h1", 10);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 11);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 12)(23, "div", 13)(24, "form", 14);
      \u0275\u0275listener("ngSubmit", function CreateBrandComponent_Template_form_ngSubmit_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17);
      \u0275\u0275element(28, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "h2", 19);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 20)(33, "div")(34, "label", 21);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementStart(37, "span", 22);
      \u0275\u0275text(38, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(39, "input", 23);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275template(41, CreateBrandComponent_p_41_Template, 3, 1, "p", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 25)(43, "div")(44, "label", 26);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 27)(48, "span", 28);
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "button", 29);
      \u0275\u0275listener("click", function CreateBrandComponent_Template_button_click_51_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleAutoGenerateSlug());
      });
      \u0275\u0275element(52, "span", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(53, "input", 31);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275template(55, CreateBrandComponent_p_55_Template, 3, 1, "p", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div")(57, "label", 33);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementStart(60, "span", 34);
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 35)(64, "span", 36);
      \u0275\u0275text(65, "https://");
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "input", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275template(67, CreateBrandComponent_p_67_Template, 3, 1, "p", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div")(69, "label", 38);
      \u0275\u0275text(70);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "textarea", 39);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275text(74, "                                    ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 40);
      \u0275\u0275template(76, CreateBrandComponent_p_76_Template, 3, 1, "p", 41);
      \u0275\u0275elementStart(77, "p", 42);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(80, "div", 15)(81, "div", 16)(82, "div", 43);
      \u0275\u0275element(83, "i", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "h2", 19);
      \u0275\u0275text(85);
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 45)(88, "div")(89, "label", 46);
      \u0275\u0275text(90);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275elementStart(92, "span", 34);
      \u0275\u0275text(93);
      \u0275\u0275pipe(94, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(95, CreateBrandComponent_div_95_Template, 11, 10, "div", 47)(96, CreateBrandComponent_div_96_Template, 4, 1, "div", 48);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(97, "div", 49)(98, "div", 50)(99, "div", 51)(100, "h3", 19);
      \u0275\u0275text(101);
      \u0275\u0275pipe(102, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "div", 45)(104, "div", 52);
      \u0275\u0275template(105, CreateBrandComponent_img_105_Template, 1, 1, "img", 53)(106, CreateBrandComponent_div_106_Template, 2, 0, "div", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "h4", 55);
      \u0275\u0275text(108);
      \u0275\u0275pipe(109, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "p", 56);
      \u0275\u0275text(111);
      \u0275\u0275pipe(112, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "span", 57);
      \u0275\u0275element(114, "span", 58);
      \u0275\u0275text(115);
      \u0275\u0275pipe(116, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "div", 59)(118, "h4", 60);
      \u0275\u0275text(119);
      \u0275\u0275pipe(120, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "div", 61)(122, "div", 62)(123, "span", 63);
      \u0275\u0275text(124);
      \u0275\u0275pipe(125, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "span", 64)(127, "span", 65);
      \u0275\u0275element(128, "i", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275text(129, " Admin User ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "div", 62)(131, "span", 63);
      \u0275\u0275text(132);
      \u0275\u0275pipe(133, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "span", 67);
      \u0275\u0275text(135);
      \u0275\u0275pipe(136, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(137, "div", 68)(138, "div", 69)(139, "div", 70);
      \u0275\u0275element(140, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "h3", 72);
      \u0275\u0275text(142);
      \u0275\u0275pipe(143, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "div", 73)(145, "ul", 74)(146, "li", 75);
      \u0275\u0275element(147, "i", 76);
      \u0275\u0275text(148);
      \u0275\u0275pipe(149, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "li", 75);
      \u0275\u0275element(151, "i", 76);
      \u0275\u0275text(152);
      \u0275\u0275pipe(153, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "li", 75);
      \u0275\u0275element(155, "i", 76);
      \u0275\u0275text(156);
      \u0275\u0275pipe(157, "translate");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(158, "div", 77)(159, "button", 78);
      \u0275\u0275listener("click", function CreateBrandComponent_Template_button_click_159_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCancel());
      });
      \u0275\u0275text(160);
      \u0275\u0275pipe(161, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "div", 79)(163, "button", 80);
      \u0275\u0275listener("click", function CreateBrandComponent_Template_button_click_163_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit(true));
      });
      \u0275\u0275text(164);
      \u0275\u0275pipe(165, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "button", 81);
      \u0275\u0275listener("click", function CreateBrandComponent_Template_button_click_166_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit(false));
      });
      \u0275\u0275template(167, CreateBrandComponent_i_167_Template, 1, 0, "i", 82);
      \u0275\u0275text(168);
      \u0275\u0275pipe(169, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(170, "div", 83)(171, "div", 84)(172, "button", 85);
      \u0275\u0275listener("click", function CreateBrandComponent_Template_button_click_172_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCancel());
      });
      \u0275\u0275element(173, "i", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "h1", 19);
      \u0275\u0275text(175);
      \u0275\u0275pipe(176, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "button", 87);
      \u0275\u0275element(178, "i", 88);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(179, "div", 89)(180, "form", 90)(181, "div", 91)(182, "h2", 92);
      \u0275\u0275text(183);
      \u0275\u0275pipe(184, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "div", 93)(186, "div")(187, "label", 94);
      \u0275\u0275text(188);
      \u0275\u0275pipe(189, "translate");
      \u0275\u0275elementStart(190, "span", 22);
      \u0275\u0275text(191, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(192, "input", 95);
      \u0275\u0275pipe(193, "translate");
      \u0275\u0275template(194, CreateBrandComponent_p_194_Template, 2, 1, "p", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "div")(196, "label", 97);
      \u0275\u0275text(197);
      \u0275\u0275pipe(198, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(199, "input", 98);
      \u0275\u0275pipe(200, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "div")(202, "label", 99);
      \u0275\u0275text(203);
      \u0275\u0275pipe(204, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "textarea", 100);
      \u0275\u0275pipe(206, "translate");
      \u0275\u0275text(207, "                            ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(208, "div", 91)(209, "h2", 92);
      \u0275\u0275text(210);
      \u0275\u0275pipe(211, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "div", 101);
      \u0275\u0275listener("click", function CreateBrandComponent_Template_div_click_212_listener() {
        \u0275\u0275restoreView(_r1);
        const logoInput_r5 = \u0275\u0275reference(214);
        return \u0275\u0275resetView(logoInput_r5.click());
      });
      \u0275\u0275elementStart(213, "input", 102, 0);
      \u0275\u0275listener("change", function CreateBrandComponent_Template_input_change_213_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLogoFileSelect($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(215, CreateBrandComponent_div_215_Template, 9, 6, "div", 103)(216, CreateBrandComponent_img_216_Template, 1, 1, "img", 104);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(217, "div", 91)(218, "h2", 92);
      \u0275\u0275text(219);
      \u0275\u0275pipe(220, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "div", 105)(222, "div", 106)(223, "div")(224, "p", 107);
      \u0275\u0275text(225);
      \u0275\u0275pipe(226, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "p", 28);
      \u0275\u0275text(228);
      \u0275\u0275pipe(229, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(230, "button", 108);
      \u0275\u0275listener("click", function CreateBrandComponent_Template_button_click_230_listener() {
        let tmp_2_0;
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.brandForm.patchValue({ isActive: !((tmp_2_0 = ctx.brandForm.get("isActive")) == null ? null : tmp_2_0.value) }));
      });
      \u0275\u0275element(231, "span", 109);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(232, "div", 110)(233, "button", 111);
      \u0275\u0275listener("click", function CreateBrandComponent_Template_button_click_233_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCancel());
      });
      \u0275\u0275text(234);
      \u0275\u0275pipe(235, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "button", 112);
      \u0275\u0275listener("click", function CreateBrandComponent_Template_button_click_236_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit(false));
      });
      \u0275\u0275template(237, CreateBrandComponent_i_237_Template, 1, 0, "i", 113);
      \u0275\u0275text(238);
      \u0275\u0275pipe(239, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_40_0;
      let tmp_41_0;
      let tmp_76_0;
      let tmp_77_0;
      let tmp_78_0;
      \u0275\u0275attribute("dir", ctx.dir);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 84, "COMMON.HOME"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 86, "BRANDS.TITLE"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 88, "BRANDS.CREATE.BREADCRUMB"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 90, "BRANDS.CREATE.TITLE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 92, "BRANDS.CREATE.SUBTITLE"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.brandForm);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(31, 94, "BRANDS.CREATE.BASIC_INFO"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 96, "BRANDS.BRAND_NAME"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(40, 98, "BRANDS.CREATE.NAME_PLACEHOLDER"))("ngClass", \u0275\u0275pureFunction2(180, _c0, !ctx.isFieldInvalid("name"), ctx.isFieldInvalid("name")));
      \u0275\u0275attribute("aria-describedby", ctx.isFieldInvalid("name") ? "name-error" : null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("name"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 100, "BRANDS.CREATE.CODE_SLUG"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 102, "BRANDS.CREATE.AUTO_GENERATE"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.autoGenerateSlug ? "bg-indigo-600" : "bg-slate-200");
      \u0275\u0275attribute("aria-checked", ctx.autoGenerateSlug);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.autoGenerateSlug ? "translate-x-4 rtl:-translate-x-4" : "translate-x-0");
      \u0275\u0275advance();
      \u0275\u0275property("readonly", ctx.autoGenerateSlug)("placeholder", \u0275\u0275pipeBind1(54, 104, "BRANDS.CREATE.SLUG_PLACEHOLDER"))("ngClass", \u0275\u0275pureFunction3(183, _c1, ctx.autoGenerateSlug, !ctx.autoGenerateSlug && !ctx.isFieldInvalid("slug"), ctx.isFieldInvalid("slug")));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("slug"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(59, 106, "BRANDS.CREATE.WEBSITE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(62, 108, "COMMON.OPTIONAL"), ")");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(187, _c2, ctx.isFieldInvalid("website")));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("website"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(71, 110, "BRANDS.BRAND_DESCRIPTION"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(73, 112, "BRANDS.CREATE.DESCRIPTION_PLACEHOLDER"))("ngClass", \u0275\u0275pureFunction1(189, _c2, ctx.isFieldInvalid("description")));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("description"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate3(" ", ctx.descriptionLength, "/", ctx.maxDescriptionLength, " ", \u0275\u0275pipeBind1(79, 114, "BRANDS.CREATE.CHARACTERS"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(86, 116, "BRANDS.CREATE.BRAND_ASSETS"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(91, 118, "BRANDS.CREATE.LOGO"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(94, 120, "COMMON.OPTIONAL"), ")");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.logoPreview);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.logoPreview);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(102, 122, "BRANDS.CREATE.PREVIEW"));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.logoPreview);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.logoPreview);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ((tmp_40_0 = ctx.brandForm.get("name")) == null ? null : tmp_40_0.value) || \u0275\u0275pipeBind1(109, 124, "BRANDS.CREATE.BRAND_NAME_PREVIEW"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ((tmp_41_0 = ctx.brandForm.get("description")) == null ? null : tmp_41_0.value) || \u0275\u0275pipeBind1(112, 126, "BRANDS.CREATE.DESCRIPTION_PREVIEW"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(116, 128, "BRANDS.STATUS_ACTIVE"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(120, 130, "BRANDS.CREATE.AUDIT_INFO"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(125, 132, "BRANDS.CREATE.CREATED_BY"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(133, 134, "BRANDS.CREATE.DATE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(136, 136, "COMMON.TODAY"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(143, 138, "BRANDS.CREATE.TIPS_TITLE"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(149, 140, "BRANDS.CREATE.TIP_1"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(153, 142, "BRANDS.CREATE.TIP_2"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(157, 144, "BRANDS.CREATE.TIP_3"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(161, 146, "COMMON.CANCEL"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.brandForm.invalid || ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(165, 148, "BRANDS.CREATE.SAVE_AND_NEW"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.brandForm.invalid || ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(169, 150, "BRANDS.CREATE.SAVE_BRAND"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(176, 152, "BRANDS.CREATE.TITLE"));
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.brandForm);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(184, 154, "BRANDS.CREATE.BASIC_INFO"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(189, 156, "BRANDS.BRAND_NAME"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(193, 158, "BRANDS.CREATE.MOBILE_NAME_PLACEHOLDER"))("ngClass", \u0275\u0275pureFunction1(191, _c2, ctx.isFieldInvalid("name")));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("name"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(198, 160, "BRANDS.CREATE.BRAND_CODE"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("readonly", ctx.autoGenerateSlug)("placeholder", \u0275\u0275pipeBind1(200, 162, "BRANDS.CREATE.AUTO_GENERATED_PLACEHOLDER"))("ngClass", ctx.autoGenerateSlug ? "bg-slate-100 border-slate-200 text-slate-500" : "bg-slate-50 border-slate-200");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(204, 164, "BRANDS.BRAND_DESCRIPTION"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(206, 166, "BRANDS.CREATE.MOBILE_DESCRIPTION_PLACEHOLDER"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(211, 168, "BRANDS.CREATE.BRAND_ASSETS"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", !ctx.logoPreview);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.logoPreview);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(220, 170, "BRANDS.CREATE.STATUS_VISIBILITY"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(226, 172, "BRANDS.CREATE.STATUS"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(229, 174, "BRANDS.CREATE.STATUS_DESC"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ((tmp_76_0 = ctx.brandForm.get("isActive")) == null ? null : tmp_76_0.value) ? "bg-indigo-600" : "bg-slate-200");
      \u0275\u0275attribute("aria-checked", (tmp_77_0 = ctx.brandForm.get("isActive")) == null ? null : tmp_77_0.value);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ((tmp_78_0 = ctx.brandForm.get("isActive")) == null ? null : tmp_78_0.value) ? "translate-x-5 rtl:-translate-x-5" : "translate-x-0");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(235, 176, "COMMON.CANCEL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.brandForm.invalid || ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(239, 178, "BRANDS.CREATE.SAVE_BRAND"), " ");
    }
  }, dependencies: [CommonModule, NgClass, NgIf, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateBrandComponent, { className: "CreateBrandComponent", filePath: "src\\app\\features\\brands\\pages\\create-brand\\create-brand.component.ts", lineNumber: 28 });
})();
export {
  CreateBrandComponent
};
//# sourceMappingURL=chunk-34POLPIG.js.map
