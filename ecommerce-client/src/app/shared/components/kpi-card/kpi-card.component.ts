// ==============================================
// kpi-card.component.ts
// Reusable KPI Card Component
// ==============================================

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-kpi-card',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    template: `
        <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-5 
                    transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md 
                    motion-reduce:transition-none motion-reduce:transform-none
                    active:scale-[0.99]">
            <div class="flex items-start justify-between gap-4">
                <!-- Content -->
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider truncate">
                        {{ titleKey | translate }}
                    </p>
                    <p class="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-white mt-1">
                        {{ value }}
                    </p>
                    
                    <!-- Trend -->
                    <div class="flex items-center gap-1.5 mt-2 text-xs font-medium">
                        <span [class]="trendClasses">
                            <i class="fas" [class]="trendIcon"></i>
                            {{ trendValue }}
                        </span>
                        <span class="text-slate-400 dark:text-slate-500 truncate">
                            {{ trendLabelKey | translate }}
                        </span>
                    </div>
                </div>
                
                <!-- Icon -->
                <div [class]="iconBg" class="p-3 rounded-xl flex-shrink-0">
                    <i class="fas text-lg" [class]="icon + ' ' + iconColor"></i>
                </div>
            </div>
        </div>
    `
})
export class KpiCardComponent {
    @Input() titleKey: string = '';
    @Input() value: string | number = '';
    @Input() icon: string = 'fa-chart-line';
    @Input() iconBg: string = 'bg-indigo-50 dark:bg-indigo-900/30';
    @Input() iconColor: string = 'text-indigo-600 dark:text-indigo-400';
    @Input() trend: 'up' | 'down' | 'neutral' = 'neutral';
    @Input() trendValue: string = '';
    @Input() trendLabelKey: string = '';

    get trendClasses(): string {
        switch (this.trend) {
            case 'up':
                return 'text-emerald-600 dark:text-emerald-400';
            case 'down':
                return 'text-red-500 dark:text-red-400';
            default:
                return 'text-slate-500 dark:text-slate-400';
        }
    }

    get trendIcon(): string {
        switch (this.trend) {
            case 'up':
                return 'fa-arrow-up';
            case 'down':
                return 'fa-arrow-down';
            default:
                return 'fa-minus';
        }
    }
}
