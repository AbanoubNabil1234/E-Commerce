import {
  environment
} from "./chunk-BOQBRULU.js";
import {
  HttpClient,
  HttpParams,
  inject,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-IGAGZNZV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-N7TOP6ZD.js";

// src/app/features/users/services/user-management.service.ts
var UserManagementService = class _UserManagementService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  // Signals for reactive state
  _users = signal([]);
  _selectedUser = signal(null);
  _roles = signal([]);
  _selectedRole = signal(null);
  _permissions = signal([]);
  _permissionGroups = signal([]);
  _loading = signal(false);
  // Public readonly signals
  users = this._users.asReadonly();
  selectedUser = this._selectedUser.asReadonly();
  roles = this._roles.asReadonly();
  selectedRole = this._selectedRole.asReadonly();
  permissions = this._permissions.asReadonly();
  permissionGroups = this._permissionGroups.asReadonly();
  loading = this._loading.asReadonly();
  // ==========================================
  // User Operations
  // ==========================================
  getUsers(page = 1, pageSize = 20, search) {
    this._loading.set(true);
    let params = new HttpParams().set("page", page).set("pageSize", pageSize);
    if (search) {
      params = params.set("search", search);
    }
    return this.http.get(`${this.apiUrl}/users`, { params }).pipe(tap({
      next: (users) => {
        this._users.set(users);
        this._loading.set(false);
      },
      error: () => this._loading.set(false)
    }));
  }
  getUserById(id) {
    return this.http.get(`${this.apiUrl}/users/${id}`).pipe(tap((user) => this._selectedUser.set(user)));
  }
  createUser(dto) {
    return this.http.post(`${this.apiUrl}/users`, dto);
  }
  updateUser(id, dto) {
    return this.http.put(`${this.apiUrl}/users/${id}`, dto);
  }
  deleteUser(id) {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }
  assignRoles(userId, dto) {
    return this.http.post(`${this.apiUrl}/users/${userId}/roles`, dto);
  }
  resetPassword(userId, dto) {
    return this.http.post(`${this.apiUrl}/users/${userId}/reset-password`, dto);
  }
  toggleUserStatus(userId) {
    return this.http.post(`${this.apiUrl}/users/${userId}/toggle-status`, {});
  }
  // ==========================================
  // Role Operations
  // ==========================================
  getRoles() {
    return this.http.get(`${this.apiUrl}/roles`).pipe(tap((roles) => this._roles.set(roles)));
  }
  getRoleById(id) {
    return this.http.get(`${this.apiUrl}/roles/${id}`).pipe(tap((role) => this._selectedRole.set(role)));
  }
  createRole(dto) {
    return this.http.post(`${this.apiUrl}/roles`, dto);
  }
  updateRole(id, dto) {
    return this.http.put(`${this.apiUrl}/roles/${id}`, dto);
  }
  deleteRole(id) {
    return this.http.delete(`${this.apiUrl}/roles/${id}`);
  }
  assignPermissions(roleId, dto) {
    return this.http.post(`${this.apiUrl}/roles/${roleId}/permissions`, dto);
  }
  // ==========================================
  // Permission Operations
  // ==========================================
  getPermissions() {
    return this.http.get(`${this.apiUrl}/permissions`).pipe(tap((permissions) => this._permissions.set(permissions)));
  }
  getPermissionsGrouped() {
    return this.http.get(`${this.apiUrl}/permissions/grouped`).pipe(tap((groups) => this._permissionGroups.set(groups)));
  }
  // ==========================================
  // Helper Methods
  // ==========================================
  mapToUserDisplay(user) {
    const names = user.fullName.split(" ");
    const initials = names.length >= 2 ? `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase() : user.fullName.substring(0, 2).toUpperCase();
    const primaryRole = user.roles[0] || "No Role";
    return __spreadProps(__spreadValues({}, user), {
      initials,
      statusClass: user.isActive ? "active" : "inactive",
      statusLabel: user.isActive ? "Active" : "Inactive",
      primaryRole,
      roleClass: this.getRoleClass(primaryRole)
    });
  }
  getRoleClass(role) {
    const roleClasses = {
      "SuperAdmin": "super-admin",
      "Admin": "admin",
      "Logistics Manager": "logistics",
      "Warehouse Staff": "warehouse",
      "Support Agent": "support",
      "Finance Manager": "finance"
    };
    return roleClasses[role] || "default";
  }
  clearSelectedUser() {
    this._selectedUser.set(null);
  }
  clearSelectedRole() {
    this._selectedRole.set(null);
  }
  static \u0275fac = function UserManagementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserManagementService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserManagementService, factory: _UserManagementService.\u0275fac, providedIn: "root" });
};

export {
  UserManagementService
};
//# sourceMappingURL=chunk-2OPK4VS6.js.map
