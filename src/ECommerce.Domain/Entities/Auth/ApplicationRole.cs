using Microsoft.AspNetCore.Identity;

namespace ECommerce.Domain.Entities.Auth;

/// <summary>
/// Application role extending ASP.NET Core Identity.
/// </summary>
public class ApplicationRole : IdentityRole
{
    public string? Description { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    // Navigation property for permissions
    public ICollection<RolePermission> RolePermissions { get; set; } = new List<RolePermission>();
}
