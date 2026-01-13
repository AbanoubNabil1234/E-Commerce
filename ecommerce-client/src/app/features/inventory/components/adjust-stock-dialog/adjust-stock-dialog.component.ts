import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AdjustmentType } from '../../models/inventory.models';

@Component({
    selector: 'app-adjust-stock-dialog',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, TranslateModule],
    templateUrl: './adjust-stock-dialog.component.html',
    styleUrls: ['./adjust-stock-dialog.component.scss']
})
export class AdjustStockDialogComponent {
    @Input() isOpen = false;
    @Input() productName = '';
    @Input() currentQuantity = 0;
    @Input() type: AdjustmentType = AdjustmentType.SetAbsolute;
    @Input() isSubmitting = false;

    @Output() onClose = new EventEmitter<void>();
    @Output() onConfirm = new EventEmitter<{ quantity: number, reason: string }>();

    private fb = inject(FormBuilder);

    form = this.fb.group({
        quantity: [null as number | null, [Validators.required, Validators.min(1)]],
        reason: ['', [Validators.required, Validators.maxLength(200)]]
    });

    get titleKey(): string {
        switch (this.type) {
            case AdjustmentType.Increase: return 'INVENTORY.ACTIONS.INCREASE_STOCK';
            case AdjustmentType.Decrease: return 'INVENTORY.ACTIONS.DECREASE_STOCK';
            default: return 'INVENTORY.ACTIONS.ADJUST_STOCK';
        }
    }

    get iconBgClass(): string {
        switch (this.type) {
            case AdjustmentType.Increase: return 'bg-green-100 dark:bg-green-900/30';
            case AdjustmentType.Decrease: return 'bg-red-100 dark:bg-red-900/30';
            default: return 'bg-blue-100 dark:bg-blue-900/30';
        }
    }

    get iconClass(): string {
        switch (this.type) {
            case AdjustmentType.Increase: return 'text-green-600 dark:text-green-400';
            case AdjustmentType.Decrease: return 'text-red-600 dark:text-red-400';
            default: return 'text-blue-600 dark:text-blue-400';
        }
    }

    get submitBtnClass(): string {
        switch (this.type) {
            case AdjustmentType.Increase: return 'bg-green-600 hover:bg-green-500';
            case AdjustmentType.Decrease: return 'bg-red-600 hover:bg-red-500';
            default: return 'bg-blue-600 hover:bg-blue-500';
        }
    }

    submit() {
        if (this.form.valid) {
            const { quantity, reason } = this.form.value;
            this.onConfirm.emit({
                quantity: quantity!,
                reason: reason!
            });
        }
    }

    close() {
        this.form.reset();
        this.onClose.emit();
    }
}
