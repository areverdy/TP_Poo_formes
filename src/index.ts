import { Carre } from "./figures/Carre"
import { Forme } from "./figures/Forme"
import { Losange } from "./figures/Losange"
import { Parrallelogramme } from "./figures/Parrallelogramme"
import { PentagoneR } from "./figures/PentagoneR"
import { Quadrilatere } from "./figures/Quadrilatere"
import { Rectangle } from "./figures/Rectangle"
import { Triangle } from "./figures/Triangle"


let carre1: Forme = new Carre(4)
let triangle1: Forme = new Triangle(5)
let rectangle1: Forme = new Rectangle(6,6)

carre1.aire()
carre1.perimetre()
console.log("Carre1 a pour aire", carre1.aire().toFixed(2), "et pour périmètre ",carre1.perimetre().toFixed(2))

triangle1.aire()
triangle1.perimetre()
console.log("Triangle1 a pour aire", triangle1.aire().toFixed(2), "et pour périmètre ",triangle1.perimetre().toFixed(2))

rectangle1.aire()
rectangle1.perimetre()
console.log("Rectangle1 a pour aire", rectangle1.aire().toFixed(2), "et pour périmètre ",rectangle1.perimetre().toFixed(2))

let losange1: Forme = new Losange(2,3)
let parallelogramme1: Forme = new Parrallelogramme(8,9)
let pentagone1: Forme = new PentagoneR(5,7)
let quadrilatere1: Forme = new Quadrilatere(1,2,3,4)

losange1.aire()
losange1.perimetre()
console.log("Losange1 a pour aire", losange1.aire().toFixed(2), "et pour périmètre ",losange1.perimetre().toFixed(2))

parallelogramme1.aire()
parallelogramme1.perimetre()
console.log("Parallelogramme1 a pour aire", parallelogramme1.aire().toFixed(2), "et pour périmètre ",parallelogramme1.perimetre().toFixed(2))

pentagone1.aire()
pentagone1.perimetre()
console.log("Pentagone1 a pour aire", pentagone1.aire().toFixed(2), "et pour périmètre ",pentagone1.perimetre().toFixed(2))

quadrilatere1.aire()
quadrilatere1.perimetre()
console.log("Quadrilatère1 a pour aire", quadrilatere1.aire().toFixed(2), "et pour périmètre ",quadrilatere1.perimetre().toFixed(2))