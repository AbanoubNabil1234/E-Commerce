import { Component, OnInit, OnDestroy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs';
import { OrderService } from '../../services/orders.service';
import { CreateOrderRequest, AddOrderItemRequest } from '../../models/order.model';
import { WarehousesService } from '../../../warehouses/services/warehouses.service';
import { WarehouseListDto } from '../../../warehouses/models/warehouse.models';
import { ProductService, ProductListItem } from '../../../products/services/product.service';
import { InventoryService } from '../../../inventory/services/inventory.service';

interface OrderLineItem {
    productId: number;
    sku: string;
    productName: string;
    productImageUrl?: string;
    unitPrice: number;
    quantity: number;
    availableStock: number;
    totalPrice: number;
}

@Component({
    selector: 'app-order-create',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule, TranslateModule],
    templateUrl: './order-create.component.html'
})
export class OrderCreateComponent implements OnInit, OnDestroy {
    private router = inject(Router);
    private orderService = inject(OrderService);
    private warehouseService = inject(WarehousesService);
    private productService = inject(ProductService);
    private inventoryService = inject(InventoryService);
    private translateService = inject(TranslateService);
    private destroy$ = new Subject<void>();

    // State
    warehouses = signal<WarehouseListDto[]>([]);
    products = signal<ProductListItem[]>([]);
    orderItems = signal<OrderLineItem[]>([]);
    loading = signal(false);
    productSearchLoading = signal(false);

    // Form
    customerId = signal('');
    customerName = signal('');
    selectedWarehouseId = signal<number | null>(null);
    productSearch = signal('');
    orderNotes = signal('');

    // Shipping
    shippingName = signal('');
    shippingAddress = signal('');
    shippingCity = signal('');
    shippingCountry = signal('');
    shippingPhone = signal('');

    // Product search
    showProductDropdown = signal(false);
    productSearchSubject = new Subject<string>();

    // Toast
    showToast = false;
    toastMessage = '';
    toastType: 'success' | 'error' = 'success';

    // Computed
    selectedWarehouse = computed(() => {
        const id = this.selectedWarehouseId();
        return this.warehouses().find(w => w.id === id);
    });

    subtotal = computed(() => {
        return this.orderItems().reduce((sum, item) => sum + item.totalPrice, 0);
    });

    taxRate = 0.05; // 5% tax
    taxAmount = computed(() => this.subtotal() * this.taxRate);
    shippingAmount = signal(0);
    totalAmount = computed(() => this.subtotal() + this.taxAmount() + this.shippingAmount());

    itemCount = computed(() => this.orderItems().reduce((sum, item) => sum + item.quantity, 0));

    canConfirm = computed(() => {
        return this.customerId().trim() !== '' &&
            this.selectedWarehouseId() !== null &&
            this.orderItems().length > 0 &&
            !this.hasStockIssues();
    });

    ngOnInit(): void {
        this.loadWarehouses();
        this.setupProductSearch();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    loadWarehouses(): void {
        this.warehouseService.getAll()
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (data) => this.warehouses.set(data.filter(w => w.isActive)),
                error: (err) => console.error('Failed to load warehouses', err)
            });
    }

    setupProductSearch(): void {
        this.productSearchSubject.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            takeUntil(this.destroy$)
        ).subscribe(term => {
            if (term.length >= 2) {
                this.searchProducts(term);
            } else {
                this.products.set([]);
            }
        });
    }

    onProductSearchChange(term: string): void {
        this.productSearch.set(term);
        this.productSearchSubject.next(term);
        this.showProductDropdown.set(term.length >= 2);
    }

    searchProducts(term: string): void {
        this.productSearchLoading.set(true);
        this.productService.getPaged(1, 10, term, undefined, undefined, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (response) => {
                    this.products.set(response.items);
                    this.productSearchLoading.set(false);
                },
                error: (err) => {
                    console.error('Product search error:', err);
                    this.productSearchLoading.set(false);
                }
            });
    }

    onWarehouseChange(warehouseId: number): void {
        this.selectedWarehouseId.set(warehouseId);
        // Reload stock for existing items
        this.refreshStockLevels();
    }

    refreshStockLevels(): void {
        const warehouseId = this.selectedWarehouseId();
        if (!warehouseId) return;

        const items = this.orderItems();
        items.forEach(item => {
            this.inventoryService.getStockByProduct(item.productId, warehouseId)
                .pipe(takeUntil(this.destroy$))
                .subscribe({
                    next: (stock) => {
                        this.updateItemStock(item.productId, stock.quantityAvailable);
                    },
                    error: () => {
                        this.updateItemStock(item.productId, 0);
                    }
                });
        });
    }

    updateItemStock(productId: number, available: number): void {
        const items = this.orderItems();
        const updated = items.map(item =>
            item.productId === productId
                ? { ...item, availableStock: available }
                : item
        );
        this.orderItems.set(updated);
    }

    addProduct(product: ProductListItem): void {
        // Check if already added
        const existing = this.orderItems().find(i => i.productId === product.id);
        if (existing) {
            this.increaseQuantity(existing);
            this.closeProductDropdown();
            return;
        }

        const warehouseId = this.selectedWarehouseId();

        // Get stock level if warehouse selected
        if (warehouseId) {
            this.inventoryService.getStockByProduct(product.id, warehouseId)
                .pipe(takeUntil(this.destroy$))
                .subscribe({
                    next: (stock) => {
                        this.addLineItem(product, stock.quantityAvailable);
                    },
                    error: () => {
                        this.addLineItem(product, 0);
                    }
                });
        } else {
            this.addLineItem(product, 0);
        }

        this.closeProductDropdown();
    }

    private addLineItem(product: ProductListItem, availableStock: number): void {
        const newItem: OrderLineItem = {
            productId: product.id,
            sku: product.sku,
            productName: product.name,
            productImageUrl: product.primaryImageUrl,
            unitPrice: product.unitPrice,
            quantity: 1,
            availableStock,
            totalPrice: product.unitPrice
        };
        this.orderItems.update(items => [...items, newItem]);
    }

    closeProductDropdown(): void {
        this.showProductDropdown.set(false);
        this.productSearch.set('');
        this.products.set([]);
    }

    increaseQuantity(item: OrderLineItem): void {
        if (item.quantity >= item.availableStock && item.availableStock > 0) {
            this.showNotification('error', 'CREATE_ORDER.EXCEEDS_STOCK');
            return;
        }
        this.updateQuantity(item.productId, item.quantity + 1);
    }

    decreaseQuantity(item: OrderLineItem): void {
        if (item.quantity > 1) {
            this.updateQuantity(item.productId, item.quantity - 1);
        }
    }

    updateQuantity(productId: number, quantity: number): void {
        const items = this.orderItems();
        const updated = items.map(item =>
            item.productId === productId
                ? { ...item, quantity, totalPrice: item.unitPrice * quantity }
                : item
        );
        this.orderItems.set(updated);
    }

    removeItem(productId: number): void {
        this.orderItems.update(items => items.filter(i => i.productId !== productId));
    }

    hasStockIssues(): boolean {
        return this.orderItems().some(item =>
            item.availableStock > 0 && item.quantity > item.availableStock
        );
    }

    getStockStatus(item: OrderLineItem): 'ok' | 'low' | 'exceeded' | 'unknown' {
        if (item.availableStock === 0) return 'unknown';
        if (item.quantity > item.availableStock) return 'exceeded';
        if (item.availableStock <= 5) return 'low';
        return 'ok';
    }

    // Actions
    async saveDraft(): Promise<void> {
        if (!this.customerId() || !this.selectedWarehouseId()) {
            this.showNotification('error', 'CREATE_ORDER.CUSTOMER_WAREHOUSE_REQUIRED');
            return;
        }

        this.loading.set(true);

        const request: CreateOrderRequest = {
            customerId: this.customerId(),
            warehouseId: this.selectedWarehouseId()!,
            shippingName: this.shippingName() || this.customerName(),
            shippingAddress: this.shippingAddress(),
            shippingCity: this.shippingCity(),
            shippingCountry: this.shippingCountry(),
            shippingPhone: this.shippingPhone(),
            notes: this.orderNotes()
        };

        try {
            const order = await this.orderService.create(request).toPromise();

            // Add items
            for (const item of this.orderItems()) {
                const addRequest: AddOrderItemRequest = {
                    productId: item.productId,
                    quantity: item.quantity
                };
                await this.orderService.addItem(order!.id, addRequest).toPromise();
            }

            this.showNotification('success', 'CREATE_ORDER.DRAFT_SAVED');
            this.router.navigate(['/orders', order!.id]);
        } catch (err) {
            console.error('Save draft error:', err);
            this.showNotification('error', 'CREATE_ORDER.SAVE_ERROR');
        } finally {
            this.loading.set(false);
        }
    }

    async confirmOrder(): Promise<void> {
        if (!this.canConfirm()) {
            return;
        }

        this.loading.set(true);

        try {
            // Create order
            const request: CreateOrderRequest = {
                customerId: this.customerId(),
                warehouseId: this.selectedWarehouseId()!,
                shippingName: this.shippingName() || this.customerName(),
                shippingAddress: this.shippingAddress(),
                shippingCity: this.shippingCity(),
                shippingCountry: this.shippingCountry(),
                shippingPhone: this.shippingPhone(),
                notes: this.orderNotes()
            };

            const order = await this.orderService.create(request).toPromise();

            // Add items
            for (const item of this.orderItems()) {
                const addRequest: AddOrderItemRequest = {
                    productId: item.productId,
                    quantity: item.quantity
                };
                await this.orderService.addItem(order!.id, addRequest).toPromise();
            }

            // Confirm (reserve stock)
            await this.orderService.confirm(order!.id).toPromise();

            this.showNotification('success', 'CREATE_ORDER.ORDER_CONFIRMED');
            this.router.navigate(['/orders', order!.id]);
        } catch (err) {
            console.error('Confirm order error:', err);
            this.showNotification('error', 'CREATE_ORDER.CONFIRM_ERROR');
        } finally {
            this.loading.set(false);
        }
    }

    formatCurrency(amount: number): string {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    }

    private showNotification(type: 'success' | 'error', key: string): void {
        this.toastType = type;
        this.toastMessage = this.translateService.instant(key);
        this.showToast = true;
        setTimeout(() => this.showToast = false, 3000);
    }
}
