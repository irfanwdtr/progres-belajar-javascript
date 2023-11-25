// higher order function adalah function yang beroperasi pada function yang lain. Baik itu digunakan dalam argument. mapupun sebagai return value

// javascript memperlakukan function sebagai object


// function kerjakantugas(matakuliah,selesai) {
//     console.log('mulai menegerjakan tugas',matakuliah);
//     selesai();
// }



// function selesai() {
//     alert('selesai mengerjakan tugas')
// }

// kerjakantugas('pemograman web',selesai)


// kerjakantugas disebut sebagai higher order function
// selesai disebut callback

// contoh lain
function ucapkansalam(waktu) {
    return function (nama) {
        console.log('hallo',nama,'selamat',waktu,'semoga harimu menyenangkan!')
    }
}
let selamatmalam = ucapkansalam('malam')
console.dir(selamatmalam('irfan'))

// kenapa nggak binin function biasa aja?
// agar kode bisa lebih simpel

// semakin besar sebuah program, semakin tinggi kompleksitasnya, semakin membingungkan programmernya

// misal

for (let i=0; i < 10; i++){
    console.log(i);
}
// jika kita ingin merubah angka 10 menjadi 100 maka kita harus merubah angkanya sehingga kurang relevan maka 

function angka(n) {
    for (let i=0; i < n; i++){
        console.log(i)
    }
}
angka(100)

