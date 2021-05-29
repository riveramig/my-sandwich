import { Action } from "@ngrx/store";
import { Sandwich } from "src/app/models/sandwich.model";

export enum CartActionType {
    addSandwichToCart = '[Cart] add sandwich',
    removeSandwichFromCart = '[Cart] remove sandwich',
    reduceQuantitySandwichFromCart = '[Cart] remove quantity sandwich'
}

export class AddSandwich implements Action {
    public readonly type = CartActionType.addSandwichToCart;
    constructor(public payload:Sandwich){}
}

export class RemoveSandwich implements Action {
    public readonly type = CartActionType.removeSandwichFromCart;
    constructor(public payload:number){}
}

export class ReduceQuantitySandwich implements Action {
    public readonly type = CartActionType.reduceQuantitySandwichFromCart;
    constructor(public payload:number){}
}


export declare type CartActions = AddSandwich | RemoveSandwich | ReduceQuantitySandwich;