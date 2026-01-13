// ============================================
// error.interceptor.ts - Global Error Handling
// ============================================
// Responsibilities:
// - Catch HTTP errors
// - Display error notifications
// - Log errors for debugging
// ============================================

import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    private notificationService = inject(NotificationService);

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage = 'An unexpected error occurred';
                let showToast = true;

                if (error.error instanceof ErrorEvent) {
                    // Client-side error
                    errorMessage = error.error.message;
                } else {
                    // Server-side error
                    switch (error.status) {
                        case 400:
                            errorMessage = error.error?.message || 'Bad Request';
                            break;
                        case 401:
                            errorMessage = 'Session expired - Please login again';
                            // Don't show toast for 401 on login page
                            if (request.url.includes('/auth/login')) {
                                showToast = false;
                            }
                            break;
                        case 403:
                            errorMessage = 'Access denied - Insufficient permissions';
                            break;
                        case 404:
                            errorMessage = 'Resource not found';
                            showToast = false; // Don't show for 404
                            break;
                        case 500:
                            errorMessage = 'Server error - Please try again later';
                            break;
                        default:
                            errorMessage = `Error ${error.status}: ${error.message}`;
                    }
                }

                console.error('HTTP Error:', errorMessage, error);

                // Show toast notification for errors
                if (showToast && error.status !== 0) {
                    this.notificationService.error(errorMessage, { title: '⚠️ Error' });
                }

                return throwError(() => error);
            })
        );
    }
}
