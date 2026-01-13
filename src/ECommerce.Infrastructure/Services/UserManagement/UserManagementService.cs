// ==============================================
// User Management Service Implementation
// ==============================================

using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ECommerce.Application.DTOs.UserManagement;
using ECommerce.Application.Interfaces;
using ECommerce.Domain.Entities.Auth;
using ECommerce.Infrastructure.Persistence;

namespace ECommerce.Infrastructure.Services.UserManagement;

/// <summary>
/// Service for managing users using ASP.NET Core Identity.
/// </summary>
public class UserManagementService : IUserManagementService
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly RoleManager<ApplicationRole> _roleManager;
    private readonly ApplicationDbContext _context;

    public UserManagementService(
        UserManager<ApplicationUser> userManager,
        RoleManager<ApplicationRole> roleManager,
        ApplicationDbContext context)
    {
        _userManager = userManager;
        _roleManager = roleManager;
        _context = context;
    }

    public async Task<IList<UserListDto>> GetAllUsersAsync(int page = 1, int pageSize = 20, string? searchTerm = null)
    {
        var query = _userManager.Users.AsQueryable();

        if (!string.IsNullOrWhiteSpace(searchTerm))
        {
            var term = searchTerm.ToLower();
            query = query.Where(u => 
                u.Email!.ToLower().Contains(term) ||
                u.FirstName.ToLower().Contains(term) ||
                u.LastName.ToLower().Contains(term));
        }

        var users = await query
            .OrderByDescending(u => u.CreatedAt)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();

        var result = new List<UserListDto>();
        foreach (var user in users)
        {
            var roles = await _userManager.GetRolesAsync(user);
            result.Add(new UserListDto
            {
                Id = user.Id,
                Email = user.Email ?? string.Empty,
                FullName = user.FullName,
                ProfileImageUrl = user.ProfileImageUrl,
                IsActive = user.IsActive,
                CreatedAt = user.CreatedAt,
                LastLoginAt = user.LastLoginAt,
                Roles = roles
            });
        }

        return result;
    }

    public async Task<UserDto?> GetUserByIdAsync(string userId)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user == null) return null;

        return await MapToUserDto(user);
    }

    public async Task<UserDto?> GetUserByEmailAsync(string email)
    {
        var user = await _userManager.FindByEmailAsync(email);
        if (user == null) return null;

        return await MapToUserDto(user);
    }

    public async Task<UserDto> CreateUserAsync(CreateUserDto dto)
    {
        var existingUser = await _userManager.FindByEmailAsync(dto.Email);
        if (existingUser != null)
        {
            throw new InvalidOperationException($"User with email '{dto.Email}' already exists.");
        }

        var user = new ApplicationUser
        {
            UserName = dto.Email,
            Email = dto.Email,
            FirstName = dto.FirstName,
            LastName = dto.LastName,
            ProfileImageUrl = dto.ProfileImageUrl,
            IsActive = true,
            CreatedAt = DateTime.UtcNow
        };

        var result = await _userManager.CreateAsync(user, dto.Password);
        if (!result.Succeeded)
        {
            var errors = string.Join(", ", result.Errors.Select(e => e.Description));
            throw new InvalidOperationException($"Failed to create user: {errors}");
        }

        // Assign roles if provided
        if (dto.Roles.Any())
        {
            await _userManager.AddToRolesAsync(user, dto.Roles);
        }

        return await MapToUserDto(user);
    }

    public async Task<UserDto> UpdateUserAsync(string userId, UpdateUserDto dto)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user == null)
        {
            throw new InvalidOperationException($"User with ID '{userId}' not found.");
        }

        if (!string.IsNullOrWhiteSpace(dto.FirstName))
            user.FirstName = dto.FirstName;

        if (!string.IsNullOrWhiteSpace(dto.LastName))
            user.LastName = dto.LastName;

        if (!string.IsNullOrWhiteSpace(dto.Email))
        {
            user.Email = dto.Email;
            user.UserName = dto.Email;
        }

        if (dto.ProfileImageUrl != null)
            user.ProfileImageUrl = dto.ProfileImageUrl;

        if (dto.IsActive.HasValue)
            user.IsActive = dto.IsActive.Value;

        user.UpdatedAt = DateTime.UtcNow;

        var result = await _userManager.UpdateAsync(user);
        if (!result.Succeeded)
        {
            var errors = string.Join(", ", result.Errors.Select(e => e.Description));
            throw new InvalidOperationException($"Failed to update user: {errors}");
        }

        return await MapToUserDto(user);
    }

    public async Task<bool> DeleteUserAsync(string userId)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user == null) return false;

        var result = await _userManager.DeleteAsync(user);
        return result.Succeeded;
    }

    public async Task<UserDto> AssignRolesToUserAsync(string userId, AssignRolesToUserDto dto)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user == null)
        {
            throw new InvalidOperationException($"User with ID '{userId}' not found.");
        }

        // Remove existing roles
        var currentRoles = await _userManager.GetRolesAsync(user);
        await _userManager.RemoveFromRolesAsync(user, currentRoles);

        // Add new roles
        if (dto.Roles.Any())
        {
            await _userManager.AddToRolesAsync(user, dto.Roles);
        }

        return await MapToUserDto(user);
    }

    public async Task<bool> ResetUserPasswordAsync(string userId, ResetUserPasswordDto dto)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user == null) return false;

        var token = await _userManager.GeneratePasswordResetTokenAsync(user);
        var result = await _userManager.ResetPasswordAsync(user, token, dto.NewPassword);

        return result.Succeeded;
    }

    public async Task<IList<string>> GetUserRolesAsync(string userId)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user == null) return new List<string>();

        return await _userManager.GetRolesAsync(user);
    }

    public async Task<IList<string>> GetUserPermissionsAsync(string userId)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user == null) return new List<string>();

        var roles = await _userManager.GetRolesAsync(user);
        
        var permissions = await _context.Set<RolePermission>()
            .Include(rp => rp.Permission)
            .Include(rp => rp.Role)
            .Where(rp => roles.Contains(rp.Role.Name!))
            .Select(rp => rp.Permission.Name)
            .Distinct()
            .ToListAsync();

        return permissions;
    }

    public async Task<bool> ToggleUserStatusAsync(string userId)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user == null) return false;

        user.IsActive = !user.IsActive;
        user.UpdatedAt = DateTime.UtcNow;

        var result = await _userManager.UpdateAsync(user);
        return result.Succeeded;
    }

    private async Task<UserDto> MapToUserDto(ApplicationUser user)
    {
        var roles = await _userManager.GetRolesAsync(user);
        var permissions = await GetUserPermissionsAsync(user.Id);

        return new UserDto
        {
            Id = user.Id,
            Email = user.Email ?? string.Empty,
            FirstName = user.FirstName,
            LastName = user.LastName,
            ProfileImageUrl = user.ProfileImageUrl,
            IsActive = user.IsActive,
            EmailConfirmed = user.EmailConfirmed,
            CreatedAt = user.CreatedAt,
            LastLoginAt = user.LastLoginAt,
            Roles = roles,
            Permissions = permissions
        };
    }
}
