
// jumlahkan seluruh elemen pada array
// reduce itu punya 2 argumen

// reduce untuk melakukan sesuatu terhadap elemen pada array
// ciri ciri
// 1. punya 2 argumen
// 1. accumulator
// 2. currentvalue


angka =[3,6,8,4,45,67,34,76,3,7,3,7,3,7]


// const angkabaru =angka.reduce((accumulator,currentvalue) => accumulator + currentvalue);

// console.log(angkabaru)

// method chaining/berantai
// cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5) //arrow function
    .map(a => a*3) // >5 dikalikan 3
    .reduce((acc,cur) => acc+cur); //

console.log(hasil)
