import { IJuice } from "./interfaces/ijuice";

export class Juice implements IJuice {
    description: string;
    price: number;
    ingredients: Array<string> = [
        "Agua", "Polpa"
    ]
    constructor(description : string, price : number){
        this.description = description
        this.price = price
    }
}