// ==============================================
// AuditableEntityInterceptor.cs
// EF Core SaveChanges interceptor for auditing
// ==============================================
// Responsibilities:
// - Automatically sets CreatedAt/UpdatedAt timestamps
// - Sets CreatedBy/UpdatedBy from current user
// - Intercepts SaveChanges operations
// ==============================================

namespace ECommerce.Infrastructure.Data.Interceptors;

public class AuditableEntityInterceptor
{
    // TODO: Extend SaveChangesInterceptor
    // TODO: Inject ICurrentUserService, IDateTimeService
    // TODO: Override SavingChangesAsync
    // TODO: Update audit fields on Added/Modified entities
}
