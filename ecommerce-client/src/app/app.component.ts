// ==============================================
// app.component.ts
// Root application component
// ==============================================

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastContainerComponent } from './shared/components/toast-container/toast-container.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, ToastContainerComponent],
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'E-Commerce Platform';
    // Note: LanguageService is now initialized via APP_INITIALIZER
    // No need to inject it here - it's already initialized before app boots
}
