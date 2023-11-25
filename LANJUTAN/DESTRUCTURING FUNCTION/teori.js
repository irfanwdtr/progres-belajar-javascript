// destructuring

function penjumlahanperkalian(a,b) {
    return [a + b, a* b];
} 

const jumlah = penjumlahanperkalian(2,3);
console.log(jumlah)

// jika dijalankan  maka akan menghasilkan 2 array
// _____________________________________

// jika ingin mengambil penjumlahanya saja maka
const jumlah = penjumlahanperkalian(2,3)[0]; //kasih indeks
console.log(jumlah)

// maka akan ribet harus memanggil indeks
// ____________________________________

// dengan menggunakand destructuring kita bisa langsung saja membuat sebuah variabel yang isinya juga array

const [jumlah,kali] = penjumlahanperkalian(2,3);
console.log(jumlah)
console.log(kali)

// __________________________________________________

// kasus berikutnya return value nya nambah
function kalkulasi(a,b) {
    return [a + b,a -b, a* b,a /b];
}

const [tambah,kurang,kali,bagi] = kalkulasi(2,3)
console.log(bagi);

// cara diatas harus urut penempatanya...jika ingin tidak urut dan sesuai nama kita bisa return value diganti dengan object

function kalkulasi(a,b) {
    return{
        tambah: a + b,
        kurang :a -b,
        kali : a*b,
        bagi : a/b
    }
}

// kurungnya pakai kurung kurawa ya

const {bagi,tambah,kali,kurang} = kalkulasi(2,3);
console.log(kurang)

// ____________________________________________

// destructuring function arguments
// pake fuction declaration biasa

const mhs1 ={
    nama : 'irfan widiantoro',
    umur : 33,
    email :`irfanwidiantoro@gmail.com`
}

function cetakmhs(nama,umur) {
    return `hallo, nama saya ${nama}, saya berumur${umur}tahun.`;
}

console.log(cetakmhs(mhs1.nama, mhs1.umur));

// lebih kompleks

const mhs2 = {
    nama : 'irfan widiantoro',
    umur : 33,
    email :`irfanwidiantoro@gmail.com`,
    nilai : {
        tugas : 80,
        uts : 89,
        uas : 90
    }
}

// kalau misalkan kita akan nambahin return value nya

// cara 1

function cetakmhs({nama,umur, nilai}) {
    return `hallo, nama saya ${nama}, saya berumur${umur}tahun, dan nilai uas saya adalah ${nilai.uas }.`;
}

console.log(mhs2)

// cara 2

function cetakmhs({nama,umur, nilai :{tugas,uts,uas}}) {
    return `hallo, nama saya ${nama}, saya berumur${umur}tahun, dan nilai uas saya adalah ${uas}.`;
}

console.log(mhs2) 