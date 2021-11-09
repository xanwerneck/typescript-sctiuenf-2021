import { IPayment } from "../interfaces/ipayment";

export default class Cash implements IPayment {
    description: string = "Cash";
    pay: Function = () => {
        return "Paid"
    };
    
}