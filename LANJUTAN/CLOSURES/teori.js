// ADA 3 BUAH TOPIK
// 2.1 EXECUTION CONTEXT,HOISTIG,SCOPE

// ADA 2 FASE PADA EXECUTION CONTEXT
// 1. CREATION
// 2. EXECUTION


// jika kita menulis
// console.log(nama) ---------> maka akan eror karena variabel nama tidak pernah didefinisikan.

// ________________________________________________________

// lalu jika
// console.log(nama)
// var nama ='irfan'

// ---> jika dijalankan tampilanya undefined mengapa?
// PENJELASAN
// saat program dijalankan yang terjadi adalah ada sesuatu yang disebut dengan creation phase (fase pembentukan) pada global context

// js akan mengecek apakah ada variabel atau function pada kudinganya (itu dulu yang dicek) ada keyword var gak? function gak? kalau ada dia akan membuat nama variabel diisi dengan undefined

// jika ada function maka akan diisi dengan nama function =fn()
// konsep nya namanya hoisting





// _________________________________________________

// dan jika console.log nya dipindah kebawah maka akan berjalan normal

// MENGAPA..? kita menggunakan closures

// untuk membut private method
// membuat function factory

