import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';

const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'add', component: ProductFormComponent },
    { path: ':id/edit', component: ProductFormComponent },
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(routes),
        TranslateModule.forChild(),
        // Import standalone components
        ProductListComponent,
        ProductFormComponent
    ]
})
export class ProductsModule { }
