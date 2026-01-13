using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Orders;

namespace ECommerce.Infrastructure.Persistence.Configurations.Orders;

public class OrderConfiguration : IEntityTypeConfiguration<Order>
{
    public void Configure(EntityTypeBuilder<Order> builder)
    {
        builder.ToTable("Order");

        builder.HasKey(o => o.Id);

        builder.Property(o => o.OrderNumber)
            .IsRequired()
            .HasMaxLength(50);

        builder.Property(o => o.CustomerId)
            .IsRequired()
            .HasMaxLength(450);

        // Warehouse FK - nullable for backwards compatibility
        builder.Property(o => o.WarehouseId)
            .IsRequired(false);

        builder.HasOne(o => o.Warehouse)
            .WithMany()
            .HasForeignKey(o => o.WarehouseId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.Property(o => o.OrderStatus)
            .IsRequired()
            .HasConversion<string>()
            .HasMaxLength(20)
            .HasDefaultValue(Domain.Enums.OrderStatus.Draft);

        builder.Property(o => o.PaymentStatus)
            .IsRequired()
            .HasConversion<string>()
            .HasMaxLength(20)
            .HasDefaultValue(Domain.Enums.PaymentStatus.Pending);

        builder.Property(o => o.SubTotal)
            .IsRequired()
            .HasPrecision(18, 2);

        builder.Property(o => o.TaxAmount)
            .IsRequired()
            .HasPrecision(18, 2)
            .HasDefaultValue(0);

        builder.Property(o => o.ShippingAmount)
            .IsRequired()
            .HasPrecision(18, 2)
            .HasDefaultValue(0);

        builder.Property(o => o.DiscountAmount)
            .IsRequired()
            .HasPrecision(18, 2)
            .HasDefaultValue(0);

        builder.Property(o => o.TotalAmount)
            .IsRequired()
            .HasPrecision(18, 2);

        builder.Property(o => o.Currency)
            .IsRequired()
            .HasMaxLength(3)
            .HasDefaultValue("USD");

        builder.Property(o => o.ShippingName)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(o => o.ShippingAddress)
            .IsRequired()
            .HasMaxLength(500);

        builder.Property(o => o.ShippingCity)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(o => o.ShippingState)
            .HasMaxLength(100);

        builder.Property(o => o.ShippingCountry)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(o => o.ShippingPostalCode)
            .HasMaxLength(20);

        builder.Property(o => o.ShippingPhone)
            .HasMaxLength(20);

        builder.Property(o => o.Notes)
            .HasMaxLength(1000);

        builder.Property(o => o.CancellationReason)
            .HasMaxLength(500);

        builder.Property(o => o.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETUTCDATE()");

        // Indexes
        builder.HasIndex(o => o.OrderNumber)
            .IsUnique()
            .HasDatabaseName("UQ_Order_OrderNumber");

        builder.HasIndex(o => o.CustomerId)
            .HasDatabaseName("IX_Order_CustomerId");

        builder.HasIndex(o => o.WarehouseId)
            .HasDatabaseName("IX_Order_WarehouseId");

        builder.HasIndex(o => o.OrderStatus)
            .HasDatabaseName("IX_Order_OrderStatus");

        builder.HasIndex(o => o.PaymentStatus)
            .HasDatabaseName("IX_Order_PaymentStatus");

        builder.HasIndex(o => o.CreatedAt)
            .HasDatabaseName("IX_Order_CreatedAt");
    }
}
