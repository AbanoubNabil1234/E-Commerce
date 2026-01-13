using Microsoft.AspNetCore.Identity;

namespace ECommerce.Domain.Entities.Auth;

/// <summary>
/// Application user extending ASP.NET Core Identity.
/// </summary>
public class ApplicationUser : IdentityUser
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string? ProfileImageUrl { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }
    public DateTime? LastLoginAt { get; set; }
    
    // Full name computed property
    public string FullName => $"{FirstName} {LastName}".Trim();
}
