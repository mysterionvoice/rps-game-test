let playerPoints = 0;
let computerPoints = 0;

function computerPlay() {
    let options = ['ROCK', 'PAPER', 'SCISSORS'];
    return options[Math.floor(Math.random()*(options.length))];
}

function getPlayerSelection() {
    return choice = prompt('Choose Your Weapon')
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
    } else {
        result = 'WIN'
    }
    return result;
}

function game() {
    for (round = 0; computerPoints < 5 && playerPoints < 5; round) {
        playerSelection = getPlayerSelection();
        computerSelection = computerPlay();
        playRound();
        updateScore();
      }
}

