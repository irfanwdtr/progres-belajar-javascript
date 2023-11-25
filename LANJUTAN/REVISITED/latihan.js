// mahasiswa ={
//     nama :'irfan widiantoro',
//     energi : 100,
//     stamina :50,
//     makan : function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log( `selamat energi anda menjadi ${this.energi}`)

// }
// }

// function mahasiswa(nama,energi) {
//     let mahasiswa ={};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`hallo ${this.nama} energi anda sekarang adalah ${this.energi}`)
//     };
//     mahasiswa.main = function (jam) {
//         this.energi += jam;
//         console.log(`hallo energi anda sekarang ${this.energi}`)
//     }
//     return mahasiswa;

// }

// let irfan = mahasiswa('irfan',20)
// console.log(irfan)


// function mahasiswa(nama,energi) {
//     this.nama = nama;
//     this.energi =energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`hallo kak energi anda  menjadi ${this.energi}`)
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`hallo sekarang energi anda berkurang menjadi ${this.jam}`)
//     }
// }

// irfan = new mahasiswa('irfan', 20)
// console.log(irfan)