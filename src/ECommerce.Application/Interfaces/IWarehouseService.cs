// ==============================================
// IWarehouseService.cs - Warehouse Service Interface
// ==============================================

using ECommerce.Application.DTOs;

namespace ECommerce.Application.Interfaces;

/// <summary>
/// Service for warehouse management operations.
/// </summary>
public interface IWarehouseService
{
    #region Query Operations
    
    /// <summary>
    /// Get all warehouses (active and inactive), sorted by IsDefault DESC, Name ASC.
    /// </summary>
    Task<List<WarehouseListDto>> GetAllAsync(CancellationToken cancellationToken = default);
    
    /// <summary>
    /// Get warehouse by ID with full details.
    /// </summary>
    Task<WarehouseDto?> GetByIdAsync(int id, CancellationToken cancellationToken = default);
    
    /// <summary>
    /// Get only active warehouses (for dropdowns).
    /// </summary>
    Task<List<WarehouseListDto>> GetActiveAsync(CancellationToken cancellationToken = default);
    
    /// <summary>
    /// Get the default warehouse.
    /// </summary>
    Task<WarehouseDto?> GetDefaultAsync(CancellationToken cancellationToken = default);
    
    #endregion
    
    #region Command Operations
    
    /// <summary>
    /// Create a new warehouse.
    /// - Code must be unique
    /// - If IsDefault = true, all other warehouses are set to IsDefault = false
    /// </summary>
    Task<WarehouseDto> CreateWarehouseAsync(
        CreateWarehouseRequest request,
        string userId,
        CancellationToken cancellationToken = default);
    
    /// <summary>
    /// Update an existing warehouse.
    /// - Code uniqueness must be preserved
    /// - Cannot unset IsDefault directly (must set another warehouse as default first)
    /// </summary>
    Task<WarehouseDto> UpdateWarehouseAsync(
        int id,
        UpdateWarehouseRequest request,
        string userId,
        CancellationToken cancellationToken = default);
    
    /// <summary>
    /// Activate a deactivated warehouse.
    /// - Safe operation with no inventory side-effects
    /// </summary>
    Task<WarehouseDto> ActivateWarehouseAsync(
        int id,
        string userId,
        CancellationToken cancellationToken = default);
    
    /// <summary>
    /// Deactivate a warehouse (soft delete).
    /// - Cannot deactivate default warehouse
    /// - Cannot deactivate warehouse with stock (QuantityOnHand > 0 OR QuantityReserved > 0)
    /// </summary>
    Task<WarehouseDto> DeactivateWarehouseAsync(
        int id,
        string userId,
        CancellationToken cancellationToken = default);
    
    /// <summary>
    /// Set a warehouse as the default.
    /// - Automatically unsets the previous default
    /// </summary>
    Task<WarehouseDto> SetDefaultWarehouseAsync(
        int id,
        string userId,
        CancellationToken cancellationToken = default);
    
    #endregion
}
