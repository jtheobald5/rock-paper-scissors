let cpuChoice = getComputerChoice()
let playerInput = prompt("Rock, Paper, or Scissors?")
let playerValue = convertInput(playerInput)
const tie = "It was a tie!"
const win = "You have won!"
const lose = "You have lost!"

function getComputerChoice() {
    return (Math.floor(Math.random() * 3)+1) 
}

/* test values */
console.log(cpuChoice + " cpu")
console.log(playerValue + " player")


/* Converts player input into value */
function convertInput(string) {
    let newString = string.toLowerCase()
    let value
    if (newString == "rock") {
        value = 1;
    } else if (newString == "paper") {
        value = 2;
    } else if (newString == "scissors") {
        value = 3;
    } else {
        alert("Invalid entry")
    }
    return value;
}

/* 1 = rock */
/* 2 = paper */
/* 3 = scissors */
function gameOne(player, cpu) {
    let decision
    if (player == cpu) {
        decision = tie;
    } else if ((player == 1 && cpu == 2) || (player == 2 && cpu == 3) || (player == 3 && cpu== 1)) {
        decision = lose;
    } else {
        decision = win;
    }
    return decision;
}

console.log(gameOne(playerValue, cpuChoice))