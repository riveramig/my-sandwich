import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Services } from '../services.service';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItemDto } from 'src/app/store/cart/cart.state';

@Injectable({
  providedIn: 'root'
})

export class OrderService extends Services {

  constructor(private http: HttpClient) {
    super();
  }

  backendUrl = environment.url;
  headers = this.GetHttpHeaders();

  getProducts(caterory: any): Observable<any> {
    // TO-DO: Manage category
    return this.http.get(`${this.backendUrl}product`, { withCredentials: true });
  }

  createOrder(orders: CartItemDto[]): Observable<any> {
    const dto = {

      "card": {
        "cardCVV": "string",
        "cardMothExpired": 0,
        "cardNumer": "string",
        "cardOwnerFullName": "string",
        "cardYearExpiredDate": 0
      },
      "orderClientMail": "dev@sandwich.com",
      "orderDetails": orders,
      "orderPaymentMethod": 0

    }
    return this.http.post(`${this.backendUrl}order`, dto, { withCredentials: true });
  }

}
