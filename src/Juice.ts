import { IJuice } from "./interfaces/ijuice";

export class Juice implements IJuice {
    ingredients : Array<string> = [
        "Agua", "Polpa"
    ]
    description : string;
    price     : number;
    constructor(description : string, price : number, acucar : boolean){
        this.description = description
        this.price     = price
        if (acucar) {
            this.ingredients.push("Acucar")
        }
    }

    getPrice () {
        return this.price
    }
    /*
    milk = () => {
        this.ingredients = this.ingredients.filter(ingrediente => (ingrediente != "Agua"))
        this.ingredients.push("Leite")
    }
    */
}