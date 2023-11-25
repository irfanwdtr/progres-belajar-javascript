 // // apa itu spread operator..?
// // memecah (expand/unpack) iterables menjadi single element

// // jika titik tiga didepan maka akan dipecah pecah

// const mhs =['irfan','widi','antoro'];
// console.log(...mhs);
// console.log(...mhs[1]);


// // kapan kita menggunakan..?
// // menggabungkan 2 array

const mhs =['irfan','widi','antoro'];
const dosen =['budi','moses','sandro'];
const orang  =[...mhs,...dosen]
// // // penulisan salah yaitu :
// const orang =[mhs,dosen] // array didalam array

// // // menggunakan concat
// // const orang = mhs.concat(dosen)


// // // menambah string
// const orang = [...mhs,'aji',...dosen];


console.log(orang);
console.log(mhs[1])

// // // meng copy-array
// // // array awalnya tetap dan tidak ikut berubah
// // const mhs =['irfan','widi','antoro'];
// // const mhs1 = [...mhs];
// // mhs1[0] = 'fajar'
// // console.log(mhs)

// // // list

// // // const Limhs =document.querySelectorAll('li');
// // // console.log(Limhs[0].textContent);

// // // lop biasa
// // const Limhs =document.querySelectorAll('li');
// // const mhs =[];

// // for (let i=0; i <mhs.length; i++){
// //     mhs.push(Limhs[i].textContent);
// // }
// // console.log(mhs)

// // // cara lain

// // const Limhs =document.querySelectorAll('li');
// // const mhs =[...Limhs].map(m => m.textContent);
// // console.log(mhs);


// // // kita akan buat animasi
// // // jika kita mengarahkan mouse ke nama maka akan ada warna berubah ( perhuruf)
// // // jika hover maka perkata

// // const nama = document.querySelector('.nama');
// // const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
// // console.log(huruf);



// jika isinya  nodelist maka tidak bisa memakai map..agar bisa maka gunakan spread operator [...namalist]
