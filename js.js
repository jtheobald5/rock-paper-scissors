let cpuStyle

function getComputerChoice() {
    let num = (Math.floor(Math.random() * 3)+1)
    if (num == 1) {
        cpuStyle = "Rock" 
    } else if (num == 2) {
        cpuStyle = "Paper"
    } else {
        cpuStyle = "Scissors"  
    }
    return cpuStyle;
}

let playerInput;
let scorePlayer = 0;
let scoreCpu = 0;
let game = 1;

const buttons = document.querySelectorAll('button');
let output = document.getElementById('output');
let gameCounter = document.getElementById('game');
let playerCounter = document.getElementById('playerScore');
let cpuCounter = document.getElementById('cpuScore');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // console.log(button.id);
        playerInput = button.id;
        // console.log('p chose: ' + playerInput);
        output.textContent = winner();
        cpuCounter.textContent = scoreCpu;
        playerCounter.textContent = scorePlayer;
        gameCounter.textContent = 'Game ' + game;
        if (scoreCpu == 5) {
            alert('How could you lose??? I had so much faith in you.  :(');
            location.reload();
        } else if (scorePlayer == 5) {
            alert('Congratulations!!! You have proven to be smarter then a computer!');
            location.reload();
        }
    })
})

function winner(player, cpu) {
    cpu = getComputerChoice();
    player = playerInput;
    // console.log('cpu chose ' + cpu);
    game += 1;
    if (cpu == playerInput) {
        scoreCpu += 0;
        scorePlayer += 0;
        return 'Tie you have, great minds think alike and you both chose ' + player;
    } else if ((cpu == 'Rock' && player == 'Scissors') || (cpu == 'Paper' && player == 'Rock') || (cpu == 'Scissors' && player == 'Paper')) {
        scoreCpu += 1;
        scorePlayer += 0;
        return 'You lost this round! You chose ' + player + ' and the cpu chose ' + cpu + '. You need to get your act together';
    } else {
        scorePlayer += 1;
        scoreCpu += 0;
        return 'You won! You chose ' + player + ' and the cpu chose ' + cpu;
    }
}
