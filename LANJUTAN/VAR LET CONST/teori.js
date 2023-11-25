// MULAI DARI SEKARANG JANGAN PERNAH GUNAKAN VAR TAPI GUNAKANLAH LET

// studi kasusnya

// console.log(aku)
// var aku = 'ahahaha'

// karena kita menggunakan var atau langsung nama variabel pada javascript akan menghasilkan undefined
// jika di bahasa pemograman lain ini akan eror

// agar sama sepeerti bahasa lain maka gunakanlan let sebelum nama variabel

// di javascript itu memungkinkan kita untuk mengakses variabel didalam looping 

// misal 
for (var i=0; i < 10; i++){
    console.log(i)
}

console.log(i);         //bisa memanggil variabel didalam loop dan hasilnya yaitu 10

// di bahasa pemograman lain tidak bisa

// karena javascript menganut sistem yang dinamakan function scope

// supaya i tidak bisa diakses maka kita harus ubah ke function scope

// function lop(){
//     for (var i=0; i < 10; i++){
//         console.log(i);
//     }

// }

// lop();

// ____________________________________________________

// anonymus function : fungsi tidak bernama

// berilah nama const unutk variabel yang tidak akan pernah diubah

// ada yang bilang : gunakan let kalau for aja

// kenapa const? : meminimalisir perubahan state

