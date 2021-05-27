import { CartActions } from "./cart.actions";
import { CartState } from "./cart.state";

const initState: CartState = {
    id:'',
    items:[]
}

export function cartReducer(state = initState, action:CartActions) {
    switch(action.type) {
        default:
            return state;
    }
}