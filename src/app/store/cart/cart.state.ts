import { Sandwich } from "src/app/models/sandwich.model";

export interface CartState {
    id: any;
    items: CartItem[];
    orders: [];
}
export interface CartItem {
    quantity: number;
    sandwich: Sandwich;
}

export class CartItemDto {
    orderProductCode: number;
    orderQuantity: number;
}
