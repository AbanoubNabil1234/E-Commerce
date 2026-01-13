using System.Reflection;
using FluentValidation;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using ECommerce.Application.Common.Behaviors;
using ECommerce.Application.Interfaces.Services;
using ECommerce.Application.Services;

namespace ECommerce.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        var assembly = Assembly.GetExecutingAssembly();

        // Register MediatR
        services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(assembly));

        // Register FluentValidation validators
        services.AddValidatorsFromAssembly(assembly);

        // Register validation pipeline behavior
        services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));

        // Register Services
        services.AddScoped<IBrandService, BrandService>();
        services.AddScoped<ICategoryService, CategoryService>();
        services.AddScoped<IProductService, ProductService>();

        return services;
    }
}
