import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AdjustmentType } from '../../models/inventory.models';

@Component({
    selector: 'app-adjust-stock-dialog',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, TranslateModule],
    template: `
        <div *ngIf="isOpen" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <!-- Backdrop -->
            <div class="fixed inset-0 bg-slate-900/50 transition-opacity backdrop-blur-sm"></div>

            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 text-start shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    
                    <!-- Header -->
                    <div class="bg-white dark:bg-slate-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div [class]="iconBgClass" class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                                <svg [class]="iconClass" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3.251l4.135 4.136a.75.75 0 01-1.058 1.06L12 13.06l-2.923 2.924a.75.75 0 01-1.06-1.06l4.136-4.136zM3 7.5l18 0M3 7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5m-18 0v0m18 0v0" />
                                </svg>
                            </div>
                            <div class="mt-3 text-center sm:ms-4 sm:mt-0 sm:text-start w-full">
                                <h3 class="text-base font-semibold leading-6 text-slate-900 dark:text-white" id="modal-title">
                                    {{ titleKey | translate }}
                                </h3>
                                <div class="mt-2">
                                    <p class="text-sm text-slate-500 dark:text-slate-400">
                                        {{ 'INVENTORY.ADJUST_MODAL.DESCRIPTION' | translate: { product: productName } }}
                                    </p>
                                </div>
                                
                                <!-- Form -->
                                <form [formGroup]="form" class="mt-4 space-y-4">
                                    <!-- Adjustment Type (Hidden or Read-only if passed) -->
                                    
                                    <!-- Quantity -->
                                    <div>
                                        <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                                            {{ 'INVENTORY.QUANTITY' | translate }}
                                        </label>
                                        <div class="mt-1 relative rounded-md shadow-sm">
                                            <input type="number" formControlName="quantity" min="1"
                                                class="block w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white py-2 px-3 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                                                [placeholder]="'INVENTORY.PLACEHOLDERS.QUANTITY' | translate">
                                        </div>
                                        <div *ngIf="form.get('quantity')?.invalid && form.get('quantity')?.touched" class="text-red-600 text-xs mt-1">
                                            {{ 'INVENTORY.VALIDATION.QUANTITY_REQUIRED' | translate }}
                                        </div>
                                    </div>

                                    <!-- Reason -->
                                    <div>
                                        <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                                            {{ 'INVENTORY.REASON' | translate }}
                                        </label>
                                        <textarea formControlName="reason" rows="3"
                                            class="block w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white py-2 px-3 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                                            [placeholder]="'INVENTORY.PLACEHOLDERS.REASON' | translate"></textarea>
                                        <div *ngIf="form.get('reason')?.invalid && form.get('reason')?.touched" class="text-red-600 text-xs mt-1">
                                            {{ 'INVENTORY.VALIDATION.REASON_REQUIRED' | translate }}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div class="bg-slate-50 dark:bg-slate-700/50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" (click)="submit()" [disabled]="form.invalid || isSubmitting"
                            [class]="submitBtnClass"
                            class="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ms-3 sm:w-auto transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                            <span *ngIf="isSubmitting" class="me-2">
                                <svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            </span>
                            {{ 'COMMON.CONFIRM' | translate }}
                        </button>
                        <button type="button" (click)="close()" 
                            class="mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-300 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 sm:mt-0 sm:w-auto transition-colors">
                            {{ 'COMMON.CANCEL' | translate }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class AdjustStockDialogComponent {
    @Input() isOpen = false;
    @Input() productName = '';
    @Input() currentQuantity = 0;
    @Input() type: AdjustmentType = AdjustmentType.SetAbsolute;
    @Input() isSubmitting = false;

    @Output() onClose = new EventEmitter<void>();
    @Output() onConfirm = new EventEmitter<{ quantity: number, reason: string }>();

    private fb = inject(FormBuilder);

    form = this.fb.group({
        quantity: [null as number | null, [Validators.required, Validators.min(1)]],
        reason: ['', [Validators.required, Validators.maxLength(200)]]
    });

    get titleKey(): string {
        switch (this.type) {
            case AdjustmentType.Increase: return 'INVENTORY.ACTIONS.INCREASE_STOCK';
            case AdjustmentType.Decrease: return 'INVENTORY.ACTIONS.DECREASE_STOCK';
            default: return 'INVENTORY.ACTIONS.ADJUST_STOCK';
        }
    }

    get iconBgClass(): string {
        switch (this.type) {
            case AdjustmentType.Increase: return 'bg-green-100 dark:bg-green-900/30';
            case AdjustmentType.Decrease: return 'bg-red-100 dark:bg-red-900/30';
            default: return 'bg-blue-100 dark:bg-blue-900/30';
        }
    }

    get iconClass(): string {
        switch (this.type) {
            case AdjustmentType.Increase: return 'text-green-600 dark:text-green-400';
            case AdjustmentType.Decrease: return 'text-red-600 dark:text-red-400';
            default: return 'text-blue-600 dark:text-blue-400';
        }
    }

    get submitBtnClass(): string {
        switch (this.type) {
            case AdjustmentType.Increase: return 'bg-green-600 hover:bg-green-500';
            case AdjustmentType.Decrease: return 'bg-red-600 hover:bg-red-500';
            default: return 'bg-blue-600 hover:bg-blue-500';
        }
    }

    submit() {
        if (this.form.valid) {
            const { quantity, reason } = this.form.value;
            this.onConfirm.emit({
                quantity: quantity!,
                reason: reason!
            });
        }
    }

    close() {
        this.form.reset();
        this.onClose.emit();
    }
}
