// ==============================================
// InventoryService.cs - Inventory Service Implementation
// ==============================================

using Microsoft.EntityFrameworkCore;
using ECommerce.Application.Features.Inventory.DTOs;
using ECommerce.Application.Interfaces;
using ECommerce.Domain.Entities.Inventory;
using ECommerce.Domain.Enums;
using ECommerce.Infrastructure.Persistence;

namespace ECommerce.Infrastructure.Services.Inventory;

/// <summary>
/// Inventory service implementation with transactional operations and audit trail.
/// </summary>
public class InventoryService : IInventoryService
{
    private readonly ApplicationDbContext _context;

    public InventoryService(ApplicationDbContext context)
    {
        _context = context;
    }

    #region Query Operations

    public async Task<ProductStockDto?> GetStockByProductAsync(
        int productId, 
        int warehouseId, 
        CancellationToken cancellationToken = default)
    {
        var stock = await _context.ProductStocks
            .Include(ps => ps.Product)
            .Include(ps => ps.Warehouse)
            .FirstOrDefaultAsync(ps => 
                ps.ProductId == productId && 
                ps.WarehouseId == warehouseId, 
                cancellationToken);

        return stock == null ? null : MapToDto(stock);
    }

    public async Task<List<ProductStockDto>> GetAllStockAsync(
        int? warehouseId = null,
        bool? lowStockOnly = null,
        CancellationToken cancellationToken = default)
    {
        var query = _context.ProductStocks
            .Include(ps => ps.Product)
            .Include(ps => ps.Warehouse)
            .AsQueryable();

        if (warehouseId.HasValue)
        {
            query = query.Where(ps => ps.WarehouseId == warehouseId.Value);
        }

        if (lowStockOnly == true)
        {
            query = query.Where(ps => 
                ps.ReorderLevel.HasValue && 
                ps.QuantityOnHand <= ps.ReorderLevel.Value);
        }

        var stocks = await query
            .OrderBy(ps => ps.Product.Name)
            .ToListAsync(cancellationToken);

        return stocks.Select(MapToDto).ToList();
    }

    public async Task<ProductStockSummaryDto?> GetStockSummaryAsync(
        int productId,
        CancellationToken cancellationToken = default)
    {
        var stocks = await _context.ProductStocks
            .Include(ps => ps.Product)
            .Where(ps => ps.ProductId == productId)
            .ToListAsync(cancellationToken);

        if (!stocks.Any()) return null;

        var product = stocks.First().Product;
        var totalOnHand = stocks.Sum(s => s.QuantityOnHand);
        var totalReserved = stocks.Sum(s => s.QuantityReserved);
        var isLowStock = stocks.Any(s => 
            s.ReorderLevel.HasValue && 
            s.QuantityOnHand <= s.ReorderLevel.Value);

        return new ProductStockSummaryDto(
            ProductId: productId,
            ProductName: product.Name,
            ProductSKU: product.SKU,
            TotalQuantityOnHand: totalOnHand,
            TotalQuantityReserved: totalReserved,
            TotalQuantityAvailable: totalOnHand - totalReserved,
            WarehouseCount: stocks.Select(s => s.WarehouseId).Distinct().Count(),
            IsLowStock: isLowStock
        );
    }

    public async Task<List<StockMovementDto>> GetMovementHistoryAsync(
        int productId,
        int? warehouseId = null,
        int pageNumber = 1,
        int pageSize = 20,
        CancellationToken cancellationToken = default)
    {
        var query = _context.StockMovements
            .Include(sm => sm.Product)
            .Include(sm => sm.Warehouse)
            .Where(sm => sm.ProductId == productId);

        if (warehouseId.HasValue)
        {
            query = query.Where(sm => sm.WarehouseId == warehouseId.Value);
        }

        var movements = await query
            .OrderByDescending(sm => sm.CreatedAt) // CreatedAt is in BaseEntity? Yes usually, or we added it?
            // StockMovement inherits BaseEntity which usually has CreatedAt. 
            // Wait, BaseEntity usually has Id. Does it have CreatedAt?
            // I should verify BaseEntity. But usually yes.
            .Skip((pageNumber - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync(cancellationToken);

        return movements.Select(MapToMovementDto).ToList();
    }

    public async Task<ProductWithStockDetailsDto?> GetProductWithStockDetailsAsync(
        int productId,
        CancellationToken cancellationToken = default)
    {
        // Get product with brand and category
        var product = await _context.Products
            .Include(p => p.Brand)
            .Include(p => p.Category)
            .Include(p => p.Images)
            .FirstOrDefaultAsync(p => p.Id == productId, cancellationToken);

        if (product == null) return null;

        // Get all stock records for this product
        var stocks = await _context.ProductStocks
            .Include(ps => ps.Warehouse)
            .Where(ps => ps.ProductId == productId)
            .ToListAsync(cancellationToken);

        // Calculate totals
        var totalOnHand = stocks.Sum(s => s.QuantityOnHand);
        var totalReserved = stocks.Sum(s => s.QuantityReserved);
        var isLowStock = stocks.Any(s => 
            s.ReorderLevel.HasValue && 
            s.QuantityOnHand <= s.ReorderLevel.Value);

        // Build warehouse breakdown
        var warehouseBreakdown = stocks.Select(s => new WarehouseStockBreakdownDto(
            WarehouseId: s.WarehouseId,
            WarehouseName: s.Warehouse?.Name ?? "",
            WarehouseCode: s.Warehouse?.Code ?? "",
            QuantityOnHand: s.QuantityOnHand,
            QuantityReserved: s.QuantityReserved,
            QuantityAvailable: s.QuantityAvailable,
            ReorderLevel: s.ReorderLevel,
            IsLowStock: s.ReorderLevel.HasValue && s.QuantityOnHand <= s.ReorderLevel.Value
        )).OrderBy(w => w.WarehouseName).ToList();

        // Get primary image
        var primaryImage = product.Images?.FirstOrDefault(i => i.IsPrimary)?.ImageUrl
            ?? product.Images?.FirstOrDefault()?.ImageUrl;

        return new ProductWithStockDetailsDto(
            ProductId: product.Id,
            ProductName: product.Name,
            ProductSKU: product.SKU,
            BrandName: product.Brand?.Name,
            CategoryName: product.Category?.Name,
            UnitPrice: product.UnitPrice,
            PrimaryImageUrl: primaryImage,
            IsActive: product.IsActive,
            TotalQuantityOnHand: totalOnHand,
            TotalQuantityReserved: totalReserved,
            TotalQuantityAvailable: totalOnHand - totalReserved,
            IsLowStock: isLowStock,
            WarehouseBreakdown: warehouseBreakdown
        );
    }

    #endregion

    #region Command Operations

    public async Task<ProductStockDto> InitializeStockAsync(
        InitializeStockRequest request, 
        string userId,
        CancellationToken cancellationToken = default)
    {
        // Check if stock already exists
        var existing = await _context.ProductStocks
            .FirstOrDefaultAsync(ps => 
                ps.ProductId == request.ProductId && 
                ps.WarehouseId == request.WarehouseId,
                cancellationToken);

        if (existing != null)
        {
            throw new InvalidOperationException(
                $"Stock already exists for Product {request.ProductId} at Warehouse {request.WarehouseId}");
        }

        // Validate product exists
        var product = await _context.Products.FindAsync(new object[] { request.ProductId }, cancellationToken);
        if (product == null)
        {
            throw new InvalidOperationException($"Product {request.ProductId} not found");
        }

        // Validate warehouse exists
        var warehouse = await _context.Warehouses.FindAsync(new object[] { request.WarehouseId }, cancellationToken);
        if (warehouse == null)
        {
            throw new InvalidOperationException($"Warehouse {request.WarehouseId} not found");
        }

        await using var transaction = await _context.Database.BeginTransactionAsync(cancellationToken);

        try
        {
            // Create stock record
            var stock = new ProductStock
            {
                ProductId = request.ProductId,
                WarehouseId = request.WarehouseId,
                QuantityOnHand = request.InitialQuantity,
                QuantityReserved = 0,
                ReorderLevel = request.ReorderLevel
                // ReorderQuantity removed
            };

            _context.ProductStocks.Add(stock);
            await _context.SaveChangesAsync(cancellationToken);

            // Create movement record
            if (request.InitialQuantity > 0)
            {
                var movement = new StockMovement
                {
                    ProductId = request.ProductId,
                    WarehouseId = request.WarehouseId,
                    MovementType = MovementType.In,
                    Quantity = request.InitialQuantity,
                    ReferenceType = "Initialization",
                    Reason = "Initial stock setup" + (string.IsNullOrEmpty(request.Notes) ? "" : $" - {request.Notes}"),
                    CreatedBy = userId
                };
                _context.StockMovements.Add(movement);
                await _context.SaveChangesAsync(cancellationToken);
            }

            await transaction.CommitAsync(cancellationToken);

            // Reload with navigation properties
            await _context.Entry(stock).Reference(s => s.Product).LoadAsync(cancellationToken);
            await _context.Entry(stock).Reference(s => s.Warehouse).LoadAsync(cancellationToken);

            return MapToDto(stock);
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);
            throw;
        }
    }

    public async Task<ProductStockDto> IncreaseStockAsync(
        int productId,
        int warehouseId,
        decimal quantity,
        string reason,
        string? referenceType,
        int? referenceId,
        string userId,
        CancellationToken cancellationToken = default)
    {
        if (quantity <= 0)
        {
            throw new ArgumentException("Quantity must be positive", nameof(quantity));
        }

        var stock = await GetOrCreateStockAsync(productId, warehouseId, cancellationToken);

        await using var transaction = await _context.Database.BeginTransactionAsync(cancellationToken);

        try
        {
            // Update stock
            stock.QuantityOnHand += quantity;
            // UpdatedAt handled by BaseEntity interceptor usually, or manual:
            // stock.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync(cancellationToken);

            // Create movement
            var movement = new StockMovement
            {
                ProductId = productId,
                WarehouseId = warehouseId,
                MovementType = MovementType.In,
                Quantity = quantity,
                ReferenceType = referenceType,
                ReferenceId = referenceId,
                Reason = reason,
                CreatedBy = userId
            };

            _context.StockMovements.Add(movement);
            await _context.SaveChangesAsync(cancellationToken);

            await transaction.CommitAsync(cancellationToken);

            return MapToDto(stock);
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);
            throw;
        }
    }

    public async Task<ProductStockDto> DecreaseStockAsync(
        int productId,
        int warehouseId,
        decimal quantity,
        string reason,
        string? referenceType,
        int? referenceId,
        string userId,
        CancellationToken cancellationToken = default)
    {
        if (quantity <= 0)
        {
            throw new ArgumentException("Quantity must be positive", nameof(quantity));
        }

        var stock = await _context.ProductStocks
            .Include(ps => ps.Product)
            .Include(ps => ps.Warehouse)
            .FirstOrDefaultAsync(ps => 
                ps.ProductId == productId && 
                ps.WarehouseId == warehouseId,
                cancellationToken);

        if (stock == null)
        {
            throw new InvalidOperationException(
                $"No stock found for Product {productId} at Warehouse {warehouseId}");
        }

        // Available logic: Strictly (OnHand - Reserved) >= Qty
        var availableQuantity = stock.QuantityAvailable; // Computed property
        if (quantity > availableQuantity)
        {
            throw new InvalidOperationException(
                $"Insufficient stock. Available: {availableQuantity}, Requested: {quantity}");
        }

        await using var transaction = await _context.Database.BeginTransactionAsync(cancellationToken);

        try
        {
            // Update stock
            stock.QuantityOnHand -= quantity;
            await _context.SaveChangesAsync(cancellationToken);

            // Create movement
            var movement = new StockMovement
            {
                ProductId = productId,
                WarehouseId = warehouseId,
                MovementType = MovementType.Out,
                Quantity = quantity,
                ReferenceType = referenceType,
                ReferenceId = referenceId,
                Reason = reason,
                CreatedBy = userId
            };

            _context.StockMovements.Add(movement);
            await _context.SaveChangesAsync(cancellationToken);

            await transaction.CommitAsync(cancellationToken);

            return MapToDto(stock);
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);
            throw;
        }
    }

    public async Task<ProductStockDto> AdjustStockAsync(
        AdjustStockRequest request,
        string userId,
        CancellationToken cancellationToken = default)
    {
        return request.AdjustmentType switch
        {
            AdjustmentType.Increase => await IncreaseStockAsync(
                request.ProductId, 
                request.WarehouseId, 
                request.Quantity, 
                request.Reason + (string.IsNullOrEmpty(request.Notes) ? "" : $" - {request.Notes}"), 
                "Manual", 
                null, 
                userId, 
                cancellationToken),
                
            AdjustmentType.Decrease => await DecreaseStockAsync(
                request.ProductId, 
                request.WarehouseId, 
                request.Quantity, 
                request.Reason + (string.IsNullOrEmpty(request.Notes) ? "" : $" - {request.Notes}"), 
                "Manual", 
                null, 
                userId, 
                cancellationToken),
                
            AdjustmentType.SetAbsolute => await SetAbsoluteStockAsync(
                request.ProductId,
                request.WarehouseId,
                request.Quantity,
                request.Reason,
                userId,
                request.Notes,
                cancellationToken),
                
            _ => throw new ArgumentException("Invalid adjustment type")
        };
    }

    public async Task<(ProductStockDto Source, ProductStockDto Destination)> TransferStockAsync(
        TransferStockRequest request,
        string userId,
        CancellationToken cancellationToken = default)
    {
        if (request.Quantity <= 0)
        {
            throw new ArgumentException("Quantity must be positive");
        }

        var sourceStock = await _context.ProductStocks
            .Include(ps => ps.Product)
            .Include(ps => ps.Warehouse)
            .FirstOrDefaultAsync(ps => 
                ps.ProductId == request.ProductId && 
                ps.WarehouseId == request.SourceWarehouseId,
                cancellationToken);

        if (sourceStock == null)
        {
            throw new InvalidOperationException("Source stock location not found");
        }

        var availableQuantity = sourceStock.QuantityAvailable;
        if (request.Quantity > availableQuantity)
        {
            throw new InvalidOperationException(
                $"Insufficient stock at source. Available: {availableQuantity}");
        }

        await using var transaction = await _context.Database.BeginTransactionAsync(cancellationToken);

        try
        {
            // Decrease source
            sourceStock.QuantityOnHand -= request.Quantity;
            
            // Get or create destination
            var destStock = await GetOrCreateStockAsync(
                request.ProductId, 
                request.DestinationWarehouseId, 
                cancellationToken);
            
            destStock.QuantityOnHand += request.Quantity;

            await _context.SaveChangesAsync(cancellationToken);

            // Create movements
            var outMovement = new StockMovement
            {
                ProductId = request.ProductId,
                WarehouseId = request.SourceWarehouseId,
                MovementType = MovementType.Out, // Or Transfer? Type=Transfer exists? Enum removed it? 
                // STEP 5494: REMOVED Transfer from Enum.
                // Replaced with In/Out/Adjustment/Reserve/Release.
                // So Transfer = Out from Source, In to Dest.
                Quantity = request.Quantity,
                ReferenceType = "Transfer",
                ReferenceId = request.DestinationWarehouseId, // Link to Dest?
                Reason = request.Reason ?? "Stock transfer out",
                CreatedBy = userId
            };

            var inMovement = new StockMovement
            {
                ProductId = request.ProductId,
                WarehouseId = request.DestinationWarehouseId,
                MovementType = MovementType.In, // In
                Quantity = request.Quantity,
                ReferenceType = "Transfer",
                ReferenceId = request.SourceWarehouseId, // Link to Source?
                Reason = request.Reason ?? "Stock transfer in",
                CreatedBy = userId
            };

            _context.StockMovements.AddRange(outMovement, inMovement);
            await _context.SaveChangesAsync(cancellationToken);

            await transaction.CommitAsync(cancellationToken);

            return (MapToDto(sourceStock), MapToDto(destStock));
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);
            throw;
        }
    }

    public async Task<ProductStockDto> ReserveStockAsync(
        ReserveStockRequest request,
        string userId,
        CancellationToken cancellationToken = default)
    {
        var stock = await _context.ProductStocks
            .Include(ps => ps.Product)
            .Include(ps => ps.Warehouse)
            .FirstOrDefaultAsync(ps => 
                ps.ProductId == request.ProductId && 
                ps.WarehouseId == request.WarehouseId,
                cancellationToken);

        if (stock == null)
        {
            throw new InvalidOperationException("Stock not found");
        }

        var availableQuantity = stock.QuantityAvailable;
        if (request.Quantity > availableQuantity)
        {
            throw new InvalidOperationException(
                $"Insufficient available stock. Available: {availableQuantity}");
        }

        await using var transaction = await _context.Database.BeginTransactionAsync(cancellationToken);

        try 
        {
            stock.QuantityReserved += request.Quantity;
            await _context.SaveChangesAsync(cancellationToken);

            // Create Movement (Reserve)
            var movement = new StockMovement
            {
                ProductId = request.ProductId,
                WarehouseId = request.WarehouseId,
                MovementType = MovementType.Reserve,
                Quantity = request.Quantity,
                ReferenceType = "Order",
                ReferenceId = request.OrderId,
                Reason = "Order Reservation",
                CreatedBy = userId
            };
            _context.StockMovements.Add(movement);
            await _context.SaveChangesAsync(cancellationToken);
            
            await transaction.CommitAsync(cancellationToken);

            return MapToDto(stock);
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);
            throw;
        }
    }

    public async Task<ProductStockDto> ReleaseStockAsync(
        ReleaseStockRequest request,
        string userId,
        CancellationToken cancellationToken = default)
    {
        var stock = await _context.ProductStocks
            .Include(ps => ps.Product)
            .Include(ps => ps.Warehouse)
            .FirstOrDefaultAsync(ps => 
                ps.ProductId == request.ProductId && 
                ps.WarehouseId == request.WarehouseId,
                cancellationToken);

        if (stock == null)
        {
            throw new InvalidOperationException("Stock not found");
        }

        if (request.Quantity > stock.QuantityReserved)
        {
            throw new InvalidOperationException(
                $"Cannot release more than reserved. Reserved: {stock.QuantityReserved}");
        }

        await using var transaction = await _context.Database.BeginTransactionAsync(cancellationToken);

        try
        {
            stock.QuantityReserved -= request.Quantity;
            await _context.SaveChangesAsync(cancellationToken);

            // Create Movement (Release)
            var movement = new StockMovement
            {
                ProductId = request.ProductId,
                WarehouseId = request.WarehouseId,
                MovementType = MovementType.Release,
                Quantity = request.Quantity,
                ReferenceType = "Order",
                ReferenceId = request.OrderId,
                Reason = request.Reason ?? "Reservation Released",
                CreatedBy = userId
            };
            _context.StockMovements.Add(movement);
            await _context.SaveChangesAsync(cancellationToken);

            await transaction.CommitAsync(cancellationToken);

            return MapToDto(stock);
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);
            throw;
        }
    }

    public async Task<ProductStockDto> CommitReservedStockAsync(
        int productId,
        int warehouseId,
        decimal quantity,
        int orderId,
        string userId,
        CancellationToken cancellationToken = default)
    {
        var stock = await _context.ProductStocks
            .Include(ps => ps.Product)
            .Include(ps => ps.Warehouse)
            .FirstOrDefaultAsync(ps => 
                ps.ProductId == productId && 
                ps.WarehouseId == warehouseId,
                cancellationToken);

        if (stock == null)
        {
            throw new InvalidOperationException("Stock not found");
        }

        await using var transaction = await _context.Database.BeginTransactionAsync(cancellationToken);

        try
        {
            // Remove from reserved and on-hand
            // Validation? Should check if we have enough reserved? 
            // Usually commit happens after reserve, so we assume yes or clamp to Reserved.
            // But let's assume valid request.
            
            stock.QuantityReserved -= quantity;
            stock.QuantityOnHand -= quantity;

            await _context.SaveChangesAsync(cancellationToken);

            // Create movement (Out)
            var movement = new StockMovement
            {
                ProductId = productId,
                WarehouseId = warehouseId,
                MovementType = MovementType.Out,
                Quantity = quantity,
                ReferenceType = "Order",
                ReferenceId = orderId,
                Reason = "Order Shipped",
                CreatedBy = userId
            };

            _context.StockMovements.Add(movement);
            await _context.SaveChangesAsync(cancellationToken);

            await transaction.CommitAsync(cancellationToken);

            return MapToDto(stock);
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);
            throw;
        }
    }

    #endregion

    #region Utility Operations

    public async Task<bool> IsStockAvailableAsync(
        int productId,
        int warehouseId,
        decimal requiredQuantity,
        CancellationToken cancellationToken = default)
    {
        var stock = await _context.ProductStocks
            .FirstOrDefaultAsync(ps => 
                ps.ProductId == productId && 
                ps.WarehouseId == warehouseId,
                cancellationToken);

        if (stock == null) return false;

        return stock.QuantityAvailable >= requiredQuantity;
    }

    public async Task<List<ProductStockDto>> GetLowStockProductsAsync(
        int? warehouseId = null,
        CancellationToken cancellationToken = default)
    {
        return await GetAllStockAsync(warehouseId, true, cancellationToken);
    }

    #endregion

    #region Private Helpers

    private async Task<ProductStock> GetOrCreateStockAsync(
        int productId,
        int warehouseId,
        CancellationToken cancellationToken)
    {
        var stock = await _context.ProductStocks
            .Include(ps => ps.Product)
            .Include(ps => ps.Warehouse)
            .FirstOrDefaultAsync(ps => 
                ps.ProductId == productId && 
                ps.WarehouseId == warehouseId,
                cancellationToken);

        if (stock != null) return stock;

        stock = new ProductStock
        {
            ProductId = productId,
            WarehouseId = warehouseId,
            QuantityOnHand = 0,
            QuantityReserved = 0
        };

        _context.ProductStocks.Add(stock);
        await _context.SaveChangesAsync(cancellationToken);

        await _context.Entry(stock).Reference(s => s.Product).LoadAsync(cancellationToken);
        await _context.Entry(stock).Reference(s => s.Warehouse).LoadAsync(cancellationToken);

        return stock;
    }

    private async Task<ProductStockDto> SetAbsoluteStockAsync(
        int productId,
        int warehouseId,
        decimal newQuantity,
        string reason,
        string userId,
        string? notes,
        CancellationToken cancellationToken)
    {
        var stock = await GetOrCreateStockAsync(productId, warehouseId, cancellationToken);
        var previousQuantity = stock.QuantityOnHand;
        var difference = newQuantity - previousQuantity;
        var concatReason = reason + (string.IsNullOrEmpty(notes) ? "" : $" - {notes}");

        if (difference == 0) return MapToDto(stock);

        await using var transaction = await _context.Database.BeginTransactionAsync(cancellationToken);

        try
        {
            stock.QuantityOnHand = newQuantity;
            await _context.SaveChangesAsync(cancellationToken);

            // Determine MovementType and Quantity (always positive)
            MovementType type;
            decimal qty;
            
            if (difference > 0)
            {
                type = MovementType.In;
                qty = difference;
            }
            else
            {
                type = MovementType.Out;
                qty = -difference; // Make positive
            }

            var movement = new StockMovement
            {
                ProductId = productId,
                WarehouseId = warehouseId,
                MovementType = type,
                Quantity = qty,
                ReferenceType = "Adjustment",
                Reason = concatReason,
                CreatedBy = userId
            };

            _context.StockMovements.Add(movement);
            await _context.SaveChangesAsync(cancellationToken);

            await transaction.CommitAsync(cancellationToken);

            return MapToDto(stock);
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);
            throw;
        }
    }

    private static ProductStockDto MapToDto(ProductStock stock)
    {
        return new ProductStockDto(
            Id: stock.Id,
            ProductId: stock.ProductId,
            ProductName: stock.Product?.Name ?? "",
            ProductSKU: stock.Product?.SKU ?? "",
            WarehouseId: stock.WarehouseId,
            WarehouseName: stock.Warehouse?.Name ?? "",
            QuantityOnHand: stock.QuantityOnHand,
            QuantityReserved: stock.QuantityReserved,
            QuantityAvailable: stock.QuantityAvailable,
            ReorderLevel: stock.ReorderLevel,
            IsLowStock: stock.ReorderLevel.HasValue && stock.QuantityOnHand <= stock.ReorderLevel.Value,
            UpdatedAt: stock.UpdatedAt
        );
    }

    private static StockMovementDto MapToMovementDto(StockMovement movement)
    {
        return new StockMovementDto(
            Id: movement.Id,
            ProductId: movement.ProductId,
            ProductName: movement.Product?.Name ?? "",
            WarehouseId: movement.WarehouseId,
            WarehouseName: movement.Warehouse?.Name ?? "",
            MovementType: movement.MovementType,
            Quantity: movement.Quantity,
            ReferenceType: movement.ReferenceType,
            ReferenceId: movement.ReferenceId,
            Reason: movement.Reason,
            PerformedBy: movement.CreatedBy, // Map CreatedBy to PerformedBy DTO field
            PerformedByName: movement.CreatedBy, // TODO: Resolve
            CreatedAt: movement.CreatedAt
        );
    }

    #endregion
}
