// Dashboard Feature Routes - Now loads Analytics Dashboard
import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('../analytics/pages/analytics-dashboard/analytics-dashboard.component')
            .then(m => m.AnalyticsDashboardComponent)
    },
];
