// ==============================================
// User Form Component (Create/Edit)
// ==============================================

import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { UserManagementService } from '../../services/user-management.service';
import { UserDto, CreateUserDto, UpdateUserDto, RoleListDto } from '../../models/user.models';

@Component({
    selector: 'app-user-form',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, TranslateModule],
    templateUrl: './user-form.component.html',
    styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit {
    private fb = inject(FormBuilder);
    private route = inject(ActivatedRoute);
    private router = inject(Router);
    private userService = inject(UserManagementService);

    // Form state
    form!: FormGroup;
    isEditMode = signal(false);
    userId = signal<string | null>(null);
    loading = signal(false);
    saving = signal(false);

    // Data
    user = this.userService.selectedUser;
    roles = this.userService.roles;

    // Page title
    pageTitle = computed(() => this.isEditMode() ? 'Edit User Profile' : 'Create New User');

    ngOnInit(): void {
        this.initForm();
        this.loadRoles();

        // Check if edit mode
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.isEditMode.set(true);
            this.userId.set(id);
            this.loadUser(id);
        }
    }

    private initForm(): void {
        this.form = this.fb.group({
            firstName: ['', [Validators.required, Validators.maxLength(50)]],
            lastName: ['', [Validators.required, Validators.maxLength(50)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', this.isEditMode() ? [] : [Validators.required, Validators.minLength(8)]],
            role: ['', Validators.required],
            warehouseId: [''],
            isActive: [true]
        });
    }

    private loadRoles(): void {
        this.userService.getRoles().subscribe();
    }

    private loadUser(id: string): void {
        this.loading.set(true);
        this.userService.getUserById(id).subscribe({
            next: (user) => {
                this.patchForm(user);
                this.loading.set(false);
            },
            error: () => {
                this.loading.set(false);
                this.router.navigate(['/users']);
            }
        });
    }

    private patchForm(user: UserDto): void {
        this.form.patchValue({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.roles[0] || '',
            isActive: user.isActive
        });

        // Remove password required for edit
        this.form.get('password')?.clearValidators();
        this.form.get('password')?.updateValueAndValidity();
    }

    onSubmit(): void {
        if (this.form.invalid) {
            this.markFormTouched();
            return;
        }

        this.saving.set(true);
        const formValue = this.form.value;

        if (this.isEditMode() && this.userId()) {
            const updateDto: UpdateUserDto = {
                firstName: formValue.firstName,
                lastName: formValue.lastName,
                email: formValue.email,
                isActive: formValue.isActive
            };

            this.userService.updateUser(this.userId()!, updateDto).subscribe({
                next: () => {
                    // Also update role if changed
                    this.userService.assignRoles(this.userId()!, { roles: [formValue.role] }).subscribe({
                        next: () => this.onSaveSuccess(),
                        error: () => this.saving.set(false)
                    });
                },
                error: () => this.saving.set(false)
            });
        } else {
            const createDto: CreateUserDto = {
                firstName: formValue.firstName,
                lastName: formValue.lastName,
                email: formValue.email,
                password: formValue.password,
                roles: [formValue.role]
            };

            this.userService.createUser(createDto).subscribe({
                next: () => this.onSaveSuccess(),
                error: () => this.saving.set(false)
            });
        }
    }

    private onSaveSuccess(): void {
        this.saving.set(false);
        this.router.navigate(['/users']);
    }

    private markFormTouched(): void {
        Object.keys(this.form.controls).forEach(key => {
            this.form.get(key)?.markAsTouched();
        });
    }

    onResetPassword(): void {
        if (!this.userId()) return;

        const newPassword = prompt('Enter new password (min 8 characters):');
        if (newPassword && newPassword.length >= 8) {
            this.userService.resetPassword(this.userId()!, { newPassword }).subscribe({
                next: () => alert('Password reset successfully'),
                error: () => alert('Failed to reset password')
            });
        }
    }

    onCancel(): void {
        this.router.navigate(['/users']);
    }

    // Form helpers
    isFieldInvalid(fieldName: string): boolean {
        const field = this.form.get(fieldName);
        return !!(field?.invalid && field?.touched);
    }

    getFieldError(fieldName: string): string {
        const field = this.form.get(fieldName);
        if (field?.hasError('required')) return 'This field is required';
        if (field?.hasError('email')) return 'Please enter a valid email';
        if (field?.hasError('minlength')) return `Minimum ${field.errors?.['minlength'].requiredLength} characters`;
        if (field?.hasError('maxlength')) return `Maximum ${field.errors?.['maxlength'].requiredLength} characters`;
        return '';
    }
}
