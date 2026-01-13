using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Warehouses;

namespace ECommerce.Infrastructure.Persistence.Configurations.Warehouses;

public class ZoneConfiguration : IEntityTypeConfiguration<Zone>
{
    public void Configure(EntityTypeBuilder<Zone> builder)
    {
        builder.ToTable("Zone");

        builder.HasKey(z => z.Id);

        builder.Property(z => z.Code)
            .IsRequired()
            .HasMaxLength(20);

        builder.Property(z => z.Name)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(z => z.Description)
            .HasMaxLength(255);

        builder.Property(z => z.ZoneType)
            .IsRequired()
            .HasConversion<string>()
            .HasMaxLength(50);

        builder.Property(z => z.IsActive)
            .IsRequired()
            .HasDefaultValue(true);

        builder.Property(z => z.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasOne(z => z.Warehouse)
            .WithMany(w => w.Zones)
            .HasForeignKey(z => z.WarehouseId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_Zone_Warehouse");

        builder.HasIndex(z => new { z.WarehouseId, z.Code })
            .IsUnique()
            .HasDatabaseName("UQ_Zone_WarehouseCode");

        builder.HasIndex(z => z.WarehouseId)
            .HasDatabaseName("IX_Zone_WarehouseId");
    }
}
