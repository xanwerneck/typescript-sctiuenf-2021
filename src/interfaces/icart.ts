import { IPayment } from "../../src/interfaces/ipayment";
import { IJuice } from "./ijuice";

export interface IItemCart {
    juice : IJuice
    quantity : number
}
export interface ICart {
    items : Array<IItemCart>
    payment : IPayment
    add : Function
    final_price : Function
    pay : Function
}