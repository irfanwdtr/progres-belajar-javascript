// closure merupakan kombinasi antara function dan lingkungan leksikal (lexical scope) di dalam function tersebut
// -MDN

// closure adalah sebuah function ketika memiliki akses ke parent scope nya, meskipun parent scope-nya sudah selesai di eksekusi.
// -w3school

// closure adalah sebuah function dikembangkan oleh function yang lain, yang memiliki akses ke lingkungan saat ia diciptakan
// -code fellow


// ________________________________________________________
// LEXICAL SCOPE

function init() {
    let nama = 'irfan';        //local variabel
    function tampilnama(){      //inner function(closure*)
        console.log(nama);
    }
    tampilnama();
}
init();

// akan menampilkan irfan


// contoh kasus factory

function ucapkansalam(waktu) {
    return function (nama) {
        console.log(`hallo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`);
    }
}

let selamatpagi = ucapkansalam('pagi')
let selamatsiang = ucapkansalam('siang')
let selamatmalam = ucapkansalam('malam')

// selamatpagi('irfan');
// selamatmalam('widiantoro')

console.dir(selamatmalam('irfan'));

// contoh private variabel
let counter =0;
let add = function(){
    return ++ counter;
}

console.log(add());