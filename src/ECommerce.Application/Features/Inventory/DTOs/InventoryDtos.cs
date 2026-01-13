// ==============================================
// InventoryDtos.cs - Inventory Data Transfer Objects
// ==============================================

using ECommerce.Domain.Enums;

namespace ECommerce.Application.Features.Inventory.DTOs;

#region Query DTOs

/// <summary>
/// Stock level information for a product at a location.
/// </summary>
public record ProductStockDto(
    int Id,
    int ProductId,
    string ProductName,
    string ProductSKU,
    int WarehouseId,
    string WarehouseName,
    decimal QuantityOnHand,
    decimal QuantityReserved,
    decimal QuantityAvailable,
    int? ReorderLevel,
    bool IsLowStock,
    DateTime? UpdatedAt
);

/// <summary>
/// Stock movement history record.
/// </summary>
public record StockMovementDto(
    int Id,
    int ProductId,
    string ProductName,
    int WarehouseId,
    string WarehouseName,
    MovementType MovementType,
    decimal Quantity,
    string? ReferenceType,
    int? ReferenceId,
    string? Reason,
    string PerformedBy,
    string PerformedByName,
    DateTime CreatedAt
);

/// <summary>
/// Summary of stock across all warehouses for a product.
/// </summary>
public record ProductStockSummaryDto(
    int ProductId,
    string ProductName,
    string ProductSKU,
    decimal TotalQuantityOnHand,
    decimal TotalQuantityReserved,
    decimal TotalQuantityAvailable,
    int WarehouseCount,
    bool IsLowStock
);

/// <summary>
/// Stock breakdown for a single warehouse.
/// </summary>
public record WarehouseStockBreakdownDto(
    int WarehouseId,
    string WarehouseName,
    string WarehouseCode,
    decimal QuantityOnHand,
    decimal QuantityReserved,
    decimal QuantityAvailable,
    int? ReorderLevel,
    bool IsLowStock
);

/// <summary>
/// Complete product details with stock information across all warehouses.
/// Used for Product Details page to show stock per warehouse.
/// </summary>
public record ProductWithStockDetailsDto(
    int ProductId,
    string ProductName,
    string ProductSKU,
    string? BrandName,
    string? CategoryName,
    decimal UnitPrice,
    string? PrimaryImageUrl,
    bool IsActive,
    // Stock Summary
    decimal TotalQuantityOnHand,
    decimal TotalQuantityReserved,
    decimal TotalQuantityAvailable,
    bool IsLowStock,
    // Per-Warehouse Breakdown
    List<WarehouseStockBreakdownDto> WarehouseBreakdown
);

#endregion

#region Command DTOs

/// <summary>
/// Request to initialize stock for a product.
/// </summary>
public record InitializeStockRequest(
    int ProductId,
    int WarehouseId,
    decimal InitialQuantity,
    int? ReorderLevel,
    string? Notes
);

/// <summary>
/// Request to adjust stock quantity.
/// </summary>
public record AdjustStockRequest(
    int ProductId,
    int WarehouseId,
    decimal Quantity,
    AdjustmentType AdjustmentType,
    string Reason,
    string? Notes
);

/// <summary>
/// Request to transfer stock between locations.
/// </summary>
public record TransferStockRequest(
    int ProductId,
    int SourceWarehouseId,
    int DestinationWarehouseId,
    decimal Quantity,
    string? Reason,
    string? Notes
);

/// <summary>
/// Request to reserve stock for an order.
/// </summary>
public record ReserveStockRequest(
    int ProductId,
    int WarehouseId,
    decimal Quantity,
    int OrderId
);

/// <summary>
/// Request to release reserved stock.
/// </summary>
public record ReleaseStockRequest(
    int ProductId,
    int WarehouseId,
    decimal Quantity,
    int OrderId,
    string? Reason
);

#endregion

#region Enums

/// <summary>
/// Type of stock adjustment operation.
/// </summary>
public enum AdjustmentType
{
    /// <summary>Add quantity to current stock</summary>
    Increase,
    /// <summary>Remove quantity from current stock</summary>
    Decrease,
    /// <summary>Set stock to absolute quantity</summary>
    SetAbsolute
}

#endregion
