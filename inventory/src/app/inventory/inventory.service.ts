import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private urlEndPoint: string = 'http://localhost:8080/api/inventory';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router) { }

  getInventory(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlEndPoint);
  }

  delete(id: number):Observable<Product[]>{
    return this.http.post<Product[]>(`${this.urlEndPoint}/remove/product/${id}`, {headers: this.httpHeaders});
  }

  uploadArticles(file: File): Observable<Product[]>{

    let formData = new FormData();
    formData.append("file", file);

    return this.http.post<Product[]>(`${this.urlEndPoint}/upload/articles`, formData);
  }
  uploadProducts(file: File): Observable<Product[]>{

    let formData = new FormData();
    formData.append("file", file);

    return this.http.post<Product[]>(`${this.urlEndPoint}/upload/products`, formData);

  }

}
