import {
  UserManagementService
} from "./chunk-2OPK4VS6.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-XIYZMPFO.js";
import {
  FormsModule
} from "./chunk-74XXAL65.js";
import {
  TranslateModule
} from "./chunk-BOQBRULU.js";
import {
  CommonModule,
  UpperCasePipe,
  inject,
  signal,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-N7TOP6ZD.js";

// src/app/features/users/pages/permissions-matrix/permissions-matrix.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.module;
function PermissionsMatrixComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275listener("click", function PermissionsMatrixComponent_For_12_Template_a_click_0_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onRoleSelect(r_r2.id));
    });
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275elementStart(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", r_r2.id === ctx_r2.roleId());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.permissionsCount);
  }
}
function PermissionsMatrixComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading permissions...");
    \u0275\u0275elementEnd()();
  }
}
function PermissionsMatrixComponent_Conditional_22_For_44_For_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 39)(1, "input", 40);
    \u0275\u0275listener("change", function PermissionsMatrixComponent_Conditional_22_For_44_For_6_Conditional_4_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r4);
      const permission_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.togglePermission(permission_r5.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const permission_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isPermissionEnabled(permission_r5.id));
  }
}
function PermissionsMatrixComponent_Conditional_22_For_44_For_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 39)(1, "input", 40);
    \u0275\u0275listener("change", function PermissionsMatrixComponent_Conditional_22_For_44_For_6_Conditional_6_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r6);
      const permission_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.togglePermission(permission_r5.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const permission_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isPermissionEnabled(permission_r5.id));
  }
}
function PermissionsMatrixComponent_Conditional_22_For_44_For_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 39)(1, "input", 40);
    \u0275\u0275listener("change", function PermissionsMatrixComponent_Conditional_22_For_44_For_6_Conditional_8_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r7);
      const permission_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.togglePermission(permission_r5.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const permission_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isPermissionEnabled(permission_r5.id));
  }
}
function PermissionsMatrixComponent_Conditional_22_For_44_For_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 39)(1, "input", 40);
    \u0275\u0275listener("change", function PermissionsMatrixComponent_Conditional_22_For_44_For_6_Conditional_10_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r8);
      const permission_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.togglePermission(permission_r5.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const permission_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isPermissionEnabled(permission_r5.id));
  }
}
function PermissionsMatrixComponent_Conditional_22_For_44_For_6_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 39)(1, "input", 40);
    \u0275\u0275listener("change", function PermissionsMatrixComponent_Conditional_22_For_44_For_6_Conditional_12_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r9);
      const permission_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.togglePermission(permission_r5.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const permission_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isPermissionEnabled(permission_r5.id));
  }
}
function PermissionsMatrixComponent_Conditional_22_For_44_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 36)(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 38);
    \u0275\u0275template(4, PermissionsMatrixComponent_Conditional_22_For_44_For_6_Conditional_4_Template, 3, 1, "label", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 38);
    \u0275\u0275template(6, PermissionsMatrixComponent_Conditional_22_For_44_For_6_Conditional_6_Template, 3, 1, "label", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 38);
    \u0275\u0275template(8, PermissionsMatrixComponent_Conditional_22_For_44_For_6_Conditional_8_Template, 3, 1, "label", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 38);
    \u0275\u0275template(10, PermissionsMatrixComponent_Conditional_22_For_44_For_6_Conditional_10_Template, 3, 1, "label", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 38);
    \u0275\u0275template(12, PermissionsMatrixComponent_Conditional_22_For_44_For_6_Conditional_12_Template, 3, 1, "label", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const permission_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(permission_r5.description || permission_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(permission_r5.name.includes(".view") || permission_r5.name.includes(".View") ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(permission_r5.name.includes(".create") || permission_r5.name.includes(".Create") ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(permission_r5.name.includes(".edit") || permission_r5.name.includes(".Edit") ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(permission_r5.name.includes(".delete") || permission_r5.name.includes(".Delete") ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(permission_r5.name.includes(".export") || permission_r5.name.includes(".Export") ? 12 : -1);
  }
}
function PermissionsMatrixComponent_Conditional_22_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 33)(1, "td", 34)(2, "span", 35);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "uppercase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(5, PermissionsMatrixComponent_Conditional_22_For_44_For_6_Template, 13, 6, "tr", 36, _forTrack0);
  }
  if (rf & 2) {
    const group_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r2.getModuleColor(group_r10.module));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, group_r10.module), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r10.permissions);
  }
}
function PermissionsMatrixComponent_Conditional_22_Conditional_45_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 48);
  }
}
function PermissionsMatrixComponent_Conditional_22_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 32)(1, "div", 42);
    \u0275\u0275element(2, "span", 43);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Unsaved Changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 44);
    \u0275\u0275text(6, "Permissions modified");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 45)(8, "button", 46);
    \u0275\u0275listener("click", function PermissionsMatrixComponent_Conditional_22_Conditional_45_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDiscard());
    });
    \u0275\u0275text(9, " Discard Changes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 47);
    \u0275\u0275listener("click", function PermissionsMatrixComponent_Conditional_22_Conditional_45_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSave());
    });
    \u0275\u0275template(11, PermissionsMatrixComponent_Conditional_22_Conditional_45_Conditional_11_Template, 1, 0, "span", 48);
    \u0275\u0275text(12, " Save Permission Set ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.saving() ? 11 : -1);
  }
}
function PermissionsMatrixComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 18)(1, "nav", 19)(2, "span");
    \u0275\u0275text(3, "SETTINGS");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "i", 20);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "USER MANAGEMENT");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "i", 20);
    \u0275\u0275elementStart(8, "span", 21);
    \u0275\u0275text(9, "ROLES & PERMISSIONS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 22)(11, "div", 23)(12, "h1");
    \u0275\u0275text(13, "Permissions Matrix");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15, "Configure access levels for the ");
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " role");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 24)(20, "button", 25);
    \u0275\u0275element(21, "i", 26);
    \u0275\u0275text(22, " Export CSV ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 27);
    \u0275\u0275element(24, "i", 28);
    \u0275\u0275text(25, " Activity Log ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 29)(27, "table")(28, "thead")(29, "tr")(30, "th", 30);
    \u0275\u0275text(31, "ERP MODULE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th", 31);
    \u0275\u0275text(33, "VIEW");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th", 31);
    \u0275\u0275text(35, "CREATE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th", 31);
    \u0275\u0275text(37, "EDIT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 31);
    \u0275\u0275text(39, "DELETE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th", 31);
    \u0275\u0275text(41, "EXPORT");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "tbody");
    \u0275\u0275repeaterCreate(43, PermissionsMatrixComponent_Conditional_22_For_44_Template, 7, 5, null, null, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(45, PermissionsMatrixComponent_Conditional_22_Conditional_45_Template, 13, 2, "footer", 32);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r2.role()) == null ? null : tmp_1_0.name);
    \u0275\u0275advance(26);
    \u0275\u0275repeater(ctx_r2.permissionGroups());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.hasChanges() ? 45 : -1);
  }
}
var PermissionsMatrixComponent = class _PermissionsMatrixComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  userService = inject(UserManagementService);
  roleId = signal(null);
  loading = signal(false);
  saving = signal(false);
  hasChanges = signal(false);
  role = this.userService.selectedRole;
  permissionGroups = this.userService.permissionGroups;
  roles = this.userService.roles;
  // Permission state
  permissionState = signal({});
  originalState = signal({});
  // Module colors for visual distinction
  moduleColors = {
    "Products": "#22c55e",
    "Categories": "#22c55e",
    "Inventory": "#22c55e",
    "Warehouses": "#22c55e",
    "Orders": "#f59e0b",
    "Shipments": "#3b82f6",
    "Reports": "#8b5cf6",
    "Users": "#ef4444",
    "Roles": "#ef4444",
    "Settings": "#64748b"
  };
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("roleId");
    if (id) {
      this.roleId.set(id);
      this.loadData(id);
    }
    this.loadRoles();
  }
  loadRoles() {
    this.userService.getRoles().subscribe();
  }
  loadData(roleId) {
    this.loading.set(true);
    this.userService.getRoleById(roleId).subscribe({
      next: (role) => {
        this.userService.getPermissionsGrouped().subscribe({
          next: () => {
            this.initPermissionState(role);
            this.loading.set(false);
          },
          error: () => this.loading.set(false)
        });
      },
      error: () => {
        this.loading.set(false);
        this.router.navigate(["/users/roles"]);
      }
    });
  }
  initPermissionState(role) {
    const state = {};
    const rolePermissionIds = role.permissions.map((p) => p.id);
    this.permissionGroups().forEach((group) => {
      group.permissions.forEach((permission) => {
        state[permission.id] = rolePermissionIds.includes(permission.id);
      });
    });
    this.permissionState.set(state);
    this.originalState.set(__spreadValues({}, state));
  }
  onRoleSelect(roleId) {
    this.router.navigate(["/users/roles", roleId, "permissions"]);
  }
  togglePermission(permissionId) {
    const current = this.permissionState();
    this.permissionState.set(__spreadProps(__spreadValues({}, current), {
      [permissionId]: !current[permissionId]
    }));
    this.checkForChanges();
  }
  isPermissionEnabled(permissionId) {
    return this.permissionState()[permissionId] || false;
  }
  checkForChanges() {
    const current = this.permissionState();
    const original = this.originalState();
    const hasChanges = Object.keys(current).some((key) => current[+key] !== original[+key]);
    this.hasChanges.set(hasChanges);
  }
  getModuleColor(module) {
    return this.moduleColors[module] || "#64748b";
  }
  onSave() {
    if (!this.roleId())
      return;
    this.saving.set(true);
    const enabledPermissions = Object.entries(this.permissionState()).filter(([_, enabled]) => enabled).map(([id, _]) => +id);
    this.userService.assignPermissions(this.roleId(), { permissionIds: enabledPermissions }).subscribe({
      next: () => {
        this.saving.set(false);
        this.hasChanges.set(false);
        this.originalState.set(__spreadValues({}, this.permissionState()));
      },
      error: () => this.saving.set(false)
    });
  }
  onDiscard() {
    this.permissionState.set(__spreadValues({}, this.originalState()));
    this.hasChanges.set(false);
  }
  selectAllInGroup(group) {
    const current = __spreadValues({}, this.permissionState());
    group.permissions.forEach((p) => current[p.id] = true);
    this.permissionState.set(current);
    this.checkForChanges();
  }
  deselectAllInGroup(group) {
    const current = __spreadValues({}, this.permissionState());
    group.permissions.forEach((p) => current[p.id] = false);
    this.permissionState.set(current);
    this.checkForChanges();
  }
  static \u0275fac = function PermissionsMatrixComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionsMatrixComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PermissionsMatrixComponent, selectors: [["app-permissions-matrix"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 1, consts: [[1, "permissions-page"], [1, "page-layout"], [1, "roles-sidebar"], [1, "sidebar-header"], ["routerLink", "/users/roles/create", 1, "btn-add"], [1, "fas", "fa-plus"], [1, "roles-list"], [1, "role-item", 3, "active"], [1, "audit-tip"], [1, "fas", "fa-info-circle"], [1, "tip-content"], [1, "permissions-content"], [1, "loading-state"], [1, "role-item", 3, "click"], [1, "fas", "fa-user-shield"], [1, "role-name"], [1, "permission-count"], [1, "spinner"], [1, "content-header"], [1, "breadcrumb"], [1, "fas", "fa-chevron-right"], [1, "current"], [1, "header-row"], [1, "header-info"], [1, "header-actions"], [1, "btn-secondary"], [1, "fas", "fa-download"], [1, "btn-outline"], [1, "fas", "fa-history"], [1, "permissions-table"], [1, "module-col"], [1, "perm-col"], [1, "changes-bar"], [1, "group-header"], ["colspan", "6"], [1, "group-label"], [1, "permission-row"], [1, "module-name"], [1, "perm-cell"], [1, "checkbox"], ["type", "checkbox", 3, "change", "checked"], [1, "checkmark"], [1, "changes-info"], [1, "changes-dot"], [1, "changes-detail"], [1, "changes-actions"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click", "disabled"], [1, "spinner-sm"]], template: function PermissionsMatrixComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "aside", 2)(3, "div", 3)(4, "h2");
      \u0275\u0275text(5, "System Roles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Manage role definitions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "nav", 6);
      \u0275\u0275repeaterCreate(11, PermissionsMatrixComponent_For_12_Template, 6, 4, "a", 7, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 8);
      \u0275\u0275element(14, "i", 9);
      \u0275\u0275elementStart(15, "div", 10)(16, "strong");
      \u0275\u0275text(17, "Audit Tip");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p");
      \u0275\u0275text(19, "Changes to role permissions are logged and tracked for compliance audits.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(20, "main", 11);
      \u0275\u0275template(21, PermissionsMatrixComponent_Conditional_21_Template, 4, 0, "div", 12)(22, PermissionsMatrixComponent_Conditional_22_Template, 46, 2);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.roles());
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.loading() ? 21 : ctx.role() ? 22 : -1);
    }
  }, dependencies: [CommonModule, UpperCasePipe, FormsModule, RouterModule, RouterLink, TranslateModule], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  --primary: #6366f1;\n  --primary-dark: #4f46e5;\n  --gray-50: #f8fafc;\n  --gray-100: #f1f5f9;\n  --gray-200: #e2e8f0;\n  --gray-300: #cbd5e1;\n  --gray-400: #94a3b8;\n  --gray-500: #64748b;\n  --gray-600: #475569;\n  --gray-700: #334155;\n  --gray-800: #1e293b;\n  --gray-900: #0f172a;\n  --white: #ffffff;\n  --warning: #f59e0b;\n  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  --radius: 12px;\n  --radius-sm: 8px;\n}\n.permissions-page[_ngcontent-%COMP%] {\n  background: var(--gray-50);\n  min-height: 100vh;\n}\n.page-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.roles-sidebar[_ngcontent-%COMP%] {\n  width: 280px;\n  background: var(--white);\n  border-right: 1px solid var(--gray-200);\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n}\n.sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--gray-800);\n  margin: 0 0 4px 0;\n}\n.sidebar-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--gray-500);\n  margin: 0;\n}\n.sidebar-header[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--primary);\n  color: var(--white);\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 12px;\n  transition: all 0.2s;\n}\n.sidebar-header[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  transform: scale(1.05);\n}\n.roles-list[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.role-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 14px;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  transition: all 0.15s;\n  text-decoration: none;\n  color: var(--gray-700);\n}\n.role-item[_ngcontent-%COMP%]:hover {\n  background: var(--gray-100);\n}\n.role-item.active[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: var(--primary);\n}\n.role-item.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.role-item.active[_ngcontent-%COMP%]   .permission-count[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: var(--white);\n}\n.role-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-400);\n}\n.role-item[_ngcontent-%COMP%]   .role-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 500;\n}\n.role-item[_ngcontent-%COMP%]   .permission-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 8px;\n  background: var(--gray-200);\n  border-radius: 10px;\n  color: var(--gray-600);\n}\n.audit-tip[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 14px;\n  background: rgba(245, 158, 11, 0.1);\n  border-radius: var(--radius-sm);\n  margin-top: auto;\n}\n.audit-tip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--warning);\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.audit-tip[_ngcontent-%COMP%]   .tip-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  color: var(--gray-800);\n  margin-bottom: 4px;\n}\n.audit-tip[_ngcontent-%COMP%]   .tip-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--gray-600);\n  margin: 0;\n  line-height: 1.4;\n}\n.permissions-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px 32px;\n  display: flex;\n  flex-direction: column;\n}\n.content-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  color: var(--gray-400);\n  margin-bottom: 16px;\n}\n.breadcrumb[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n.breadcrumb[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.header-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--gray-900);\n  margin: 0 0 4px 0;\n}\n.header-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-500);\n  margin: 0;\n}\n.header-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: var(--white);\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--gray-600);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--gray-50);\n  border-color: var(--gray-300);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: transparent;\n  border: 1px solid var(--primary);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--primary);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: var(--white);\n}\n.permissions-table[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius);\n  box-shadow: var(--shadow);\n  overflow: hidden;\n  flex: 1;\n}\n.permissions-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.permissions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--gray-50);\n}\n.permissions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--gray-500);\n  border-bottom: 1px solid var(--gray-200);\n}\n.permissions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.perm-col[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 80px;\n}\n.group-header[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 20px !important;\n  background: var(--gray-50);\n  border-bottom: 1px solid var(--gray-200);\n}\n.group-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n}\n.permission-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--gray-100);\n}\n.permission-row[_ngcontent-%COMP%]:hover {\n  background: var(--gray-50);\n}\n.permission-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n}\n.permission-row[_ngcontent-%COMP%]   .module-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-700);\n}\n.permission-row[_ngcontent-%COMP%]   .perm-cell[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.checkbox[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--gray-300);\n  border-radius: 4px;\n  position: relative;\n  transition: all 0.15s;\n}\n.checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  display: none;\n  left: 6px;\n  top: 3px;\n  width: 5px;\n  height: 9px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%] {\n  background: #22c55e;\n  border-color: #22c55e;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%]::after {\n  display: block;\n}\n.changes-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 24px;\n  background: var(--white);\n  border-top: 1px solid var(--gray-200);\n  margin-top: 24px;\n  border-radius: var(--radius);\n}\n.changes-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.changes-info[_ngcontent-%COMP%]   .changes-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: var(--warning);\n  border-radius: 50%;\n}\n.changes-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-700);\n  font-weight: 500;\n}\n.changes-info[_ngcontent-%COMP%]   .changes-detail[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: var(--gray-500);\n}\n.changes-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  background: var(--primary);\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--white);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n  gap: 16px;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--gray-200);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.loading-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-500);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1024px) {\n  .page-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .roles-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    border-right: none;\n    border-bottom: 1px solid var(--gray-200);\n  }\n  .roles-list[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .role-item[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n  }\n}\n/*# sourceMappingURL=permissions-matrix.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PermissionsMatrixComponent, { className: "PermissionsMatrixComponent", filePath: "src\\app\\features\\users\\pages\\permissions-matrix\\permissions-matrix.component.ts", lineNumber: 24 });
})();
export {
  PermissionsMatrixComponent
};
//# sourceMappingURL=chunk-A3Q2EK7D.js.map
