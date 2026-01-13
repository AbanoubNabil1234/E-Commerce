using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ECommerce.Domain.Entities.Lookups;

namespace ECommerce.Infrastructure.Persistence.Configurations.Lookups;

// ============================================================================
// LOOKUP CONFIGURATIONS
// ============================================================================

public class OrderStatusLookupConfiguration : IEntityTypeConfiguration<OrderStatusLookup>
{
    public void Configure(EntityTypeBuilder<OrderStatusLookup> builder)
    {
        builder.ToTable("OrderStatusLookup");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Code).IsRequired().HasMaxLength(50);
        builder.Property(x => x.IsActive).HasDefaultValue(true);
        builder.Property(x => x.CreatedAt).HasDefaultValueSql("GETDATE()");
        builder.HasIndex(x => x.Code).IsUnique().HasDatabaseName("UQ_OrderStatusLookup_Code");
    }
}

public class PaymentStatusLookupConfiguration : IEntityTypeConfiguration<PaymentStatusLookup>
{
    public void Configure(EntityTypeBuilder<PaymentStatusLookup> builder)
    {
        builder.ToTable("PaymentStatusLookup");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Code).IsRequired().HasMaxLength(50);
        builder.Property(x => x.IsActive).HasDefaultValue(true);
        builder.Property(x => x.CreatedAt).HasDefaultValueSql("GETDATE()");
        builder.HasIndex(x => x.Code).IsUnique().HasDatabaseName("UQ_PaymentStatusLookup_Code");
    }
}

public class ShipmentStatusLookupConfiguration : IEntityTypeConfiguration<ShipmentStatusLookup>
{
    public void Configure(EntityTypeBuilder<ShipmentStatusLookup> builder)
    {
        builder.ToTable("ShipmentStatusLookup");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Code).IsRequired().HasMaxLength(50);
        builder.Property(x => x.IsActive).HasDefaultValue(true);
        builder.Property(x => x.CreatedAt).HasDefaultValueSql("GETDATE()");
        builder.HasIndex(x => x.Code).IsUnique().HasDatabaseName("UQ_ShipmentStatusLookup_Code");
    }
}

public class TaskTypeLookupConfiguration : IEntityTypeConfiguration<TaskTypeLookup>
{
    public void Configure(EntityTypeBuilder<TaskTypeLookup> builder)
    {
        builder.ToTable("TaskTypeLookup");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Code).IsRequired().HasMaxLength(50);
        builder.Property(x => x.IsActive).HasDefaultValue(true);
        builder.Property(x => x.CreatedAt).HasDefaultValueSql("GETDATE()");
        builder.HasIndex(x => x.Code).IsUnique().HasDatabaseName("UQ_TaskTypeLookup_Code");
    }
}

public class TaskStatusLookupConfiguration : IEntityTypeConfiguration<TaskStatusLookup>
{
    public void Configure(EntityTypeBuilder<TaskStatusLookup> builder)
    {
        builder.ToTable("TaskStatusLookup");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Code).IsRequired().HasMaxLength(50);
        builder.Property(x => x.IsActive).HasDefaultValue(true);
        builder.Property(x => x.CreatedAt).HasDefaultValueSql("GETDATE()");
        builder.HasIndex(x => x.Code).IsUnique().HasDatabaseName("UQ_TaskStatusLookup_Code");
    }
}

public class TicketPriorityLookupConfiguration : IEntityTypeConfiguration<TicketPriorityLookup>
{
    public void Configure(EntityTypeBuilder<TicketPriorityLookup> builder)
    {
        builder.ToTable("TicketPriorityLookup");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Code).IsRequired().HasMaxLength(50);
        builder.Property(x => x.IsActive).HasDefaultValue(true);
        builder.Property(x => x.CreatedAt).HasDefaultValueSql("GETDATE()");
        builder.HasIndex(x => x.Code).IsUnique().HasDatabaseName("UQ_TicketPriorityLookup_Code");
    }
}

public class TicketStatusLookupConfiguration : IEntityTypeConfiguration<TicketStatusLookup>
{
    public void Configure(EntityTypeBuilder<TicketStatusLookup> builder)
    {
        builder.ToTable("TicketStatusLookup");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Code).IsRequired().HasMaxLength(50);
        builder.Property(x => x.IsActive).HasDefaultValue(true);
        builder.Property(x => x.CreatedAt).HasDefaultValueSql("GETDATE()");
        builder.HasIndex(x => x.Code).IsUnique().HasDatabaseName("UQ_TicketStatusLookup_Code");
    }
}

public class TicketCategoryLookupConfiguration : IEntityTypeConfiguration<TicketCategoryLookup>
{
    public void Configure(EntityTypeBuilder<TicketCategoryLookup> builder)
    {
        builder.ToTable("TicketCategoryLookup");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Code).IsRequired().HasMaxLength(50);
        builder.Property(x => x.IsActive).HasDefaultValue(true);
        builder.Property(x => x.CreatedAt).HasDefaultValueSql("GETDATE()");
        builder.HasIndex(x => x.Code).IsUnique().HasDatabaseName("UQ_TicketCategoryLookup_Code");
    }
}


// ============================================================================
// LOOKUP TRANSLATION CONFIGURATIONS
// ============================================================================

public class OrderStatusTranslationConfiguration : IEntityTypeConfiguration<OrderStatusTranslation>
{
    public void Configure(EntityTypeBuilder<OrderStatusTranslation> builder)
    {
        builder.ToTable("OrderStatusTranslation");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.LanguageCode).IsRequired().HasMaxLength(5);
        builder.Property(x => x.DisplayName).IsRequired().HasMaxLength(100);
        builder.Property(x => x.Description).HasMaxLength(255);
        builder.Property(x => x.CreatedAt).HasDefaultValueSql("GETDATE()");
        
        builder.HasOne(x => x.OrderStatus)
            .WithMany(x => x.Translations)
            .HasForeignKey(x => x.OrderStatusId)
            .OnDelete(DeleteBehavior.NoAction);
        
        builder.HasIndex(x => new { x.OrderStatusId, x.LanguageCode })
            .IsUnique()
            .HasDatabaseName("UQ_OrderStatusTranslation");
    }
}

public class PaymentStatusTranslationConfiguration : IEntityTypeConfiguration<PaymentStatusTranslation>
{
    public void Configure(EntityTypeBuilder<PaymentStatusTranslation> builder)
    {
        builder.ToTable("PaymentStatusTranslation");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.LanguageCode).IsRequired().HasMaxLength(5);
        builder.Property(x => x.DisplayName).IsRequired().HasMaxLength(100);
        builder.Property(x => x.Description).HasMaxLength(255);
        builder.Property(x => x.CreatedAt).HasDefaultValueSql("GETDATE()");
        
        builder.HasOne(x => x.PaymentStatus)
            .WithMany(x => x.Translations)
            .HasForeignKey(x => x.PaymentStatusId)
            .OnDelete(DeleteBehavior.NoAction);
        
        builder.HasIndex(x => new { x.PaymentStatusId, x.LanguageCode })
            .IsUnique()
            .HasDatabaseName("UQ_PaymentStatusTranslation");
    }
}

public class ShipmentStatusTranslationConfiguration : IEntityTypeConfiguration<ShipmentStatusTranslation>
{
    public void Configure(EntityTypeBuilder<ShipmentStatusTranslation> builder)
    {
        builder.ToTable("ShipmentStatusTranslation");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.LanguageCode).IsRequired().HasMaxLength(5);
        builder.Property(x => x.DisplayName).IsRequired().HasMaxLength(100);
        builder.Property(x => x.Description).HasMaxLength(255);
        builder.Property(x => x.CreatedAt).HasDefaultValueSql("GETDATE()");
        
        builder.HasOne(x => x.ShipmentStatus)
            .WithMany(x => x.Translations)
            .HasForeignKey(x => x.ShipmentStatusId)
            .OnDelete(DeleteBehavior.NoAction);
        
        builder.HasIndex(x => new { x.ShipmentStatusId, x.LanguageCode })
            .IsUnique()
            .HasDatabaseName("UQ_ShipmentStatusTranslation");
    }
}

public class TaskTypeTranslationConfiguration : IEntityTypeConfiguration<TaskTypeTranslation>
{
    public void Configure(EntityTypeBuilder<TaskTypeTranslation> builder)
    {
        builder.ToTable("TaskTypeTranslation");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.LanguageCode).IsRequired().HasMaxLength(5);
        builder.Property(x => x.DisplayName).IsRequired().HasMaxLength(100);
        builder.Property(x => x.Description).HasMaxLength(255);
        builder.Property(x => x.CreatedAt).HasDefaultValueSql("GETDATE()");
        
        builder.HasOne(x => x.TaskType)
            .WithMany(x => x.Translations)
            .HasForeignKey(x => x.TaskTypeId)
            .OnDelete(DeleteBehavior.NoAction);
        
        builder.HasIndex(x => new { x.TaskTypeId, x.LanguageCode })
            .IsUnique()
            .HasDatabaseName("UQ_TaskTypeTranslation");
    }
}

public class TaskStatusTranslationConfiguration : IEntityTypeConfiguration<TaskStatusTranslation>
{
    public void Configure(EntityTypeBuilder<TaskStatusTranslation> builder)
    {
        builder.ToTable("TaskStatusTranslation");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.LanguageCode).IsRequired().HasMaxLength(5);
        builder.Property(x => x.DisplayName).IsRequired().HasMaxLength(100);
        builder.Property(x => x.Description).HasMaxLength(255);
        builder.Property(x => x.CreatedAt).HasDefaultValueSql("GETDATE()");
        
        builder.HasOne(x => x.TaskStatus)
            .WithMany(x => x.Translations)
            .HasForeignKey(x => x.TaskStatusId)
            .OnDelete(DeleteBehavior.NoAction);
        
        builder.HasIndex(x => new { x.TaskStatusId, x.LanguageCode })
            .IsUnique()
            .HasDatabaseName("UQ_TaskStatusTranslation");
    }
}

public class TicketPriorityTranslationConfiguration : IEntityTypeConfiguration<TicketPriorityTranslation>
{
    public void Configure(EntityTypeBuilder<TicketPriorityTranslation> builder)
    {
        builder.ToTable("TicketPriorityTranslation");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.LanguageCode).IsRequired().HasMaxLength(5);
        builder.Property(x => x.DisplayName).IsRequired().HasMaxLength(100);
        builder.Property(x => x.CreatedAt).HasDefaultValueSql("GETDATE()");
        
        builder.HasOne(x => x.TicketPriority)
            .WithMany(x => x.Translations)
            .HasForeignKey(x => x.TicketPriorityId)
            .OnDelete(DeleteBehavior.NoAction);
        
        builder.HasIndex(x => new { x.TicketPriorityId, x.LanguageCode })
            .IsUnique()
            .HasDatabaseName("UQ_TicketPriorityTranslation");
    }
}

public class TicketStatusTranslationConfiguration : IEntityTypeConfiguration<TicketStatusTranslation>
{
    public void Configure(EntityTypeBuilder<TicketStatusTranslation> builder)
    {
        builder.ToTable("TicketStatusTranslation");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.LanguageCode).IsRequired().HasMaxLength(5);
        builder.Property(x => x.DisplayName).IsRequired().HasMaxLength(100);
        builder.Property(x => x.Description).HasMaxLength(255);
        builder.Property(x => x.CreatedAt).HasDefaultValueSql("GETDATE()");
        
        builder.HasOne(x => x.TicketStatus)
            .WithMany(x => x.Translations)
            .HasForeignKey(x => x.TicketStatusId)
            .OnDelete(DeleteBehavior.NoAction);
        
        builder.HasIndex(x => new { x.TicketStatusId, x.LanguageCode })
            .IsUnique()
            .HasDatabaseName("UQ_TicketStatusTranslation");
    }
}

public class TicketCategoryTranslationConfiguration : IEntityTypeConfiguration<TicketCategoryTranslation>
{
    public void Configure(EntityTypeBuilder<TicketCategoryTranslation> builder)
    {
        builder.ToTable("TicketCategoryTranslation");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.LanguageCode).IsRequired().HasMaxLength(5);
        builder.Property(x => x.DisplayName).IsRequired().HasMaxLength(100);
        builder.Property(x => x.Description).HasMaxLength(255);
        builder.Property(x => x.CreatedAt).HasDefaultValueSql("GETDATE()");
        
        builder.HasOne(x => x.TicketCategory)
            .WithMany(x => x.Translations)
            .HasForeignKey(x => x.TicketCategoryId)
            .OnDelete(DeleteBehavior.NoAction);
        
        builder.HasIndex(x => new { x.TicketCategoryId, x.LanguageCode })
            .IsUnique()
            .HasDatabaseName("UQ_TicketCategoryTranslation");
    }
}
