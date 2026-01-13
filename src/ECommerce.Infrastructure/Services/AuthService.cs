using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using ECommerce.Application.DTOs.Auth;
using ECommerce.Application.Interfaces;
using ECommerce.Domain.Entities.Auth;
using ECommerce.Infrastructure.Persistence;

namespace ECommerce.Infrastructure.Services.Auth;

/// <summary>
/// Authentication service implementation.
/// Handles user registration, login, JWT generation, and permission retrieval.
/// </summary>
public class AuthService : IAuthService
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly SignInManager<ApplicationUser> _signInManager;
    private readonly IConfiguration _configuration;
    private readonly ApplicationDbContext _dbContext;

    public AuthService(
        UserManager<ApplicationUser> userManager,
        SignInManager<ApplicationUser> signInManager,
        IConfiguration configuration,
        ApplicationDbContext dbContext)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _configuration = configuration;
        _dbContext = dbContext;
    }

    public async Task<AuthResponseDto> RegisterAsync(RegisterDto dto, CancellationToken cancellationToken = default)
    {
        // Check if user exists
        var existingUser = await _userManager.FindByEmailAsync(dto.Email);
        if (existingUser != null)
        {
            throw new InvalidOperationException("A user with this email already exists.");
        }

        // Create new user
        var user = new ApplicationUser
        {
            UserName = dto.Email,
            Email = dto.Email,
            FirstName = dto.FirstName,
            LastName = dto.LastName,
            EmailConfirmed = true, // For demo purposes
            IsActive = true
        };

        var result = await _userManager.CreateAsync(user, dto.Password);
        if (!result.Succeeded)
        {
            var errors = string.Join(", ", result.Errors.Select(e => e.Description));
            throw new InvalidOperationException($"Failed to create user: {errors}");
        }

        // Assign default role
        await _userManager.AddToRoleAsync(user, "Customer");

        // Generate token
        var roles = await _userManager.GetRolesAsync(user);
        var permissions = await GetUserPermissionsAsync(user.Id, cancellationToken);
        var token = GenerateJwtToken(user, roles, permissions);

        return new AuthResponseDto(
            UserId: user.Id,
            Email: user.Email!,
            FullName: user.FullName,
            Roles: roles,
            Permissions: permissions,
            AccessToken: token.Token,
            ExpiresAt: token.ExpiresAt
        );
    }

    public async Task<AuthResponseDto> LoginAsync(LoginDto dto, CancellationToken cancellationToken = default)
    {
        // Find user
        var user = await _userManager.FindByEmailAsync(dto.Email);
        if (user == null)
        {
            throw new InvalidOperationException("Invalid email or password.");
        }

        if (!user.IsActive)
        {
            throw new InvalidOperationException("This account has been deactivated.");
        }

        // Verify password
        var result = await _signInManager.CheckPasswordSignInAsync(user, dto.Password, lockoutOnFailure: true);
        if (!result.Succeeded)
        {
            if (result.IsLockedOut)
            {
                throw new InvalidOperationException("Account is locked. Please try again later.");
            }
            throw new InvalidOperationException("Invalid email or password.");
        }

        // Update last login
        user.LastLoginAt = DateTime.UtcNow;
        await _userManager.UpdateAsync(user);

        // Generate token
        var roles = await _userManager.GetRolesAsync(user);
        var permissions = await GetUserPermissionsAsync(user.Id, cancellationToken);
        var token = GenerateJwtToken(user, roles, permissions);

        return new AuthResponseDto(
            UserId: user.Id,
            Email: user.Email!,
            FullName: user.FullName,
            Roles: roles,
            Permissions: permissions,
            AccessToken: token.Token,
            ExpiresAt: token.ExpiresAt
        );
    }

    public async Task<UserDto> GetCurrentUserAsync(string userId, CancellationToken cancellationToken = default)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user == null)
        {
            throw new InvalidOperationException("User not found.");
        }

        var roles = await _userManager.GetRolesAsync(user);
        var permissions = await GetUserPermissionsAsync(userId, cancellationToken);

        return new UserDto(
            Id: user.Id,
            Email: user.Email!,
            FirstName: user.FirstName,
            LastName: user.LastName,
            FullName: user.FullName,
            ProfileImageUrl: user.ProfileImageUrl,
            Roles: roles,
            Permissions: permissions,
            CreatedAt: user.CreatedAt,
            LastLoginAt: user.LastLoginAt
        );
    }

    public async Task<IList<string>> GetUserPermissionsAsync(string userId, CancellationToken cancellationToken = default)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user == null)
        {
            return new List<string>();
        }

        var roles = await _userManager.GetRolesAsync(user);
        if (!roles.Any())
        {
            return new List<string>();
        }

        // Get permissions for all user's roles
        var permissions = await _dbContext.Set<RolePermission>()
            .Include(rp => rp.Role)
            .Include(rp => rp.Permission)
            .Where(rp => roles.Contains(rp.Role.Name!))
            .Select(rp => rp.Permission.Name)
            .Distinct()
            .ToListAsync(cancellationToken);

        return permissions;
    }

    #region Private Methods

    private (string Token, DateTime ExpiresAt) GenerateJwtToken(
        ApplicationUser user,
        IList<string> roles,
        IList<string> permissions)
    {
        var jwtSettings = _configuration.GetSection("JwtSettings");
        var secret = jwtSettings["Secret"] ?? throw new InvalidOperationException("JWT Secret not configured.");
        var issuer = jwtSettings["Issuer"] ?? "ECommerce.API";
        var audience = jwtSettings["Audience"] ?? "ECommerce.Client";
        var expirationMinutes = int.Parse(jwtSettings["AccessTokenExpirationMinutes"] ?? "60");

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secret));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        var expiresAt = DateTime.UtcNow.AddMinutes(expirationMinutes);

        // Build claims
        var claims = new List<Claim>
        {
            new(JwtRegisteredClaimNames.Sub, user.Id),
            new(JwtRegisteredClaimNames.Email, user.Email!),
            new(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new(ClaimTypes.NameIdentifier, user.Id),
            new(ClaimTypes.Name, user.FullName),
            new(ClaimTypes.Email, user.Email!)
        };

        // Add role claims
        foreach (var role in roles)
        {
            claims.Add(new Claim(ClaimTypes.Role, role));
        }

        // Add permission claims
        foreach (var permission in permissions)
        {
            claims.Add(new Claim("permission", permission));
        }

        var token = new JwtSecurityToken(
            issuer: issuer,
            audience: audience,
            claims: claims,
            expires: expiresAt,
            signingCredentials: credentials
        );

        return (new JwtSecurityTokenHandler().WriteToken(token), expiresAt);
    }

    #endregion
}
