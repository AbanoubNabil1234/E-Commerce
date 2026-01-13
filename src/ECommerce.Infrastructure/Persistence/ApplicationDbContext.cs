using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ECommerce.Domain.Entities.Auth;
using ECommerce.Domain.Entities.Catalog;
using ECommerce.Domain.Entities.Warehouses;
using ECommerce.Domain.Entities.Inventory;
using ECommerce.Domain.Entities.Orders;
using ECommerce.Domain.Entities.Shipping;
using ECommerce.Domain.Entities.Workforce;
using ECommerce.Domain.Entities.Support;
using ECommerce.Domain.Entities.System;
using ECommerce.Domain.Entities.Localization;
using ECommerce.Domain.Entities.Lookups;
using System.Reflection;

namespace ECommerce.Infrastructure.Persistence;

public class ApplicationDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, string>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) 
        : base(options)
    {
    }

    // Catalog
    public DbSet<Brand> Brands => Set<Brand>();
    public DbSet<Category> Categories => Set<Category>();
    public DbSet<Product> Products => Set<Product>();
    public DbSet<ProductImage> ProductImages => Set<ProductImage>();

    // Warehouses
    public DbSet<Warehouse> Warehouses => Set<Warehouse>();
    public DbSet<Zone> Zones => Set<Zone>();
    public DbSet<Aisle> Aisles => Set<Aisle>();
    public DbSet<Shelf> Shelves => Set<Shelf>();
    public DbSet<Bin> Bins => Set<Bin>();

    // Inventory
    public DbSet<ProductStock> ProductStocks => Set<ProductStock>();
    public DbSet<StockMovement> StockMovements => Set<StockMovement>();

    // Orders
    public DbSet<Order> Orders => Set<Order>();
    public DbSet<OrderItem> OrderItems => Set<OrderItem>();
    public DbSet<SubOrder> SubOrders => Set<SubOrder>();
    public DbSet<SubOrderItem> SubOrderItems => Set<SubOrderItem>();

    // Shipping
    public DbSet<ShippingZone> ShippingZones => Set<ShippingZone>();
    public DbSet<Carrier> Carriers => Set<Carrier>();
    public DbSet<Shipment> Shipments => Set<Shipment>();
    public DbSet<ShipmentItem> ShipmentItems => Set<ShipmentItem>();
    public DbSet<ShipmentTracking> ShipmentTrackings => Set<ShipmentTracking>();

    // Workforce
    public DbSet<Worker> Workers => Set<Worker>();
    public DbSet<WorkTask> WorkTasks => Set<WorkTask>();

    // Support
    public DbSet<Ticket> Tickets => Set<Ticket>();
    public DbSet<TicketMessage> TicketMessages => Set<TicketMessage>();

    // System
    public DbSet<AuditLog> AuditLogs => Set<AuditLog>();
    public DbSet<FeatureFlag> FeatureFlags => Set<FeatureFlag>();
    public DbSet<SystemSetting> SystemSettings => Set<SystemSetting>();

    // Localization
    public DbSet<Language> Languages => Set<Language>();
    public DbSet<BrandTranslation> BrandTranslations => Set<BrandTranslation>();
    public DbSet<CategoryTranslation> CategoryTranslations => Set<CategoryTranslation>();
    public DbSet<ProductTranslation> ProductTranslations => Set<ProductTranslation>();
    public DbSet<WarehouseTranslation> WarehouseTranslations => Set<WarehouseTranslation>();
    public DbSet<ZoneTranslation> ZoneTranslations => Set<ZoneTranslation>();
    public DbSet<ShippingZoneTranslation> ShippingZoneTranslations => Set<ShippingZoneTranslation>();
    public DbSet<CarrierTranslation> CarrierTranslations => Set<CarrierTranslation>();
    public DbSet<FeatureFlagTranslation> FeatureFlagTranslations => Set<FeatureFlagTranslation>();

    // Lookups
    public DbSet<OrderStatusLookup> OrderStatusLookups => Set<OrderStatusLookup>();
    public DbSet<PaymentStatusLookup> PaymentStatusLookups => Set<PaymentStatusLookup>();
    public DbSet<ShipmentStatusLookup> ShipmentStatusLookups => Set<ShipmentStatusLookup>();
    public DbSet<TaskTypeLookup> TaskTypeLookups => Set<TaskTypeLookup>();
    public DbSet<TaskStatusLookup> TaskStatusLookups => Set<TaskStatusLookup>();
    public DbSet<TicketPriorityLookup> TicketPriorityLookups => Set<TicketPriorityLookup>();
    public DbSet<TicketStatusLookup> TicketStatusLookups => Set<TicketStatusLookup>();
    public DbSet<TicketCategoryLookup> TicketCategoryLookups => Set<TicketCategoryLookup>();

    // Notifications
    public DbSet<Domain.Entities.Notifications.Notification> Notifications => Set<Domain.Entities.Notifications.Notification>();
    public DbSet<Domain.Entities.Notifications.NotificationSettings> NotificationSettings => Set<Domain.Entities.Notifications.NotificationSettings>();

    // Auth & Permissions
    public DbSet<Permission> Permissions => Set<Permission>();
    public DbSet<RolePermission> RolePermissions => Set<RolePermission>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Apply all IEntityTypeConfiguration from this assembly
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

        // Configure ApplicationUser additional properties
        modelBuilder.Entity<ApplicationUser>(b =>
        {
            b.Property(u => u.FirstName).HasMaxLength(100);
            b.Property(u => u.LastName).HasMaxLength(100);
            b.Property(u => u.ProfileImageUrl).HasMaxLength(500);
            b.Property(u => u.IsActive).HasDefaultValue(true);
            b.Property(u => u.CreatedAt).HasDefaultValueSql("GETDATE()");
            b.Ignore(u => u.FullName); // Computed property
        });

        // Configure ApplicationRole
        modelBuilder.Entity<ApplicationRole>(b =>
        {
            b.Property(r => r.Description).HasMaxLength(500);
            b.Property(r => r.CreatedAt).HasDefaultValueSql("GETDATE()");
        });

        // Configure Permission
        modelBuilder.Entity<Permission>(b =>
        {
            b.HasKey(p => p.Id);
            b.Property(p => p.Name).HasMaxLength(100).IsRequired();
            b.HasIndex(p => p.Name).IsUnique();
            b.Property(p => p.Module).HasMaxLength(50).IsRequired();
            b.Property(p => p.Description).HasMaxLength(500);
            b.Property(p => p.CreatedAt).HasDefaultValueSql("GETDATE()");
        });

        // Configure RolePermission (junction table)
        modelBuilder.Entity<RolePermission>(b =>
        {
            b.HasKey(rp => new { rp.RoleId, rp.PermissionId });
            
            b.HasOne(rp => rp.Role)
                .WithMany(r => r.RolePermissions)
                .HasForeignKey(rp => rp.RoleId)
                .OnDelete(DeleteBehavior.Cascade);
                
            b.HasOne(rp => rp.Permission)
                .WithMany(p => p.RolePermissions)
                .HasForeignKey(rp => rp.PermissionId)
                .OnDelete(DeleteBehavior.Cascade);
        });
    }
}

