// ketika datang ke restoran kami disambut oleh pelayan
alert('SELAMAT DATANG DI RESTORAN \n  \t BAYLEAF GRAND EDGE \n SELAMAT MENIKMATI MASAKAN KAMI')

//ketika sudah duduk pelayan datang
alert('apakah kakak ingin memesan makanan kak????')
x = prompt('jawab iya atau tidak')
if (x == 'iya'){
    alert('tunggu kak saya ambil buku menunya')
}
else if( x == 'tidak'){
    alert('maaf kak jika kakak tidak memesan boleh meninggalkan tempat ini karena customer lainya juga akan menempatinya')

}
else{
    alert('maaf kami hanya melayani jawaban iya atau tidak \n TERIMA KASIH KAK \n PINTU KELUAR ADA DI KANAN \n KELUAARRRRR ANJEEEIIINGGGGGGG')
};

alert('ini kak buku menunya silahkan dipilih masakanya kakak')
alert('SILAHKAN DIPILIH')
y = prompt('\t \tDAFTAR MENU MAKANAN KAMI\n -BAKSO \n -MIE AYAM \n -SATE \n JUNKFOOD \n -SOSIS \n')

switch ( y){
    case 'bakso' :
        alert('satu porsi harganya 10.000')
        break;
    case 'mie ayam' :
        alert('satu porsi harganya 10.000')
        break;
     case 'sosis' :
        alert('satu porsi harganya 10.000')
        break;
};

alert('DAFTAR MINUMAN')
s = prompt('MINUMAN SEGAR ALA BAYLEAF \n -ES TEH \n -ES KELAPA MUDA \n ES SIRUP \n ES WAWAN')

switch(s){
    case 'es teh':
        alert('satu gelas harganya 5000')
        break;
    case 'es sirup':
        alert('satu gelas harganya 7000')
         break;
     case 'es kelapa muda':
        alert('satu gelas harganya 15000')
        break;
    case 'es wawan':
        alert('satu gelas harganya 53000')
        break;
    };
alert('TUNGGU YA KAK SAYA AKAN ANTAR JIKA SUDAH SELESAI')
prompt('jawaban anda')
alert('ini kak makanan kakak')
prompt('jawaban anda')
alert('sama sama kak')