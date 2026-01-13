using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Orders;

namespace ECommerce.Infrastructure.Persistence.Configurations.Orders;

public class SubOrderItemConfiguration : IEntityTypeConfiguration<SubOrderItem>
{
    public void Configure(EntityTypeBuilder<SubOrderItem> builder)
    {
        builder.ToTable("SubOrderItem");

        builder.HasKey(soi => soi.Id);

        builder.Property(soi => soi.Quantity)
            .IsRequired();

        builder.Property(soi => soi.PickedQuantity)
            .IsRequired()
            .HasDefaultValue(0);

        builder.HasOne(soi => soi.SubOrder)
            .WithMany(so => so.Items)
            .HasForeignKey(soi => soi.SubOrderId)
            .OnDelete(DeleteBehavior.Cascade)
            .HasConstraintName("FK_SubOrderItem_SubOrder");

        builder.HasOne(soi => soi.OrderItem)
            .WithMany(oi => oi.SubOrderItems)
            .HasForeignKey(soi => soi.OrderItemId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_SubOrderItem_OrderItem");

        builder.HasOne(soi => soi.Product)
            .WithMany()
            .HasForeignKey(soi => soi.ProductId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_SubOrderItem_Product");

        builder.HasOne(soi => soi.Bin)
            .WithMany()
            .HasForeignKey(soi => soi.BinId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_SubOrderItem_Bin");

        builder.HasIndex(soi => soi.SubOrderId)
            .HasDatabaseName("IX_SubOrderItem_SubOrderId");
    }
}
