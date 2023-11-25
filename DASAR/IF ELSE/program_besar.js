x = prompt('masukkan menu makanan dibawah ini :\n bakso\nsosis\nmi\nnugget\nseafod\njunkfood\n \n dan pilih minuman dibawah ini: \n es teh\n es sirup \n es mangga \n es tebu \n es degan \n \n DISINI ADA PILIHAN MENU PAKET KAK SILAHKAN DICEK JIKA BERMINAT\n bakso+es teh \n sosis+es tebu\n nugget+es teh\nSELAMAT MEMILIH KAKAK')


if (x == 'bakso'){
    alert('satu porsi harganya 12.000')
}
else if (x == 'sosis'){
    alert('satu porsi harganya 12.000')
}

else if (x == 'nugget'){
    alert('satu porsi harganya 9.000')
}

else if (x == 'seafod'){
    alert('satu posi harganya 65000')
}
/*
else if(x == 'junkfood'){
    alert('satu posi harganya 12.000)
}
*/

function makanan(x){
    return x
}
x = prompt('input makanan')
x = makanan(x)
alert(x)