using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Catalog;

namespace ECommerce.Infrastructure.Persistence.Configurations.Catalog;

public class CategoryConfiguration : IEntityTypeConfiguration<Category>
{
    public void Configure(EntityTypeBuilder<Category> builder)
    {
        builder.ToTable("Category");

        builder.HasKey(c => c.Id);

        builder.Property(c => c.Id)
            .ValueGeneratedOnAdd();

        builder.Property(c => c.Name)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(c => c.Slug)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(c => c.Description)
            .HasMaxLength(500);

        builder.Property(c => c.ImageUrl)
            .HasMaxLength(500);

        builder.Property(c => c.DisplayOrder)
            .IsRequired()
            .HasDefaultValue(0);

        builder.Property(c => c.Level)
            .IsRequired()
            .HasDefaultValue(0);

        builder.Property(c => c.IsActive)
            .IsRequired()
            .HasDefaultValue(true);

        builder.Property(c => c.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        // Self-referencing relationship
        builder.HasOne(c => c.Parent)
            .WithMany(c => c.Children)
            .HasForeignKey(c => c.ParentId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_Category_Parent");

        // Indexes
        builder.HasIndex(c => c.Slug)
            .IsUnique()
            .HasDatabaseName("UQ_Category_Slug");

        builder.HasIndex(c => c.ParentId)
            .HasDatabaseName("IX_Category_ParentId");

        builder.HasIndex(c => c.IsActive)
            .HasDatabaseName("IX_Category_IsActive");
    }
}
