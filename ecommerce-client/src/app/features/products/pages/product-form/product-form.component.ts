// ==============================================
// product-form.component.ts
// Create/Edit Product - Simplified to Database Fields
// ==============================================

import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil, finalize } from 'rxjs';
import { ProductService, Product, CreateProductRequest, UpdateProductRequest, ProductTranslation, ProductImage } from '../../services/product.service';
import { BrandService, Brand } from '../../../brands/services/brand.service';
import { CategoryService, Category } from '../../../categories/services/category.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { LanguageService } from '../../../../core/services/language.service';

interface LocalImage {
    id?: number;
    imageUrl: string;
    altText?: string;
    displayOrder: number;
    isPrimary: boolean;
    file?: File;
    preview?: string;
}

@Component({
    selector: 'app-product-form',
    standalone: true,
    imports: [CommonModule, RouterModule, ReactiveFormsModule, TranslateModule],
    templateUrl: './product-form.component.html',
})
export class ProductFormComponent implements OnInit, OnDestroy {
    private destroy$ = new Subject<void>();

    productForm!: FormGroup;
    isEditMode = false;
    productId?: number;
    isLoading = false;
    isSaving = false;
    activeTab: 'en' | 'ar' = 'en';

    brands: Brand[] = [];
    categories: Category[] = [];

    images: LocalImage[] = [];
    dragOverDropzone = false;
    dragOverIndex: number | null = null;

    // Responsive
    isMobile = false;
    isTablet = false;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private translate: TranslateService,
        private productService: ProductService,
        private brandService: BrandService,
        private categoryService: CategoryService,
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

    ngOnInit(): void {
        this.initForm();
        this.loadBrands();
        this.loadCategories();
        this.checkEditMode();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private initForm(): void {
        this.productForm = this.fb.group({
            // Database fields only
            sku: ['', [Validators.required, Validators.maxLength(50)]],
            brandId: [null, Validators.required],
            categoryId: [null, Validators.required],
            unitPrice: [null, [Validators.required, Validators.min(0.01)]],
            costPrice: [null, [Validators.min(0)]],
            isActive: [true],
            isFeatured: [false],

            // English Translation
            nameEn: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
            shortDescriptionEn: ['', Validators.maxLength(500)],
            descriptionEn: [''],

            // Arabic Translation
            nameAr: ['', [Validators.minLength(2), Validators.maxLength(200)]],
            shortDescriptionAr: ['', Validators.maxLength(500)],
            descriptionAr: ['']
        });
    }

    private loadBrands(): void {
        this.brandService.getAll()
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (brands) => this.brands = brands,
                error: (err) => console.error('Failed to load brands', err)
            });
    }

    private loadCategories(): void {
        this.categoryService.getDropdown()
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (categories) => this.categories = categories,
                error: (err) => console.error('Failed to load categories', err)
            });
    }

    private checkEditMode(): void {
        const id = this.route.snapshot.params['id'];
        if (id) {
            this.isEditMode = true;
            this.productId = +id;
            this.loadProduct(this.productId);
        }
    }

    private loadProduct(id: number): void {
        this.isLoading = true;

        this.productService.getById(id)
            .pipe(
                takeUntil(this.destroy$),
                finalize(() => this.isLoading = false)
            )
            .subscribe({
                next: (product: Product) => {
                    this.populateForm(product);
                },
                error: (err) => {
                    console.error('Failed to load product', err);
                    this.router.navigate(['/products']);
                }
            });
    }

    private populateForm(product: Product): void {
        this.productForm.patchValue({
            sku: product.sku,
            brandId: product.brandId,
            categoryId: product.categoryId,
            unitPrice: product.unitPrice,
            costPrice: product.costPrice,
            isActive: product.isActive,
            isFeatured: product.isFeatured,
            nameEn: product.name,
            shortDescriptionEn: product.shortDescription,
            descriptionEn: product.description
        });

        if (product.primaryImageUrl) {
            this.images = [{
                imageUrl: product.primaryImageUrl,
                altText: product.name,
                displayOrder: 0,
                isPrimary: true
            }];
        }
    }

    // Image handling
    onDropzoneClick(): void {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.multiple = true;
        input.onchange = (e) => this.onFileSelect(e);
        input.click();
    }

    onFileSelect(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files) {
            this.processFiles(Array.from(input.files));
        }
    }

    onDropzoneDragOver(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        this.dragOverDropzone = true;
    }

    onDropzoneDragLeave(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        this.dragOverDropzone = false;
    }

    onDropzoneDrop(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        this.dragOverDropzone = false;

        const files = event.dataTransfer?.files;
        if (files) {
            this.processFiles(Array.from(files));
        }
    }

    private processFiles(files: File[]): void {
        files.forEach((file) => {
            if (!file.type.startsWith('image/')) return;

            const reader = new FileReader();
            reader.onload = () => {
                this.images.push({
                    imageUrl: '',
                    altText: file.name,
                    displayOrder: this.images.length,
                    isPrimary: this.images.length === 0,
                    file: file,
                    preview: reader.result as string
                });
            };
            reader.readAsDataURL(file);
        });
    }

    setPrimaryImage(index: number): void {
        this.images.forEach((img, i) => img.isPrimary = i === index);
    }

    removeImage(index: number): void {
        const wasPrimary = this.images[index].isPrimary;
        this.images.splice(index, 1);
        if (wasPrimary && this.images.length > 0) {
            this.images[0].isPrimary = true;
        }
        this.images.forEach((img, i) => img.displayOrder = i);
    }

    onDragStart(event: DragEvent, index: number): void {
        event.dataTransfer?.setData('text/plain', index.toString());
    }

    onDragOver(event: DragEvent, index: number): void {
        event.preventDefault();
        this.dragOverIndex = index;
    }

    onDragLeave(): void {
        this.dragOverIndex = null;
    }

    onDrop(event: DragEvent, index: number): void {
        event.preventDefault();
        const fromIndex = parseInt(event.dataTransfer?.getData('text/plain') || '0', 10);
        if (fromIndex !== index) {
            const item = this.images.splice(fromIndex, 1)[0];
            this.images.splice(index, 0, item);
            this.images.forEach((img, i) => img.displayOrder = i);
        }
        this.dragOverIndex = null;
    }

    // Form submission
    onSubmit(addAnother = false): void {
        if (this.productForm.invalid) {
            this.markFormGroupTouched();
            return;
        }

        this.isSaving = true;

        if (this.isEditMode && this.productId) {
            const request = this.prepareUpdateRequest();
            this.productService.update(this.productId, request)
                .pipe(
                    takeUntil(this.destroy$),
                    finalize(() => this.isSaving = false)
                )
                .subscribe({
                    next: () => {
                        this.notificationService.success(this.translate.instant('MESSAGES.PRODUCT_UPDATED'));
                        this.router.navigate(['/products']);
                    },
                    error: (err) => {
                        console.error('Failed to update product', err);
                        this.notificationService.error(this.translate.instant('COMMON.ERROR'));
                    }
                });
        } else {
            const request = this.prepareCreateRequest();
            this.productService.create(request)
                .pipe(
                    takeUntil(this.destroy$),
                    finalize(() => this.isSaving = false)
                )
                .subscribe({
                    next: () => {
                        this.notificationService.success(this.translate.instant('MESSAGES.PRODUCT_CREATED'));
                        if (addAnother) {
                            this.resetForm();
                        } else {
                            this.router.navigate(['/products']);
                        }
                    },
                    error: (err) => {
                        console.error('Failed to create product', err);
                        this.notificationService.error(this.translate.instant('COMMON.ERROR'));
                    }
                });
        }
    }

    private resetForm(): void {
        this.productForm.reset({
            isActive: true,
            isFeatured: false
        });
        this.images = [];
    }

    private prepareCreateRequest(): CreateProductRequest {
        const value = this.productForm.value;
        return {
            sku: value.sku,
            slug: this.generateSlug(value.nameEn),
            unitPrice: value.unitPrice,
            costPrice: value.costPrice,
            brandId: value.brandId,
            categoryId: value.categoryId,
            isFeatured: value.isFeatured,
            isActive: value.isActive,
            translations: this.buildTranslations(value),
            images: this.buildImages()
        };
    }

    private prepareUpdateRequest(): UpdateProductRequest {
        const value = this.productForm.value;
        return {
            id: this.productId!,
            sku: value.sku,
            slug: this.generateSlug(value.nameEn),
            unitPrice: value.unitPrice,
            costPrice: value.costPrice,
            brandId: value.brandId,
            categoryId: value.categoryId,
            isFeatured: value.isFeatured,
            isActive: value.isActive,
            translations: this.buildTranslations(value),
            images: this.buildImages()
        };
    }

    private buildTranslations(value: any): ProductTranslation[] {
        const translations: ProductTranslation[] = [
            {
                languageCode: 'en',
                name: value.nameEn,
                shortDescription: value.shortDescriptionEn,
                description: value.descriptionEn
            }
        ];

        if (value.nameAr) {
            translations.push({
                languageCode: 'ar',
                name: value.nameAr,
                shortDescription: value.shortDescriptionAr,
                description: value.descriptionAr
            });
        }

        return translations;
    }

    private buildImages(): ProductImage[] {
        return this.images
            .filter(img => img.imageUrl || img.preview)
            .map((img, i) => ({
                id: img.id,
                imageUrl: img.imageUrl || img.preview || '',
                altText: img.altText,
                displayOrder: i,
                isPrimary: img.isPrimary
            }));
    }

    private generateSlug(name: string): string {
        return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    private markFormGroupTouched(): void {
        Object.values(this.productForm.controls).forEach(control => {
            control.markAsTouched();
        });
    }

    cancel(): void {
        this.router.navigate(['/products']);
    }

    // Validation helpers
    hasError(field: string): boolean {
        const control = this.productForm.get(field);
        return control ? control.invalid && control.touched : false;
    }

    getError(field: string, error: string): boolean {
        const control = this.productForm.get(field);
        return control ? control.hasError(error) && control.touched : false;
    }

    get descriptionLength(): number {
        return this.productForm.get('descriptionEn')?.value?.length || 0;
    }

    setActiveTab(tab: 'en' | 'ar'): void {
        this.activeTab = tab;
    }
}
