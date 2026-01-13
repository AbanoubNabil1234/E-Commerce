import {
  TranslateService
} from "./chunk-BOQBRULU.js";
import {
  BehaviorSubject,
  firstValueFrom,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IGAGZNZV.js";
import {
  __async
} from "./chunk-N7TOP6ZD.js";

// src/app/core/services/language.service.ts
var LanguageService = class _LanguageService {
  translate;
  STORAGE_KEY = "app_language";
  DEFAULT_LANGUAGE = "en";
  supportedLanguages = [
    { code: "en", name: "English", nativeName: "English", dir: "ltr" },
    { code: "ar", name: "Arabic", nativeName: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", dir: "rtl" }
  ];
  currentLanguageSubject;
  currentLanguage$;
  initialized = false;
  constructor(translate) {
    this.translate = translate;
    const savedLanguage = this.getSavedLanguage();
    this.currentLanguageSubject = new BehaviorSubject(savedLanguage);
    this.currentLanguage$ = this.currentLanguageSubject.asObservable();
  }
  /**
   * Initialize translations - MUST be called via APP_INITIALIZER
   * Returns a Promise that resolves when translations are fully loaded
   */
  initializeLanguage() {
    return __async(this, null, function* () {
      if (this.initialized)
        return;
      this.translate.addLangs(["en", "ar"]);
      this.translate.setDefaultLang(this.DEFAULT_LANGUAGE);
      const savedLanguage = this.getSavedLanguage();
      yield firstValueFrom(this.translate.use(savedLanguage));
      this.applyDomSettings(savedLanguage);
      this.initialized = true;
      console.log(`[LanguageService] Initialized with language: ${savedLanguage}`);
    });
  }
  /**
   * Get the current language code
   */
  get currentLanguage() {
    return this.currentLanguageSubject.value;
  }
  /**
   * Get the current language configuration
   */
  get currentLanguageConfig() {
    return this.supportedLanguages.find((l) => l.code === this.currentLanguage) ?? this.supportedLanguages[0];
  }
  /**
   * Check if current language is RTL
   */
  get isRTL() {
    return this.currentLanguageConfig.dir === "rtl";
  }
  /**
   * Switch to a different language
   * CRITICAL: Update currentLanguageSubject BEFORE translate.use() to ensure
   * the LanguageInterceptor sends correct Accept-Language header when
   * onLangChange handlers make HTTP requests.
   */
  setLanguage(languageCode) {
    return __async(this, null, function* () {
      if (this.currentLanguage === languageCode)
        return;
      if (!this.isSupported(languageCode)) {
        console.warn(`Language '${languageCode}' is not supported. Falling back to default.`);
        languageCode = this.DEFAULT_LANGUAGE;
      }
      this.currentLanguageSubject.next(languageCode);
      this.saveLanguage(languageCode);
      this.applyDomSettings(languageCode);
      yield firstValueFrom(this.translate.use(languageCode));
    });
  }
  /**
   * Toggle between EN and AR
   */
  toggleLanguage() {
    const newLang = this.currentLanguage === "en" ? "ar" : "en";
    this.setLanguage(newLang);
  }
  /**
   * Check if a language code is supported
   */
  isSupported(languageCode) {
    return this.supportedLanguages.some((l) => l.code === languageCode);
  }
  /**
   * Apply language settings to the DOM (dir, lang attributes)
   */
  applyDomSettings(languageCode) {
    const config = this.supportedLanguages.find((l) => l.code === languageCode);
    if (!config)
      return;
    document.documentElement.lang = languageCode;
    document.documentElement.dir = config.dir;
    if (config.dir === "rtl") {
      document.documentElement.classList.add("rtl");
      document.documentElement.classList.remove("ltr");
    } else {
      document.documentElement.classList.add("ltr");
      document.documentElement.classList.remove("rtl");
    }
  }
  /**
   * Get saved language from localStorage
   */
  getSavedLanguage() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved && this.isSupported(saved)) {
        return saved;
      }
    } catch {
    }
    const browserLang = navigator.language.split("-")[0];
    if (this.isSupported(browserLang)) {
      return browserLang;
    }
    return this.DEFAULT_LANGUAGE;
  }
  /**
   * Save language preference to localStorage
   */
  saveLanguage(languageCode) {
    try {
      localStorage.setItem(this.STORAGE_KEY, languageCode);
    } catch {
    }
  }
  static \u0275fac = function LanguageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageService)(\u0275\u0275inject(TranslateService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LanguageService, factory: _LanguageService.\u0275fac, providedIn: "root" });
};

export {
  LanguageService
};
//# sourceMappingURL=chunk-SBRLR34M.js.map
