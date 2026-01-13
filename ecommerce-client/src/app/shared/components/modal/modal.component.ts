// ==============================================
// modal.component.ts
// Reusable modal dialog component
// ==============================================

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-modal',
    standalone: true,
    imports: [],
    templateUrl: './modal.component.html',
})
export class ModalComponent {
    @Input() isOpen = false;
    @Input() title = '';
    @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

    @Output() close = new EventEmitter<void>();
}
