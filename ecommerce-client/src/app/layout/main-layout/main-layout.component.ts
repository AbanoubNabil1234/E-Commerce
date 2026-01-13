import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { BottomTabsComponent } from '../../shared/components/bottom-tabs/bottom-tabs.component';

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [
        RouterModule,
        CommonModule,
        SidebarComponent,
        HeaderComponent,
        BottomTabsComponent
    ],
    templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {
    isMobileSidebarOpen = false;

    toggleMobileSidebar(): void {
        this.isMobileSidebarOpen = !this.isMobileSidebarOpen;
    }

    closeMobileSidebar(): void {
        this.isMobileSidebarOpen = false;
    }

    onFabClick(): void {
        // Handle FAB click - open quick add modal
        console.log('FAB clicked from main layout');
    }
}
