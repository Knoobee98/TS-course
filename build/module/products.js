"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var asus_1 = __importDefault(require("./asus"));
var macbook_1 = __importDefault(require("./macbook"));
var asus = new asus_1.default("zenbook", true, true);
console.log(asus);
var macbook = new macbook_1.default(2022, false, false);
console.log(macbook);
macbook.a();
