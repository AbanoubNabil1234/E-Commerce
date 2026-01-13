using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.System;

namespace ECommerce.Infrastructure.Persistence.Configurations.System;

public class SystemSettingConfiguration : IEntityTypeConfiguration<SystemSetting>
{
    public void Configure(EntityTypeBuilder<SystemSetting> builder)
    {
        builder.ToTable("SystemSetting");

        builder.HasKey(s => s.Id);

        builder.Property(s => s.SettingKey)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(s => s.SettingValue)
            .IsRequired()
            .HasColumnType("NVARCHAR(MAX)");

        builder.Property(s => s.DataType)
            .IsRequired()
            .HasMaxLength(20)
            .HasDefaultValue("String");

        builder.Property(s => s.Description)
            .HasMaxLength(500);

        builder.Property(s => s.IsEncrypted)
            .IsRequired()
            .HasDefaultValue(false);

        builder.Property(s => s.UpdatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.Property(s => s.UpdatedBy)
            .HasMaxLength(450);

        builder.HasIndex(s => s.SettingKey)
            .IsUnique()
            .HasDatabaseName("UQ_SystemSetting_Key");
    }
}
