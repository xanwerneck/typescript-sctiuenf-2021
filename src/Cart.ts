import { ICart, IItemCart } from "./interfaces/icart";
import { IPayment } from "./interfaces/ipayment";

export default class Cart implements ICart {
    private payment : IPayment
    items : Array<IItemCart> = new Array<IItemCart>()
    constructor(_payment : IPayment){ 
        this.payment = _payment
    }

    
    add = (item : IItemCart) => {
        this.items.push(item)
    }

    order = () => {
        return this.items
    }

    final_price = () => {
        let final_price = 0.0
        this.items.map(item => {
            final_price += (item.juice.price * item.quantity)
        })
        return final_price
    }

    pay = () => {
        return this.payment.pay()
    }
}