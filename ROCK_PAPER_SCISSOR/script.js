const choices = ['ROCK🪨', 'PAPER🗞️', 'SCISSOR✂️'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;  // Initialize computerScore

function userChoice(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else if (playerChoice === "ROCK🪨") {
        if (computerChoice === "SCISSOR✂️") {
            result = "YEY..YOU WIN!";
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
        } else {
            result = "OOPS..YOU LOSE!";
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
        }
    } else if (playerChoice === "PAPER🗞️") {
        if (computerChoice === "ROCK🪨") {
            result = "YEY..YOU WIN!";
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
        } else {
            result = "OOPS..YOU LOSE!";
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
        }
    } else if (playerChoice === "SCISSOR✂️") {
        if (computerChoice === "PAPER🗞️") {
            result = "YEY..YOU WIN!";
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
        } else {
            result = "OOPS..YOU LOSE!";
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    // Change resultDisplay color based on the result
    if (result === "YEY..YOU WIN!") {
        resultDisplay.style.color = "green";
    } else if (result === "OOPS..YOU LOSE!") {
        resultDisplay.style.color = "red";
    } else {
        resultDisplay.style.color = "black";
    }
}
