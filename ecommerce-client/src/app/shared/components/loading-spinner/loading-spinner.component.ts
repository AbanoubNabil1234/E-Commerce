// ==============================================
// loading-spinner.component.ts
// Loading spinner component
// ==============================================

import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-loading-spinner',
    standalone: true,
    template: `
    <div class="flex justify-center items-center" [class]="size">
      <div class="animate-spin rounded-full border-b-2 border-primary-600"></div>
    </div>
  `,
})
export class LoadingSpinnerComponent {
    @Input() size: 'sm' | 'md' | 'lg' = 'md';
}
