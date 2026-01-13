import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StorefrontHeaderComponent } from './storefront-header/storefront-header.component';
import { StorefrontFooterComponent } from './storefront-footer/storefront-footer.component';
import { MobileBottomNavComponent } from './mobile-bottom-nav/mobile-bottom-nav.component';

@Component({
    selector: 'app-storefront-layout',
    standalone: true,
    imports: [RouterOutlet, StorefrontHeaderComponent, StorefrontFooterComponent, MobileBottomNavComponent],
    template: `
    <div class="min-h-screen flex flex-col bg-white dark:bg-dark-bg">
      <!-- Header -->
      <app-storefront-header />
      
      <!-- Main Content -->
      <main class="flex-1">
        <router-outlet />
      </main>
      
      <!-- Footer -->
      <app-storefront-footer />
      
      <!-- Mobile Bottom Navigation -->
      <app-mobile-bottom-nav class="lg:hidden" />
    </div>
  `,
    styles: [`
    :host {
      display: block;
    }
  `]
})
export class StorefrontLayoutComponent { }
