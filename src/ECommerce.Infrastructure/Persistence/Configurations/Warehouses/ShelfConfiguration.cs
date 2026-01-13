using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Warehouses;

namespace ECommerce.Infrastructure.Persistence.Configurations.Warehouses;

public class ShelfConfiguration : IEntityTypeConfiguration<Shelf>
{
    public void Configure(EntityTypeBuilder<Shelf> builder)
    {
        builder.ToTable("Shelf");

        builder.HasKey(s => s.Id);

        builder.Property(s => s.Code)
            .IsRequired()
            .HasMaxLength(20);

        builder.Property(s => s.Level)
            .IsRequired();

        builder.Property(s => s.MaxWeight)
            .HasPrecision(10, 2);

        builder.Property(s => s.IsActive)
            .IsRequired()
            .HasDefaultValue(true);

        builder.Property(s => s.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasOne(s => s.Aisle)
            .WithMany(a => a.Shelves)
            .HasForeignKey(s => s.AisleId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_Shelf_Aisle");

        builder.HasIndex(s => new { s.AisleId, s.Code })
            .IsUnique()
            .HasDatabaseName("UQ_Shelf_AisleCode");

        builder.HasIndex(s => s.AisleId)
            .HasDatabaseName("IX_Shelf_AisleId");
    }
}
