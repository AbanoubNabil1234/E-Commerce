using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Shipping;

namespace ECommerce.Infrastructure.Persistence.Configurations.Shipping;

public class ShipmentItemConfiguration : IEntityTypeConfiguration<ShipmentItem>
{
    public void Configure(EntityTypeBuilder<ShipmentItem> builder)
    {
        builder.ToTable("ShipmentItem");

        builder.HasKey(si => si.Id);

        builder.Property(si => si.Quantity)
            .IsRequired();

        builder.Property(si => si.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        // Relationships
        builder.HasOne(si => si.Shipment)
            .WithMany(s => s.Items)
            .HasForeignKey(si => si.ShipmentId)
            .OnDelete(DeleteBehavior.Cascade)
            .HasConstraintName("FK_ShipmentItem_Shipment");

        builder.HasOne(si => si.Product)
            .WithMany()
            .HasForeignKey(si => si.ProductId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_ShipmentItem_Product");

        // Indexes
        builder.HasIndex(si => si.ShipmentId)
            .HasDatabaseName("IX_ShipmentItem_ShipmentId");

        builder.HasIndex(si => si.ProductId)
            .HasDatabaseName("IX_ShipmentItem_ProductId");
    }
}
