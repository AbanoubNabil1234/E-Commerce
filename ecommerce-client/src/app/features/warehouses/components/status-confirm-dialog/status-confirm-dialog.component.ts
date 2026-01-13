// ==============================================
// status-confirm-dialog.component.ts
// Reusable Confirmation Dialog for Status Changes
// ==============================================

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-status-confirm-dialog',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    template: `
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200 dark:border-slate-700 animate-in zoom-in-95 duration-200">
                <!-- Header -->
                <div class="px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center gap-3">
                    <div [class]="isDeactivate ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'" 
                         class="p-2 rounded-xl">
                        <i class="fas" [class]="isDeactivate ? 'fa-exclamation-triangle' : 'fa-check-circle'"></i>
                    </div>
                    <h3 class="text-lg font-semibold text-slate-800 dark:text-white">
                        {{ (isDeactivate ? 'WAREHOUSES.CONFIRM_DEACTIVATE' : 'WAREHOUSES.CONFIRM_ACTIVATE') | translate }}
                    </h3>
                </div>

                <!-- Body -->
                <div class="px-6 py-6">
                    <p class="text-slate-600 dark:text-slate-400">
                        {{ 'WAREHOUSES.DELETE_MESSAGE' | translate }}
                    </p>
                    <div *ngIf="isDeactivate" class="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 rounded-lg">
                        <p class="text-xs text-amber-700 dark:text-amber-400 flex gap-2">
                            <i class="fas fa-info-circle mt-0.5"></i>
                            <span>{{ 'WAREHOUSES.CONFIRM_DEACTIVATE' | translate }}</span>
                        </p>
                    </div>
                </div>

                <!-- Footer -->
                <div class="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-end gap-3 font-medium">
                    <button 
                        (click)="onCancel.emit()"
                        class="px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700 rounded-xl transition-all">
                        {{ 'COMMON.CANCEL' | translate }}
                    </button>
                    <button 
                        (click)="onConfirm.emit()"
                        [class]="isDeactivate ? 'bg-red-600 hover:bg-red-700 shadow-red-200' : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200'"
                        class="px-4 py-2 text-sm text-white rounded-xl shadow-lg transition-all active:scale-95">
                        {{ (isDeactivate ? 'COMMON.CONFIRM' : 'COMMON.CONFIRM') | translate }}
                    </button>
                </div>
            </div>
        </div>
    `,
    styles: [`
        :host { display: block; }
    `]
})
export class StatusConfirmDialogComponent {
    @Input() isDeactivate: boolean = false;
    @Output() onConfirm = new EventEmitter<void>();
    @Output() onCancel = new EventEmitter<void>();
}
