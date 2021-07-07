function computerPlay() {
    let options = ['ROCK', 'PAPER', 'SCISSORS'];
    return options[Math.floor(Math.random()*(options.length))];
}

function getPlayerSelection() {
    return choice = prompt('Choose Rock, Paper, or Scissors').toUpperCase();
}

function playRound() {
    let playerSelection = getPlayerSelection();
    let computerSelection = computerPlay();
    let result;
    if (playerSelection == computerSelection) {
        result = 'DRAW';
    } else if ((playerSelection == 'ROCK' && computerSelection == 'PAPER') ||
               (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') ||
               (playerSelection == 'SCISSORS' && computerSelection == 'ROCK')) {
        result = 'LOSE';
        computerPoints = ++computerPoints;
    } else {
        result = 'WIN'
        playerPoints = ++playerPoints
    }
    return result;
}

let playerPoints = 0;
let computerPoints = 0;

function game() {
    for (let round = 0; computerPoints < 5 && playerPoints < 5; round++) {
        playRound();
        console.log(playerPoints)
        console.log(computerPoints)
    }
}

function endGame() {
    let outcome;
    if (playerPoints = 5) {
        outcome = 'WINNER!'
    } else if (computerPoints = 5) {
        outcome = 'GAME OVER!'
    } else {
        outcome = 'CONTINUE'
    }
    return outcome
}