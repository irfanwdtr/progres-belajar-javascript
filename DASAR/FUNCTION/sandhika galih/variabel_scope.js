/* ADA DUA JENIS SCOPE YAITU
-blok scope
-function scope
{
    nilai didalam kurung ini dinamakan variabel scope
}

*/
x = 1;      //variabel global
/*________________________________________________________________________________________________________




function aku(){
    b = 2
    
}
 console.log(b) //akan eror karena variabel b bukan variabel global dan variabel b hanyabisa digunakan 
  aku()         // didalam scope


*///________________________________________________________________________________________________________

function aku(){
    b = 2                   //ini baru benar
   console.log(b)
}aku()

//________________________________________________________________________________________________________

function mereka(){
    console.log(x)      // bisa memanggil variabel x karena variabel x adalah variabel global
}mereka()

//________________________________________________________________________________________________________

var p = 1;
function adku(){
    var p = 2
    console.log(window.p)      // maka akan mencetak variabel didalam scope
                        //jika ingin mencetak variabel global tambahkan window.var
}adku();