// ==============================================
// unauthorized.component.ts - Access Denied Page
// ==============================================

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
    selector: 'app-unauthorized',
    standalone: true,
    imports: [CommonModule, RouterLink, TranslateModule],
    template: `
        <div class="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-4">
            <div class="text-center">
                <!-- Icon -->
                <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/20 mb-6">
                    <svg class="w-10 h-10 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                    </svg>
                </div>
                
                <!-- Title -->
                <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    {{ 'AUTH.ACCESS_DENIED' | translate }}
                </h1>
                
                <!-- Description -->
                <p class="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
                    {{ 'AUTH.UNAUTHORIZED' | translate }}
                </p>
                
                <!-- Actions -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a routerLink="/dashboard" 
                       class="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors">
                        {{ 'MENU.DASHBOARD' | translate }}
                    </a>
                    <button (click)="logout()"
                            class="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        {{ 'COMMON.LOGOUT' | translate }}
                    </button>
                </div>
            </div>
        </div>
    `
})
export class UnauthorizedComponent {
    private authService = inject(AuthService);

    logout(): void {
        this.authService.logout();
    }
}
