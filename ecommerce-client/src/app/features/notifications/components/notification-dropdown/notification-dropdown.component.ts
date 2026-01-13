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
    templateUrl: './notification-dropdown.component.html',
    styleUrls: ['./notification-dropdown.component.scss']
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
