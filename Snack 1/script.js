// Creo Array vuoto
let num = [];
let number = 0
let number2 = 0
let somma = 0

    
    while (number < 0 || isNaN(number) || number == "") {

    // Fintanto che il numero inserito è un numero minore di 0 oppure un carattere nullo ripeto il ciclo

        // Chiedo di inserire il numero valido
        number = parseInt(prompt("Inserisci un numero"))
        // Se il numero inserito è minore di 0, nullo, o una stringa, ripeto il ciclo
        if (number < 0 || isNaN(number) || number === "") {
            alert("Inserisci un Carattere valido")

        }

        // Se il  numero è maggiore di 50 allora interrompo il ciclo, inserisco il numero nell'array e stampo il complimenti
        if (number >= 50) {
            num.push(number)
            somma += number
            document.getElementById("num1").innerHTML = `primo numero inserito ${number}`
            break

        }

        // Se il numero è maggiore di 0 allora lo inserisco nell'array e lo aggiungo alla somma 
        else if (number > 0) {

            num.push(number)
            somma += number

            document.getElementById("num1").innerHTML = `primo numero inserito nell'array [${num}]`
            console.log(num[number, number2], number, somma)

            break
        }


    }


    // Fintanto che la somma è minore di 50 ripeto il ciclo di inserimento numeri nell'array
    while (somma < 50) {
        // Chiedo all'utente di inserire un altro numero nell'array
        number2 = parseInt(prompt("Inserisci un altro numero"))

        // Se il secondo numero inserito dall'utente è maggiore di 0 allora pusho il numero nell'array e lo sommo a quello già esistente
        if (number2 > 0) {
            num.push(number2)
            somma += number2

            document.getElementById("num2").innerHTML = `altri numeri inseriti nell'array  [${num}]`
            

            console.log(num, number, number2, somma)

        }

        // Altrimenti se il numero inserito è maggiore di 50 o la somma ottenuta è maggiore di 50, allora interrompo il ciclo 
        else if (number2 >= 50 || somma >= 50) {
            num.push(number)
            console.log(num, number, number2, somma)
            break
        }

        // Altrimenti se il numero inserito è minore di 0, nullo o vuoto, do l'alert e ripeto all'infinito il ciclo
        else if (number2 < 0 || isNaN(number2) || number2 == "") {

            alert("Inserisci un Carattere valido")
        }

    }
    // Stampo per vedere se è andato tutto bene, grazie a ME 
    document.getElementById("somma").innerHTML = `La somma è dei numeri nell'array è ${somma}`

    console.log(number, num, somma)
    console.log(number2, num, somma)

