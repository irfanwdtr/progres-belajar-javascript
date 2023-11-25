// // template literal adalah string literal yang memungkinkan adanya sebuah expresion di dalamnya

// // string literal
// let nama ='irfan';
// let nim = "08908";
// let email =`irfan@wdtr.gmail.com`;  //backtik

// // dengan menggunakan backtik memungkinkan kita membuat template literal
// // -menggunakan ` ` backtik

// // kita bisa melakukan
// // multi-line string
// // embedded expression
// // HTML fragment
// // expression interpolation
// // tagged template



// // multi-line string
// `string text baris 1
// string text baris 2
// string text baris 3`

// // embedded expression
// 'string text ${expression} string text'

// // tagged template
// // tag `string text ${expression} string text`

// // jika kita ingin membuat enter baru
// console.log('string 1 \n string 2')

// // dengan menggunakan backtik maka
// console.log(`string 1
// string 2`)

// // kita juga bisa menggunakan multi-line string saat kita akan membuat multi-line string ( HTML Fragments) (1)

// // misal ada objek mahasiswa
// const mhs ={
//     nama : 'irfan',
//     usia : 19,
//     nim : 12334

// };

// // lalu kita akan menampilkan di halaman html kita maka kita rangkai terlebih dahulu

// let el =' ';

// el += '<div class = "mhs">';
// el += '<h2>'+ mhs.nama +'</h2>';
// el += '<span class = "nim"'> +mhs.nim + '<span>';
// el += '</div>';

// console.log(el);

// // jika kita menggunakan literal maka`

let el = `<div class= "mhs">
<h2> ${mhs.nama} </h2>
<span class= "nrp"> ${mhs.nim} </span>
</div>`;

console.log(el)

// akan leih mudah

// embedded interpolation (backtik)
let a =10;
let b = 20;
console.log(`jika a=10 dan b = 20,maka hasil penjumlahanya adalah :
${a + b}, bukan ${2 * a+b}`);




const mhs = {
    nama :'irfan widiantoro',
    umur : 33,
    nim : 133431
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nim">${mhs.nim}</span>
</div>`

console.log(el)
