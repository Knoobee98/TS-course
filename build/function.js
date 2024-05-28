"use strict";
//tipe data pada balikan function
function getName() {
    return "Hi, my name is Fauzan!";
}
console.log(getName());
function getAge() {
    return 1234;
}
function printName() {
    console.log("print my name");
}
printName();
/////////
function multiply(val1, val2) {
    return val1 * val2;
}
var result = multiply(5, 3);
console.log(result);
var Add = function (val1, val2) {
    return val1 + val2;
};
var hasil = Add(7, 2);
console.log(hasil);
// default parameter 
var fullName = function (first, last) {
    if (last === void 0) { last = "dhuha"; }
    return first + " " + last;
};
console.log(fullName("Fauzan"));
//optional parameter
var getUmur = function (val1, val2) {
    return val1 + " " + val2;
};
console.log(getUmur(4, 2));
