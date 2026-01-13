using ECommerce.Domain.Enums;

namespace ECommerce.Application.Features.Notifications.DTOs;

/// <summary>
/// Notification response DTO.
/// </summary>
public record NotificationDto
{
    public int Id { get; init; }
    public string Title { get; init; } = string.Empty;
    public string Message { get; init; } = string.Empty;
    public NotificationType Type { get; init; }
    public string TypeName { get; init; } = string.Empty;
    public string? RelatedEntityType { get; init; }
    public int? RelatedEntityId { get; init; }
    public string? ActionUrl { get; init; }
    public bool IsRead { get; init; }
    public DateTime CreatedAt { get; init; }
    public DateTime? ReadAt { get; init; }
}

/// <summary>
/// Request to create a notification.
/// </summary>
public record CreateNotificationRequest
{
    public string UserId { get; init; } = string.Empty;
    public string TitleEn { get; init; } = string.Empty;
    public string TitleAr { get; init; } = string.Empty;
    public string MessageEn { get; init; } = string.Empty;
    public string MessageAr { get; init; } = string.Empty;
    public NotificationType Type { get; init; } = NotificationType.System;
    public string? RelatedEntityType { get; init; }
    public int? RelatedEntityId { get; init; }
    public string? ActionUrl { get; init; }
}

/// <summary>
/// Notification settings DTO.
/// </summary>
public record NotificationSettingsDto
{
    public bool EnableInApp { get; init; } = true;
    public bool EnableEmail { get; init; }
    public bool EnableWhatsApp { get; init; }
    public bool EnableSMS { get; init; }
    public bool EnableOrderNotifications { get; init; } = true;
    public bool EnableShipmentNotifications { get; init; } = true;
    public bool EnableInventoryAlerts { get; init; } = true;
    public bool EnablePromotions { get; init; }
}

/// <summary>
/// Paginated notifications response.
/// </summary>
public record NotificationListResponse
{
    public List<NotificationDto> Items { get; init; } = new();
    public int TotalCount { get; init; }
    public int UnreadCount { get; init; }
    public int Page { get; init; }
    public int PageSize { get; init; }
}
