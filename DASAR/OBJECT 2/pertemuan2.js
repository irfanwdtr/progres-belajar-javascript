// MEMBUAT OBJECT

// METODE PEMBUATAN OBJECT
// 1. OBJECT LITERAL
// 2. FUNCTION DECLARATON
// CONSTRUCTOR FUNCTION (keyword new----> cara ini yang pling banyak digunakan )
// Object.create

// 1. OBJECT LITERAL
mahasiswa = {
    nama : 'irfan widiantoro',
    nim : 'A11.2020.12506',
    email : 'widiantoro',
}


// nama nim email disebut properti

console.log(mahasiswa['nim'])


// 2. FUNCTION DECLARATON

function buatobjectmahasiswa(nama,nim,email,prodi){
    mahasiswa ={};
    mahasiswa.nama = nama
    mahasiswa.nim = nim
    mahasiswa.email = email
    mahasiswa.prodi = prodi
    return mahasiswa;
}

mhs3 = buatobjectmahasiswa('IRFAN WIDIANTORO','A11.2020.12323','hahhahaahahhaha','teknik infortmatika')

console.log(mhs3)


function maba(nama,nim,prodi,universitas){
    this.nama =nama;
    this.nim =nim;
    this.prodi = prodi;
    this.universitas = universitas
}

mhs4 = new maba('IRFAN WIDIANTORO','A1123234','informatika','UDINUS')

console.log(mhs4)



