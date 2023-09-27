import { Carre } from "./figures/Carre"
import { Forme } from "./figures/Forme"
import { Rectangle } from "./figures/Rectangle"
import { Triangle } from "./figures/Triangle"


let carre1: Forme = new Carre(4)
let triangle1: Forme = new Triangle(5)
let rectangle1: Forme = new Rectangle(6,6)

carre1.aire()
carre1.perimetre()
console.log("Carre1 a pour aire", carre1.aire(), "et pour périmètre ",carre1.perimetre())

triangle1.aire()
triangle1.perimetre()
console.log("Triangle1 a pour aire", triangle1.aire(), "et pour périmètre ",triangle1.perimetre())

rectangle1.aire()
rectangle1.perimetre()
console.log("Rectangle1 a pour aire", rectangle1.aire(), "et pour périmètre ",rectangle1.perimetre())