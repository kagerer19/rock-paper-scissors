// Cache the DOM
const game = () => {
    let playerScore = 0;
    let AIScore = 0;
    let moves = 0;
}

//Initialize game logic
const playGame = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissors');
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ["rock", "paper", "scissors"];

    playerOptions.forEach((playerOptions) => console.log(playerOptions));
    computerOptions.forEach((playerOptions) => console.log(playerOptions));
}

playGame();