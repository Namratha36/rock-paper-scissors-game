let UserScore = 0;
let ComputerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScoreDisplay = document.querySelector('#user-score');
const computerScoreDisplay = document.querySelector('#computer-score');

const genComputerChoice = () => {
    const choiceArray = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choiceArray[randomIndex];
}

const drawGame = () => {
    msg.innerText = "Game was a Draw!";
    console.log("Game was a Draw!");
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        UserScore++;
        userScoreDisplay.innerText = UserScore;
        console.log("You win!");
        msg.innerText = `You win!🥳,Your's ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        ComputerScore++;
        computerScoreDisplay.innerText = ComputerScore;
        console.log("You lose!");
        msg.innerText = `You lost! 😢 ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("User choice: ", userChoice);
// computer's choice
    const computerChoice = genComputerChoice();
    console.log("Computer choice: ", computerChoice);
    
    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
        userWin = computerChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userWin = computerChoice === 'scissors' ? false : true;
        } else{
            userWin = computerChoice === 'rock' ? false : true;
        }     
        
        showWinner(userWin, userChoice, computerChoice);
    }
};


choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})