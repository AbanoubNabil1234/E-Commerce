using ECommerce.Application.Features.Notifications.DTOs;
using ECommerce.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace ECommerce.API.Controllers;

/// <summary>
/// API controller for managing notifications.
/// </summary>
[ApiController]
[Route("api/[controller]")]
[Authorize]
public class NotificationsController : ControllerBase
{
    private readonly INotificationService _notificationService;
    private readonly ILogger<NotificationsController> _logger;

    public NotificationsController(
        INotificationService notificationService,
        ILogger<NotificationsController> logger)
    {
        _notificationService = notificationService;
        _logger = logger;
    }

    private string CurrentUserId => User.FindFirstValue(ClaimTypes.NameIdentifier) ?? string.Empty;
    private string CurrentLanguage => Request.Headers["Accept-Language"].FirstOrDefault()?.Split(',').FirstOrDefault()?.Trim() ?? "en";

    /// <summary>
    /// Get paginated notifications for the current user.
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<NotificationListResponse>> GetNotifications(
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 20)
    {
        var result = await _notificationService.GetUserNotificationsAsync(
            CurrentUserId, CurrentLanguage, page, pageSize);
        return Ok(result);
    }

    /// <summary>
    /// Get unread notifications count.
    /// </summary>
    [HttpGet("unread-count")]
    public async Task<ActionResult<int>> GetUnreadCount()
    {
        var count = await _notificationService.GetUnreadCountAsync(CurrentUserId);
        return Ok(new { count });
    }

    /// <summary>
    /// Create a notification (Admin only).
    /// </summary>
    [HttpPost]
    [Authorize(Roles = "Admin,Logistics")]
    public async Task<ActionResult<NotificationDto>> Create([FromBody] CreateNotificationRequest request)
    {
        var notification = await _notificationService.CreateAsync(request, CurrentLanguage);
        return CreatedAtAction(nameof(GetNotifications), new { id = notification.Id }, notification);
    }

    /// <summary>
    /// Mark a notification as read.
    /// </summary>
    [HttpPatch("{id:int}/read")]
    public async Task<IActionResult> MarkAsRead(int id)
    {
        var success = await _notificationService.MarkAsReadAsync(id, CurrentUserId);
        if (!success)
            return NotFound(new { message = "Notification not found" });
        return NoContent();
    }

    /// <summary>
    /// Mark all notifications as read.
    /// </summary>
    [HttpPatch("read-all")]
    public async Task<ActionResult> MarkAllAsRead()
    {
        var count = await _notificationService.MarkAllAsReadAsync(CurrentUserId);
        return Ok(new { markedAsRead = count });
    }

    /// <summary>
    /// Delete a notification.
    /// </summary>
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var success = await _notificationService.DeleteAsync(id, CurrentUserId);
        if (!success)
            return NotFound(new { message = "Notification not found" });
        return NoContent();
    }
}
