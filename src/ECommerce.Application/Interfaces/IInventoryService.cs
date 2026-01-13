// ==============================================
// IInventoryService.cs - Inventory Service Contract
// ==============================================

using ECommerce.Application.Features.Inventory.DTOs;

namespace ECommerce.Application.Interfaces;

/// <summary>
/// Service interface for inventory/stock management operations.
/// All operations create immutable StockMovement records for audit.
/// </summary>
public interface IInventoryService
{
    #region Query Operations

    /// <summary>
    /// Get stock level for a specific product at a specific warehouse.
    /// </summary>
    Task<ProductStockDto?> GetStockByProductAsync(
        int productId, 
        int warehouseId, 
        CancellationToken cancellationToken = default);

    /// <summary>
    /// Get all stock levels, optionally filtered by warehouse.
    /// </summary>
    Task<List<ProductStockDto>> GetAllStockAsync(
        int? warehouseId = null,
        bool? lowStockOnly = null,
        CancellationToken cancellationToken = default);

    /// <summary>
    /// Get stock summary across all warehouses for a product.
    /// </summary>
    Task<ProductStockSummaryDto?> GetStockSummaryAsync(
        int productId,
        CancellationToken cancellationToken = default);

    /// <summary>
    /// Get movement history for a product.
    /// </summary>
    Task<List<StockMovementDto>> GetMovementHistoryAsync(
        int productId,
        int? warehouseId = null,
        int pageNumber = 1,
        int pageSize = 20,
        CancellationToken cancellationToken = default);

    /// <summary>
    /// Get product details with stock breakdown per warehouse.
    /// Combines product info with inventory data for Product Details page.
    /// </summary>
    Task<ProductWithStockDetailsDto?> GetProductWithStockDetailsAsync(
        int productId,
        CancellationToken cancellationToken = default);

    #endregion

    #region Command Operations

    /// <summary>
    /// Initialize stock for a product at a warehouse location.
    /// </summary>
    Task<ProductStockDto> InitializeStockAsync(
        InitializeStockRequest request, 
        string userId,
        CancellationToken cancellationToken = default);

    /// <summary>
    /// Increase stock quantity (e.g., receiving goods).
    /// </summary>
    Task<ProductStockDto> IncreaseStockAsync(
        int productId,
        int warehouseId,
        decimal quantity,
        string reason,
        string? referenceType,
        int? referenceId,
        string userId,
        CancellationToken cancellationToken = default);

    /// <summary>
    /// Decrease stock quantity (e.g., manual removal, damaged goods).
    /// </summary>
    Task<ProductStockDto> DecreaseStockAsync(
        int productId,
        int warehouseId,
        decimal quantity,
        string reason,
        string? referenceType,
        int? referenceId,
        string userId,
        CancellationToken cancellationToken = default);

    /// <summary>
    /// Adjust stock to an absolute quantity.
    /// </summary>
    Task<ProductStockDto> AdjustStockAsync(
        AdjustStockRequest request,
        string userId,
        CancellationToken cancellationToken = default);

    /// <summary>
    /// Transfer stock between warehouse locations.
    /// </summary>
    Task<(ProductStockDto Source, ProductStockDto Destination)> TransferStockAsync(
        TransferStockRequest request,
        string userId,
        CancellationToken cancellationToken = default);

    /// <summary>
    /// Reserve stock for an order (reduces available, not on-hand).
    /// </summary>
    Task<ProductStockDto> ReserveStockAsync(
        ReserveStockRequest request,
        string userId,
        CancellationToken cancellationToken = default);

    /// <summary>
    /// Release previously reserved stock.
    /// </summary>
    Task<ProductStockDto> ReleaseStockAsync(
        ReleaseStockRequest request,
        string userId,
        CancellationToken cancellationToken = default);

    /// <summary>
    /// Commit reserved stock (convert reserved to actual decrease).
    /// Called when order is shipped.
    /// </summary>
    Task<ProductStockDto> CommitReservedStockAsync(
        int productId,
        int warehouseId,
        decimal quantity,
        int orderId,
        string userId,
        CancellationToken cancellationToken = default);

    #endregion

    #region Utility Operations

    /// <summary>
    /// Check if sufficient stock is available for a quantity.
    /// </summary>
    Task<bool> IsStockAvailableAsync(
        int productId,
        int warehouseId,
        decimal requiredQuantity,
        CancellationToken cancellationToken = default);

    /// <summary>
    /// Get products with low stock levels.
    /// </summary>
    Task<List<ProductStockDto>> GetLowStockProductsAsync(
        int? warehouseId = null,
        CancellationToken cancellationToken = default);

    #endregion
}
