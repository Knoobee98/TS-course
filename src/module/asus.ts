import Laptop from "./BaseLaptop"

class Asus<T> extends Laptop<T> {
    constructor(type: T, numeric: boolean, touchButton: boolean){
        super("asus",type,numeric,touchButton)
    }
}

export default Asus;