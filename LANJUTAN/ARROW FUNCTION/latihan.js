// function salam(nama) {
//     console.log('hallo nama saya adalah',nama);
// }

// salam('irfan')


// kenal = nama => {
//     alert('hallo',nama)

// }
// kenal('radi')


// salam = (nama,kelas) => {
//     console.log(`selamat datang kak ${nama}, selamat..anda akan menempati kelas ${kelas}`)
// }

// salam('irfan',10)


// let tampilpesan = nama => 'hallo',nama;

// console.log(tampilpesan('irfan'))

let tampilpesan = nama => `hallo, ${nama}`;

console.log(tampilpesan('irfan '))

let asal = nama => {
    console.log('nama saya',nama)
}
asal('irfan')

// usul = (nama,usia,arguments) => {
//     alert(`hallo nama saya,${nama}, saya sekarang berusia ${usia}, ${arguments}`);
// }

// usul('irfan',19,'oioioio')



usia = (nama,kelas) => `hallo nama saya, ${nama} saat ini saya kelas,${kelas}`
console.log(usia('irfan',20))



salam = () => `hallo selamat datang`

console.log(salam())

const tampiludang =() => 'hello world';
console.log(tampiludang())

total =[1,2,3,4,5,6,7,8,9]

// function panjang(total) {
//     return total.length
// }
// console.log(panjang(total))


panjang = total => {
    return total.length
}
console.log(panjang(total))

nama =['irfan','budi','nina','made']
usia =[20,42,56,24]


input_data = (nama,usia) =>{
    nama.forEach(nama => {
        return nama;
    });
    usia.forEach(usia => {
        return usia;
    });
}

console.log(input_data(nama,usia))

nama.forEach(nama => {
    return nama
});

console.log(nama)



satu = nama => `hallo nama saya adalah ${nama}`

console.log(satu('irfan'))

dua = (nama,alamat)=> {
    console.log(`hallo nama saya ${nama} saya berasal dari ${alamat}`)
}

dua('irfan','pekuwon kidul')

data =[1,2,3,4,5,6,7,8,9,9]

ulangi = () => {
    data.forEach( total => {
        console.log('ini data ke',total)
    });
}

console.log(ulangi())