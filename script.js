let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id)
    })
})

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result;

    if ((playerSelection == 'ROCK' && computerSelection == 'SCISSORS') ||
        (playerSelection == 'PAPER' && computerSelection == 'ROCK') ||
        (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') ||
        (playerSelection == 'LIZARD' && computerSelection == 'PAPER') ||
        (playerSelection == 'SPOCK' && computerSelection == 'ROCK') ||
        (playerSelection == 'ROCK' && computerSelection == 'LIZARD') ||
        (playerSelection == 'PAPER' && computerSelection == 'SPOCK') ||
        (playerSelection == 'SCISSORS' && computerSelection == 'LIZARD') ||
        (playerSelection == 'LIZARD' && computerSelection == 'SPOCK') ||
        (playerSelection == 'SPOCK' && computerSelection == 'SCISSORS')) {
            
        ++playerScore
        result = (playerSelection + ' beats ' + computerSelection + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        
            if (playerScore == 5) {
                result += '<br><br>WINNER!'
                disableButtons()
        }
    } else if (playerSelection == computerSelection) {
        result = ('DRAW' + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore) 
    } else {
        ++computerScore
        result = (playerSelection +' loses to ' + computerSelection + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

            if (computerScore == 5) {
                result += '<br><br>GAME OVER!'
                disableButtons()
        }
    }
    document.getElementById('scorebox').innerHTML = result
    return
}

function computerPlay() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS', 'LIZARD', 'SPOCK']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}