// ============================================
// auth.guard.ts - Route Protection
// ============================================
// Responsibilities:
// - Prevent unauthenticated access to protected routes
// - Redirect to login if not authenticated
// ============================================

import { inject } from '@angular/core';
import { Router, CanActivateFn, UrlTree } from '@angular/router';
import { TokenService } from '../services/token.service';

/**
 * Functional guard to protect routes requiring authentication
 */
export const authGuard: CanActivateFn = (): boolean | UrlTree => {
    const tokenService = inject(TokenService);
    const router = inject(Router);

    if (tokenService.isTokenValid()) {
        return true;
    }

    // Store intended URL for redirect after login
    const currentUrl = router.routerState.snapshot.url;
    if (currentUrl && currentUrl !== '/login') {
        sessionStorage.setItem('redirectUrl', currentUrl);
    }

    return router.createUrlTree(['/login']);
};

/**
 * Functional guard to prevent authenticated users from accessing guest-only routes (login, register)
 */
export const guestGuard: CanActivateFn = (): boolean | UrlTree => {
    const tokenService = inject(TokenService);
    const router = inject(Router);

    if (tokenService.isTokenValid()) {
        return router.createUrlTree(['/dashboard']);
    }

    return true;
};
