// Descrizione:
// Visualizzare in pagina 5 numeri casuali.


const numeri = document.getElementById("numeri");
const timerHtml = document.getElementById("timer");
const risposta = document.getElementById("risposta");
const risultato = document.getElementById("risultato");
const giusti = document.getElementById("giusti");
const sbagliati = document.getElementById("sbagliati");


// genero 5 numeri casuali
let arrNumeri = []; 
for(let i = 0; i < 5; i++){
    arrNumeri[i] = randomIntero(1, 100);
    numeri.innerHTML += `<div class="numero">${arrNumeri[i]}</div>`;
};

    console.log("arrNumeri", arrNumeri);



let tempoS = 30;
// stampo subito il 30 
timerHtml.innerHTML = tempoS + `s`;
// poi scendo a 29 
tempoS--;
// inizio la funzione timer
let clock = setInterval(timer, 1000);




// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, 
// uno alla volta, i numeri che ha visto precedentemente.
let inputNumero = document.getElementById("inputNumero");
const button = document.querySelector("button");

let arrNumeriGiusti = []; 
let arrNumeriSbagliati = []; 


button.addEventListener('click', function () {
    const numero = parseInt(inputNumero.value);

    if(arrNumeri.includes(numero)){
        arrNumeriGiusti.push(numero);
    }else{
        arrNumeriSbagliati.push(numero);
    };
    inputNumero.value = null;

    // console.log("arrNumeriGiusti", arrNumeriGiusti);
    // console.log("arrNumeriSbagliati", arrNumeriSbagliati);
    if(arrNumeriGiusti.length + arrNumeriSbagliati.length === arrNumeri.length){
        // rimuovo lo spazio dove si poteva rispondere
        risposta.classList.remove("d-flex");
        risposta.classList.add("d-none");

        // mostro il risultato        
        risultato.classList.remove("d-none");
        risultato.classList.add("d-flex");

        for(let i = 0; i < arrNumeriGiusti.length; i++){
            giusti.innerHTML += arrNumeriGiusti[i] + "   ";
        };
        for(let i = 0; i < arrNumeriSbagliati.length; i++){
            sbagliati.innerHTML += arrNumeriSbagliati[i] + "   ";
        };

    }
});



// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli :
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.
// *fate sempre una cosa alla volta (in quel caso se partite con i prompt potrebbe incasinarsi nelle tempistiche di aggiornamento dom e visualizzazione del prompt stesso [soprattutto in chrome]).
// Buon divertimento e buon we! 




function timer(){
   
    if (tempoS == 0){
        // tolgo la ripetizione ogni secondo
        clearInterval(clock);
        // svuoto lo spazio dei numeri
        numeri.innerHTML = ``;
        timerHtml.innerHTML = `tempo scaduto`;
        // mostro lo spazio in cui inserire la risposta
        risposta.classList.remove("d-none");
        risposta.classList.add("d-flex");



    }else{
        
        timerHtml.innerHTML = tempoS + `s`;
        tempoS--;
        // console.log(tempoS);
    };

    
}








// posts.forEach((element, index, array) => {});

// ciclo for console esplicativo 
// for(let i = 0; i < arr.length; i++){
//     console.log("arr[" + i + "]: " + arr[i]);

// };

// ciclo while console esplicativo 
// let i = 0;
// while(i < arr.length){
//     console.log("arr[" + i + "]: " + arr[i]);

//     i++;
// };

// for(){};

// A = document.getElementById("B").value;


//``

// console.log("");
// for(let i = 0; i < 10; i++){

// }

// }