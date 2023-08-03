function getComputerChoice(){
    const arr = ['Rock', 'Paper', 'Scissors']; 
    const randomIndex = Math.floor(Math. random() * arr.length); 
    const item = arr[randomIndex]; 
    return item;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase(); 
    if(playerSelection === computerSelection.toLowerCase()){
      return "It's a draw!";
    }
    else if(
      (playerSelection === 'rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'paper' && computerSelection === 'Rock') ||
      (playerSelection === 'scissors' && computerSelection === 'Paper')){
      return " You Win! ${playerSelection} beats ${computerSelection}.";
    } else {
      return "You Lose! ${computerSelection} beats ${playerSelection}.";
    }
}

// let playerSelection = 'Scissors';
// let computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt("Enter your choice (Rock-Paper-Scissors):");
    const computerSelection = getComputerChoice();
    const answer = playRound(playerSelection, computerSelection);
    alert(answer);
    
    if (answer.includes("Win")){
      playerScore++;
    } else if (answer.includes("Lose")){
      computerScore++;
    }
  }
  const finalScoreElement = document.getElementById('finalScore');

  finalScoreElement.textContent = `Final Score: You ${playerScore} - ${computerScore} Computer`;

  if (playerScore > computerScore) {
    alert("Congrats! You Won!");
  }else if (playerScore < computerScore) {
    alert("Sorry! You Lose!");
  } else {
    alert("It's a Tie!");
  }
}
document.getElementById('gameBtn').onclick = game;