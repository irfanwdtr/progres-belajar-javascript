// TAG TEMPLATE LITERAL ADALAH : bentuk yang lebih kompleks dari template literals, memungkinkan kita untuk membaca template literals melalui sebuah function

// tagged templates

const nama  ='irfan widiantoro';
const umur = 78;

// const str = `hallo, nama saya ${nama}, saya ${umur}, tahun.`;
// console.log(str);

// bagaimana kita menjadikan template literals menjadi tag template..........?

// kita tulis nama function didepan stringnya , dan nanti string template literals ini akan masuk seolah olah sebagai parameter dari fungsi tadi


// function coba(strings, nama, umur) {
//     return strings
// //  ada saatnya kita mengambil string tapi tidak tau jumlahnya maka
// }

// _____________________________________

// function coba(strings, ...values) {
//     return values
// // tidak usah nulis satu satu
// // isinya semua expression
// }


// _____________________________________


// function coba(strings,...values) {
//     let result = ``;
//     strings.forEach((str, i) =>{
//         result += `${str}${values[i] || ''}`;
//     });
//     return result;

// }



// const str = coba`hallo, nama saya ${nama}, saya ${umur}, tahun.`;
// console.log(str);

// cara gampan menggunakan reduce
// function coba(strings,...values) {
    

// return strings.reduce((result,str,i) => `${result}${str}${values[i] || ''}`,'');

// }

// const str = coba`hallo, nama saya ${nama}, saya ${umur}, tahun.`;
// console.log(str);


// ngapain kita cape cape lakukan itu tapi hasilnya sama...?

// misalkan kita ingin menampilkan sebuah string berdasarkan keyword tertentu...dan kita ingin menampilkan hasil pencarian dengan nama yang kita masukkan sudah ada highligth (background-color)


// __________highlight____________________________

function highlight(strings,...values) {
    return strings.reduce((result,str,i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`,'');
}

const str = highlight`hallo, nama saya ${nama}, saya ${umur} tahun.`;

document.body.innerHTML = str;


// penggunaan lain
// - escaping HTML tags
// - translation & internationalization
// - styled components