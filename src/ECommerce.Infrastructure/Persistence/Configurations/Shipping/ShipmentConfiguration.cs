using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Shipping;

namespace ECommerce.Infrastructure.Persistence.Configurations.Shipping;

public class ShipmentConfiguration : IEntityTypeConfiguration<Shipment>
{
    public void Configure(EntityTypeBuilder<Shipment> builder)
    {
        builder.ToTable("Shipment");

        builder.HasKey(s => s.Id);

        // Properties
        builder.Property(s => s.TrackingNumber)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(s => s.ShippingMethod)
            .HasMaxLength(50)
            .HasDefaultValue("Standard");

        builder.Property(s => s.Status)
            .IsRequired()
            .HasConversion<string>()
            .HasMaxLength(20)
            .HasDefaultValue(Domain.Enums.ShipmentStatus.Pending);

        builder.Property(s => s.Weight)
            .HasPrecision(10, 3);

        builder.Property(s => s.ShippingCost)
            .HasPrecision(18, 2);

        builder.Property(s => s.DriverId)
            .HasMaxLength(450);

        builder.Property(s => s.Notes)
            .HasMaxLength(500);

        builder.Property(s => s.RecipientName)
            .HasMaxLength(200);

        builder.Property(s => s.RecipientPhone)
            .HasMaxLength(50);

        builder.Property(s => s.DeliveryAddress)
            .HasMaxLength(500);

        builder.Property(s => s.DeliveryCity)
            .HasMaxLength(100);

        builder.Property(s => s.DeliveryCountry)
            .HasMaxLength(100);

        builder.Property(s => s.DeliveryPostalCode)
            .HasMaxLength(20);

        builder.Property(s => s.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.Property(s => s.CreatedBy)
            .HasMaxLength(450);

        builder.Property(s => s.UpdatedBy)
            .HasMaxLength(450);

        // Relationships
        builder.HasOne(s => s.Order)
            .WithMany()
            .HasForeignKey(s => s.OrderId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_Shipment_Order");

        builder.HasOne(s => s.Warehouse)
            .WithMany()
            .HasForeignKey(s => s.WarehouseId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_Shipment_Warehouse");

        builder.HasOne(s => s.SubOrder)
            .WithOne(so => so.Shipment)
            .HasForeignKey<Shipment>(s => s.SubOrderId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_Shipment_SubOrder");

        builder.HasOne(s => s.Carrier)
            .WithMany(c => c.Shipments)
            .HasForeignKey(s => s.CarrierId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_Shipment_Carrier");

        builder.HasOne(s => s.ShippingZone)
            .WithMany(sz => sz.Shipments)
            .HasForeignKey(s => s.ShippingZoneId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_Shipment_ShippingZone");

        builder.HasMany(s => s.Items)
            .WithOne(i => i.Shipment)
            .HasForeignKey(i => i.ShipmentId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasMany(s => s.TrackingHistory)
            .WithOne(t => t.Shipment)
            .HasForeignKey(t => t.ShipmentId)
            .OnDelete(DeleteBehavior.Cascade);

        // Indexes
        builder.HasIndex(s => s.OrderId)
            .HasDatabaseName("IX_Shipment_OrderId");

        builder.HasIndex(s => s.WarehouseId)
            .HasDatabaseName("IX_Shipment_WarehouseId");

        builder.HasIndex(s => s.SubOrderId)
            .HasDatabaseName("IX_Shipment_SubOrderId");

        builder.HasIndex(s => s.CarrierId)
            .HasDatabaseName("IX_Shipment_CarrierId");

        builder.HasIndex(s => s.DriverId)
            .HasDatabaseName("IX_Shipment_DriverId");

        builder.HasIndex(s => s.Status)
            .HasDatabaseName("IX_Shipment_Status");

        builder.HasIndex(s => s.TrackingNumber)
            .IsUnique()
            .HasDatabaseName("IX_Shipment_TrackingNumber");
    }
}
