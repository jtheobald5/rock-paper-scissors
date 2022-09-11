let cpuStyle
let capitalPlayerInput
let cpuChoice = getComputerChoice()
let playerInput = prompt("Rock, Paper, or Scissors?")
let playerValue = convertInput(playerInput)
let tie = `It was a tie! you chose ${capitalPlayerInput} and the cpu chose ${cpuStyle} but sadly ${capitalPlayerInput} does nothing to ${cpuStyle} :(` 
let win = `You have won! you chose ${capitalPlayerInput} and the cpu chose ${cpuStyle} and ${capitalPlayerInput} demolishes weak little ${cpuStyle}`
let lose = `You have lost! you chose ${capitalPlayerInput} and the cpu chose ${cpuStyle} and sadly your little ${capitalPlayerInput} has been destroyed by the cpu's ${cpuStyle}`

function getComputerChoice() {
    let num = (Math.floor(Math.random() * 3)+1)
    if (num == 1) {
        cpuStyle = "Rock" 
    } else if (num == 2) {
        cpuStyle = "Paper"
    } else {
        cpuStyle = "Scissors"
    }
    return num
}

/* test values */
/* console.log(cpuChoice + " cpu")
console.log(playerValue + " player")
console.log(cpuStyle) */

/* Converts player input into value */
function convertInput(string) {
    let newString = string.charAt(0).toUpperCase() + (string.slice(1).toLowerCase())
    capitalPlayerInput = newString
    let value
    if (newString == "Rock") {
        value = 1;
    } else if (newString == "Paper") {
        value = 2;
    } else if (newString == "Scissors") {
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
    } else if 
    ((player == 1 && cpu == 2) ||
     (player == 2 && cpu == 3) ||
     (player == 3 && cpu == 1)) {
        decision = lose;
    } else {
        decision = win;
    }
    return decision;
}

/* console.log(gameOne(playerValue, cpuChoice)) */

function game(times) {
    function gameOne(player, cpu) {
        let decision
        if (player == cpu) {
            decision = tie;
        } else if 
        ((player == 1 && cpu == 2) ||
         (player == 2 && cpu == 3) ||
         (player == 3 && cpu == 1)) {
            decision = lose;
        } else {
            decision = win;
        }
        return decision;
    }
    for (i = 1; i <= times; i++) {
        console.log(`game ${i}:`);
        console.log(gameOne(playerValue, cpuChoice));
        cpuChoice = getComputerChoice();
    }
    return `You just played ${times} games of Rock-Paper-Scissors. Hopefully you won the majority!`;
    /* Add in a counter that counts how many games you won and decides if you won the majority */
    /* Add in prompt to change the amount of games played */
} 

console.log(game(5))