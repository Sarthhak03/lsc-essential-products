import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category } from 'src/app/models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl : string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
   }

   getCategories(): Observable<Category[]>{
    const url = `${this.apiUrl}/${environment.apiEndpoints.category}/all`;
    return this.http.get<Category[]>(url);
   }

   getCategory(id: number): Observable<Category>{
    const url = `${this.apiUrl}/${environment.apiEndpoints.category}/${id}`;
    return this.http.get<Category>(url);
   }

   createCategory(model : Category): Observable<any>{
    const url = `${this.apiUrl}/${environment.apiEndpoints.category}`;
    return this.http.post(url , model);
   }

   updateCategory(model : Category): Observable<any>{
    const url = `${this.apiUrl}/${environment.apiEndpoints.category}`;
    return this.http.put(url , model);
   }

   deleteCategory(id:number): Observable<any>{
    const url = `${this.apiUrl}/${environment.apiEndpoints.category}/${id}`;
    return this.http.delete(url);
   }
}
