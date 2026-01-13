using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Workforce;

namespace ECommerce.Infrastructure.Persistence.Configurations.Workforce;

public class WorkTaskConfiguration : IEntityTypeConfiguration<WorkTask>
{
    public void Configure(EntityTypeBuilder<WorkTask> builder)
    {
        builder.ToTable("Task");

        builder.HasKey(t => t.Id);

        builder.Property(t => t.TaskType)
            .IsRequired()
            .HasConversion<string>()
            .HasMaxLength(20);

        builder.Property(t => t.Status)
            .IsRequired()
            .HasConversion<string>()
            .HasMaxLength(20)
            .HasDefaultValue(Domain.Enums.TaskStatus.Pending);

        builder.Property(t => t.Priority)
            .IsRequired()
            .HasDefaultValue(5);

        builder.Property(t => t.Notes)
            .HasMaxLength(500);

        builder.Property(t => t.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasOne(t => t.SubOrder)
            .WithMany(so => so.Tasks)
            .HasForeignKey(t => t.SubOrderId)
            .OnDelete(DeleteBehavior.Cascade)
            .HasConstraintName("FK_Task_SubOrder");

        builder.HasOne(t => t.Worker)
            .WithMany(w => w.Tasks)
            .HasForeignKey(t => t.WorkerId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_Task_Worker");

        builder.HasIndex(t => t.SubOrderId)
            .HasDatabaseName("IX_Task_SubOrderId");

        builder.HasIndex(t => t.WorkerId)
            .HasDatabaseName("IX_Task_WorkerId");

        builder.HasIndex(t => t.TaskType)
            .HasDatabaseName("IX_Task_TaskType");

        builder.HasIndex(t => t.Status)
            .HasDatabaseName("IX_Task_Status");

        builder.HasIndex(t => t.Priority)
            .HasDatabaseName("IX_Task_Priority");
    }
}
