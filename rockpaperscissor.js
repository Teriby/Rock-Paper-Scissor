// Random Computer choice 
function getComputerChoice () {
var computerSelection = Math.floor(Math.random() * 3);
switch  (computerSelection) {
    case 0:
        computerSelection = "Rock";
        break;
    case 1: 
    computerSelection = "Paper";
        break;
    case 2: 
    computerSelection = "Scissor";
        break;
} 
return computerSelection }

// Player Choice
function playerSelection () {
const playerPrompt = prompt ("Choose Rock, Paper or Scissor.");
let playerChoice = playerPrompt.substring(0, 1).toUpperCase() + playerPrompt.substring(1).toLowerCase();
return playerChoice
}



// Choosing Matchresult 

let tie = ("Tie");
let won = ("You won. ") + playerChoice + (" beats ") + computerSelection + (".");
let lose = ("You lose. ") + computerSelection + (" beats ") + playerChoice + (".");

function matchResult () {
{

    if (computerSelection == playerChoice) {
     return tie;  
    }



else if (computerSelection === "Rock") {
   if (playerChoice === "Paper") {
    return won; 
}
   else { 
    return lose; 
}
}

else if (computerSelection === "Paper") {
    if (playerChoice === "Rock") {
           return lose; 
        }
        else { 
        return won; 
    }
    }

else if (computerSelection === "Scissor") {
    if (playerChoice === "Paper") {
         return lose; 
        }
        else { return won; }

    }
}};
//Score Variables
var playerScore = 0;
var computerScore = 0;

//Rounds 
for (let r = 0; r < 5; r++) {
    var playerChoice = playerSelection ();
    var computerSelection = getComputerChoice ();
    var result = matchResult (playerChoice, computerSelection)
    console.log (playerChoice)
    console.log (computerSelection)
    console.log (result)
    
//Score

if (result == won) {
    playerScore++
} else if (result == lose) {
    computerScore++
} else { }
console.log (playerScore)
console.log (computerScore)
}