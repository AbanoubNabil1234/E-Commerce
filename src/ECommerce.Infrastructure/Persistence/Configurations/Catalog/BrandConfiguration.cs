using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Catalog;

namespace ECommerce.Infrastructure.Persistence.Configurations.Catalog;

public class BrandConfiguration : IEntityTypeConfiguration<Brand>
{
    public void Configure(EntityTypeBuilder<Brand> builder)
    {
        builder.ToTable("Brand");

        builder.HasKey(b => b.Id);

        builder.Property(b => b.Id)
            .ValueGeneratedOnAdd();

        builder.Property(b => b.Name)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(b => b.Slug)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(b => b.Description)
            .HasMaxLength(500);

        builder.Property(b => b.LogoUrl)
            .HasMaxLength(500);

        builder.Property(b => b.Website)
            .HasMaxLength(255);

        builder.Property(b => b.IsActive)
            .IsRequired()
            .HasDefaultValue(true);

        builder.Property(b => b.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        // Indexes
        builder.HasIndex(b => b.Slug)
            .IsUnique()
            .HasDatabaseName("UQ_Brand_Slug");

        builder.HasIndex(b => b.IsActive)
            .HasDatabaseName("IX_Brand_IsActive");

        builder.HasIndex(b => b.Name)
            .HasDatabaseName("IX_Brand_Name");
    }
}
