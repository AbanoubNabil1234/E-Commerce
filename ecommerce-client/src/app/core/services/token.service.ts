// ==============================================
// token.service.ts
// JWT Token Management Service
// ==============================================
// Responsibilities:
// - Store/retrieve tokens securely
// - Decode JWT payload
// - Check token expiration
// - Clear tokens on logout
// ==============================================

import { Injectable } from '@angular/core';
import { JwtPayload } from '../auth/auth.models';

const TOKEN_KEY = 'access_token';
const USER_KEY = 'current_user';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    /**
     * Store the access token
     * Using sessionStorage for better security (clears on tab close)
     * Use localStorage if "remember me" is checked
     */
    setToken(token: string, rememberMe: boolean = false): void {
        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem(TOKEN_KEY, token);
    }

    /**
     * Get the stored access token
     */
    getToken(): string | null {
        return sessionStorage.getItem(TOKEN_KEY) || localStorage.getItem(TOKEN_KEY);
    }

    /**
     * Remove the stored token
     */
    removeToken(): void {
        sessionStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(TOKEN_KEY);
    }

    /**
     * Store user data in memory/storage
     */
    setUser(user: any, rememberMe: boolean = false): void {
        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem(USER_KEY, JSON.stringify(user));
    }

    /**
     * Get stored user data
     */
    getUser<T>(): T | null {
        const userData = sessionStorage.getItem(USER_KEY) || localStorage.getItem(USER_KEY);
        if (userData) {
            try {
                return JSON.parse(userData) as T;
            } catch {
                return null;
            }
        }
        return null;
    }

    /**
     * Remove stored user data
     */
    removeUser(): void {
        sessionStorage.removeItem(USER_KEY);
        localStorage.removeItem(USER_KEY);
    }

    /**
     * Clear all auth data
     */
    clearAll(): void {
        this.removeToken();
        this.removeUser();
    }

    /**
     * Decode JWT token without external library
     */
    decodeToken(): JwtPayload | null {
        const token = this.getToken();
        if (!token) {
            return null;
        }

        try {
            // JWT structure: header.payload.signature
            const parts = token.split('.');
            if (parts.length !== 3) {
                return null;
            }

            // Decode the payload (second part)
            const payload = parts[1];
            // Handle base64url encoding
            const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(
                atob(base64)
                    .split('')
                    .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                    .join('')
            );

            return JSON.parse(jsonPayload) as JwtPayload;
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    }

    /**
     * Check if token exists and is not expired
     */
    isTokenValid(): boolean {
        const token = this.getToken();
        if (!token) {
            return false;
        }

        const decoded = this.decodeToken();
        if (!decoded) {
            return false;
        }

        // Check expiration (exp is in seconds, Date.now() is in milliseconds)
        const expirationTime = decoded.exp * 1000;
        const now = Date.now();

        // Add 30 seconds buffer to handle clock skew
        return expirationTime > (now + 30000);
    }

    /**
     * Get time until token expires (in milliseconds)
     */
    getTokenExpirationTime(): number | null {
        const decoded = this.decodeToken();
        if (!decoded) {
            return null;
        }

        const expirationTime = decoded.exp * 1000;
        return expirationTime - Date.now();
    }

    /**
     * Extract roles from token
     */
    getRoles(): string[] {
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
    getPermissions(): string[] {
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
    hasPermission(permission: string): boolean {
        return this.getPermissions().includes(permission);
    }

    /**
     * Check if user has any of the specified permissions
     */
    hasAnyPermission(permissions: string[]): boolean {
        const userPermissions = this.getPermissions();
        return permissions.some(p => userPermissions.includes(p));
    }

    /**
     * Check if user has all specified permissions
     */
    hasAllPermissions(permissions: string[]): boolean {
        const userPermissions = this.getPermissions();
        return permissions.every(p => userPermissions.includes(p));
    }

    /**
     * Check if user has a specific role
     */
    hasRole(role: string): boolean {
        return this.getRoles().includes(role);
    }
}
