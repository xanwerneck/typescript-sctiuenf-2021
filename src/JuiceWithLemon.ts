import { ConcreteJuice } from "./ConcreteJuice";
import { IJuice } from "./interfaces/ijuice";

export class JuiceWithLemon extends ConcreteJuice {
    constructor(juice : IJuice){
        juice.description += ' - with Lemon'
        juice.price       += 2
        super(juice)
    }
}