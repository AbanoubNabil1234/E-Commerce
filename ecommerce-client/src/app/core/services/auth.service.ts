// ==============================================
// auth.service.ts
// Authentication Service
// ==============================================
// Responsibilities:
// - Login / Logout
// - Get current user
// - Check authentication state
// - Check permissions
// - Manage auth state reactively
// ==============================================

import { Injectable, computed, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, catchError, throwError, BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import {
    AuthResponse,
    AuthState,
    CurrentUser,
    LoginRequest,
    RegisterRequest
} from '../auth/auth.models';
import { environment } from '../../../environments/environment';
import { NotificationsService } from '../../features/notifications/services/notifications.service';
import { NotificationService } from './notification.service';

const API_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // Reactive auth state using signals
    private authState = signal<AuthState>({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null
    });

    // Public computed values
    readonly currentUser = computed(() => this.authState().user);
    readonly isAuthenticated = computed(() => this.authState().isAuthenticated);
    readonly isLoading = computed(() => this.authState().isLoading);
    readonly authError = computed(() => this.authState().error);

    // Permissions from current user
    readonly permissions = computed(() => this.authState().user?.permissions ?? []);
    readonly roles = computed(() => this.authState().user?.roles ?? []);

    // BehaviorSubject for components that need Observable
    private isAuthenticated$ = new BehaviorSubject<boolean>(false);

    // Inject NotificationsService for SignalR
    private notificationsService = inject(NotificationsService);

    // Toast service
    private toastService = inject(NotificationService);

    constructor(
        private http: HttpClient,
        private tokenService: TokenService,
        private router: Router
    ) {
        // Initialize auth state from stored token
        this.initializeAuthState();
    }

    /**
     * Initialize auth state from stored token on app startup
     */
    private initializeAuthState(): void {
        if (this.tokenService.isTokenValid()) {
            const storedUser = this.tokenService.getUser<CurrentUser>();
            const token = this.tokenService.getToken();
            if (storedUser) {
                this.updateState({
                    user: storedUser,
                    isAuthenticated: true,
                    isLoading: false,
                    error: null
                });
                this.isAuthenticated$.next(true);

                // Start SignalR if token exists
                if (token) {
                    this.notificationsService.startSignalR(token);
                }
            } else {
                // Token exists but no user data - fetch from API
                this.fetchCurrentUser();
            }
        } else {
            // Invalid or no token - clear everything
            this.tokenService.clearAll();
        }
    }

    /**
     * Login with email and password
     */
    login(credentials: LoginRequest, rememberMe: boolean = false): Observable<AuthResponse> {
        this.updateState({ ...this.authState(), isLoading: true, error: null });

        return this.http.post<AuthResponse>(`${API_URL}/auth/login`, credentials).pipe(
            tap(response => {
                this.handleAuthSuccess(response, rememberMe);
            }),
            catchError(error => {
                this.updateState({
                    ...this.authState(),
                    isLoading: false,
                    error: error.error?.detail || 'LOGIN.ERROR.INVALID_CREDENTIALS'
                });
                return throwError(() => error);
            })
        );
    }

    /**
     * Register new user
     */
    register(data: RegisterRequest): Observable<AuthResponse> {
        this.updateState({ ...this.authState(), isLoading: true, error: null });

        return this.http.post<AuthResponse>(`${API_URL}/auth/register`, data).pipe(
            tap(response => {
                this.handleAuthSuccess(response, false);
            }),
            catchError(error => {
                this.updateState({
                    ...this.authState(),
                    isLoading: false,
                    error: error.error?.detail || 'REGISTER.ERROR.FAILED'
                });
                return throwError(() => error);
            })
        );
    }

    /**
     * Logout user and clear all tokens
     */
    logout(): void {
        // Stop SignalR before clearing tokens
        this.notificationsService.stopSignalR();

        this.tokenService.clearAll();
        this.updateState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null
        });
        this.isAuthenticated$.next(false);

        // Show logout toast
        this.toastService.info('You have been logged out successfully', { title: '👋 Goodbye!' });

        this.router.navigate(['/login']);
    }

    /**
     * Fetch current user from API
     */
    fetchCurrentUser(): Observable<CurrentUser> {
        return this.http.get<CurrentUser>(`${API_URL}/auth/me`).pipe(
            tap(user => {
                const currentState = this.authState();
                const updatedUser: CurrentUser = {
                    ...user,
                    permissions: this.tokenService.getPermissions(),
                    roles: this.tokenService.getRoles()
                };
                this.tokenService.setUser(updatedUser, !!localStorage.getItem('access_token'));
                this.updateState({
                    ...currentState,
                    user: updatedUser,
                    isAuthenticated: true,
                    isLoading: false
                });
            }),
            catchError(error => {
                this.logout();
                return throwError(() => error);
            })
        );
    }

    /**
     * Check if user has a specific permission
     */
    hasPermission(permission: string): boolean {
        return this.permissions().includes(permission);
    }

    /**
     * Check if user has any of the specified permissions
     */
    hasAnyPermission(permissions: string[]): boolean {
        const userPermissions = this.permissions();
        return permissions.some(p => userPermissions.includes(p));
    }

    /**
     * Check if user has all specified permissions
     */
    hasAllPermissions(permissions: string[]): boolean {
        const userPermissions = this.permissions();
        return permissions.every(p => userPermissions.includes(p));
    }

    /**
     * Check if user has a specific role
     */
    hasRole(role: string): boolean {
        return this.roles().includes(role);
    }

    /**
     * Check if user is admin
     */
    isAdmin(): boolean {
        return this.hasRole('Admin');
    }

    /**
     * Get authentication observable for guards
     */
    getAuthState(): Observable<boolean> {
        return this.isAuthenticated$.asObservable();
    }

    /**
     * Handle successful authentication
     */
    private handleAuthSuccess(response: AuthResponse, rememberMe: boolean): void {
        // Store token
        this.tokenService.setToken(response.accessToken, rememberMe);

        // Create current user from response
        const user: CurrentUser = {
            id: response.userId,
            email: response.email,
            firstName: response.fullName.split(' ')[0] || '',
            lastName: response.fullName.split(' ').slice(1).join(' ') || '',
            fullName: response.fullName,
            roles: response.roles,
            permissions: response.permissions,
            createdAt: new Date(),
            lastLoginAt: new Date()
        };

        // Store user
        this.tokenService.setUser(user, rememberMe);

        // Update state
        this.updateState({
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null
        });

        this.isAuthenticated$.next(true);

        // Start SignalR for real-time notifications
        this.notificationsService.startSignalR(response.accessToken);

        // Show welcome toast
        this.toastService.success(`Welcome back, ${user.firstName || user.fullName}!`, { title: '👋 Hello!' });
    }

    /**
     * Update auth state
     */
    private updateState(state: AuthState): void {
        this.authState.set(state);
    }

    /**
     * Clear error state
     */
    clearError(): void {
        this.updateState({
            ...this.authState(),
            error: null
        });
    }
}
