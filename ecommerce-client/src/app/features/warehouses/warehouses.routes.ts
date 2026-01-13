// warehouses.routes.ts
import { Routes } from '@angular/router';
import { permissionGuard } from '../../core/guards/permission.guard';

export const WAREHOUSES_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/warehouse-list/warehouse-list.component').then(m => m.WarehouseListComponent),
        canActivate: [permissionGuard],
        data: { permission: 'Warehouses.View' }
    },
    {
        path: 'create',
        loadComponent: () => import('./pages/warehouse-form/warehouse-form.component').then(m => m.WarehouseFormComponent),
        canActivate: [permissionGuard],
        data: { permission: 'Warehouses.Manage' }
    },
    {
        path: ':id/edit',
        loadComponent: () => import('./pages/warehouse-form/warehouse-form.component').then(m => m.WarehouseFormComponent),
        canActivate: [permissionGuard],
        data: { permission: 'Warehouses.Manage' }
    }
];
