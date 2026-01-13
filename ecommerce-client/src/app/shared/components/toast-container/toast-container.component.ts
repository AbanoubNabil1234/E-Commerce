import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { NotificationService, Notification, NotificationType } from '../../../core/services/notification.service';

@Component({
    selector: 'app-toast-container',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="fixed top-4 end-4 z-[9999] flex flex-col gap-3 max-w-sm w-full pointer-events-none">
            <div *ngFor="let notification of notifications; trackBy: trackById"
                 class="toast-item pointer-events-auto"
                 [class]="getToastClasses(notification.type)"
                 role="alert"
                 aria-live="polite">
                
                <!-- Icon -->
                <div class="flex-shrink-0">
                    <ng-container [ngSwitch]="notification.type">
                        <!-- Success Icon -->
                        <svg *ngSwitchCase="'success'" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <!-- Error Icon -->
                        <svg *ngSwitchCase="'error'" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                        </svg>
                        <!-- Warning Icon -->
                        <svg *ngSwitchCase="'warning'" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                        </svg>
                        <!-- Info Icon -->
                        <svg *ngSwitchCase="'info'" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                        </svg>
                    </ng-container>
                </div>
                
                <!-- Content -->
                <div class="flex-1 ms-3">
                    <p *ngIf="notification.title" class="text-sm font-semibold">{{ notification.title }}</p>
                    <p class="text-sm" [class.mt-1]="notification.title">{{ notification.message }}</p>
                </div>
                
                <!-- Dismiss Button -->
                <button *ngIf="notification.dismissible"
                        (click)="dismiss(notification.id)"
                        class="flex-shrink-0 ms-3 -me-1 p-1 rounded-md opacity-60 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2"
                        [class]="getDismissButtonClasses(notification.type)">
                    <span class="sr-only">Close</span>
                    <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                </button>
            </div>
        </div>
    `,
    styles: [`
        .toast-item {
            display: flex;
            align-items: flex-start;
            padding: 1rem;
            border-radius: 0.75rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            animation: slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            backdrop-filter: blur(8px);
        }

        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        :host-context([dir="rtl"]) .toast-item {
            animation: slideInLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `]
})
export class ToastContainerComponent implements OnInit, OnDestroy {
    notifications: Notification[] = [];
    private subscription?: Subscription;

    constructor(private notificationService: NotificationService) { }

    ngOnInit(): void {
        this.subscription = this.notificationService.notifications$.subscribe(
            notifications => this.notifications = notifications
        );
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    trackById(_: number, notification: Notification): string {
        return notification.id;
    }

    dismiss(id: string): void {
        this.notificationService.dismiss(id);
    }

    getToastClasses(type: NotificationType): string {
        const baseClasses = 'toast-item';

        switch (type) {
            case 'success':
                return `${baseClasses} bg-green-50/95 text-green-800 border border-green-200`;
            case 'error':
                return `${baseClasses} bg-red-50/95 text-red-800 border border-red-200`;
            case 'warning':
                return `${baseClasses} bg-amber-50/95 text-amber-800 border border-amber-200`;
            case 'info':
                return `${baseClasses} bg-blue-50/95 text-blue-800 border border-blue-200`;
            default:
                return `${baseClasses} bg-gray-50/95 text-gray-800 border border-gray-200`;
        }
    }

    getDismissButtonClasses(type: NotificationType): string {
        switch (type) {
            case 'success':
                return 'focus:ring-green-500';
            case 'error':
                return 'focus:ring-red-500';
            case 'warning':
                return 'focus:ring-amber-500';
            case 'info':
                return 'focus:ring-blue-500';
            default:
                return 'focus:ring-gray-500';
        }
    }
}
