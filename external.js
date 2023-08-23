
let humanScore = 0;
let compScore = 0;

let humanWin = () => {
  win = document.querySelector('#humanWin')
  humanScore++; 
  win.textContent = humanScore;
}
let computerWin = () => {
  lose = document.querySelector('#computerWin')
  compScore++; 
  lose.textContent = computerScore;
}


function getComputerChoice(){
    const arr = ['Rock', 'Paper', 'Scissors']; 
    const randomIndex = Math.floor(Math. random() * arr.length); 
    const item = arr[randomIndex]; 
    return item;
}

function playRound(playerSelection, computerSelection){
  playerChoice = () => {
    if (playerSelection == 'gameBtn1') return 'rock';
    else if (playerSelection == 'gameBtn2') return 'paper';
    else return 'scissors';
  }
  playerSelection = playerChoice().toLowerCase(); 
  if(playerSelection === computerSelection.toLowerCase()){
    return "It's a Tie!";
  }
  else if(
    (playerSelection === 'rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'paper' && computerSelection === 'Rock') ||
    (playerSelection === 'scissors' && computerSelection === 'Paper')){
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

let playerScore = 0;
let computerScore = 0;
const finalScoreElement = document.getElementById('finalScore');

const buttons = document.querySelectorAll('button');
buttons.forEach(button =>{
button.addEventListener('click', ()=>{
    const playerSelection = button.id; 
    const computerSelection = getComputerChoice(); 
    const result = playRound(playerSelection, computerSelection); 
    finalScoreElement.textContent = result;
    console.log(result);

    if (result.includes("Win")){
      humanWin();
      playerScore++;
    } else if (result.includes("Lose")){
      computerWin();
      computerScore++;
    }
  
    
    if (playerScore === 5) {
      finalScoreElement.textContent="Congrats! You Won the Game!";
      disableButtons();
    }else if (computerScore === 5) {
      finalScoreElement.textContent="Sorry! You Lose the Game!";
      disableButtons();
    }
  });
});

function disableButtons() {
  buttons.forEach(button => {
    button.disabled = true;
  });
}
