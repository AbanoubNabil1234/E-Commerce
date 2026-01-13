import { Component, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { NotificationDropdownComponent } from '../../../features/notifications/components/notification-dropdown/notification-dropdown.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, TranslateModule, LanguageSwitcherComponent, RouterModule, NotificationDropdownComponent],
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    @Output() toggleMobile = new EventEmitter<void>();

    isUserMenuOpen = false;

    breadcrumbs = [
        { label: 'HEADER.HOME', url: '/' },
        { label: 'SIDEBAR.DASHBOARD', url: '/dashboard', active: true }
    ];

    toggleUserMenu(): void {
        this.isUserMenuOpen = !this.isUserMenuOpen;
    }

    @HostListener('document:keydown.escape')
    onEscape(): void {
        this.isUserMenuOpen = false;
    }
}
