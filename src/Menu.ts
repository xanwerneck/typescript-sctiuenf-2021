import { IJuice } from "./interfaces/ijuice";
import { IMenu } from "./interfaces/imenu";

export class Menu implements IMenu {
    juices: Array<IJuice> = []
    add: Function = (juice : IJuice) => {
        this.juices.push(juice)
    }
    
}