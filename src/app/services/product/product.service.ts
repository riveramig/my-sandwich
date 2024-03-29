import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Services } from '../services.service';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService extends Services {

  constructor(private http: HttpClient) {
    super();
  }

  backendUrl = environment.url;
  headers = this.GetHttpHeaders();

  getProducts(caterory: any): Observable<any> {
    // TO-DO: Manage category
    return this.http.get(`${this.backendUrl}product`, { withCredentials: true });
  }

  getProduct(productCode: any): Observable<any> {
    return this.http.get(`${this.backendUrl}product/${productCode}`, { withCredentials: true });
  }

}
