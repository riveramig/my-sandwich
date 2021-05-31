import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shopDiscount'
})
export class DiscountPipe implements PipeTransform {
    constructor() { }
    public transform(value: number, discount: number): number {
        const valor = discount > 0 ? value - (value * (discount / 100)) : 0;
        return valor;
    }
}