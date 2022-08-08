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
        return ('Tie');
    }
    // lose scenarios
    else if (
        ((player == 'rock') && (comp == 'paper'))
        || ((player == 'paper') && (comp == 'scissors'))
        || ((player == 'scissors') && (comp == 'rock'))
    ) {
        return ('Lose');

    // must be a win then
    } 
    else {
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

game();