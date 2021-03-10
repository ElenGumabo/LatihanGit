console.log("Nama : Elen gumabo");

//Array & cara mendeklarasikan Array cara hanya menggunakan kurung kotak saja
//1. Array Literal []
/*let numbers = [1,2,3,4,5];
//memiliki data berbeda-beda
let elen = ["Elen","Gumabo",21,true];

console.log(numbers);
console.log(elen);
LEBIH BAIK MENGGUNAKAN CARA 1 
--------------------------------
/2. /Array dengan kata kunci new 
//mencari tahu tentang index Array
let numbers = new Array(1,2,3,4,5);
let elen = new Array("Elen","Gumabo",21, true);
console.log(numbers[numbers.length - 1]);
console.log(elen[elen. length - 1]); 
*/

//Object
//1. Object Literal & mendeklarasikan object literal
const elen = {
    firstName : "Elen",
    lastName : "Gumabo",
    age : 21,
    isMarried : true,
    sayHello : function (){
        console.log("Hello")
    },
};
//LEBIH BAIK MENGGUNAKAN CARA 1

/*
//2. object dengan kata kunci new
const elen = new Object();
elen.firstName = "Elen";
elen.lastName = "Gumabo";
elen.age = 21;
elen.isMarried = true;*/

console.log(elen.lastName); //Dot notation
console.log(elen["isMarried"]);//Bracket notation
//menambah protperti baru pada objek
//cara panggil bisa menggunakan dot & bracket notation

elen.address = "Paputungan";
elen["nationality"] = "Indonesia";
console.log(elen);

//cara panngil sayHello
elen.sayHello();


