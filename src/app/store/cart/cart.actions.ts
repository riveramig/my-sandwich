import { Action } from "@ngrx/store";
import { Sandwich } from "src/app/models/sandwich.model";
import { CartItem } from "./cart.state";

export enum CartActionType {
    addSandwichToCart = '[Cart] add sandwich',
    removeSandwichFromCart = '[Cart] remove sandwich',
    reduceQuantitySandwichFromCart = '[Cart] remove quantity sandwich',
    sendCartOrder = '[Cart] send cart order',
    clearCart = '[Cart] clear cart'
}

export class AddSandwich implements Action {
    public readonly type = CartActionType.addSandwichToCart;
    constructor(public payload: Sandwich) { }
}

export class RemoveSandwich implements Action {
    public readonly type = CartActionType.removeSandwichFromCart;
    constructor(public payload: number) { }
}

export class ReduceQuantitySandwich implements Action {
    public readonly type = CartActionType.reduceQuantitySandwichFromCart;
    constructor(public payload: number) { }
}

export class SendCart implements Action {
    public readonly type = CartActionType.sendCartOrder;
    constructor() {
    }
}

export class ClearCart implements Action {
    public readonly type = CartActionType.clearCart;
    constructor() { }
}


export declare type CartActions = AddSandwich | RemoveSandwich | ReduceQuantitySandwich | SendCart | ClearCart;