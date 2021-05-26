import { Action } from "@ngrx/store";


export enum UserActionType {
    setUser = '[User] set user'
}

export class SetUser implements Action {
    public readonly type = UserActionType.setUser;
    constructor(public payload: any) {}
}

export declare type UserActions = SetUser