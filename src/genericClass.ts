class List<T>{
    private data: T[]

    constructor(...elements: T[]){
        this.data = elements
    }

    add(element: T): void{
        this.data.push(element)
    }

    addMultiple(...elements: T[]): void {
        this.data.push(...elements)
    }

    getAll(): T[] {
        return this.data
    }
}

let numbers = new List<number>(1,2,3);
numbers.add(3);
numbers.addMultiple(4,5,6)
console.log(numbers.getAll())

let random = new List<number | string>(1,2,3,'a')
console.log(random.getAll())