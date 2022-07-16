let userScore = 0, computerScore = 0; //keeping score between user and computers

function computerPlay () { //function for the computer to select it's choice
    num = Math.floor(Math.random() * 3); //selecting a number between 0 and 2
    switch (num) { //using a switch statement to test the condition which case it would be
        case 0: //if the num is 0
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
    //playRound function to test who won the round
    playerSelection = playerSelection.toLowerCase(); //converting the string into a lower case
    computerSelection = computerSelection.toLowerCase(); //removing the chance of case-sensitive

    if (playerSelection === 'rock' && computerSelection === 'rock' //if both sides selected rock
    || playerSelection === 'paper' && computerSelection === 'paper' //OR if both sides selected paper
    || playerSelection === 'scissors' && computerSelection === 'scissors') { //OR if both sides selected scissors
        return ("It is a tie both" + playerSelection);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') { //if user is paper and computer is rock
        userScore++; //userScore is incremented by 1
        return ("You won! Paper beats Rock") //displaying that the user won the round
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++; //computerScore is incremented by 1
        return ("You lose! Rock beats Scissors") //displaying that the computer won the round
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
    userScore = 0, computerScore = 0;
    for (let i = 0; i < 5; i++) { //forloop that repeats the code 5 times
        let playerSelection = prompt("Enter in rock, paper, or scissors"); //allowing the user to enter their selection
        let computerSelection = computerPlay(); //computer selection using the computerPlay() function
        console.log(playRound(playerSelection, computerSelection)); //using the playRound() function to test
    }
    console.log(scores()); //displing the scores after the 5 rounds are completed
}

function scores () { //testing the score between user and computer to determine who won
    if (userScore > computerScore) {
        return ("User won!\nUser scored: " + userScore + " and computer scored: " + computerScore);
    } else if (userScore < computerScore){
        return ("Computer Won!\nUser scored: " + userScore + " and computer scored: " + computerScore);
    } else if (userScore == computerScore) {
        return ("It is a tie User: " + userScore + " : Computer: " + computerScore)
    }
}