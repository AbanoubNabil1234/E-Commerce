// ============================================
// auth.interceptor.ts - JWT Token Injection
// ============================================
// Responsibilities:
// - Attach JWT token to outgoing requests
// - Handle 401 (Unauthorized) responses
// - Handle 403 (Forbidden) responses
// - Auto logout on token expiry
// ============================================

import { Injectable, inject } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HttpInterceptorFn
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { NotificationService } from '../services/notification.service';

/**
 * HTTP Interceptor for JWT authentication
 * Attaches Bearer token to all API requests
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private tokenService: TokenService,
        private router: Router,
        private notificationService: NotificationService
    ) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        // Skip adding token for auth endpoints
        if (this.isAuthEndpoint(request.url)) {
            return next.handle(request).pipe(
                catchError(error => this.handleError(error))
            );
        }

        // Get token
        const token = this.tokenService.getToken();

        // If token exists and is valid, add to request
        if (token && this.tokenService.isTokenValid()) {
            const authRequest = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
            return next.handle(authRequest).pipe(
                catchError(error => this.handleError(error))
            );
        }

        // No valid token - proceed without auth header
        return next.handle(request).pipe(
            catchError(error => this.handleError(error))
        );
    }

    /**
     * Handle HTTP errors
     */
    private handleError(error: HttpErrorResponse): Observable<never> {
        if (error.status === 401) {
            // Unauthorized - token expired or invalid
            this.tokenService.clearAll();
            this.notificationService.error('AUTH.SESSION_EXPIRED');
            this.router.navigate(['/login']);
        } else if (error.status === 403) {
            // Forbidden - user doesn't have permission
            this.notificationService.error('AUTH.ACCESS_DENIED');
            this.router.navigate(['/unauthorized']);
        }

        return throwError(() => error);
    }

    /**
     * Check if URL is an auth endpoint (login/register)
     */
    private isAuthEndpoint(url: string): boolean {
        const authEndpoints = ['/auth/login', '/auth/register'];
        return authEndpoints.some(endpoint => url.includes(endpoint));
    }
}

/**
 * Functional interceptor (Angular 17+ style)
 * Can be used with provideHttpClient(withInterceptors([authInterceptorFn]))
 */
export const authInterceptorFn: HttpInterceptorFn = (req, next) => {
    const tokenService = inject(TokenService);
    const router = inject(Router);
    const notificationService = inject(NotificationService);

    // Skip auth endpoints
    const authEndpoints = ['/auth/login', '/auth/register'];
    if (authEndpoints.some(endpoint => req.url.includes(endpoint))) {
        return next(req).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => error);
            })
        );
    }

    // Get and validate token
    const token = tokenService.getToken();

    if (token && tokenService.isTokenValid()) {
        const authReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });

        return next(authReq).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    tokenService.clearAll();
                    notificationService.error('AUTH.SESSION_EXPIRED');
                    router.navigate(['/login']);
                } else if (error.status === 403) {
                    notificationService.error('AUTH.ACCESS_DENIED');
                    router.navigate(['/unauthorized']);
                }
                return throwError(() => error);
            })
        );
    }

    return next(req);
};
