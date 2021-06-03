import { CartActions, CartActionType } from "./cart.actions";
import { CartState } from "./cart.state";
import { v4 as uuidv4 } from 'uuid';
import * as _ from 'lodash';

const initState: CartState = {
    id: uuidv4(),
    items: []
}


export function cartReducer(state = initState, action: CartActions) {
    switch (action.type) {
        case CartActionType.addSandwichToCart:
            const findSandwich = state.items.map((item) => item.sandwich.id).indexOf(action.payload.id);
            return {
                ...state,
                items: findSandwich === -1 ? [...state.items, { quantity: 1, sandwich: action.payload }] : state.items.map((item, i) => i === findSandwich ? { ...item, quantity: item.quantity + 1 } : item)
            }
        case CartActionType.removeSandwichFromCart:
            return {
                ...state,
                items: state.items.length === 1 ? [] : state.items.filter((item) => item.sandwich.id === action.payload)
            }
        case CartActionType.reduceQuantitySandwichFromCart:
            const findSandwichToReduce = state.items.map((item) => item.sandwich.id).indexOf(action.payload);
            return {
                ...state,
                items: findSandwichToReduce === -1 ? { ...state.items } : state.items.map((item, i) => i === findSandwichToReduce ? { ...item, quantity: item.quantity - 1 } : item)
            }
        case CartActionType.clearCart:
            return {
                ...state,
                items: []
            }
        default:
            return state;
    }
}