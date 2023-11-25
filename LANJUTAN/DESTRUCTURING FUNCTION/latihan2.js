// ribet

// function penjumlahan(a,b) {
//     return [a+b, a *b]
// }
// console.log(penjumlahan(10,20))

// function perkurangan(a,b) {
//     return [a-b, a+b]
// }
// console.log(perkurangan(10,30))



// function kalkulasi(a,b) {
//     return [a+b, a-b]
// }

// const [tambah,kurang] = kalkulasi(100,200)
// console.log(tambah)

// function perhitung(a,b) {
//     return [a+b, a-b, a*b]
// }

// const [kurang,kali,tambah] = perhitung(5,2)
// console.log(kurang)

// function kalkulasi(a,b) {
//     return {
//         tambah : a+b,
//         kurang : a-b,
//         kali : a*b,
//         bagi : a /b
//     }
// }

// const {kali,bagi,kurang,tambah} = kalkulasi(10,20)
// console.log(kurang)

// mhs1 ={
//     nama : 'irfan widiantoro',
//     nim : 123254
// }
// mhs2 ={
//     nama : 'rudi',
//     nim : 325346
// }

// function tampil_data(nama,nim) {
//     return `nama saya ${nama} dengan nim ${nim}`
// }

// console.log(tampil_data(mhs1.nama,mhs1.nim))

// function tambah(a,b) {
//     return a+b
// }
// console.log(tambah(10,20))

// function kurang(a,b) {
//     return a-b
// }
// console.log(kurang(10,20))


// cara simpel

function kalkulasi(a,b) {
    return{
        tambah : a+b,
        kurang :a-b
    }
}

const {tambah,kurang} = kalkulasi(100,20)
console.log(tambah)
console.log(kurang)

