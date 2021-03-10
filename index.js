console.log("Hello World!!!");
console.log("Welcome to web development class");


//1.VARIABEL
/*cara pendeklarasian variabel yang lama
var nama = "Elen";
*/

/*cara baru 
1. menggunakan let, nilai yang didalam variabel akan berubah
*/
let nama = "Elen";
nama = "Josua";
let usia = 21;
usia = usia + 1;

/*
2. menggunakan const, nilai yang fix tidak bisa berubah
*/
//const usia = 21;
//usia = 22, ini akan eror
//contoh menggunakan operator


console.log(nama);
console.log(usia);

/*aturan dalam penamaan variabel
yaitu huruf awal pada kata pertama bisa menggunakan huruf kecil dan untuk 
kata kedua dan seterusnya harus menggunakan huruf besar
*/

let namaDepan = "Elen";
let namaBelakang ="Gumabo";
console.log(namaDepan +" "+ namaBelakang); 

//contoh type data int yang tidak memiliki nilai
let alamat = "Paputungan";//type data bolean
let apakahSudahMenikah = true;

console.log(alamat);
console.log(apakahSudahMenikah);

//2.OPERATOR
//kalau 1 = assigment operater
//kalau 2 = relational opereter(loose equality)
//console.log(10 == 10); -> menghasilkan tipe data bolean 'true'
console.log(10 == '10');//kalau 2 = tidak mengecek type data
console.log(10 ==='10');//kalau 3 = mengecek type data

//Ternary Operator, seperti  if else
const hasil = 11 % 2 === 0? "Genap" : " Ganjil";
console.log("hasil = " + hasil);

//3.FUNCTION
//function declaration
function ucapkanSalam(){
    console.log("Hallo nama saya Elen Gumabo");
}
ucapkanSalam();//cara panggil fungsi

//function Expretion->paling sering digunakan
const ucapkanSalam2 = function(){
    console.log("Hallo nama saya Elen Gumabo2");
}
ucapkanSalam2();//cara panggil fungsi

//PARAMETER DAN ARGUMENT
//parameter adalah data(input) yang didefinisikan didalam fungsi
//argument adalah nilai yang dikirimkan saat kita panggil fungsi

//parameter
const menghitungLuasPersegiPanjang = function(panjang,lebar){
    return panjang*lebar;
};

//argument
console.log(menghitungLuasPersegiPanjang(10,5));

//Global dan Local -> lingkup fungsi& lingkup blok
    

