import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsViewComponent } from './products-view/products-view.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
    imports: [CommonModule],
    exports: [SpinnerComponent, ProductsViewComponent],
    declarations: [SpinnerComponent , ProductsViewComponent],
    providers: [],
})
export class SharedModule { }
