import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },

  {
    path: 'search',
    loadChildren: () =>
      import('./tabs/search/search.module').then((m) => m.SearchPageModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./tabs/cart/cart.module').then((m) => m.CartPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./tabs/profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'products/:id',
    loadChildren: () =>
      import('./pages/item-page/item-page.module').then(
        (m) => m.ItemPagePageModule
      ),
  },

  {
    path: 'products',
    loadChildren: () =>
      import('./pages/all-products/all-products.module').then(
        (m) => m.AllProductsPageModule
      ),
  },
  {
    path: 'profile-edit',
    loadChildren: () =>
      import('./pages/profile-edit/profile-edit.module').then(
        (m) => m.ProfileEditPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
