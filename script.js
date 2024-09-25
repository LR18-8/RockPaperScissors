//global variables
let globalHumanScore = 0;
let globalComputerScore = 0;
let roundCount = 0;

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

    //console.log(computerChoice); Used for testing
};

function runGame(buttonValue){

    let humanChoice = buttonValue;
    let computerChoice = getComputerChoice();

    //check to see if round is a draw
    if (humanChoice === computerChoice) {
        console.log(`You selected ${humanChoice} and the Computer also selected ${computerChoice}. This round is a draw!`)
    };

    //compute winner between rock vs scissors
    if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You Win! Rock beats Scissors");
        globalHumanScore ++;
    } else if (computerChoice === "rock" && humanChoice === "scissors"){
        console.log("You Loose! Rock beats Scissors");
        globalComputerScore ++
    }

    //compute winner scissors vs paper
    if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You Win! Scissors beats Paper");
        globalHumanScore ++;
    } else if (computerChoice === "scissors" && humanChoice === "paper"){
        console.log("You Loose! Scissors beats Paper");
        globalComputerScore ++
    }

    //compute winner between paper vs rock
    if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You Win! Paper beats Rock");
        globalHumanScore ++;
    } else if (computerChoice === "paper" && humanChoice === "rock"){
        console.log("You Loose! Paper beats Rock");
        globalComputerScore ++
    }

    console.log(globalHumanScore);
    console.log(globalComputerScore);

    if (globalHumanScore === 5) {
        alert("you Win")
        location.reload();
    } else if (globalComputerScore === 5){
        alert("Computer wins");
        location.reload();
    }
};




function playGame(){
        let rock = "rock";
        let paper = "paper";
        let scissors = "scissors";

        let humanScore = 0;
        let computerScore = 0;

        //check to see if round is a draw
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

        if (humanScore > computerScore){
            globalHumanScore++
        } else if (computerScore > humanScore) {
            globalComputerScore++
        }

        return humanScore, computerScore;
 };

/*

-------- RUN GAME LOGIC --------

//loop to play game for 5 rounds
for (let roundCount = 1; roundCount <= 5; roundCount++){
    
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playGame();

    console.log("\n"); 
};



//display global scores
if (globalComputerScore === globalHumanScore){

    console.log(`The game is a draw. You scored ${globalHumanScore} and the computer scored ${globalComputerScore}`);

} else if (globalHumanScore < globalComputerScore){

    console.log(`You Loose, ${globalComputerScore} to ${globalHumanScore}`);
} else {

    console.log(`You Win, ${globalHumanScore} to ${globalComputerScore}`);
};

*/