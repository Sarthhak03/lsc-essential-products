import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl : string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
   }

   getProducts(noOfProducts:number = 10):Observable< Product[] >{
    const url = `${this.apiUrl}/${environment.apiEndpoints.product}/all?noOfProducts=${noOfProducts}`;
    return this.http.get<Product[]>(url);
   }

   getProduct(id:number):Observable< Product >{
    const url = `${this.apiUrl}/${environment.apiEndpoints.product}/${id}`;
    return this.http.get<Product>(url);
   }

   getProductsByOwner():Observable< Product[] >{
    const url = `${this.apiUrl}/${environment.apiEndpoints.product}/productsByOwner/all`;
    return this.http.get<Product[]>(url);
   }

   creatProduct(model:Product):Observable<any>{
    const url = `${this.apiUrl}/${environment.apiEndpoints.product}`;
    return this.http.post(url,model);
   }

   updateProduct(model:Product):Observable<any>{
    const url = `${this.apiUrl}/${environment.apiEndpoints.product}`;
    return this.http.put(url,model);
   }

   deleteProduct(id:number):Observable<any>{
    const url = `${this.apiUrl}/${environment.apiEndpoints.product}/${id}`;
    return this.http.delete(url);
   }

   UploadProductPic(id:number,file:FormData):Observable<any>{
    const url = `${this.apiUrl}/${environment.apiEndpoints.product}/upload/${id}`;
    return this.http.post(url , file);
   }

}
