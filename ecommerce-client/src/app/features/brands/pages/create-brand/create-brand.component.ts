// ==============================================
// create-brand.component.ts
// Create Brand Page - Enterprise ERP Style
// Matching Reference Images (Desktop/Tablet/Mobile)
// ==============================================

import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { BrandService } from '../../services/brand.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
    selector: 'app-create-brand',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        TranslateModule
    ],
    templateUrl: './create-brand.component.html'
})
export class CreateBrandComponent implements OnInit, OnDestroy {
    brandForm!: FormGroup;
    isSubmitting = false;
    autoGenerateSlug = true;
    logoPreview: string | null = null;
    bannerPreview: string | null = null;
    isDraggingLogo = false;
    isDraggingBanner = false;

    // Responsive
    isMobile = false;
    isTablet = false;

    // Character limits
    maxDescriptionLength = 500;

    private destroy$ = new Subject<void>();

    constructor(
        private fb: FormBuilder,
        private brandService: BrandService,
        private router: Router,
        private translate: TranslateService,
        private notificationService: NotificationService,
        private languageService: LanguageService
    ) {
        this.checkScreenSize();
    }

    @HostListener('window:resize')
    onResize() {
        this.checkScreenSize();
    }

    private checkScreenSize(): void {
        const width = window.innerWidth;
        this.isMobile = width < 768;
        this.isTablet = width >= 768 && width < 1024;
    }

    get dir(): string {
        return this.languageService.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    }

    get descriptionLength(): number {
        return this.brandForm?.get('description')?.value?.length || 0;
    }

    ngOnInit(): void {
        this.initForm();
        this.setupSlugAutoGeneration();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private initForm(): void {
        this.brandForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
            slug: ['', [Validators.required, Validators.pattern(/^[a-z0-9-]+$/)]],
            website: ['', [Validators.pattern(/^https?:\/\/.+/)]],
            description: ['', [Validators.maxLength(this.maxDescriptionLength)]],
            logoUrl: [''],
            bannerUrl: [''],
            isActive: [true]
        });
    }

    private setupSlugAutoGeneration(): void {
        this.brandForm.get('name')?.valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe(name => {
                if (this.autoGenerateSlug && name) {
                    const slug = this.generateSlug(name);
                    this.brandForm.patchValue({ slug }, { emitEvent: false });
                }
            });
    }

    private generateSlug(name: string): string {
        return name
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    }

    toggleAutoGenerateSlug(): void {
        this.autoGenerateSlug = !this.autoGenerateSlug;
        if (this.autoGenerateSlug) {
            const name = this.brandForm.get('name')?.value;
            if (name) {
                this.brandForm.patchValue({ slug: this.generateSlug(name) });
            }
        }
    }

    // File upload handlers
    onLogoDragOver(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        this.isDraggingLogo = true;
    }

    onLogoDragLeave(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        this.isDraggingLogo = false;
    }

    onLogoDrop(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        this.isDraggingLogo = false;

        const files = event.dataTransfer?.files;
        if (files?.length) {
            this.handleLogoFile(files[0]);
        }
    }

    onLogoFileSelect(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files?.length) {
            this.handleLogoFile(input.files[0]);
        }
    }

    private handleLogoFile(file: File): void {
        if (!file.type.startsWith('image/')) {
            this.notificationService.error(this.translate.instant('BRANDS.CREATE.INVALID_IMAGE'));
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            this.logoPreview = e.target?.result as string;
            this.brandForm.patchValue({ logoUrl: this.logoPreview });
        };
        reader.readAsDataURL(file);
    }

    removeLogo(): void {
        this.logoPreview = null;
        this.brandForm.patchValue({ logoUrl: '' });
    }

    // Banner upload (similar pattern)
    onBannerFileSelect(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files?.length) {
            this.handleBannerFile(input.files[0]);
        }
    }

    private handleBannerFile(file: File): void {
        if (!file.type.startsWith('image/')) {
            this.notificationService.error(this.translate.instant('BRANDS.CREATE.INVALID_IMAGE'));
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            this.bannerPreview = e.target?.result as string;
            this.brandForm.patchValue({ bannerUrl: this.bannerPreview });
        };
        reader.readAsDataURL(file);
    }

    removeBanner(): void {
        this.bannerPreview = null;
        this.brandForm.patchValue({ bannerUrl: '' });
    }

    // Form submission
    onSubmit(addAnother = false): void {
        if (this.brandForm.invalid) {
            this.brandForm.markAllAsTouched();
            return;
        }

        this.isSubmitting = true;
        const formValue = this.brandForm.value;

        const createRequest = {
            name: formValue.name,
            slug: formValue.slug,
            description: formValue.description,
            logoUrl: formValue.logoUrl,
            website: formValue.website,
            translations: [
                {
                    languageCode: 'en',
                    name: formValue.name,
                    description: formValue.description,
                    slug: formValue.slug
                }
            ]
        };

        this.brandService.create(createRequest)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: () => {
                    this.notificationService.success(this.translate.instant('MESSAGES.BRAND_CREATED'));
                    this.isSubmitting = false;

                    if (addAnother) {
                        this.resetForm();
                    } else {
                        this.router.navigate(['/brands']);
                    }
                },
                error: (error) => {
                    console.error('Failed to create brand:', error);
                    this.notificationService.error(this.translate.instant('COMMON.ERROR'));
                    this.isSubmitting = false;
                }
            });
    }

    private resetForm(): void {
        this.brandForm.reset({ isActive: true });
        this.logoPreview = null;
        this.bannerPreview = null;
        this.autoGenerateSlug = true;
    }

    onCancel(): void {
        this.router.navigate(['/brands']);
    }

    // Validation helpers
    isFieldInvalid(fieldName: string): boolean {
        const field = this.brandForm.get(fieldName);
        return !!(field && field.invalid && (field.dirty || field.touched));
    }

    getFieldError(fieldName: string): string {
        const field = this.brandForm.get(fieldName);
        if (field?.errors) {
            if (field.errors['required']) return this.translate.instant('VALIDATION.REQUIRED');
            if (field.errors['minlength']) return this.translate.instant('VALIDATION.MIN_LENGTH', { min: field.errors['minlength'].requiredLength });
            if (field.errors['maxlength']) return this.translate.instant('VALIDATION.MAX_LENGTH', { max: field.errors['maxlength'].requiredLength });
            if (field.errors['pattern']) return this.translate.instant('VALIDATION.INVALID_FORMAT');
        }
        return '';
    }
}
