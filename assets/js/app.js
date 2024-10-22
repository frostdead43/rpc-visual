
rockBtn.addEventListener("click", () => giveResult('rock'));
paperBtn.addEventListener("click", () => giveResult('paper'));
scissorsBtn.addEventListener("click", () => giveResult('scissors'));
resetBtn.addEventListener("click", resetGame);


let playerScore = 0;
let computerScore = 0;


function activeGame (playerMove, computerMove) {
    if (playerMove === computerMove) {
        return "draw";
    }else if (
        (playerMove === "rock" && computerMove === "scissors") || 
        (playerMove === "scissors" && computerMove === "paper") ||
        (playerMove === "paper" && computerMove === "rock")) {   
            return "player win"
        
    }else {
        (computerMove === "rock" && playerMove === "scissors") ||
        (computerMove === "scissors" && playerMove === "paper") ||
        (computerMove === "paper" && playerMove === "rock")
            return "computer win"
    }

}

function computerPhase() {
    let computerMove = ["rock", "paper","scissors"].at(Math.floor(Math.random() * 3));
    return computerMove;
}

function giveResult(playerMove) {
    const computerMove = computerPhase();
    computerMoveBtn.innerHTML = computerMove;
    const winnerSelect = activeGame(playerMove,computerMove);
    winnerCheck.innerHTML = winnerSelect;

    if (winnerSelect === "player win") {
        playerScore++;
        playerScoreBtn.innerHTML = playerScore;

    } else if (winnerSelect === "computer win") {
        computerScore++;
        computerScoreBtn.innerHTML = computerScore;
    }
}



function resetGame() {
    playerScore = 0;
    playerScoreBtn.innerHTML = playerScore;
    computerScore = 0;
    computerScoreBtn.innerHTML = computerScore;
    winnerCheck.innerHTML = "";
    computerMoveBtn.innerHTML = "";
}




