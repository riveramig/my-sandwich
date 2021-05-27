import { CategoriesEnum } from "src/app/enums/categories.enum";

export interface CategoriesState {
    categories:Category[]
}

export interface Category {
    id:CategoriesEnum;
    nameToDisplay:string;
    imageBackground: string;
    description: string;
}