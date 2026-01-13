import {
  NotificationTypeLabels,
  NotificationsService
} from "./chunk-VH7VZDZM.js";
import {
  TokenService
} from "./chunk-6OPCIAWL.js";
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
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-XIYZMPFO.js";
import {
  TranslateLoader,
  TranslateModule,
  TranslatePipe
} from "./chunk-BOQBRULU.js";
import {
  APP_INITIALIZER,
  CommonModule,
  ElementRef,
  EventEmitter,
  HTTP_INTERCEPTORS,
  HttpBackend,
  HttpClient,
  Injectable,
  InjectionToken,
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  Subject,
  catchError,
  importProvidersFrom,
  inject,
  provideHttpClient,
  setClassMetadata,
  signal,
  takeUntil,
  throwError,
  withInterceptorsFromDi,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction6,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IGAGZNZV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-N7TOP6ZD.js";

// src/app/shared/components/sidebar/sidebar.component.ts
var _c0 = (a0, a1, a2, a3, a4, a5) => ({ "w-72": a0, "w-[72px]": a1, "-translate-x-full": a2, "translate-x-full": a3, "translate-x-0": a4, "w-72 fixed inset-y-0 start-0 z-50": a5 });
var _c1 = (a0) => ({ "justify-center": a0 });
var _c2 = (a0) => ({ exact: a0 });
function SidebarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function SidebarComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobile.emit());
    });
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, " ERP Admin ");
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_div_9_h3_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, group_r3.title), " ");
  }
}
function SidebarComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 20);
  }
}
function SidebarComponent_div_9_li_4_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, item_r4.label), " ");
  }
}
function SidebarComponent_div_9_li_4_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.badge, " ");
  }
}
function SidebarComponent_div_9_li_4_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 31);
  }
}
function SidebarComponent_div_9_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 21);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "div", 22);
    \u0275\u0275elementStart(4, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 24);
    \u0275\u0275element(6, "path", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, SidebarComponent_div_9_li_4_span_7_Template, 3, 3, "span", 26)(8, SidebarComponent_div_9_li_4_span_8_Template, 2, 1, "span", 27)(9, SidebarComponent_div_9_li_4_span_9_Template, 1, 0, "span", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r4.route)("routerLinkActiveOptions", \u0275\u0275pureFunction1(10, _c2, item_r4.route === "/dashboard"))("ngClass", \u0275\u0275pureFunction1(12, _c1, ctx_r1.shouldShowIconOnly && !ctx_r1.isMobile));
    \u0275\u0275attribute("title", ctx_r1.shouldShowIconOnly && !ctx_r1.isMobile ? \u0275\u0275pipeBind1(2, 8, item_r4.label) : null);
    \u0275\u0275advance(5);
    \u0275\u0275attribute("d", item_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.shouldShowIconOnly || ctx_r1.isMobile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r4.badge && (!ctx_r1.shouldShowIconOnly || ctx_r1.isMobile));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r4.badge && ctx_r1.shouldShowIconOnly && !ctx_r1.isMobile);
  }
}
function SidebarComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, SidebarComponent_div_9_h3_1_Template, 3, 3, "h3", 15)(2, SidebarComponent_div_9_div_2_Template, 1, 0, "div", 16);
    \u0275\u0275elementStart(3, "ul", 17);
    \u0275\u0275template(4, SidebarComponent_div_9_li_4_Template, 10, 14, "li", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.shouldShowIconOnly || ctx_r1.isMobile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.shouldShowIconOnly && !ctx_r1.isMobile);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", group_r3.items);
  }
}
function SidebarComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "span", 35);
    \u0275\u0275text(4, "AM");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 36)(6, "p", 37);
    \u0275\u0275text(7, "Alex Morgan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 38);
    \u0275\u0275text(9, "Admin");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "i", 39);
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "span", 35);
    \u0275\u0275text(3, "AM");
    \u0275\u0275elementEnd()()();
  }
}
var SidebarComponent = class _SidebarComponent {
  isCollapsed = false;
  isMobileOpen = false;
  closeMobile = new EventEmitter();
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  // Screen size detection
  isTablet = false;
  isMobile = false;
  constructor() {
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
  get isRtl() {
    return document.documentElement.dir === "rtl";
  }
  get shouldShowIconOnly() {
    return this.isTablet || this.isCollapsed;
  }
  menuGroups = [
    {
      title: "SIDEBAR.MAIN_MENU",
      items: [
        {
          label: "SIDEBAR.DASHBOARD",
          route: "/dashboard",
          icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        },
        {
          label: "SIDEBAR.PRODUCTS",
          route: "/products",
          icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        },
        {
          label: "SIDEBAR.BRANDS",
          route: "/brands",
          icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        },
        {
          label: "SIDEBAR.CATEGORIES",
          route: "/categories",
          icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        },
        {
          label: "SIDEBAR.INVENTORY",
          route: "/inventory",
          icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        },
        {
          label: "SIDEBAR.WAREHOUSES",
          route: "/warehouses",
          icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        },
        {
          label: "SIDEBAR.ORDERS",
          route: "/orders",
          icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
          badge: 12
        },
        {
          label: "SIDEBAR.SHIPMENTS",
          route: "/shipments",
          icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        },
        {
          label: "SIDEBAR.REPORTS",
          route: "/reports",
          icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        }
      ]
    },
    {
      title: "SIDEBAR.SYSTEM",
      items: [
        {
          label: "SIDEBAR.SETTINGS",
          route: "/settings",
          icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        },
        {
          label: "SIDEBAR.HELP_CENTER",
          route: "/help",
          icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        }
      ]
    }
  ];
  toggleSubmenu(item) {
    if (item.children && !this.shouldShowIconOnly) {
      item.isOpen = !item.isOpen;
    }
  }
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], hostBindings: function SidebarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function SidebarComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, \u0275\u0275resolveWindow);
    }
  }, inputs: { isCollapsed: "isCollapsed", isMobileOpen: "isMobileOpen" }, outputs: { closeMobile: "closeMobile" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 16, consts: [["class", "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity md:hidden", 3, "click", 4, "ngIf"], [1, "flex", "flex-col", "bg-gradient-to-b", "from-[#1e293b]", "to-[#0f172a]", "transition-all", "duration-300", "h-full", 3, "ngClass"], [1, "flex", "items-center", "h-16", "px-4", "border-b", "border-white/5", 3, "ngClass"], [1, "flex", "items-center", "gap-3"], [1, "flex", "items-center", "justify-center", "w-10", "h-10", "rounded-xl", "bg-gradient-to-br", "from-indigo-500", "to-indigo-600", "text-white", "shadow-lg"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"], ["class", "text-lg font-bold text-white whitespace-nowrap", 4, "ngIf"], [1, "flex-1", "overflow-y-auto", "py-4", "px-3", "scrollbar-hide"], ["class", "mb-6", 4, "ngFor", "ngForOf"], ["class", "p-4 border-t border-white/5", 4, "ngIf"], ["class", "p-3 border-t border-white/5 flex justify-center", 4, "ngIf"], [1, "fixed", "inset-0", "z-40", "bg-black/60", "backdrop-blur-sm", "transition-opacity", "md:hidden", 3, "click"], [1, "text-lg", "font-bold", "text-white", "whitespace-nowrap"], [1, "mb-6"], ["class", "px-3 mb-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider", 4, "ngIf"], ["class", "h-px bg-white/10 mx-2 mb-3", 4, "ngIf"], [1, "space-y-1"], [4, "ngFor", "ngForOf"], [1, "px-3", "mb-2", "text-[10px]", "font-bold", "text-slate-500", "uppercase", "tracking-wider"], [1, "h-px", "bg-white/10", "mx-2", "mb-3"], ["routerLinkActive", "bg-indigo-500/20 text-white", 1, "relative", "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "text-sm", "font-medium", "text-slate-400", "hover:text-white", "hover:bg-white/5", "transition-all", "duration-200", "group", 3, "routerLink", "routerLinkActiveOptions", "ngClass"], ["routerLinkActive", "!opacity-100 !scale-y-100", 1, "absolute", "inset-y-1", "start-0", "w-1", "bg-indigo-500", "rounded-full", "opacity-0", "scale-y-0", "transition-all", "duration-200"], ["routerLinkActive", "!bg-indigo-500/30", 1, "flex", "items-center", "justify-center", "w-8", "h-8", "rounded-lg", "bg-white/5", "group-hover:bg-indigo-500/20", "transition-colors"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5"], ["class", "truncate", 4, "ngIf"], ["class", "ms-auto px-2 py-0.5 text-[10px] font-bold text-white bg-indigo-500 rounded-full", 4, "ngIf"], ["class", "absolute top-1 end-1 w-2 h-2 bg-indigo-500 rounded-full", 4, "ngIf"], [1, "truncate"], [1, "ms-auto", "px-2", "py-0.5", "text-[10px]", "font-bold", "text-white", "bg-indigo-500", "rounded-full"], [1, "absolute", "top-1", "end-1", "w-2", "h-2", "bg-indigo-500", "rounded-full"], [1, "p-4", "border-t", "border-white/5"], [1, "flex", "items-center", "gap-3", "p-3", "rounded-xl", "bg-white/5", "hover:bg-white/10", "transition-colors", "cursor-pointer"], [1, "w-9", "h-9", "rounded-full", "bg-gradient-to-br", "from-indigo-400", "to-indigo-600", "flex", "items-center", "justify-center"], [1, "text-sm", "font-bold", "text-white"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-medium", "text-white", "truncate"], [1, "text-xs", "text-slate-400"], [1, "fas", "fa-sign-out-alt", "text-slate-500", "hover:text-white", "transition-colors"], [1, "p-3", "border-t", "border-white/5", "flex", "justify-center"], ["title", "Alex Morgan", 1, "w-10", "h-10", "rounded-full", "bg-gradient-to-br", "from-indigo-400", "to-indigo-600", "flex", "items-center", "justify-center", "cursor-pointer", "hover:ring-2", "hover:ring-indigo-400/50", "transition-all"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, SidebarComponent_div_0_Template, 1, 0, "div", 0);
      \u0275\u0275elementStart(1, "aside", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, SidebarComponent_span_7_Template, 2, 0, "span", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "nav", 8);
      \u0275\u0275template(9, SidebarComponent_div_9_Template, 5, 3, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, SidebarComponent_div_10_Template, 11, 0, "div", 10)(11, SidebarComponent_div_11_Template, 4, 0, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isMobileOpen && ctx.isMobile);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction6(7, _c0, !ctx.shouldShowIconOnly && !ctx.isMobile, ctx.shouldShowIconOnly && !ctx.isMobile, ctx.isMobile && !ctx.isMobileOpen && !ctx.isRtl, ctx.isMobile && !ctx.isMobileOpen && ctx.isRtl, ctx.isMobile && ctx.isMobileOpen, ctx.isMobile));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c1, ctx.shouldShowIconOnly && !ctx.isMobile));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", !ctx.shouldShowIconOnly || ctx.isMobile);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.menuGroups);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.shouldShowIconOnly || ctx.isMobile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.shouldShowIconOnly && !ctx.isMobile);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, RouterLinkActive, TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src\\app\\shared\\components\\sidebar\\sidebar.component.ts", lineNumber: 26 });
})();

// src/app/features/notifications/components/notification-dropdown/notification-dropdown.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function NotificationDropdownComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.service.unreadCount() > 9 ? "9+" : ctx_r0.service.unreadCount());
  }
}
function NotificationDropdownComponent_Conditional_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function NotificationDropdownComponent_Conditional_5_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markAllAsRead());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "NOTIFICATIONS.MARK_ALL_READ"), " ");
  }
}
function NotificationDropdownComponent_Conditional_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 14);
    \u0275\u0275elementEnd();
  }
}
function NotificationDropdownComponent_Conditional_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "NOTIFICATIONS.EMPTY"));
  }
}
function NotificationDropdownComponent_Conditional_5_Conditional_9_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
}
function NotificationDropdownComponent_Conditional_5_Conditional_9_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function NotificationDropdownComponent_Conditional_5_Conditional_9_For_1_Template_div_click_0_listener() {
      const notification_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.handleClick(notification_r5));
    });
    \u0275\u0275elementStart(1, "div", 17)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 18)(5, "p", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, NotificationDropdownComponent_Conditional_5_Conditional_9_For_1_Conditional_9_Template, 1, 0, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notification_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("unread", !notification_r5.isRead);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.getTypeColor(notification_r5.type) + "20");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getTypeIcon(notification_r5.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notification_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.service.formatRelativeTime(notification_r5.createdAt));
    \u0275\u0275advance();
    \u0275\u0275conditional(!notification_r5.isRead ? 9 : -1);
  }
}
function NotificationDropdownComponent_Conditional_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NotificationDropdownComponent_Conditional_5_Conditional_9_For_1_Template, 10, 8, "div", 15, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.recentNotifications());
  }
}
function NotificationDropdownComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, NotificationDropdownComponent_Conditional_5_Conditional_5_Template, 3, 3, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275template(7, NotificationDropdownComponent_Conditional_5_Conditional_7_Template, 2, 0, "div", 9)(8, NotificationDropdownComponent_Conditional_5_Conditional_8_Template, 4, 3, "div", 10)(9, NotificationDropdownComponent_Conditional_5_Conditional_9_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 11)(11, "a", 12);
    \u0275\u0275listener("click", function NotificationDropdownComponent_Conditional_5_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.close());
    });
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "NOTIFICATIONS.TITLE"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.service.unreadCount() > 0 ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.service.loading() ? 7 : ctx_r0.recentNotifications().length === 0 ? 8 : 9);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 6, "NOTIFICATIONS.VIEW_ALL"), " ");
  }
}
var NotificationDropdownComponent = class _NotificationDropdownComponent {
  service = inject(NotificationsService);
  elementRef = inject(ElementRef);
  destroy$ = new Subject();
  isOpen = signal(false);
  recentNotifications = signal([]);
  onDocumentClick(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.close();
    }
  }
  ngOnInit() {
    this.service.getUnreadCount().pipe(takeUntil(this.destroy$)).subscribe();
    this.service.onNotificationReceived.pipe(takeUntil(this.destroy$)).subscribe((notification) => {
      if (this.isOpen()) {
        this.recentNotifications.update((current) => [notification, ...current].slice(0, 5));
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  toggleDropdown() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }
  open() {
    this.isOpen.set(true);
    this.loadRecent();
  }
  close() {
    this.isOpen.set(false);
  }
  loadRecent() {
    this.service.getNotifications(1, 5).pipe(takeUntil(this.destroy$)).subscribe((response) => {
      this.recentNotifications.set(response.items);
    });
  }
  handleClick(notification) {
    if (!notification.isRead) {
      this.service.markAsRead(notification.id).pipe(takeUntil(this.destroy$)).subscribe();
    }
    if (notification.actionUrl) {
      this.close();
    }
  }
  markAllAsRead() {
    this.service.markAllAsRead().pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.recentNotifications.update((items) => items.map((n) => __spreadProps(__spreadValues({}, n), { isRead: true })));
    });
  }
  getTypeIcon(type) {
    return NotificationTypeLabels[type]?.icon || "\u{1F4CC}";
  }
  getTypeColor(type) {
    return NotificationTypeLabels[type]?.color || "#6B7280";
  }
  static \u0275fac = function NotificationDropdownComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationDropdownComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationDropdownComponent, selectors: [["app-notification-dropdown"]], hostBindings: function NotificationDropdownComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function NotificationDropdownComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 2, consts: [[1, "notification-dropdown"], [1, "bell-btn", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "width", "24", "height", "24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"], [1, "badge"], [1, "dropdown-panel"], [1, "dropdown-header"], [1, "mark-all-btn"], [1, "dropdown-content"], [1, "loading"], [1, "empty"], [1, "dropdown-footer"], ["routerLink", "/notifications", 3, "click"], [1, "mark-all-btn", 3, "click"], [1, "spinner"], [1, "notification-item", 3, "unread"], [1, "notification-item", 3, "click"], [1, "item-icon"], [1, "item-content"], [1, "item-title"], [1, "item-time"], [1, "unread-dot"]], template: function NotificationDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function NotificationDropdownComponent_Template_button_click_1_listener() {
        return ctx.toggleDropdown();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, NotificationDropdownComponent_Conditional_4_Template, 2, 1, "span", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, NotificationDropdownComponent_Conditional_5_Template, 14, 8, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.service.unreadCount() > 0 ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isOpen() ? 5 : -1);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n.notification-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.bell-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  color: #64748b;\n  transition: all 0.2s;\n}\n.bell-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #6366f1;\n}\n.badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  background: #ef4444;\n  color: white;\n  font-size: 10px;\n  font-weight: 600;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dropdown-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  width: 360px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.dropdown-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.dropdown-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.mark-all-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6366f1;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.mark-all-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.dropdown-content[_ngcontent-%COMP%] {\n  max-height: 320px;\n  overflow-y: auto;\n}\n.notification-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  cursor: pointer;\n  transition: background 0.2s;\n  position: relative;\n}\n.notification-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.notification-item.unread[_ngcontent-%COMP%] {\n  background: #faf5ff;\n}\n.item-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.item-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.item-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #1e293b;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.item-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 2px 0 0;\n}\n.unread-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: #6366f1;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.loading[_ngcontent-%COMP%], \n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  color: #94a3b8;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 2px solid #e2e8f0;\n  border-top-color: #6366f1;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.dropdown-footer[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-top: 1px solid #f1f5f9;\n  text-align: center;\n}\n.dropdown-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6366f1;\n  font-weight: 500;\n  font-size: 14px;\n  text-decoration: none;\n}\n.dropdown-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 480px) {\n  .dropdown-panel[_ngcontent-%COMP%] {\n    width: 100vw;\n    right: -16px;\n    border-radius: 0 0 12px 12px;\n  }\n}\n/*# sourceMappingURL=notification-dropdown.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationDropdownComponent, { className: "NotificationDropdownComponent", filePath: "src\\app\\features\\notifications\\components\\notification-dropdown\\notification-dropdown.component.ts", lineNumber: 276 });
})();

// src/app/shared/components/header/header.component.ts
function HeaderComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "a", 34);
    \u0275\u0275element(2, "i", 35);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 34);
    \u0275\u0275element(6, "i", 36);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "hr", 37);
    \u0275\u0275elementStart(10, "a", 38);
    \u0275\u0275element(11, "i", 39);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "COMMON.PROFILE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "COMMON.SETTINGS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 7, "COMMON.LOGOUT"), " ");
  }
}
function HeaderComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function HeaderComponent_div_50_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isUserMenuOpen = false);
    });
    \u0275\u0275elementEnd();
  }
}
var HeaderComponent = class _HeaderComponent {
  toggleMobile = new EventEmitter();
  isUserMenuOpen = false;
  breadcrumbs = [
    { label: "HEADER.HOME", url: "/" },
    { label: "SIDEBAR.DASHBOARD", url: "/dashboard", active: true }
  ];
  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }
  onEscape() {
    this.isUserMenuOpen = false;
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.escape", function HeaderComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscape();
      }, false, \u0275\u0275resolveDocument);
    }
  }, outputs: { toggleMobile: "toggleMobile" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 51, vars: 22, consts: [[1, "h-16", "bg-white", "dark:bg-slate-800", "border-b", "border-slate-200", "dark:border-slate-700", "flex", "items-center", "justify-between", "px-4", "lg:px-6", "sticky", "top-0", "z-30"], [1, "flex", "items-center", "gap-4"], ["aria-label", "Toggle menu", 1, "md:hidden", "p-2", "-ms-2", "text-slate-500", "hover:bg-slate-100", "dark:hover:bg-slate-700", "rounded-xl", "transition-all", "duration-200", "active:scale-95", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h16"], [1, "hidden", "md:flex", "items-center", "text-sm", "font-medium"], [1, "text-slate-800", "dark:text-white", "font-bold"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "mx-2", "w-4", "h-4", "text-slate-300", "rtl:rotate-180"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "text-slate-500", "dark:text-slate-400"], [1, "md:hidden", "text-lg", "font-bold", "text-slate-800", "dark:text-white"], [1, "hidden", "md:flex", "flex-1", "max-w-md", "mx-4", "lg:mx-8"], [1, "relative", "w-full"], [1, "absolute", "inset-y-0", "start-0", "ps-3", "flex", "items-center", "pointer-events-none"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", 1, "block", "w-full", "ps-10", "pe-4", "py-2", "bg-slate-50", "dark:bg-slate-900", "border", "border-slate-200", "dark:border-slate-700", "rounded-xl", "text-sm", "placeholder-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", 3, "placeholder"], [1, "flex", "items-center", "gap-2"], [1, "hidden", "md:inline-flex", "items-center", "gap-2", "px-4", "py-2", "bg-indigo-600", "hover:bg-indigo-700", "text-white", "text-sm", "font-medium", "rounded-xl", "transition-all", "active:scale-95", "shadow-lg", "shadow-indigo-200", "dark:shadow-none"], [1, "fas", "fa-plus"], [1, "hidden", "lg:inline"], [1, "lg:hidden"], [1, "md:hidden", "relative"], [1, "p-1"], [1, "w-8", "h-8", "rounded-full", "bg-gradient-to-br", "from-indigo-400", "to-indigo-600", "flex", "items-center", "justify-center"], [1, "text-xs", "font-bold", "text-white"], [1, "hidden", "md:block", "relative", 3, "click"], [1, "flex", "items-center", "gap-2", "p-1.5", "rounded-xl", "hover:bg-slate-100", "dark:hover:bg-slate-700", "transition-all"], [1, "hidden", "lg:block", "text-sm", "font-medium", "text-slate-700", "dark:text-slate-300"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "hidden", "lg:block", "w-4", "h-4", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["class", "absolute end-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 py-2 z-50", 4, "ngIf"], ["class", "fixed inset-0 z-20", 3, "click", 4, "ngIf"], [1, "absolute", "end-0", "mt-2", "w-48", "bg-white", "dark:bg-slate-800", "rounded-xl", "shadow-xl", "border", "border-slate-100", "dark:border-slate-700", "py-2", "z-50"], ["href", "#", 1, "flex", "items-center", "gap-3", "px-4", "py-2", "text-sm", "text-slate-700", "dark:text-slate-300", "hover:bg-slate-50", "dark:hover:bg-slate-700", "transition-colors"], [1, "fas", "fa-user", "text-slate-400"], [1, "fas", "fa-cog", "text-slate-400"], [1, "my-2", "border-slate-100", "dark:border-slate-700"], ["href", "#", 1, "flex", "items-center", "gap-3", "px-4", "py-2", "text-sm", "text-red-600", "hover:bg-red-50", "dark:hover:bg-red-900/20", "transition-colors"], [1, "fas", "fa-sign-out-alt"], [1, "fixed", "inset-0", "z-20", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_2_listener() {
        return ctx.toggleMobile.emit();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "nav", 5)(6, "span", 6);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 7);
      \u0275\u0275element(10, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "span", 9);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "span", 10);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 11)(18, "div", 12)(19, "div", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 14);
      \u0275\u0275element(21, "path", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(22, "input", 16);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 17);
      \u0275\u0275element(25, "app-notification-dropdown")(26, "app-language-switcher");
      \u0275\u0275elementStart(27, "button", 18);
      \u0275\u0275element(28, "i", 19);
      \u0275\u0275elementStart(29, "span", 20);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span", 21);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 22)(36, "button", 23)(37, "div", 24)(38, "span", 25);
      \u0275\u0275text(39, "AM");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "div", 26);
      \u0275\u0275listener("click", function HeaderComponent_Template_div_click_40_listener() {
        return ctx.toggleUserMenu();
      });
      \u0275\u0275elementStart(41, "button", 27)(42, "div", 24)(43, "span", 25);
      \u0275\u0275text(44, "AM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "span", 28);
      \u0275\u0275text(46, "Alex");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(47, "svg", 29);
      \u0275\u0275element(48, "path", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(49, HeaderComponent_div_49_Template, 14, 9, "div", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(50, HeaderComponent_div_50_Template, 1, 0, "div", 32);
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 10, "DASHBOARD.OVERVIEW"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 12, "DASHBOARD.TITLE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 14, "DASHBOARD.TITLE"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(23, 16, "HEADER.SEARCH_PLACEHOLDER"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 18, "COMMON.CREATE_ORDER"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 20, "COMMON.CREATE"));
      \u0275\u0275advance(14);
      \u0275\u0275classProp("rotate-180", ctx.isUserMenuOpen);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isUserMenuOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isUserMenuOpen);
    }
  }, dependencies: [CommonModule, NgIf, TranslateModule, TranslatePipe, LanguageSwitcherComponent, RouterModule, NotificationDropdownComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src\\app\\shared\\components\\header\\header.component.ts", lineNumber: 14 });
})();

// src/app/shared/components/bottom-tabs/bottom-tabs.component.ts
function BottomTabsComponent_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "i", 8);
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", tab_r1.route);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 5, tab_r1.labelKey));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(tab_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 7, tab_r1.labelKey));
  }
}
function BottomTabsComponent_a_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "i", 8);
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", tab_r2.route);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 5, tab_r2.labelKey));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(tab_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 7, tab_r2.labelKey));
  }
}
var BottomTabsComponent = class _BottomTabsComponent {
  onFabClick = new EventEmitter();
  leftTabs = [
    { labelKey: "BOTTOM_TABS.HOME", icon: "fa-th-large", route: "/dashboard" },
    { labelKey: "BOTTOM_TABS.STOCK", icon: "fa-boxes", route: "/inventory" }
  ];
  rightTabs = [
    { labelKey: "BOTTOM_TABS.ORDERS", icon: "fa-receipt", route: "/orders" },
    { labelKey: "BOTTOM_TABS.MORE", icon: "fa-ellipsis-h", route: "/settings" }
  ];
  static \u0275fac = function BottomTabsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomTabsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BottomTabsComponent, selectors: [["app-bottom-tabs"]], outputs: { onFabClick: "onFabClick" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 5, consts: [[1, "md:hidden", "fixed", "bottom-0", "left-0", "right-0", "z-40", "bg-white", "dark:bg-slate-800", "border-t", "border-slate-100", "dark:border-slate-700", "pb-[env(safe-area-inset-bottom)]"], [1, "flex", "items-center", "justify-around", "h-16", "relative"], ["routerLinkActive", "text-indigo-600 dark:text-indigo-400", "class", "flex flex-col items-center justify-center flex-1 h-full \n                          text-slate-500 dark:text-slate-400 transition-colors\n                          hover:text-indigo-600 dark:hover:text-indigo-400\n                          focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "flex-1", "flex", "items-center", "justify-center"], [1, "absolute", "-top-6", "w-14", "h-14", "bg-indigo-600", "hover:bg-indigo-700", "text-white", "rounded-full", "shadow-lg", "shadow-indigo-300", "dark:shadow-indigo-900/50", "flex", "items-center", "justify-center", "transition-all", "duration-200", "active:scale-95", "focus:outline-none", "focus:ring-4", "focus:ring-indigo-300", 3, "click"], [1, "fas", "fa-plus", "text-xl"], ["aria-hidden", "true", 1, "md:hidden", "h-20"], ["routerLinkActive", "text-indigo-600 dark:text-indigo-400", 1, "flex", "flex-col", "items-center", "justify-center", "flex-1", "h-full", "text-slate-500", "dark:text-slate-400", "transition-colors", "hover:text-indigo-600", "dark:hover:text-indigo-400", "focus:outline-none", "focus:ring-2", "focus:ring-inset", "focus:ring-indigo-500", 3, "routerLink"], [1, "fas", "text-lg"], [1, "text-[10px]", "font-medium", "mt-1"]], template: function BottomTabsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1);
      \u0275\u0275template(2, BottomTabsComponent_a_2_Template, 6, 9, "a", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "button", 4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275listener("click", function BottomTabsComponent_Template_button_click_4_listener() {
        return ctx.onFabClick.emit();
      });
      \u0275\u0275element(6, "i", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, BottomTabsComponent_a_7_Template, 6, 9, "a", 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(8, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.leftTabs);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 3, "COMMON.ADD"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.rightTabs);
    }
  }, dependencies: [CommonModule, NgForOf, RouterModule, RouterLink, RouterLinkActive, TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BottomTabsComponent, { className: "BottomTabsComponent", filePath: "src\\app\\shared\\components\\bottom-tabs\\bottom-tabs.component.ts", lineNumber: 71 });
})();

// src/app/layout/main-layout/main-layout.component.ts
var MainLayoutComponent = class _MainLayoutComponent {
  isMobileSidebarOpen = false;
  toggleMobileSidebar() {
    this.isMobileSidebarOpen = !this.isMobileSidebarOpen;
  }
  closeMobileSidebar() {
    this.isMobileSidebarOpen = false;
  }
  onFabClick() {
    console.log("FAB clicked from main layout");
  }
  static \u0275fac = function MainLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayoutComponent, selectors: [["app-main-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 2, consts: [[1, "flex", "min-h-screen", "bg-slate-50", "dark:bg-slate-900"], [1, "hidden", "md:block", "flex-shrink-0"], [3, "closeMobile", "isMobileOpen"], [1, "md:hidden"], [1, "flex-1", "flex", "flex-col", "min-w-0"], [3, "toggleMobile"], [1, "flex-1", "overflow-y-auto", "pb-20", "md:pb-0"], [3, "onFabClick"]], template: function MainLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "app-sidebar", 2);
      \u0275\u0275listener("closeMobile", function MainLayoutComponent_Template_app_sidebar_closeMobile_2_listener() {
        return ctx.closeMobileSidebar();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 3)(4, "app-sidebar", 2);
      \u0275\u0275listener("closeMobile", function MainLayoutComponent_Template_app_sidebar_closeMobile_4_listener() {
        return ctx.closeMobileSidebar();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 4)(6, "app-header", 5);
      \u0275\u0275listener("toggleMobile", function MainLayoutComponent_Template_app_header_toggleMobile_6_listener() {
        return ctx.toggleMobileSidebar();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "main", 6);
      \u0275\u0275element(8, "router-outlet");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "app-bottom-tabs", 7);
      \u0275\u0275listener("onFabClick", function MainLayoutComponent_Template_app_bottom_tabs_onFabClick_9_listener() {
        return ctx.onFabClick();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("isMobileOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("isMobileOpen", ctx.isMobileSidebarOpen);
    }
  }, dependencies: [
    RouterModule,
    RouterOutlet,
    CommonModule,
    SidebarComponent,
    HeaderComponent,
    BottomTabsComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayoutComponent, { className: "MainLayoutComponent", filePath: "src\\app\\layout\\main-layout\\main-layout.component.ts", lineNumber: 20 });
})();

// src/app/core/guards/auth.guard.ts
var authGuard = () => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  if (tokenService.isTokenValid()) {
    return true;
  }
  const currentUrl = router.routerState.snapshot.url;
  if (currentUrl && currentUrl !== "/login") {
    sessionStorage.setItem("redirectUrl", currentUrl);
  }
  return router.createUrlTree(["/login"]);
};
var guestGuard = () => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  if (tokenService.isTokenValid()) {
    return router.createUrlTree(["/dashboard"]);
  }
  return true;
};

// src/app/app.routes.ts
var routes = [
  // Auth routes (guest only)
  {
    path: "login",
    loadComponent: () => import("./chunk-5HTP3XUS.js").then((m) => m.LoginComponent),
    canActivate: [guestGuard]
  },
  // Unauthorized page
  {
    path: "unauthorized",
    loadComponent: () => import("./chunk-HN6SXA4I.js").then((m) => m.UnauthorizedComponent)
  },
  // Protected routes (authenticated users)
  {
    path: "",
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      {
        path: "dashboard",
        loadChildren: () => import("./chunk-QFK3B5JA.js").then((m) => m.DASHBOARD_ROUTES)
      },
      {
        path: "brands",
        loadChildren: () => import("./chunk-B6NBW5FA.js").then((m) => m.BrandsModule)
      },
      {
        path: "categories",
        loadChildren: () => import("./chunk-OBNSX66O.js").then((m) => m.CategoriesModule)
      },
      {
        path: "products",
        loadChildren: () => import("./chunk-BOSIQVG5.js").then((m) => m.PRODUCTS_ROUTES)
      },
      {
        path: "inventory",
        loadChildren: () => import("./chunk-VXAQ4EO6.js").then((m) => m.INVENTORY_ROUTES)
      },
      {
        path: "warehouses",
        loadChildren: () => import("./chunk-EUQ7YAUK.js").then((m) => m.WAREHOUSES_ROUTES)
      },
      {
        path: "orders",
        loadChildren: () => import("./chunk-CWK5TV47.js").then((m) => m.ordersRoutes)
      },
      {
        path: "shipments",
        loadChildren: () => import("./chunk-RTKMKF4Z.js").then((m) => m.shipmentsRoutes)
      },
      {
        path: "notifications",
        loadChildren: () => import("./chunk-FK474KRI.js").then((m) => m.NOTIFICATIONS_ROUTES)
      },
      {
        path: "analytics",
        loadChildren: () => import("./chunk-365634BG.js").then((m) => m.ANALYTICS_ROUTES)
      },
      {
        path: "users",
        loadChildren: () => import("./chunk-GRLZB2KI.js").then((m) => m.usersRoutes)
      }
    ]
  },
  // Fallback
  { path: "**", redirectTo: "dashboard" }
];

// node_modules/@ngx-translate/http-loader/fesm2022/ngx-translate-http-loader.mjs
var TRANSLATE_HTTP_LOADER_CONFIG = new InjectionToken("TRANSLATE_HTTP_LOADER_CONFIG");
var TranslateHttpLoader = class _TranslateHttpLoader {
  http;
  config;
  constructor() {
    this.config = __spreadValues({
      prefix: "/assets/i18n/",
      suffix: ".json",
      enforceLoading: false,
      useHttpBackend: false
    }, inject(TRANSLATE_HTTP_LOADER_CONFIG));
    this.http = this.config.useHttpBackend ? new HttpClient(inject(HttpBackend)) : inject(HttpClient);
  }
  /**
   * Gets the translations from the server
   */
  getTranslation(lang) {
    const cacheBuster = this.config.enforceLoading ? `?enforceLoading=${Date.now()}` : "";
    return this.http.get(`${this.config.prefix}${lang}${this.config.suffix}${cacheBuster}`);
  }
  static \u0275fac = function TranslateHttpLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslateHttpLoader)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslateHttpLoader,
    factory: _TranslateHttpLoader.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateHttpLoader, [{
    type: Injectable
  }], () => [], null);
})();
function provideTranslateHttpLoader(config = {}) {
  const useBackend = config.useHttpBackend ?? false;
  return [{
    provide: TRANSLATE_HTTP_LOADER_CONFIG,
    useValue: config
  }, {
    provide: TranslateLoader,
    useClass: TranslateHttpLoader,
    deps: [useBackend ? HttpBackend : HttpClient, TRANSLATE_HTTP_LOADER_CONFIG]
  }];
}

// src/app/core/interceptors/language.interceptor.ts
var LanguageInterceptor = class _LanguageInterceptor {
  languageService;
  constructor(languageService) {
    this.languageService = languageService;
  }
  intercept(request, next) {
    const localizedRequest = request.clone({
      setHeaders: {
        "Accept-Language": this.languageService.currentLanguage
      }
    });
    return next.handle(localizedRequest);
  }
  static \u0275fac = function LanguageInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageInterceptor)(\u0275\u0275inject(LanguageService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LanguageInterceptor, factory: _LanguageInterceptor.\u0275fac });
};

// src/app/core/interceptors/auth.interceptor.ts
var AuthInterceptor = class _AuthInterceptor {
  tokenService;
  router;
  notificationService;
  constructor(tokenService, router, notificationService) {
    this.tokenService = tokenService;
    this.router = router;
    this.notificationService = notificationService;
  }
  intercept(request, next) {
    if (this.isAuthEndpoint(request.url)) {
      return next.handle(request).pipe(catchError((error) => this.handleError(error)));
    }
    const token = this.tokenService.getToken();
    if (token && this.tokenService.isTokenValid()) {
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(authRequest).pipe(catchError((error) => this.handleError(error)));
    }
    return next.handle(request).pipe(catchError((error) => this.handleError(error)));
  }
  /**
   * Handle HTTP errors
   */
  handleError(error) {
    if (error.status === 401) {
      this.tokenService.clearAll();
      this.notificationService.error("AUTH.SESSION_EXPIRED");
      this.router.navigate(["/login"]);
    } else if (error.status === 403) {
      this.notificationService.error("AUTH.ACCESS_DENIED");
      this.router.navigate(["/unauthorized"]);
    }
    return throwError(() => error);
  }
  /**
   * Check if URL is an auth endpoint (login/register)
   */
  isAuthEndpoint(url) {
    const authEndpoints = ["/auth/login", "/auth/register"];
    return authEndpoints.some((endpoint) => url.includes(endpoint));
  }
  static \u0275fac = function AuthInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthInterceptor)(\u0275\u0275inject(TokenService), \u0275\u0275inject(Router), \u0275\u0275inject(NotificationService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthInterceptor, factory: _AuthInterceptor.\u0275fac });
};

// src/app/core/interceptors/error.interceptor.ts
var ErrorInterceptor = class _ErrorInterceptor {
  notificationService = inject(NotificationService);
  intercept(request, next) {
    return next.handle(request).pipe(catchError((error) => {
      let errorMessage = "An unexpected error occurred";
      let showToast = true;
      if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        switch (error.status) {
          case 400:
            errorMessage = error.error?.message || "Bad Request";
            break;
          case 401:
            errorMessage = "Session expired - Please login again";
            if (request.url.includes("/auth/login")) {
              showToast = false;
            }
            break;
          case 403:
            errorMessage = "Access denied - Insufficient permissions";
            break;
          case 404:
            errorMessage = "Resource not found";
            showToast = false;
            break;
          case 500:
            errorMessage = "Server error - Please try again later";
            break;
          default:
            errorMessage = `Error ${error.status}: ${error.message}`;
        }
      }
      console.error("HTTP Error:", errorMessage, error);
      if (showToast && error.status !== 0) {
        this.notificationService.error(errorMessage, { title: "\u26A0\uFE0F Error" });
      }
      return throwError(() => error);
    }));
  }
  static \u0275fac = function ErrorInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErrorInterceptor)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ErrorInterceptor, factory: _ErrorInterceptor.\u0275fac });
};

// src/app/app.config.ts
function initializeApp(languageService) {
  return () => languageService.initializeLanguage();
}
var appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    // ngx-translate configuration using v17 API
    importProvidersFrom(TranslateModule.forRoot({
      defaultLanguage: "en"
    })),
    // TranslateHttpLoader configuration (v17 API)
    provideTranslateHttpLoader({
      prefix: "./assets/i18n/",
      suffix: ".json"
    }),
    // APP_INITIALIZER - blocks bootstrap until translations are loaded
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [LanguageService],
      multi: true
    },
    // HTTP Interceptors (order matters!)
    { provide: HTTP_INTERCEPTORS, useClass: LanguageInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
};

// src/app/shared/components/toast-container/toast-container.component.ts
function ToastContainerComponent_div_1__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 10);
    \u0275\u0275element(1, "path", 11);
    \u0275\u0275elementEnd();
  }
}
function ToastContainerComponent_div_1__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 10);
    \u0275\u0275element(1, "path", 12);
    \u0275\u0275elementEnd();
  }
}
function ToastContainerComponent_div_1__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 10);
    \u0275\u0275element(1, "path", 13);
    \u0275\u0275elementEnd();
  }
}
function ToastContainerComponent_div_1__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 10);
    \u0275\u0275element(1, "path", 14);
    \u0275\u0275elementEnd();
  }
}
function ToastContainerComponent_div_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notification_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(notification_r1.title);
  }
}
function ToastContainerComponent_div_1_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function ToastContainerComponent_div_1_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const notification_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dismiss(notification_r1.id));
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 18);
    \u0275\u0275element(4, "path", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notification_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.getDismissButtonClasses(notification_r1.type));
  }
}
function ToastContainerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275elementContainerStart(2, 4);
    \u0275\u0275template(3, ToastContainerComponent_div_1__svg_svg_3_Template, 2, 0, "svg", 5)(4, ToastContainerComponent_div_1__svg_svg_4_Template, 2, 0, "svg", 5)(5, ToastContainerComponent_div_1__svg_svg_5_Template, 2, 0, "svg", 5)(6, ToastContainerComponent_div_1__svg_svg_6_Template, 2, 0, "svg", 5);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275template(8, ToastContainerComponent_div_1_p_8_Template, 2, 1, "p", 7);
    \u0275\u0275elementStart(9, "p", 8);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, ToastContainerComponent_div_1_button_11_Template, 5, 2, "button", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notification_r1 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.getToastClasses(notification_r1.type));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSwitch", notification_r1.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "error");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "warning");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "info");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", notification_r1.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("mt-1", notification_r1.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(notification_r1.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", notification_r1.dismissible);
  }
}
var ToastContainerComponent = class _ToastContainerComponent {
  notificationService;
  notifications = [];
  subscription;
  constructor(notificationService) {
    this.notificationService = notificationService;
  }
  ngOnInit() {
    this.subscription = this.notificationService.notifications$.subscribe((notifications) => this.notifications = notifications);
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  trackById(_, notification) {
    return notification.id;
  }
  dismiss(id) {
    this.notificationService.dismiss(id);
  }
  getToastClasses(type) {
    const baseClasses = "toast-item";
    switch (type) {
      case "success":
        return `${baseClasses} bg-green-50/95 text-green-800 border border-green-200`;
      case "error":
        return `${baseClasses} bg-red-50/95 text-red-800 border border-red-200`;
      case "warning":
        return `${baseClasses} bg-amber-50/95 text-amber-800 border border-amber-200`;
      case "info":
        return `${baseClasses} bg-blue-50/95 text-blue-800 border border-blue-200`;
      default:
        return `${baseClasses} bg-gray-50/95 text-gray-800 border border-gray-200`;
    }
  }
  getDismissButtonClasses(type) {
    switch (type) {
      case "success":
        return "focus:ring-green-500";
      case "error":
        return "focus:ring-red-500";
      case "warning":
        return "focus:ring-amber-500";
      case "info":
        return "focus:ring-blue-500";
      default:
        return "focus:ring-gray-500";
    }
  }
  static \u0275fac = function ToastContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastContainerComponent)(\u0275\u0275directiveInject(NotificationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastContainerComponent, selectors: [["app-toast-container"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [[1, "fixed", "top-4", "end-4", "z-[9999]", "flex", "flex-col", "gap-3", "max-w-sm", "w-full", "pointer-events-none"], ["class", "toast-item pointer-events-auto", "role", "alert", "aria-live", "polite", 3, "class", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "alert", "aria-live", "polite", 1, "toast-item", "pointer-events-auto"], [1, "flex-shrink-0"], [3, "ngSwitch"], ["class", "h-5 w-5", "fill", "currentColor", "viewBox", "0 0 20 20", 4, "ngSwitchCase"], [1, "flex-1", "ms-3"], ["class", "text-sm font-semibold", 4, "ngIf"], [1, "text-sm"], ["class", "flex-shrink-0 ms-3 -me-1 p-1 rounded-md opacity-60 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2", 3, "class", "click", 4, "ngIf"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "h-5", "w-5"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", "clip-rule", "evenodd"], [1, "text-sm", "font-semibold"], [1, "flex-shrink-0", "ms-3", "-me-1", "p-1", "rounded-md", "opacity-60", "hover:opacity-100", "transition-opacity", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", 3, "click"], [1, "sr-only"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "h-4", "w-4"], ["fill-rule", "evenodd", "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", "clip-rule", "evenodd"]], template: function ToastContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ToastContainerComponent_div_1_Template, 12, 12, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.notifications)("ngForTrackBy", ctx.trackById);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgSwitch, NgSwitchCase], styles: ['\n\n.toast-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  padding: 1rem;\n  border-radius: 0.75rem;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  animation: _ngcontent-%COMP%_slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  backdrop-filter: blur(8px);\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n[dir="rtl"][_nghost-%COMP%]   .toast-item[_ngcontent-%COMP%], [dir="rtl"]   [_nghost-%COMP%]   .toast-item[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes _ngcontent-%COMP%_slideInLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=toast-container.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastContainerComponent, { className: "ToastContainerComponent", filePath: "src\\app\\shared\\components\\toast-container\\toast-container.component.ts", lineNumber: 97 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  title = "E-Commerce Platform";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet")(1, "app-toast-container");
    }
  }, dependencies: [RouterModule, RouterOutlet, ToastContainerComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 16 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
