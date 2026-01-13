using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Support;

namespace ECommerce.Infrastructure.Persistence.Configurations.Support;

public class TicketConfiguration : IEntityTypeConfiguration<Ticket>
{
    public void Configure(EntityTypeBuilder<Ticket> builder)
    {
        builder.ToTable("Ticket");

        builder.HasKey(t => t.Id);

        builder.Property(t => t.TicketNumber)
            .IsRequired()
            .HasMaxLength(20);

        builder.Property(t => t.CustomerId)
            .IsRequired()
            .HasMaxLength(450);

        builder.Property(t => t.Category)
            .IsRequired()
            .HasMaxLength(50);

        builder.Property(t => t.Subject)
            .IsRequired()
            .HasMaxLength(200);

        builder.Property(t => t.Priority)
            .IsRequired()
            .HasConversion<string>()
            .HasMaxLength(20)
            .HasDefaultValue(Domain.Enums.TicketPriority.Normal);

        builder.Property(t => t.Status)
            .IsRequired()
            .HasConversion<string>()
            .HasMaxLength(20)
            .HasDefaultValue(Domain.Enums.TicketStatus.Open);

        builder.Property(t => t.AssignedTo)
            .HasMaxLength(450);

        builder.Property(t => t.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasOne(t => t.Order)
            .WithMany()
            .HasForeignKey(t => t.OrderId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_Ticket_Order");

        builder.HasIndex(t => t.TicketNumber)
            .IsUnique()
            .HasDatabaseName("UQ_Ticket_Number");

        builder.HasIndex(t => t.CustomerId)
            .HasDatabaseName("IX_Ticket_CustomerId");

        builder.HasIndex(t => t.OrderId)
            .HasDatabaseName("IX_Ticket_OrderId");

        builder.HasIndex(t => t.Status)
            .HasDatabaseName("IX_Ticket_Status");

        builder.HasIndex(t => t.AssignedTo)
            .HasDatabaseName("IX_Ticket_AssignedTo");
    }
}
