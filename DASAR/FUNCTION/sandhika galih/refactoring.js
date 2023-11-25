// REFACTORING ADALAH MENGUBAH KODE KITA MENJADI LEBIH BAIK TANPA MENGUBAH FUNGSIONALITAS

//MISAL DUA BUAH KUBUS

function duakubus(a,b){
    volume_1 = a*a*a
    volume_2 =b*b*b
    hasil = volume_1 + volume_2
    return hasil
}
console.log(duakubus(3,4))


//REFACTORING BISA DISEBUT JUGA DENGAN PENGHEMATAN MEMORI
//KITA LIHAT KODE DIATAS
//DISITU KIA BISA MEMBUAT KODE MENJADI LEBIH SIMPEL DENGAN MENGHILANGKAN VARIABEL
// DENGAN MENGHILANGKAN VARIABEL KITA AKAN MENGHEMAT MEMORI

function duakubus(a,b){
    return a*a*a+b*b*b
}
console.log(duakubus(3,4))

