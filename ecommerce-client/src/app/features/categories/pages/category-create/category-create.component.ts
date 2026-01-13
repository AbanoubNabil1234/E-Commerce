// ==============================================
// category-create.component.ts
// Category Form Page - Create & Edit Modes
// Enterprise ERP Style
// ==============================================

import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil, finalize } from 'rxjs';
import { CategoryService, Category, CreateCategoryRequest, UpdateCategoryRequest } from '../../services/category.service';
import { LanguageService } from '../../../../core/services/language.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
    selector: 'app-category-create',
    templateUrl: './category-create.component.html',
    standalone: true,
    imports: [CommonModule, RouterModule, ReactiveFormsModule, TranslateModule]
})
export class CategoryCreateComponent implements OnInit, OnDestroy {
    categoryForm: FormGroup;
    parents: Category[] = [];
    isSubmitting = false;
    isLoading = false;
    activeTab: 'en' | 'ar' = 'en';

    // Edit mode
    isEditMode = false;
    categoryId: number | null = null;
    currentCategory: Category | null = null;

    // Responsive
    isMobile = false;
    isTablet = false;

    // Image upload
    selectedImage: File | null = null;
    imagePreview: string | null = null;
    isDragging = false;

    private destroy$ = new Subject<void>();

    get dir(): string {
        return this.languageService.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    }

    get translations(): FormArray {
        return this.categoryForm.get('translations') as FormArray;
    }

    // Helper methods for form controls with proper typing
    get nameEnControl(): FormControl {
        return this.getTranslation('en').get('name') as FormControl;
    }

    get nameArControl(): FormControl {
        return this.getTranslation('ar').get('name') as FormControl;
    }

    get descEnControl(): FormControl {
        return this.getTranslation('en').get('description') as FormControl;
    }

    get descArControl(): FormControl {
        return this.getTranslation('ar').get('description') as FormControl;
    }

    get slugControl(): FormControl {
        return this.categoryForm.get('slug') as FormControl;
    }

    get pageTitle(): string {
        return this.isEditMode ? 'CATEGORIES.EDIT_CATEGORY' : 'CATEGORIES.CREATE_CATEGORY';
    }

    get submitButtonText(): string {
        return this.isEditMode ? 'CATEGORIES.UPDATE_CATEGORY' : 'CATEGORIES.CREATE_CATEGORY';
    }

    constructor(
        private fb: FormBuilder,
        private categoryService: CategoryService,
        private languageService: LanguageService,
        private translate: TranslateService,
        private notificationService: NotificationService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.checkScreenSize();
        this.categoryForm = this.fb.group({
            slug: ['', [Validators.required, Validators.pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)]],
            parentId: [null],
            displayOrder: [0],
            isActive: [true],
            imageUrl: [''],
            translations: this.fb.array([
                this.createTranslation('en'),
                this.createTranslation('ar')
            ])
        });
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

    private createTranslation(languageCode: string): FormGroup {
        return this.fb.group({
            languageCode: [languageCode],
            name: ['', languageCode === 'en' ? [Validators.required, Validators.maxLength(100)] : [Validators.maxLength(100)]],
            description: ['', [Validators.maxLength(500)]]
        });
    }

    getTranslation(lang: 'en' | 'ar'): FormGroup {
        return this.translations.controls.find(c => c.get('languageCode')?.value === lang) as FormGroup;
    }

    ngOnInit(): void {
        this.loadParents();

        // Check if we're in edit mode
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.categoryId = parseInt(id, 10);
            this.isEditMode = true;
            this.loadCategory();
        }
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    loadParents(): void {
        this.categoryService.getDropdown()
            .pipe(takeUntil(this.destroy$))
            .subscribe(parents => {
                this.parents = parents;
                // If editing, filter out the current category from parents
                if (this.isEditMode && this.categoryId) {
                    this.parents = this.parents.filter(p => p.id !== this.categoryId);
                }
            });
    }

    loadCategory(): void {
        if (!this.categoryId) return;

        this.isLoading = true;
        this.categoryService.getById(this.categoryId)
            .pipe(
                takeUntil(this.destroy$),
                finalize(() => this.isLoading = false)
            )
            .subscribe({
                next: (category) => {
                    this.currentCategory = category;
                    this.populateForm(category);
                },
                error: (error) => {
                    console.error('Failed to load category:', error);
                    this.notificationService.error(this.translate.instant('COMMON.ERROR'));
                    this.router.navigate(['/categories']);
                }
            });
    }

    populateForm(category: Category): void {
        // Patch main form fields
        this.categoryForm.patchValue({
            slug: category.slug,
            parentId: category.parentId,
            displayOrder: category.displayOrder || 0,
            isActive: category.isActive,
            imageUrl: category.imageUrl || ''
        });

        // Set image preview if exists
        if (category.imageUrl) {
            this.imagePreview = category.imageUrl;
        }

        // Populate translations
        if ((category as any).translations && (category as any).translations.length > 0) {
            (category as any).translations.forEach((t: any) => {
                const translationForm = this.getTranslation(t.languageCode);
                if (translationForm) {
                    translationForm.patchValue({
                        name: t.name,
                        description: t.description || ''
                    });
                }
            });
        } else {
            // Fallback: use main category name/description for EN
            this.getTranslation('en').patchValue({
                name: category.name,
                description: category.description || ''
            });
        }

        // Mark slug as dirty to prevent auto-regeneration
        this.categoryForm.get('slug')?.markAsDirty();
    }

    setActiveTab(tab: 'en' | 'ar'): void {
        this.activeTab = tab;
    }

    generateSlug(): void {
        if (!this.categoryForm.get('slug')?.dirty && !this.isEditMode) {
            const name = this.getTranslation('en').get('name')?.value || '';
            const slug = name.toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)+/g, '');
            this.categoryForm.patchValue({ slug });
        }
    }

    regenerateSlug(): void {
        const name = this.getTranslation('en').get('name')?.value || '';
        const slug = name.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '');
        this.categoryForm.patchValue({ slug });
        this.categoryForm.get('slug')?.markAsDirty();
    }

    toggleActive(): void {
        const current = this.categoryForm.get('isActive')?.value;
        this.categoryForm.patchValue({ isActive: !current });
    }

    // Image handling
    onDragOver(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        this.isDragging = true;
    }

    onDragLeave(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        this.isDragging = false;
    }

    onDrop(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        this.isDragging = false;

        const files = event.dataTransfer?.files;
        if (files && files.length > 0) {
            this.handleImageFile(files[0]);
        }
    }

    onImageSelect(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.handleImageFile(input.files[0]);
        }
    }

    private handleImageFile(file: File): void {
        if (!file.type.startsWith('image/')) {
            this.notificationService.error(this.translate.instant('VALIDATION.INVALID_IMAGE'));
            return;
        }

        this.selectedImage = file;
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result as string;
        };
        reader.readAsDataURL(file);
    }

    removeImage(): void {
        this.selectedImage = null;
        this.imagePreview = null;
        this.categoryForm.patchValue({ imageUrl: '' });
    }

    onSubmit(): void {
        if (this.categoryForm.invalid) {
            this.categoryForm.markAllAsTouched();
            if (this.getTranslation('en').invalid) {
                this.activeTab = 'en';
            }
            return;
        }

        this.isSubmitting = true;
        const formValue = this.categoryForm.value;

        // Extract name from English translation
        const enTranslation = formValue.translations.find((t: any) => t.languageCode === 'en');
        const name = enTranslation?.name || '';
        const description = enTranslation?.description || '';

        // Map translations with slug
        const translations = formValue.translations
            .filter((t: any) => t.name?.trim())
            .map((t: any) => ({
                languageCode: t.languageCode,
                name: t.name,
                description: t.description || '',
                slug: formValue.slug
            }));

        if (this.isEditMode && this.categoryId) {
            // Update existing category
            const request: UpdateCategoryRequest = {
                id: this.categoryId,
                parentId: formValue.parentId,
                name: name,
                slug: formValue.slug,
                description: description,
                imageUrl: formValue.imageUrl,
                displayOrder: formValue.displayOrder || 0,
                isActive: formValue.isActive,
                translations: translations
            };

            this.categoryService.update(this.categoryId, request)
                .pipe(takeUntil(this.destroy$))
                .subscribe({
                    next: () => {
                        this.notificationService.success(this.translate.instant('MESSAGES.CATEGORY_UPDATED'));
                        this.router.navigate(['/categories']);
                    },
                    error: (error) => {
                        console.error('Failed to update category:', error);
                        this.notificationService.error(this.translate.instant('COMMON.ERROR'));
                        this.isSubmitting = false;
                    }
                });
        } else {
            // Create new category
            const request: CreateCategoryRequest = {
                parentId: formValue.parentId,
                name: name,
                slug: formValue.slug,
                description: description,
                imageUrl: formValue.imageUrl,
                displayOrder: formValue.displayOrder || 0,
                translations: translations
            };

            this.categoryService.create(request)
                .pipe(takeUntil(this.destroy$))
                .subscribe({
                    next: () => {
                        this.notificationService.success(this.translate.instant('MESSAGES.CATEGORY_CREATED'));
                        this.router.navigate(['/categories']);
                    },
                    error: (error) => {
                        console.error('Failed to create category:', error);
                        this.notificationService.error(this.translate.instant('COMMON.ERROR'));
                        this.isSubmitting = false;
                    }
                });
        }
    }

    onCancel(): void {
        this.router.navigate(['/categories']);
    }
}
