function mahasiswa(nama,energi) {
    
    this.nama = nama;
    this.energi = energi; 
}

mahasiswa.prototype.main = function (jam) {
    this.energi -= jam;
    return `energi anda adalah ${this.energi}`
}

mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return `energi anda sekarang adalah ${this.energi}`
}

irfan = new mahasiswa('irfan',20)
console.log(irfan)