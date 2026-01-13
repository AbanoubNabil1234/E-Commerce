// ==============================================
// app.config.ts
// Application configuration with proper i18n initialization
// ==============================================
// Key: Uses APP_INITIALIZER to block app bootstrap
// until translations are fully loaded
// ==============================================

import { ApplicationConfig, APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routes } from './app.routes';

// ngx-translate imports
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

// Services
import { LanguageService } from './core/services/language.service';

// Interceptors
import { LanguageInterceptor } from './core/interceptors/language.interceptor';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';

/**
 * APP_INITIALIZER factory - blocks app bootstrap until translations are loaded.
 * This is the KEY to preventing the race condition.
 */
export function initializeApp(languageService: LanguageService): () => Promise<void> {
    return () => languageService.initializeLanguage();
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(withInterceptorsFromDi()),

        // ngx-translate configuration using v17 API
        importProvidersFrom(
            TranslateModule.forRoot({
                defaultLanguage: 'en'
            })
        ),

        // TranslateHttpLoader configuration (v17 API)
        provideTranslateHttpLoader({
            prefix: './assets/i18n/',
            suffix: '.json'
        }),

        // APP_INITIALIZER - blocks bootstrap until translations are loaded
        {
            provide: APP_INITIALIZER,
            useFactory: initializeApp,
            deps: [LanguageService],
            multi: true
        },

        // HTTP Interceptors (order matters!)
        { provide: HTTP_INTERCEPTORS, useClass: LanguageInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
};
