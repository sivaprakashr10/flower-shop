import { CategoriesComponent } from './categories/categories.component';
import { RouterModule } from '@angular/router';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [ProductsComponent, EmptyScreenComponent, CategoriesComponent],
  exports: [ProductsComponent, EmptyScreenComponent, CategoriesComponent],
})
export class ComponentMoudle {}
