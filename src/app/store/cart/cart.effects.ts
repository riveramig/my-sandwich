import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { OrderService } from 'src/app/services/order/order.service';
import {
    CartActionType,
    SendCart
} from './cart.actions';
import { selectOrderItems } from './cart.selector';
import { CartState } from './cart.state';


@Injectable()
export class CartEffects {

    constructor(
        private actions$: Actions,
        private store: Store<CartState>,
        private orderService: OrderService
    ) { }

    SendCart$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType<SendCart>(CartActionType.sendCartOrder),
        tap(value => console.log('sendCartOrder effect', value)),
        withLatestFrom(this.store.select(selectOrderItems)),
        map(([first, second]) => second),
        exhaustMap(items => {
            return this.orderService.createOrder(items)
                .pipe(
                    map(data => {
                        return { type: CartActionType.clearCart };
                    }));
        })
    ));

}
