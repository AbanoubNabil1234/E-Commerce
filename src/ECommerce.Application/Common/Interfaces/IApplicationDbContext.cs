// ==============================================
// IApplicationDbContext.cs
// EF Core DbContext interface
// ==============================================
// Responsibilities:
// - Defines DbSets for all entities
// - Abstraction for database operations
// - Used by Application layer, implemented in Infrastructure
// ==============================================

namespace ECommerce.Application.Common.Interfaces;

public interface IApplicationDbContext
{
    // TODO: Define DbSet properties for all entities
    // TODO: Define SaveChangesAsync method
}
