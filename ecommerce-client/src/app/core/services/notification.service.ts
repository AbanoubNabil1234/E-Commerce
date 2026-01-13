import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
    id: string;
    type: NotificationType;
    title?: string;
    message: string;
    duration?: number; // ms, 0 = persistent
    dismissible?: boolean;
}

export interface NotificationOptions {
    title?: string;
    duration?: number;
    dismissible?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    private readonly DEFAULT_DURATION = 5000;
    private readonly MAX_NOTIFICATIONS = 5;

    private notificationsSubject = new BehaviorSubject<Notification[]>([]);
    public notifications$: Observable<Notification[]> = this.notificationsSubject.asObservable();

    private generateId(): string {
        return `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    private addNotification(notification: Notification): void {
        const current = this.notificationsSubject.value;

        // Limit to max notifications
        const updated = [...current, notification].slice(-this.MAX_NOTIFICATIONS);
        this.notificationsSubject.next(updated);

        // Auto-dismiss if duration is set
        if (notification.duration && notification.duration > 0) {
            setTimeout(() => this.dismiss(notification.id), notification.duration);
        }
    }

    /**
     * Show a success notification
     */
    success(message: string, options?: NotificationOptions): void {
        this.addNotification({
            id: this.generateId(),
            type: 'success',
            message,
            title: options?.title,
            duration: options?.duration ?? this.DEFAULT_DURATION,
            dismissible: options?.dismissible ?? true
        });
    }

    /**
     * Show an error notification
     */
    error(message: string, options?: NotificationOptions): void {
        this.addNotification({
            id: this.generateId(),
            type: 'error',
            message,
            title: options?.title,
            duration: options?.duration ?? this.DEFAULT_DURATION * 1.5, // Errors stay longer
            dismissible: options?.dismissible ?? true
        });
    }

    /**
     * Show a warning notification
     */
    warning(message: string, options?: NotificationOptions): void {
        this.addNotification({
            id: this.generateId(),
            type: 'warning',
            message,
            title: options?.title,
            duration: options?.duration ?? this.DEFAULT_DURATION,
            dismissible: options?.dismissible ?? true
        });
    }

    /**
     * Show an info notification
     */
    info(message: string, options?: NotificationOptions): void {
        this.addNotification({
            id: this.generateId(),
            type: 'info',
            message,
            title: options?.title,
            duration: options?.duration ?? this.DEFAULT_DURATION,
            dismissible: options?.dismissible ?? true
        });
    }

    /**
     * Dismiss a specific notification
     */
    dismiss(id: string): void {
        const current = this.notificationsSubject.value;
        this.notificationsSubject.next(current.filter(n => n.id !== id));
    }

    /**
     * Clear all notifications
     */
    clearAll(): void {
        this.notificationsSubject.next([]);
    }
}
