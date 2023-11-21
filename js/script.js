let button = document.querySelector(".btn");

button.addEventListener('click', function(){
    let eta = document.getElementById("eta").value;
    let km_da_percorrere = document.getElementById("km").value;

    let prezzo_biglietto = km_da_percorrere*0.21;

    if(eta<18) {
        prezzo_biglietto*=0.80;
    }
    else if(eta>65) {
        prezzo_biglietto*=0.60;
    }

    console.log(prezzo_biglietto);
}) 