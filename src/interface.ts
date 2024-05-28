interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    name: string; //harus dibuatkan constructor
    keyboardLight: boolean = true;

    constructor(name:string, keyboardLight: boolean){
        this.name = name;
        this.keyboardLight = keyboardLight;
    }

    on(): void {
        console.log("turned on!")
    }
    off(): void {
        console.log("turned off!")
    }
    
}

class Macbook implements Laptop {
    name: string;
    keyboardLight: boolean = false;

    constructor(name:string, keyboardLight: boolean){
        this.name = name;
        this.keyboardLight = keyboardLight;
    }

    on(): void {
        console.log("turned on!")
    }
    off(): void {
        console.log("turned off!")
    }
}

