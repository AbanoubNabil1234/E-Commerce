import {
  AuthService
} from "./chunk-ABDOFPM2.js";
import "./chunk-VH7VZDZM.js";
import "./chunk-6OPCIAWL.js";
import "./chunk-ZICMI5CI.js";
import {
  RouterLink
} from "./chunk-XIYZMPFO.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-BOQBRULU.js";
import {
  CommonModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-IGAGZNZV.js";
import "./chunk-N7TOP6ZD.js";

// src/app/features/auth/pages/unauthorized/unauthorized.component.ts
var UnauthorizedComponent = class _UnauthorizedComponent {
  authService = inject(AuthService);
  logout() {
    this.authService.logout();
  }
  static \u0275fac = function UnauthorizedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnauthorizedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnauthorizedComponent, selectors: [["app-unauthorized"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 12, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-slate-50", "dark:bg-slate-900", "px-4"], [1, "text-center"], [1, "inline-flex", "items-center", "justify-center", "w-20", "h-20", "rounded-full", "bg-red-100", "dark:bg-red-900/20", "mb-6"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-10", "h-10", "text-red-600", "dark:text-red-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-3xl", "font-bold", "text-slate-900", "dark:text-white", "mb-2"], [1, "text-slate-600", "dark:text-slate-400", "mb-8", "max-w-md"], [1, "flex", "flex-col", "sm:flex-row", "gap-4", "justify-center"], ["routerLink", "/dashboard", 1, "inline-flex", "items-center", "justify-center", "px-6", "py-3", "bg-primary-600", "hover:bg-primary-700", "text-white", "font-medium", "rounded-lg", "transition-colors"], [1, "inline-flex", "items-center", "justify-center", "px-6", "py-3", "border", "border-slate-300", "dark:border-slate-600", "text-slate-700", "dark:text-slate-300", "font-medium", "rounded-lg", "hover:bg-slate-100", "dark:hover:bg-slate-800", "transition-colors", 3, "click"]], template: function UnauthorizedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "h1", 5);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7)(12, "a", 8);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 9);
      \u0275\u0275listener("click", function UnauthorizedComponent_Template_button_click_15_listener() {
        return ctx.logout();
      });
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "AUTH.ACCESS_DENIED"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 6, "AUTH.UNAUTHORIZED"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 8, "MENU.DASHBOARD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 10, "COMMON.LOGOUT"), " ");
    }
  }, dependencies: [CommonModule, RouterLink, TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnauthorizedComponent, { className: "UnauthorizedComponent", filePath: "src\\app\\features\\auth\\pages\\unauthorized\\unauthorized.component.ts", lineNumber: 51 });
})();
export {
  UnauthorizedComponent
};
//# sourceMappingURL=chunk-HN6SXA4I.js.map
