// ==============================================
// Users Feature Module Routes
// ==============================================

import { Routes } from '@angular/router';

export const usersRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/users-list/users-list.component')
            .then(m => m.UsersListComponent)
    },
    {
        path: 'create',
        loadComponent: () => import('./pages/user-form/user-form.component')
            .then(m => m.UserFormComponent)
    },
    {
        path: 'edit/:id',
        loadComponent: () => import('./pages/user-form/user-form.component')
            .then(m => m.UserFormComponent)
    },
    {
        path: 'roles',
        loadComponent: () => import('./pages/roles-list/roles-list.component')
            .then(m => m.RolesListComponent)
    },
    {
        path: 'roles/create',
        loadComponent: () => import('./pages/user-form/user-form.component')
            .then(m => m.UserFormComponent) // Reuse or create dedicated role form
    },
    {
        path: 'roles/:roleId/permissions',
        loadComponent: () => import('./pages/permissions-matrix/permissions-matrix.component')
            .then(m => m.PermissionsMatrixComponent)
    }
];
