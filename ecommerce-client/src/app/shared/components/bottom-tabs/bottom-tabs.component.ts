// ==============================================
// bottom-tabs.component.ts
// Mobile-only Bottom Navigation Bar
// ==============================================

import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

interface TabItem {
    labelKey: string;
    icon: string;
    route: string;
}

@Component({
    selector: 'app-bottom-tabs',
    standalone: true,
    imports: [CommonModule, RouterModule, TranslateModule],
    template: `
        <!-- Mobile Bottom Navigation - Only visible on mobile -->
        <nav class="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-slate-800 
                    border-t border-slate-100 dark:border-slate-700 
                    pb-[env(safe-area-inset-bottom)]">
            <div class="flex items-center justify-around h-16 relative">
                <!-- Left Tabs -->
                <a *ngFor="let tab of leftTabs"
                   [routerLink]="tab.route"
                   routerLinkActive="text-indigo-600 dark:text-indigo-400"
                   class="flex flex-col items-center justify-center flex-1 h-full 
                          text-slate-500 dark:text-slate-400 transition-colors
                          hover:text-indigo-600 dark:hover:text-indigo-400
                          focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                   [attr.aria-label]="tab.labelKey | translate">
                    <i class="fas text-lg" [class]="tab.icon"></i>
                    <span class="text-[10px] font-medium mt-1">{{ tab.labelKey | translate }}</span>
                </a>
                
                <!-- Floating Action Button -->
                <div class="flex-1 flex items-center justify-center">
                    <button (click)="onFabClick.emit()"
                            class="absolute -top-6 w-14 h-14 bg-indigo-600 hover:bg-indigo-700 
                                   text-white rounded-full shadow-lg shadow-indigo-300 dark:shadow-indigo-900/50
                                   flex items-center justify-center transition-all duration-200
                                   active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                            [attr.aria-label]="'COMMON.ADD' | translate">
                        <i class="fas fa-plus text-xl"></i>
                    </button>
                </div>
                
                <!-- Right Tabs -->
                <a *ngFor="let tab of rightTabs"
                   [routerLink]="tab.route"
                   routerLinkActive="text-indigo-600 dark:text-indigo-400"
                   class="flex flex-col items-center justify-center flex-1 h-full 
                          text-slate-500 dark:text-slate-400 transition-colors
                          hover:text-indigo-600 dark:hover:text-indigo-400
                          focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                   [attr.aria-label]="tab.labelKey | translate">
                    <i class="fas text-lg" [class]="tab.icon"></i>
                    <span class="text-[10px] font-medium mt-1">{{ tab.labelKey | translate }}</span>
                </a>
            </div>
        </nav>
        
        <!-- Spacer to prevent content from being hidden behind bottom tabs -->
        <div class="md:hidden h-20" aria-hidden="true"></div>
    `
})
export class BottomTabsComponent {
    @Output() onFabClick = new EventEmitter<void>();

    leftTabs: TabItem[] = [
        { labelKey: 'BOTTOM_TABS.HOME', icon: 'fa-th-large', route: '/dashboard' },
        { labelKey: 'BOTTOM_TABS.STOCK', icon: 'fa-boxes', route: '/inventory' }
    ];

    rightTabs: TabItem[] = [
        { labelKey: 'BOTTOM_TABS.ORDERS', icon: 'fa-receipt', route: '/orders' },
        { labelKey: 'BOTTOM_TABS.MORE', icon: 'fa-ellipsis-h', route: '/settings' }
    ];
}
