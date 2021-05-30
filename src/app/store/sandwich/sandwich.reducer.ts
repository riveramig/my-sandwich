import { SandwichActions } from "./sandwich.actions";
import { SandwichState } from "./sandwich.state";

const initState: SandwichState = {
    sandwiches: [
        {
            status: true,
            id: 1,
            img: '',
            code: 10001,
            name: "Sandiwich Pollo",
            description: "Sandwich Milanesa de Pollo con vegetales",
            price: 8500.0,
            ingredients: [
                {
                    ingredientCode: 100,
                    ingredientName: "Lechuga"
                },
                {
                    ingredientCode: 101,
                    ingredientName: "Tomate"
                },
                {
                    ingredientCode: 102,
                    ingredientName: "Cebolla"
                },
                {
                    ingredientCode: 103,
                    ingredientName: "Pollo"
                },
                {
                    ingredientCode: 104,
                    ingredientName: "Salsa Tomate"
                },
                {
                    ingredientCode: 105,
                    ingredientName: "Salsa Mayonesa"
                }
            ]
        },
        {
            status: true,
            id: 2,
            img: '',
            code: 10002,
            name: "Sandiwich Carne",
            description: "Sandiwich Carne con vegetales",
            price: 9500.0,
            ingredients: [
                {
                    ingredientCode: 100,
                    ingredientName: "Lechuga"
                },
                {
                    ingredientCode: 101,
                    ingredientName: "Tomate"
                },
                {
                    ingredientCode: 102,
                    ingredientName: "Cebolla"
                },
                {
                    ingredientCode: 103,
                    ingredientName: "Pollo"
                },
                {
                    ingredientCode: 104,
                    ingredientName: "Salsa Tomate"
                },
                {
                    ingredientCode: 105,
                    ingredientName: "Salsa Mayonesa"
                }
            ]
        }
    ]
}

export function sandwichReducer(state = initState, action: SandwichActions) {
    switch (action.type) {
        default:
            return state;
    }
}
