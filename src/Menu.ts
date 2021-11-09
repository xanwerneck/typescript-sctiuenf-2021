import { IJuice } from "./interfaces/ijuice";
import { IMenu } from "./interfaces/imenu";

export default class Menu implements IMenu {
    juices: Array<IJuice> = new Array<IJuice>();
    add = (juice : IJuice) => {
        this.juices.push(juice)
    }
}