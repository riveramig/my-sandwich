import { Action } from "@ngrx/store";

export enum CategoryActionType {
    setCategories = '[Categories] set categories'
}

export class SetCategories implements Action {
    public readonly type = CategoryActionType.setCategories;
    constructor(public payload:any){}
}

export declare type CategoriesActions = SetCategories;
