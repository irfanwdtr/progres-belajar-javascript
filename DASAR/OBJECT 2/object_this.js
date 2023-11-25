// THIS

function sapa(){
    console.log('selamat datang kaka  di pesta kami')
}

new sapa()


// KONSEP THIS

// This adalah sebuah keyword special yang secara otomatis didefinisikan pada setiap function 
// contoh :
// setiap kita membuat function otomatis ada keyword this

console.log(this)       // secara default akan muncul keyword window
console.log(window === this)  // sama atau true

// this adalah window


x = 10
console.log(this.a)
console.log(window.a)

// kedua diatas caranya sama

// ketika kita memanggil scope global this adalah window dan sebaliknya

// this mengembalikan object global
