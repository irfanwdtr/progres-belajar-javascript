// // queryselector menghasilkan sebuah array
// // queryselectorall menghasilkan sebuah nodelist

// document.queryselector()
// // ---> menghasilkan 1 elemen

// const p4 = document.queryselector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize ='30px';


// const li2 = document.queryselector('section#b ul li:nth-child(2)');

// li2.style.backgroundColor ='orange';

// const p4 = document.queryselector('p')
// // yang dikembalikan hanya elemen pertama meskipun p banyak

// // document.queryselectorAll()
// // memilih semnua elemen yang ada di <halaman
// const p4 = document.queryselectorAll('p')
//  //const p4 = document.getElementsByTagName('p') sama aja

// p[2].style.backgroundColor = 'red';

// // jika mnggunakan lop
// for (let i = 0; i <p.length; i++) {
//     p[i].style.backgroundColor ='lightblue';
// }

// // mana yang terbaik...?
// // kalau di html udha punya id kenapa gak pakai id aja
// // ketika kita diharuskan untuk tidak merubah struktur html kita bisa menggnakan queryselector/all 


// // MENGUBAH NODE ROOT
// // jika kita ingin mengubah elemen yang tidak ada tag name,class maka kita bisa menggunakan
// const p4 =document.getElementsByTagName('p');
// const p4 =document.queryselectorAll('p');
// p4[3].style.backgroundColor = 'red';

// // tapi ada cara yang lain..kita bisa merubh scope node nya

// const sectionB = document.getElementsById('b');
// // lalu sekarang jika kita ingin mencari paragraph ke 4  maka
// const p4 =sectionB.queryselector('p');
// p4.style.backgroundColor = 'orange';

// // cara lain
// const sectionB = document.queryselector('section#b');
// const p4 =sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor -'orange';
