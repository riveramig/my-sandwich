export interface Sandwich {
    status: boolean;
    id: number;
    code: number;
    name: string;
    description: string;
    price: number;
    discount: number;
    ingredients: Ingredient[];
    img: string;
}

export interface Ingredient {
    ingredientCode: number,
    ingredientName: string
}
