import { Action } from "@ngrx/store";

export enum CartActionType {
    setCart = '[Cart] set cart'
}

export class SetCart implements Action {
    public readonly type = CartActionType.setCart;
    constructor(public payload:any){}
}

export declare type CartActions = SetCart;