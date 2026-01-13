// ==============================================
// WarehouseService.cs - Warehouse Service Implementation
// ==============================================

using Microsoft.EntityFrameworkCore;
using ECommerce.Application.DTOs;
using ECommerce.Application.Interfaces;
using ECommerce.Domain.Entities.Warehouses;
using ECommerce.Infrastructure.Persistence;

namespace ECommerce.Infrastructure.Services.Warehouses;

/// <summary>
/// Service for warehouse management operations.
/// Implements business rules for inventory-safe warehouse management.
/// </summary>
public class WarehouseService : IWarehouseService
{
    private readonly ApplicationDbContext _context;

    public WarehouseService(ApplicationDbContext context)
    {
        _context = context;
    }

    #region Query Operations

    /// <inheritdoc />
    public async Task<List<WarehouseListDto>> GetAllAsync(CancellationToken cancellationToken = default)
    {
        return await _context.Warehouses
            .AsNoTracking()
            .OrderByDescending(w => w.IsDefault)
            .ThenBy(w => w.Name)
            .Select(w => new WarehouseListDto(
                w.Id,
                w.Name,
                w.Code,
                $"{w.City}, {w.Country}",
                w.IsActive,
                w.IsDefault
            ))
            .ToListAsync(cancellationToken);
    }

    /// <inheritdoc />
    public async Task<WarehouseDto?> GetByIdAsync(int id, CancellationToken cancellationToken = default)
    {
        var warehouse = await _context.Warehouses
            .AsNoTracking()
            .FirstOrDefaultAsync(w => w.Id == id, cancellationToken);

        return warehouse == null ? null : MapToDto(warehouse);
    }

    /// <inheritdoc />
    public async Task<List<WarehouseListDto>> GetActiveAsync(CancellationToken cancellationToken = default)
    {
        return await _context.Warehouses
            .AsNoTracking()
            .Where(w => w.IsActive)
            .OrderByDescending(w => w.IsDefault)
            .ThenBy(w => w.Name)
            .Select(w => new WarehouseListDto(
                w.Id,
                w.Name,
                w.Code,
                $"{w.City}, {w.Country}",
                w.IsActive,
                w.IsDefault
            ))
            .ToListAsync(cancellationToken);
    }

    /// <inheritdoc />
    public async Task<WarehouseDto?> GetDefaultAsync(CancellationToken cancellationToken = default)
    {
        var warehouse = await _context.Warehouses
            .AsNoTracking()
            .FirstOrDefaultAsync(w => w.IsDefault, cancellationToken);

        return warehouse == null ? null : MapToDto(warehouse);
    }

    #endregion

    #region Command Operations

    /// <inheritdoc />
    public async Task<WarehouseDto> CreateWarehouseAsync(
        CreateWarehouseRequest request,
        string userId,
        CancellationToken cancellationToken = default)
    {
        // Validate Code uniqueness
        var codeExists = await _context.Warehouses
            .AnyAsync(w => w.Code == request.Code, cancellationToken);

        if (codeExists)
        {
            throw new InvalidOperationException(
                $"Warehouse with code '{request.Code}' already exists. Warehouse codes must be unique.");
        }

        await using var transaction = await _context.Database.BeginTransactionAsync(cancellationToken);

        try
        {
            // If this is the default, unset all others
            if (request.IsDefault)
            {
                await UnsetAllDefaultsAsync(cancellationToken);
            }

            // If no warehouses exist, make this the default
            var isFirstWarehouse = !await _context.Warehouses.AnyAsync(cancellationToken);

            var warehouse = new Warehouse
            {
                Name = request.Name,
                Code = request.Code,
                Address = request.Address,
                City = request.City,
                State = request.State,
                Country = request.Country,
                PostalCode = request.PostalCode,
                Phone = request.Phone,
                Email = request.Email,
                IsActive = true,
                IsDefault = request.IsDefault || isFirstWarehouse,
                CreatedAt = DateTime.UtcNow
            };

            _context.Warehouses.Add(warehouse);
            await _context.SaveChangesAsync(cancellationToken);
            await transaction.CommitAsync(cancellationToken);

            return MapToDto(warehouse);
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);
            throw;
        }
    }

    /// <inheritdoc />
    public async Task<WarehouseDto> UpdateWarehouseAsync(
        int id,
        UpdateWarehouseRequest request,
        string userId,
        CancellationToken cancellationToken = default)
    {
        var warehouse = await _context.Warehouses
            .FirstOrDefaultAsync(w => w.Id == id, cancellationToken);

        if (warehouse == null)
        {
            throw new InvalidOperationException($"Warehouse with ID {id} not found.");
        }

        // Validate Code uniqueness (exclude self)
        var codeExists = await _context.Warehouses
            .AnyAsync(w => w.Code == request.Code && w.Id != id, cancellationToken);

        if (codeExists)
        {
            throw new InvalidOperationException(
                $"Warehouse with code '{request.Code}' already exists. Warehouse codes must be unique.");
        }

        // Cannot unset IsDefault directly if currently default
        if (warehouse.IsDefault && !request.IsDefault)
        {
            throw new InvalidOperationException(
                "Cannot unset the default warehouse directly. Please set another warehouse as default first.");
        }

        await using var transaction = await _context.Database.BeginTransactionAsync(cancellationToken);

        try
        {
            // If setting as default, unset all others
            if (request.IsDefault && !warehouse.IsDefault)
            {
                await UnsetAllDefaultsAsync(cancellationToken);
            }

            // Update properties
            warehouse.Name = request.Name;
            warehouse.Code = request.Code;
            warehouse.Address = request.Address;
            warehouse.City = request.City;
            warehouse.State = request.State;
            warehouse.Country = request.Country;
            warehouse.PostalCode = request.PostalCode;
            warehouse.Phone = request.Phone;
            warehouse.Email = request.Email;
            warehouse.IsDefault = request.IsDefault;
            warehouse.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync(cancellationToken);
            await transaction.CommitAsync(cancellationToken);

            return MapToDto(warehouse);
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);
            throw;
        }
    }

    /// <inheritdoc />
    public async Task<WarehouseDto> ActivateWarehouseAsync(
        int id,
        string userId,
        CancellationToken cancellationToken = default)
    {
        var warehouse = await _context.Warehouses
            .FirstOrDefaultAsync(w => w.Id == id, cancellationToken);

        if (warehouse == null)
        {
            throw new InvalidOperationException($"Warehouse with ID {id} not found.");
        }

        if (warehouse.IsActive)
        {
            throw new InvalidOperationException($"Warehouse '{warehouse.Name}' is already active.");
        }

        warehouse.IsActive = true;
        warehouse.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync(cancellationToken);

        return MapToDto(warehouse);
    }

    /// <inheritdoc />
    public async Task<WarehouseDto> DeactivateWarehouseAsync(
        int id,
        string userId,
        CancellationToken cancellationToken = default)
    {
        var warehouse = await _context.Warehouses
            .FirstOrDefaultAsync(w => w.Id == id, cancellationToken);

        if (warehouse == null)
        {
            throw new InvalidOperationException($"Warehouse with ID {id} not found.");
        }

        if (!warehouse.IsActive)
        {
            throw new InvalidOperationException($"Warehouse '{warehouse.Name}' is already inactive.");
        }

        // Rule: Cannot deactivate default warehouse
        if (warehouse.IsDefault)
        {
            throw new InvalidOperationException(
                "Cannot deactivate the default warehouse. Please set another warehouse as default first.");
        }

        // Rule: Cannot deactivate warehouse with stock
        var hasStock = await _context.ProductStocks
            .AnyAsync(ps => ps.WarehouseId == id &&
                           (ps.QuantityOnHand > 0 || ps.QuantityReserved > 0),
                      cancellationToken);

        if (hasStock)
        {
            throw new InvalidOperationException(
                $"Cannot deactivate warehouse '{warehouse.Name}' because it contains stock. " +
                "Please transfer or adjust all stock to zero before deactivating.");
        }

        warehouse.IsActive = false;
        warehouse.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync(cancellationToken);

        return MapToDto(warehouse);
    }

    /// <inheritdoc />
    public async Task<WarehouseDto> SetDefaultWarehouseAsync(
        int id,
        string userId,
        CancellationToken cancellationToken = default)
    {
        var warehouse = await _context.Warehouses
            .FirstOrDefaultAsync(w => w.Id == id, cancellationToken);

        if (warehouse == null)
        {
            throw new InvalidOperationException($"Warehouse with ID {id} not found.");
        }

        if (!warehouse.IsActive)
        {
            throw new InvalidOperationException(
                $"Cannot set inactive warehouse '{warehouse.Name}' as default. Please activate it first.");
        }

        if (warehouse.IsDefault)
        {
            return MapToDto(warehouse); // Already default, no-op
        }

        await using var transaction = await _context.Database.BeginTransactionAsync(cancellationToken);

        try
        {
            await UnsetAllDefaultsAsync(cancellationToken);

            warehouse.IsDefault = true;
            warehouse.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync(cancellationToken);
            await transaction.CommitAsync(cancellationToken);

            return MapToDto(warehouse);
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);
            throw;
        }
    }

    #endregion

    #region Private Helpers

    /// <summary>
    /// Unset IsDefault on all warehouses.
    /// </summary>
    private async Task UnsetAllDefaultsAsync(CancellationToken cancellationToken)
    {
        await _context.Warehouses
            .Where(w => w.IsDefault)
            .ExecuteUpdateAsync(
                setters => setters.SetProperty(w => w.IsDefault, false),
                cancellationToken);
    }

    /// <summary>
    /// Map Warehouse entity to WarehouseDto.
    /// </summary>
    private static WarehouseDto MapToDto(Warehouse warehouse)
    {
        return new WarehouseDto(
            warehouse.Id,
            warehouse.Name,
            warehouse.Code,
            warehouse.Address,
            warehouse.City,
            warehouse.State,
            warehouse.Country,
            warehouse.PostalCode,
            warehouse.Phone,
            warehouse.Email,
            warehouse.IsActive,
            warehouse.IsDefault,
            warehouse.CreatedAt
        );
    }

    #endregion
}
