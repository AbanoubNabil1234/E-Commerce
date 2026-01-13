import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject, tap, catchError, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Notification, NotificationListResponse, CreateNotificationRequest } from '../models/notification.model';
import { NotificationType, NotificationTypeLabels } from '../models/notification-type.enum';
import { NotificationService } from '../../../core/services/notification.service';
import * as signalR from '@microsoft/signalr';

@Injectable({
    providedIn: 'root'
})
export class NotificationsService {
    private http = inject(HttpClient);
    private toastService = inject(NotificationService);
    private hubConnection: signalR.HubConnection | null = null;

    // State signals
    notifications = signal<Notification[]>([]);
    unreadCount = signal<number>(0);
    loading = signal<boolean>(false);
    error = signal<string | null>(null);

    // Real-time event
    private notificationReceived$ = new Subject<Notification>();
    onNotificationReceived = this.notificationReceived$.asObservable();

    /**
     * Get paginated notifications.
     */
    getNotifications(page = 1, pageSize = 20): Observable<NotificationListResponse> {
        this.loading.set(true);

        const params = new HttpParams()
            .set('page', page.toString())
            .set('pageSize', pageSize.toString());

        return this.http.get<NotificationListResponse>(`${environment.apiUrl}/notifications`, { params })
            .pipe(
                tap(response => {
                    this.notifications.set(response.items);
                    this.unreadCount.set(response.unreadCount);
                    this.loading.set(false);
                    this.error.set(null);
                }),
                catchError(err => {
                    this.error.set('Failed to load notifications');
                    this.loading.set(false);
                    console.error('Notifications error:', err);
                    return of({ items: [], totalCount: 0, unreadCount: 0, page: 1, pageSize: 20 });
                })
            );
    }

    /**
     * Get unread count only.
     */
    getUnreadCount(): Observable<{ count: number }> {
        return this.http.get<{ count: number }>(`${environment.apiUrl}/notifications/unread-count`)
            .pipe(
                tap(response => this.unreadCount.set(response.count))
            );
    }

    /**
     * Mark notification as read.
     */
    markAsRead(id: number): Observable<void> {
        return this.http.patch<void>(`${environment.apiUrl}/notifications/${id}/read`, {})
            .pipe(
                tap(() => {
                    // Update local state
                    const current = this.notifications();
                    const updated = current.map(n =>
                        n.id === id ? { ...n, isRead: true, readAt: new Date().toISOString() } : n
                    );
                    this.notifications.set(updated);
                    this.unreadCount.update(c => Math.max(0, c - 1));
                })
            );
    }

    /**
     * Mark all as read.
     */
    markAllAsRead(): Observable<{ markedAsRead: number }> {
        return this.http.patch<{ markedAsRead: number }>(`${environment.apiUrl}/notifications/read-all`, {})
            .pipe(
                tap(() => {
                    const current = this.notifications();
                    const updated = current.map(n => ({ ...n, isRead: true, readAt: new Date().toISOString() }));
                    this.notifications.set(updated);
                    this.unreadCount.set(0);
                })
            );
    }

    /**
     * Delete notification.
     */
    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${environment.apiUrl}/notifications/${id}`)
            .pipe(
                tap(() => {
                    const current = this.notifications();
                    const notification = current.find(n => n.id === id);
                    this.notifications.set(current.filter(n => n.id !== id));
                    if (notification && !notification.isRead) {
                        this.unreadCount.update(c => Math.max(0, c - 1));
                    }
                })
            );
    }

    /**
     * Create notification (Admin only).
     */
    create(request: CreateNotificationRequest): Observable<Notification> {
        return this.http.post<Notification>(`${environment.apiUrl}/notifications`, request);
    }

    /**
     * Start SignalR connection for real-time updates.
     */
    startSignalR(token: string): void {
        console.log('[NotificationsService] startSignalR called with token:', token ? 'EXISTS' : 'NULL');

        if (this.hubConnection) {
            console.log('[NotificationsService] Hub connection already exists, skipping');
            return; // Already connected
        }

        console.log('[NotificationsService] Creating new SignalR connection...');
        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl(`${environment.apiUrl.replace('/api', '')}/hubs/notifications`, {
                accessTokenFactory: () => {
                    console.log('[SignalR] accessTokenFactory called, returning token');
                    return token;
                }
            })
            .withAutomaticReconnect()
            .build();

        // Handle incoming notifications
        this.hubConnection.on('ReceiveNotification', (notification: Notification) => {
            console.log('[SignalR] Received notification:', notification);

            // Add to top of list
            this.notifications.update(current => [notification, ...current]);
            this.unreadCount.update(c => c + 1);

            // Show toast notification
            this.showToast(notification);

            // Emit event
            this.notificationReceived$.next(notification);
        });

        // Start connection
        this.hubConnection.start()
            .then(() => console.log('[SignalR] Connected to NotificationHub'))
            .catch(err => console.error('[SignalR] Connection error:', err));
    }

    /**
     * Stop SignalR connection.
     */
    stopSignalR(): void {
        if (this.hubConnection) {
            this.hubConnection.stop();
            this.hubConnection = null;
        }
    }

    /**
     * Get type info (label, icon, color).
     */
    getTypeInfo(type: NotificationType, lang: 'en' | 'ar' = 'en') {
        const info = NotificationTypeLabels[type];
        return {
            label: lang === 'ar' ? info.ar : info.en,
            icon: info.icon,
            color: info.color
        };
    }

    /**
     * Format relative time.
     */
    formatRelativeTime(dateStr: string): string {
        // Parse as UTC since backend returns UTC timestamps
        const date = new Date(dateStr + (dateStr.endsWith('Z') ? '' : 'Z'));
        const now = new Date();
        const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

        if (seconds < 60) return 'just now';
        if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
        if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
        if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;

        return date.toLocaleDateString();
    }

    /**
     * Show toast notification based on notification type.
     */
    private showToast(notification: Notification): void {
        const title = notification.title;
        const message = notification.message || notification.title;

        switch (notification.type) {
            case NotificationType.Order:
                this.toastService.info(message, { title: title || '📦 Order Update' });
                break;
            case NotificationType.Shipment:
                this.toastService.info(message, { title: title || '🚚 Shipment Update' });
                break;
            case NotificationType.Inventory:
                this.toastService.warning(message, { title: title || '📊 Inventory Alert' });
                break;
            case NotificationType.System:
                this.toastService.info(message, { title: title || '🔔 System' });
                break;
            default:
                this.toastService.info(message, { title });
        }
    }
}
