using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Localization;

namespace ECommerce.Infrastructure.Persistence.Configurations.Localization;

public class WarehouseTranslationConfiguration : IEntityTypeConfiguration<WarehouseTranslation>
{
    public void Configure(EntityTypeBuilder<WarehouseTranslation> builder)
    {
        builder.ToTable("WarehouseTranslation");

        builder.HasKey(wt => wt.Id);

        builder.Property(wt => wt.LanguageCode)
            .IsRequired()
            .HasMaxLength(5);

        builder.Property(wt => wt.Name)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(wt => wt.Address)
            .HasMaxLength(500);

        builder.Property(wt => wt.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasOne(wt => wt.Warehouse)
            .WithMany(w => w.Translations)
            .HasForeignKey(wt => wt.WarehouseId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_WarehouseTranslation_Warehouse");

        builder.HasOne(wt => wt.Language)
            .WithMany()
            .HasForeignKey(wt => wt.LanguageCode)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_WarehouseTranslation_Language");

        builder.HasIndex(wt => wt.WarehouseId)
            .HasDatabaseName("IX_WarehouseTranslation_WarehouseId");

        builder.HasIndex(wt => wt.LanguageCode)
            .HasDatabaseName("IX_WarehouseTranslation_LanguageCode");

        builder.HasIndex(wt => new { wt.WarehouseId, wt.LanguageCode })
            .IsUnique()
            .HasDatabaseName("UQ_WarehouseTranslation_WarehouseLang");
    }
}

public class ZoneTranslationConfiguration : IEntityTypeConfiguration<ZoneTranslation>
{
    public void Configure(EntityTypeBuilder<ZoneTranslation> builder)
    {
        builder.ToTable("ZoneTranslation");

        builder.HasKey(zt => zt.Id);

        builder.Property(zt => zt.LanguageCode)
            .IsRequired()
            .HasMaxLength(5);

        builder.Property(zt => zt.Name)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(zt => zt.Description)
            .HasMaxLength(255);

        builder.Property(zt => zt.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasOne(zt => zt.Zone)
            .WithMany(z => z.Translations)
            .HasForeignKey(zt => zt.ZoneId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_ZoneTranslation_Zone");

        builder.HasOne(zt => zt.Language)
            .WithMany()
            .HasForeignKey(zt => zt.LanguageCode)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_ZoneTranslation_Language");

        builder.HasIndex(zt => zt.ZoneId)
            .HasDatabaseName("IX_ZoneTranslation_ZoneId");

        builder.HasIndex(zt => zt.LanguageCode)
            .HasDatabaseName("IX_ZoneTranslation_LanguageCode");

        builder.HasIndex(zt => new { zt.ZoneId, zt.LanguageCode })
            .IsUnique()
            .HasDatabaseName("UQ_ZoneTranslation_ZoneLang");
    }
}

public class ShippingZoneTranslationConfiguration : IEntityTypeConfiguration<ShippingZoneTranslation>
{
    public void Configure(EntityTypeBuilder<ShippingZoneTranslation> builder)
    {
        builder.ToTable("ShippingZoneTranslation");

        builder.HasKey(szt => szt.Id);

        builder.Property(szt => szt.LanguageCode)
            .IsRequired()
            .HasMaxLength(5);

        builder.Property(szt => szt.Name)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(szt => szt.Description)
            .HasMaxLength(255);

        builder.Property(szt => szt.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasOne(szt => szt.ShippingZone)
            .WithMany(sz => sz.Translations)
            .HasForeignKey(szt => szt.ShippingZoneId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_ShippingZoneTranslation_ShippingZone");

        builder.HasOne(szt => szt.Language)
            .WithMany()
            .HasForeignKey(szt => szt.LanguageCode)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_ShippingZoneTranslation_Language");

        builder.HasIndex(szt => szt.ShippingZoneId)
            .HasDatabaseName("IX_ShippingZoneTranslation_ShippingZoneId");

        builder.HasIndex(szt => szt.LanguageCode)
            .HasDatabaseName("IX_ShippingZoneTranslation_LanguageCode");

        builder.HasIndex(szt => new { szt.ShippingZoneId, szt.LanguageCode })
            .IsUnique()
            .HasDatabaseName("UQ_ShippingZoneTranslation_ShippingZoneLang");
    }
}

public class CarrierTranslationConfiguration : IEntityTypeConfiguration<CarrierTranslation>
{
    public void Configure(EntityTypeBuilder<CarrierTranslation> builder)
    {
        builder.ToTable("CarrierTranslation");

        builder.HasKey(ct => ct.Id);

        builder.Property(ct => ct.LanguageCode)
            .IsRequired()
            .HasMaxLength(5);

        builder.Property(ct => ct.Name)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(ct => ct.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasOne(ct => ct.Carrier)
            .WithMany(c => c.Translations)
            .HasForeignKey(ct => ct.CarrierId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_CarrierTranslation_Carrier");

        builder.HasOne(ct => ct.Language)
            .WithMany()
            .HasForeignKey(ct => ct.LanguageCode)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_CarrierTranslation_Language");

        builder.HasIndex(ct => ct.CarrierId)
            .HasDatabaseName("IX_CarrierTranslation_CarrierId");

        builder.HasIndex(ct => ct.LanguageCode)
            .HasDatabaseName("IX_CarrierTranslation_LanguageCode");

        builder.HasIndex(ct => new { ct.CarrierId, ct.LanguageCode })
            .IsUnique()
            .HasDatabaseName("UQ_CarrierTranslation_CarrierLang");
    }
}

public class FeatureFlagTranslationConfiguration : IEntityTypeConfiguration<FeatureFlagTranslation>
{
    public void Configure(EntityTypeBuilder<FeatureFlagTranslation> builder)
    {
        builder.ToTable("FeatureFlagTranslation");

        builder.HasKey(fft => fft.Id);

        builder.Property(fft => fft.LanguageCode)
            .IsRequired()
            .HasMaxLength(5);

        builder.Property(fft => fft.DisplayName)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(fft => fft.Description)
            .HasMaxLength(500);

        builder.Property(fft => fft.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasOne(fft => fft.FeatureFlag)
            .WithMany(ff => ff.Translations)
            .HasForeignKey(fft => fft.FeatureFlagId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_FeatureFlagTranslation_FeatureFlag");

        builder.HasOne(fft => fft.Language)
            .WithMany()
            .HasForeignKey(fft => fft.LanguageCode)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_FeatureFlagTranslation_Language");

        builder.HasIndex(fft => fft.FeatureFlagId)
            .HasDatabaseName("IX_FeatureFlagTranslation_FeatureFlagId");

        builder.HasIndex(fft => fft.LanguageCode)
            .HasDatabaseName("IX_FeatureFlagTranslation_LanguageCode");

        builder.HasIndex(fft => new { fft.FeatureFlagId, fft.LanguageCode })
            .IsUnique()
            .HasDatabaseName("UQ_FeatureFlagTranslation");
    }
}
