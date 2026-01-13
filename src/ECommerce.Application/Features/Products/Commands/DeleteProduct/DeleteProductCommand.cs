using MediatR;

namespace ECommerce.Application.Features.Products.Commands.DeleteProduct;

/// <summary>
/// Command to delete a product (soft or hard delete).
/// </summary>
public class DeleteProductCommand : IRequest<Unit>
{
    public int Id { get; set; }
    public bool HardDelete { get; set; }
    public string DeletedBy { get; set; } = "system";
}
