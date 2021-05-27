import { CategoriesEnum } from "src/app/enums/categories.enum";
import { CategoriesActions } from "./category.actions";
import { CategoriesState } from "./category.state";

 
 const initState: CategoriesState = {
    categories:[
        {
            id:CategoriesEnum.bahn,
            imageBackground:'assets/images/mySandwich/bahn-mi.jpg',
            nameToDisplay:'Bahn',
            description: 'Los mejores'
        },
        {
            id:CategoriesEnum.veggies,
            imageBackground:'assets/images/mySandwich/veggie-category.jpg',
            nameToDisplay:'Veggies',
            description: 'Los mas saludables'
        },
        {
            id:CategoriesEnum.gyros,
            imageBackground:'assets/images/mySandwich/gyros-category.jpg',
            nameToDisplay:'Gyros',
            description: 'Desde Grecia'
        }
    ]
}

export function categoryReducer(state = initState, action:CategoriesActions){
    switch(action.type) {
        default:
            return state;
    }
}