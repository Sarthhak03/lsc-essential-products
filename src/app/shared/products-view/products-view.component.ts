import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryData } from 'src/app/static-data/category-data';
import { ProductData } from 'src/app/static-data/product-data';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {
  products! : Product[];
  categories : Category[] = [];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.products = ProductData;
      this.categories = CategoryData;
    }, 2000);
  }

  getCategoryName(id : number): string{
    return this.categories.find(x => x.id === id)?.name || '';
  }

  getShortenTitle(title : string): string{
    return `${title.substring(0,50)}...`;
  }

}
