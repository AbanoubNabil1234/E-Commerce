import {
  UserManagementService
} from "./chunk-2OPK4VS6.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-XIYZMPFO.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-74XXAL65.js";
import {
  TranslateModule
} from "./chunk-BOQBRULU.js";
import {
  CommonModule,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IGAGZNZV.js";
import "./chunk-N7TOP6ZD.js";

// src/app/features/users/pages/users-list/users-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => [a0];
var _c1 = (a0) => ["edit", a0];
function UsersListComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r1 = ctx.$implicit;
    \u0275\u0275property("value", role_r1.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r1.name);
  }
}
function UsersListComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "div", 34);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading users...");
    \u0275\u0275elementEnd()();
  }
}
function UsersListComponent_Conditional_42_For_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 38);
  }
  if (rf & 2) {
    const user_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r3.getAvatarUrl(user_r3), \u0275\u0275sanitizeUrl)("alt", user_r3.fullName);
  }
}
function UsersListComponent_Conditional_42_For_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r3.initials);
  }
}
function UsersListComponent_Conditional_42_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 36)(2, "div", 37);
    \u0275\u0275template(3, UsersListComponent_Conditional_42_For_15_Conditional_3_Template, 1, 2, "img", 38)(4, UsersListComponent_Conditional_42_For_15_Conditional_4_Template, 2, 1, "span", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 40)(6, "span", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 42);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td", 43)(11, "span", 44);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 45);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "span", 46);
    \u0275\u0275element(17, "span", 47);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 48);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 49)(22, "button", 50);
    \u0275\u0275element(23, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 52);
    \u0275\u0275element(25, "i", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 54);
    \u0275\u0275listener("click", function UsersListComponent_Conditional_42_For_15_Template_button_click_26_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleUserStatus(user_r3));
    });
    \u0275\u0275element(27, "i", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 56);
    \u0275\u0275listener("click", function UsersListComponent_Conditional_42_For_15_Template_button_click_28_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteUser(user_r3));
    });
    \u0275\u0275element(29, "i", 57);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(user_r3.profileImageUrl ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(user_r3.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r3.primaryRole);
    \u0275\u0275advance();
    \u0275\u0275classMap(user_r3.roleClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r3.primaryRole);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(user_r3.statusClass);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r3.statusLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(user_r3.lastLoginAt), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c0, user_r3.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c1, user_r3.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", user_r3.isActive ? "Deactivate" : "Activate");
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-toggle-on", user_r3.isActive)("fa-toggle-off", !user_r3.isActive);
  }
}
function UsersListComponent_Conditional_42_ForEmpty_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 35)(1, "td", 58)(2, "div", 59);
    \u0275\u0275element(3, "i", 60);
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "No users found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Try adjusting your search or filters");
    \u0275\u0275elementEnd()()()();
  }
}
function UsersListComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 26)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Department & Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Last Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, UsersListComponent_Conditional_42_For_15_Template, 30, 22, "tr", null, _forTrack0, false, UsersListComponent_Conditional_42_ForEmpty_16_Template, 8, 0, "tr", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r3.users());
  }
}
var UsersListComponent = class _UsersListComponent {
  userService = inject(UserManagementService);
  // State
  searchTerm = signal("");
  selectedRole = signal("all");
  selectedStatus = signal("all");
  currentPage = signal(1);
  pageSize = 10;
  // Loading state
  loading = this.userService.loading;
  // Users data
  users = computed(() => {
    const allUsers = this.userService.users();
    const search = this.searchTerm().toLowerCase();
    const role = this.selectedRole();
    const status = this.selectedStatus();
    return allUsers.filter((user) => {
      if (search && !user.fullName.toLowerCase().includes(search) && !user.email.toLowerCase().includes(search)) {
        return false;
      }
      if (role !== "all" && !user.roles.includes(role)) {
        return false;
      }
      if (status === "active" && !user.isActive)
        return false;
      if (status === "inactive" && user.isActive)
        return false;
      return true;
    }).map((user) => this.userService.mapToUserDisplay(user));
  });
  // Roles for filter dropdown
  roles = this.userService.roles;
  ngOnInit() {
    this.loadUsers();
    this.loadRoles();
  }
  loadUsers() {
    this.userService.getUsers(this.currentPage(), this.pageSize, this.searchTerm()).subscribe();
  }
  loadRoles() {
    this.userService.getRoles().subscribe();
  }
  onSearch() {
    this.currentPage.set(1);
    this.loadUsers();
  }
  onRoleChange(role) {
    this.selectedRole.set(role);
  }
  onStatusChange(status) {
    this.selectedStatus.set(status);
  }
  resetFilters() {
    this.searchTerm.set("");
    this.selectedRole.set("all");
    this.selectedStatus.set("all");
    this.loadUsers();
  }
  onPageChange(page) {
    this.currentPage.set(page);
    this.loadUsers();
  }
  toggleUserStatus(user) {
    this.userService.toggleUserStatus(user.id).subscribe(() => {
      this.loadUsers();
    });
  }
  deleteUser(user) {
    if (confirm(`Are you sure you want to delete ${user.fullName}?`)) {
      this.userService.deleteUser(user.id).subscribe(() => {
        this.loadUsers();
      });
    }
  }
  getAvatarUrl(user) {
    return user.profileImageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.fullName)}&background=6366f1&color=fff`;
  }
  formatDate(date) {
    if (!date)
      return "Never";
    const d = new Date(date);
    const now = /* @__PURE__ */ new Date();
    const diff = now.getTime() - d.getTime();
    if (diff < 6e4)
      return "Just now";
    if (diff < 36e5)
      return `${Math.floor(diff / 6e4)}m ago`;
    if (diff < 864e5)
      return `${Math.floor(diff / 36e5)}h ago`;
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }
  static \u0275fac = function UsersListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersListComponent, selectors: [["app-users-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 53, vars: 7, consts: [[1, "users-page"], [1, "page-header"], [1, "header-content"], [1, "breadcrumb"], [1, "fas", "fa-chevron-right"], [1, "current"], [1, "page-title"], [1, "page-subtitle"], ["routerLink", "create", 1, "btn-primary"], [1, "fas", "fa-plus"], [1, "filters-section"], [1, "search-box"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search by name, email, or department...", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "filter-group"], [1, "filter-dropdown"], [3, "ngModelChange", "ngModel"], ["value", "all"], [3, "value"], [1, "fas", "fa-chevron-down"], ["value", "active"], ["value", "inactive"], [1, "btn-reset", 3, "click"], [1, "fas", "fa-undo"], [1, "users-table-section"], [1, "loading-state"], [1, "users-table"], [1, "pagination-section"], [1, "results-info"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], [1, "fas", "fa-chevron-left"], [1, "page-number", "active"], [1, "page-btn", 3, "click"], [1, "spinner"], [1, "empty-state"], [1, "user-cell"], [1, "user-avatar"], [3, "src", "alt"], [1, "avatar-initials"], [1, "user-info"], [1, "user-name"], [1, "user-email"], [1, "role-cell"], [1, "department"], [1, "role-badge"], [1, "status-badge"], [1, "status-dot"], [1, "date-cell"], [1, "actions-cell"], ["title", "View", 1, "action-btn", 3, "routerLink"], [1, "fas", "fa-eye"], ["title", "Edit", 1, "action-btn", 3, "routerLink"], [1, "fas", "fa-pen"], [1, "action-btn", "toggle", 3, "click", "title"], [1, "fas"], ["title", "Delete", 1, "action-btn", "delete", 3, "click"], [1, "fas", "fa-trash"], ["colspan", "5"], [1, "empty-content"], [1, "fas", "fa-users-slash"]], template: function UsersListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "nav", 3)(4, "span");
      \u0275\u0275text(5, "System Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "i", 4);
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8, "User Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "h1", 6);
      \u0275\u0275text(10, "User Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 7);
      \u0275\u0275text(12, "Manage organization staff, roles, and system access levels.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 8);
      \u0275\u0275element(14, "i", 9);
      \u0275\u0275text(15, " Add New User ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "section", 10)(17, "div", 11);
      \u0275\u0275element(18, "i", 12);
      \u0275\u0275elementStart(19, "input", 13);
      \u0275\u0275listener("ngModelChange", function UsersListComponent_Template_input_ngModelChange_19_listener($event) {
        return ctx.searchTerm.set($event);
      })("keyup.enter", function UsersListComponent_Template_input_keyup_enter_19_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 14)(21, "div", 15)(22, "select", 16);
      \u0275\u0275listener("ngModelChange", function UsersListComponent_Template_select_ngModelChange_22_listener($event) {
        return ctx.onRoleChange($event);
      });
      \u0275\u0275elementStart(23, "option", 17);
      \u0275\u0275text(24, "Role: All");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(25, UsersListComponent_For_26_Template, 2, 2, "option", 18, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "i", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 15)(29, "select", 16);
      \u0275\u0275listener("ngModelChange", function UsersListComponent_Template_select_ngModelChange_29_listener($event) {
        return ctx.onStatusChange($event);
      });
      \u0275\u0275elementStart(30, "option", 17);
      \u0275\u0275text(31, "Status: All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 20);
      \u0275\u0275text(33, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "option", 21);
      \u0275\u0275text(35, "Inactive");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(36, "i", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "button", 22);
      \u0275\u0275listener("click", function UsersListComponent_Template_button_click_37_listener() {
        return ctx.resetFilters();
      });
      \u0275\u0275element(38, "i", 23);
      \u0275\u0275text(39, " Reset ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "section", 24);
      \u0275\u0275template(41, UsersListComponent_Conditional_41_Template, 4, 0, "div", 25)(42, UsersListComponent_Conditional_42_Template, 17, 1, "table", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "footer", 27)(44, "span", 28);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 29)(47, "button", 30);
      \u0275\u0275listener("click", function UsersListComponent_Template_button_click_47_listener() {
        return ctx.onPageChange(ctx.currentPage() - 1);
      });
      \u0275\u0275element(48, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "span", 32);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "button", 33);
      \u0275\u0275listener("click", function UsersListComponent_Template_button_click_51_listener() {
        return ctx.onPageChange(ctx.currentPage() + 1);
      });
      \u0275\u0275element(52, "i", 4);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275property("ngModel", ctx.searchTerm());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.selectedRole());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.roles());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.selectedStatus());
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.loading() ? 41 : 42);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Showing ", ctx.users().length, " users");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.currentPage() === 1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.currentPage());
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, TranslateModule], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  --primary: #6366f1;\n  --primary-light: #818cf8;\n  --primary-dark: #4f46e5;\n  --success: #22c55e;\n  --warning: #f59e0b;\n  --danger: #ef4444;\n  --gray-50: #f8fafc;\n  --gray-100: #f1f5f9;\n  --gray-200: #e2e8f0;\n  --gray-300: #cbd5e1;\n  --gray-400: #94a3b8;\n  --gray-500: #64748b;\n  --gray-600: #475569;\n  --gray-700: #334155;\n  --gray-800: #1e293b;\n  --gray-900: #0f172a;\n  --white: #ffffff;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  --radius: 12px;\n  --radius-sm: 8px;\n}\n.users-page[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  background: var(--gray-50);\n  min-height: 100vh;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.header-content[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--gray-500);\n  margin-bottom: 8px;\n}\n.header-content[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.header-content[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 500;\n}\n.header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--gray-900);\n  margin: 0 0 4px 0;\n}\n.header-content[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-500);\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  background: var(--primary);\n  color: var(--white);\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  transform: translateY(-1px);\n  box-shadow: var(--shadow-md);\n}\n.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.filters-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 280px;\n  max-width: 400px;\n  position: relative;\n}\n.search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--gray-400);\n  font-size: 14px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px 12px 44px;\n  background: var(--white);\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  color: var(--gray-800);\n  transition: all 0.2s;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--gray-400);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.filter-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.filter-dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  appearance: none;\n  padding: 12px 40px 12px 16px;\n  background: var(--white);\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  color: var(--gray-700);\n  cursor: pointer;\n  min-width: 150px;\n}\n.filter-dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n}\n.filter-dropdown[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--gray-400);\n  font-size: 12px;\n  pointer-events: none;\n}\n.btn-reset[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 16px;\n  background: transparent;\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  color: var(--gray-600);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-reset[_ngcontent-%COMP%]:hover {\n  background: var(--gray-100);\n  border-color: var(--gray-300);\n}\n.btn-reset[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.users-table-section[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius);\n  box-shadow: var(--shadow);\n  overflow: hidden;\n}\n.users-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--gray-50);\n}\n.users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--gray-500);\n  border-bottom: 1px solid var(--gray-200);\n}\n.users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--gray-100);\n  transition: background 0.15s;\n}\n.users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--gray-50);\n}\n.users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  vertical-align: middle;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  flex-shrink: 0;\n  background: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.user-avatar[_ngcontent-%COMP%]   .avatar-initials[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--white);\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--gray-800);\n}\n.user-info[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--gray-500);\n}\n.role-cell[_ngcontent-%COMP%]   .department[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: var(--gray-700);\n  margin-bottom: 4px;\n}\n.role-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.role-badge.super-admin[_ngcontent-%COMP%], \n.role-badge.admin[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.15);\n  color: var(--primary);\n}\n.role-badge.logistics[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  color: #16a34a;\n}\n.role-badge.warehouse[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.15);\n  color: #0891b2;\n}\n.role-badge.support[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #d97706;\n}\n.role-badge.finance[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #dc2626;\n}\n.role-badge.default[_ngcontent-%COMP%] {\n  background: var(--gray-100);\n  color: var(--gray-600);\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.status-badge[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #16a34a;\n}\n.status-badge.active[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.status-badge.inactive[_ngcontent-%COMP%] {\n  background: var(--gray-100);\n  color: var(--gray-500);\n}\n.status-badge.inactive[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: var(--gray-400);\n}\n.status-badge.suspended[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #d97706;\n}\n.status-badge.suspended[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.date-cell[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-600);\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  color: var(--gray-500);\n  transition: all 0.15s;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--gray-100);\n  color: var(--gray-700);\n}\n.action-btn.toggle[_ngcontent-%COMP%]   i.fa-toggle-on[_ngcontent-%COMP%] {\n  color: var(--success);\n  font-size: 18px;\n}\n.action-btn.toggle[_ngcontent-%COMP%]   i.fa-toggle-off[_ngcontent-%COMP%] {\n  color: var(--gray-400);\n  font-size: 18px;\n}\n.action-btn.delete[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: var(--danger);\n}\n.action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  gap: 16px;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--gray-200);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.loading-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-500);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 60px 20px !important;\n}\n.empty-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.empty-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: var(--gray-300);\n}\n.empty-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--gray-700);\n  margin: 8px 0 0 0;\n}\n.empty-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-500);\n}\n.pagination-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  background: var(--white);\n  border-top: 1px solid var(--gray-100);\n  margin-top: -1px;\n  border-radius: 0 0 var(--radius) var(--radius);\n}\n.results-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-500);\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--white);\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  color: var(--gray-600);\n  transition: all 0.15s;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--gray-50);\n  border-color: var(--gray-300);\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.page-number[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--gray-600);\n  border-radius: var(--radius-sm);\n}\n.page-number.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: var(--white);\n}\n@media (max-width: 1024px) {\n  .users-page[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .filters-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-box[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n  .filter-group[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n@media (max-width: 768px) {\n  .users-table-section[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .users-table[_ngcontent-%COMP%] {\n    min-width: 700px;\n  }\n  .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=users-list.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersListComponent, { className: "UsersListComponent", filePath: "src\\app\\features\\users\\pages\\users-list\\users-list.component.ts", lineNumber: 20 });
})();
export {
  UsersListComponent
};
//# sourceMappingURL=chunk-BH6HLEFF.js.map
