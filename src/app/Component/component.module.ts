import { RouterModule } from '@angular/router';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container/explore-container.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [
    ExploreContainerComponent,
    ProductsComponent,
    EmptyScreenComponent,
  ],
  exports: [ExploreContainerComponent, ProductsComponent, EmptyScreenComponent],
})
export class ComponentMoudle {}
