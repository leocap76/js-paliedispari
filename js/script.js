// Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.

var parolaUtente = prompt("scrivi una parola");

// var parolaInversa = parolaUtente.split("").reverse();
//
// //function()
// function palindroma(parola1, parolaGirata){
//   var  controllo;
//   if (parola1 == parolaGirata) {
//     controllo = true;
//   } else {
//   controllo = false;
// }
// return controllo;
// }
//
// if (palindroma(parolaUtente, parolaInversa)) {
//   console.log('è palindroma');
// } else {
//   console.log('non è palindroma');
// }

function reverseWord( parolaUtente ){
  var palindroma = false;

  for (var i = 0; i < parolaUtente.length; i++ ) {
    console.log(parolaUtente[i]);

    if ( parolaUtente[i] == parolaUtente[parolaUtente.length-1]) {
      palindroma = true;
      console.log('è palindroma');
    } else {
      return false;
      console.log('non è palindroma');
    }
  }
  return true;
}
