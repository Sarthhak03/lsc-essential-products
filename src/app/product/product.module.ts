import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingComponents } from './product.routing.module';

@NgModule({
    imports: [CommonModule,SharedModule],
    exports: [],
    declarations: [ProductRoutingComponents],
    providers: [],
})
export class ProductModule { }
