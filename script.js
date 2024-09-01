function getComputerChoice(){  
    let randomNumber = Math.floor(Math.random() * 3); 
    let computerChoice = "I haven't made my choice yet!";

    if (randomNumber === 0){
        computerChoice = "rock"
    } else if (randomNumber === 1){
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    };

    return computerChoice;
    //console.log(randomNumber); used for testing

    //console.log(computerChoice); Used for testing
};

function getHumanChoice(){
    let humanChoice = prompt("Please choose between Rock, Paper or Scissors.").toLowerCase();

    return humanChoice;
        //console.log(humanChoice); // Used for testing
};

/* MOVED INTO PLAYROUND FUNCTION FOR TESTING
let humanScore = 0;
let computerScore = 0;
*/

function playRound(humanChoice, computerChoice){
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    let humanScore = 0;
    let computerScore = 0;

    if (humanChoice === computerChoice) {
        console.log(`You selected ${humanChoice} and the Computer also selected ${computerChoice}. This round is a draw!`)
    };

    //compute winner between rock vs scissors
    if (humanChoice === rock && computerChoice === scissors){
        console.log("You Win! Rock beats Scissors");
        humanScore ++;
    } else if (computerChoice === rock && humanChoice === scissors){
        console.log("You Loose! Rock beats Scissors");
        computerScore ++
    }

    //compute winner scissors vs paper
    if (humanChoice === scissors && computerChoice === paper){
        console.log("You Win! Scissors beats Paper");
        humanScore ++;
    } else if (computerChoice === scissors && humanChoice === paper){
        console.log("You Loose! Scissors beats Paper");
        computerScore ++
    }

    //compute winner between paper vs rock
    if (humanChoice === paper && computerChoice === rock){
        console.log("You Win! Paper beats Rock");
        humanScore ++;
    } else if (computerChoice === paper && humanChoice === rock){
        console.log("You Loose! Paper beats Rock");
        computerScore ++
    }

    console.log(`Human Choice: ${humanChoice} || Computer Choice: ${computerChoice}`);
    console.log(`Human Score: ${humanScore} || Computer Score: ${computerScore}`);
    return humanScore, computerScore;
};

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);