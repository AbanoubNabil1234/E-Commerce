import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

export type SupportedLanguage = 'en' | 'ar';

export interface LanguageConfig {
    code: SupportedLanguage;
    name: string;
    nativeName: string;
    dir: 'ltr' | 'rtl';
}

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private readonly STORAGE_KEY = 'app_language';
    private readonly DEFAULT_LANGUAGE: SupportedLanguage = 'en';

    readonly supportedLanguages: LanguageConfig[] = [
        { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr' },
        { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl' }
    ];

    private currentLanguageSubject: BehaviorSubject<SupportedLanguage>;
    currentLanguage$: Observable<SupportedLanguage>;
    private initialized = false;

    constructor(private translate: TranslateService) {
        const savedLanguage = this.getSavedLanguage();
        this.currentLanguageSubject = new BehaviorSubject<SupportedLanguage>(savedLanguage);
        this.currentLanguage$ = this.currentLanguageSubject.asObservable();
    }

    /**
     * Initialize translations - MUST be called via APP_INITIALIZER
     * Returns a Promise that resolves when translations are fully loaded
     */
    async initializeLanguage(): Promise<void> {
        if (this.initialized) return;

        // Configure available languages
        this.translate.addLangs(['en', 'ar']);
        this.translate.setDefaultLang(this.DEFAULT_LANGUAGE);

        const savedLanguage = this.getSavedLanguage();

        // Wait for translations to load completely
        await firstValueFrom(this.translate.use(savedLanguage));

        // Apply DOM settings after translations are loaded
        this.applyDomSettings(savedLanguage);

        this.initialized = true;
        console.log(`[LanguageService] Initialized with language: ${savedLanguage}`);
    }

    /**
     * Get the current language code
     */
    get currentLanguage(): SupportedLanguage {
        return this.currentLanguageSubject.value;
    }

    /**
     * Get the current language configuration
     */
    get currentLanguageConfig(): LanguageConfig {
        return this.supportedLanguages.find(l => l.code === this.currentLanguage)
            ?? this.supportedLanguages[0];
    }

    /**
     * Check if current language is RTL
     */
    get isRTL(): boolean {
        return this.currentLanguageConfig.dir === 'rtl';
    }

    /**
     * Switch to a different language
     * CRITICAL: Update currentLanguageSubject BEFORE translate.use() to ensure
     * the LanguageInterceptor sends correct Accept-Language header when 
     * onLangChange handlers make HTTP requests.
     */
    async setLanguage(languageCode: SupportedLanguage): Promise<void> {
        if (this.currentLanguage === languageCode) return;

        if (!this.isSupported(languageCode)) {
            console.warn(`Language '${languageCode}' is not supported. Falling back to default.`);
            languageCode = this.DEFAULT_LANGUAGE;
        }

        // CRITICAL FIX: Update the Subject FIRST so interceptor has correct value
        // when onLangChange handlers fire HTTP requests
        this.currentLanguageSubject.next(languageCode);
        this.saveLanguage(languageCode);
        this.applyDomSettings(languageCode);

        // Now load translations (onLangChange will fire AFTER Subject is updated)
        await firstValueFrom(this.translate.use(languageCode));
    }

    /**
     * Toggle between EN and AR
     */
    toggleLanguage(): void {
        const newLang = this.currentLanguage === 'en' ? 'ar' : 'en';
        this.setLanguage(newLang);
    }

    /**
     * Check if a language code is supported
     */
    isSupported(languageCode: string): languageCode is SupportedLanguage {
        return this.supportedLanguages.some(l => l.code === languageCode);
    }

    /**
     * Apply language settings to the DOM (dir, lang attributes)
     */
    private applyDomSettings(languageCode: SupportedLanguage): void {
        const config = this.supportedLanguages.find(l => l.code === languageCode);
        if (!config) return;

        // Update HTML attributes
        document.documentElement.lang = languageCode;
        document.documentElement.dir = config.dir;

        // Add/remove RTL class for Tailwind
        if (config.dir === 'rtl') {
            document.documentElement.classList.add('rtl');
            document.documentElement.classList.remove('ltr');
        } else {
            document.documentElement.classList.add('ltr');
            document.documentElement.classList.remove('rtl');
        }
    }

    /**
     * Get saved language from localStorage
     */
    private getSavedLanguage(): SupportedLanguage {
        try {
            const saved = localStorage.getItem(this.STORAGE_KEY);
            if (saved && this.isSupported(saved)) {
                return saved;
            }
        } catch {
            // localStorage not available
        }

        // Try browser language
        const browserLang = navigator.language.split('-')[0];
        if (this.isSupported(browserLang)) {
            return browserLang;
        }

        return this.DEFAULT_LANGUAGE;
    }

    /**
     * Save language preference to localStorage
     */
    private saveLanguage(languageCode: SupportedLanguage): void {
        try {
            localStorage.setItem(this.STORAGE_KEY, languageCode);
        } catch {
            // localStorage not available
        }
    }
}
