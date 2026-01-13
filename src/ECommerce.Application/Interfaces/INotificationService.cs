using ECommerce.Application.Features.Notifications.DTOs;
using ECommerce.Domain.Enums;

namespace ECommerce.Application.Interfaces;

/// <summary>
/// Service for managing notifications.
/// </summary>
public interface INotificationService
{
    /// <summary>
    /// Get paginated notifications for a user.
    /// </summary>
    Task<NotificationListResponse> GetUserNotificationsAsync(
        string userId, 
        string language = "en",
        int page = 1, 
        int pageSize = 20);
    
    /// <summary>
    /// Get unread notification count for a user.
    /// </summary>
    Task<int> GetUnreadCountAsync(string userId);
    
    /// <summary>
    /// Create a new notification.
    /// </summary>
    Task<NotificationDto> CreateAsync(CreateNotificationRequest request, string language = "en");
    
    /// <summary>
    /// Mark a notification as read.
    /// </summary>
    Task<bool> MarkAsReadAsync(int notificationId, string userId);
    
    /// <summary>
    /// Mark all notifications as read for a user.
    /// </summary>
    Task<int> MarkAllAsReadAsync(string userId);
    
    /// <summary>
    /// Delete a notification.
    /// </summary>
    Task<bool> DeleteAsync(int notificationId, string userId);
    
    /// <summary>
    /// Send notification when order status changes.
    /// </summary>
    Task NotifyOrderStatusChangedAsync(int orderId, string userId, OrderStatus newStatus);
    
    /// <summary>
    /// Send notification when shipment status changes.
    /// </summary>
    Task NotifyShipmentStatusChangedAsync(int shipmentId, string userId, ShipmentStatus newStatus);
    
    /// <summary>
    /// Send notification for low stock alert.
    /// </summary>
    Task NotifyLowStockAsync(int productId, string productName, int currentStock, int threshold);
    
    /// <summary>
    /// Send notification to a specific user.
    /// </summary>
    Task SendToUserAsync(string userId, NotificationDto notification);
}
