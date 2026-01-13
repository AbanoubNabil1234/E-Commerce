// ==============================================
// Users List Component
// ==============================================

import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { UserManagementService } from '../../services/user-management.service';
import { UserListDto, UserDisplay, UserStatus } from '../../models/user.models';

@Component({
    selector: 'app-users-list',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule, TranslateModule],
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {
    private userService = inject(UserManagementService);

    // State
    searchTerm = signal('');
    selectedRole = signal('all');
    selectedStatus = signal<UserStatus>('all');
    currentPage = signal(1);
    pageSize = 10;

    // Loading state
    loading = this.userService.loading;

    // Users data
    users = computed(() => {
        const allUsers = this.userService.users();
        const search = this.searchTerm().toLowerCase();
        const role = this.selectedRole();
        const status = this.selectedStatus();

        return allUsers
            .filter(user => {
                // Search filter
                if (search && !user.fullName.toLowerCase().includes(search) &&
                    !user.email.toLowerCase().includes(search)) {
                    return false;
                }
                // Role filter
                if (role !== 'all' && !user.roles.includes(role)) {
                    return false;
                }
                // Status filter
                if (status === 'active' && !user.isActive) return false;
                if (status === 'inactive' && user.isActive) return false;
                return true;
            })
            .map(user => this.userService.mapToUserDisplay(user));
    });

    // Roles for filter dropdown
    roles = this.userService.roles;

    ngOnInit(): void {
        this.loadUsers();
        this.loadRoles();
    }

    loadUsers(): void {
        this.userService.getUsers(this.currentPage(), this.pageSize, this.searchTerm()).subscribe();
    }

    loadRoles(): void {
        this.userService.getRoles().subscribe();
    }

    onSearch(): void {
        this.currentPage.set(1);
        this.loadUsers();
    }

    onRoleChange(role: string): void {
        this.selectedRole.set(role);
    }

    onStatusChange(status: UserStatus): void {
        this.selectedStatus.set(status);
    }

    resetFilters(): void {
        this.searchTerm.set('');
        this.selectedRole.set('all');
        this.selectedStatus.set('all');
        this.loadUsers();
    }

    onPageChange(page: number): void {
        this.currentPage.set(page);
        this.loadUsers();
    }

    toggleUserStatus(user: UserDisplay): void {
        this.userService.toggleUserStatus(user.id).subscribe(() => {
            this.loadUsers();
        });
    }

    deleteUser(user: UserDisplay): void {
        if (confirm(`Are you sure you want to delete ${user.fullName}?`)) {
            this.userService.deleteUser(user.id).subscribe(() => {
                this.loadUsers();
            });
        }
    }

    getAvatarUrl(user: UserDisplay): string {
        return user.profileImageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.fullName)}&background=6366f1&color=fff`;
    }

    formatDate(date: Date | undefined): string {
        if (!date) return 'Never';
        const d = new Date(date);
        const now = new Date();
        const diff = now.getTime() - d.getTime();

        if (diff < 60000) return 'Just now';
        if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
        if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;

        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
}
