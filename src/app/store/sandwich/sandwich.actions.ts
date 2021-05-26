import { Action } from "@ngrx/store";

export enum SandwichActionType {
    setSandwiches = '[Sandwich] set sandwiches'
}

export class SetSandwiches implements Action {
    public readonly type = SandwichActionType.setSandwiches;
    constructor(public payload:any){}
}

export declare type SandwichActions = SetSandwiches;
