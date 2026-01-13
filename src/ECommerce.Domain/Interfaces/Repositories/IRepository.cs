// ==============================================
// IRepository.cs
// Generic repository interface
// ==============================================
// Responsibilities:
// - Defines standard CRUD operations
// - Supports async operations
// - Generic type parameter for entities
// ==============================================

namespace ECommerce.Domain.Interfaces.Repositories;

public interface IRepository<T> where T : class
{
    // TODO: Define GetByIdAsync
    // TODO: Define GetAllAsync
    // TODO: Define AddAsync
    // TODO: Define Update
    // TODO: Define Delete
    // TODO: Define query methods with specifications
}
