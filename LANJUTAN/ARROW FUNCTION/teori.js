// arrow function itu apa??
// bentuk lain yang lebih ringkas dari function expression
// -MDN

// function expression

let tampilpesan= function(nama){
    alert('hallo'+nama);
}
tampilpesan('irfan')




// // kalau ingin ringkas maka berubah menjadi
// // arrow function

// let tampilpesan = nama => {
//     alert ('hallo',nama);

// }
// tampilpesan('radi');

// // jika parameter lebih dari 1?

// let tampilnama =(nama,pesan) =>{
//     return 'hallo',nama,pesan
// };
// console.log(tampilnama)

// // dua parameter harus pakai kurung

// // implisit return : isinya return aja

// let tampilpesan = nama => 'hallo',nama;

// console.log(tampilpesan('irfan '))

// // tanpa parameter
// const tampiludang =() => 'hello world';


// KASUS MENGHITUNG PANJANG ARRAY
// let mahasiswa = ['irfan','fadel','muchtar'];

// let totalhuruf = mahasiswa.map(function(nama){
//     return nama.length;
// });
// console.log(totalhuruf)

// // jika menggunakan arrow function

// let totalhuruf = mahasiswa.map( nama => ({nama  :nama,jmlhuruf : nama.length}));

// // untuk merubah ke tabel gunakan
// console.table('nama')

