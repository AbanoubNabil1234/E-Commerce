import { Component, OnInit, OnDestroy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { NotificationsService } from '../../services/notifications.service';
import { Notification } from '../../models/notification.model';
import { NotificationType, NotificationTypeLabels } from '../../models/notification-type.enum';

type FilterTab = 'all' | 'unread' | 'important' | 'archived';

@Component({
    selector: 'app-notifications-list',
    standalone: true,
    imports: [CommonModule, RouterModule, TranslateModule],
    template: `
        <div class="notifications-page">
            <!-- Header -->
            <div class="page-header">
                <div class="header-content">
                    <h1 class="page-title">
                        <svg class="title-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                        </svg>
                        {{ 'NOTIFICATIONS.TITLE' | translate }}
                        @if (service.unreadCount() > 0) {
                            <span class="unread-badge">{{ service.unreadCount() }}</span>
                        }
                    </h1>
                    <p class="page-subtitle">{{ 'NOTIFICATIONS.SUBTITLE' | translate }}</p>
                </div>
                
                <div class="header-actions">
                    <button class="btn-secondary" (click)="markAllAsRead()" [disabled]="service.unreadCount() === 0">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        {{ 'NOTIFICATIONS.MARK_ALL_READ' | translate }}
                    </button>
                </div>
            </div>

            <!-- Filter Tabs -->
            <div class="filter-tabs">
                @for (tab of filterTabs; track tab.key) {
                    <button 
                        class="filter-tab"
                        [class.active]="activeTab() === tab.key"
                        (click)="setActiveTab(tab.key)">
                        {{ tab.label | translate }}
                        @if (tab.count !== undefined && tab.count > 0) {
                            <span class="tab-count">{{ tab.count }}</span>
                        }
                    </button>
                }
            </div>

            <!-- Notifications List -->
            <div class="notifications-list">
                @if (service.loading()) {
                    <div class="loading-state">
                        <div class="spinner"></div>
                        <p>{{ 'COMMON.LOADING' | translate }}</p>
                    </div>
                } @else if (filteredNotifications().length === 0) {
                    <div class="empty-state">
                        <svg class="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
                        </svg>
                        <h3>{{ 'NOTIFICATIONS.EMPTY' | translate }}</h3>
                        <p>{{ 'NOTIFICATIONS.EMPTY_DESC' | translate }}</p>
                    </div>
                } @else {
                    @for (notification of filteredNotifications(); track notification.id) {
                        <div class="notification-card" 
                             [class.unread]="!notification.isRead"
                             [class.expanded]="expandedId() === notification.id"
                             (click)="toggleExpand(notification)">
                            
                            <!-- Icon -->
                            <div class="notification-icon" [style.background]="getTypeColor(notification.type) + '20'">
                                <span [style.color]="getTypeColor(notification.type)">
                                    {{ getTypeIcon(notification.type) }}
                                </span>
                            </div>
                            
                            <!-- Content -->
                            <div class="notification-content">
                                <div class="notification-header">
                                    <h3 class="notification-title">{{ notification.title }}</h3>
                                    <div class="notification-meta">
                                        <span class="notification-badge" [style.background]="getTypeColor(notification.type)">
                                            {{ getTypeLabel(notification.type) }}
                                        </span>
                                        <span class="notification-time">
                                            {{ service.formatRelativeTime(notification.createdAt) }}
                                        </span>
                                    </div>
                                </div>
                                <p class="notification-message">{{ notification.message }}</p>
                                
                                <!-- Actions (shown when expanded) -->
                                @if (expandedId() === notification.id) {
                                    <div class="notification-actions" (click)="$event.stopPropagation()">
                                        @if (notification.actionUrl) {
                                            <a [routerLink]="notification.actionUrl" class="btn-primary">
                                                {{ 'NOTIFICATIONS.VIEW_DETAILS' | translate }}
                                            </a>
                                        }
                                        @if (!notification.isRead) {
                                            <button class="btn-secondary" (click)="markAsRead(notification)">
                                                {{ 'NOTIFICATIONS.MARK_READ' | translate }}
                                            </button>
                                        }
                                        <button class="btn-ghost" (click)="deleteNotification(notification)">
                                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                            </svg>
                                        </button>
                                    </div>
                                }
                            </div>
                            
                            <!-- Unread indicator -->
                            @if (!notification.isRead) {
                                <div class="unread-indicator"></div>
                            }
                        </div>
                    }
                }
            </div>

            <!-- Pagination -->
            @if (totalPages() > 1) {
                <div class="pagination">
                    <button 
                        class="page-btn"
                        [disabled]="currentPage() === 1"
                        (click)="goToPage(currentPage() - 1)">
                        {{ 'COMMON.PREVIOUS' | translate }}
                    </button>
                    
                    @for (page of pageNumbers(); track page) {
                        <button 
                            class="page-btn"
                            [class.active]="page === currentPage()"
                            (click)="goToPage(page)">
                            {{ page }}
                        </button>
                    }
                    
                    <button 
                        class="page-btn"
                        [disabled]="currentPage() === totalPages()"
                        (click)="goToPage(currentPage() + 1)">
                        {{ 'COMMON.NEXT' | translate }}
                    </button>
                </div>
            }
        </div>
    `,
    styles: [`
        .notifications-page {
            max-width: 900px;
            margin: 0 auto;
            padding: 24px;
        }

        .page-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 24px;
        }

        .page-title {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 24px;
            font-weight: 700;
            color: #1e293b;
            margin: 0;
        }

        .title-icon {
            width: 28px;
            height: 28px;
            color: #6366f1;
        }

        .unread-badge {
            background: #ef4444;
            color: white;
            font-size: 12px;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 20px;
        }

        .page-subtitle {
            color: #64748b;
            margin: 4px 0 0 40px;
        }

        .header-actions {
            display: flex;
            gap: 12px;
        }

        .btn-secondary {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 10px 16px;
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            font-weight: 500;
            color: #475569;
            cursor: pointer;
            transition: all 0.2s;
        }

        .btn-secondary:hover:not(:disabled) {
            background: #f8fafc;
            border-color: #cbd5e1;
        }

        .btn-secondary:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .filter-tabs {
            display: flex;
            gap: 8px;
            margin-bottom: 20px;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 8px;
        }

        .filter-tab {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 8px 16px;
            background: transparent;
            border: none;
            font-weight: 500;
            color: #64748b;
            cursor: pointer;
            border-radius: 8px;
            transition: all 0.2s;
        }

        .filter-tab:hover {
            background: #f1f5f9;
        }

        .filter-tab.active {
            background: #6366f1;
            color: white;
        }

        .tab-count {
            background: rgba(255,255,255,0.2);
            padding: 2px 8px;
            border-radius: 10px;
            font-size: 12px;
        }

        .filter-tab:not(.active) .tab-count {
            background: #e2e8f0;
        }

        .notifications-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .notification-card {
            display: flex;
            gap: 16px;
            padding: 16px;
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.2s;
            position: relative;
        }

        .notification-card:hover {
            border-color: #cbd5e1;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .notification-card.unread {
            background: linear-gradient(to right, #faf5ff, white);
            border-left: 3px solid #6366f1;
        }

        .notification-card.expanded {
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .notification-icon {
            flex-shrink: 0;
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
        }

        .notification-content {
            flex: 1;
            min-width: 0;
        }

        .notification-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 4px;
        }

        .notification-title {
            font-size: 15px;
            font-weight: 600;
            color: #1e293b;
            margin: 0;
        }

        .notification-meta {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-shrink: 0;
        }

        .notification-badge {
            font-size: 10px;
            font-weight: 600;
            color: white;
            padding: 3px 8px;
            border-radius: 4px;
            text-transform: uppercase;
        }

        .notification-time {
            font-size: 12px;
            color: #94a3b8;
            white-space: nowrap;
        }

        .notification-message {
            font-size: 14px;
            color: #64748b;
            margin: 0;
            line-height: 1.5;
        }

        .notification-actions {
            display: flex;
            gap: 8px;
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px solid #f1f5f9;
        }

        .btn-primary {
            padding: 8px 16px;
            background: #6366f1;
            color: white;
            border: none;
            border-radius: 8px;
            font-weight: 500;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.2s;
        }

        .btn-primary:hover {
            background: #4f46e5;
        }

        .btn-ghost {
            padding: 8px;
            background: transparent;
            border: none;
            color: #94a3b8;
            cursor: pointer;
            border-radius: 6px;
            transition: all 0.2s;
        }

        .btn-ghost:hover {
            background: #fee2e2;
            color: #ef4444;
        }

        .unread-indicator {
            position: absolute;
            top: 20px;
            right: 16px;
            width: 8px;
            height: 8px;
            background: #6366f1;
            border-radius: 50%;
        }

        .loading-state, .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 60px;
            text-align: center;
            color: #64748b;
        }

        .spinner {
            width: 32px;
            height: 32px;
            border: 3px solid #e2e8f0;
            border-top-color: #6366f1;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .empty-icon {
            width: 64px;
            height: 64px;
            color: #cbd5e1;
            margin-bottom: 16px;
        }

        .empty-state h3 {
            font-size: 18px;
            color: #1e293b;
            margin: 0 0 8px;
        }

        .pagination {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin-top: 24px;
        }

        .page-btn {
            padding: 8px 16px;
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            color: #475569;
            cursor: pointer;
            transition: all 0.2s;
        }

        .page-btn:hover:not(:disabled) {
            background: #f8fafc;
        }

        .page-btn.active {
            background: #6366f1;
            color: white;
            border-color: #6366f1;
        }

        .page-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        @media (max-width: 768px) {
            .notifications-page {
                padding: 16px;
            }

            .page-header {
                flex-direction: column;
                gap: 16px;
            }

            .filter-tabs {
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
            }

            .notification-card {
                flex-direction: column;
                gap: 12px;
            }

            .notification-icon {
                width: 40px;
                height: 40px;
            }

            .notification-header {
                flex-direction: column;
                gap: 8px;
            }
        }
    `]
})
export class NotificationsListComponent implements OnInit, OnDestroy {
    service = inject(NotificationsService);
    private translateService = inject(TranslateService);
    private destroy$ = new Subject<void>();

    activeTab = signal<FilterTab>('all');
    expandedId = signal<number | null>(null);
    currentPage = signal(1);
    totalCount = signal(0);
    pageSize = 10;

    filterTabs = [
        { key: 'all' as FilterTab, label: 'NOTIFICATIONS.ALL', count: undefined },
        { key: 'unread' as FilterTab, label: 'NOTIFICATIONS.UNREAD', count: 0 },
        { key: 'important' as FilterTab, label: 'NOTIFICATIONS.IMPORTANT', count: undefined },
        { key: 'archived' as FilterTab, label: 'NOTIFICATIONS.ARCHIVED', count: undefined }
    ];

    filteredNotifications = computed(() => {
        const all = this.service.notifications();
        const tab = this.activeTab();

        switch (tab) {
            case 'unread':
                return all.filter(n => !n.isRead);
            case 'important':
                return all.filter(n => n.type === NotificationType.Inventory || n.type === NotificationType.Alert);
            case 'archived':
                return all.filter(n => n.isRead);
            default:
                return all;
        }
    });

    totalPages = computed(() => Math.ceil(this.totalCount() / this.pageSize));

    pageNumbers = computed(() => {
        const total = this.totalPages();
        const current = this.currentPage();
        const pages: number[] = [];

        for (let i = Math.max(1, current - 2); i <= Math.min(total, current + 2); i++) {
            pages.push(i);
        }

        return pages;
    });

    ngOnInit(): void {
        this.loadNotifications();

        // Update unread count in tabs
        this.filterTabs[1].count = this.service.unreadCount();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    loadNotifications(): void {
        this.service.getNotifications(this.currentPage(), this.pageSize)
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
                this.totalCount.set(response.totalCount);
                this.filterTabs[1].count = response.unreadCount;
            });
    }

    setActiveTab(tab: FilterTab): void {
        this.activeTab.set(tab);
    }

    toggleExpand(notification: Notification): void {
        this.expandedId.set(this.expandedId() === notification.id ? null : notification.id);
    }

    markAsRead(notification: Notification): void {
        this.service.markAsRead(notification.id)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.filterTabs[1].count = this.service.unreadCount();
            });
    }

    markAllAsRead(): void {
        this.service.markAllAsRead()
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.filterTabs[1].count = 0;
            });
    }

    deleteNotification(notification: Notification): void {
        this.service.delete(notification.id)
            .pipe(takeUntil(this.destroy$))
            .subscribe();
    }

    goToPage(page: number): void {
        this.currentPage.set(page);
        this.loadNotifications();
    }

    getTypeIcon(type: NotificationType): string {
        return NotificationTypeLabels[type]?.icon || '📌';
    }

    getTypeLabel(type: NotificationType): string {
        const lang = this.translateService.currentLang === 'ar' ? 'ar' : 'en';
        return NotificationTypeLabels[type]?.[lang] || 'Notification';
    }

    getTypeColor(type: NotificationType): string {
        return NotificationTypeLabels[type]?.color || '#6B7280';
    }
}
