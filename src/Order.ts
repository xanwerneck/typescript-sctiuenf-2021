import { ICart } from "./interfaces/icart";
import { IPayment } from "./interfaces/ipayment";


export default class OrderFacade {
    private cart : ICart
    private payment : IPayment

    constructor(
        private _cart : ICart,
        private _payment : IPayment
    ){
        this.cart = _cart
        this.payment = _payment
    }

    finish = () => {
        return {
            final_price : this.cart.final_price(),
            status_payment : this.payment.pay()
        }
    }
}