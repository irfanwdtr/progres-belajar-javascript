 // template literal bisa melakukan hal hal seperti
// menggunakan ` ` backtick
// multi line string
// embedded expresion
// HTML fragment
// expresion interpolation
// tagged template

// contoh HTML fragment
// const mhs = {
//     nama :'irfan widiantoro',
//     umur : 33,
//     nim : 133431
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div>`

// document.body.innerHTML =el;

// misal kita memiliki objek nama ada banyak terus gimana?
// array

// const mhs = [
//     {
//         nama: 'irfan widiantoro',
//         email : 'irfanwidiantoro@gmail.com'
//     },
//     {
//         nama: 'budi widiantoro',
//         email : 'budianduk@gmail.com'
//     },
//     {
//         nama: 'nisa sabunan',
//         email : 'ayusganteng@gmail.com'
//     },
//     {
//         nama: 'ahmad widiantoro',
//         email : 'ahmadcoli@gmail.com'
//     },
// ];

// // jika ingin menampilkan semua(loop)..gunakanlah map

// const el = `<div class="mhs">
//         ${mhs.map( m => `<ul>
//         <li> ${m.nama}</li>
//         <li> ${m.email}</li>
//         </ul>`)}
// </div>`;

// pengkondisian
// misal kita ingin membuat lagu dan ada lagu yang ada penciptanya dan tidak ada
// maka jika ada tampilkan jika tidak biarkan
// bagaimana scriptnya???

// const lagu ={
//     judul : 'wik wik wik',
//     asal : 'thailand',
//     penyanyi :' chanatip songkrasin'
// }

// const el = `<div class="lagu">
//     <ul> 
//     <li> ${lagu.judul} </li>
//     <li> ${lagu.asal} ${lagu.penyanyi ? `(penyanyi.${lagu.penyanyi})` :``} </li>
//     </ul>
// </div>`




// 4. nested 

function cetakmatakuliah(matakuliah) {
    return `
    <ol>
    ${matakuliah.map(mk =>`<li> ${mk}</li>`).join('')}

    </ol>
    `
}

const mhs = {
    nama : 'irfan widantoro',
    semester : 2,
    matakuliah : ['Daspro','RPL','RLD','FISIKA','Kalkulus']
};

const el = `<div class="mhs">
    <h2> ${mhs.nama} </h2>
    <span class ="semester"> ${mhs.semester}</span>
    <h4> mata kuliah : </h4>
    ${cetakmatakuliah(mhs.matakuliah)}

</div>`;

document.body.innerHTML = el;

