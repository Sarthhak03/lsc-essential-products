import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  categoriesList!: Category[];
  productsList!:Product[];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe( (res) => {
      this.productsList = res;
    },(err) => {
      console.warn(err);
    }) 
  }

  getCategories(){
    this.categoryService.getCategories().subscribe( (res) => {
      this.categoriesList = res;
    },(err) => {
      console.warn(err);
    })
  }


}


