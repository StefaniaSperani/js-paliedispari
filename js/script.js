// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


//creo le variabili che prendono gli elementi in pagina
const parolaInput = document.querySelector('input');
const btnPali = document.getElementById('btn1');
const result = document.getElementById('result');


const parola = parolaInput.value;
let parolaInversa = parola.split('').reverse().join('');
// console.log(parolaInversa);

// creo una funzione che mi dice se la parola inserita dall'utente è palindroma
function parolaPali(){
    if(parolaInversa === parola){
        result.innerHTML = `Bravo, sei intelligente!`;
    }else{
        result.innerHTML = `Ritenta!`
    }
}
btnPali.addEventListener('click', parolaPali);

















// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.