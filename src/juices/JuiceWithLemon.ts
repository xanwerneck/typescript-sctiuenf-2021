import { ConcreteJuice } from "../ConcreteJuice";
import { IJuice } from "../interfaces/ijuice";

export class JuiceWithLemon extends ConcreteJuice {
    constructor(juice : IJuice) {
        juice.price += 2.0
        super(juice)
    }
}