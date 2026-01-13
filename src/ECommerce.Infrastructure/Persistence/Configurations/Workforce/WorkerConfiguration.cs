using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Workforce;

namespace ECommerce.Infrastructure.Persistence.Configurations.Workforce;

public class WorkerConfiguration : IEntityTypeConfiguration<Worker>
{
    public void Configure(EntityTypeBuilder<Worker> builder)
    {
        builder.ToTable("Worker");

        builder.HasKey(w => w.Id);

        builder.Property(w => w.UserId)
            .IsRequired()
            .HasMaxLength(450);

        builder.Property(w => w.EmployeeCode)
            .IsRequired()
            .HasMaxLength(20);

        builder.Property(w => w.Position)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(w => w.HireDate)
            .IsRequired();

        builder.Property(w => w.HourlyRate)
            .HasPrecision(10, 2);

        builder.Property(w => w.IsActive)
            .IsRequired()
            .HasDefaultValue(true);

        builder.Property(w => w.CreatedAt)
            .IsRequired()
            .HasDefaultValueSql("GETDATE()");

        builder.HasOne(w => w.Warehouse)
            .WithMany(wh => wh.Workers)
            .HasForeignKey(w => w.WarehouseId)
            .OnDelete(DeleteBehavior.NoAction)
            .HasConstraintName("FK_Worker_Warehouse");

        builder.HasIndex(w => w.UserId)
            .IsUnique()
            .HasDatabaseName("UQ_Worker_UserId");

        builder.HasIndex(w => w.EmployeeCode)
            .IsUnique()
            .HasDatabaseName("UQ_Worker_EmployeeCode");

        builder.HasIndex(w => w.WarehouseId)
            .HasDatabaseName("IX_Worker_WarehouseId");

        builder.HasIndex(w => w.IsActive)
            .HasDatabaseName("IX_Worker_IsActive");
    }
}
