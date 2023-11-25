// events tidak sama dengan even
// apa itu events...?
// event pada javascript merepresentasikan sebuah kejadian yang terjadi didalam dom
// kejadianya bisa dilkaukan oleh user misal klik pada mouse,tekan tombol keyboard,dll.

// cara mendengarkan event
// event handler 
// 1. inline HTML atribute
// 2. elemen method

// addEvebListener()

// saya ingin klik paragraf 3 nanti warnanya akan berubah tapi menggunakan js(aftar di klik)
// tapi kalau menggunakan css harus ditekan terus, kalau dilepas akan balik lagi

const p3 = document.querySelector('.p3');

function ubahWarna(){
    p3.style.backgroundColor ='lightblue';
    // ketika paragraf 3 diklik maka berubah maka tambahkan event handler di html nya yang medua simpandi method..yang pertama tidak disarankan.
}

