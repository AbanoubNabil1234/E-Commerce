import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Category, CategoryService } from '../../services/category.service';

@Component({
    selector: 'app-category-form',
    templateUrl: './category-form.component.html',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, TranslateModule]
})
export class CategoryFormComponent implements OnInit, OnChanges {
    @Input() category: Category | null = null;
    @Output() save = new EventEmitter<any>();
    @Output() cancel = new EventEmitter<void>();

    categoryForm: FormGroup;
    isEditMode = false;
    parents: Category[] = [];
    activeLanguage: 'en' | 'ar' = 'en';

    constructor(
        private fb: FormBuilder,
        private categoryService: CategoryService
    ) {
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

    private createTranslation(languageCode: string): FormGroup {
        return this.fb.group({
            languageCode: [languageCode],
            name: ['', languageCode === 'en' ? [Validators.required, Validators.maxLength(100)] : [Validators.maxLength(100)]],
            description: ['', [Validators.maxLength(500)]]
        });
    }

    get translations(): FormArray {
        return this.categoryForm.get('translations') as FormArray;
    }

    getTranslation(lang: 'en' | 'ar'): FormGroup {
        return this.translations.controls.find(c => c.get('languageCode')?.value === lang) as FormGroup;
    }

    get currentTranslation(): FormGroup {
        return this.getTranslation(this.activeLanguage);
    }

    ngOnInit(): void {
        this.loadParents();
    }

    loadParents(): void {
        this.categoryService.getDropdown().subscribe(parents => {
            this.parents = parents;
            if (this.isEditMode && this.category) {
                this.parents = this.parents.filter(p => p.id !== this.category!.id);
            }
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['category']) {
            if (this.category) {
                this.isEditMode = true;
                // Patch shared fields
                this.categoryForm.patchValue({
                    slug: this.category.slug,
                    parentId: this.category.parentId,
                    displayOrder: this.category.displayOrder,
                    isActive: this.category.isActive,
                    imageUrl: this.category.imageUrl
                });
                // Patch translations if available
                if ((this.category as any).translations) {
                    (this.category as any).translations.forEach((t: any) => {
                        const translationForm = this.getTranslation(t.languageCode);
                        if (translationForm) {
                            translationForm.patchValue(t);
                        }
                    });
                } else {
                    // Fallback: patch EN with current values
                    this.getTranslation('en').patchValue({
                        name: this.category.name,
                        description: this.category.description
                    });
                }
                // Re-filter parents
                if (this.parents.length > 0) {
                    this.parents = this.parents.filter(p => p.id !== this.category!.id);
                }
            } else {
                this.isEditMode = false;
                this.categoryForm.reset({ isActive: true, displayOrder: 0 });
                this.translations.clear();
                this.translations.push(this.createTranslation('en'));
                this.translations.push(this.createTranslation('ar'));
                this.loadParents();
            }
        }
    }

    setActiveLanguage(lang: 'en' | 'ar'): void {
        this.activeLanguage = lang;
    }

    toggleActive(): void {
        const current = this.categoryForm.get('isActive')?.value;
        this.categoryForm.patchValue({ isActive: !current });
    }

    onSubmit(): void {
        if (this.categoryForm.valid) {
            const formValue = this.categoryForm.value;
            // Filter out empty AR translation if not filled
            const translations = formValue.translations.filter((t: any) => t.name?.trim());
            this.save.emit({
                ...formValue,
                translations
            });
        } else {
            this.categoryForm.markAllAsTouched();
            if (this.getTranslation('en').invalid) {
                this.activeLanguage = 'en';
            }
        }
    }

    onCancel(): void {
        this.cancel.emit();
    }

    generateSlug(): void {
        if (!this.categoryForm.get('slug')?.dirty) {
            const name = this.getTranslation('en').get('name')?.value || '';
            const slug = name.toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)+/g, '');
            this.categoryForm.patchValue({ slug });
        }
    }
}
