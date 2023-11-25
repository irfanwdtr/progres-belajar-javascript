// konsep dari this jika kita menggunakan arrow function

// const mahasiswa = function() {
//     this.nama = 'irfan';
//     this.usia = 19;
//     this.sapa = function(){
//         console.log(`halo nama saya ${this.nama}`); 
//     }
// }

// let irfan = new mahasiswa();

// bagaimana cara merubah menjadi arrow function


let mahasiswa = function (nama,energi) {
    this.nama=nama;
    this.energi= energi;
    this.makan = porsi => {
        this.energi+=porsi
        return `hallo energi anda ${this.energi}`
    }
}

irfan = mahasiswa('irfan',20)
console.log(irfan)