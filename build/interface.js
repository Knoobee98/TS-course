"use strict";
var Asus = /** @class */ (function () {
    function Asus(name, keyboardLight) {
        this.keyboardLight = true;
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    Asus.prototype.on = function () {
        console.log("turned on!");
    };
    Asus.prototype.off = function () {
        console.log("turned off!");
    };
    return Asus;
}());
var Macbook = /** @class */ (function () {
    function Macbook(name, keyboardLight) {
        this.keyboardLight = false;
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    Macbook.prototype.on = function () {
        console.log("turned on!");
    };
    Macbook.prototype.off = function () {
        console.log("turned off!");
    };
    return Macbook;
}());
