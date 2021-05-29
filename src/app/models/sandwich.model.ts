export interface Sandwich {
    status:boolean;
    id:number;
    code:number;
    name:string;
    description:string;
    price:number;
    ingredients:Ingredient[]
}

export interface Ingredient {
    ingredientCode:number,
    ingredientName:string
}
