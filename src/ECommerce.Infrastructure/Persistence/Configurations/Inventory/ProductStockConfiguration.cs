using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Inventory;

namespace ECommerce.Infrastructure.Persistence.Configurations.Inventory;

public class ProductStockConfiguration : IEntityTypeConfiguration<ProductStock>
{
    public void Configure(EntityTypeBuilder<ProductStock> builder)
    {
        // Table Name
        builder.ToTable("ProductStocks");

        // Keys
        builder.HasKey(x => x.Id);

        // Properties
        builder.Property(x => x.QuantityOnHand)
            .HasPrecision(18, 2)
            .IsRequired();

        builder.Property(x => x.QuantityReserved)
            .HasPrecision(18, 2)
            .IsRequired();

        builder.Ignore(x => x.QuantityAvailable);

        // Indexes
        builder.HasIndex(x => new { x.ProductId, x.WarehouseId })
            .IsUnique();

        // Relationships
        builder.HasOne(x => x.Product)
            .WithMany()
            .HasForeignKey(x => x.ProductId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.Warehouse)
            .WithMany() // Assuming Warehouse has collection, or generic WithMany
            .HasForeignKey(x => x.WarehouseId)
            .OnDelete(DeleteBehavior.Restrict);
            
        // Auditing
        builder.Property(x => x.UpdatedAt)
            .IsRequired(false); // BaseEntity usually handles this, just ensuring config
    }
}
