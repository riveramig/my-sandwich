import { SandwichActions } from "./sandwich.actions";
import { SandwichState } from "./sandwich.state";

const initState: SandwichState = {
    
}

export function sandwichReducer(state = initState, action: SandwichActions) {
    switch(action.type) {
        default:
            return state;
    }
}
