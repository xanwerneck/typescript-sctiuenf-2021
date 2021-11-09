import { Juice } from "./Juice"
import { Menu } from "./Menu"

test("menu should be updated", () => {
    let menu = new Menu()
    expect(menu.juices.length).toBe(0)
    let juice = new Juice("Orange", 10.0)
    menu.add(juice)
    expect(menu.juices.length).toBe(1)
})