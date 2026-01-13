using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.System;

namespace ECommerce.Infrastructure.Persistence.Configurations.System;

public class FeatureFlagConfiguration : IEntityTypeConfiguration<FeatureFlag>
{
    public void Configure(EntityTypeBuilder<FeatureFlag> builder)
    {
        builder.ToTable("FeatureFlag");

        builder.HasKey(f => f.Id);

        builder.Property(f => f.FeatureKey)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(f => f.DisplayName)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(f => f.Description)
            .HasMaxLength(500);

        builder.Property(f => f.IsEnabled)
            .IsRequired()
            .HasDefaultValue(false);

        builder.Property(f => f.EnabledForRoles)
            .HasMaxLength(500);

        builder.Property(f => f.EnabledForUsers)
            .HasColumnType("NVARCHAR(MAX)");

        builder.Property(f => f.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasIndex(f => f.FeatureKey)
            .IsUnique()
            .HasDatabaseName("UQ_FeatureFlag_Key");
    }
}
