console.log("Welcome to Blackjack")

// Comprueba la mano y devuelve el mensaje correspondiente 
function getMessage(mano){
    if(mano == 21){
        return "Blackjack"
    }else{
        if(mano > 21)
            return "Perdiste"
        else
            return "Sigue jugando" 
    }
}

// Genera una nueva carta de blackjack
function getRandomCard(){
    return Math.floor(Math.random()*11)+1
}

// Obtenemos las dos primeras cartas
let carta1 = getRandomCard()
let carta2 = getRandomCard()

// Muestra las cartas que tenemos en la mano
console.log("Carta1: " + carta1 + "   Carta2: " + carta2)
let mano = carta1 + carta2
console.log("Mano: " + mano)

// Actualizamos el mensaje
let message = getMessage(mano)

// Si tenemos que seguir jugando...
while(message == "Sigue jugando"){
    // Pedimos una nueva carta 
    mano += getRandomCard()
    // Actualizamos el mensaje
    let message = getMessage(mano)
}

console.log(message)