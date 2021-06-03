import { CartItemDto } from "../store/cart/cart.state"

export interface Card {
    cardCVV: string;
    cardMothExpired: number;
    cardNumer: string;
    cardOwnerFullName: string;
    cardYearExpiredDate: number
}

export interface Order {
    card: Card;
    orderClientMail: string;
    orderDetails: CartItemDto[];
    orderPaymentMethod: number;
}