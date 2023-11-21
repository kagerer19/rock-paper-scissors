let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score');
let scoreBoard_div = document.querySelector('.score-board');
let result_div = document.querySelector('.result');
let rock_div = document.getElementById('rock');
let paper_div = document.getElementById('paper');
let scissors_div = document.getElementById('scissors');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertCase(anythingIwant) {
    if (anythingIwant === 'paper') return 'Paper';
    if (anythingIwant === 'scissors') return 'Scissors';
    return 'Rock';
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const userName = ' (user)'.fontsize(3).sup();
    const compName = ' (comp)'.fontsize(3).sup();
    result_div.innerHTML = `<p>${convertCase(user)}${userName} beats ${convertCase(computer)}${compName}. You win!</p>`;
    const roundStatus = document.getElementById(user);
    roundStatus.classList.add('winningStyles');
    setTimeout(() => roundStatus.classList.remove('winningStyles'), 300);
}

function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const userName = ' (user)'.fontsize(3).sup();
    const compName = ' (comp)'.fontsize(3).sup();
    result_div.innerHTML = `<p>${convertCase(computer)}${compName} beats ${convertCase(user)}${userName}. You lose!</p>`;
    const roundStatus = document.getElementById(user);
    roundStatus.classList.add('losingStyles');
    setTimeout(() => roundStatus.classList.remove('losingStyles'), 300);
}

function draw(user, computer) {
    const userName = ' (user)'.fontsize(3).sup();
    const compName = ' (comp)'.fontsize(3).sup();
    result_div.innerHTML = `<p>It was a draw! You both chose ${convertCase(user)}</p>`;
    const roundStatus = document.getElementById(user);
    roundStatus.classList.add('drawStyles');
    setTimeout(() => roundStatus.classList.remove('drawStyles'), 300);
}

function game(userChoice, totalRounds) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case 'paperrock':
        case 'rockscissors':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'scissorsrock':
        case 'paperscissors':
            lose(userChoice, computerChoice);
            break;
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
            draw(userChoice, computerChoice);
            break;
    }

    if (userScore + computerScore === totalRounds) {
        showFinalResult();
    }
}

function showFinalResult() {
    if (userScore > computerScore) {
        result_div.innerHTML += `<p>Final Result: You won ${userScore} rounds - ${computerScore} rounds. You win!</p>`;
    } else if (userScore < computerScore) {
        result_div.innerHTML += `<p>Final Result: You lose!  ${userScore} - ${computerScore}</p>`;
    } else {
        result_div.innerHTML += `<p>Final Result: It's a draw! ${userScore} rounds each.</p>`;
    }
}

function main() {
    // Prompt the user for the number of rounds
    const rounds = parseInt(prompt('Enter the number of rounds you want to play:'));

    // Ensure the user enters a valid number of rounds
    if (isNaN(rounds) || rounds <= 0) {
        alert('Please enter a valid number of rounds.');
        return;
    }

    // Add event listeners for user choices
    rock_div.addEventListener('click', () => game('rock', rounds));
    paper_div.addEventListener('click', () => game('paper', rounds));
    scissors_div.addEventListener('click', () => game('scissors', rounds));
}

main();
