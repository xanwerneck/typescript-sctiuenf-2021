import Cart from "./Cart"
import { IPayment } from "./interfaces/ipayment"

class PersonalPayment implements IPayment {
    description: string = "Personal Payment"
    pay: Function = () => {
        return "Paid"
    }
}

class CreditCardPayment implements IPayment {
    description: string = "Credit Card Payment"
    pay: Function = () => {
        return "Paid with Credit Card"
    }
}

test("should contain right number of juices in menu", () => {
    let payment = new CreditCardPayment()
    let card = new Cart(payment)
    expect(card.pay()).toBe("Paid with Credit Card")
})
