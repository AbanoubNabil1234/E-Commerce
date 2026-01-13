// ==============================================
// Permissions Matrix Component
// ==============================================

import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { UserManagementService } from '../../services/user-management.service';
import { RoleDto, PermissionGroupDto, PermissionDto } from '../../models/user.models';

interface PermissionState {
    [permissionId: number]: boolean;
}

@Component({
    selector: 'app-permissions-matrix',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule, TranslateModule],
    templateUrl: './permissions-matrix.component.html',
    styleUrl: './permissions-matrix.component.scss'
})
export class PermissionsMatrixComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private router = inject(Router);
    private userService = inject(UserManagementService);

    roleId = signal<string | null>(null);
    loading = signal(false);
    saving = signal(false);
    hasChanges = signal(false);

    role = this.userService.selectedRole;
    permissionGroups = this.userService.permissionGroups;
    roles = this.userService.roles;

    // Permission state
    permissionState = signal<PermissionState>({});
    originalState = signal<PermissionState>({});

    // Module colors for visual distinction
    moduleColors: Record<string, string> = {
        'Products': '#22c55e',
        'Categories': '#22c55e',
        'Inventory': '#22c55e',
        'Warehouses': '#22c55e',
        'Orders': '#f59e0b',
        'Shipments': '#3b82f6',
        'Reports': '#8b5cf6',
        'Users': '#ef4444',
        'Roles': '#ef4444',
        'Settings': '#64748b'
    };

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('roleId');
        if (id) {
            this.roleId.set(id);
            this.loadData(id);
        }
        this.loadRoles();
    }

    loadRoles(): void {
        this.userService.getRoles().subscribe();
    }

    loadData(roleId: string): void {
        this.loading.set(true);

        // Load role with permissions
        this.userService.getRoleById(roleId).subscribe({
            next: (role) => {
                // Load all permission groups
                this.userService.getPermissionsGrouped().subscribe({
                    next: () => {
                        this.initPermissionState(role);
                        this.loading.set(false);
                    },
                    error: () => this.loading.set(false)
                });
            },
            error: () => {
                this.loading.set(false);
                this.router.navigate(['/users/roles']);
            }
        });
    }

    private initPermissionState(role: RoleDto): void {
        const state: PermissionState = {};
        const rolePermissionIds = role.permissions.map(p => p.id);

        // Set all permissions to checked/unchecked based on role
        this.permissionGroups().forEach(group => {
            group.permissions.forEach(permission => {
                state[permission.id] = rolePermissionIds.includes(permission.id);
            });
        });

        this.permissionState.set(state);
        this.originalState.set({ ...state });
    }

    onRoleSelect(roleId: string): void {
        this.router.navigate(['/users/roles', roleId, 'permissions']);
    }

    togglePermission(permissionId: number): void {
        const current = this.permissionState();
        this.permissionState.set({
            ...current,
            [permissionId]: !current[permissionId]
        });
        this.checkForChanges();
    }

    isPermissionEnabled(permissionId: number): boolean {
        return this.permissionState()[permissionId] || false;
    }

    private checkForChanges(): void {
        const current = this.permissionState();
        const original = this.originalState();

        const hasChanges = Object.keys(current).some(
            key => current[+key] !== original[+key]
        );

        this.hasChanges.set(hasChanges);
    }

    getModuleColor(module: string): string {
        return this.moduleColors[module] || '#64748b';
    }

    onSave(): void {
        if (!this.roleId()) return;

        this.saving.set(true);

        const enabledPermissions = Object.entries(this.permissionState())
            .filter(([_, enabled]) => enabled)
            .map(([id, _]) => +id);

        this.userService.assignPermissions(this.roleId()!, { permissionIds: enabledPermissions }).subscribe({
            next: () => {
                this.saving.set(false);
                this.hasChanges.set(false);
                this.originalState.set({ ...this.permissionState() });
            },
            error: () => this.saving.set(false)
        });
    }

    onDiscard(): void {
        this.permissionState.set({ ...this.originalState() });
        this.hasChanges.set(false);
    }

    selectAllInGroup(group: PermissionGroupDto): void {
        const current = { ...this.permissionState() };
        group.permissions.forEach(p => current[p.id] = true);
        this.permissionState.set(current);
        this.checkForChanges();
    }

    deselectAllInGroup(group: PermissionGroupDto): void {
        const current = { ...this.permissionState() };
        group.permissions.forEach(p => current[p.id] = false);
        this.permissionState.set(current);
        this.checkForChanges();
    }
}
