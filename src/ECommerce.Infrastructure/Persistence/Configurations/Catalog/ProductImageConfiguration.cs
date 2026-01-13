using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Catalog;

namespace ECommerce.Infrastructure.Persistence.Configurations.Catalog;

public class ProductImageConfiguration : IEntityTypeConfiguration<ProductImage>
{
    public void Configure(EntityTypeBuilder<ProductImage> builder)
    {
        builder.ToTable("ProductImage");

        builder.HasKey(pi => pi.Id);

        builder.Property(pi => pi.Id)
            .ValueGeneratedOnAdd();

        builder.Property(pi => pi.ImageUrl)
            .IsRequired()
            .HasMaxLength(500);

        builder.Property(pi => pi.AltText)
            .HasMaxLength(200);

        builder.Property(pi => pi.DisplayOrder)
            .IsRequired()
            .HasDefaultValue(0);

        builder.Property(pi => pi.IsPrimary)
            .IsRequired()
            .HasDefaultValue(false);

        builder.Property(pi => pi.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        // Relationship
        builder.HasOne(pi => pi.Product)
            .WithMany(p => p.Images)
            .HasForeignKey(pi => pi.ProductId)
            .OnDelete(DeleteBehavior.Cascade)
            .HasConstraintName("FK_ProductImage_Product");

        // Index
        builder.HasIndex(pi => pi.ProductId)
            .HasDatabaseName("IX_ProductImage_ProductId");
    }
}
