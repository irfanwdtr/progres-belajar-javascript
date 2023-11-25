// apa itu destructuring variable : expression pada js yang membuat kita dapat membongkar nilai dari array atau properti dari object kedalam variabel yang terpisah.
// ---MDN web docs


// misal kita ada kasus
const coba = ['satu','dua','tiga'];

// jika kita ingin mengambil variabel maka harus berdasarkan indeks


// dengan menggunakan ini kita cukup menggunakan

const [a,b,c] =coba;

console.log(a) // satu
console.log(b) // dua
console.log(c) // tiga

// contoh lain

const mhs = {
    nama : 'irfan widiantoro',
    umur : 23,
    email : 'irfan@gmail.com'
};

// menggunakan destructuring

const {nama,umur,email} = mhs;
console.log(nama) // irfan widiantoro
console.log(umur) //23
console.log(email) //irfan@gmail.com


// penggunaan sederhana

// cara biasa
const perkenalan = ['halo','nama','saya','irfan widiantoro'];



const salam = perkenalan[0]
const nama = perkenalan[3]

// menggunakan destructuring array

const perkenalan = ['halo','nama','saya','irfan widiantoro'];

const [salam,satu,dua,tiga] = perkenalan;
console.log(salam);

// mengambil sebagaian

const perkenalan = ['halo','nama','saya','irfan widiantoro'];

const [salam, , ,tiga] = perkenalan;
console.log(salam);

// swap atau menukar

let a = 1;
let b =2;

console.log(a)
console.log(b)

[a,b] = [b,a]

console.log(a)
console.log(b)

// return value pada function 

function coba() {
    return [1,2];
}
const [a,b] = coba();
console.log(b)

// rest parameter

const [a, ...values] =[1,2,3,4,5];

console.log(a);
console.log(values);

// destructuring object
const mhs ={
    nama : 'irfan widiantoro',
    umur : 23
}
const {nama, umur} = mhs;  //harus sama dengan properti
console.log(nama);

// assignment tanpa deklarasi object

({nama, umur} ={
    nama : 'irfan widiantoro',
    umur : 23
});
console.log(nama);

// mengasih nama baru pada properti
// assign ke variabel baru

const mhs ={
    nama : 'irfan widiantoro',
    umur = 23
}

const {nama: n, umur : u} = mhs;
console.log(n)


// meberikan default value

const mhs ={
    nama : 'irfan widiantoro',
    umur = 23
    // jika tidak ada var email maka akan mengampilkan email default
}

const { nama, umur,email = 'emaildefault@gmail.com'} = mhs;
console.log(email)

// memberi nilai default + assign ke variable baru

const mhs ={
    nama : 'irfan widiantoro',
    umur = 23,
    email : 'irfan@gmail.com'
}

const {nama :n, umur :u, email:e ='emaildefault@gmail.com'} = mhs;
console.log(e);


// rest parameter

const { nama,...value} = mhs;
console.log(value);


// mengambil field pada object, setelah dikirim sebagai parameter untuk funvtion

const mhs ={
    id :123,
    nama : 'irfan widiantoro',
    umur = 23,
    email : 'irfan@gmail.com'
}

function getIDmhs(mhs) {
    return id
}

console.log(getIDmhs(mhs))