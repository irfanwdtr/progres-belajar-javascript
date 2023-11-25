/*
total  =10
normal =6

for (awal =1; awal <= total; awal++){
    if (awal <= normal)
    console.log('angkot',awal, 'beroperasi dengan baik')
    else if (awal == 8)
    console.log('angkot',awal,'sedang lembur')
    else if (awal == 10)
    console.log('angkot',awal,'sedang lembur')
    else
    console.log('angkot',awal,'sedang tidak beroperasi')
}

*/

//CONTOH DIATAS TERLALU RUMIT
// JIKA ELSE IF BANYAK MAKA AKAN MEMAKAN BANYAK WAKTU
//CODING YANG TEPAT YAITU   

total = 10
normal = 6

for (awal =1; awal <= normal; awal++){
    if (awal <= normal)
    console.log('angkot',awal, 'berjalan dengan baik')
    else if (awal == 8 || 10)
    console.log('angk')
    }
