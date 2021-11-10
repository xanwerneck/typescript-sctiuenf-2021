import { IPayment } from "../interfaces/ipayment";

export class CreditCardPayment implements IPayment {
    description: string = "Credit Card";
    pay: Function = () => {
        return "Paid by Credit Card"
    }

}