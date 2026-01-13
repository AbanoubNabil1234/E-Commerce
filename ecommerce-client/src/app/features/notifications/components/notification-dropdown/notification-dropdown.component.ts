import { Component, OnInit, OnDestroy, inject, signal, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { NotificationsService } from '../../services/notifications.service';
import { Notification } from '../../models/notification.model';
import { NotificationTypeLabels, NotificationType } from '../../models/notification-type.enum';

@Component({
    selector: 'app-notification-dropdown',
    standalone: true,
    imports: [CommonModule, RouterModule, TranslateModule],
    template: `
        <div class="notification-dropdown">
            <!-- Bell Button -->
            <button class="bell-btn" (click)="toggleDropdown()">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
                @if (service.unreadCount() > 0) {
                    <span class="badge">{{ service.unreadCount() > 9 ? '9+' : service.unreadCount() }}</span>
                }
            </button>
            
            <!-- Dropdown Panel -->
            @if (isOpen()) {
                <div class="dropdown-panel">
                    <div class="dropdown-header">
                        <h3>{{ 'NOTIFICATIONS.TITLE' | translate }}</h3>
                        @if (service.unreadCount() > 0) {
                            <button class="mark-all-btn" (click)="markAllAsRead()">
                                {{ 'NOTIFICATIONS.MARK_ALL_READ' | translate }}
                            </button>
                        }
                    </div>
                    
                    <div class="dropdown-content">
                        @if (service.loading()) {
                            <div class="loading">
                                <div class="spinner"></div>
                            </div>
                        } @else if (recentNotifications().length === 0) {
                            <div class="empty">
                                <p>{{ 'NOTIFICATIONS.EMPTY' | translate }}</p>
                            </div>
                        } @else {
                            @for (notification of recentNotifications(); track notification.id) {
                                <div class="notification-item" 
                                     [class.unread]="!notification.isRead"
                                     (click)="handleClick(notification)">
                                    <div class="item-icon" [style.background]="getTypeColor(notification.type) + '20'">
                                        <span>{{ getTypeIcon(notification.type) }}</span>
                                    </div>
                                    <div class="item-content">
                                        <p class="item-title">{{ notification.title }}</p>
                                        <p class="item-time">{{ service.formatRelativeTime(notification.createdAt) }}</p>
                                    </div>
                                    @if (!notification.isRead) {
                                        <div class="unread-dot"></div>
                                    }
                                </div>
                            }
                        }
                    </div>
                    
                    <div class="dropdown-footer">
                        <a routerLink="/notifications" (click)="close()">
                            {{ 'NOTIFICATIONS.VIEW_ALL' | translate }}
                        </a>
                    </div>
                </div>
            }
        </div>
    `,
    styles: [`
        .notification-dropdown {
            position: relative;
        }

        .bell-btn {
            position: relative;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            color: #64748b;
            transition: all 0.2s;
        }

        .bell-btn:hover {
            background: #f1f5f9;
            color: #6366f1;
        }

        .badge {
            position: absolute;
            top: 4px;
            right: 4px;
            min-width: 18px;
            height: 18px;
            padding: 0 5px;
            background: #ef4444;
            color: white;
            font-size: 10px;
            font-weight: 600;
            border-radius: 9px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .dropdown-panel {
            position: absolute;
            top: calc(100% + 8px);
            right: 0;
            width: 360px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
            border: 1px solid #e2e8f0;
            overflow: hidden;
            z-index: 1000;
            animation: fadeIn 0.2s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .dropdown-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;
            border-bottom: 1px solid #f1f5f9;
        }

        .dropdown-header h3 {
            margin: 0;
            font-size: 16px;
            font-weight: 600;
            color: #1e293b;
        }

        .mark-all-btn {
            background: none;
            border: none;
            color: #6366f1;
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
        }

        .mark-all-btn:hover {
            text-decoration: underline;
        }

        .dropdown-content {
            max-height: 320px;
            overflow-y: auto;
        }

        .notification-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
            cursor: pointer;
            transition: background 0.2s;
            position: relative;
        }

        .notification-item:hover {
            background: #f8fafc;
        }

        .notification-item.unread {
            background: #faf5ff;
        }

        .item-icon {
            flex-shrink: 0;
            width: 36px;
            height: 36px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
        }

        .item-content {
            flex: 1;
            min-width: 0;
        }

        .item-title {
            font-size: 14px;
            font-weight: 500;
            color: #1e293b;
            margin: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .item-time {
            font-size: 12px;
            color: #94a3b8;
            margin: 2px 0 0;
        }

        .unread-dot {
            width: 8px;
            height: 8px;
            background: #6366f1;
            border-radius: 50%;
            flex-shrink: 0;
        }

        .loading, .empty {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;
            color: #94a3b8;
        }

        .spinner {
            width: 24px;
            height: 24px;
            border: 2px solid #e2e8f0;
            border-top-color: #6366f1;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .dropdown-footer {
            padding: 12px 16px;
            border-top: 1px solid #f1f5f9;
            text-align: center;
        }

        .dropdown-footer a {
            color: #6366f1;
            font-weight: 500;
            font-size: 14px;
            text-decoration: none;
        }

        .dropdown-footer a:hover {
            text-decoration: underline;
        }

        @media (max-width: 480px) {
            .dropdown-panel {
                width: 100vw;
                right: -16px;
                border-radius: 0 0 12px 12px;
            }
        }
    `]
})
export class NotificationDropdownComponent implements OnInit, OnDestroy {
    service = inject(NotificationsService);
    private elementRef = inject(ElementRef);
    private destroy$ = new Subject<void>();

    isOpen = signal(false);
    recentNotifications = signal<Notification[]>([]);

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.close();
        }
    }

    ngOnInit(): void {
        // Load initial count
        this.service.getUnreadCount()
            .pipe(takeUntil(this.destroy$))
            .subscribe();

        // Subscribe to real-time notifications
        this.service.onNotificationReceived
            .pipe(takeUntil(this.destroy$))
            .subscribe(notification => {
                // Update recent notifications if dropdown is open
                if (this.isOpen()) {
                    this.recentNotifications.update(current => [notification, ...current].slice(0, 5));
                }
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    toggleDropdown(): void {
        if (this.isOpen()) {
            this.close();
        } else {
            this.open();
        }
    }

    open(): void {
        this.isOpen.set(true);
        this.loadRecent();
    }

    close(): void {
        this.isOpen.set(false);
    }

    loadRecent(): void {
        this.service.getNotifications(1, 5)
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
                this.recentNotifications.set(response.items);
            });
    }

    handleClick(notification: Notification): void {
        if (!notification.isRead) {
            this.service.markAsRead(notification.id)
                .pipe(takeUntil(this.destroy$))
                .subscribe();
        }

        if (notification.actionUrl) {
            this.close();
            // Router navigation handled by routerLink
        }
    }

    markAllAsRead(): void {
        this.service.markAllAsRead()
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.recentNotifications.update(items =>
                    items.map(n => ({ ...n, isRead: true }))
                );
            });
    }

    getTypeIcon(type: NotificationType): string {
        return NotificationTypeLabels[type]?.icon || '📌';
    }

    getTypeColor(type: NotificationType): string {
        return NotificationTypeLabels[type]?.color || '#6B7280';
    }
}
