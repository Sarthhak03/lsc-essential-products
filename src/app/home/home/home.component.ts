import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Category } from '../../models/category'
import { ProductData } from 'src/app/static-data/product-data';
import { CategoryData } from 'src/app/static-data/category-data';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products! : Product[];
  categories : Category[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = ProductData;
    this.categories = CategoryData;
  }

  getCategoryName(){
    
  }

}
