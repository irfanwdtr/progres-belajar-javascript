// FOREACH DAN MAP 
// digunakan untuk perulangan

// angka =[1,2,3,4,5,6,7,8,9,54,4,7,34,2];

// for(i=0; i < angka.length; i++){
//     console.log(angka[i])
// }

// cara diatas adalah for biasa

// nah cara diatas akan kita ganti menjadi foreach

// menggunakan fungsi biasa
// angka  <------ itu mengacu pada data yang ingin diulang
// angka.forEach(function(e){
//     console.log(e);
// });

// // menggunakan fungsi expression
// cetak = function(e){
//     console.log(e)
// };


// nama = ['irfan','widiant','toro','lafi'];
// // b adalah indeks

// nama.forEach(function(a,b){
//     console.log('mahasiswa ke-',b+1, 'bernama',a)
    

// })


// // MAP
// // MAP SAMA SEPERTI forEach TETAPI LEBIH BAIK KARENA MENGEMBALIKAN ARRAY SEDANGKAN forEach TIDAK

// // misal

// angka =[1,2,3,4,5,6,7,8,9,54,4,7,34,2];

// angka2 = angka.map(function(e){
//     return e +10;
// });
// console.log(angka2)


// // SORT
// // untuk mengurutkan isi array nya

// angka =[1,2,3,4,5,6,7,8,9,54,4,7,34,2];

// angka.sort();
// console.log(angka.join('-'))

// // cara diatas sudah benar tetepi urutanya tidak benar karena cuma mengurutkan angka didepanya cara agar urut yaitu

// angka =[1,2,3,4,5,6,7,8,9,54,4,7,34,2];

// angka.sort(function(a,b){
//     return a-b;
// });
// console.log(angka.join('-'))

// // ___________________________________________________________________



// nama = [56,67,45,67];
// // b adalah indeks

// nama.forEach(function(a,b){
//     console.log('mahasiswa ke-',b+1, 'bernama',a)
    

// })


data =[45,56,7,34,76,34,67,34,67,34,56]

data.forEach(function(a){
    console.log('ini adalah angka ke',a)
})

for (x=0; x < 10; x++){
    console.log(data[x])
}