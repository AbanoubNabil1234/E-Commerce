using System.Net;
using System.Text.Json;
using FluentValidation;
using ECommerce.Application.Common.Exceptions;

namespace ECommerce.API.Middleware;

/// <summary>
/// Global exception handling middleware.
/// Converts exceptions to standardized API responses.
/// </summary>
public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionHandlingMiddleware> _logger;

    public ExceptionHandlingMiddleware(RequestDelegate next, ILogger<ExceptionHandlingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            await HandleExceptionAsync(context, ex);
        }
    }

    private async Task HandleExceptionAsync(HttpContext context, Exception exception)
    {
        var response = context.Response;
        response.ContentType = "application/json";

        var errorResponse = new ErrorResponse();

        switch (exception)
        {
            case ValidationException validationException:
                response.StatusCode = (int)HttpStatusCode.BadRequest;
                errorResponse.Type = "ValidationError";
                errorResponse.Errors = validationException.Errors
                    .GroupBy(e => e.PropertyName)
                    .ToDictionary(
                        g => ToCamelCase(g.Key),
                        g => g.Select(e => e.ErrorMessage).ToArray()
                    );
                break;

            case NotFoundException notFoundException:
                response.StatusCode = (int)HttpStatusCode.NotFound;
                errorResponse.Type = "NotFoundError";
                errorResponse.Message = "validation.notFound";
                errorResponse.Details = new { 
                    EntityType = notFoundException.EntityType, 
                    Key = notFoundException.Key 
                };
                break;

            case BusinessRuleException businessException:
                response.StatusCode = (int)HttpStatusCode.UnprocessableEntity;
                errorResponse.Type = "BusinessRuleError";
                errorResponse.Message = businessException.ErrorKey;
                break;

            case UnauthorizedAccessException:
                response.StatusCode = (int)HttpStatusCode.Unauthorized;
                errorResponse.Type = "UnauthorizedError";
                errorResponse.Message = "error.unauthorized";
                break;

            default:
                _logger.LogError(exception, "Unhandled exception occurred");
                response.StatusCode = (int)HttpStatusCode.InternalServerError;
                errorResponse.Type = "ServerError";
                errorResponse.Message = "error.internalServer";
                break;
        }

        var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };
        var result = JsonSerializer.Serialize(errorResponse, options);
        await response.WriteAsync(result);
    }

    private static string ToCamelCase(string str)
    {
        if (string.IsNullOrEmpty(str)) return str;
        return char.ToLowerInvariant(str[0]) + str[1..];
    }
}

/// <summary>
/// Standardized error response format.
/// </summary>
public class ErrorResponse
{
    public string Type { get; set; } = string.Empty;
    public string? Message { get; set; }
    public Dictionary<string, string[]>? Errors { get; set; }
    public object? Details { get; set; }
}

/// <summary>
/// Extension method to register the exception middleware.
/// </summary>
public static class ExceptionHandlingMiddlewareExtensions
{
    public static IApplicationBuilder UseExceptionHandling(this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<ExceptionHandlingMiddleware>();
    }
}
