import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Sandwich } from 'src/app/models/sandwich.model';
import { AddSandwich, ReduceQuantitySandwich, RemoveSandwich } from 'src/app/store/cart/cart.actions';
import { selectAllSandwichesInCart, selectCurrentTotalInCart } from 'src/app/store/cart/cart.selector';
import { CartItem, CartState } from 'src/app/store/cart/cart.state';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  readonly freeShiping:number =  60000;

  public cartItems$:Observable<CartItem[]> = this.store.pipe(select(selectAllSandwichesInCart));

  public selectCurrentTotal$:Observable<number> = this.store.pipe(select(selectCurrentTotalInCart));

  constructor(private store:Store<CartState>) { }

  ngOnInit(): void {
  }


  public removeSandwich(sandwich:Sandwich){
    this.store.dispatch(new RemoveSandwich(sandwich.id));
  }

  public reduceQuantity(sandwich:Sandwich){
    this.store.dispatch(new ReduceQuantitySandwich(sandwich.id))
  }

  public increaseQuantity(sandwich:Sandwich){
    this.store.dispatch(new AddSandwich(sandwich))
  }


}
