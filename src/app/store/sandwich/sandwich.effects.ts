import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { CategoriesEnum } from 'src/app/enums/categories.enum';
import { ProductService } from 'src/app/services/product/product.service';
import {
    SandwichActionType,
    GetSandwiches
} from './sandwich.actions';


@Injectable()
export class SandwichEffects {

    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) { }

    GetSandwiches$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType<GetSandwiches>(SandwichActionType.getSandwiches),
        tap(value => console.log('getSandwiches effect', value)),
        map(action => action.payload),
        exhaustMap(category => {
            return this.productService.getProducts(category)
                .pipe(
                    map(data => {
                        return { type: SandwichActionType.setSandwiches, payload: data };
                    }));
        })
    ));

}
