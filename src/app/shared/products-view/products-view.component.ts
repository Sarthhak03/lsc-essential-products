import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {
  @Input() products! : Product[];
  @Input() categories : Category[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  getCategoryName(id : number): string{
    return this.categories.find(x => x.id === id)?.name || '';
  }

  getShortenTitle(title : string): string{
    return `${title.substring(0,50)}...`;
  }

}
