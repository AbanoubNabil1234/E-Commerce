import { Routes } from '@angular/router';
import { InventoryListComponent } from './pages/inventory-list/inventory-list.component';
import { InventoryDetailsComponent } from './pages/inventory-details/inventory-details.component';
import { permissionGuard } from '../../core/guards/permission.guard';
import { Permissions } from '../../core/auth/auth.models';

export const INVENTORY_ROUTES: Routes = [
    {
        path: '',
        component: InventoryListComponent,
        canActivate: [permissionGuard],
        data: { permission: Permissions.INVENTORY_VIEW }
    },
    {
        path: ':id',
        component: InventoryDetailsComponent,
        canActivate: [permissionGuard],
        data: { permission: Permissions.INVENTORY_VIEW }
    }
];
