// PARAMETER DEFAULT
// DISINI KITA MEMBUAT PARAMETER DEFAULT (B = 10)

function bab(a,b){
    if (b == undefined){
        b = 10
    }return a*b
}console.log(bab(5))

// CONTOH 2

function sayang(a,b){
    if (b == undefined){
        b = 50
        
    }return a+b
}console.log(sayang(100))

//CONTOH 3

function nor(a,b){
    if (b == undefined){
        b = 100
    }return a+b
}console.log(nor(20))
