using ECommerce.Application.Features.Notifications.DTOs;
using ECommerce.Application.Interfaces;
using ECommerce.Domain.Entities.Notifications;
using ECommerce.Domain.Enums;
using ECommerce.Infrastructure.Persistence;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace ECommerce.Infrastructure.Services.Notifications;

/// <summary>
/// Notification service implementation with SignalR integration.
/// </summary>
public class NotificationService : INotificationService
{
    private readonly ApplicationDbContext _context;
    private readonly IHubContext<NotificationHub> _hubContext;
    private readonly ILogger<NotificationService> _logger;

    public NotificationService(
        ApplicationDbContext context,
        IHubContext<NotificationHub> hubContext,
        ILogger<NotificationService> logger)
    {
        _context = context;
        _hubContext = hubContext;
        _logger = logger;
    }

    public async Task<NotificationListResponse> GetUserNotificationsAsync(
        string userId,
        string language = "en",
        int page = 1,
        int pageSize = 20)
    {
        var query = _context.Set<Notification>()
            .Where(n => n.UserId == userId)
            .OrderByDescending(n => n.CreatedAt);

        var totalCount = await query.CountAsync();
        var unreadCount = await query.CountAsync(n => !n.IsRead);

        var items = await query
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .Select(n => MapToDto(n, language))
            .ToListAsync();

        return new NotificationListResponse
        {
            Items = items,
            TotalCount = totalCount,
            UnreadCount = unreadCount,
            Page = page,
            PageSize = pageSize
        };
    }

    public async Task<int> GetUnreadCountAsync(string userId)
    {
        return await _context.Set<Notification>()
            .CountAsync(n => n.UserId == userId && !n.IsRead);
    }

    public async Task<NotificationDto> CreateAsync(CreateNotificationRequest request, string language = "en")
    {
        var notification = new Notification
        {
            UserId = request.UserId,
            TitleEn = request.TitleEn,
            TitleAr = request.TitleAr,
            MessageEn = request.MessageEn,
            MessageAr = request.MessageAr,
            Type = request.Type,
            RelatedEntityType = request.RelatedEntityType,
            RelatedEntityId = request.RelatedEntityId,
            ActionUrl = request.ActionUrl,
            IsRead = false,
            CreatedAt = DateTime.UtcNow
        };

        _context.Set<Notification>().Add(notification);
        await _context.SaveChangesAsync();

        var dto = MapToDto(notification, language);
        
        // Send real-time notification via SignalR
        await SendToUserAsync(request.UserId, dto);
        
        _logger.LogInformation("Created notification {Id} for user {UserId}", notification.Id, request.UserId);
        
        return dto;
    }

    /// <summary>
    /// Send notification to a specific user via SignalR.
    /// </summary>
    public async Task SendToUserAsync(string userId, NotificationDto notification)
    {
        try
        {
            await _hubContext.Clients.User(userId).SendAsync("ReceiveNotification", notification);
            _logger.LogInformation("✅ Sent real-time notification {Id} to user {UserId}", notification.Id, userId);
        }
        catch (Exception ex)
        {
            _logger.LogWarning(ex, "Failed to send real-time notification to user {UserId}", userId);
        }
    }

    public async Task<bool> MarkAsReadAsync(int notificationId, string userId)
    {
        var notification = await _context.Set<Notification>()
            .FirstOrDefaultAsync(n => n.Id == notificationId && n.UserId == userId);

        if (notification == null)
            return false;

        notification.IsRead = true;
        notification.ReadAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();

        return true;
    }

    public async Task<int> MarkAllAsReadAsync(string userId)
    {
        var unreadNotifications = await _context.Set<Notification>()
            .Where(n => n.UserId == userId && !n.IsRead)
            .ToListAsync();

        foreach (var notification in unreadNotifications)
        {
            notification.IsRead = true;
            notification.ReadAt = DateTime.UtcNow;
        }

        await _context.SaveChangesAsync();
        return unreadNotifications.Count;
    }

    public async Task<bool> DeleteAsync(int notificationId, string userId)
    {
        var notification = await _context.Set<Notification>()
            .FirstOrDefaultAsync(n => n.Id == notificationId && n.UserId == userId);

        if (notification == null)
            return false;

        _context.Set<Notification>().Remove(notification);
        await _context.SaveChangesAsync();

        return true;
    }

    public async Task NotifyOrderStatusChangedAsync(int orderId, string userId, OrderStatus newStatus)
    {
        var (titleEn, titleAr) = GetOrderStatusTitles(newStatus);
        var (messageEn, messageAr) = GetOrderStatusMessages(orderId, newStatus);

        var request = new CreateNotificationRequest
        {
            UserId = userId,
            TitleEn = titleEn,
            TitleAr = titleAr,
            MessageEn = messageEn,
            MessageAr = messageAr,
            Type = NotificationType.Order,
            RelatedEntityType = "Order",
            RelatedEntityId = orderId,
            ActionUrl = $"/orders/{orderId}"
        };

        await CreateAsync(request);
    }

    public async Task NotifyShipmentStatusChangedAsync(int shipmentId, string userId, ShipmentStatus newStatus)
    {
        var (titleEn, titleAr) = GetShipmentStatusTitles(newStatus);
        var (messageEn, messageAr) = GetShipmentStatusMessages(shipmentId, newStatus);

        var request = new CreateNotificationRequest
        {
            UserId = userId,
            TitleEn = titleEn,
            TitleAr = titleAr,
            MessageEn = messageEn,
            MessageAr = messageAr,
            Type = NotificationType.Shipment,
            RelatedEntityType = "Shipment",
            RelatedEntityId = shipmentId,
            ActionUrl = $"/shipments/{shipmentId}"
        };

        await CreateAsync(request);
    }

    public async Task NotifyLowStockAsync(int productId, string productName, int currentStock, int threshold)
    {
        // Get admin role IDs
        var adminRoleIds = await _context.Roles
            .Where(r => r.Name == "Admin" || r.Name == "Inventory")
            .Select(r => r.Id)
            .ToListAsync();

        // Get users with admin/inventory roles via UserRoles table
        var adminUsers = await _context.UserRoles
            .Where(ur => adminRoleIds.Contains(ur.RoleId))
            .Select(ur => ur.UserId)
            .Distinct()
            .ToListAsync();

        foreach (var userId in adminUsers)
        {
            var request = new CreateNotificationRequest
            {
                UserId = userId,
                TitleEn = "Low Stock Alert",
                TitleAr = "تنبيه نقص المخزون",
                MessageEn = $"Product '{productName}' has only {currentStock} units left (threshold: {threshold})",
                MessageAr = $"المنتج '{productName}' متبقي منه {currentStock} وحدة فقط (الحد الأدنى: {threshold})",
                Type = NotificationType.Inventory,
                RelatedEntityType = "Product",
                RelatedEntityId = productId,
                ActionUrl = $"/inventory/products/{productId}"
            };

            await CreateAsync(request);
        }
    }


    private static NotificationDto MapToDto(Notification n, string language)
    {
        return new NotificationDto
        {
            Id = n.Id,
            Title = language == "ar" ? n.TitleAr : n.TitleEn,
            Message = language == "ar" ? n.MessageAr : n.MessageEn,
            Type = n.Type,
            TypeName = n.Type.ToString(),
            RelatedEntityType = n.RelatedEntityType,
            RelatedEntityId = n.RelatedEntityId,
            ActionUrl = n.ActionUrl,
            IsRead = n.IsRead,
            CreatedAt = n.CreatedAt,
            ReadAt = n.ReadAt
        };
    }

    private static (string En, string Ar) GetOrderStatusTitles(OrderStatus status) => status switch
    {
        OrderStatus.Confirmed => ("Order Confirmed", "تم تأكيد الطلب"),
        OrderStatus.Processing => ("Order Processing", "جاري تجهيز الطلب"),
        OrderStatus.Shipped => ("Order Shipped", "تم شحن الطلب"),
        OrderStatus.Delivered => ("Order Delivered", "تم توصيل الطلب"),
        OrderStatus.Cancelled => ("Order Cancelled", "تم إلغاء الطلب"),
        _ => ("Order Update", "تحديث الطلب")
    };

    private static (string En, string Ar) GetOrderStatusMessages(int orderId, OrderStatus status) => status switch
    {
        OrderStatus.Confirmed => ($"Your order #{orderId} has been confirmed.", $"تم تأكيد طلبك #{orderId}."),
        OrderStatus.Processing => ($"Your order #{orderId} is being prepared.", $"جاري تجهيز طلبك #{orderId}."),
        OrderStatus.Shipped => ($"Your order #{orderId} has been shipped.", $"تم شحن طلبك #{orderId}."),
        OrderStatus.Delivered => ($"Your order #{orderId} has been delivered.", $"تم توصيل طلبك #{orderId}."),
        OrderStatus.Cancelled => ($"Your order #{orderId} has been cancelled.", $"تم إلغاء طلبك #{orderId}."),
        _ => ($"Your order #{orderId} status has been updated.", $"تم تحديث حالة طلبك #{orderId}.")
    };

    private static (string En, string Ar) GetShipmentStatusTitles(ShipmentStatus status) => status switch
    {
        ShipmentStatus.Assigned => ("Courier Assigned", "تم تعيين المندوب"),
        ShipmentStatus.PickedUp => ("Package Picked Up", "تم استلام الشحنة"),
        ShipmentStatus.InTransit => ("In Transit", "الشحنة في الطريق"),
        ShipmentStatus.OutForDelivery => ("Out for Delivery", "خارج للتوصيل"),
        ShipmentStatus.Delivered => ("Delivered", "تم التوصيل"),
        _ => ("Shipment Update", "تحديث الشحنة")
    };

    private static (string En, string Ar) GetShipmentStatusMessages(int shipmentId, ShipmentStatus status) => status switch
    {
        ShipmentStatus.Assigned => ($"A courier has been assigned to shipment #{shipmentId}.", $"تم تعيين مندوب للشحنة #{shipmentId}."),
        ShipmentStatus.PickedUp => ($"Your package #{shipmentId} has been picked up.", $"تم استلام شحنتك #{shipmentId}."),
        ShipmentStatus.InTransit => ($"Your shipment #{shipmentId} is on its way.", $"شحنتك #{shipmentId} في الطريق."),
        ShipmentStatus.OutForDelivery => ($"Your shipment #{shipmentId} is out for delivery.", $"شحنتك #{shipmentId} خارج للتوصيل."),
        ShipmentStatus.Delivered => ($"Your shipment #{shipmentId} has been delivered.", $"تم توصيل شحنتك #{shipmentId}."),
        _ => ($"Shipment #{shipmentId} status updated.", $"تم تحديث حالة الشحنة #{shipmentId}.")
    };
}

/// <summary>
/// SignalR hub for real-time notifications.
/// </summary>
public class NotificationHub : Hub
{
    private readonly ILogger<NotificationHub> _logger;

    public NotificationHub(ILogger<NotificationHub> logger)
    {
        _logger = logger;
    }

    public override async Task OnConnectedAsync()
    {
        var userId = Context.UserIdentifier;
        _logger.LogInformation("User {UserId} connected to NotificationHub", userId);
        await base.OnConnectedAsync();
    }

    public override async Task OnDisconnectedAsync(Exception? exception)
    {
        var userId = Context.UserIdentifier;
        _logger.LogInformation("User {UserId} disconnected from NotificationHub", userId);
        await base.OnDisconnectedAsync(exception);
    }
}
