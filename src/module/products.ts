import Asus from "./asus"
import Macbook from "./macbook"

let asus = new Asus("zenbook",true,true);
console.log(asus)

let macbook = new Macbook(2022,false,false);
console.log(macbook)
macbook.a()