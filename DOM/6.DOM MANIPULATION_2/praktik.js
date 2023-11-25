// dom manipulation method
// 1. manipulasi elemen
// seperti ganti warna,ubah tulisan, mengelola class


//sekarang  manipulasi node
// memungkinkan kita untuk menambah node baru

// untuk memanipulasi node pada dom js ada beberpa method
// document.createElement() //bikin elemen
// document.creatTextNode()// tulis apadidalam elemen yang dibuat
// node.appendChild() // disimpan diakhir
// node.insertBefore() // disimpan dimana
// parentNode.removeChild()
// parentNode.replaceChild()

// DOM manipulation
// intinya kita bisa membuat,mengubah dan menghapus pada elemen pada dom kita.

// misal tambah paragraf baru setelah paragraf tiga
// kalau pake html tinggal tambahkan tag
// kalau pake js gimana.........?

// buat elemen baru
const pBaru = document.createElement('p');
// kita bikin tulisan didalam p 
const teksPbaru = document.createTextNode('paragraf baru');
// dua node diatas ga ada hubunganya..masih terpisah...ada p kosong dan teks dan belum ounya siapa siapa dan masih ada di memori

//  simpan tulisan didalam paragraf
pBaru.appendChild(teksPbaru);

// gimana  caranya nyimpan paragraf baru ke bawah setelah paragraf 3

//  simpan p baru diakhir section A
// ambil section a
const sectionA =document.getElementById('a');
sectionA.appendChild(pBaru);

// __________________________

// menyimpan list ditengah tengah

const liBaru = document.createElement('li');
const teksLiBaru =document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

// simpan
// sebelum itu kita akan melakukan 2 hal
// harus tahu parent dari tempat yang akan kita sisipkan.
// berarti ul
// lalu kita harus tangkap elemen setelahnya

const ul = document.querySelctor('section#b ul');
// const li2 = document.querySelector('section#b ul li:nth-child(2)')
// cara diatas bisa menggfunakan cara lain yaitu mempersempit scope

const li2 = ul.querySelctor('li:nth-child(2)');

// lalu simpan 
// jadi simpan sebelum elemen apa didalam ul
ul.insertBefore(liBaru, li2);



// ______________
// hapus dan ganti

// misal kita akan remove link

// ad 2 
// kita harus tahu parent nya (section a)
// elemen yang kita remove
// ambil elemen
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);


// mengganti node

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru =document.createElement('h2');
const teksH2Baru =document.createTextNode('judul baru!');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);