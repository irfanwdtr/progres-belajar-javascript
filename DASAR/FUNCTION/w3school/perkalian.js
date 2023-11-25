// CARA MENULIS FUNGSI
//                  CARA 1
var myFunction = new Function("a", "b", "return a * b");

var x = myFunction(4, 3);
console.log(x)

//                  CARA 2

function babi(a,b){
    return a*b
}
console.log(babi(8,10))

//PENAMBAHAN

function aku(a,b){
    return a+b
}console.log(aku(10,40)*2)