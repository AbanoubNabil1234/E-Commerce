using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Orders;

namespace ECommerce.Infrastructure.Persistence.Configurations.Orders;

public class SubOrderConfiguration : IEntityTypeConfiguration<SubOrder>
{
    public void Configure(EntityTypeBuilder<SubOrder> builder)
    {
        builder.ToTable("SubOrder");

        builder.HasKey(so => so.Id);

        builder.Property(so => so.SubOrderNumber)
            .IsRequired()
            .HasMaxLength(30);

        builder.Property(so => so.Status)
            .IsRequired()
            .HasConversion<string>()
            .HasMaxLength(20)
            .HasDefaultValue(Domain.Enums.SubOrderStatus.Pending);

        builder.Property(so => so.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasOne(so => so.Order)
            .WithMany(o => o.SubOrders)
            .HasForeignKey(so => so.OrderId)
            .OnDelete(DeleteBehavior.Cascade)
            .HasConstraintName("FK_SubOrder_Order");

        builder.HasOne(so => so.Warehouse)
            .WithMany(w => w.SubOrders)
            .HasForeignKey(so => so.WarehouseId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_SubOrder_Warehouse");

        builder.HasIndex(so => so.SubOrderNumber)
            .IsUnique()
            .HasDatabaseName("UQ_SubOrder_Number");

        builder.HasIndex(so => so.OrderId)
            .HasDatabaseName("IX_SubOrder_OrderId");

        builder.HasIndex(so => so.WarehouseId)
            .HasDatabaseName("IX_SubOrder_WarehouseId");

        builder.HasIndex(so => so.Status)
            .HasDatabaseName("IX_SubOrder_Status");
    }
}
