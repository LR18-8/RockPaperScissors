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

    //selecting DOM elements
    const pScoreDOM = document.getElementById("playerScoreOutput");
    const cScoreDOM = document.getElementById("compScoreOutput");
    const outputDOM = document.getElementById("gameOutput");
    const popupWrapDOM = document.getElementById("popupWrapper");
    const popupDOM = document.getElementById("popup");
    const endMessage = document.getElementById("endMsg");
    const endHeading = document.getElementById("endHeading");

    //check to see if round is a draw
    if (humanChoice === computerChoice) {
        outputDOM.innerHTML = `DRAW, You both selected ${humanChoice}`;
    };

    //compute winner between rock vs scissors
    if (humanChoice === "rock" && computerChoice === "scissors"){

        outputDOM.innerHTML = `You WIN this round. ${humanChoice} beats ${computerChoice}`;

        globalHumanScore ++;

        pScoreDOM.innerHTML = globalHumanScore;

    } else if (computerChoice === "rock" && humanChoice === "scissors"){

        outputDOM.innerHTML = `You LOSE this round. ${computerChoice} beats ${humanChoice}`;

        globalComputerScore ++

        cScoreDOM.innerHTML = globalComputerScore;
    }

    //compute winner scissors vs paper
    if (humanChoice === "scissors" && computerChoice === "paper"){

        outputDOM.innerHTML = `You WIN this round. ${humanChoice} beats ${computerChoice}`;

        globalHumanScore ++;

        pScoreDOM.innerHTML = globalHumanScore;

    } else if (computerChoice === "scissors" && humanChoice === "paper"){

        outputDOM.innerHTML = `You LOSE this round. ${computerChoice} beats ${humanChoice}`;

        globalComputerScore ++

        cScoreDOM.innerHTML = globalComputerScore;
    }

    //compute winner between paper vs rock
    if (humanChoice === "paper" && computerChoice === "rock"){

        outputDOM.innerHTML = `You WIN this round. ${humanChoice} beats ${computerChoice}`;

        globalHumanScore ++;

        pScoreDOM.innerHTML = globalHumanScore;

    } else if (computerChoice === "paper" && humanChoice === "rock"){

        outputDOM.innerHTML = `You LOSE this round. ${computerChoice} beats ${humanChoice}`;

        globalComputerScore ++

        cScoreDOM.innerHTML = globalComputerScore;
    }

    if (globalHumanScore === 5) {

        endHeading.innerHTML = "Congratulations! you WIN!";

        endMessage.innerHTML = `Your score: ${globalHumanScore} <br>
        Computer score: ${globalComputerScore}`;

        popupWrapDOM.classList.remove("hidden");

        popupDOM.classList.remove("hidden");

    } else if (globalComputerScore === 5){

        endHeading.innerHTML = "Better luck next time";

        endMessage.innerHTML = `Your score: ${globalHumanScore} <br>
        Computer score: ${globalComputerScore}`;

        popupWrapDOM.classList.remove("hidden");

        popupDOM.classList.remove("hidden");
    }
};