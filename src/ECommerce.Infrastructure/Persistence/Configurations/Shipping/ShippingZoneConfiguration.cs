using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Shipping;

namespace ECommerce.Infrastructure.Persistence.Configurations.Shipping;

public class ShippingZoneConfiguration : IEntityTypeConfiguration<ShippingZone>
{
    public void Configure(EntityTypeBuilder<ShippingZone> builder)
    {
        builder.ToTable("ShippingZone");

        builder.HasKey(sz => sz.Id);

        builder.Property(sz => sz.Name)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(sz => sz.Description)
            .HasMaxLength(255);

        builder.Property(sz => sz.Countries)
            .HasMaxLength(500);

        builder.Property(sz => sz.States)
            .HasMaxLength(500);

        builder.Property(sz => sz.PostalCodePattern)
            .HasMaxLength(100);

        builder.Property(sz => sz.BaseRate)
            .IsRequired()
            .HasPrecision(18, 2);

        builder.Property(sz => sz.PerKgRate)
            .IsRequired()
            .HasPrecision(18, 2)
            .HasDefaultValue(0);

        builder.Property(sz => sz.EstimatedDays)
            .IsRequired();

        builder.Property(sz => sz.IsActive)
            .IsRequired()
            .HasDefaultValue(true);

        builder.Property(sz => sz.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasIndex(sz => sz.Name)
            .IsUnique()
            .HasDatabaseName("UQ_ShippingZone_Name");
    }
}
