import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/services/order/order.service';
import { selectMyOrdes } from 'src/app/store/cart/cart.selector';
import { CartState } from 'src/app/store/cart/cart.state';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public orders$: Observable<any[]> = this.cartStore.pipe(select(selectMyOrdes));

  constructor(
    private cartStore: Store<CartState>,
  ) { }

  ngOnInit(): void {
    console.log('j')
  }

}
