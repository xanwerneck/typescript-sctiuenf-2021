import { Juice } from "./Juice"
import { JuiceWithFood } from "./juices/JuiceWithFood"
import { JuiceWithLemon } from "./juices/JuiceWithLemon"

test("price should be added by 1.0", () => {
    let juice            = new Juice("Orange", 10.0)
    let juice_with_lemon = new JuiceWithLemon(juice)
    let juice_with_food  = new JuiceWithFood(juice_with_lemon)
    expect(juice_with_food.price).toBe(12.0)
})