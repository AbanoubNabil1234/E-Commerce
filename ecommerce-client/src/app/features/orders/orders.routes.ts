import { Routes } from '@angular/router';

export const ordersRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/order-list/order-list.component')
            .then(m => m.OrderListComponent),
        title: 'Orders'
    },
    {
        path: 'create',
        loadComponent: () => import('./pages/order-create/order-create.component')
            .then(m => m.OrderCreateComponent),
        title: 'Create Order'
    },
    {
        path: ':id',
        loadComponent: () => import('./pages/order-detail/order-detail.component')
            .then(m => m.OrderDetailComponent),
        title: 'Order Details'
    }
];
