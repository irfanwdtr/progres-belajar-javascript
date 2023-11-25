// rest parameter yaitu : sesuatu yang merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array

// rest parameter
// rest parameter itu hanya bisa digunakan di akhir parameter

function myfunc(a,b,...myargs) {
    return myargs;
}

console.log(myfunc(1,2,3,4,5))

// cara lain
function myfunc() {
    return array.from(arguments);
    // return [...arguments]; cara 3
}


// jumlahkan seluruh paramter yang dikirmkan

// rest paramter
function jumlahkan(...angka) {
    let total =0;
    for (const a of angka) {
        total +=a;
    }
    return total;
}

console.log(jumlahkan(1,2,3,4,5));

// cara lain menggunakna reduce

function jumlahangka(...angka) {
    return angka.reduce((a,b) => a + b);

}
console.log(jumlahkan(1,2,3,4,5));


// array destructuring
// setiap nama yang muncul pertama ia adalah ketua
// kedua adalah wakil
// sisanya anggota
const kelompok1 = ['irfan','budi','rioko','nanda','templas','jatno'];

const[ketua,wakil,...anggota]= kelompok1;
console.log(anggota);

// object destructuring
const team = {
    pm : 'irfan',
    asisten : 'slamet puji ariyanto',
    pelaksana :  'slamet mujiono',
    kepercayaan :'sri bayu suseno',
    penanggungjawab : 'puji santoso',

}

const {pm,...myteam} = team;
console.log(myteam)

// filtering


function filterby(types,...values) {
    return values.filter(v => typeof v === types);
}
// kita akan memfilter nilai berdasarkan tipe data
// nilainya akan dikirimkan ke argumen ini

console.log(filterby('number',1,2,'irfan',false,10,true,'nudi'))

