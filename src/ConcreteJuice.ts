import { IJuice } from "./interfaces/ijuice";

export class ConcreteJuice implements IJuice {
    description: string;
    price: number;
    ingredients: string[];
    constructor(juice : IJuice) {
        this.description = juice.description
        this.price = juice.price
        this.ingredients = juice.ingredients
    }
}