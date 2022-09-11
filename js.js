const rock = 1
const paper = 2
const scissors = 3
let cpuChoice = getComputerChoice()
let playerInput = prompt("Rock, Paper, or Scissors?")
let playerChoice = playerInput.toLowerCase()
const tie = "It was a tie!"
const win = "You have won!"
const lose = "You have lost!"

function getComputerChoice() {
    let num = (Math.floor(Math.random() * 3))
    let cpu
    if (num == 0) {
        cpu = rock
    } else if (num == 1) {
        cpu = paper
    } else {
        cpu = scissors
    }
    return cpu
}
console.log(getComputerChoice())
console.log(playerChoice)

/* 1 = rock */
/* 2 = paper */
/* 3 = scissors */
function gameOne(playerChoice, cpuChoice) {
    let decision
    if (playerChoice == cpuChoice) {
        decision = tie;
    } else if 
        ((playerChoice === 1 && cpuChoice === 2) || (playerChoice === 2 && cpuChoice === 3) || (playerChoice === 3 && cpuChoice === 1)) {
        decision = lose;
    } else {
        decision = win;
    }
    return decision;
}

console.log(gameOne(playerChoice, cpuChoice))