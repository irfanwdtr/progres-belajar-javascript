// // buat program input data sebanyak 5 kali dan diikuti dengan ini  inputan ke berapa


data =[];
for (i=1; i <= 5; i++){
    input_data = parseInt(prompt(`masukkan angka
ini adalah angka ke ${i}`))
        data.push(input_data);
};

// masukkan data ke dalam variabel data

// console.log(data);

// kalikan per elemen dengan dua angka
data_dikali_dua = data.map(function(data){
    return data *2;
})

console.log(data_dikali_dua)

// masukkan angka tadi kedalam perulangan
// for (i=0; i <= input_data.length; i++) {
//     console.log(`nomor ke ${i}, menampilkan data ke ${data_dikali_dua[i]}`)
// }

for (i=0; i < data_dikali_dua.length; i++) {
    console.log('ini data ke',i+1, 'menampilkan', data_dikali_dua[i])
}

