let userScore = 0, computerScore = 0;

function computerPlay () {
    num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return ('Rock');
            break;
        case 1:
            return ('Paper');
            break;
        case 2:
            return ('scissors');
            break;
    }
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === 'rock' && computerSelection === 'rock'
    || playerSelection === 'paper' && computerSelection === 'paper'
    || playerSelection === 'scissors' && computerSelection === 'scissors') {
        return ("It is a tie both" + playerSelection);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        userScore++;
        return ("You won! Paper beats Rock")
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return ("You lose! Rock beats Scissors")
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        userScore++;
        return ("You won! Scissors cuts Paper")
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return ("You lose! Scissors cuts Paper");
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return ("You lose! Paper beats Rock")
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        userScore++;
        return ("You won! Rock beats Scissors")
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter in rock, paper, or scissors");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(scores());
}

function scores () {
    if (userScore > computerScore) {
        return ("User won!\nUser scored: " + userScore + " and computer scored: " + computerScore);
    } else if (userScore < computerScore){
        return ("Computer Won!\nUser scored: " + userScore + " and computer scored: " + computerScore);
    } else if (userScore == computerScore) {
        return ("It is a tie User: " + userScore + " : Computer: " + computerScore)
    }
}