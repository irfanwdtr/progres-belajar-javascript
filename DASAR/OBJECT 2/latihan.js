NAMA =[];
USIA =[];
TINGGI_BADAN =[];
KELOLOSAN =[];
total = parseInt(prompt('MASUKKAN TOTAL SISWA'))
function input_data(NAMA,USIA,TINGGI_BADAN,total){

    for (x =1; x <= total; x++){
    nama = prompt('masukkan nama anda')
    usia = parseInt(prompt('masukkan usia anda'))
    tinggi_badan = parseInt(prompt('tinggi badan'))
    NAMA.push(nama)
    USIA.push(usia)
    TINGGI_BADAN.push(tinggi_badan)
    }};
input_data(NAMA, USIA,TINGGI_BADAN,total)
console.log(NAMA)
console.log(USIA)
console.log(TINGGI_BADAN)
cek_tinggi_badan = function(TINGGI_BADAN,total) {
    for (x=0; x <= total; x++) {
        if (TINGGI_BADAN[x] <= 165){
            KELOLOSAN.push(TINGGI_BADAN)
            console.log('TIDAK LOLOS')};
        if (TINGGI_BADAN[x] >= 165){
            KELOLOSAN.push(TINGGI_BADAN)
            console.log('SELAMAT ANDA LOLOS')};        
    }
    return TINGGI_BADAN};
cek_lolos = cek_tinggi_badan(TINGGI_BADAN,total)
console.log(cek_lolos)
