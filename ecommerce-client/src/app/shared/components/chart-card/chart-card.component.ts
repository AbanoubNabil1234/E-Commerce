// ==============================================
// chart-card.component.ts
// Reusable Chart Card Wrapper
// ==============================================

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-chart-card',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    template: `
        <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-5 h-full
                    transition-all duration-200 hover:shadow-md motion-reduce:transition-none">
            <!-- Header -->
            <div class="flex items-start justify-between gap-4 mb-4">
                <div>
                    <h3 class="text-sm font-bold text-slate-800 dark:text-white">
                        {{ titleKey | translate }}
                    </h3>
                    <p *ngIf="subtitleKey" class="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                        {{ subtitleKey | translate }}
                    </p>
                </div>
                
                <div class="flex items-center gap-2">
                    <button *ngIf="showPeriodSelector" 
                            class="text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 
                                   flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 
                                   transition-colors">
                        {{ periodLabelKey | translate }}
                        <i class="fas fa-chevron-down text-[10px]"></i>
                    </button>
                    <button class="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 
                                   hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                        <i class="fas fa-ellipsis-h text-xs"></i>
                    </button>
                </div>
            </div>
            
            <!-- Chart Placeholder -->
            <div class="relative" [style.height]="height">
                <ng-content></ng-content>
                
                <!-- Default Placeholder if no content -->
                <div *ngIf="showPlaceholder" 
                     class="absolute inset-0 flex items-end justify-center gap-2 p-4">
                    <!-- Bar Chart Placeholder -->
                    <ng-container *ngIf="chartType === 'bar'">
                        <div *ngFor="let bar of placeholderBars; let i = index" 
                             class="bg-indigo-500/80 rounded-t-lg transition-all duration-300"
                             [style.height.%]="bar"
                             [style.width.%]="100 / placeholderBars.length - 2">
                        </div>
                    </ng-container>
                    
                    <!-- Line Chart Placeholder -->
                    <ng-container *ngIf="chartType === 'line'">
                        <svg class="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                            <polyline 
                                fill="none" 
                                stroke="currentColor" 
                                stroke-width="2"
                                class="text-indigo-500"
                                points="0,60 30,55 60,40 90,45 120,30 150,35 180,20 200,25"
                            />
                            <polyline 
                                fill="url(#gradient)" 
                                stroke="none"
                                points="0,80 0,60 30,55 60,40 90,45 120,30 150,35 180,20 200,25 200,80"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style="stop-color:rgb(99,102,241);stop-opacity:0.3" />
                                    <stop offset="100%" style="stop-color:rgb(99,102,241);stop-opacity:0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </ng-container>
                    
                    <!-- Donut Chart Placeholder -->
                    <ng-container *ngIf="chartType === 'donut'">
                        <svg class="w-24 h-24" viewBox="0 0 36 36">
                            <circle cx="18" cy="18" r="15.9" fill="none" stroke-width="3" stroke="#e2e8f0" class="dark:stroke-slate-700"/>
                            <circle cx="18" cy="18" r="15.9" fill="none" stroke-width="3" stroke="#6366f1" 
                                    stroke-dasharray="65 35" stroke-linecap="round" transform="rotate(-90 18 18)"/>
                            <circle cx="18" cy="18" r="15.9" fill="none" stroke-width="3" stroke="#f59e0b" 
                                    stroke-dasharray="20 80" stroke-dashoffset="-65" stroke-linecap="round" transform="rotate(-90 18 18)"/>
                            <circle cx="18" cy="18" r="15.9" fill="none" stroke-width="3" stroke="#ef4444" 
                                    stroke-dasharray="15 85" stroke-dashoffset="-85" stroke-linecap="round" transform="rotate(-90 18 18)"/>
                        </svg>
                    </ng-container>
                </div>
            </div>
            
            <!-- Labels (optional) -->
            <div *ngIf="labels.length" class="flex justify-between mt-3 text-[10px] text-slate-400 dark:text-slate-500">
                <span *ngFor="let label of labels">{{ label }}</span>
            </div>
        </div>
    `
})
export class ChartCardComponent {
    @Input() titleKey: string = '';
    @Input() subtitleKey: string = '';
    @Input() height: string = '180px';
    @Input() chartType: 'bar' | 'line' | 'donut' = 'bar';
    @Input() showPeriodSelector: boolean = false;
    @Input() periodLabelKey: string = 'DASHBOARD.LAST_30_DAYS';
    @Input() showPlaceholder: boolean = true;
    @Input() labels: string[] = [];

    placeholderBars = [60, 80, 55, 70, 45, 65, 50];
}
