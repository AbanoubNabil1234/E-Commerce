import { Routes } from '@angular/router';

export const shipmentsRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/shipment-list/shipment-list.component')
            .then(m => m.ShipmentListComponent),
        title: 'Shipments'
    },
    {
        path: 'create',
        loadComponent: () => import('./pages/shipment-create/shipment-create.component')
            .then(m => m.ShipmentCreateComponent),
        title: 'Create Shipment'
    },
    {
        path: ':id',
        loadComponent: () => import('./pages/shipment-detail/shipment-detail.component')
            .then(m => m.ShipmentDetailComponent),
        title: 'Shipment Details'
    }
];
