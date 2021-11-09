import { IJuice } from "./interfaces/ijuice";

export class ConcreteJuice implements IJuice {
    ingredients : Array<string> = [
        "Agua", "Polpa"
    ]
    description : string;
    price     : number;
    constructor(juice : IJuice){
        this.description = juice.description
        this.price       = juice.price
        this.ingredients = juice.ingredients
    }
}