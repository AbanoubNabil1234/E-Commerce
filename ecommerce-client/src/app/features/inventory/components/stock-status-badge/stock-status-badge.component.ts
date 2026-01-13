import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-stock-status-badge',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    template: `
        <span [class]="badgeClass()" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold">
            <span [class]="dotClass()" class="w-1.5 h-1.5 rounded-full"></span>
            {{ label() | translate }}
        </span>
    `
})
export class StockStatusBadgeComponent {
    // Inputs: Expects either numbers to calculate status or direct boolean flags
    @Input() quantityOnHand: number = 0;
    @Input() reorderLevel?: number;

    // Computed status
    private status = computed(() => {
        if (this.quantityOnHand <= 0) return 'out';
        if (this.reorderLevel !== undefined && this.quantityOnHand <= this.reorderLevel) return 'low';
        return 'in';
    });

    // Badge styling based on status - Matching Product List ERP Style
    badgeClass = computed(() => {
        switch (this.status()) {
            case 'in': return 'bg-emerald-100 text-emerald-700';
            case 'low': return 'bg-amber-100 text-amber-700';
            case 'out': return 'bg-red-100 text-red-700';
            default: return 'bg-slate-100 text-slate-700';
        }
    });

    // Dot styling - Matching Product List ERP Style
    dotClass = computed(() => {
        switch (this.status()) {
            case 'in': return 'bg-emerald-500';
            case 'low': return 'bg-amber-500';
            case 'out': return 'bg-red-500';
            default: return 'bg-slate-500';
        }
    });

    // Translation key
    label = computed(() => {
        switch (this.status()) {
            case 'in': return 'INVENTORY.IN_STOCK';
            case 'low': return 'INVENTORY.LOW_STOCK';
            case 'out': return 'INVENTORY.OUT_OF_STOCK';
            default: return 'Unknown';
        }
    });
}

