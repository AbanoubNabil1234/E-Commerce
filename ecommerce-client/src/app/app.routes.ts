// ==============================================
// app.routes.ts
// Root routing configuration
// ==============================================
// Responsibilities:
// - Defines top-level routes
// - Lazy loads feature modules
// - Configures route guards
// ==============================================

import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { authGuard, guestGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    // Storefront (public customer-facing pages)
    {
        path: 'store',
        loadChildren: () => import('./features/storefront/storefront.routes').then(m => m.storefrontRoutes),
        title: 'LUXE Store'
    },

    // Auth routes (guest only)
    {
        path: 'login',
        loadComponent: () => import('./features/auth/pages/login/login.component').then(m => m.LoginComponent),
        canActivate: [guestGuard]
    },

    // Unauthorized page
    {
        path: 'unauthorized',
        loadComponent: () => import('./features/auth/pages/unauthorized/unauthorized.component').then(m => m.UnauthorizedComponent)
    },

    // Protected routes (authenticated users)
    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
            },
            {
                path: 'brands',
                loadChildren: () => import('./features/brands/brands.module').then(m => m.BrandsModule)
            },
            {
                path: 'categories',
                loadChildren: () => import('./features/categories/categories.module').then(m => m.CategoriesModule)
            },
            {
                path: 'products',
                loadChildren: () => import('./features/products/products.routes').then(m => m.PRODUCTS_ROUTES)
            },
            {
                path: 'inventory',
                loadChildren: () => import('./features/inventory/inventory.routes').then(m => m.INVENTORY_ROUTES)
            },
            {
                path: 'warehouses',
                loadChildren: () => import('./features/warehouses/warehouses.routes').then(m => m.WAREHOUSES_ROUTES)
            },
            {
                path: 'orders',
                loadChildren: () => import('./features/orders/orders.routes').then(m => m.ordersRoutes)
            },
            {
                path: 'shipments',
                loadChildren: () => import('./features/shipments/shipments.routes').then(m => m.shipmentsRoutes)
            },
            {
                path: 'notifications',
                loadChildren: () => import('./features/notifications/notifications.routes').then(m => m.NOTIFICATIONS_ROUTES)
            },
            {
                path: 'analytics',
                loadChildren: () => import('./features/analytics/analytics.routes').then(m => m.ANALYTICS_ROUTES)
            },
            {
                path: 'users',
                loadChildren: () => import('./features/users/users.routes').then(m => m.usersRoutes)
            }
        ]
    },

    // Fallback
    { path: '**', redirectTo: 'dashboard' }
];
