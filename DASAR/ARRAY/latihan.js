data =['satu','dua','tiga','empat','lima']

// // console.log(data.join( '   '))

// ulang = parseInt(prompt('masukkan lopingan'))

// for (x =0; x < ulang; x++){
//     masuk = prompt('masukkan nama mahasiswa tambah data')

//     data.push(masuk)
// }
// console.log(data)

data.splice(0,0,'bakso','sapi','urat')
console.log(data)

ambil_data = data.slice(0,2)
console.log(ambil_data)

console.log(data.join(' \n'))

data.push('sapi','kontol','dosacok')
console.log(data)

data.pop(data)
console.log(data)

data.unshift('djancok')
console.log(data)

data.shift(data)
console.log(data)

console.log(data.join('  \n '))