import { InjectionToken } from "@angular/core";
import { Action, ActionReducerMap } from "@ngrx/store";
import { sandwichReducer } from "./sandwich/sandwich.reducer";
import { SandwichState } from "./sandwich/sandwich.state";
import { userReducer } from "./user/user.reducer";
import { UserState } from "./user/user.state";


export interface AppState{
    user: UserState;
    sandwich: SandwichState
}


export const reducers: ActionReducerMap<AppState> = {
    user: userReducer,
    sandwich: sandwichReducer
}

export const REDUCERS_TOKEN: InjectionToken<ActionReducerMap<AppState, Action>> = new InjectionToken<ActionReducerMap<AppState>>('App Reducers');
export const reduceProvider: {
    provide: InjectionToken<ActionReducerMap<AppState, Action>>;
    useValue: ActionReducerMap<AppState, Action>;
} = {
    provide: REDUCERS_TOKEN,
    useValue: reducers
}
