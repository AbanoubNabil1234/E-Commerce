using ECommerce.Domain.Common;

namespace ECommerce.Domain.Entities.Notifications;

/// <summary>
/// User notification preferences.
/// </summary>
public class NotificationSettings : BaseEntity
{
    /// <summary>
    /// The user these settings belong to (AspNetUsers.Id).
    /// </summary>
    public string UserId { get; set; } = string.Empty;
    
    /// <summary>
    /// Enable in-app notifications.
    /// </summary>
    public bool EnableInApp { get; set; } = true;
    
    /// <summary>
    /// Enable email notifications.
    /// </summary>
    public bool EnableEmail { get; set; } = false;
    
    /// <summary>
    /// Enable WhatsApp notifications.
    /// </summary>
    public bool EnableWhatsApp { get; set; } = false;
    
    /// <summary>
    /// Enable SMS notifications.
    /// </summary>
    public bool EnableSMS { get; set; } = false;
    
    /// <summary>
    /// Enable order-related notifications.
    /// </summary>
    public bool EnableOrderNotifications { get; set; } = true;
    
    /// <summary>
    /// Enable shipment-related notifications.
    /// </summary>
    public bool EnableShipmentNotifications { get; set; } = true;
    
    /// <summary>
    /// Enable inventory alert notifications.
    /// </summary>
    public bool EnableInventoryAlerts { get; set; } = true;
    
    /// <summary>
    /// Enable promotional notifications.
    /// </summary>
    public bool EnablePromotions { get; set; } = false;
}
