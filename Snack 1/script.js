// Creo Array vuoto
let num = [];


// Chiedo all'utente di inserire un numero

let number = parseInt(prompt("Inserisci un numero"))

let somma = 0

while (number = isNaN(number) ) {
    
    number = parseInt(prompt("Carattere valido"))    
    
    while(somma <= 50 ){
        
        number = parseInt(prompt("Inserisci un altro numero"))
        if( number < 50 ){
            num.push(number)
            console.log(number, num)
            somma += number    
        }
        else if (number>=50 || somma === 50) {
            num.push(number)
            document.getElementById("result").innerHTML = `Complimenti`  
            console.log(number, num)
        }
    }
}

// DA RIVEDERE PERCHE NON HO CAPITO

console.log(number, num[number], somma)


















/*while (isNaN(number)) {
    number = parseInt(prompt("Carattere non valido"))
    if (isNaN(number)) {
        
    }
    
    else if (number >= 50) {
        document.getElementById("result").innerHTML = `Complimenti`
    }
    
    else if (number < 50) {
        num.push(number)
        
        
        console.log(number, num)
        
        while (somma < 50) {
            number = parseInt(prompt("Inserisci un altro numero"))
            num.push(number)
            
            console.log(num, number)
            if (somma === 50 || number >= 50) {
                break
            }
            console.log(somma)
        }
        document.getElementById("result").innerHTML = `Complimenti`
        break;
    }
    
    
}

let somma = 0
somma += number*/

