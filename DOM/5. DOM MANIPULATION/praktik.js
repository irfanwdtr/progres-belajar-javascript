// DOM MANIPULATION METHOD
// --manipulasi element
// --manipulasi node

// ada beberapa method manipulasi element

// element.innerHTML : merubah isi dari sebuah tag yang kita buat/seleksi
// element.style.<property> : merubah style /css dari sebuah elemen yang kita seleksi
// element.setAttribute() : memanipulasi atribut dari sebuah elemen yang melekat pada sebuah elemen yang kita seleksi
// element.classList : manipualsi class


const judul = document.getElementById('judul');
judul.innerHTML ='irfan widiantoro'
// maka hello wordl akan berubah menjadi irfan widantoro

// ganti section a
const sectionA = document.querySelector('section#a');
sectionA.innerHTML ='hello world';
// ia akan menganti seluruh isinya 
// cara lain
sectionA.innerHTML =' <div><p>paragraf1<p></div>';

// element style
const judul =document.querySelector('#judul');
judul.style.color ='lightblue';
judul.style.backgroundColor ='salmon'

// manipulasi atribut
// element.getAttribute('')
// element.setAttribute
// element.removeAttribute
// atribut adalah sesuatu yang menempel pada elemen html

// console.judul = document.getElementsByTagName('h1')[0];
// // menmbahkan atribute baru
// judul.setAttribute('name','irfan widiantoro');


const p2 =document.querySelector('.p2');
p2.setAttribute('class','label')

element.classList.toogle()
// dengan menggunakan togle msialkan sebauh elemen tidak memiliki kelas trtentu maka dia akan menambahkan.jika sudah punya maka akan menghilngkan.
element.classList.item()
// untuk emngetahi kelas tertentu pada sebuah elemen.
// misalkan sebuah elemen memilik 3 kelas maka pakai itu
element.classList.contains()
// kita cek di dalam elemen..punya gak kelas tertentu
element.classList.replace()
// untuk mengganti kelas yang ada dengan yang baru.
