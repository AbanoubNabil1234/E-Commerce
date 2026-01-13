import {
  NotificationType,
  NotificationTypeLabels,
  NotificationsService
} from "./chunk-VH7VZDZM.js";
import "./chunk-ZICMI5CI.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-XIYZMPFO.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-BOQBRULU.js";
import {
  CommonModule,
  Subject,
  computed,
  inject,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IGAGZNZV.js";
import "./chunk-N7TOP6ZD.js";

// src/app/features/notifications/pages/notifications-list/notifications-list.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function NotificationsListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.service.unreadCount());
  }
}
function NotificationsListComponent_For_20_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r3.count);
  }
}
function NotificationsListComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function NotificationsListComponent_For_20_Template_button_click_0_listener() {
      const tab_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setActiveTab(tab_r3.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275template(3, NotificationsListComponent_For_20_Conditional_3_Template, 2, 1, "span", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.activeTab() === tab_r3.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, tab_r3.label), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(tab_r3.count !== void 0 && tab_r3.count > 0 ? 3 : -1);
  }
}
function NotificationsListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "COMMON.LOADING"));
  }
}
function NotificationsListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 21);
    \u0275\u0275element(2, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "NOTIFICATIONS.EMPTY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "NOTIFICATIONS.EMPTY_DESC"));
  }
}
function NotificationsListComponent_Conditional_24_For_1_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notification_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("routerLink", notification_r5.actionUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "NOTIFICATIONS.VIEW_DETAILS"), " ");
  }
}
function NotificationsListComponent_Conditional_24_For_1_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function NotificationsListComponent_Conditional_24_For_1_Conditional_15_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const notification_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markAsRead(notification_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "NOTIFICATIONS.MARK_READ"), " ");
  }
}
function NotificationsListComponent_Conditional_24_For_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function NotificationsListComponent_Conditional_24_For_1_Conditional_15_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(1, NotificationsListComponent_Conditional_24_For_1_Conditional_15_Conditional_1_Template, 3, 4, "a", 36)(2, NotificationsListComponent_Conditional_24_For_1_Conditional_15_Conditional_2_Template, 3, 3, "button", 37);
    \u0275\u0275elementStart(3, "button", 38);
    \u0275\u0275listener("click", function NotificationsListComponent_Conditional_24_For_1_Conditional_15_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const notification_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteNotification(notification_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 10);
    \u0275\u0275element(5, "path", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const notification_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(notification_r5.actionUrl ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!notification_r5.isRead ? 2 : -1);
  }
}
function NotificationsListComponent_Conditional_24_For_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 34);
  }
}
function NotificationsListComponent_Conditional_24_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function NotificationsListComponent_Conditional_24_For_1_Template_div_click_0_listener() {
      const notification_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleExpand(notification_r5));
    });
    \u0275\u0275elementStart(1, "div", 25)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 26)(5, "div", 27)(6, "h3", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 29)(9, "span", 30);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 31);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "p", 32);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, NotificationsListComponent_Conditional_24_For_1_Conditional_15_Template, 6, 2, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, NotificationsListComponent_Conditional_24_For_1_Conditional_16_Template, 1, 0, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notification_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("unread", !notification_r5.isRead)("expanded", ctx_r0.expandedId() === notification_r5.id);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.getTypeColor(notification_r5.type) + "20");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.getTypeColor(notification_r5.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getTypeIcon(notification_r5.type), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(notification_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r0.getTypeColor(notification_r5.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getTypeLabel(notification_r5.type), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.service.formatRelativeTime(notification_r5.createdAt), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r5.message);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.expandedId() === notification_r5.id ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!notification_r5.isRead ? 16 : -1);
  }
}
function NotificationsListComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NotificationsListComponent_Conditional_24_For_1_Template, 17, 17, "div", 23, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.filteredNotifications());
  }
}
function NotificationsListComponent_Conditional_25_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function NotificationsListComponent_Conditional_25_For_5_Template_button_click_0_listener() {
      const page_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPage(page_r10));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r10 === ctx_r0.currentPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r10, " ");
  }
}
function NotificationsListComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "button", 41);
    \u0275\u0275listener("click", function NotificationsListComponent_Conditional_25_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage() - 1));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, NotificationsListComponent_Conditional_25_For_5_Template, 2, 3, "button", 42, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(6, "button", 41);
    \u0275\u0275listener("click", function NotificationsListComponent_Conditional_25_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage() + 1));
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage() === 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.PREVIOUS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.pageNumbers());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage() === ctx_r0.totalPages());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 6, "COMMON.NEXT"), " ");
  }
}
var NotificationsListComponent = class _NotificationsListComponent {
  service = inject(NotificationsService);
  translateService = inject(TranslateService);
  destroy$ = new Subject();
  activeTab = signal("all");
  expandedId = signal(null);
  currentPage = signal(1);
  totalCount = signal(0);
  pageSize = 10;
  filterTabs = [
    { key: "all", label: "NOTIFICATIONS.ALL", count: void 0 },
    { key: "unread", label: "NOTIFICATIONS.UNREAD", count: 0 },
    { key: "important", label: "NOTIFICATIONS.IMPORTANT", count: void 0 },
    { key: "archived", label: "NOTIFICATIONS.ARCHIVED", count: void 0 }
  ];
  filteredNotifications = computed(() => {
    const all = this.service.notifications();
    const tab = this.activeTab();
    switch (tab) {
      case "unread":
        return all.filter((n) => !n.isRead);
      case "important":
        return all.filter((n) => n.type === NotificationType.Inventory || n.type === NotificationType.Alert);
      case "archived":
        return all.filter((n) => n.isRead);
      default:
        return all;
    }
  });
  totalPages = computed(() => Math.ceil(this.totalCount() / this.pageSize));
  pageNumbers = computed(() => {
    const total = this.totalPages();
    const current = this.currentPage();
    const pages = [];
    for (let i = Math.max(1, current - 2); i <= Math.min(total, current + 2); i++) {
      pages.push(i);
    }
    return pages;
  });
  ngOnInit() {
    this.loadNotifications();
    this.filterTabs[1].count = this.service.unreadCount();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadNotifications() {
    this.service.getNotifications(this.currentPage(), this.pageSize).pipe(takeUntil(this.destroy$)).subscribe((response) => {
      this.totalCount.set(response.totalCount);
      this.filterTabs[1].count = response.unreadCount;
    });
  }
  setActiveTab(tab) {
    this.activeTab.set(tab);
  }
  toggleExpand(notification) {
    this.expandedId.set(this.expandedId() === notification.id ? null : notification.id);
  }
  markAsRead(notification) {
    this.service.markAsRead(notification.id).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.filterTabs[1].count = this.service.unreadCount();
    });
  }
  markAllAsRead() {
    this.service.markAllAsRead().pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.filterTabs[1].count = 0;
    });
  }
  deleteNotification(notification) {
    this.service.delete(notification.id).pipe(takeUntil(this.destroy$)).subscribe();
  }
  goToPage(page) {
    this.currentPage.set(page);
    this.loadNotifications();
  }
  getTypeIcon(type) {
    return NotificationTypeLabels[type]?.icon || "\u{1F4CC}";
  }
  getTypeLabel(type) {
    const lang = this.translateService.currentLang === "ar" ? "ar" : "en";
    return NotificationTypeLabels[type]?.[lang] || "Notification";
  }
  getTypeColor(type) {
    return NotificationTypeLabels[type]?.color || "#6B7280";
  }
  static \u0275fac = function NotificationsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsListComponent, selectors: [["app-notifications-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 13, consts: [[1, "notifications-page"], [1, "page-header"], [1, "header-content"], [1, "page-title"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "title-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"], [1, "unread-badge"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn-secondary", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "width", "16", "height", "16"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "filter-tabs"], [1, "filter-tab", 3, "active"], [1, "notifications-list"], [1, "loading-state"], [1, "empty-state"], [1, "pagination"], [1, "filter-tab", 3, "click"], [1, "tab-count"], [1, "spinner"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "empty-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"], [1, "notification-card", 3, "unread", "expanded"], [1, "notification-card", 3, "click"], [1, "notification-icon"], [1, "notification-content"], [1, "notification-header"], [1, "notification-title"], [1, "notification-meta"], [1, "notification-badge"], [1, "notification-time"], [1, "notification-message"], [1, "notification-actions"], [1, "unread-indicator"], [1, "notification-actions", 3, "click"], [1, "btn-primary", 3, "routerLink"], [1, "btn-secondary"], [1, "btn-ghost", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "btn-secondary", 3, "click"], [1, "page-btn", 3, "click", "disabled"], [1, "page-btn", 3, "active"], [1, "page-btn", 3, "click"]], template: function NotificationsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275template(8, NotificationsListComponent_Conditional_8_Template, 2, 1, "span", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "button", 9);
      \u0275\u0275listener("click", function NotificationsListComponent_Template_button_click_13_listener() {
        return ctx.markAllAsRead();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 10);
      \u0275\u0275element(15, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "div", 12);
      \u0275\u0275repeaterCreate(19, NotificationsListComponent_For_20_Template, 4, 6, "button", 13, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 14);
      \u0275\u0275template(22, NotificationsListComponent_Conditional_22_Template, 5, 3, "div", 15)(23, NotificationsListComponent_Conditional_23_Template, 9, 6, "div", 16)(24, NotificationsListComponent_Conditional_24_Template, 2, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, NotificationsListComponent_Conditional_25_Template, 9, 8, "div", 17);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "NOTIFICATIONS.TITLE"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.service.unreadCount() > 0 ? 8 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "NOTIFICATIONS.SUBTITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.service.unreadCount() === 0);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 11, "NOTIFICATIONS.MARK_ALL_READ"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.filterTabs);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.service.loading() ? 22 : ctx.filteredNotifications().length === 0 ? 23 : 24);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.totalPages() > 1 ? 25 : -1);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n.notifications-page[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 24px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n}\n.title-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  color: #6366f1;\n}\n.unread-badge[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 4px 0 0 40px;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 16px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-weight: 500;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid #e2e8f0;\n  padding-bottom: 8px;\n}\n.filter-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: transparent;\n  border: none;\n  font-weight: 500;\n  color: #64748b;\n  cursor: pointer;\n  border-radius: 8px;\n  transition: all 0.2s;\n}\n.filter-tab[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.filter-tab.active[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: white;\n}\n.tab-count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 12px;\n}\n.filter-tab[_ngcontent-%COMP%]:not(.active)   .tab-count[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n}\n.notifications-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.notification-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 16px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n}\n.notification-card[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.notification-card.unread[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to right,\n      #faf5ff,\n      white);\n  border-left: 3px solid #6366f1;\n}\n.notification-card.expanded[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\n.notification-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n}\n.notification-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.notification-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 4px;\n}\n.notification-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n.notification-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.notification-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: white;\n  padding: 3px 8px;\n  border-radius: 4px;\n  text-transform: uppercase;\n}\n.notification-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  white-space: nowrap;\n}\n.notification-message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.5;\n}\n.notification-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 12px;\n  padding-top: 12px;\n  border-top: 1px solid #f1f5f9;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: #6366f1;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #4f46e5;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  padding: 8px;\n  background: transparent;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  border-radius: 6px;\n  transition: all 0.2s;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #ef4444;\n}\n.unread-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 16px;\n  width: 8px;\n  height: 8px;\n  background: #6366f1;\n  border-radius: 50%;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px;\n  text-align: center;\n  color: #64748b;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #6366f1;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  color: #cbd5e1;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #1e293b;\n  margin: 0 0 8px;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 24px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: white;\n  border-color: #6366f1;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .notifications-page[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .filter-tabs[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .notification-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .notification-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .notification-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n}\n/*# sourceMappingURL=notifications-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsListComponent, { className: "NotificationsListComponent", filePath: "src\\app\\features\\notifications\\pages\\notifications-list\\notifications-list.component.ts", lineNumber: 521 });
})();
export {
  NotificationsListComponent
};
//# sourceMappingURL=chunk-JKWBVV62.js.map
