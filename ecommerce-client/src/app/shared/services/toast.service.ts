import { Injectable, signal, computed } from '@angular/core';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
    id: number;
    message: string;
    title?: string;
    type: ToastType;
    duration?: number;
    dismissible?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    private toasts = signal<Toast[]>([]);
    private nextId = 0;

    readonly activeToasts = computed(() => this.toasts());

    /**
     * Show a toast notification
     */
    show(message: string, type: ToastType = 'info', options?: { title?: string; duration?: number; dismissible?: boolean }): number {
        const toast: Toast = {
            id: ++this.nextId,
            message,
            type,
            title: options?.title,
            duration: options?.duration ?? 5000,
            dismissible: options?.dismissible ?? true
        };

        this.toasts.update(toasts => [...toasts, toast]);

        // Auto dismiss
        if (toast.duration && toast.duration > 0) {
            setTimeout(() => this.dismiss(toast.id), toast.duration);
        }

        return toast.id;
    }

    /**
     * Show success toast
     */
    success(message: string, title?: string): number {
        return this.show(message, 'success', { title: title ?? 'Success' });
    }

    /**
     * Show error toast
     */
    error(message: string, title?: string): number {
        return this.show(message, 'error', { title: title ?? 'Error', duration: 8000 });
    }

    /**
     * Show warning toast
     */
    warning(message: string, title?: string): number {
        return this.show(message, 'warning', { title: title ?? 'Warning' });
    }

    /**
     * Show info toast
     */
    info(message: string, title?: string): number {
        return this.show(message, 'info', { title: title ?? 'Info' });
    }

    /**
     * Dismiss a specific toast
     */
    dismiss(id: number): void {
        this.toasts.update(toasts => toasts.filter(t => t.id !== id));
    }

    /**
     * Dismiss all toasts
     */
    dismissAll(): void {
        this.toasts.set([]);
    }
}
