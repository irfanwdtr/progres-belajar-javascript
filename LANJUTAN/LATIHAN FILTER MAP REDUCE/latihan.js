// // ALGORITMA
// ambil semua elemen video
// queryselectorall untuk memanggil file disbelah
// const videos = document.querySelectorAll('[data-duration]');
// console.log(videos)

// maka akan muncul nodelist dan itu berbeda dari list
// dan tidak bisa jika dikasih map,filter,reduce
// kita harus mengubah dulu menjadi array
// maka
// Array.from = untuk mengubah menjadi array

// const videos =Array.from(document.querySelectorAll('[data-duration]'));

// console.log(videos)

// ________________________________________________________


// pilih hanya yang " teknik informatika"
// kita akan filter semua isi dari var video dan cari yang didalam li nya  ada tulisanya teknik informatika
                //MENGGUNAKAN FUNCTION BIASA
// const informatika = videos.filter(function (video) {
//     return video.textContent.includes('Teknik Informatika')
// })  
// console.log(informatika)

                // MENGGUNAKAN ARROW FUNCTION

// let informatika = videos.filter(video => video.textContent.includes('Teknik Informatika'))  //titik koma ini
// // console.log(informatika)

// cari video yang didalamnya ada teknik informatika
// incluedes artinya terdapat apa
// filter video yang didalamnya terdapat teknik informatika
// text-content itu memanggil di bagian teknik informatika

// // _______________________________________________________

// // ambil durasi masing masing video

// // 1. di javascript kita bisa memanggil method yang namanya dataset untuk mengambil atribut(duration)
// // 2. kita menggunakan metode chaining maka titik koma di atas hilangkan lalu dibawah ini kasih titik

//     .map(item => item.dataset.duration)//duration itu atribut

// // ubah durasi menjadi float, ubah menit menjadi detik

//     .map(waktu => {
//         // 10:30 dipecah menjadi 10,30 maka menggunakan split
//         const parts =waktu.split(':').map(part => parseFloat(part));
//         // lalu jumlahkan
//         return (parts[0] * 60) + parts[1];
//     })




// // jumlahkan semua detiknya

//     .reduce((total,detik) => total + detik);


// // ubah formatnyajadi jam menit detik

// const jam = Math.floor(informatika / 3600);
// // ambil ke bawahnya math.floor

// // ambil sisa menit
// informatika = informatika - jam *3600;

// const menit = Math.floor(informatika / 60);
// pembulatan ke bawah math.floor


// const detik = informatika - menit * 60;

// //  simpan di DOM

// const pDurasi  = document.querySelector('.total-durasi');

// pDurasi.textContent =`${jam} jam, ${menit} menit,${detik}detik.`;


// jumlah video_____________________

// const jmlvideo =videos.filter(video => video.textContent.includes('Teknik Informatika')).length;

// const pjmlvideo =document.querySelector('.jumlah-video')
// pjmlvideo.textContent =`${jmlvideo} video.`;


// console.log(jmlvideo)

