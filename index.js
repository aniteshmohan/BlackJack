let card = []
let sum = 0 
let hasBlackJack = false
let isAlive = false
let message = ""

let winBig = document.getElementById("win-big")
console.log(winBig)
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let player = {
    name: "Per",
    chips: 200
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": " + player.chips


function getRandomCard(){
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    if (randomNumber === 1){
        return 11
    }else if (randomNumber > 10){
        return 10
    } else{
        return randomNumber
    }
}


function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    card = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {

    cardEl.innerText = "Cards: " 

    for(let i = 0; i < card.length; i++)
        cardEl.textContent += card[i] + " "

    sumEl.textContent = "Sum: " + " " +  sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?😃"
        isAlive = true
    }   else if (sum === 21) {
        message = "Congo! It's a blackjack!😍"
        hasBlackJack = true
    }   else{
        message = " Sorry, your game is over! 😢"
        isAlive = false
    }
winBig.innerText = message
} 

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card1 = getRandomCard()
        sum += card1
        if(sum < 21){
            message = "Get lost!"
            console.log(message)
        }
        card.push(card1)
        renderGame()
    }
   
    isAlive = false
}
