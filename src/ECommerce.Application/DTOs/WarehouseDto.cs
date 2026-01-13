// ==============================================
// WarehouseDto.cs - Warehouse Data Transfer Objects
// ==============================================

namespace ECommerce.Application.DTOs;

/// <summary>
/// Full warehouse details for management views.
/// </summary>
public record WarehouseDto(
    int Id,
    string Name,
    string Code,
    string Address,
    string City,
    string? State,
    string Country,
    string? PostalCode,
    string? Phone,
    string? Email,
    bool IsActive,
    bool IsDefault,
    DateTime CreatedAt
);

/// <summary>
/// Simplified warehouse for dropdowns and lists.
/// </summary>
public record WarehouseListDto(
    int Id,
    string Name,
    string Code,
    string Location, // Composite of City, Country
    bool IsActive,
    bool IsDefault
);

/// <summary>
/// Request to create a new warehouse.
/// </summary>
public record CreateWarehouseRequest(
    string Name,
    string Code,
    string Address,
    string City,
    string? State,
    string Country,
    string? PostalCode,
    string? Phone,
    string? Email,
    bool IsDefault = false
);

/// <summary>
/// Request to update an existing warehouse.
/// </summary>
public record UpdateWarehouseRequest(
    string Name,
    string Code,
    string Address,
    string City,
    string? State,
    string Country,
    string? PostalCode,
    string? Phone,
    string? Email,
    bool IsDefault
);
