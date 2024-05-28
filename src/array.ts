//array
let array : number[];
array = [1,2,3];

let array2 : string[];
array2 = ["pisang", "apel", "jeruk"]

let array3 : any[];
array3 = ["pisang", 20000, true, {}]

//tuples
//array yang dapat diisi dengan tipe data yang terbatas
let biodata : [string, number];

biodata = ["fauzang", 20]
// biodata = ["dea", true] => error karena tipe datanya berbeda dengan yang sudah dideklarasikan
// biodata = ["fauzang", 30, true] => error karena melebihi yang sudah ditentukan