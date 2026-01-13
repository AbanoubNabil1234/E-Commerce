import {
  LanguageService
} from "./chunk-SBRLR34M.js";
import {
  CommonModule,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-IGAGZNZV.js";
import {
  __async
} from "./chunk-N7TOP6ZD.js";

// src/app/shared/components/language-switcher/language-switcher.component.ts
function LanguageSwitcherComponent__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 6);
    \u0275\u0275element(1, "circle", 7)(2, "path", 8);
    \u0275\u0275elementEnd();
  }
}
function LanguageSwitcherComponent__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "path", 10);
    \u0275\u0275elementEnd();
  }
}
var LanguageSwitcherComponent = class _LanguageSwitcherComponent {
  languageService;
  isLoading = false;
  constructor(languageService) {
    this.languageService = languageService;
  }
  get currentLanguageName() {
    return this.languageService.currentLanguageConfig.nativeName;
  }
  toggleLanguage() {
    return __async(this, null, function* () {
      this.isLoading = true;
      try {
        yield this.languageService.toggleLanguage();
      } finally {
        this.isLoading = false;
      }
    });
  }
  static \u0275fac = function LanguageSwitcherComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageSwitcherComponent)(\u0275\u0275directiveInject(LanguageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LanguageSwitcherComponent, selectors: [["app-language-switcher"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 4, consts: [[1, "inline-flex", "items-center", "gap-2", "px-3", "py-2", "text-sm", "font-medium", "rounded-lg", "transition-colors", "duration-200", "bg-white", "border", "border-gray-200", "hover:bg-gray-50", "hover:border-gray-300", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-blue-500", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["class", "w-4 h-4 text-gray-500 animate-spin", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-4 h-4 text-gray-500", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 4, "ngIf"], [1, "text-gray-700"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3", "h-3", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["fill", "none", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-500", "animate-spin"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4", "text-gray-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"]], template: function LanguageSwitcherComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function LanguageSwitcherComponent_Template_button_click_0_listener() {
        return ctx.toggleLanguage();
      });
      \u0275\u0275template(1, LanguageSwitcherComponent__svg_svg_1_Template, 3, 0, "svg", 1)(2, LanguageSwitcherComponent__svg_svg_2_Template, 2, 0, "svg", 2);
      \u0275\u0275elementStart(3, "span", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 4);
      \u0275\u0275element(6, "path", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.currentLanguageName);
    }
  }, dependencies: [CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LanguageSwitcherComponent, { className: "LanguageSwitcherComponent", filePath: "src\\app\\shared\\components\\language-switcher\\language-switcher.component.ts", lineNumber: 44 });
})();

export {
  LanguageSwitcherComponent
};
//# sourceMappingURL=chunk-WMDPQZWM.js.map
