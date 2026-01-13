import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryCreateComponent } from './pages/category-create/category-create.component';
import { LanguageSwitcherComponent } from '../../shared/components/language-switcher/language-switcher.component';

const routes: Routes = [
    { path: '', component: CategoryListComponent },
    { path: 'create', component: CategoryCreateComponent },
    { path: 'edit/:id', component: CategoryCreateComponent }
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(routes),
        TranslateModule,
        LanguageSwitcherComponent,
        CategoryListComponent,
        CategoryCreateComponent
    ]
})
export class CategoriesModule { }
