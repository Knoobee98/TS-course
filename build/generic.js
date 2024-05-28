"use strict";
function getData(value) {
    return value;
}
console.log(getData("fauzan").length);
console.log(getData(1234).length);
//generic
function myData(value) {
    return value;
}
console.log(myData("fauzan").length);
console.log(myData(1234));
var arrowFunc = function (value) {
};
