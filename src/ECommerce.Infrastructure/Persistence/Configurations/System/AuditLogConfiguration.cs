using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.System;

namespace ECommerce.Infrastructure.Persistence.Configurations.System;

public class AuditLogConfiguration : IEntityTypeConfiguration<AuditLog>
{
    public void Configure(EntityTypeBuilder<AuditLog> builder)
    {
        builder.ToTable("AuditLog");

        builder.HasKey(a => a.Id);

        builder.Property(a => a.Id)
            .ValueGeneratedOnAdd();

        builder.Property(a => a.UserId)
            .HasMaxLength(450);

        builder.Property(a => a.Action)
            .IsRequired()
            .HasMaxLength(50);

        builder.Property(a => a.EntityType)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(a => a.EntityId)
            .HasMaxLength(50);

        builder.Property(a => a.OldValues)
            .HasColumnType("NVARCHAR(MAX)");

        builder.Property(a => a.NewValues)
            .HasColumnType("NVARCHAR(MAX)");

        builder.Property(a => a.IpAddress)
            .HasMaxLength(45);

        builder.Property(a => a.UserAgent)
            .HasMaxLength(500);

        builder.Property(a => a.Timestamp)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasIndex(a => a.UserId)
            .HasDatabaseName("IX_AuditLog_UserId");

        builder.HasIndex(a => a.EntityType)
            .HasDatabaseName("IX_AuditLog_EntityType");

        builder.HasIndex(a => a.EntityId)
            .HasDatabaseName("IX_AuditLog_EntityId");

        builder.HasIndex(a => a.Timestamp)
            .HasDatabaseName("IX_AuditLog_Timestamp");

        builder.HasIndex(a => a.Action)
            .HasDatabaseName("IX_AuditLog_Action");
    }
}
