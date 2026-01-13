import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { OrderService } from '../../../orders/services/orders.service';
import { ShipmentsService } from '../../services/shipments.service';
import { WarehousesService } from '../../../warehouses/services/warehouses.service';
import { OrderListItem } from '../../../orders/models/order.model';
import { WarehouseListDto } from '../../../warehouses/models/warehouse.models';
import { CourierDto } from '../../models/shipment.model';
import { debounceTime } from 'rxjs';

@Component({
    selector: 'app-shipment-create',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, TranslateModule, RouterModule],
    templateUrl: './shipment-create.component.html'
})
export class ShipmentCreateComponent implements OnInit {
    private fb = inject(FormBuilder);
    private router = inject(Router);
    private orderService = inject(OrderService);
    private shipmentService = inject(ShipmentsService);
    private warehouseService = inject(WarehousesService);
    private translate = inject(TranslateService);

    // Stepper
    currentStep = signal(1);
    totalSteps = 5;
    steps = [
        { number: 1, label: 'SHIPMENTS.CREATE.STEP_ORDER', status: 'active' },
        { number: 2, label: 'SHIPMENTS.CREATE.STEP_PACKAGE', status: 'pending' },
        { number: 3, label: 'SHIPMENTS.CREATE.STEP_LOGISTICS', status: 'pending' },
        { number: 4, label: 'SHIPMENTS.CREATE.STEP_WAREHOUSE', status: 'pending' },
        { number: 5, label: 'SHIPMENTS.CREATE.STEP_CONFIRM', status: 'pending' }
    ];

    // Forms
    logisticsForm: FormGroup;
    packageForm: FormGroup;
    warehouseForm: FormGroup;

    // Data
    orders = signal<OrderListItem[]>([]);
    warehouses = signal<WarehouseListDto[]>([]);
    couriers = signal<CourierDto[]>([]);
    selectedOrder = signal<OrderListItem | null>(null);

    // Loading & Error
    loading = signal(false);
    ordersLoading = signal(false);
    error = signal<string | null>(null);

    // Cost Calculation
    baseFreight = signal(0);
    surcharges = signal(0);
    tax = signal(0);
    totalCost = computed(() => this.baseFreight() + this.surcharges() + this.tax());

    // Selected Courier Name (computed for template)
    selectedCourierName = computed(() => {
        const carrierId = this.logisticsForm?.value?.carrierId;
        if (!carrierId) return '-';
        const courier = this.couriers().find(c => c.id === Number(carrierId));
        return courier?.name || '-';
    });

    constructor() {
        this.packageForm = this.fb.group({
            weight: [0, [Validators.required, Validators.min(0.1)]],
            length: [0, [Validators.required, Validators.min(1)]],
            width: [0, [Validators.required, Validators.min(1)]],
            height: [0, [Validators.required, Validators.min(1)]],
            specialHandling: [''],
            isFragile: [false],
            keepUpright: [false]
        });

        this.logisticsForm = this.fb.group({
            carrierId: ['', Validators.required],
            shippingMethod: ['', Validators.required],
            trackingNumber: [''],
            estimatedDeliveryDate: ['', Validators.required]
        });

        this.warehouseForm = this.fb.group({
            warehouseId: [null, Validators.required]
        });

        // Cost Updates based on weight
        this.packageForm.get('weight')?.valueChanges.pipe(
            debounceTime(500)
        ).subscribe(weight => {
            if (weight) {
                this.calculateCost(weight);
            }
        });
    }

    ngOnInit(): void {
        this.loadOrders();
        this.loadWarehouses();
        this.loadCouriers();
    }

    // Data Loading
    loadOrders(): void {
        this.ordersLoading.set(true);
        this.orderService.getAll({ status: 'Confirmed' }).subscribe({
            next: (data) => {
                this.orders.set(data);
                this.ordersLoading.set(false);
            },
            error: () => {
                this.ordersLoading.set(false);
                this.error.set('Failed to load eligible orders');
            }
        });
    }

    loadWarehouses(): void {
        this.warehouseService.getActive().subscribe(data => this.warehouses.set(data));
    }

    loadCouriers(): void {
        this.shipmentService.getCarriers().subscribe(data => this.couriers.set(data));
    }

    // Workflow Actions
    selectOrder(order: OrderListItem): void {
        this.selectedOrder.set(order);
        this.nextStep();
    }

    nextStep(): void {
        if (this.currentStep() < this.totalSteps) {
            this.currentStep.update(v => v + 1);
            this.updateStepStatuses();
        }
    }

    prevStep(): void {
        if (this.currentStep() > 1) {
            this.currentStep.update(v => v - 1);
            this.updateStepStatuses();
        }
    }

    updateStepStatuses(): void {
        const current = this.currentStep();
        this.steps = this.steps.map(step => ({
            ...step,
            status: step.number < current ? 'completed' : step.number === current ? 'active' : 'pending'
        }));
    }

    // Logic
    calculateCost(weight: number): void {
        const base = 15 + (weight * 2.5);
        const methodMultiplier = this.logisticsForm.value.shippingMethod === 'Express' ? 1.5 : 1;

        this.baseFreight.set(base * methodMultiplier);
        this.surcharges.set(this.baseFreight() * 0.1);
        this.tax.set((this.baseFreight() + this.surcharges()) * 0.08);
    }

    generateTracking(): void {
        const carrier = this.couriers().find(c => c.id === Number(this.logisticsForm.value.carrierId));
        const prefix = carrier ? carrier.code.substring(0, 3).toUpperCase() : 'TRK';
        const random = Math.floor(Math.random() * 1000000000);
        this.logisticsForm.patchValue({ trackingNumber: `${prefix}-${random}` });
    }

    async submitShipment(): Promise<void> {
        if (this.loading()) return;

        const order = this.selectedOrder();
        if (!order) {
            this.error.set('Please select an order');
            return;
        }

        const warehouseId = this.warehouseForm.value.warehouseId;
        if (!warehouseId || warehouseId === 0) {
            this.error.set('Please select a warehouse');
            return;
        }

        const carrierId = this.logisticsForm.value.carrierId;
        if (!carrierId) {
            this.error.set('Please select a carrier');
            return;
        }

        this.loading.set(true);
        this.error.set(null);

        try {
            const request = {
                orderId: order.id,
                warehouseId: Number(warehouseId),
                carrierId: Number(carrierId),
                trackingNumber: this.logisticsForm.value.trackingNumber || '',
                shippingMethod: this.logisticsForm.value.shippingMethod || 'Standard',
                estimatedDeliveryDate: new Date(this.logisticsForm.value.estimatedDeliveryDate).toISOString(),
                shippingCost: this.totalCost(),
                weight: this.packageForm.value.weight || 1,
                dimensions: `${this.packageForm.value.length || 10}x${this.packageForm.value.width || 10}x${this.packageForm.value.height || 10} cm`,
                items: []
            };

            console.log('Submitting shipment:', request);

            await this.shipmentService.create(request as any).toPromise();
            this.router.navigate(['/shipments']);
        } catch (err) {
            console.error('Shipment creation error:', err);
            this.error.set('Failed to create shipment. Please check all fields.');
        } finally {
            this.loading.set(false);
        }
    }
}
