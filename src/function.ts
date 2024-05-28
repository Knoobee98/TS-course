//tipe data pada balikan function

function getName(): string {
    return "Hi, my name is Fauzan!"
}

console.log(getName())

function getAge(): number {
    return 1234
}

function printName(): void {
    console.log("print my name")
}

printName()

/////////

function multiply(val1: number, val2: number): number {
    return val1 * val2
}

let result = multiply(5, 3)
console.log(result)

// function as type 

type tambah = (val1 : number, val2 : number) => number

const Add : tambah = (val1 : number, val2 : number): number => {
    return val1 + val2;
}

const hasil = Add(7, 2)
console.log(hasil)


// default parameter 
const fullName = (first: string, last: string = "dhuha"): string => {
    return first + " " + last
}

console.log(fullName("Fauzan"))


//optional parameter
const getUmur = (val1: number, val2?: number): string => {
    return val1 + " " + val2
} 

console.log(getUmur(4, 2))