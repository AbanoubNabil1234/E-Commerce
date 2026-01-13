using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Shipping;

namespace ECommerce.Infrastructure.Persistence.Configurations.Shipping;

public class ShipmentTrackingConfiguration : IEntityTypeConfiguration<ShipmentTracking>
{
    public void Configure(EntityTypeBuilder<ShipmentTracking> builder)
    {
        builder.ToTable("ShipmentTracking");

        builder.HasKey(st => st.Id);

        builder.Property(st => st.Status)
            .IsRequired()
            .HasConversion<string>()
            .HasMaxLength(20);

        builder.Property(st => st.Location)
            .HasMaxLength(200);

        builder.Property(st => st.Notes)
            .HasMaxLength(500);

        builder.Property(st => st.OccurredAt)
            .IsRequired();

        builder.Property(st => st.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        // Relationships
        builder.HasOne(st => st.Shipment)
            .WithMany(s => s.TrackingHistory)
            .HasForeignKey(st => st.ShipmentId)
            .OnDelete(DeleteBehavior.Cascade)
            .HasConstraintName("FK_ShipmentTracking_Shipment");

        // Indexes
        builder.HasIndex(st => st.ShipmentId)
            .HasDatabaseName("IX_ShipmentTracking_ShipmentId");

        builder.HasIndex(st => new { st.ShipmentId, st.OccurredAt })
            .HasDatabaseName("IX_ShipmentTracking_ShipmentId_OccurredAt");
    }
}
