import { ConcreteJuice } from "../ConcreteJuice";
import { IJuice } from "../interfaces/ijuice";

export class JuiceWithFood extends ConcreteJuice {
    constructor(juice : IJuice) {
        juice.description += " with Food"
        super(juice)
    }
}