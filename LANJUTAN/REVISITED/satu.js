// MELANJUTKAN JAVASCRIPT DASAR
// 1. PROTOTYPE = KONSEP OBJECT YANG HARUS DIPAHAMI

// 1.1 OBJECT
// ADA 4 CARA MEMBUAT OBJECT
// 1. OBJECT LITERAL
// 2. FUNCTION DECLARATION
// 3. CONSTRUCTOR FUNCTION (KEYWORD NEW)
// 4. OBJECT.CREATE()  -------->NEXT VIDEO



// 1. OBJECT LITERAL
// let mahasiswa = {
//     nama : 'irfan widiantoro',
//     energi : 10,
//     // method adalah function didalam object, kita buat method tambah energi
//     makan : function(porsi){
//         this.energi = this.energi + porsi
//         // kita menggunakan bactik atau titik disebelah kiri angka 1
//         // dengan mngunakan bactik kita bisa memanggil langsung tanpa keluar dari string.

//         console.log(`selamat datang ${this.nama}, selamat makan`)
//     }

// };
// console.log(mahasiswa)

// jika kita ingin membuat object lagi maka kita harus membuat function dan tulisan diatas lagi maka akan sangat amat banyak tulisan seperti itu  dan nama variabelnya harus beda / mahasiswa1,mahasiswa2

// _____________________________________________________________
// FUNCTION DECLARATION

// keuntungan
// tidak perlu buat banyak, cukup 1 aja

function mahasiswa(nama,energi){
    let mahasiswa ={};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    mahasiswa.makan = function(porsi){
        this.energi = this.energi + porsi
        console.log(`hallo ${this.nama} selamat makan!`);
    }

    mahasiswa.main = function(jam){
        this.energi = this.energi - jam;
        console.log(`${this.nama} selaamt bermain`)
    }
    return mahasiswa
}

let irfan = mahasiswa('irfan',10);
console.log(irfan)

// JIKA INGIN  MEMBUAT MAHASISWA LAGI MAKA TINGGAL BUAT VARIABEL DAN PAMGGIL NAMA FUNGSI DOANG

// ______________________________________________________________

// JIKA KITA MENGGUNAKAN CONSTRUCTOR FUNCTION KITA TIDAK PERLU MENULISKAN VARIABEL DAN RETURN

function mahasiswa(nama,energi){
    this.nama = nama;
    this.energi = energi;
    this.makan = function(porsi){
        this.energi = this.energi + porsi
        console.log(`hallo ${this.nama} selamat makan!`);
    }

    this.main = function(jam){
        this.energi = this.energi - jam;
        console.log(`${this.nama} selaamt bermain`)
    }
}

let irfan = new mahasiswa('irfan',10);
console.log(irfan)

