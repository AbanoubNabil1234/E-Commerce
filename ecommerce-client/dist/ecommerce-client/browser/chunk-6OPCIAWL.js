import {
  ɵɵdefineInjectable
} from "./chunk-IGAGZNZV.js";

// src/app/core/services/token.service.ts
var TOKEN_KEY = "access_token";
var USER_KEY = "current_user";
var TokenService = class _TokenService {
  /**
   * Store the access token
   * Using sessionStorage for better security (clears on tab close)
   * Use localStorage if "remember me" is checked
   */
  setToken(token, rememberMe = false) {
    const storage = rememberMe ? localStorage : sessionStorage;
    storage.setItem(TOKEN_KEY, token);
  }
  /**
   * Get the stored access token
   */
  getToken() {
    return sessionStorage.getItem(TOKEN_KEY) || localStorage.getItem(TOKEN_KEY);
  }
  /**
   * Remove the stored token
   */
  removeToken() {
    sessionStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_KEY);
  }
  /**
   * Store user data in memory/storage
   */
  setUser(user, rememberMe = false) {
    const storage = rememberMe ? localStorage : sessionStorage;
    storage.setItem(USER_KEY, JSON.stringify(user));
  }
  /**
   * Get stored user data
   */
  getUser() {
    const userData = sessionStorage.getItem(USER_KEY) || localStorage.getItem(USER_KEY);
    if (userData) {
      try {
        return JSON.parse(userData);
      } catch {
        return null;
      }
    }
    return null;
  }
  /**
   * Remove stored user data
   */
  removeUser() {
    sessionStorage.removeItem(USER_KEY);
    localStorage.removeItem(USER_KEY);
  }
  /**
   * Clear all auth data
   */
  clearAll() {
    this.removeToken();
    this.removeUser();
  }
  /**
   * Decode JWT token without external library
   */
  decodeToken() {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    try {
      const parts = token.split(".");
      if (parts.length !== 3) {
        return null;
      }
      const payload = parts[1];
      const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(atob(base64).split("").map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)).join(""));
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }
  /**
   * Check if token exists and is not expired
   */
  isTokenValid() {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    const decoded = this.decodeToken();
    if (!decoded) {
      return false;
    }
    const expirationTime = decoded.exp * 1e3;
    const now = Date.now();
    return expirationTime > now + 3e4;
  }
  /**
   * Get time until token expires (in milliseconds)
   */
  getTokenExpirationTime() {
    const decoded = this.decodeToken();
    if (!decoded) {
      return null;
    }
    const expirationTime = decoded.exp * 1e3;
    return expirationTime - Date.now();
  }
  /**
   * Extract roles from token
   */
  getRoles() {
    const decoded = this.decodeToken();
    if (!decoded) {
      return [];
    }
    const roles = decoded.role;
    if (Array.isArray(roles)) {
      return roles;
    }
    return roles ? [roles] : [];
  }
  /**
   * Extract permissions from token
   */
  getPermissions() {
    const decoded = this.decodeToken();
    if (!decoded) {
      return [];
    }
    const permissions = decoded.permission;
    if (Array.isArray(permissions)) {
      return permissions;
    }
    return permissions ? [permissions] : [];
  }
  /**
   * Check if user has a specific permission
   */
  hasPermission(permission) {
    return this.getPermissions().includes(permission);
  }
  /**
   * Check if user has any of the specified permissions
   */
  hasAnyPermission(permissions) {
    const userPermissions = this.getPermissions();
    return permissions.some((p) => userPermissions.includes(p));
  }
  /**
   * Check if user has all specified permissions
   */
  hasAllPermissions(permissions) {
    const userPermissions = this.getPermissions();
    return permissions.every((p) => userPermissions.includes(p));
  }
  /**
   * Check if user has a specific role
   */
  hasRole(role) {
    return this.getRoles().includes(role);
  }
  static \u0275fac = function TokenService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TokenService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TokenService, factory: _TokenService.\u0275fac, providedIn: "root" });
};

export {
  TokenService
};
//# sourceMappingURL=chunk-6OPCIAWL.js.map
