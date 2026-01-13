using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Warehouses;

namespace ECommerce.Infrastructure.Persistence.Configurations.Warehouses;

public class BinConfiguration : IEntityTypeConfiguration<Bin>
{
    public void Configure(EntityTypeBuilder<Bin> builder)
    {
        builder.ToTable("Bin");

        builder.HasKey(b => b.Id);

        builder.Property(b => b.Code)
            .IsRequired()
            .HasMaxLength(50);

        builder.Property(b => b.Barcode)
            .HasMaxLength(50);

        builder.Property(b => b.IsActive)
            .IsRequired()
            .HasDefaultValue(true);

        builder.Property(b => b.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasOne(b => b.Shelf)
            .WithMany(s => s.Bins)
            .HasForeignKey(b => b.ShelfId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_Bin_Shelf");

        builder.HasIndex(b => new { b.ShelfId, b.Code })
            .IsUnique()
            .HasDatabaseName("UQ_Bin_ShelfCode");

        builder.HasIndex(b => b.ShelfId)
            .HasDatabaseName("IX_Bin_ShelfId");

        builder.HasIndex(b => b.Barcode)
            .HasDatabaseName("IX_Bin_Barcode");
    }
}
