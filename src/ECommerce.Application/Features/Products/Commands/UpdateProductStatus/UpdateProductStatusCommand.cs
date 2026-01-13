using MediatR;

namespace ECommerce.Application.Features.Products.Commands.UpdateProductStatus;

/// <summary>
/// Command to toggle product active status.
/// </summary>
public class UpdateProductStatusCommand : IRequest<Unit>
{
    public int Id { get; set; }
    public bool IsActive { get; set; }
}
