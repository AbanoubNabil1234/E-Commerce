using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Localization;

namespace ECommerce.Infrastructure.Persistence.Configurations.Localization;

public class LanguageConfiguration : IEntityTypeConfiguration<Language>
{
    public void Configure(EntityTypeBuilder<Language> builder)
    {
        builder.ToTable("Language");

        builder.HasKey(l => l.Code);

        builder.Property(l => l.Code)
            .HasMaxLength(5);

        builder.Property(l => l.Name)
            .IsRequired()
            .HasMaxLength(50);

        builder.Property(l => l.NativeName)
            .IsRequired()
            .HasMaxLength(50);

        builder.Property(l => l.IsRTL)
            .IsRequired()
            .HasDefaultValue(false);

        builder.Property(l => l.IsDefault)
            .IsRequired()
            .HasDefaultValue(false);

        builder.Property(l => l.IsActive)
            .IsRequired()
            .HasDefaultValue(true);

        builder.Property(l => l.DisplayOrder)
            .IsRequired()
            .HasDefaultValue(0);

        builder.Property(l => l.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");
    }
}

public class BrandTranslationConfiguration : IEntityTypeConfiguration<BrandTranslation>
{
    public void Configure(EntityTypeBuilder<BrandTranslation> builder)
    {
        builder.ToTable("BrandTranslation");

        builder.HasKey(bt => bt.Id);

        builder.Property(bt => bt.LanguageCode)
            .IsRequired()
            .HasMaxLength(5);

        builder.Property(bt => bt.Name)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(bt => bt.Description)
            .HasMaxLength(500);

        builder.Property(bt => bt.Slug)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(bt => bt.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasOne(bt => bt.Brand)
            .WithMany(b => b.Translations)
            .HasForeignKey(bt => bt.BrandId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_BrandTranslation_Brand");

        builder.HasOne(bt => bt.Language)
            .WithMany()
            .HasForeignKey(bt => bt.LanguageCode)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_BrandTranslation_Language");

        builder.HasIndex(bt => bt.BrandId)
            .HasDatabaseName("IX_BrandTranslation_BrandId");

        builder.HasIndex(bt => bt.LanguageCode)
            .HasDatabaseName("IX_BrandTranslation_LanguageCode");

        builder.HasIndex(bt => new { bt.BrandId, bt.LanguageCode })
            .IsUnique()
            .HasDatabaseName("UQ_BrandTranslation_BrandLang");

        builder.HasIndex(bt => new { bt.LanguageCode, bt.Slug })
            .IsUnique()
            .HasDatabaseName("UQ_BrandTranslation_Slug");
    }
}

public class CategoryTranslationConfiguration : IEntityTypeConfiguration<CategoryTranslation>
{
    public void Configure(EntityTypeBuilder<CategoryTranslation> builder)
    {
        builder.ToTable("CategoryTranslation");

        builder.HasKey(ct => ct.Id);

        builder.Property(ct => ct.LanguageCode)
            .IsRequired()
            .HasMaxLength(5);

        builder.Property(ct => ct.Name)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(ct => ct.Description)
            .HasMaxLength(500);

        builder.Property(ct => ct.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasOne(ct => ct.Category)
            .WithMany(c => c.Translations)
            .HasForeignKey(ct => ct.CategoryId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_CategoryTranslation_Category");

        builder.HasOne(ct => ct.Language)
            .WithMany()
            .HasForeignKey(ct => ct.LanguageCode)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_CategoryTranslation_Language");

        builder.HasIndex(ct => ct.CategoryId)
            .HasDatabaseName("IX_CategoryTranslation_CategoryId");

        builder.HasIndex(ct => ct.LanguageCode)
            .HasDatabaseName("IX_CategoryTranslation_LanguageCode");

        builder.HasIndex(ct => new { ct.CategoryId, ct.LanguageCode })
            .IsUnique()
            .HasDatabaseName("UQ_CategoryTranslation_CategoryLang");
    }
}

public class ProductTranslationConfiguration : IEntityTypeConfiguration<ProductTranslation>
{
    public void Configure(EntityTypeBuilder<ProductTranslation> builder)
    {
        builder.ToTable("ProductTranslation");

        builder.HasKey(pt => pt.Id);

        builder.Property(pt => pt.LanguageCode)
            .IsRequired()
            .HasMaxLength(5);

        builder.Property(pt => pt.Name)
            .IsRequired()
            .HasMaxLength(200);

        builder.Property(pt => pt.ShortDescription)
            .HasMaxLength(500);

        builder.Property(pt => pt.Description)
            .HasColumnType("NVARCHAR(MAX)");

        builder.Property(pt => pt.MetaTitle)
            .HasMaxLength(100);

        builder.Property(pt => pt.MetaDescription)
            .HasMaxLength(200);

        builder.Property(pt => pt.MetaKeywords)
            .HasMaxLength(200);

        builder.Property(pt => pt.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasOne(pt => pt.Product)
            .WithMany(p => p.Translations)
            .HasForeignKey(pt => pt.ProductId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_ProductTranslation_Product");

        builder.HasOne(pt => pt.Language)
            .WithMany()
            .HasForeignKey(pt => pt.LanguageCode)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_ProductTranslation_Language");

        builder.HasIndex(pt => pt.ProductId)
            .HasDatabaseName("IX_ProductTranslation_ProductId");

        builder.HasIndex(pt => pt.LanguageCode)
            .HasDatabaseName("IX_ProductTranslation_LanguageCode");

        builder.HasIndex(pt => new { pt.ProductId, pt.LanguageCode })
            .IsUnique()
            .HasDatabaseName("UQ_ProductTranslation_ProductLang");
    }
}
