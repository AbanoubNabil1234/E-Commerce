namespace ECommerce.Domain.Constants;

/// <summary>
/// Static class containing all permission constants.
/// Permissions follow the pattern: Module.Action
/// Used for:
/// - Seeding the database
/// - Policy names in [Authorize(Policy = "...")]
/// - Frontend permission checks
/// </summary>
public static class Permissions
{
    #region Products
    public const string ProductsView = "Products.View";
    public const string ProductsCreate = "Products.Create";
    public const string ProductsEdit = "Products.Edit";
    public const string ProductsDelete = "Products.Delete";
    #endregion

    #region Brands
    public const string BrandsView = "Brands.View";
    public const string BrandsCreate = "Brands.Create";
    public const string BrandsEdit = "Brands.Edit";
    public const string BrandsDelete = "Brands.Delete";
    #endregion

    #region Categories
    public const string CategoriesView = "Categories.View";
    public const string CategoriesCreate = "Categories.Create";
    public const string CategoriesEdit = "Categories.Edit";
    public const string CategoriesDelete = "Categories.Delete";
    #endregion

    #region Inventory
    public const string InventoryView = "Inventory.View";
    public const string InventoryAdjust = "Inventory.Adjust";
    public const string InventoryTransfer = "Inventory.Transfer";
    #endregion

    #region Warehouses
    public const string WarehousesView = "Warehouses.View";
    public const string WarehousesManage = "Warehouses.Manage";
    public const string WarehousesCreate = "Warehouses.Create";
    public const string WarehousesEdit = "Warehouses.Edit";
    public const string WarehousesDelete = "Warehouses.Delete";
    #endregion

    #region Orders
    public const string OrdersView = "Orders.View";
    public const string OrdersCreate = "Orders.Create";
    public const string OrdersEdit = "Orders.Edit";
    public const string OrdersUpdateStatus = "Orders.UpdateStatus";
    public const string OrdersCancel = "Orders.Cancel";
    #endregion

    #region Users
    #region Users
    public const string UsersView = "Users.View";
    public const string UsersCreate = "Users.Create";
    public const string UsersEdit = "Users.Edit";
    public const string UsersDelete = "Users.Delete";
    #endregion
    #endregion

    #region Roles
    public const string RolesView = "Roles.View";
    public const string RolesCreate = "Roles.Create";
    public const string RolesEdit = "Roles.Edit";
    public const string RolesDelete = "Roles.Delete";
    public const string RolesAssignPermissions = "Roles.AssignPermissions";
    #endregion

    #region Reports
    public const string ReportsView = "Reports.View";
    public const string ReportsExport = "Reports.Export";
    #endregion

    #region Settings
    public const string SettingsView = "Settings.View";
    public const string SettingsEdit = "Settings.Edit";
    #endregion

    /// <summary>
    /// Returns all permissions for seeding and policy registration.
    /// </summary>
    public static IEnumerable<PermissionDefinition> GetAll()
    {
        // Products
        yield return new("Products", ProductsView, "View products list and details");
        yield return new("Products", ProductsCreate, "Create new products");
        yield return new("Products", ProductsEdit, "Edit existing products");
        yield return new("Products", ProductsDelete, "Delete products");

        // Brands
        yield return new("Brands", BrandsView, "View brands list and details");
        yield return new("Brands", BrandsCreate, "Create new brands");
        yield return new("Brands", BrandsEdit, "Edit existing brands");
        yield return new("Brands", BrandsDelete, "Delete brands");

        // Categories
        yield return new("Categories", CategoriesView, "View categories list and details");
        yield return new("Categories", CategoriesCreate, "Create new categories");
        yield return new("Categories", CategoriesEdit, "Edit existing categories");
        yield return new("Categories", CategoriesDelete, "Delete categories");

        // Inventory
        yield return new("Inventory", InventoryView, "View inventory and stock levels");
        yield return new("Inventory", InventoryAdjust, "Adjust stock quantities");
        yield return new("Inventory", InventoryTransfer, "Transfer stock between warehouses");

        // Warehouses
        yield return new("Warehouses", WarehousesView, "View warehouses");
        yield return new("Warehouses", WarehousesManage, "Create, update, activate and deactivate warehouses");
        yield return new("Warehouses", WarehousesCreate, "Create new warehouses");
        yield return new("Warehouses", WarehousesEdit, "Edit warehouses");
        yield return new("Warehouses", WarehousesDelete, "Delete warehouses");

        // Orders
        yield return new("Orders", OrdersView, "View orders");
        yield return new("Orders", OrdersCreate, "Create orders");
        yield return new("Orders", OrdersEdit, "Edit orders");
        yield return new("Orders", OrdersUpdateStatus, "Update order status");
        yield return new("Orders", OrdersCancel, "Cancel orders");

        // Users
        yield return new("Users", UsersView, "View users list");
        yield return new("Users", UsersCreate, "Create new users");
        yield return new("Users", UsersEdit, "Edit user details");
        yield return new("Users", UsersDelete, "Delete users");

        // Roles
        yield return new("Roles", RolesView, "View roles and permissions");
        yield return new("Roles", RolesCreate, "Create new roles");
        yield return new("Roles", RolesEdit, "Edit existing roles");
        yield return new("Roles", RolesDelete, "Delete roles");
        yield return new("Roles", RolesAssignPermissions, "Assign permissions to roles");

        // Reports
        yield return new("Reports", ReportsView, "View reports and analytics");
        yield return new("Reports", ReportsExport, "Export reports");

        // Settings
        yield return new("Settings", SettingsView, "View system settings");
        yield return new("Settings", SettingsEdit, "Edit system settings");
    }

    /// <summary>
    /// Get permissions for Admin role (all permissions)
    /// </summary>
    public static IEnumerable<string> GetAdminPermissions()
    {
        return GetAll().Select(p => p.Name);
    }

    /// <summary>
    /// Get permissions for Staff role (limited permissions)
    /// </summary>
    public static IEnumerable<string> GetStaffPermissions()
    {
        return new[]
        {
            // View access
            ProductsView, BrandsView, CategoriesView,
            InventoryView, WarehousesView,
            OrdersView,
            
            // Inventory operations
            InventoryAdjust, InventoryTransfer,
            
            // Order operations
            OrdersUpdateStatus
        };
    }

    /// <summary>
    /// Get permissions for Customer role (minimal)
    /// </summary>
    public static IEnumerable<string> GetCustomerPermissions()
    {
        return new[]
        {
            ProductsView,
            BrandsView,
            CategoriesView
        };
    }
}

/// <summary>
/// DTO for permission definition
/// </summary>
public record PermissionDefinition(string Module, string Name, string Description);
