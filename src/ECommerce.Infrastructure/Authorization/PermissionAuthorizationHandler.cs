using Microsoft.AspNetCore.Authorization;

namespace ECommerce.Infrastructure.Authorization;

/// <summary>
/// Authorization requirement for permission-based access control.
/// Each permission gets its own policy with this requirement.
/// </summary>
public class PermissionRequirement : IAuthorizationRequirement
{
    /// <summary>
    /// The required permission name (e.g., "Products.Create")
    /// </summary>
    public string Permission { get; }

    public PermissionRequirement(string permission)
    {
        Permission = permission;
    }
}

/// <summary>
/// Authorization handler that checks if the user has the required permission claim.
/// Permissions are included in the JWT token during authentication.
/// </summary>
public class PermissionAuthorizationHandler : AuthorizationHandler<PermissionRequirement>
{
    protected override Task HandleRequirementAsync(
        AuthorizationHandlerContext context,
        PermissionRequirement requirement)
    {
        // Get all permission claims from the user
        var permissions = context.User.Claims
            .Where(c => c.Type == "permission")
            .Select(c => c.Value)
            .ToHashSet();

        // Check if user has the required permission
        if (permissions.Contains(requirement.Permission))
        {
            context.Succeed(requirement);
        }

        return Task.CompletedTask;
    }
}
