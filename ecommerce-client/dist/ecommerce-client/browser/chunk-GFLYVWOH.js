import {
  UserManagementService
} from "./chunk-2OPK4VS6.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-XIYZMPFO.js";
import {
  TranslateModule
} from "./chunk-BOQBRULU.js";
import {
  CommonModule,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IGAGZNZV.js";
import "./chunk-N7TOP6ZD.js";

// src/app/features/users/pages/roles-list/roles-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => [a0, "permissions"];
function RolesListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading roles...");
    \u0275\u0275elementEnd()();
  }
}
function RolesListComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 12)(2, "button", 13);
    \u0275\u0275element(3, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function RolesListComponent_Conditional_11_For_2_Template_button_click_4_listener() {
      const role_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteRole(role_r2));
    });
    \u0275\u0275element(5, "i", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275element(7, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 20)(13, "div", 21);
    \u0275\u0275element(14, "i", 22);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 21);
    \u0275\u0275element(18, "i", 23);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "a", 24);
    \u0275\u0275text(22, " Edit Permissions ");
    \u0275\u0275element(23, "i", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, role_r2.id));
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background-color", ctx_r2.getRoleIcon(role_r2.name).color + "20")("color", ctx_r2.getRoleIcon(role_r2.name).color);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getRoleIcon(role_r2.name).icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r2.description || "No description provided");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", role_r2.usersCount, " users");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", role_r2.permissionsCount, " permissions");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c0, role_r2.id));
  }
}
function RolesListComponent_Conditional_11_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No roles found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Create a new role to get started");
    \u0275\u0275elementEnd()();
  }
}
function RolesListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, RolesListComponent_Conditional_11_For_2_Template, 24, 16, "div", 10, _forTrack0, false, RolesListComponent_Conditional_11_ForEmpty_3_Template, 6, 0, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.roles());
  }
}
var RolesListComponent = class _RolesListComponent {
  userService = inject(UserManagementService);
  loading = signal(false);
  roles = this.userService.roles;
  // Role icons mapping
  roleIcons = {
    "SuperAdmin": { icon: "fas fa-crown", color: "#6366f1" },
    "Admin": { icon: "fas fa-user-shield", color: "#3b82f6" },
    "Logistics Manager": { icon: "fas fa-truck", color: "#22c55e" },
    "Warehouse Staff": { icon: "fas fa-warehouse", color: "#06b6d4" },
    "Support Agent": { icon: "fas fa-headset", color: "#f59e0b" },
    "Finance Manager": { icon: "fas fa-chart-line", color: "#ef4444" }
  };
  ngOnInit() {
    this.loadRoles();
  }
  loadRoles() {
    this.loading.set(true);
    this.userService.getRoles().subscribe({
      next: () => this.loading.set(false),
      error: () => this.loading.set(false)
    });
  }
  getRoleIcon(roleName) {
    return this.roleIcons[roleName] || { icon: "fas fa-user", color: "#64748b" };
  }
  deleteRole(role) {
    if (role.name === "SuperAdmin" || role.name === "Admin") {
      alert("Cannot delete protected role");
      return;
    }
    if (confirm(`Are you sure you want to delete the "${role.name}" role?`)) {
      this.userService.deleteRole(role.id).subscribe({
        next: () => this.loadRoles(),
        error: () => alert("Failed to delete role")
      });
    }
  }
  static \u0275fac = function RolesListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolesListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesListComponent, selectors: [["app-roles-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 1, consts: [[1, "roles-page"], [1, "page-header"], [1, "header-content"], [1, "page-title"], [1, "page-subtitle"], ["routerLink", "create", 1, "btn-primary"], [1, "fas", "fa-plus"], [1, "loading-state"], [1, "roles-grid"], [1, "spinner"], [1, "role-card"], [1, "empty-state"], [1, "card-actions"], ["title", "Edit", 1, "action-btn", 3, "routerLink"], [1, "fas", "fa-pen"], ["title", "Delete", 1, "action-btn", "delete", 3, "click"], [1, "fas", "fa-trash"], [1, "role-icon"], [1, "role-name"], [1, "role-description"], [1, "role-stats"], [1, "stat"], [1, "fas", "fa-users"], [1, "fas", "fa-key"], [1, "edit-link", 3, "routerLink"], [1, "fas", "fa-arrow-right"], [1, "fas", "fa-user-tag"]], template: function RolesListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Role Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Configure system roles and access permissions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275element(8, "i", 6);
      \u0275\u0275text(9, " Create New Role ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, RolesListComponent_Conditional_10_Template, 4, 0, "div", 7)(11, RolesListComponent_Conditional_11_Template, 4, 1, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.loading() ? 10 : 11);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, TranslateModule], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  --primary: #6366f1;\n  --primary-dark: #4f46e5;\n  --gray-50: #f8fafc;\n  --gray-100: #f1f5f9;\n  --gray-200: #e2e8f0;\n  --gray-400: #94a3b8;\n  --gray-500: #64748b;\n  --gray-600: #475569;\n  --gray-700: #334155;\n  --gray-800: #1e293b;\n  --gray-900: #0f172a;\n  --white: #ffffff;\n  --danger: #ef4444;\n  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  --radius: 12px;\n  --radius-sm: 8px;\n}\n.roles-page[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  background: var(--gray-50);\n  min-height: 100vh;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n}\n.header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--gray-900);\n  margin: 0 0 4px 0;\n}\n.header-content[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-500);\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  background: var(--primary);\n  color: var(--white);\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-decoration: none;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  transform: translateY(-1px);\n  box-shadow: var(--shadow-md);\n}\n.roles-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 24px;\n}\n.role-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--white);\n  border-radius: var(--radius);\n  padding: 24px;\n  box-shadow: var(--shadow);\n  transition: all 0.2s;\n}\n.role-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.role-card[_ngcontent-%COMP%]:hover   .card-actions[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.card-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  display: flex;\n  gap: 8px;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.action-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--gray-100);\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  color: var(--gray-600);\n  transition: all 0.15s;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--gray-200);\n  color: var(--gray-800);\n}\n.action-btn.delete[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: var(--danger);\n}\n.role-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.role-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.role-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--gray-800);\n  margin: 0 0 8px 0;\n}\n.role-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-500);\n  margin: 0 0 20px 0;\n  line-height: 1.5;\n}\n.role-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid var(--gray-100);\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: var(--gray-600);\n}\n.stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--gray-400);\n}\n.edit-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--primary);\n  text-decoration: none;\n  transition: gap 0.2s;\n}\n.edit-link[_ngcontent-%COMP%]:hover {\n  gap: 12px;\n}\n.edit-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n  gap: 16px;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--gray-200);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.loading-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-500);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n  background: var(--white);\n  border-radius: var(--radius);\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--gray-300);\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--gray-700);\n  margin: 0 0 4px 0;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-500);\n}\n@media (max-width: 768px) {\n  .roles-page[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    align-items: flex-start;\n  }\n  .roles-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=roles-list.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesListComponent, { className: "RolesListComponent", filePath: "src\\app\\features\\users\\pages\\roles-list\\roles-list.component.ts", lineNumber: 19 });
})();
export {
  RolesListComponent
};
//# sourceMappingURL=chunk-GFLYVWOH.js.map
