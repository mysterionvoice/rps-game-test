function computerPlay() {
    let options = ['ROCK', 'PAPER', 'SCISSORS'];
    return options[Math.floor(Math.random()*(options.length))];
}

function getPlayerSelection() {
    return choice = prompt('Choose Wisely')
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
/*Will finish below when adding GUI*/
function game() {
    for (round = 0; computerPoints < 5 && playerPoints < 5; round) {
        playerSelection = getPlayerSelection();
        computerSelection = computerPlay();
        playRound();
        updateScore();
      }
}

let playerPoints = 0;
let computerPoints = 0;