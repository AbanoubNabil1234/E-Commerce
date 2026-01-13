using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Orders;

namespace ECommerce.Infrastructure.Persistence.Configurations.Orders;

public class OrderItemConfiguration : IEntityTypeConfiguration<OrderItem>
{
    public void Configure(EntityTypeBuilder<OrderItem> builder)
    {
        builder.ToTable("OrderItem");

        builder.HasKey(oi => oi.Id);

        builder.Property(oi => oi.SKU)
            .IsRequired()
            .HasMaxLength(50);

        builder.Property(oi => oi.ProductName)
            .IsRequired()
            .HasMaxLength(200);

        builder.Property(oi => oi.UnitPrice)
            .IsRequired()
            .HasPrecision(18, 2);

        builder.Property(oi => oi.Quantity)
            .IsRequired();

        builder.Property(oi => oi.DiscountAmount)
            .IsRequired()
            .HasPrecision(18, 2)
            .HasDefaultValue(0);

        builder.Property(oi => oi.TotalPrice)
            .IsRequired()
            .HasPrecision(18, 2);

        builder.HasOne(oi => oi.Order)
            .WithMany(o => o.Items)
            .HasForeignKey(oi => oi.OrderId)
            .OnDelete(DeleteBehavior.Cascade)
            .HasConstraintName("FK_OrderItem_Order");

        builder.HasOne(oi => oi.Product)
            .WithMany(p => p.OrderItems)
            .HasForeignKey(oi => oi.ProductId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_OrderItem_Product");

        builder.HasIndex(oi => oi.OrderId)
            .HasDatabaseName("IX_OrderItem_OrderId");

        builder.HasIndex(oi => oi.ProductId)
            .HasDatabaseName("IX_OrderItem_ProductId");

        builder.HasCheckConstraint("CK_OrderItem_Quantity", "[Quantity] > 0");
    }
}
