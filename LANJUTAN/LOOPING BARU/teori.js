// for..of
// for..in

// for of adalah sebuah looping yang bisa mengulang  atau menelusuri object object yang literabel

// iterable object
// -string
// -array
// -arguments / nodelist
// -typedarray
// -map
// -set
// -user-defined iterables 

// for..off

// for biasa
// array
const mhs =['sandhika','doody','erik'];

for(let i=0; i<mhs.length; i++) {
    console.log(mhs[i]);
};

// foreach
mhs.forEach(m => console.log(m))

// for off

for (const m of mhs) {
    console.log(m);
}
// foreach khusus untuk array
// tidak bisa lopping dengan string


// ___________________________________________

// string = iterables

const nama = 'irfna';
for (const n of nama) {
    console.log(n)
}


// foreach

const mhs = ['irfan','widian','toro'];
mhs.forEach((m,i) => {
    console.log(`${m} adalah mahasiswa ke- ${ i +1}`);
});

// pake for of
for (const [i,m] of mhs.entries()){
    console.log(`${m} adalah mahasiswa ke- ${i + 1}`);
}


// nodelist

const linama = document.queryselectorAll(`.nama`);
console.log(linama)

for (n of linama){
    console.log(n.innerHTML);
}

// arguments

function jumlahkanAngka() {
    console.log(arguments)
}

jumlahkanAngka(1,2,3,4,5)

// menjumlahkan array
function jumlahkanAngka() {
    let jumlah =0;
    for (a of arguments){
        jumlah += a;
    }
    return jumlah;
}
console.log(jumlahkanAngka(1,2,3,4,5));

// _________________________________________________

// FOR IN
// hanya untuk properti pada object

const mhs ={
    nama : 'irfan',
    umur : 23,
    email : 'irfan@gmail.com'
}

for (m in mhs) {
    console.log(m);
}
