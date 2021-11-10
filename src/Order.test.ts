import { Cart } from "./Cart"
import { IItemCart } from "./interfaces/icart"
import { IJuice } from "./interfaces/ijuice"
import { IPayment } from "./interfaces/ipayment"
import { ItemCart } from "./ItemCart"
import { Juice } from "./Juice"
import OrderFacade from "./Order"
import { CashPayment } from "./payment/CashPayment"
import { CreditCardPayment } from "./payment/CreditCardPayment"

class FakePayment implements IPayment{
    description: string = "Fake"
    pay: Function = () => { return "Paid" }    
}

test("order should be finished", () => {
    let juice = new Juice("Orange", 10.0)
    let item  = new ItemCart(juice, 1)
    let payment = new FakePayment()
    let cart    = new Cart(payment)
    cart.add(item)

    let order   = new OrderFacade(cart, payment)
    let finish_order = order.finish()
    expect(finish_order.final_price).toBe(10.0)
    expect(finish_order.status_payment).toBe("Paid by Credit Card")
})