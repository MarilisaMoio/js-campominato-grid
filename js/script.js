//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
//- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
//- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
//- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

//quando l'utente clicca il bottone
    //recupera le scelte dell'utente e genera i dati che ti servono sulla base di essa
    // genera n div da 1 a 100-81-49
    // popolali con il numero corrispondente
    //aggiungi le classi
    //aggiungi il secondo clickevent
        //aggiungi la classe activated
        //logga il numero cliccato

const squareContainer = document.querySelector(".container");
let number = 30;
let choice = "easy"

for (let i = 1; i <= number; i++){
    const newSquare = createDiv(i, choice);
    squareContainer.append(newSquare);
}

// FUNCTIONS
//funzione per generare un div, contentente un numero e una serie di classi, al quale poi viene agganciato un event listener che al click gli altribuisce una classe aggiuntiva e stampa in console il numero contenuto
//argomenti:
    //number, int -> per assegnare il numero all'interno del div
    //choice, str -> per assegnare una classe
// return: elemento del DOM
function createDiv(number, choice){
    const newDiv = document.createElement("div");

    newDiv.className = `square ${choice}`;
    newDiv.innerHTML = `<span>${number}</span>`;

    newDiv.addEventListener("click", function(){
        this.classList.toggle("activated");

        if (this.classList.contains("activated")){
            console.log(this.children[0].innerHTML)
        }
    })

    return newDiv
}