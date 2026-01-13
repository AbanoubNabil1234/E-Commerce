// ==============================================
// ExceptionMiddleware.cs
// Global exception handling middleware
// ==============================================
// Responsibilities:
// - Catches all unhandled exceptions
// - Maps exceptions to proper HTTP responses
// - Logs errors for debugging
// - Returns consistent error format
// ==============================================

namespace ECommerce.API.Middleware;

public class ExceptionMiddleware
{
    // TODO: Implement IMiddleware or use RequestDelegate
    // TODO: Inject ILogger
    // TODO: Map NotFoundException -> 404
    // TODO: Map ValidationException -> 400
    // TODO: Map ForbiddenException -> 403
    // TODO: Map other exceptions -> 500
}
