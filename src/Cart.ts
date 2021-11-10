import { ICart, IItemCart } from "./interfaces/icart";
import { IPayment } from "./interfaces/ipayment";

export class Cart implements ICart {
    items: Array<IItemCart> = []
    payment: IPayment;
    constructor(
        private _payment : IPayment
    ){
        this.payment = _payment
    }
    add: Function = (item : IItemCart) => {
        this.items.push(item)
    }
    final_price: Function = () => {
        let final_price = 0.
        this.items.map(item => {
            final_price += (item.juice.price * item.quantity)
        })
        return final_price
    }
    pay: Function = () => {
        return this.payment.pay()
    }
    
}