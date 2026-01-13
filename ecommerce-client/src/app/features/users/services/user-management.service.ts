// ==============================================
// User Management Service
// ==============================================

import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
    UserDto,
    UserListDto,
    CreateUserDto,
    UpdateUserDto,
    AssignRolesToUserDto,
    ResetUserPasswordDto,
    RoleDto,
    RoleListDto,
    CreateRoleDto,
    UpdateRoleDto,
    AssignPermissionsToRoleDto,
    PermissionDto,
    PermissionGroupDto,
    UserDisplay
} from '../models/user.models';

@Injectable({
    providedIn: 'root'
})
export class UserManagementService {
    private http = inject(HttpClient);
    private apiUrl = environment.apiUrl;

    // Signals for reactive state
    private _users = signal<UserListDto[]>([]);
    private _selectedUser = signal<UserDto | null>(null);
    private _roles = signal<RoleListDto[]>([]);
    private _selectedRole = signal<RoleDto | null>(null);
    private _permissions = signal<PermissionDto[]>([]);
    private _permissionGroups = signal<PermissionGroupDto[]>([]);
    private _loading = signal(false);

    // Public readonly signals
    users = this._users.asReadonly();
    selectedUser = this._selectedUser.asReadonly();
    roles = this._roles.asReadonly();
    selectedRole = this._selectedRole.asReadonly();
    permissions = this._permissions.asReadonly();
    permissionGroups = this._permissionGroups.asReadonly();
    loading = this._loading.asReadonly();

    // ==========================================
    // User Operations
    // ==========================================

    getUsers(page = 1, pageSize = 20, search?: string): Observable<UserListDto[]> {
        this._loading.set(true);
        let params = new HttpParams()
            .set('page', page)
            .set('pageSize', pageSize);

        if (search) {
            params = params.set('search', search);
        }

        return this.http.get<UserListDto[]>(`${this.apiUrl}/users`, { params }).pipe(
            tap({
                next: (users) => {
                    this._users.set(users);
                    this._loading.set(false);
                },
                error: () => this._loading.set(false)
            })
        );
    }

    getUserById(id: string): Observable<UserDto> {
        return this.http.get<UserDto>(`${this.apiUrl}/users/${id}`).pipe(
            tap(user => this._selectedUser.set(user))
        );
    }

    createUser(dto: CreateUserDto): Observable<UserDto> {
        return this.http.post<UserDto>(`${this.apiUrl}/users`, dto);
    }

    updateUser(id: string, dto: UpdateUserDto): Observable<UserDto> {
        return this.http.put<UserDto>(`${this.apiUrl}/users/${id}`, dto);
    }

    deleteUser(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/users/${id}`);
    }

    assignRoles(userId: string, dto: AssignRolesToUserDto): Observable<UserDto> {
        return this.http.post<UserDto>(`${this.apiUrl}/users/${userId}/roles`, dto);
    }

    resetPassword(userId: string, dto: ResetUserPasswordDto): Observable<void> {
        return this.http.post<void>(`${this.apiUrl}/users/${userId}/reset-password`, dto);
    }

    toggleUserStatus(userId: string): Observable<void> {
        return this.http.post<void>(`${this.apiUrl}/users/${userId}/toggle-status`, {});
    }

    // ==========================================
    // Role Operations
    // ==========================================

    getRoles(): Observable<RoleListDto[]> {
        return this.http.get<RoleListDto[]>(`${this.apiUrl}/roles`).pipe(
            tap(roles => this._roles.set(roles))
        );
    }

    getRoleById(id: string): Observable<RoleDto> {
        return this.http.get<RoleDto>(`${this.apiUrl}/roles/${id}`).pipe(
            tap(role => this._selectedRole.set(role))
        );
    }

    createRole(dto: CreateRoleDto): Observable<RoleDto> {
        return this.http.post<RoleDto>(`${this.apiUrl}/roles`, dto);
    }

    updateRole(id: string, dto: UpdateRoleDto): Observable<RoleDto> {
        return this.http.put<RoleDto>(`${this.apiUrl}/roles/${id}`, dto);
    }

    deleteRole(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/roles/${id}`);
    }

    assignPermissions(roleId: string, dto: AssignPermissionsToRoleDto): Observable<RoleDto> {
        return this.http.post<RoleDto>(`${this.apiUrl}/roles/${roleId}/permissions`, dto);
    }

    // ==========================================
    // Permission Operations
    // ==========================================

    getPermissions(): Observable<PermissionDto[]> {
        return this.http.get<PermissionDto[]>(`${this.apiUrl}/permissions`).pipe(
            tap(permissions => this._permissions.set(permissions))
        );
    }

    getPermissionsGrouped(): Observable<PermissionGroupDto[]> {
        return this.http.get<PermissionGroupDto[]>(`${this.apiUrl}/permissions/grouped`).pipe(
            tap(groups => this._permissionGroups.set(groups))
        );
    }

    // ==========================================
    // Helper Methods
    // ==========================================

    mapToUserDisplay(user: UserListDto): UserDisplay {
        const names = user.fullName.split(' ');
        const initials = names.length >= 2
            ? `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase()
            : user.fullName.substring(0, 2).toUpperCase();

        const primaryRole = user.roles[0] || 'No Role';

        return {
            ...user,
            initials,
            statusClass: user.isActive ? 'active' : 'inactive',
            statusLabel: user.isActive ? 'Active' : 'Inactive',
            primaryRole,
            roleClass: this.getRoleClass(primaryRole)
        };
    }

    private getRoleClass(role: string): string {
        const roleClasses: Record<string, string> = {
            'SuperAdmin': 'super-admin',
            'Admin': 'admin',
            'Logistics Manager': 'logistics',
            'Warehouse Staff': 'warehouse',
            'Support Agent': 'support',
            'Finance Manager': 'finance'
        };
        return roleClasses[role] || 'default';
    }

    clearSelectedUser(): void {
        this._selectedUser.set(null);
    }

    clearSelectedRole(): void {
        this._selectedRole.set(null);
    }
}
