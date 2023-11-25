const methodmahasiswa ={
    makan : function (porsi) {
        this.energi+= porsi;
        console.log(`hallo energi anda ${this.energi}`)
    },

    main : function (jam){
        this.energi-= jam;
        console.log(`hallo energi anda ${this.energi}`)
    }
}

function mahasiswa(nama,energi) {
    mahasiswa = Object.create(methodmahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}

irfan = mahasiswa('irfan',20)
console.log(irfan)