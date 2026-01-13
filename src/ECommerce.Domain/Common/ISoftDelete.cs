// ==============================================
// ISoftDelete.cs
// Interface for soft-deletable entities
// ==============================================
// Responsibilities:
// - Marks entities as deleted without physical removal
// - Tracks deletion timestamp and user
// - Used with EF Core global query filters
// ==============================================

namespace ECommerce.Domain.Common;

public interface ISoftDelete
{
    // TODO: Define IsDeleted property
    // TODO: Define DeletedAt property
    // TODO: Define DeletedBy property
}
