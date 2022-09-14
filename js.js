let cpuStyle
let capitalPlayerInput
let scorePlayer = 0
let scoreCpu = 0

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

/* this function converts player input into value */
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
    let tie = `It was a tie! you chose ${capitalPlayerInput} and the cpu chose ${cpuStyle} but sadly ${capitalPlayerInput} does nothing to ${cpuStyle} :(` 
    let win = `You have won! you chose ${capitalPlayerInput} and the cpu chose ${cpuStyle} and ${capitalPlayerInput} demolishes weak little ${cpuStyle}`
    let lose = `You have lost! you chose ${capitalPlayerInput} and the cpu chose ${cpuStyle} and sadly your little ${capitalPlayerInput} has been destroyed by the cpu's ${cpuStyle}`
    if (player == cpu) {
        decision = tie;
    } else if 
    ((player == 1 && cpu == 2) ||
     (player == 2 && cpu == 3) ||
     (player == 3 && cpu == 1)) {
        decision = lose;
        scoreCpu += 1;
    } else {
        decision = win;
        scorePlayer += 1;
    }
    return decision;
}

/* console.log(gameOne(playerValue, cpuChoice)) */

function game(times) {
    for (i = 1; i <= times; i++) {
        let playerInput = prompt(`Game ${i}: Rock, Paper, or Scissors? Current score ${scorePlayer}/5`)
        let playerValue = convertInput(playerInput)
        let cpuChoice = getComputerChoice();
        
        console.log(`game ${i}:`);
        console.log(gameOne(playerValue, cpuChoice));
    }
    if (scorePlayer > scoreCpu) {
        return `You have won! You won ${scorePlayer}/${i} games`;
    } else if (scorePlayer < scoreCpu) {
        return `You have lost all of your honor and let the machines win! How could could you only win ${scorePlayer}/${i} games?`;
    } else {
        return `You tied? How could you have done such a thing. You need to try again.`;
    }
    
} 


console.log(game(5))