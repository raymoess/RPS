function getComputerChoice(){
    let options = ['rock' , 'paper', 'scissors'];
    num = Math.floor(Math.random() * 3);
    let result = options[num];

    return result;
}

function getUserChoice(str){

    userChoice = prompt("Please enter a choice between: Rock, Paper, or Scissors: ");
    while (typeof userChoice !== "str"){
        choice = prompt("Please enter a choice between: Rock, Paper, or Scissors: ");
    }
    userChoice = userChoice.toLowerCase();
    return userChoice

}

let options = ['rock' , 'paper', 'scissors']
let userScore = 0;
let computerScore = 0;

function rpsRound(userChoice, computerChoice){

}

function playRPS(){

}