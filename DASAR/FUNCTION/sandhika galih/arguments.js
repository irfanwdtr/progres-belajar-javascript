/*ARGUMENTS ADALAH ARAY YANG BERISI NILAI SAAT FUNCTION DIPANGGIL

//misalnya
//ketika parameter 2 dan argumen 3 nanti angka ke 3 akan diabaikan maka untuk memanggil itu semua diperlukan arguments

function aku(a,b){
    return a+b
}
console.log(aku(10,20,30))      //akan muncul hasil 30 dan angka 30 diabaikan

//UNTUK MEMANGGIL ITU MAKA DIPERLUKAN ARGUMENTS

//CARA KERJA ARGUMENTS

function dia(){
    return arguments
}console.log(dia(1,3,4,6,7,'babi',false))
*/

// CARA SEBENARNYA


var total = function () {
    var i, hasil = 0;
    for (i = 0; i < arguments.length; i++) {
        hasil = hasil + arguments[i];
    }

    return hasil;
};

total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

