let button = document.querySelector(".btn");

button.addEventListener('click', function(){
    let nome = document.getElementById("nome").value;
    console.log("nome: "+ nome);
    let eta = document.getElementById("eta").value;
    console.log("eta: "+ eta);
    let km_da_percorrere = document.getElementById("km").value;
    console.log("km da percorrere: " + km_da_percorrere);

    let prezzo_biglietto = km_da_percorrere*0.21;
    let tariffa;

    if(eta<18) {
        prezzo_biglietto*=0.80;
        tariffa="Under 18";
    }
    else if(eta>65) {
        prezzo_biglietto*=0.60;
        tariffa="Over 65";
    }

    else{
        tariffa="Standard";
    }

    console.log("Prezzo biglietto: " + prezzo_biglietto.toFixed(2) + " euro");
    
    let ticket = document.querySelector(".ticket");
    ticket.style.backgroundColor="#ebef20"
    ticket.style.border = "5px solid black";
    ticket.style.width = "60%";
    ticket.style.borderRadius = "25px";
    ticket.style.marginTop = "50px";
    ticket.style.marginBottom = "50px";
    ticket.style.padding = "20px";

    document.getElementById("nome_passeggero").innerHTML=`Nome passeggero: ${nome}`;
    document.getElementById("tariffa").innerHTML= `Tariffa: ${tariffa}`;
    document.getElementById("biglietto").innerHTML=`PREZZO BIGLIETTO: ${prezzo_biglietto.toFixed(2)}€`;

})


