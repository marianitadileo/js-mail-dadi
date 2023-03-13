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
let message = "";

for (let i = 0; i < listMail.length; i++) {
const mail = listMail[i];
    if (mail.toLowerCase() === mailUser.toLowerCase()) {
        validator = true;
    }
}

if (validator === true) {
    message = "Email valida!";
} else {
    message = "Email non valida";
}

console.log(message);
document.getElementById('email').innerHTML = `${message} ${mailUser}`;
