// ==============================================
// login.component.ts - Login Page
// ==============================================
// Features:
// - Email/Password form with validation
// - Remember me option
// - Loading state
// - Error handling
// - RTL/LTR support
// - Redirect after login
// ==============================================

import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../../core/services/auth.service';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterLink,
        TranslateModule
    ],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    private fb = inject(FormBuilder);
    private authService = inject(AuthService);
    private router = inject(Router);
    private translate = inject(TranslateService);
    private languageService = inject(LanguageService);

    // Form
    loginForm!: FormGroup;

    // State
    isLoading = signal(false);
    showPassword = signal(false);
    errorMessage = signal<string | null>(null);

    // RTL
    isRtl = signal(false);

    ngOnInit(): void {
        this.initForm();
        this.setupRtl();

        // Clear any previous errors
        this.authService.clearError();
    }

    private initForm(): void {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            rememberMe: [false]
        });
    }

    private setupRtl(): void {
        this.isRtl.set(this.languageService.isRTL);
        // Could subscribe to language changes if needed
    }

    onSubmit(): void {
        if (this.loginForm.invalid) {
            this.markFormGroupTouched();
            return;
        }

        this.isLoading.set(true);
        this.errorMessage.set(null);

        const { email, password, rememberMe } = this.loginForm.value;

        this.authService.login({ email, password }, rememberMe).subscribe({
            next: () => {
                // Check for redirect URL
                const redirectUrl = sessionStorage.getItem('redirectUrl');
                sessionStorage.removeItem('redirectUrl');

                this.router.navigate([redirectUrl || '/dashboard']);
            },
            error: (error) => {
                this.isLoading.set(false);

                // Get translated error message
                const errorKey = error.error?.detail || 'LOGIN.ERROR.INVALID_CREDENTIALS';
                this.errorMessage.set(errorKey);
            }
        });
    }

    togglePassword(): void {
        this.showPassword.set(!this.showPassword());
    }

    switchLanguage(): void {
        const currentLang = this.translate.currentLang;
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        this.languageService.setLanguage(newLang);
        this.isRtl.set(newLang === 'ar');
    }

    private markFormGroupTouched(): void {
        Object.keys(this.loginForm.controls).forEach(key => {
            this.loginForm.get(key)?.markAsTouched();
        });
    }

    // Getters for template
    get emailControl() { return this.loginForm.get('email'); }
    get passwordControl() { return this.loginForm.get('password'); }
}
