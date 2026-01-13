using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Support;

namespace ECommerce.Infrastructure.Persistence.Configurations.Support;

public class TicketMessageConfiguration : IEntityTypeConfiguration<TicketMessage>
{
    public void Configure(EntityTypeBuilder<TicketMessage> builder)
    {
        builder.ToTable("TicketMessage");

        builder.HasKey(tm => tm.Id);

        builder.Property(tm => tm.SenderId)
            .IsRequired()
            .HasMaxLength(450);

        builder.Property(tm => tm.Message)
            .IsRequired()
            .HasColumnType("NVARCHAR(MAX)");

        builder.Property(tm => tm.IsInternal)
            .IsRequired()
            .HasDefaultValue(false);

        builder.Property(tm => tm.AttachmentUrl)
            .HasMaxLength(500);

        builder.Property(tm => tm.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasOne(tm => tm.Ticket)
            .WithMany(t => t.Messages)
            .HasForeignKey(tm => tm.TicketId)
            .OnDelete(DeleteBehavior.Cascade)
            .HasConstraintName("FK_TicketMessage_Ticket");

        builder.HasIndex(tm => tm.TicketId)
            .HasDatabaseName("IX_TicketMessage_TicketId");

        builder.HasIndex(tm => tm.SenderId)
            .HasDatabaseName("IX_TicketMessage_SenderId");
    }
}
