import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Brand } from '../../models/brand.model';

@Component({
    selector: 'app-brand-form',
    templateUrl: './brand-form.component.html',
    standalone: false
})
export class BrandFormComponent implements OnInit, OnChanges {
    @Input() brand: Brand | null = null;
    @Output() save = new EventEmitter<any>();
    @Output() cancel = new EventEmitter<void>();

    brandForm: FormGroup;
    isEditMode = false;
    activeLanguage: 'en' | 'ar' = 'en';

    constructor(private fb: FormBuilder) {
        this.brandForm = this.fb.group({
            slug: ['', [Validators.required, Validators.pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)]],
            isActive: [true],
            logoUrl: [''],
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
        return this.brandForm.get('translations') as FormArray;
    }

    getTranslation(lang: 'en' | 'ar'): FormGroup {
        return this.translations.controls.find(c => c.get('languageCode')?.value === lang) as FormGroup;
    }

    get currentTranslation(): FormGroup {
        return this.getTranslation(this.activeLanguage);
    }

    ngOnInit(): void { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['brand']) {
            if (this.brand) {
                this.isEditMode = true;
                // Patch shared fields
                this.brandForm.patchValue({
                    slug: this.brand.slug,
                    isActive: this.brand.isActive,
                    logoUrl: this.brand.logoUrl
                });
                // Patch translations if available
                if ((this.brand as any).translations) {
                    (this.brand as any).translations.forEach((t: any) => {
                        const translationForm = this.getTranslation(t.languageCode);
                        if (translationForm) {
                            translationForm.patchValue(t);
                        }
                    });
                } else {
                    // Fallback: patch EN with current values
                    this.getTranslation('en').patchValue({
                        name: this.brand.name,
                        description: this.brand.description
                    });
                }
            } else {
                this.isEditMode = false;
                this.brandForm.reset({ isActive: true });
                this.translations.clear();
                this.translations.push(this.createTranslation('en'));
                this.translations.push(this.createTranslation('ar'));
            }
        }
    }

    setActiveLanguage(lang: 'en' | 'ar'): void {
        this.activeLanguage = lang;
    }

    toggleActive(): void {
        const current = this.brandForm.get('isActive')?.value;
        this.brandForm.patchValue({ isActive: !current });
    }

    onSubmit(): void {
        if (this.brandForm.valid) {
            const formValue = this.brandForm.value;
            // Filter out empty AR translation if not filled
            const translations = formValue.translations.filter((t: any) => t.name?.trim());
            this.save.emit({
                ...formValue,
                translations
            });
        } else {
            this.brandForm.markAllAsTouched();
            // Switch to EN tab if EN has errors
            if (this.getTranslation('en').invalid) {
                this.activeLanguage = 'en';
            }
        }
    }

    onCancel(): void {
        this.cancel.emit();
    }
}
