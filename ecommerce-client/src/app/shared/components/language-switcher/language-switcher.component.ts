import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, SupportedLanguage } from '../../../core/services/language.service';

/**
 * Language Switcher Component
 * Provides a toggle button for switching between English and Arabic
 */
@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      (click)="toggleLanguage()"
      [disabled]="isLoading"
      class="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200
             bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300
             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
             disabled:opacity-50 disabled:cursor-not-allowed">
      
      <!-- Loading Spinner -->
      <svg *ngIf="isLoading" class="w-4 h-4 text-gray-500 animate-spin" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>

      <!-- Globe Icon -->
      <svg *ngIf="!isLoading" class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>

      <!-- Language Name -->
      <span class="text-gray-700">{{ currentLanguageName }}</span>

      <!-- Arrow -->
      <svg class="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  `
})
export class LanguageSwitcherComponent {
  isLoading = false;

  constructor(private languageService: LanguageService) { }

  get currentLanguageName(): string {
    return this.languageService.currentLanguageConfig.nativeName;
  }

  async toggleLanguage(): Promise<void> {
    this.isLoading = true;
    try {
      await this.languageService.toggleLanguage();
    } finally {
      this.isLoading = false;
    }
  }
}
