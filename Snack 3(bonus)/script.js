let nArray = 0
const result = document.querySelector("[id=result]")

nArray = parseInt(prompt(("Inserisci un numero")))

do {
    if (nArray < 0 || isNaN(nArray) || nArray == "") {

        alert("Inserisci un numero valido!!")
        nArray = parseInt(prompt(("Inserisci un numero")))
        
        if (nArray > 0) {
            const numInput = nArray
            for( let i=0; i<numInput; i++){
                
                let randomArray = []
                const div = document.createElement("div")
                
                for (let i = 0; i < 10; i++) {
                    
                    const randomNumber = Math.floor(Math.random() * 100 + 1)
                    randomArray.push(randomNumber)
                    
                }
                
                div.innerHTML = (randomArray)
                result.append(div)
            }
            
            
        }
    }



} while (nArray < 0 || isNaN(nArray) || nArray == "")

