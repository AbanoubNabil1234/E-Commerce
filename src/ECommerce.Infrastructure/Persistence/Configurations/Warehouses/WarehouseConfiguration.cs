using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Warehouses;

namespace ECommerce.Infrastructure.Persistence.Configurations.Warehouses;

public class WarehouseConfiguration : IEntityTypeConfiguration<Warehouse>
{
    public void Configure(EntityTypeBuilder<Warehouse> builder)
    {
        builder.ToTable("Warehouse");

        builder.HasKey(w => w.Id);

        builder.Property(w => w.Code)
            .IsRequired()
            .HasMaxLength(20);

        builder.Property(w => w.Name)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(w => w.Address)
            .IsRequired()
            .HasMaxLength(500);

        builder.Property(w => w.City)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(w => w.State)
            .HasMaxLength(100);

        builder.Property(w => w.Country)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(w => w.PostalCode)
            .HasMaxLength(20);

        builder.Property(w => w.Phone)
            .HasMaxLength(20);

        builder.Property(w => w.Email)
            .HasMaxLength(100);

        builder.Property(w => w.IsActive)
            .IsRequired()
            .HasDefaultValue(true);

        builder.Property(w => w.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasIndex(w => w.Code)
            .IsUnique()
            .HasDatabaseName("UQ_Warehouse_Code");

        builder.HasIndex(w => w.IsActive)
            .HasDatabaseName("IX_Warehouse_IsActive");
    }
}
