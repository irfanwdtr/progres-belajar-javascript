// callback adalah : fungsi yang dikirimkan sebagai paramteter pada fungsi yang lain

// fungsi yang dieksekusi setelah fungsi lain selesai


// callback
// contoh
// synchronus callback
function halo(nama) {
    alert('hallo',nama);
}

function tampilkanpesan(callback) {
    const nama = prompt('masukkan nama : ');
    callback(nama);
}

tampilkanpesan(halo);

// cara lain
function tampilkanpesan(callback) {
    const nama = prompt('masukkan nama : ');
    callback(nama);
}

tampilkanpesan(nama =>{
    alert(`hallo, ${nama}`);
});

// asyncronus callbacks

const mhs = [
    {
        'nama' : 'irfan widiantoro',
        'nrp' : '346787564564',
        'email' : 'irfanbacot@gmail.com',
        'jurusan' : 'teknik keperawanan',
        'IDdosenwali' : 1
    },
    {
        'nama' : 'bambang',
        'nrp' : '789yt534879346',
        'email' : 'budi@gmail.com',
        'jurusan' : 'teknik keperawanan',
        'IDdosenwali' : 2
    },
    {
        'nama' : 'rudi widiantoro',
        'nrp' : '5467568568i46',
        'email' : 'rudi@gmail.com',
        'jurusan' : 'teknik keperawanan',
        'IDdosenwali' : 3
    },
    {
        'nama' : 'nara widiantoro',
        'nrp' : '457567856',
        'email' : 'nara@gmail.com',
        'jurusan' : 'teknik keperawanan',
        'IDdosenwali' : 4  
    },
];

// kita ingin menampilkan semua nama mahasiswanya saja
console.log('mulai');
mhs.forEach(m => console.log(m.nama));
console.log('selesai');

// membuat seolah olah ambil datanya lama

console.log('mulai');
mhs.forEach(m => {
    for (let i=0; i < 1000000; i++){
        let date = new Date();
    }
    console.log(m.nama)
});
console.log('selesai');


// asyncronus callback
// saya mau bikin sebuah function, ketika function itu dijalankan dia akan merefresh data menggunakan ajax

function getDataMahasiswa(url,succes,error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4){
            if (xhr.status === 200){
                succes(xhr.response);
            }else if (xhr.status === 4){
                error();
            }
        }
    }
}

xhr.open('GET', url);
xhr.send();

getDataMahasiswa('data/mahasiswa.json', success,error);

// belum selesai