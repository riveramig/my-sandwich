import { UserActions } from "./user.actions";
import { UserState } from "./user.state";

const initState: UserState = {
    name:''
}

export function userReducer(state = initState, action: UserActions): UserState {
    switch(action.type){

        default:
            return state;
    }
}