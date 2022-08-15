function getComputerChoice(){

    switch (Math.floor(Math.random() * 3)) {
    case 0:
        return "Rock";
    case 1:
        return "Paper";
    case 2:
        return "Scissors";
    }


};

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let comp = computerSelection.toLowerCase();
    
    //Tie scenarios
    if (player == comp ){
        console.log('tie');
        return ('Tie');
    }
    // lose scenarios
    else if (
        ((player == 'rock') && (comp == 'paper'))
        || ((player == 'paper') && (comp == 'scissors'))
        || ((player == 'scissors') && (comp == 'rock'))
    ) {
        console.log('lose');
        return ('Lose');

    // must be a win then
    } 
    else {
        console.log('win');
        return ('Win');
    }

}

function game(){
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i<5; i++){
        
        let playerChoice = prompt("Rock, Paper, or Scissors?");
        let compChoice = getComputerChoice();
        let outcome = (playRound(playerChoice, compChoice));

        if (outcome == 'Win'){
            playerScore++;
            console.log(`You win! ${playerChoice} beats ${compChoice}`);
        }
        else if (outcome == 'Lose'){
            compScore++;
            console.log(`You Lose! ${compChoice} beats ${playerChoice}!`);
        }
        else {
            console.log('You Tie!')
        }
   
    }
    console.log(`Your won ${playerScore} games and the computer won ${compScore}`);
}

const r = document.getElementById('r');
r.addEventListener('click', () => { playRound('rock', getComputerChoice()); });

const p = document.getElementById('p');
p.addEventListener('click', () => { playRound('paper', getComputerChoice()); });

const s = document.getElementById('s');
s.addEventListener('click', () => { playRound('scissors', getComputerChoice()); });

