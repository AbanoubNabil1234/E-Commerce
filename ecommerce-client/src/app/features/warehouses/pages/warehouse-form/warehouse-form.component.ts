// ==============================================
// warehouse-form.component.ts
// Create/Edit Warehouse - Enterprise ERP Style
// ==============================================

import { Component, OnInit, OnDestroy, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Subject, takeUntil, finalize } from 'rxjs';
import { WarehousesService } from '../../services/warehouses.service';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
    selector: 'app-warehouse-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterModule, TranslateModule],
    templateUrl: './warehouse-form.component.html'
})
export class WarehouseFormComponent implements OnInit, OnDestroy {
    private fb = inject(FormBuilder);
    private warehouseService = inject(WarehousesService);
    private router = inject(Router);
    private route = inject(ActivatedRoute);
    private languageService = inject(LanguageService);
    private destroy$ = new Subject<void>();

    warehouseForm!: FormGroup;
    loading = false;
    initializing = false;
    isEditMode = false;
    warehouseId?: number;
    isMobile = false;

    get dir(): string {
        return this.languageService.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    }

    @HostListener('window:resize')
    onResize() {
        this.isMobile = window.innerWidth < 768;
    }

    constructor() {
        this.initForm();
    }

    private initForm(): void {
        this.warehouseForm = this.fb.group({
            name: ['', [Validators.required, Validators.maxLength(100)]],
            code: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[A-Z0-9\-_]+$/)]],
            address: ['', [Validators.required, Validators.maxLength(200)]],
            city: ['', [Validators.required, Validators.maxLength(100)]],
            state: ['', [Validators.maxLength(100)]],
            country: ['', [Validators.required]],
            postalCode: ['', [Validators.maxLength(20)]],
            phone: ['', [Validators.maxLength(30)]],
            email: ['', [Validators.email, Validators.maxLength(100)]],
            isDefault: [false]
        });
    }

    ngOnInit() {
        this.isMobile = window.innerWidth < 768;
        this.warehouseId = Number(this.route.snapshot.paramMap.get('id'));

        if (this.warehouseId) {
            this.isEditMode = true;
            this.loadWarehouse();
        }
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    loadWarehouse(): void {
        if (!this.warehouseId) return;

        this.initializing = true;
        this.warehouseService.getById(this.warehouseId)
            .pipe(
                takeUntil(this.destroy$),
                finalize(() => this.initializing = false)
            )
            .subscribe({
                next: (data) => this.warehouseForm.patchValue(data),
                error: (err) => {
                    console.error('Error loading warehouse:', err);
                    this.router.navigate(['/warehouses']);
                }
            });
    }

    toUpperCase(fieldName: string): void {
        const value = this.warehouseForm.get(fieldName)?.value;
        if (value) {
            this.warehouseForm.get(fieldName)?.setValue(value.toUpperCase(), { emitEvent: false });
        }
    }

    generateCode(): void {
        // Generate a unique warehouse code
        const prefix = 'WH';
        const timestamp = Date.now().toString(36).toUpperCase().slice(-4);
        const random = Math.random().toString(36).toUpperCase().slice(-3);
        const code = `${prefix}-${timestamp}-${random}`;
        this.warehouseForm.get('code')?.setValue(code);
    }

    showError(control: string, error: string): boolean {
        const field = this.warehouseForm.get(control);
        return !!(field?.invalid && (field.dirty || field.touched) && field.errors?.[error]);
    }

    onSubmit(): void {
        if (this.warehouseForm.invalid) {
            // Mark all as touched to show validation errors
            Object.keys(this.warehouseForm.controls).forEach(key => {
                this.warehouseForm.get(key)?.markAsTouched();
            });
            return;
        }

        this.loading = true;
        const request = this.warehouseForm.value;

        const action = this.isEditMode
            ? this.warehouseService.update(this.warehouseId!, request)
            : this.warehouseService.create(request);

        action.pipe(
            takeUntil(this.destroy$),
            finalize(() => this.loading = false)
        )
            .subscribe({
                next: () => this.router.navigate(['/warehouses']),
                error: (err) => {
                    console.error('Error saving warehouse:', err);
                    // TODO: Show toast notification for error
                }
            });
    }
}
