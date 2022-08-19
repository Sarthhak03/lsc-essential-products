import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductViewContentComponent } from './product-view-content/product-view-content.component';
import { ProductViewFilterComponent } from './product-view-filter/product-view-filter.component';
import { ProductViewLayoutComponent } from './product-view-layout/product-view-layout.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: ProductViewContentComponent },
  { path: 'detail/:productId', component: ProductDetailComponent },
  { path: 'wishlist', component: WishlistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}

export const ProductRoutingComponents = [
  ProductDetailComponent,
  ProductViewContentComponent,
  ProductViewFilterComponent,
  ProductViewLayoutComponent,
  WishlistComponent,
];
