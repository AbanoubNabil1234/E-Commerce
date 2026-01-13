namespace ECommerce.Domain.Entities.Auth;

/// <summary>
/// Junction table mapping Roles to Permissions.
/// Enables many-to-many relationship between ApplicationRole and Permission.
/// </summary>
public class RolePermission
{
    /// <summary>
    /// Foreign key to AspNetRoles (ApplicationRole.Id)
    /// </summary>
    public string RoleId { get; set; } = string.Empty;
    
    /// <summary>
    /// Foreign key to Permissions table
    /// </summary>
    public int PermissionId { get; set; }
    
    // Navigation properties
    public ApplicationRole Role { get; set; } = null!;
    public Permission Permission { get; set; } = null!;
}
