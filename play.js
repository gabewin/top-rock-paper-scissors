let playerScore = 0;
let compScore = 0;
let newGame = false;

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
        return ('It\'s a Tie!');
    }
    // lose scenarios
    else if (
        ((player == 'rock') && (comp == 'paper'))
        || ((player == 'paper') && (comp == 'scissors'))
        || ((player == 'scissors') && (comp == 'rock'))
    ) {
        console.log('lose');
        compScore++;
        return (`You Lose! ${computerSelection} beats ${playerSelection}!`);

    // must be a win then
    } 
    else {
        console.log('win');
        playerScore++;
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    }

}

function displayResults(results){
    const container = document.querySelector('#results');
    if(newGame){
        console.log('gameover');
        container.replaceChildren();
        newGame = false;
    }

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = (`${results} Player: ${playerScore} Computer: ${compScore}`);
    container.appendChild(content);

    if (playerScore >= 5){
        const gameOver = document.createElement('div');
        gameOver.classList.add('gameOver');
        gameOver.textContent = (`Game over! You win! Player: ${playerScore} Computer: ${compScore}`);
        container.appendChild(gameOver);
        playerScore=0;
        compScore=0;
        newGame = true;
    }
    if (compScore >= 5){
        const gameOver = document.createElement('div');
        gameOver.classList.add('gameOver');
        gameOver.textContent = (`Game Over! You lose! Player: ${playerScore} Computer: ${compScore}`);
        container.appendChild(gameOver);
        playerScore=0;
        compScore=0;
        newGame = true;
    }

    



}

const r = document.getElementById('r');
r.addEventListener('click', () => { 
    displayResults(playRound('rock', getComputerChoice()));
});

const p = document.getElementById('p');
p.addEventListener('click', () => { 
    displayResults(playRound('paper', getComputerChoice())); });

const s = document.getElementById('s');
s.addEventListener('click', () => { 
    displayResults(playRound('scissors', getComputerChoice())); 
});

