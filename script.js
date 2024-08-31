// function getRandomInt() {
//  return Math.floor(Math.random() * 3);
//  }
  
//  console.log(getRandomInt());
//  Expected output: 0, 1 or 2

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

const cpuChoice = getComputerChoice();

console.log(cpuChoice);