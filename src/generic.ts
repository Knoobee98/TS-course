function getData(value: any){
    return value
}

console.log(getData("fauzan").length)
console.log(getData(1234).length)

//generic
function myData<T>(value: T){
    return value
}

console.log(myData("fauzan").length)
console.log(myData(1234))

const arrowFunc = <T>(value: T) => { //pada jsx <T, >

}