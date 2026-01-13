using Microsoft.AspNetCore.SignalR;
using System.Security.Claims;

namespace ECommerce.API.Infrastructure;

/// <summary>
/// Custom user ID provider for SignalR that extracts user ID from JWT claims.
/// </summary>
public class CustomUserIdProvider : IUserIdProvider
{
    private readonly ILogger<CustomUserIdProvider> _logger;

    public CustomUserIdProvider(ILogger<CustomUserIdProvider> logger)
    {
        _logger = logger;
    }

    public string? GetUserId(HubConnectionContext connection)
    {
        // Try NameIdentifier first (standard claim)
        var userId = connection.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        
        // Fallback to "sub" claim (common in JWT)
        if (userId == null)
        {
            userId = connection.User?.FindFirst("sub")?.Value;
        }

        // Fallback to custom claim path
        if (userId == null)
        {
            userId = connection.User?.FindFirst("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")?.Value;
        }

        _logger.LogInformation("🔍 SignalR GetUserId - Found: {UserId}", userId ?? "NULL");
        
        return userId;
    }
}
