import { NotificationType } from './notification-type.enum';

export interface Notification {
    id: number;
    title: string;
    message: string;
    type: NotificationType;
    typeName: string;
    relatedEntityType?: string;
    relatedEntityId?: number;
    actionUrl?: string;
    isRead: boolean;
    createdAt: string;
    readAt?: string;
}

export interface NotificationListResponse {
    items: Notification[];
    totalCount: number;
    unreadCount: number;
    page: number;
    pageSize: number;
}

export interface CreateNotificationRequest {
    userId: string;
    titleEn: string;
    titleAr: string;
    messageEn: string;
    messageAr: string;
    type: NotificationType;
    relatedEntityType?: string;
    relatedEntityId?: number;
    actionUrl?: string;
}

export interface NotificationSettings {
    enableInApp: boolean;
    enableEmail: boolean;
    enableWhatsApp: boolean;
    enableSMS: boolean;
    enableOrderNotifications: boolean;
    enableShipmentNotifications: boolean;
    enableInventoryAlerts: boolean;
    enablePromotions: boolean;
}
