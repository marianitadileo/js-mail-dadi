// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// lista 
const listMail = ["alice@mailuser.com", "sara@mailuser.com", "lore@mailuser.com", "dana@mailuser.com", "ugo@mailuser.com"];
console.log(listMail);

// email utente 
const mailUser = prompt("Ciao utente, inserisci la tua email");
console.log(mailUser);

// per ogni email di listMail
// SE l'email appartiene stampa email valida
// ALTRIMENTI se l'email non appartiene stampa email non valida

let validator = false; 

for (let i = 0; i < listMail.length; i++) {
const mail = listMail[i];
    if (mail.toLowerCase() === mailUser.toLowerCase()) {
        validator = true;
    }
}

if (validator === true) {
    console.log("Email valida!");
} else {
    console.log("Email non valida. Riprova.");
}

document.getElementById('email').innerHTML = `La tua email è valida: ${mailUser}`;
document.getElementById('email').innerHTML = `La tua email non è valida: ${mailUser}`;