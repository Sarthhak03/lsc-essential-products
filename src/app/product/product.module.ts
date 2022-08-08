import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductViewContentComponent } from './product-view-content/product-view-content.component';
import { ProductViewFilterComponent } from './product-view-filter/product-view-filter.component';
import { ProductViewLayoutComponent } from './product-view-layout/product-view-layout.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
    imports: [CommonModule,SharedModule],
    exports: [],
    declarations: [
        ProductDetailComponent,
        ProductViewContentComponent,
        ProductViewFilterComponent,
        ProductViewLayoutComponent,
        WishlistComponent
    ],
    providers: [],
})
export class ProductModule { }
