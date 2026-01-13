// ============================================
// permission.guard.ts - Permission-based Route Protection
// ============================================
// Responsibilities:
// - Check if user has required permissions
// - Redirect to unauthorized page or dashboard
// ============================================

import { inject } from '@angular/core';
import { Router, CanActivateFn, UrlTree, ActivatedRouteSnapshot } from '@angular/router';
import { TokenService } from '../services/token.service';

/**
 * Functional guard for permission-based route protection
 * 
 * Usage in routes:
 * {
 *   path: 'products/create',
 *   component: ProductCreateComponent,
 *   canActivate: [permissionGuard],
 *   data: { permission: 'Products.Create' }
 * }
 * 
 * For multiple permissions (any):
 * data: { permissions: ['Products.Create', 'Products.Edit'], requireAll: false }
 * 
 * For multiple permissions (all):
 * data: { permissions: ['Products.View', 'Inventory.View'], requireAll: true }
 */
export const permissionGuard: CanActivateFn = (route: ActivatedRouteSnapshot): boolean | UrlTree => {
    const tokenService = inject(TokenService);
    const router = inject(Router);

    // First check if authenticated
    if (!tokenService.isTokenValid()) {
        return router.createUrlTree(['/login']);
    }

    // Get required permission(s) from route data
    const singlePermission = route.data['permission'] as string | undefined;
    const multiplePermissions = route.data['permissions'] as string[] | undefined;
    const requireAll = route.data['requireAll'] as boolean | undefined;

    // If single permission is specified
    if (singlePermission) {
        if (tokenService.hasPermission(singlePermission)) {
            return true;
        }
        return router.createUrlTree(['/unauthorized']);
    }

    // If multiple permissions are specified
    if (multiplePermissions && multiplePermissions.length > 0) {
        const hasAccess = requireAll
            ? tokenService.hasAllPermissions(multiplePermissions)
            : tokenService.hasAnyPermission(multiplePermissions);

        if (hasAccess) {
            return true;
        }
        return router.createUrlTree(['/unauthorized']);
    }

    // No permissions specified - allow access (authentication is enough)
    return true;
};

/**
 * Functional guard for role-based route protection
 * 
 * Usage:
 * {
 *   path: 'admin',
 *   canActivate: [roleGuard],
 *   data: { role: 'Admin' }
 * }
 */
export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot): boolean | UrlTree => {
    const tokenService = inject(TokenService);
    const router = inject(Router);

    if (!tokenService.isTokenValid()) {
        return router.createUrlTree(['/login']);
    }

    const requiredRole = route.data['role'] as string | undefined;
    const requiredRoles = route.data['roles'] as string[] | undefined;

    if (requiredRole && tokenService.hasRole(requiredRole)) {
        return true;
    }

    if (requiredRoles && requiredRoles.some(role => tokenService.hasRole(role))) {
        return true;
    }

    if (!requiredRole && !requiredRoles) {
        return true;
    }

    return router.createUrlTree(['/unauthorized']);
};
