import { SandwichActions, SandwichActionType } from "./sandwich.actions";
import { SandwichState } from "./sandwich.state";

const initState: SandwichState = {
    sandwiches: []
}

export function sandwichReducer(state = initState, action: SandwichActions) {
    switch (action.type) {
        case SandwichActionType.setSandwiches:
            console.log(action)
            return {
                ...state,
                sandwiches: action.payload
            }
        default:
            return state;
    }
}
