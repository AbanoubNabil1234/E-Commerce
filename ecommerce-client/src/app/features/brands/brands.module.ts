import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { BrandListComponent } from './pages/brand-list/brand-list.component';
import { BrandFormComponent } from './components/brand-form/brand-form.component';
import { LanguageSwitcherComponent } from '../../shared/components/language-switcher/language-switcher.component';
import { ConfirmModalComponent } from '../../shared/components/confirm-modal/confirm-modal.component';

const routes: Routes = [
    { path: '', component: BrandListComponent },
    {
        path: 'create',
        loadComponent: () => import('./pages/create-brand/create-brand.component').then(m => m.CreateBrandComponent)
    }
];

@NgModule({
    declarations: [
        BrandListComponent,
        BrandFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(routes),
        TranslateModule,
        LanguageSwitcherComponent,  // Standalone component
        ConfirmModalComponent       // Standalone component
    ],
    exports: [
        BrandListComponent
    ]
})
export class BrandsModule { }

