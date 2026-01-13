

using ECommerce.Domain.Common;
using ECommerce.Domain.Enums;

namespace ECommerce.Domain.Entities.Notifications;

/// <summary>
/// User notification entity with bilingual support.
/// </summary>
public class Notification : BaseEntity
{
    /// <summary>
    /// The user this notification is for (AspNetUsers.Id).
    /// </summary>
    public string UserId { get; set; } = string.Empty;
    
    /// <summary>
    /// English title.
    /// </summary>
    public string TitleEn { get; set; } = string.Empty;
    
    /// <summary>
    /// Arabic title.
    /// </summary>
    public string TitleAr { get; set; } = string.Empty;
    
    /// <summary>
    /// English message body.
    /// </summary>
    public string MessageEn { get; set; } = string.Empty;
    
    /// <summary>
    /// Arabic message body.
    /// </summary>
    public string MessageAr { get; set; } = string.Empty;
    
    /// <summary>
    /// Notification category.
    /// </summary>
    public NotificationType Type { get; set; } = NotificationType.System;
    
    /// <summary>
    /// Related entity type (e.g., "Order", "Shipment").
    /// </summary>
    public string? RelatedEntityType { get; set; }
    
    /// <summary>
    /// Related entity ID for navigation.
    /// </summary>
    public int? RelatedEntityId { get; set; }
    
    /// <summary>
    /// URL to navigate when clicking the notification.
    /// </summary>
    public string? ActionUrl { get; set; }
    
    /// <summary>
    /// Whether the notification has been read.
    /// </summary>
    public bool IsRead { get; set; } = false;
    
    /// <summary>
    /// When the notification was read.
    /// </summary>
    public DateTime? ReadAt { get; set; }
}
