import { IJuice } from "./interfaces/ijuice"
import { Juice } from "./Juice"
import { JuiceWithLemon } from "./JuiceWithLemon"
import Menu from "./Menu"

class JuiceTest implements IJuice {
    description: string = "Orange"
    price: number = 10.0
    ingredients: Array<string> = ["Water", "Sugar"]
    getPrice: Function = () => {
        return 12.
    }
    
}

test("should contain right number of juices in menu", () => {
    let menu = new Menu()
    expect(menu.juices.length).toBe(0)
    let juice = new Juice("Orange", 10, false)
    menu.add(juice)
    expect(menu.juices.length).toBe(1)
})

/*
test("should price be 10 + 2 = 12", () => {
    let simplejuice = new Juice("Orange", 10, false)
    let juicelemon  = new JuiceWithLemon("Orange", 10, false)
    expect(simplejuice.getPrice()).toBe(10)
    expect(juicelemon.getPrice()).toBe(12)
})
*/

test("should price be 12", () => {
    let simplejuice    = new Juice("Orange", 10, false)
    let decoratorJuice = new JuiceWithLemon(simplejuice)
    expect(decoratorJuice.price).toBe(12)
})

test("should content the decorator", () => {
    let simplejuice    = new Juice("Orange", 10, false)
    let decoratorJuice = new JuiceWithLemon(simplejuice)
    expect(decoratorJuice.description).toEqual("Orange - with Lemon")
})