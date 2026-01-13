// ==============================================
// User Management Models & Interfaces
// ==============================================

// User list item (minimal data for table)
export interface UserListDto {
    id: string;
    email: string;
    fullName: string;
    firstName: string;
    lastName: string;
    profileImageUrl?: string;
    isActive: boolean;
    createdAt: Date;
    lastLoginAt?: Date;
    roles: string[];
}

// Full user details
export interface UserDto {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    fullName: string;
    profileImageUrl?: string;
    isActive: boolean;
    emailConfirmed: boolean;
    createdAt: Date;
    lastLoginAt?: Date;
    roles: string[];
    permissions: string[];
}

// Create user request
export interface CreateUserDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    profileImageUrl?: string;
    roles: string[];
}

// Update user request
export interface UpdateUserDto {
    firstName?: string;
    lastName?: string;
    email?: string;
    profileImageUrl?: string;
    isActive?: boolean;
}

// Assign roles to user
export interface AssignRolesToUserDto {
    roles: string[];
}

// Reset password request
export interface ResetUserPasswordDto {
    newPassword: string;
}

// Role list item
export interface RoleListDto {
    id: string;
    name: string;
    description?: string;
    usersCount: number;
    permissionsCount: number;
}

// Full role with permissions
export interface RoleDto {
    id: string;
    name: string;
    description?: string;
    createdAt: Date;
    usersCount: number;
    permissions: PermissionDto[];
}

// Create role request
export interface CreateRoleDto {
    name: string;
    description?: string;
    permissionIds: number[];
}

// Update role request
export interface UpdateRoleDto {
    name?: string;
    description?: string;
}

// Assign permissions to role
export interface AssignPermissionsToRoleDto {
    permissionIds: number[];
}

// Permission item
export interface PermissionDto {
    id: number;
    name: string;
    description?: string;
    module: string;
}

// Permissions grouped by module
export interface PermissionGroupDto {
    module: string;
    permissions: PermissionDto[];
}

// Status options for filters
export type UserStatus = 'all' | 'active' | 'inactive';

// User for display with computed properties
export interface UserDisplay extends UserListDto {
    initials: string;
    statusClass: string;
    statusLabel: string;
    primaryRole: string;
    roleClass: string;
}
