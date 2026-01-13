// ==============================================
// auth.models.ts
// Authentication related interfaces and types
// ==============================================

/**
 * Login request DTO
 */
export interface LoginRequest {
    email: string;
    password: string;
}

/**
 * Register request DTO
 */
export interface RegisterRequest {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

/**
 * Authentication response from backend
 */
export interface AuthResponse {
    userId: string;
    email: string;
    fullName: string;
    roles: string[];
    permissions: string[];
    accessToken: string;
    expiresAt: Date;
}

/**
 * Current user information
 */
export interface CurrentUser {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    fullName: string;
    profileImageUrl?: string;
    roles: string[];
    permissions: string[];
    createdAt: Date;
    lastLoginAt?: Date;
}

/**
 * Decoded JWT payload
 */
export interface JwtPayload {
    sub: string;
    email: string;
    name: string;
    role: string | string[];
    permission: string | string[];
    exp: number;
    iat: number;
    iss: string;
    aud: string;
}

/**
 * Auth state for reactive management
 */
export interface AuthState {
    user: CurrentUser | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}

/**
 * Permission constants matching backend
 */
export const Permissions = {
    // Products
    PRODUCTS_VIEW: 'Products.View',
    PRODUCTS_CREATE: 'Products.Create',
    PRODUCTS_EDIT: 'Products.Edit',
    PRODUCTS_DELETE: 'Products.Delete',

    // Brands
    BRANDS_VIEW: 'Brands.View',
    BRANDS_CREATE: 'Brands.Create',
    BRANDS_EDIT: 'Brands.Edit',
    BRANDS_DELETE: 'Brands.Delete',

    // Categories
    CATEGORIES_VIEW: 'Categories.View',
    CATEGORIES_CREATE: 'Categories.Create',
    CATEGORIES_EDIT: 'Categories.Edit',
    CATEGORIES_DELETE: 'Categories.Delete',

    // Inventory
    INVENTORY_VIEW: 'Inventory.View',
    INVENTORY_ADJUST: 'Inventory.Adjust',
    INVENTORY_TRANSFER: 'Inventory.Transfer',

    // Warehouses
    WAREHOUSES_VIEW: 'Warehouses.View',
    WAREHOUSES_CREATE: 'Warehouses.Create',
    WAREHOUSES_EDIT: 'Warehouses.Edit',
    WAREHOUSES_DELETE: 'Warehouses.Delete',

    // Orders
    ORDERS_VIEW: 'Orders.View',
    ORDERS_CREATE: 'Orders.Create',
    ORDERS_EDIT: 'Orders.Edit',
    ORDERS_UPDATE_STATUS: 'Orders.UpdateStatus',
    ORDERS_CANCEL: 'Orders.Cancel',

    // Users
    USERS_VIEW: 'Users.View',
    USERS_CREATE: 'Users.Create',
    USERS_EDIT: 'Users.Edit',
    USERS_DELETE: 'Users.Delete',

    // Roles
    ROLES_VIEW: 'Roles.View',
    ROLES_CREATE: 'Roles.Create',
    ROLES_EDIT: 'Roles.Edit',
    ROLES_DELETE: 'Roles.Delete',
    ROLES_ASSIGN_PERMISSIONS: 'Roles.AssignPermissions',

    // Reports
    REPORTS_VIEW: 'Reports.View',
    REPORTS_EXPORT: 'Reports.Export',

    // Settings
    SETTINGS_VIEW: 'Settings.View',
    SETTINGS_EDIT: 'Settings.Edit',
} as const;

export type Permission = typeof Permissions[keyof typeof Permissions];
