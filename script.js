function getComputerChoice(){  
    let randomNumber = Math.floor(Math.random() * 3); 
    let computerChoice = "I haven't made my choice yet!";

    if (randomNumber === 0){
        computerChoice = "Rock"
    } else if (randomNumber === 1){
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    };

    //console.log(randomNumber); used for testing

    //console.log(computerChoice); Used for testing
};

function getHumanChoice(){
    let humanChoice = prompt("Please choose between Rock, Paper or Scissors.").toLowerCase();

    //humanChoice.toLowerCase();

    console.log(humanChoice); // Used for testing
};

getHumanChoice();

function playRound(humanChoice, computerChoice){
    
};

let humanScore = 0;
let computerScore = 0;