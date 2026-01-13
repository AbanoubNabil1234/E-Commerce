import { Component, OnInit, OnDestroy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { ShipmentsService } from '../../services/shipments.service';
import { Shipment, ShipmentTracking } from '../../models/shipment.model';
import { ShipmentStatus } from '../../models/shipment-status.enum';
import { ShipmentMapComponent } from '../../components/shipment-map/shipment-map.component';
import { TrackingTimelineComponent } from '../../components/tracking-timeline/tracking-timeline.component';

interface TimelineStep {
    status: string;
    label: string;
    description?: string;
    location?: string;
    notes?: string;
    performedBy?: string;
    time?: string;
    isCompleted: boolean;
    isCurrent: boolean;
    isPending: boolean;
}

@Component({
    selector: 'app-shipment-detail',
    standalone: true,
    imports: [CommonModule, RouterModule, TranslateModule, ShipmentMapComponent, TrackingTimelineComponent],
    templateUrl: './shipment-detail.component.html'
})
export class ShipmentDetailComponent implements OnInit, OnDestroy {
    private route = inject(ActivatedRoute);
    private shipmentService = inject(ShipmentsService);
    private translateService = inject(TranslateService);
    private destroy$ = new Subject<void>();

    // Data
    shipment = signal<Shipment | null>(null);
    loading = signal(true);
    error = signal<string | null>(null);
    actionLoading = signal(false);

    // Enums
    ShipmentStatus = ShipmentStatus;

    // Toast
    showToast = false;
    toastMessage = '';
    toastType: 'success' | 'error' = 'success';

    // Timeline
    timeline = computed<TimelineStep[]>(() => {
        const shipment = this.shipment();
        if (!shipment) return [];
        return this.generateTimeline(shipment);
    });

    // Progress
    progressPercent = computed(() => {
        const shipment = this.shipment();
        if (!shipment) return 0;
        return this.getProgressPercent(shipment.status);
    });

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.loadShipment(+id);
        }
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    loadShipment(id: number): void {
        this.loading.set(true);
        this.error.set(null);

        this.shipmentService.getById(id)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (shipment) => {
                    this.shipment.set(shipment);
                    this.loading.set(false);
                },
                error: (err) => {
                    console.error('Failed to load shipment:', err);
                    this.error.set('Failed to load shipment details');
                    this.loading.set(false);
                }
            });
    }

    // Actions
    async markAsShipped(): Promise<void> {
        const shipment = this.shipment();
        if (!shipment) return;

        this.actionLoading.set(true);
        try {
            const updated = await this.shipmentService.markAsShipped(shipment.id).toPromise();
            this.shipment.set(updated!);
            this.showNotification('success', 'SHIPMENT_DETAILS.SHIPPED_SUCCESS');
        } catch {
            this.showNotification('error', 'SHIPMENT_DETAILS.SHIPPED_ERROR');
        } finally {
            this.actionLoading.set(false);
        }
    }

    async markAsDelivered(): Promise<void> {
        const shipment = this.shipment();
        if (!shipment) return;

        this.actionLoading.set(true);
        try {
            const updated = await this.shipmentService.markAsDelivered(shipment.id).toPromise();
            this.shipment.set(updated!);
            this.showNotification('success', 'SHIPMENT_DETAILS.DELIVERED_SUCCESS');
        } catch {
            this.showNotification('error', 'SHIPMENT_DETAILS.DELIVERED_ERROR');
        } finally {
            this.actionLoading.set(false);
        }
    }

    async updateStatus(status: ShipmentStatus, location?: string, notes?: string): Promise<void> {
        const shipment = this.shipment();
        if (!shipment) return;

        this.actionLoading.set(true);
        try {
            const updated = await this.shipmentService.updateStatus(shipment.id, {
                status, location, notes
            }).toPromise();
            this.shipment.set(updated!);
            this.showNotification('success', 'SHIPMENT_DETAILS.STATUS_UPDATED');
        } catch {
            this.showNotification('error', 'SHIPMENT_DETAILS.STATUS_ERROR');
        } finally {
            this.actionLoading.set(false);
        }
    }

    // Helpers
    getStatusClass(status: ShipmentStatus): string {
        const classes: Record<ShipmentStatus, string> = {
            [ShipmentStatus.Pending]: 'bg-amber-100 text-amber-800',
            [ShipmentStatus.Assigned]: 'bg-blue-100 text-blue-800',
            [ShipmentStatus.LabelCreated]: 'bg-purple-100 text-purple-800',
            [ShipmentStatus.PickedUp]: 'bg-indigo-100 text-indigo-800',
            [ShipmentStatus.InTransit]: 'bg-blue-100 text-blue-800',
            [ShipmentStatus.OutForDelivery]: 'bg-cyan-100 text-cyan-800',
            [ShipmentStatus.Delivered]: 'bg-green-100 text-green-800',
            [ShipmentStatus.Delayed]: 'bg-red-100 text-red-800',
            [ShipmentStatus.Failed]: 'bg-red-100 text-red-800',
            [ShipmentStatus.Returned]: 'bg-slate-100 text-slate-800',
            [ShipmentStatus.Cancelled]: 'bg-slate-100 text-slate-800'
        };
        return classes[status] || 'bg-slate-100 text-slate-800';
    }

    getProgressPercent(status: ShipmentStatus): number {
        const progress: Record<ShipmentStatus, number> = {
            [ShipmentStatus.Pending]: 10,
            [ShipmentStatus.Assigned]: 20,
            [ShipmentStatus.LabelCreated]: 30,
            [ShipmentStatus.PickedUp]: 45,
            [ShipmentStatus.InTransit]: 65,
            [ShipmentStatus.OutForDelivery]: 85,
            [ShipmentStatus.Delivered]: 100,
            [ShipmentStatus.Delayed]: 65,
            [ShipmentStatus.Failed]: 65,
            [ShipmentStatus.Returned]: 100,
            [ShipmentStatus.Cancelled]: 0
        };
        return progress[status] || 0;
    }

    getProgressClass(status: ShipmentStatus): string {
        if (status === ShipmentStatus.Delivered) return 'bg-green-500';
        if (status === ShipmentStatus.Delayed || status === ShipmentStatus.Failed) return 'bg-red-500';
        return 'bg-indigo-500';
    }

    formatDate(date: string | undefined): string {
        if (!date) return 'N/A';
        return new Date(date).toLocaleDateString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric'
        });
    }

    formatTime(date: string | undefined): string {
        if (!date) return '';
        return new Date(date).toLocaleTimeString('en-US', {
            hour: '2-digit', minute: '2-digit'
        });
    }

    formatDateTime(date: string | undefined): string {
        if (!date) return 'N/A';
        return new Date(date).toLocaleString('en-US', {
            month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
        });
    }

    private generateTimeline(shipment: Shipment): TimelineStep[] {
        const statusOrder = [
            ShipmentStatus.Pending,
            ShipmentStatus.Assigned,
            ShipmentStatus.PickedUp,
            ShipmentStatus.InTransit,
            ShipmentStatus.OutForDelivery,
            ShipmentStatus.Delivered
        ];

        // Convert current shipment status to string enum if numeric
        const currentStatus = this.normalizeStatus(shipment.status);
        const currentIndex = statusOrder.indexOf(currentStatus);
        const trackingMap = new Map<string, ShipmentTracking>();

        // Get the latest tracking event for each status
        shipment.trackingHistory?.forEach(t => {
            const normalizedStatus = this.normalizeStatus(t.status);
            if (!trackingMap.has(normalizedStatus) ||
                new Date(t.occurredAt) > new Date(trackingMap.get(normalizedStatus)!.occurredAt)) {
                trackingMap.set(normalizedStatus, t);
            }
        });

        return statusOrder.map((status, index) => {
            const tracking = trackingMap.get(status);
            return {
                status,
                label: this.getStatusLabel(status),
                description: tracking?.description, // Use API description
                location: tracking?.location,
                notes: tracking?.notes,
                performedBy: tracking?.performedByName, // Show who performed the action
                time: tracking ? this.formatDateTime(tracking.occurredAt) : undefined,
                isCompleted: index < currentIndex,
                isCurrent: index === currentIndex,
                isPending: index > currentIndex
            };
        });
    }

    // Convert numeric status to string enum value
    private normalizeStatus(status: ShipmentStatus | number | string): ShipmentStatus {
        const statusMap: Record<number | string, ShipmentStatus> = {
            0: ShipmentStatus.Pending,
            1: ShipmentStatus.Assigned,
            2: ShipmentStatus.LabelCreated,
            3: ShipmentStatus.PickedUp,
            4: ShipmentStatus.InTransit,
            5: ShipmentStatus.OutForDelivery,
            6: ShipmentStatus.Delivered,
            7: ShipmentStatus.Delayed,
            8: ShipmentStatus.Failed,
            9: ShipmentStatus.Returned,
            10: ShipmentStatus.Cancelled,
            'Pending': ShipmentStatus.Pending,
            'Assigned': ShipmentStatus.Assigned,
            'LabelCreated': ShipmentStatus.LabelCreated,
            'PickedUp': ShipmentStatus.PickedUp,
            'InTransit': ShipmentStatus.InTransit,
            'OutForDelivery': ShipmentStatus.OutForDelivery,
            'Delivered': ShipmentStatus.Delivered,
            'Delayed': ShipmentStatus.Delayed,
            'Failed': ShipmentStatus.Failed,
            'Returned': ShipmentStatus.Returned,
            'Cancelled': ShipmentStatus.Cancelled
        };
        return statusMap[status as keyof typeof statusMap] || status as ShipmentStatus;
    }

    private getStatusLabel(status: ShipmentStatus): string {
        const labels: Record<ShipmentStatus, string> = {
            [ShipmentStatus.Pending]: 'Order Confirmed',
            [ShipmentStatus.Assigned]: 'Courier Assigned',
            [ShipmentStatus.LabelCreated]: 'Label Created',
            [ShipmentStatus.PickedUp]: 'Picked Up',
            [ShipmentStatus.InTransit]: 'In Transit',
            [ShipmentStatus.OutForDelivery]: 'Out for Delivery',
            [ShipmentStatus.Delivered]: 'Delivered',
            [ShipmentStatus.Delayed]: 'Delayed',
            [ShipmentStatus.Failed]: 'Failed',
            [ShipmentStatus.Returned]: 'Returned',
            [ShipmentStatus.Cancelled]: 'Cancelled'
        };
        return labels[status] || status;
    }

    canMarkAsShipped(): boolean {
        const status = this.shipment()?.status;
        return status === ShipmentStatus.Pending ||
            status === ShipmentStatus.Assigned ||
            status === ShipmentStatus.PickedUp;
    }

    canMarkAsDelivered(): boolean {
        const status = this.shipment()?.status;
        return status === ShipmentStatus.InTransit ||
            status === ShipmentStatus.OutForDelivery;
    }

    private showNotification(type: 'success' | 'error', key: string): void {
        this.toastType = type;
        this.toastMessage = this.translateService.instant(key);
        this.showToast = true;
        setTimeout(() => this.showToast = false, 3000);
    }
}
