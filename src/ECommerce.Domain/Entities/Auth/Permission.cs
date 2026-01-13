namespace ECommerce.Domain.Entities.Auth;

/// <summary>
/// Represents a granular permission in the RBAC system.
/// Permissions follow the pattern: Module.Action (e.g., Products.Create)
/// </summary>
public class Permission
{
    public int Id { get; set; }
    
    /// <summary>
    /// Permission name in format "Module.Action" (e.g., "Products.Create")
    /// </summary>
    public string Name { get; set; } = string.Empty;
    
    /// <summary>
    /// Human-readable description of what this permission allows
    /// </summary>
    public string? Description { get; set; }
    
    /// <summary>
    /// Module this permission belongs to (e.g., "Products", "Orders")
    /// Used for grouping in UI
    /// </summary>
    public string Module { get; set; } = string.Empty;
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    // Navigation property
    public ICollection<RolePermission> RolePermissions { get; set; } = new List<RolePermission>();
}
