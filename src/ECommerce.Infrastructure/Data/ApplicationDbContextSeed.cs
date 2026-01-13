// ApplicationDbContextSeed.cs - Comprehensive Database Seeding
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ECommerce.Domain.Entities.Catalog;
using ECommerce.Domain.Entities.Localization;
using ECommerce.Domain.Entities.Warehouses;
using ECommerce.Domain.Entities.Inventory;
using ECommerce.Domain.Entities.Shipping;
using ECommerce.Domain.Entities.Orders;
using ECommerce.Domain.Entities.Notifications;
using ECommerce.Domain.Enums;
using ECommerce.Infrastructure.Persistence;

namespace ECommerce.Infrastructure.Data;

public static class ApplicationDbContextSeed
{
    private static Dictionary<string, int> _brandIds = new();
    private static Dictionary<string, int> _categoryIds = new();
    private static Dictionary<string, int> _productIds = new();
    private static Dictionary<string, int> _warehouseIds = new();
    private static Dictionary<string, int> _carrierIds = new();

    public static async Task SeedAsync(ApplicationDbContext context, ILogger? logger = null)
    {
        try
        {
            await SeedLanguagesAsync(context, logger);
            await SeedBrandsAsync(context, logger);
            await SeedCategoriesAsync(context, logger);
            await SeedProductsAsync(context, logger);
            await SeedWarehousesAsync(context, logger);
            await SeedInventoryAsync(context, logger);
            await SeedCarriersAsync(context, logger);
            await SeedOrdersAsync(context, logger);
            await SeedShipmentsAsync(context, logger);
            await SeedNotificationsAsync(context, logger);
            logger?.LogInformation("Database seeding completed!");
        }
        catch (Exception ex)
        {
            logger?.LogError(ex, "Error during database seeding.");
            throw;
        }
    }

    private static async Task SeedLanguagesAsync(ApplicationDbContext context, ILogger? logger)
    {
        if (await context.Languages.AnyAsync()) return;
        var languages = new List<Language>
        {
            new() { Code = "en", Name = "English", NativeName = "English", IsDefault = true, IsActive = true, IsRTL = false, CreatedAt = DateTime.UtcNow },
            new() { Code = "ar", Name = "Arabic", NativeName = "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", IsDefault = false, IsActive = true, IsRTL = true, CreatedAt = DateTime.UtcNow }
        };
        await context.Languages.AddRangeAsync(languages);
        await context.SaveChangesAsync();
        logger?.LogInformation("Seeded languages");
    }

    private static async Task SeedBrandsAsync(ApplicationDbContext context, ILogger? logger)
    {
        if (await context.Brands.AnyAsync()) return;
        var brands = new List<Brand>
        {
            CreateBrand("electronix-egypt", "ElectroniX Egypt", "\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0643\u0633 \u0645\u0635\u0631", "Leading electronics retailer", "\u0623\u0643\u0628\u0631 \u0645\u0648\u0632\u0639 \u0644\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0627\u062A", "/images/brands/electronix.png"),
            CreateBrand("freshko-foods", "Freshko Foods", "\u0641\u0631\u064A\u0634\u0643\u0648 \u0644\u0644\u0623\u063A\u0630\u064A\u0629", "Premium food products", "\u0645\u0646\u062A\u062C\u0627\u062A \u063A\u0630\u0627\u0626\u064A\u0629 \u0645\u0645\u062A\u0627\u0632\u0629", "/images/brands/freshko.png"),
            CreateBrand("homeplus-egypt", "HomePlus Egypt", "\u0647\u0648\u0645 \u0628\u0644\u0633 \u0645\u0635\u0631", "Home appliances", "\u0623\u062C\u0647\u0632\u0629 \u0645\u0646\u0632\u0644\u064A\u0629", "/images/brands/homeplus.png"),
            CreateBrand("cairo-fashion", "Cairo Fashion", "\u0643\u0627\u064A\u0631\u0648 \u0641\u0627\u0634\u0646", "Egyptian fashion brand", "\u0639\u0644\u0627\u0645\u0629 \u0623\u0632\u064A\u0627\u0621 \u0645\u0635\u0631\u064A\u0629", "/images/brands/cairofashion.png"),
            CreateBrand("techzone-arabia", "TechZone Arabia", "\u062A\u0643 \u0632\u0648\u0646 \u0627\u0644\u0639\u0631\u0628\u064A\u0629", "Tech gadgets", "\u0623\u062C\u0647\u0632\u0629 \u062A\u0642\u0646\u064A\u0629", "/images/brands/techzone.png")
        };
        await context.Brands.AddRangeAsync(brands);
        await context.SaveChangesAsync();
        foreach (var brand in brands) _brandIds[brand.Slug] = brand.Id;
        logger?.LogInformation("Seeded {Count} brands", brands.Count);
    }

    private static Brand CreateBrand(string slug, string nameEn, string nameAr, string descEn, string descAr, string logo) => new Brand
    {
        Name = nameEn, Slug = slug, Description = descEn, LogoUrl = logo, IsActive = true, CreatedAt = DateTime.UtcNow,
        Translations = new List<BrandTranslation>
        {
            new() { LanguageCode = "en", Name = nameEn, Slug = slug, Description = descEn, CreatedAt = DateTime.UtcNow },
            new() { LanguageCode = "ar", Name = nameAr, Slug = slug + "-ar", Description = descAr, CreatedAt = DateTime.UtcNow }
        }
    };

    private static async Task SeedCategoriesAsync(ApplicationDbContext context, ILogger? logger)
    {
        if (await context.Categories.AnyAsync()) return;
        var electronics = CreateCategory("electronics", "Electronics", "\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0627\u062A", "Electronic devices", "\u0623\u062C\u0647\u0632\u0629 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629", null, 1, 0);
        var home = CreateCategory("home-kitchen", "Home & Kitchen", "\u0627\u0644\u0645\u0646\u0632\u0644 \u0648\u0627\u0644\u0645\u0637\u0628\u062E", "Home appliances", "\u0623\u062C\u0647\u0632\u0629 \u0645\u0646\u0632\u0644\u064A\u0629", null, 2, 0);
        var fashion = CreateCategory("fashion", "Fashion", "\u0623\u0632\u064A\u0627\u0621", "Clothing", "\u0645\u0644\u0627\u0628\u0633", null, 3, 0);
        await context.Categories.AddRangeAsync(new[] { electronics, home, fashion });
        await context.SaveChangesAsync();
        _categoryIds["electronics"] = electronics.Id;
        _categoryIds["home-kitchen"] = home.Id;
        _categoryIds["fashion"] = fashion.Id;

        var children = new List<Category>
        {
            CreateCategory("smartphones", "Smartphones", "\u0647\u0648\u0627\u062A\u0641 \u0630\u0643\u064A\u0629", "Mobile phones", "\u0647\u0648\u0627\u062A\u0641 \u0645\u062D\u0645\u0648\u0644\u0629", electronics.Id, 1, 1),
            CreateCategory("laptops", "Laptops", "\u0644\u0627\u0628\u062A\u0648\u0628", "Notebooks", "\u0623\u062C\u0647\u0632\u0629 \u0644\u0627\u0628\u062A\u0648\u0628", electronics.Id, 2, 1),
            CreateCategory("appliances", "Appliances", "\u0623\u062C\u0647\u0632\u0629 \u0645\u0646\u0632\u0644\u064A\u0629", "Home appliances", "\u0623\u062C\u0647\u0632\u0629 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629", home.Id, 1, 1),
            CreateCategory("mens-fashion", "Men's Fashion", "\u0623\u0632\u064A\u0627\u0621 \u0631\u062C\u0627\u0644\u064A\u0629", "Men's clothing", "\u0645\u0644\u0627\u0628\u0633 \u0631\u062C\u0627\u0644\u064A\u0629", fashion.Id, 1, 1),
            CreateCategory("womens-fashion", "Women's Fashion", "\u0623\u0632\u064A\u0627\u0621 \u0646\u0633\u0627\u0626\u064A\u0629", "Women's clothing", "\u0645\u0644\u0627\u0628\u0633 \u0646\u0633\u0627\u0626\u064A\u0629", fashion.Id, 2, 1)
        };
        await context.Categories.AddRangeAsync(children);
        await context.SaveChangesAsync();
        foreach (var cat in children) _categoryIds[cat.Slug] = cat.Id;
        logger?.LogInformation("Seeded categories");
    }

    private static Category CreateCategory(string slug, string nameEn, string nameAr, string descEn, string descAr, int? parentId, int order, int level) => new Category
    {
        Name = nameEn, Slug = slug, Description = descEn, ParentId = parentId, DisplayOrder = order, Level = level, IsActive = true, CreatedAt = DateTime.UtcNow,
        Translations = new List<CategoryTranslation>
        {
            new() { LanguageCode = "en", Name = nameEn, Slug = slug, Description = descEn, CreatedAt = DateTime.UtcNow },
            new() { LanguageCode = "ar", Name = nameAr, Slug = slug + "-ar", Description = descAr, CreatedAt = DateTime.UtcNow }
        }
    };

    private static async Task SeedProductsAsync(ApplicationDbContext context, ILogger? logger)
    {
        if (await context.Products.AnyAsync()) return;
        var products = new List<Product>
        {
            CreateProduct("SKU-PHON-001", "iphone-15", "iPhone 15 Pro Max", "\u0622\u064A\u0641\u0648\u0646 15 \u0628\u0631\u0648 \u0645\u0627\u0643\u0633", "Latest Apple flagship", "\u0623\u062D\u062F\u062B \u0647\u0627\u062A\u0641 \u0623\u0628\u0644", 54999.00m, "electronix-egypt", "smartphones"),
            CreateProduct("SKU-PHON-002", "samsung-s24", "Samsung Galaxy S24", "\u0633\u0627\u0645\u0633\u0648\u0646\u062C S24", "Android flagship", "\u0647\u0627\u062A\u0641 \u0623\u0646\u062F\u0631\u0648\u064A\u062F", 49999.00m, "techzone-arabia", "smartphones"),
            CreateProduct("SKU-LAPT-001", "macbook-pro", "MacBook Pro 14", "\u0645\u0627\u0643 \u0628\u0648\u0643 \u0628\u0631\u0648 14", "Apple M3 laptop", "\u0644\u0627\u0628\u062A\u0648\u0628 \u0623\u0628\u0644 M3", 89999.00m, "electronix-egypt", "laptops"),
            CreateProduct("SKU-APPL-001", "lg-refrigerator", "LG Refrigerator", "\u062B\u0644\u0627\u062C\u0629 \u0625\u0644 \u062C\u064A", "Smart refrigerator", "\u062B\u0644\u0627\u062C\u0629 \u0630\u0643\u064A\u0629", 45999.00m, "homeplus-egypt", "appliances"),
            CreateProduct("SKU-MENF-001", "cotton-polo", "Cotton Polo", "\u0628\u0648\u0644\u0648 \u0642\u0637\u0646", "Egyptian cotton polo", "\u0628\u0648\u0644\u0648 \u0642\u0637\u0646 \u0645\u0635\u0631\u064A", 899.00m, "cairo-fashion", "mens-fashion")
        };
        await context.Products.AddRangeAsync(products);
        await context.SaveChangesAsync();
        foreach (var p in products) _productIds[p.SKU] = p.Id;
        logger?.LogInformation("Seeded {Count} products", products.Count);
    }

    private static Product CreateProduct(string sku, string slug, string nameEn, string nameAr, string descEn, string descAr, decimal price, string brandSlug, string catSlug) => new Product
    {
        SKU = sku, Slug = slug, Name = nameEn, Description = descEn, UnitPrice = price, BrandId = _brandIds.GetValueOrDefault(brandSlug, 1), CategoryId = _categoryIds.GetValueOrDefault(catSlug, 1), IsActive = true, CreatedAt = DateTime.UtcNow,
        Translations = new List<ProductTranslation>
        {
            new() { LanguageCode = "en", Name = nameEn, Description = descEn, CreatedAt = DateTime.UtcNow },
            new() { LanguageCode = "ar", Name = nameAr, Description = descAr, CreatedAt = DateTime.UtcNow }
        },
        Images = new List<ProductImage>
        {
            new() { ImageUrl = $"/images/products/{sku.ToLower()}-1.jpg", AltText = nameEn, IsPrimary = true, DisplayOrder = 1, CreatedAt = DateTime.UtcNow }
        }
    };

    private static async Task SeedWarehousesAsync(ApplicationDbContext context, ILogger? logger)
    {
        if (await context.Warehouses.AnyAsync()) return;
        var warehouses = new List<Warehouse>
        {
            CreateWarehouse("NCAI", "New Cairo Center", "\u0645\u0631\u0643\u0632 \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0627\u0644\u062C\u062F\u064A\u062F\u0629", "5th Settlement", "\u0627\u0644\u062A\u062C\u0645\u0639 \u0627\u0644\u062E\u0627\u0645\u0633", "New Cairo", 30.0131, 31.4089, true),
            CreateWarehouse("GIZA", "Giza Hub", "\u0645\u0631\u0643\u0632 \u0627\u0644\u062C\u064A\u0632\u0629", "6th October", "\u0627\u0644\u0633\u0627\u062F\u0633 \u0645\u0646 \u0623\u0643\u062A\u0648\u0628\u0631", "Giza", 29.9792, 31.1342, false),
            CreateWarehouse("ALEX", "Alexandria Center", "\u0645\u0631\u0643\u0632 \u0627\u0644\u0625\u0633\u0643\u0646\u062F\u0631\u064A\u0629", "Borg El Arab", "\u0628\u0631\u062C \u0627\u0644\u0639\u0631\u0628", "Alexandria", 31.2001, 29.9187, false)
        };
        await context.Warehouses.AddRangeAsync(warehouses);
        await context.SaveChangesAsync();
        foreach (var wh in warehouses) _warehouseIds[wh.Code] = wh.Id;
        logger?.LogInformation("Seeded warehouses");
    }

    private static Warehouse CreateWarehouse(string code, string nameEn, string nameAr, string addrEn, string addrAr, string city, double lat, double lon, bool isDefault) => new Warehouse
    {
        Code = code, Name = nameEn, Address = addrEn, City = city, Country = "Egypt", Latitude = lat, Longitude = lon, IsActive = true, IsDefault = isDefault, CreatedAt = DateTime.UtcNow,
        Translations = new List<WarehouseTranslation>
        {
            new() { LanguageCode = "en", Name = nameEn, Address = addrEn, CreatedAt = DateTime.UtcNow },
            new() { LanguageCode = "ar", Name = nameAr, Address = addrAr, CreatedAt = DateTime.UtcNow }
        }
    };

    private static async Task SeedInventoryAsync(ApplicationDbContext context, ILogger? logger)
    {
        if (await context.ProductStocks.AnyAsync()) return;
        var stocks = new List<ProductStock>();
        foreach (var p in _productIds)
        {
            stocks.Add(new ProductStock { ProductId = p.Value, WarehouseId = _warehouseIds["NCAI"], QuantityOnHand = 100, QuantityReserved = 5, ReorderLevel = 20, CreatedAt = DateTime.UtcNow });
        }
        await context.ProductStocks.AddRangeAsync(stocks);
        await context.SaveChangesAsync();
        logger?.LogInformation("Seeded inventory");
    }

    private static async Task SeedCarriersAsync(ApplicationDbContext context, ILogger? logger)
    {
        if (await context.Carriers.AnyAsync()) return;
        var carriers = new List<Carrier>
        {
            new Carrier { Code = "ARAMEX", Name = "Aramex", ContactPhone = "+20-2-19507", ContactEmail = "service@aramex.com", IsActive = true, CreatedAt = DateTime.UtcNow, Translations = new List<CarrierTranslation> { new() { LanguageCode = "en", Name = "Aramex", CreatedAt = DateTime.UtcNow }, new() { LanguageCode = "ar", Name = "\u0623\u0631\u0627\u0645\u0643\u0633", CreatedAt = DateTime.UtcNow } } },
            new Carrier { Code = "BOSTA", Name = "Bosta Express", ContactPhone = "+20-2-15123", ContactEmail = "support@bosta.co", IsActive = true, CreatedAt = DateTime.UtcNow, Translations = new List<CarrierTranslation> { new() { LanguageCode = "en", Name = "Bosta Express", CreatedAt = DateTime.UtcNow }, new() { LanguageCode = "ar", Name = "\u0628\u0648\u0633\u0637\u0629 \u0625\u0643\u0633\u0628\u0631\u064A\u0633", CreatedAt = DateTime.UtcNow } } }
        };
        await context.Carriers.AddRangeAsync(carriers);
        await context.SaveChangesAsync();
        foreach (var c in carriers) _carrierIds[c.Code] = c.Id;
        logger?.LogInformation("Seeded carriers");
    }

    private static async Task SeedOrdersAsync(ApplicationDbContext context, ILogger? logger)
    {
        if (await context.Orders.AnyAsync()) return;
        var random = new Random(42);
        var cities = new[] { "Cairo", "Giza", "Alexandria", "Mansoura", "Tanta", "Aswan", "Luxor", "Hurghada" };
        var statuses = new[] { OrderStatus.Pending, OrderStatus.Confirmed, OrderStatus.Processing, OrderStatus.Shipped, OrderStatus.Delivered };
        var names = new[] { "Ahmed Mohamed", "Sara Ahmed", "Mohamed Ali", "Fatma Hassan", "Omar Khaled", "Nour Ibrahim", "Youssef Mahmoud", "Mona Samir" };
        var productList = _productIds.ToList();
        var orders = new List<Order>();

        for (int i = 1; i <= 20; i++)
        {
            var status = statuses[random.Next(statuses.Length)];
            var city = cities[random.Next(cities.Length)];
            var name = names[random.Next(names.Length)];
            var orderDate = DateTime.UtcNow.AddDays(-random.Next(1, 30));
            var product = productList[random.Next(productList.Count)];
            var qty = random.Next(1, 4);
            var unitPrice = random.Next(500, 55000);
            var subtotal = unitPrice * qty;

            orders.Add(new Order
            {
                OrderNumber = $"ORD-2024-{i:D4}",
                CustomerId = $"customer-{random.Next(1, 10)}",
                WarehouseId = _warehouseIds["NCAI"],
                OrderStatus = status,
                PaymentStatus = status == OrderStatus.Delivered ? PaymentStatus.Paid : PaymentStatus.Pending,
                ShippingName = name,
                ShippingAddress = $"{random.Next(1, 200)} Main Street",
                ShippingCity = city,
                ShippingCountry = "Egypt",
                Currency = "EGP",
                SubTotal = subtotal,
                ShippingAmount = subtotal > 5000 ? 0 : 50,
                TaxAmount = subtotal * 0.14m,
                TotalAmount = subtotal + (subtotal > 5000 ? 0 : 50) + (subtotal * 0.14m),
                CreatedAt = orderDate,
                UpdatedAt = orderDate.AddHours(random.Next(1, 48)),
                Items = new List<OrderItem> { new OrderItem { ProductId = product.Value, SKU = product.Key, ProductName = "Product Item", Quantity = qty, UnitPrice = unitPrice, CreatedAt = orderDate } }
            });
        }
        await context.Orders.AddRangeAsync(orders);
        await context.SaveChangesAsync();
        logger?.LogInformation("Seeded {Count} orders", orders.Count);
    }

    private static async Task SeedShipmentsAsync(ApplicationDbContext context, ILogger? logger)
    {
        if (await context.Shipments.AnyAsync()) return;
        var order = await context.Orders.FirstOrDefaultAsync();
        if (order == null) return;
        var shipment = new Shipment
        {
            TrackingNumber = "EG123456789", OrderId = order.Id, CarrierId = _carrierIds.FirstOrDefault().Value, WarehouseId = _warehouseIds["NCAI"], ShippingMethod = "Standard", Status = ShipmentStatus.InTransit, DeliveryAddress = order.ShippingAddress, DeliveryCity = order.ShippingCity, DeliveryCountry = order.ShippingCountry, EstimatedDeliveryDate = DateTime.UtcNow.AddDays(3), CreatedAt = DateTime.UtcNow,
            TrackingHistory = new List<ShipmentTracking> { new ShipmentTracking { Status = ShipmentStatus.Pending, Location = "New Cairo", Description = "Order received", OccurredAt = DateTime.UtcNow.AddHours(-24), CreatedAt = DateTime.UtcNow }, new ShipmentTracking { Status = ShipmentStatus.InTransit, Location = "Cairo Hub", Description = "In transit", OccurredAt = DateTime.UtcNow, CreatedAt = DateTime.UtcNow } }
        };
        await context.Shipments.AddAsync(shipment);
        await context.SaveChangesAsync();
        logger?.LogInformation("Seeded shipments");
    }

    private static async Task SeedNotificationsAsync(ApplicationDbContext context, ILogger? logger)
    {
        if (await context.Notifications.AnyAsync()) return;
        var notifications = new List<Notification>
        {
            new() { UserId = "admin", TitleEn = "Low Stock Alert", TitleAr = "\u062A\u0646\u0628\u064A\u0647 \u0646\u0642\u0635 \u0627\u0644\u0645\u062E\u0632\u0648\u0646", MessageEn = "iPhone 15 Pro Max has low stock.", MessageAr = "\u0622\u064A\u0641\u0648\u0646 15 \u0628\u0631\u0648 \u0645\u0627\u0643\u0633 \u0645\u062E\u0632\u0648\u0646\u0647 \u0645\u0646\u062E\u0641\u0636.", Type = NotificationType.Inventory, ActionUrl = "/inventory", IsRead = false, CreatedAt = DateTime.UtcNow.AddHours(-2) },
            new() { UserId = "admin", TitleEn = "New Order Received", TitleAr = "\u0637\u0644\u0628 \u062C\u062F\u064A\u062F", MessageEn = "Order ORD-2024-0001 received.", MessageAr = "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u0637\u0644\u0628 ORD-2024-0001.", Type = NotificationType.Order, ActionUrl = "/orders/ORD-2024-0001", IsRead = true, ReadAt = DateTime.UtcNow.AddHours(-1), CreatedAt = DateTime.UtcNow.AddHours(-3) },
            new() { UserId = "customer-1", TitleEn = "Order Confirmed", TitleAr = "\u062A\u0645 \u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628", MessageEn = "Your order is confirmed.", MessageAr = "\u062A\u0645 \u062A\u0623\u0643\u064A\u062F \u0637\u0644\u0628\u0643.", Type = NotificationType.Order, ActionUrl = "/orders/ORD-2024-0001", IsRead = false, CreatedAt = DateTime.UtcNow.AddHours(-1) }
        };
        await context.Notifications.AddRangeAsync(notifications);
        await context.SaveChangesAsync();
        logger?.LogInformation("Seeded notifications");
    }
}
