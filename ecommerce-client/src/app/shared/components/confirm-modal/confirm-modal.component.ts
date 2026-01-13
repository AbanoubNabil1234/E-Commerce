import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

export type ConfirmModalType = 'danger' | 'warning' | 'info';

export interface ConfirmModalConfig {
    type?: ConfirmModalType;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    itemName?: string; // For dynamic substitution in message
}

@Component({
    selector: 'app-confirm-modal',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    template: `
        <div *ngIf="isOpen" 
             class="fixed inset-0 z-[9999] overflow-y-auto"
             role="dialog"
             aria-modal="true"
             aria-labelledby="confirm-modal-title">
            
            <!-- Backdrop -->
            <div class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity animate-fade-in"
                 (click)="onCancel()"
                 aria-hidden="true">
            </div>

            <!-- Modal Container -->
            <div class="flex min-h-full items-center justify-center p-4">
                <div class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all animate-scale-in"
                     (click)="$event.stopPropagation()">
                    
                    <!-- Icon -->
                    <div class="pt-6 pb-2 flex justify-center">
                        <div class="rounded-full p-3" [class]="getIconBgClass()">
                            <ng-container [ngSwitch]="config.type">
                                <!-- Danger Icon (Trash) -->
                                <svg *ngSwitchCase="'danger'" class="h-8 w-8" [class]="getIconColorClass()" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                </svg>
                                <!-- Warning Icon -->
                                <svg *ngSwitchCase="'warning'" class="h-8 w-8" [class]="getIconColorClass()" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                                </svg>
                                <!-- Info Icon -->
                                <svg *ngSwitchDefault class="h-8 w-8" [class]="getIconColorClass()" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </ng-container>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="px-6 pb-4 text-center">
                        <h3 id="confirm-modal-title" class="text-xl font-bold text-gray-900 mb-2">
                            {{ config.title }}
                        </h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            {{ config.message }}
                        </p>
                        <p *ngIf="config.itemName" class="mt-2 font-semibold text-gray-800">
                            "{{ config.itemName }}"
                        </p>
                    </div>

                    <!-- Actions -->
                    <div class="px-6 pb-6 flex flex-col-reverse sm:flex-row gap-3 sm:justify-center">
                        <button type="button"
                                (click)="onCancel()"
                                class="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-all duration-200">
                            {{ config.cancelText || ('COMMON.CANCEL' | translate) }}
                        </button>
                        <button type="button"
                                (click)="onConfirm()"
                                [class]="getConfirmButtonClass()"
                                class="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200">
                            {{ config.confirmText || ('COMMON.CONFIRM' | translate) }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .animate-fade-in {
            animation: fadeIn 0.2s ease-out;
        }

        .animate-scale-in {
            animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes scaleIn {
            from {
                opacity: 0;
                transform: scale(0.95) translateY(10px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }
    `]
})
export class ConfirmModalComponent {
    @Input() isOpen = false;
    @Input() config: ConfirmModalConfig = {
        type: 'danger',
        title: 'Confirm Action',
        message: 'Are you sure you want to proceed?'
    };

    @Output() confirmed = new EventEmitter<void>();
    @Output() cancelled = new EventEmitter<void>();

    @HostListener('document:keydown.escape')
    onEscapeKey(): void {
        if (this.isOpen) {
            this.onCancel();
        }
    }

    onConfirm(): void {
        this.confirmed.emit();
    }

    onCancel(): void {
        this.cancelled.emit();
    }

    getIconBgClass(): string {
        switch (this.config.type) {
            case 'danger':
                return 'bg-red-100';
            case 'warning':
                return 'bg-amber-100';
            default:
                return 'bg-blue-100';
        }
    }

    getIconColorClass(): string {
        switch (this.config.type) {
            case 'danger':
                return 'text-red-600';
            case 'warning':
                return 'text-amber-600';
            default:
                return 'text-blue-600';
        }
    }

    getConfirmButtonClass(): string {
        switch (this.config.type) {
            case 'danger':
                return 'bg-red-600 hover:bg-red-700 focus:ring-red-500 shadow-lg shadow-red-500/30';
            case 'warning':
                return 'bg-amber-600 hover:bg-amber-700 focus:ring-amber-500 shadow-lg shadow-amber-500/30';
            default:
                return 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 shadow-lg shadow-blue-500/30';
        }
    }
}
