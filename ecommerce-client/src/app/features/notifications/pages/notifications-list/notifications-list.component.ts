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
    templateUrl: './notifications-list.component.html',
    styleUrls: ['./notifications-list.component.scss']
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
