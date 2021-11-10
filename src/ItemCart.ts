import { IItemCart } from "./interfaces/icart"
import { IJuice } from "./interfaces/ijuice"

export class ItemCart implements IItemCart {
    juice: IJuice
    quantity: number
    constructor(_juice : IJuice, _quantity : number){
        this.juice = _juice
        this.quantity = _quantity
    }
}