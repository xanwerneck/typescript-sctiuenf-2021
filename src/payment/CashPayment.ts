import { IPayment } from "../interfaces/ipayment";

export class CashPayment implements IPayment {
    description: string = "Cash"
    pay: Function = () =>{
        return "Paid"
    }
    
}