function nilai(a,b){
    
    vol_a = a*a*a
    vol_b = b*b*b

    total = vol_a + vol_b
    return total
}

alert(nilai(8,3))


//CARA MENULISKAN ARGUMEN 
// CARA 1

function babi(a,b){
    return a +b
}
console.log(babi(3,5))

// CARA 2
// MENGGUNAKAN INPUTAN PROMPT
function dia(a,b){
    a =  parseInt(prompt('masukkan angka 1'))
    b = parseInt(prompt('masukkan angka 2'))

    hasil = a+b
    return hasil

}console.log(dia())

//