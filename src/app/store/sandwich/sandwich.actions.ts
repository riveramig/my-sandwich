import { Action } from "@ngrx/store";

export enum SandwichActionType {
    getSandwiches = '[Sandwich] get sandwiches',
    setSandwiches = '[Sandwich] set sandwiches'
}

export class GetSandwiches implements Action {
    public readonly type = SandwichActionType.getSandwiches;
    constructor(public payload: any) { }
}

export class SetSandwiches implements Action {
    public readonly type = SandwichActionType.setSandwiches;
    constructor(public payload: any) { }
}

export declare type SandwichActions = GetSandwiches | SetSandwiches;
