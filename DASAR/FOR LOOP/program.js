// CONTOH DIBAWAH ADALAH CODING KURANG BAGUS

awal =1
while(awal <=6){
    console.log('angkot',awal, 'berjalan dengan baik')
    awal++
}

for (akhir = 7; akhir <= 10; akhir++){
    console.log('angkot',akhir, 'tidak berjalan dengan baik')
}

// CODING YANG LEBIH BAGUS

jumlahangkot = 10;
operasi = 6;
nomer_angkot = 1;

while (nomer_angkot <= operasi){
    console.log('angkot',nomer_angkot, 'beroperasi dengan baik')
    nomer_angkot++
}

for (nomer_angkot = 7; nomer_angkot <= jumlahangkot; nomer_angkot++){
    console.log('angkot',nomer_angkot,'beroperasi dengan baik')
}

