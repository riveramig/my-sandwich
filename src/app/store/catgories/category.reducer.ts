import { CategoriesEnum } from "src/app/enums/categories.enum";
import { CategoriesActions } from "./category.actions";
import { CategoriesState } from "./category.state";


const initState: CategoriesState = {
    categories: [
        {
            id: CategoriesEnum.sandwiches,
            imageBackground: 'assets/images/mySandwich/bahn-mi.jpg',
            nameToDisplay: 'Sandwiches',
            description: 'Los mas saludables'
        },
        {
            id: CategoriesEnum.veggies,
            imageBackground: 'assets/images/mySandwich/veggie-category.jpg',
            nameToDisplay: 'Veggies',
            description: 'Los mejores'
        },
        {
            id: CategoriesEnum.gyros,
            imageBackground: 'assets/images/mySandwich/gyros-category.jpg',
            nameToDisplay: 'Gyros',
            description: 'Desde Grecia'
        },
        {
            id: CategoriesEnum.drinks,
            imageBackground: 'assets/images/mySandwich/bebidas.jpg',
            nameToDisplay: 'Bebidas',
            description: 'Para acompañar'
        }
    ]
}

export function categoryReducer(state = initState, action: CategoriesActions) {
    switch (action.type) {
        default:
            return state;
    }
}