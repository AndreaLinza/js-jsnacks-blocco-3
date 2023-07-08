//Imposto i valori
// let array = 0
const arrayNumber = []
let randomNumber = 0
const numberOdd = document.getElementById("odd")
const numberEven = document.getElementById("even")

// Utilizzo un prompt per capire di che lunghezza vuole l'array l'utente
//array = parseInt(prompt("Quanto vuoi sia lungo l'array?"))
//console.log(arrayNumber.length)
/*while (arrayNumber.length <= 0 || arrayNumber.length == "" || isNaN(arrayNumber)) {

    array = parseInt(prompt("Quanto vuoi sia lungo l'array?"))


    if (arrayNumber.length <= 0 || arrayNumber.length == "" || isNaN(arrayNumber)) {
        alert("Carattere non AMMESSO")
    }

    else {

}
}*/


        // Utilizzo un ciclo while insieme al Math.random per farmi uscire dei numeri casuali
        while (arrayNumber.length < 20) {

            randomNumber = (Math.floor(Math.random() * 10) + 1)

            arrayNumber.push(randomNumber)
            console.log(arrayNumber)
            if (randomNumber % 2 === 0) {


                numberEven.innerHTML += `<div>${randomNumber}</div>`
                console.log(numberEven)

            }
            else {
                numberOdd.innerHTML += `<div>${randomNumber}</div>`
                console.log(numberOdd)

            }
        }
