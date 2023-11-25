// DOM SELECTION
// document.getElementById()---> mengembalikan elemen
const dia = document.getElementById('judul');

// mengubah warna melalui js
judul.style.color ='red'
judul.backgroundColor = 'grey'; // jangan pakai strip ntar eror
judul.innerHTML =  'irfan widiantoro'; // ubah nama dihtml


// ___________________________________
//  document.getElemenByTagName();
// tolong carikan saya yang naama tag nya apa
// misalkan kita ingin menyeleksi semua p
const p =document.getElementsByTagName('p');
// jika kita tulis console p di consol maka muncul tag p
// lalu
// jika kita tulis
// p.style.backgroundColor = 'lightblue';
// maka tidak bisa karena p adalah array
// maka diberi indeks dlu yang mana yang ingin digantis
p[0].style.backgroundColor ='lightblue';
// kalau pengen semua ya di copy heheh

const h1 = document.getElementsByTagName('hi')[0];
h1.style.fontSize = '50px'
// ____________________________
// document.getElementsByTagName()
// ---> html collection

const p1 = document.getElementsByClassName('pi');
p1[0].innerHTML ='ini diubah dari javascript';