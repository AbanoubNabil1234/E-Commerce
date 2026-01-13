export enum NotificationType {
    Order = 0,
    Shipment = 1,
    Inventory = 2,
    System = 3,
    Delivery = 4,
    Alert = 5,
    Promotion = 6
}

export const NotificationTypeLabels: Record<NotificationType, { en: string; ar: string; icon: string; color: string }> = {
    [NotificationType.Order]: { en: 'Order', ar: 'طلب', icon: '📦', color: '#3B82F6' },
    [NotificationType.Shipment]: { en: 'Shipment', ar: 'شحنة', icon: '🚚', color: '#8B5CF6' },
    [NotificationType.Inventory]: { en: 'Inventory', ar: 'مخزون', icon: '📊', color: '#EF4444' },
    [NotificationType.System]: { en: 'System', ar: 'نظام', icon: '⚙️', color: '#6B7280' },
    [NotificationType.Delivery]: { en: 'Delivery', ar: 'توصيل', icon: '✅', color: '#22C55E' },
    [NotificationType.Alert]: { en: 'Alert', ar: 'تنبيه', icon: '⚠️', color: '#F97316' },
    [NotificationType.Promotion]: { en: 'Promotion', ar: 'عرض', icon: '🎉', color: '#EC4899' }
};
