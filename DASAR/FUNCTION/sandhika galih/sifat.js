//JIKA ARGUMEN KELEBIHAN 
//MAKA ANGKA YANG KELEBIHAN DARI PARAMETER AKAN DIABAIKAN

function aku(a,b){
    return a*b
}
console.log(aku(5,7,8))
console.log(aku(3,5,7,3,6,3,))

//JIKA PARAMETER LEBIH BANYAK DARI PADA ARGUMEN MAKA KELEBIHNYA AKAN DIISI (UNDERFINED)

function dia(a,b,c,d){
    return a+b
}console.log(dia(1,2))
console.log(dia(4,5))