// ==============================================
// SoftDeleteInterceptor.cs
// EF Core interceptor for soft delete
// ==============================================
// Responsibilities:
// - Intercepts delete operations
// - Converts hard delete to soft delete
// - Sets IsDeleted, DeletedAt, DeletedBy
// ==============================================

namespace ECommerce.Infrastructure.Data.Interceptors;

public class SoftDeleteInterceptor
{
    // TODO: Extend SaveChangesInterceptor
    // TODO: Convert Deleted state to Modified
    // TODO: Set soft delete properties
}
