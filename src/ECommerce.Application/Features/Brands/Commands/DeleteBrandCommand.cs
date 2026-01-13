using MediatR;

namespace ECommerce.Application.Features.Brands.Commands;

/// <summary>
/// Command to delete a brand.
/// </summary>
public class DeleteBrandCommand : IRequest<bool>
{
    public int Id { get; set; }
    public bool HardDelete { get; set; } = false;
    public string? DeletedBy { get; set; }
}
