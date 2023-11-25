// function mahasiswa(nama,energi){
//     let mahasiswa ={};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = function(porsi){
//         this.energi = this.energi + porsi
//         console.log(`hallo ${this.nama} selamat makan!`);
//     }

//     mahasiswa.main = function(jam){
//         this.energi = this.energi - jam;
//         console.log(`${this.nama} selaamt bermain`)
//     }
//     return mahasiswa
// }

// let irfan = mahasiswa('irfan',10)
// console.log(irfan)
// // __________________________________________________________________________________

// function mahasiswa(nama,energi){
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function(porsi){
//         this.energi = this.energi + porsi
//         console.log(`hallo ${this.nama} selamat makan!`);
//     }

//     this.main = function(jam){
//         this.energi = this.energi - jam;
//         console.log(`${this.nama} selaamt bermain`)
//     }
// }

// let irfan = new mahasiswa('irfan',10);
// console.log(irfan)

// _________________________________________________________________________________
// JIKA KITA MENGGUNAKAN CARA DIATAS MAKA FUNGSI MAKAN DAN ENERGI AKAN TETAP DICETAK DAN INTINYA MENGHABISAKAN MEMORI DAN TIDAK ADA GUNANYA UNTUK MENGAKALI HAL TERSEBUT MAKA
// BUATLAH VARIABEL BARU DENGAN MENGGUNAKAN CONST KARENA TIDAK AKAN BERUBAH UBAH DAN TETAP

const methodmahasiswa ={
    makan : function(porsi){
        this.energi = this.energi + porsi
        console.log(`hallo ${this.nama} selamat makan!`);
    },

    main : function(jam){
        this.energi = this.energi - jam;
        console.log(`${this.nama} selaamt bermain`)
    }
};

// function mahasiswa(nama,energi){
//     let mahasiswa ={};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodmahasiswa.makan
//     mahasiswa.main = methodmahasiswa.main

//     return mahasiswa; 
// }

// let irfan = mahasiswa('irfan',10);
// console.log(irfan) 


// ADA CARA YANG LEBIH OTOMATIS YAITU
// KITA TIDAK PERLU MELETAKKAN     mahasiswa.makan = methodmahasiswa.makan  mahasiswa.main = methodmahasiswa.main
// DIDALAM OBJEK MAHASISWA
// menggunakan object create yaitu fungsi buat object+bisa dimasukkan parameter
// dan bisa ikut membawa parameter diluar

function mahasiswa(nama,energi){
    let mahasiswa = Object.create(methodmahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;


    return mahasiswa; 
}

let irfan = mahasiswa('irfan',10);
console.log(irfan)

