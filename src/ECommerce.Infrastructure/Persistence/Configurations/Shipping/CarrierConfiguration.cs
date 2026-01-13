using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Shipping;

namespace ECommerce.Infrastructure.Persistence.Configurations.Shipping;

public class CarrierConfiguration : IEntityTypeConfiguration<Carrier>
{
    public void Configure(EntityTypeBuilder<Carrier> builder)
    {
        builder.ToTable("Carrier");

        builder.HasKey(c => c.Id);

        builder.Property(c => c.Name)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(c => c.Code)
            .IsRequired()
            .HasMaxLength(20);

        builder.Property(c => c.TrackingUrlTemplate)
            .HasMaxLength(500);

        builder.Property(c => c.ContactPhone)
            .HasMaxLength(20);

        builder.Property(c => c.ContactEmail)
            .HasMaxLength(100);

        builder.Property(c => c.IsActive)
            .IsRequired()
            .HasDefaultValue(true);

        builder.Property(c => c.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasIndex(c => c.Code)
            .IsUnique()
            .HasDatabaseName("UQ_Carrier_Code");
    }
}
