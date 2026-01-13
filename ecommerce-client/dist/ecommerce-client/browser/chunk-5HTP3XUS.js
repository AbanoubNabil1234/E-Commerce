import {
  AuthService
} from "./chunk-ABDOFPM2.js";
import "./chunk-VH7VZDZM.js";
import "./chunk-6OPCIAWL.js";
import {
  LanguageService
} from "./chunk-SBRLR34M.js";
import "./chunk-ZICMI5CI.js";
import {
  Router
} from "./chunk-XIYZMPFO.js";
import {
  CheckboxControlValueAccessor,
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
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IGAGZNZV.js";
import "./chunk-N7TOP6ZD.js";

// src/app/features/auth/pages/login/login.component.ts
var _c0 = () => ({ year: 2026 });
function LoginComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 33);
    \u0275\u0275element(3, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 35);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, ctx_r0.errorMessage()), " ");
  }
}
function LoginComponent_Conditional_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "VALIDATION.EMAIL_REQUIRED"), " ");
  }
}
function LoginComponent_Conditional_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "VALIDATION.EMAIL_INVALID"), " ");
  }
}
function LoginComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275template(1, LoginComponent_Conditional_28_Conditional_1_Template, 2, 3)(2, LoginComponent_Conditional_28_Conditional_2_Template, 2, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.emailControl == null ? null : ctx_r0.emailControl.errors == null ? null : ctx_r0.emailControl.errors["required"]) ? 1 : (ctx_r0.emailControl == null ? null : ctx_r0.emailControl.errors == null ? null : ctx_r0.emailControl.errors["email"]) ? 2 : -1);
  }
}
function LoginComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 23);
    \u0275\u0275element(1, "path", 36);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 23);
    \u0275\u0275element(1, "path", 37)(2, "path", 38);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_42_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "VALIDATION.PASSWORD_REQUIRED"), " ");
  }
}
function LoginComponent_Conditional_42_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "VALIDATION.PASSWORD_MIN_LENGTH"), " ");
  }
}
function LoginComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275template(1, LoginComponent_Conditional_42_Conditional_1_Template, 2, 3)(2, LoginComponent_Conditional_42_Conditional_2_Template, 2, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.passwordControl == null ? null : ctx_r0.passwordControl.errors == null ? null : ctx_r0.passwordControl.errors["required"]) ? 1 : (ctx_r0.passwordControl == null ? null : ctx_r0.passwordControl.errors == null ? null : ctx_r0.passwordControl.errors["minlength"]) ? 2 : -1);
  }
}
function LoginComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 39);
    \u0275\u0275element(1, "circle", 40)(2, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "LOGIN.SIGNING_IN"));
  }
}
function LoginComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 42);
    \u0275\u0275element(4, "path", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "LOGIN.SIGN_IN"));
  }
}
var LoginComponent = class _LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  translate = inject(TranslateService);
  languageService = inject(LanguageService);
  // Form
  loginForm;
  // State
  isLoading = signal(false);
  showPassword = signal(false);
  errorMessage = signal(null);
  // RTL
  isRtl = signal(false);
  ngOnInit() {
    this.initForm();
    this.setupRtl();
    this.authService.clearError();
  }
  initForm() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }
  setupRtl() {
    this.isRtl.set(this.languageService.isRTL);
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      this.markFormGroupTouched();
      return;
    }
    this.isLoading.set(true);
    this.errorMessage.set(null);
    const { email, password, rememberMe } = this.loginForm.value;
    this.authService.login({ email, password }, rememberMe).subscribe({
      next: () => {
        const redirectUrl = sessionStorage.getItem("redirectUrl");
        sessionStorage.removeItem("redirectUrl");
        this.router.navigate([redirectUrl || "/dashboard"]);
      },
      error: (error) => {
        this.isLoading.set(false);
        const errorKey = error.error?.detail || "LOGIN.ERROR.INVALID_CREDENTIALS";
        this.errorMessage.set(errorKey);
      }
    });
  }
  togglePassword() {
    this.showPassword.set(!this.showPassword());
  }
  switchLanguage() {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === "en" ? "ar" : "en";
    this.languageService.setLanguage(newLang);
    this.isRtl.set(newLang === "ar");
  }
  markFormGroupTouched() {
    Object.keys(this.loginForm.controls).forEach((key) => {
      this.loginForm.get(key)?.markAsTouched();
    });
  }
  // Getters for template
  get emailControl() {
    return this.loginForm.get("email");
  }
  get passwordControl() {
    return this.loginForm.get("password");
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 58, vars: 49, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-gradient-to-br", "from-slate-50", "to-slate-100", "dark:from-slate-900", "dark:to-slate-800", "px-4", "py-12", 3, "dir"], ["type", "button", 1, "absolute", "top-4", "end-4", "px-3", "py-2", "text-sm", "text-slate-600", "dark:text-slate-300", "hover:bg-slate-100", "dark:hover:bg-slate-700", "rounded-lg", "transition-colors", 3, "click"], [1, "w-full", "max-w-md"], [1, "text-center", "mb-8"], [1, "inline-flex", "items-center", "justify-center", "w-16", "h-16", "rounded-2xl", "bg-primary-600", "text-white", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"], [1, "text-2xl", "font-bold", "text-slate-900", "dark:text-white"], [1, "mt-2", "text-slate-600", "dark:text-slate-400"], [1, "bg-white", "dark:bg-slate-800", "rounded-2xl", "shadow-xl", "shadow-slate-200/50", "dark:shadow-slate-900/50", "p-8"], [1, "mb-6", "p-4", "rounded-lg", "bg-red-50", "dark:bg-red-900/20", "border", "border-red-200", "dark:border-red-800"], [1, "space-y-6", 3, "ngSubmit", "formGroup"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-slate-700", "dark:text-slate-300", "mb-2"], [1, "relative"], [1, "absolute", "inset-y-0", "start-0", "flex", "items-center", "ps-3", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"], ["type", "email", "id", "email", "formControlName", "email", "autocomplete", "email", 1, "w-full", "ps-10", "pe-4", "py-3", "rounded-lg", "border", "transition-colors", "bg-slate-50", "dark:bg-slate-700/50", "border-slate-200", "dark:border-slate-600", "text-slate-900", "dark:text-white", "placeholder:text-slate-400", "dark:placeholder:text-slate-500", "focus:ring-2", "focus:ring-primary-500/20", "focus:border-primary-500", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "placeholder"], ["id", "email-error", 1, "mt-2", "text-sm", "text-red-600", "dark:text-red-400"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-slate-700", "dark:text-slate-300", "mb-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"], ["id", "password", "formControlName", "password", "autocomplete", "current-password", 1, "w-full", "ps-10", "pe-12", "py-3", "rounded-lg", "border", "transition-colors", "bg-slate-50", "dark:bg-slate-700/50", "border-slate-200", "dark:border-slate-600", "text-slate-900", "dark:text-white", "placeholder:text-slate-400", "dark:placeholder:text-slate-500", "focus:ring-2", "focus:ring-primary-500/20", "focus:border-primary-500", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "type", "placeholder"], ["type", "button", 1, "absolute", "inset-y-0", "end-0", "flex", "items-center", "pe-3", "text-slate-400", "hover:text-slate-600", "dark:hover:text-slate-300", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], [1, "mt-2", "text-sm", "text-red-600", "dark:text-red-400"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "cursor-pointer"], ["type", "checkbox", "formControlName", "rememberMe", 1, "w-4", "h-4", "rounded", "border-slate-300", "dark:border-slate-600", "text-primary-600", "focus:ring-primary-500", "bg-slate-50", "dark:bg-slate-700"], [1, "ms-2", "text-sm", "text-slate-600", "dark:text-slate-400"], ["href", "#", 1, "text-sm", "text-primary-600", "hover:text-primary-700", "dark:text-primary-400", "dark:hover:text-primary-300"], ["type", "submit", 1, "w-full", "flex", "items-center", "justify-center", "gap-2", "px-4", "py-3", "bg-primary-600", "hover:bg-primary-700", "disabled:bg-primary-400", "disabled:cursor-not-allowed", "text-white", "font-medium", "rounded-lg", "transition-colors", "focus:outline-none", "focus:ring-2", "focus:ring-primary-500/50", 3, "disabled"], [1, "mt-8", "text-center", "text-sm", "text-slate-500", "dark:text-slate-400"], [1, "flex", "items-center", "gap-3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-red-600", "dark:text-red-400", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-sm", "text-red-700", "dark:text-red-300"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-5", "h-5"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "rtl:rotate-180"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M14 5l7 7m0 0l-7 7m7-7H3"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_1_listener() {
        return ctx.switchLanguage();
      });
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 5);
      \u0275\u0275element(8, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "h1", 7);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 8);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 9);
      \u0275\u0275template(16, LoginComponent_Conditional_16_Template, 7, 3, "div", 10);
      \u0275\u0275elementStart(17, "form", 11);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_17_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(18, "div")(19, "label", 12);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 13)(23, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 15);
      \u0275\u0275element(25, "path", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(26, "input", 17);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(28, LoginComponent_Conditional_28_Template, 3, 1, "p", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div")(30, "label", 19);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 13)(34, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(35, "svg", 15);
      \u0275\u0275element(36, "path", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(37, "input", 21);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementStart(39, "button", 22);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_39_listener() {
        return ctx.togglePassword();
      });
      \u0275\u0275template(40, LoginComponent_Conditional_40_Template, 2, 0, ":svg:svg", 23)(41, LoginComponent_Conditional_41_Template, 3, 0, ":svg:svg", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(42, LoginComponent_Conditional_42_Template, 3, 1, "p", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 25)(44, "label", 26);
      \u0275\u0275element(45, "input", 27);
      \u0275\u0275elementStart(46, "span", 28);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "a", 29);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "button", 30);
      \u0275\u0275template(53, LoginComponent_Conditional_53_Template, 6, 3)(54, LoginComponent_Conditional_54_Template, 5, 3);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "p", 31);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("dir", ctx.isRtl() ? "rtl" : "ltr");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 27, "COMMON.SWITCH_LANGUAGE"), " ");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 29, "LOGIN.TITLE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 31, "LOGIN.SUBTITLE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.errorMessage() ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 33, "LOGIN.EMAIL"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275classProp("border-red-500", (ctx.emailControl == null ? null : ctx.emailControl.invalid) && (ctx.emailControl == null ? null : ctx.emailControl.touched));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(27, 35, "LOGIN.EMAIL_PLACEHOLDER"));
      \u0275\u0275attribute("aria-invalid", (ctx.emailControl == null ? null : ctx.emailControl.invalid) && (ctx.emailControl == null ? null : ctx.emailControl.touched))("aria-describedby", (ctx.emailControl == null ? null : ctx.emailControl.invalid) && (ctx.emailControl == null ? null : ctx.emailControl.touched) ? "email-error" : null);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((ctx.emailControl == null ? null : ctx.emailControl.invalid) && (ctx.emailControl == null ? null : ctx.emailControl.touched) ? 28 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 37, "LOGIN.PASSWORD"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275classProp("border-red-500", (ctx.passwordControl == null ? null : ctx.passwordControl.invalid) && (ctx.passwordControl == null ? null : ctx.passwordControl.touched));
      \u0275\u0275property("type", ctx.showPassword() ? "text" : "password")("placeholder", \u0275\u0275pipeBind1(38, 39, "LOGIN.PASSWORD_PLACEHOLDER"));
      \u0275\u0275attribute("aria-invalid", (ctx.passwordControl == null ? null : ctx.passwordControl.invalid) && (ctx.passwordControl == null ? null : ctx.passwordControl.touched));
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", ctx.showPassword() ? "Hide password" : "Show password");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showPassword() ? 40 : 41);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((ctx.passwordControl == null ? null : ctx.passwordControl.invalid) && (ctx.passwordControl == null ? null : ctx.passwordControl.touched) ? 42 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 41, "LOGIN.REMEMBER_ME"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 43, "LOGIN.FORGOT_PASSWORD"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 53 : 54);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(57, 45, "LOGIN.COPYRIGHT", \u0275\u0275pureFunction0(48, _c0)), " ");
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    CheckboxControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    TranslateModule,
    TranslatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\features\\auth\\pages\\login\\login.component.ts", lineNumber: 33 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-5HTP3XUS.js.map
