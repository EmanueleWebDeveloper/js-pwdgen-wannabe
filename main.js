function submitForm() {
    // Ottenere i valori inseriti dall'utente
    let nome = document.getElementById('nome').value;
    let cognome = document.getElementById('cognome').value;
    let colorePreferito = document.getElementById('colorePreferito').value;

    
    console.log("Nome:", nome);
    console.log("Cognome:", cognome);
    console.log("Colore preferito:", colorePreferito);

 
    let risultato = nome + cognome + colorePreferito + '23';


    console.log("Risultato:", risultato);

    document.getElementById('risultato').innerText = risultato;
}