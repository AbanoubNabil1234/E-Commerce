// ==============================================
// table-card.component.ts
// Reusable Table Card with Desktop/Mobile Views
// ==============================================

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-table-card',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    template: `
        <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 overflow-hidden
                    transition-all duration-200 hover:shadow-md motion-reduce:transition-none h-full flex flex-col">
            <!-- Header -->
            <div class="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                <h3 class="text-sm font-bold text-slate-800 dark:text-white">
                    {{ titleKey | translate }}
                </h3>
                <a [href]="viewAllLink" 
                   class="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 
                          dark:hover:text-indigo-300 transition-colors">
                    {{ 'COMMON.VIEW_ALL' | translate }}
                </a>
            </div>
            
            <!-- Desktop Table -->
            <div class="hidden md:block flex-1 overflow-auto">
                <table class="w-full text-left rtl:text-right">
                    <thead>
                        <tr class="bg-slate-50/50 dark:bg-slate-900/50 text-[10px] font-semibold text-slate-500 
                                   dark:text-slate-400 uppercase tracking-wider">
                            <th *ngFor="let col of columns" class="px-5 py-3">{{ col.labelKey | translate }}</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-700 text-sm">
                        <ng-content></ng-content>
                    </tbody>
                </table>
                
                <!-- Empty State -->
                <div *ngIf="isEmpty" class="p-8 text-center text-slate-400">
                    <i class="fas fa-inbox text-3xl mb-2"></i>
                    <p class="text-sm">{{ 'COMMON.NO_DATA' | translate }}</p>
                </div>
            </div>
            
            <!-- Mobile Cards -->
            <div class="md:hidden flex-1 overflow-auto divide-y divide-slate-100 dark:divide-slate-700">
                <ng-content select="[mobileView]"></ng-content>
            </div>
        </div>
    `
})
export class TableCardComponent {
    @Input() titleKey: string = '';
    @Input() viewAllLink: string = '#';
    @Input() columns: { key: string; labelKey: string }[] = [];
    @Input() isEmpty: boolean = false;
}
