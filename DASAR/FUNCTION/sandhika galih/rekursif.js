// rekursif adalah fungsi yang menanggil dirinya sendiri

// rekursif harus menggunakan base case atau kondisi untuk berhenti


function aku(a){
    if(a == 1){             '''ini adalah base case atau kondisi berhenti'''
        return a;
    }else{
        console.log(a + aku(a-1))
    }
}


// SEMUA LOPING BISA DIBUAT REKURSIF, TAPI TIDAK SEBALIKNYA
