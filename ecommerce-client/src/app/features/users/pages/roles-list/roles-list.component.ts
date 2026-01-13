// ==============================================
// Roles List Component
// ==============================================

import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { UserManagementService } from '../../services/user-management.service';
import { RoleListDto } from '../../models/user.models';

@Component({
    selector: 'app-roles-list',
    standalone: true,
    imports: [CommonModule, RouterModule, TranslateModule],
    templateUrl: './roles-list.component.html',
    styleUrl: './roles-list.component.scss'
})
export class RolesListComponent implements OnInit {
    private userService = inject(UserManagementService);

    loading = signal(false);
    roles = this.userService.roles;

    // Role icons mapping
    roleIcons: Record<string, { icon: string; color: string }> = {
        'SuperAdmin': { icon: 'fas fa-crown', color: '#6366f1' },
        'Admin': { icon: 'fas fa-user-shield', color: '#3b82f6' },
        'Logistics Manager': { icon: 'fas fa-truck', color: '#22c55e' },
        'Warehouse Staff': { icon: 'fas fa-warehouse', color: '#06b6d4' },
        'Support Agent': { icon: 'fas fa-headset', color: '#f59e0b' },
        'Finance Manager': { icon: 'fas fa-chart-line', color: '#ef4444' }
    };

    ngOnInit(): void {
        this.loadRoles();
    }

    loadRoles(): void {
        this.loading.set(true);
        this.userService.getRoles().subscribe({
            next: () => this.loading.set(false),
            error: () => this.loading.set(false)
        });
    }

    getRoleIcon(roleName: string): { icon: string; color: string } {
        return this.roleIcons[roleName] || { icon: 'fas fa-user', color: '#64748b' };
    }

    deleteRole(role: RoleListDto): void {
        if (role.name === 'SuperAdmin' || role.name === 'Admin') {
            alert('Cannot delete protected role');
            return;
        }

        if (confirm(`Are you sure you want to delete the "${role.name}" role?`)) {
            this.userService.deleteRole(role.id).subscribe({
                next: () => this.loadRoles(),
                error: () => alert('Failed to delete role')
            });
        }
    }
}
