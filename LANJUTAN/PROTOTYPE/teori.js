// sistem_mahasiswa = {
//     makan : function(porsi){
//         this.energi = this.energi+porsi;
//         console.log('selamat makan',this.nama)
//     },

//     tidur :  function(jam){
//         this.energi = this.energi+jam;
//         console.log('selamat tidur',this.nama)
//     },

//     main :  function(jam){
//         this.energi = this.energi+jam;
//         console.log('selamat main',this.nama)
//     },
// }

// mahasiswa = function(nama,energi){
//     mahasiswa = Object.create(sistem_mahasiswa)
//     mahasiswa.nama = nama;
//     mahasiswa.energi =energi;

//     return mahasiswa
// };

// irfan = new mahasiswa('irfan widiantoro',87)
// console.log(irfan)

// DENGAN MENGGUNAKAN PROTOTYPE KITA BISA MENGGUNAKAN CARA DIATAS MENJADI LEBIH EFEKTIF LAGI

// mahasiswa = function(nama,energi){
//     this.nama = nama;
//     this.energi = energi;
// }

// mahasiswa.prototype.makan = function(porsi){
//     this.energi+=porsi;
//     return 'selamat makan kak'
// }

// mahasiswa.prototype.main = function(jam){
//     this.energi-=jam;
//     return 'selamat main'
// }

// mahasiswa.prototype.tidur = function(jam){
//     this.energi+=jam *2
//     return 'selamat tidur'
// }

// irfan = new mahasiswa('irfan widiantoro',20)
// console.log(irfan)

// ______________________________________________________________________________________
// VERSI CLASS

// class mahasiswa {
//     constructor(nama,energi){
//         this.nama= nama;
//         this.energi = energi;
//     }
//     makan(porsi){
//         this.energi+=porsi;
//         return "hallo kak selamat makan...energi anda sekarang bertambah yaaa"
//     }
//     main(jam){
//         this.energi-=jam;
//         return 'energi anda sekarang berkurang'
//     }

// }

// let irfan = new mahasiswa('irfan widiantoro',10)

// console.log(irfan)

