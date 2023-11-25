// ubah warna
const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function(){
    // document.body.style.backgroundColor = 'lightblue';
    // ketika diklik kasih kelas biru-muda didalam body
    // document.body.setAttribute('class', 'biru-muda');

    //4 kalau tadinya gada kelas diklik ada kelas..begitu diklik hilang
    document.body.classList.toggle('biru-muda');

}


const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type','button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random()*255 +1);
    const g = Math.round(Math.random()*255 +1);
    const b = Math.round(Math.random()*255 +1);
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'; 
})

const sMerah = document.querySelector('input[name=sMerah]');
