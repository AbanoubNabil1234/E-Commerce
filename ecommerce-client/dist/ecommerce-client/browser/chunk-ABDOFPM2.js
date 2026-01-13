import {
  NotificationsService
} from "./chunk-VH7VZDZM.js";
import {
  TokenService
} from "./chunk-6OPCIAWL.js";
import {
  NotificationService
} from "./chunk-ZICMI5CI.js";
import {
  Router
} from "./chunk-XIYZMPFO.js";
import {
  environment
} from "./chunk-BOQBRULU.js";
import {
  BehaviorSubject,
  HttpClient,
  catchError,
  computed,
  inject,
  signal,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IGAGZNZV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-N7TOP6ZD.js";

// src/app/core/services/auth.service.ts
var API_URL = environment.apiUrl;
var AuthService = class _AuthService {
  http;
  tokenService;
  router;
  // Reactive auth state using signals
  authState = signal({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null
  });
  // Public computed values
  currentUser = computed(() => this.authState().user);
  isAuthenticated = computed(() => this.authState().isAuthenticated);
  isLoading = computed(() => this.authState().isLoading);
  authError = computed(() => this.authState().error);
  // Permissions from current user
  permissions = computed(() => this.authState().user?.permissions ?? []);
  roles = computed(() => this.authState().user?.roles ?? []);
  // BehaviorSubject for components that need Observable
  isAuthenticated$ = new BehaviorSubject(false);
  // Inject NotificationsService for SignalR
  notificationsService = inject(NotificationsService);
  // Toast service
  toastService = inject(NotificationService);
  constructor(http, tokenService, router) {
    this.http = http;
    this.tokenService = tokenService;
    this.router = router;
    this.initializeAuthState();
  }
  /**
   * Initialize auth state from stored token on app startup
   */
  initializeAuthState() {
    if (this.tokenService.isTokenValid()) {
      const storedUser = this.tokenService.getUser();
      const token = this.tokenService.getToken();
      if (storedUser) {
        this.updateState({
          user: storedUser,
          isAuthenticated: true,
          isLoading: false,
          error: null
        });
        this.isAuthenticated$.next(true);
        if (token) {
          this.notificationsService.startSignalR(token);
        }
      } else {
        this.fetchCurrentUser();
      }
    } else {
      this.tokenService.clearAll();
    }
  }
  /**
   * Login with email and password
   */
  login(credentials, rememberMe = false) {
    this.updateState(__spreadProps(__spreadValues({}, this.authState()), { isLoading: true, error: null }));
    return this.http.post(`${API_URL}/auth/login`, credentials).pipe(tap((response) => {
      this.handleAuthSuccess(response, rememberMe);
    }), catchError((error) => {
      this.updateState(__spreadProps(__spreadValues({}, this.authState()), {
        isLoading: false,
        error: error.error?.detail || "LOGIN.ERROR.INVALID_CREDENTIALS"
      }));
      return throwError(() => error);
    }));
  }
  /**
   * Register new user
   */
  register(data) {
    this.updateState(__spreadProps(__spreadValues({}, this.authState()), { isLoading: true, error: null }));
    return this.http.post(`${API_URL}/auth/register`, data).pipe(tap((response) => {
      this.handleAuthSuccess(response, false);
    }), catchError((error) => {
      this.updateState(__spreadProps(__spreadValues({}, this.authState()), {
        isLoading: false,
        error: error.error?.detail || "REGISTER.ERROR.FAILED"
      }));
      return throwError(() => error);
    }));
  }
  /**
   * Logout user and clear all tokens
   */
  logout() {
    this.notificationsService.stopSignalR();
    this.tokenService.clearAll();
    this.updateState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null
    });
    this.isAuthenticated$.next(false);
    this.toastService.info("You have been logged out successfully", { title: "\u{1F44B} Goodbye!" });
    this.router.navigate(["/login"]);
  }
  /**
   * Fetch current user from API
   */
  fetchCurrentUser() {
    return this.http.get(`${API_URL}/auth/me`).pipe(tap((user) => {
      const currentState = this.authState();
      const updatedUser = __spreadProps(__spreadValues({}, user), {
        permissions: this.tokenService.getPermissions(),
        roles: this.tokenService.getRoles()
      });
      this.tokenService.setUser(updatedUser, !!localStorage.getItem("access_token"));
      this.updateState(__spreadProps(__spreadValues({}, currentState), {
        user: updatedUser,
        isAuthenticated: true,
        isLoading: false
      }));
    }), catchError((error) => {
      this.logout();
      return throwError(() => error);
    }));
  }
  /**
   * Check if user has a specific permission
   */
  hasPermission(permission) {
    return this.permissions().includes(permission);
  }
  /**
   * Check if user has any of the specified permissions
   */
  hasAnyPermission(permissions) {
    const userPermissions = this.permissions();
    return permissions.some((p) => userPermissions.includes(p));
  }
  /**
   * Check if user has all specified permissions
   */
  hasAllPermissions(permissions) {
    const userPermissions = this.permissions();
    return permissions.every((p) => userPermissions.includes(p));
  }
  /**
   * Check if user has a specific role
   */
  hasRole(role) {
    return this.roles().includes(role);
  }
  /**
   * Check if user is admin
   */
  isAdmin() {
    return this.hasRole("Admin");
  }
  /**
   * Get authentication observable for guards
   */
  getAuthState() {
    return this.isAuthenticated$.asObservable();
  }
  /**
   * Handle successful authentication
   */
  handleAuthSuccess(response, rememberMe) {
    this.tokenService.setToken(response.accessToken, rememberMe);
    const user = {
      id: response.userId,
      email: response.email,
      firstName: response.fullName.split(" ")[0] || "",
      lastName: response.fullName.split(" ").slice(1).join(" ") || "",
      fullName: response.fullName,
      roles: response.roles,
      permissions: response.permissions,
      createdAt: /* @__PURE__ */ new Date(),
      lastLoginAt: /* @__PURE__ */ new Date()
    };
    this.tokenService.setUser(user, rememberMe);
    this.updateState({
      user,
      isAuthenticated: true,
      isLoading: false,
      error: null
    });
    this.isAuthenticated$.next(true);
    this.notificationsService.startSignalR(response.accessToken);
    this.toastService.success(`Welcome back, ${user.firstName || user.fullName}!`, { title: "\u{1F44B} Hello!" });
  }
  /**
   * Update auth state
   */
  updateState(state) {
    this.authState.set(state);
  }
  /**
   * Clear error state
   */
  clearError() {
    this.updateState(__spreadProps(__spreadValues({}, this.authState()), {
      error: null
    }));
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(TokenService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

export {
  AuthService
};
//# sourceMappingURL=chunk-ABDOFPM2.js.map
