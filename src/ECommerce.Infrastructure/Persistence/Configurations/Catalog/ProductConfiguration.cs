using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Catalog;

namespace ECommerce.Infrastructure.Persistence.Configurations.Catalog;

public class ProductConfiguration : IEntityTypeConfiguration<Product>
{
    public void Configure(EntityTypeBuilder<Product> builder)
    {
        builder.ToTable("Product");

        builder.HasKey(p => p.Id);

        builder.Property(p => p.Id)
            .ValueGeneratedOnAdd();

        builder.Property(p => p.SKU)
            .IsRequired()
            .HasMaxLength(50);

        builder.Property(p => p.Name)
            .IsRequired()
            .HasMaxLength(200);

        builder.Property(p => p.Slug)
            .IsRequired()
            .HasMaxLength(200);

        builder.Property(p => p.Description)
            .HasColumnType("NVARCHAR(MAX)");

        builder.Property(p => p.ShortDescription)
            .HasMaxLength(500);

        builder.Property(p => p.UnitPrice)
            .IsRequired()
            .HasPrecision(18, 2);

        builder.Property(p => p.CostPrice)
            .HasPrecision(18, 2);

        builder.Property(p => p.Weight)
            .HasPrecision(10, 3);

        builder.Property(p => p.Length)
            .HasPrecision(10, 2);

        builder.Property(p => p.Width)
            .HasPrecision(10, 2);

        builder.Property(p => p.Height)
            .HasPrecision(10, 2);

        builder.Property(p => p.ImageUrl)
            .HasMaxLength(500);

        builder.Property(p => p.IsActive)
            .IsRequired()
            .HasDefaultValue(true);

        builder.Property(p => p.IsFeatured)
            .IsRequired()
            .HasDefaultValue(false);

        builder.Property(p => p.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        // Relationships
        builder.HasOne(p => p.Brand)
            .WithMany(b => b.Products)
            .HasForeignKey(p => p.BrandId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_Product_Brand");

        builder.HasOne(p => p.Category)
            .WithMany(c => c.Products)
            .HasForeignKey(p => p.CategoryId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_Product_Category");

        // Indexes
        builder.HasIndex(p => p.SKU)
            .IsUnique()
            .HasDatabaseName("UQ_Product_SKU");

        builder.HasIndex(p => p.Slug)
            .IsUnique()
            .HasDatabaseName("UQ_Product_Slug");

        builder.HasIndex(p => p.BrandId)
            .HasDatabaseName("IX_Product_BrandId");

        builder.HasIndex(p => p.CategoryId)
            .HasDatabaseName("IX_Product_CategoryId");

        builder.HasIndex(p => p.IsActive)
            .HasDatabaseName("IX_Product_IsActive");

        builder.HasIndex(p => p.IsFeatured)
            .HasDatabaseName("IX_Product_IsFeatured");

        // Composite index for product listing
        builder.HasIndex(p => new { p.IsActive, p.CategoryId, p.BrandId })
            .HasDatabaseName("IX_Product_Active_Category_Brand");
    }
}
