function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  num = Math.floor(Math.random() * 3);
  let result = options[num];

  return result;
}

function getUserChoice() {
  userChoice = prompt(
    "Please enter a choice between: Rock, Paper, or Scissors: "
  );
  while (typeof userChoice !== "string") {
    choice = prompt(
      "Please enter a choice between: Rock, Paper, or Scissors: "
    );
  }
  userChoice = userChoice.toLowerCase();
  return userChoice;
}

let userScore = 0;
let computerScore = 0;
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function rpsRound(userChoice, computerChoice) {

  if (userChoice === computerChoice) {
    console.log(`You both chose ${computerChoice}, it is a tie!`);
 } else if (
    (userChoice === rock && computerChoice === scissors) ||
    (userChoice === paper && computerChoice === rock) ||
    (userChoice === scissors && computerChoice === paper)) {
    console.log(`You win, your opponent chose ${computerChoice}!`);
    computerScore++;
    
  } else if (
    (computerChoice === rock && userChoice === scissors) ||
    (computerChoice === paper && userChoice === rock) ||
    (computerChoice === scissors && userChoice === paper)
  ) {
    console.log(`You lose, your opponent chose ${computerChoice}!`);
    userScore++;

  } else {
    console.log(`Invalid input, the choice you have provided is neither of the options.`);
  }
}
const userPick = getUserChoice();
const computerPick = getComputerChoice();

console.log(rpsRound(userPick, computerPick));

function playRPS() {

    
}
