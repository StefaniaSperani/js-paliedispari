// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


//creo le variabili che prendono gli elementi in pagina
const parolaInput = document.querySelector('input');
const btnPali = document.getElementById('btn1');
const result = document.getElementById('result');

// creo una funzione che mi dice se la parola inserita dall'utente è palindroma
function parolaPali() {
    //mi creo le variabili che serviranno a prendere ogni volta la parola inserita
    const parola = parolaInput.value.toLowerCase().trim();
    let parolaInversa = parola.split('').reverse().join('');
    // console.log(parolaInversa);

    if (parolaInversa === parola) {
        result.innerHTML = `<div class="text-white">Bravo, sei intelligente!</div>`;
        // console.log(parola)
    } else {
        result.innerHTML = `<div class="text-white">Ritenta!</div>`;
    }
}
btnPali.addEventListener('click', parolaPali);



// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// creo le variabili degli oggetti che prendo dalla pagina
const numberInput = document.getElementById('pari-o-dispari');
const choiceInput = document.getElementById('scelta');
const btn3 = document.getElementById('btn3');
const testoRisultato = document.getElementById('testo');

// creo una funzione che mi estragga il value della parola inserita
// e aggiungo il trim che toglie gli eventuali spazi
let choiceVal = '';
choiceInput.addEventListener('input', function () {
    choiceVal = choiceInput.value.trim().toLowerCase();
    console.log(choiceVal)
})

// creo una funzione che estrae il valore inserito dall'utente
let numberVal = 0;
numberInput.addEventListener('change', function () {
    numberVal = parseInt(numberInput.value);
});

// creo la funzione che mi sommi i due numeri
let somma = 0;
function sumNumbers() {
    //creo un numero random per il pc tramite la funzione pre-salvata nella libreria
    let randomPc = randomNumber(1, 5);
    // console.log(randomPc)

    // controllo che l'utente inserisca realmente un numero tra 1 e 5
    if (numberVal > 0 && numberVal <= 5) {
        //SE l'utente ha inserito il numero esatto, parte il blocco
        //sommo i due numeri
        somma = randomPc + numberVal;

        //se la somma dei numeri E quello che ha scritto sono uguali, succede questo 
        if ((somma % 2 === 0 && choiceVal === 'pari') || (somma % 3 === 0 && choiceVal === 'dispari')) {
            testoRisultato.innerHTML = (`${somma} Bravo, hai vinto tu!`);
        //se invece non coincidono allora succede questo
        } else {
            testoRisultato.innerHTML = (`${somma} Ha vinto il pc!`);
        }
    //SE l'utente non inserisce un numero non partirà il blocco
    }else{
        testoRisultato.innerHTML = ('INSERISCI IL NUMERO!');
    }
}
btn3.addEventListener('click', sumNumbers);