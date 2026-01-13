using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Warehouses;

namespace ECommerce.Infrastructure.Persistence.Configurations.Warehouses;

public class AisleConfiguration : IEntityTypeConfiguration<Aisle>
{
    public void Configure(EntityTypeBuilder<Aisle> builder)
    {
        builder.ToTable("Aisle");

        builder.HasKey(a => a.Id);

        builder.Property(a => a.Code)
            .IsRequired()
            .HasMaxLength(20);

        builder.Property(a => a.Name)
            .HasMaxLength(100);

        builder.Property(a => a.IsActive)
            .IsRequired()
            .HasDefaultValue(true);

        builder.Property(a => a.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasOne(a => a.Zone)
            .WithMany(z => z.Aisles)
            .HasForeignKey(a => a.ZoneId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_Aisle_Zone");

        builder.HasIndex(a => new { a.ZoneId, a.Code })
            .IsUnique()
            .HasDatabaseName("UQ_Aisle_ZoneCode");

        builder.HasIndex(a => a.ZoneId)
            .HasDatabaseName("IX_Aisle_ZoneId");
    }
}
