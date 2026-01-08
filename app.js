let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const min = 1;
    const max = 4;
    let random = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + min);
    switch(random) {
        case 1: 
        choice = "rock";
        break;
        case 2: 
        choice = "paper"
        break;
        case 3: 
        choice = "scissor"
        break;
    }
    return choice
}

function getHumanChoice() {
    let userChoice = prompt("Enter your choice (Rock, Paper, Scissor)");
    return userChoice.toLowerCase();
}

function playRound(human, computer){

    if (human === computer) {
        alert("It's a draw!");
        return;
    }

    const winConditions =
        (human === "rock" && computer === "scissor") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissor" && computer === "paper");

    if (winConditions) {
        confirm(`You win! ${human} beats ${computer}`);
        humanScore++;
        alert(`Human: ${humanScore}\nComputer: ${computerScore}`);
    } else {
        confirm(`You lose! ${computer} beats ${human}`);
        computerScore++;
        alert(`Human: ${humanScore}\nComputer: ${computerScore}`);
    }
}

function playGame(){
        let roundPlay = Number(
        prompt("How many games of rock, paper, and scissors do you want to play?")
    );

    if (isNaN(roundPlay) || roundPlay <= 0) {
        alert("Please enter a valid number of rounds.");
        return;
    }

    const finalRoundsPlayed = roundPlay;

    while (roundPlay > 0) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        roundPlay--;
    }

    const draws = finalRoundsPlayed - (humanScore + computerScore);

    alert(
        `Final Score:
    Human = ${humanScore}
    Computer = ${computerScore}
    Rounds Played = ${finalRoundsPlayed}
    Draws = ${draws}`
    );

    let playAgain = prompt("Do you want to play again?")

        if (playAgain.toLowerCase() === "yes"){
            playGame();
        }
        else {
            alert("Thanks for playing!")
        }
    }

playGame();



