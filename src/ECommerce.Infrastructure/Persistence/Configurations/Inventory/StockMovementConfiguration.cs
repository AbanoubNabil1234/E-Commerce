using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Inventory;

namespace ECommerce.Infrastructure.Persistence.Configurations.Inventory;

public class StockMovementConfiguration : IEntityTypeConfiguration<StockMovement>
{
    public void Configure(EntityTypeBuilder<StockMovement> builder)
    {
        // Table Name
        builder.ToTable("StockMovements");

        // Keys
        builder.HasKey(x => x.Id);

        // Properties
        builder.Property(x => x.Quantity)
            .HasPrecision(18, 2)
            .IsRequired();
            
        builder.Property(x => x.MovementType)
            .HasConversion<string>() // Store as string for readability/safety
            .IsRequired();

        builder.Property(x => x.Reason)
            .HasMaxLength(255);

        builder.Property(x => x.ReferenceType)
            .HasMaxLength(50);
            
        builder.Property(x => x.CreatedBy)
            .HasMaxLength(450) // User ID length
            .IsRequired();

        // Relationships
        builder.HasOne(x => x.Product)
            .WithMany()
            .HasForeignKey(x => x.ProductId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.Warehouse)
            .WithMany()
            .HasForeignKey(x => x.WarehouseId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
