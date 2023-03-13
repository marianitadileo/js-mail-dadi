// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

console.log("VINCE CHI FA IL PUNTEGGIO MAGGIORE");

const nameUser = prompt("inserisci il tuo nome!");

// genero un numero casuale
const rndNumbPlayer = Math.floor(Math.random() * 6) + 1;
console.log(nameUser + " il tuo numero è " + rndNumbPlayer);
const rndNumb = Math.floor(Math.random() * 6) + 1;
console.log("il numero del computer è " + rndNumb);

// stabilisco il vincitore 
if (rndNumb > rndNumbPlayer) {
    console.log("vince il computer!");
} else if (rndNumbPlayer > rndNumb) {
    console.log(`vince ${nameUser}`);
} else {
    console.log("pareggio");
}

document.getElementById('numb').innerHTML = (nameUser + " il tuo numero è " + rndNumbPlayer);
document.getElementById('numb2').innerHTML = ("il numero del computer è " + rndNumb);






