// Cache DOM
let userScore = 0;
let AIScore = 0;
let userScore_span = document.getElementById("user-score");
let aiScore_span = document.getElementById("ai-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let action_message = document.getElementById("action-message");
let rounds = parseInt(prompt("Enter the number of rounds you would like to play..."));
const choiceIndicator = "<sup>User</sup>";
const AIChoiceIndicator = "<sup>AI</sup>";


function AIChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    aiScore_span.innerHTML = AIScore;
    result.innerHTML = `${choiceIndicator} ${userChoice} beats ${AIChoiceIndicator} ${computerChoice} You win!!`;
}

function lose(userChoice, computerChoice) {
    AIScore++;
    userScore_span.innerHTML = userScore;
    aiScore_span.innerHTML = AIScore;
    result.innerHTML = `AI won: ${AIChoiceIndicator} ${computerChoice} beats ${choiceIndicator} ${userChoice} You loose!!`;
}

function draw() {
    result.innerHTML = "ITS A DRAW!";
}

function game(userChoice) {
    const computerChoice = AIChoice();

    switch (userChoice + computerChoice) {
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    return new Promise(resolve => {
        rock.addEventListener('click', function () {
            resolve("rock");
        });

        paper.addEventListener('click', function () {
            resolve("paper");
        });

        scissors.addEventListener('click', function () {
            resolve("scissors");
        });
    });
}

async function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        const userChoice = await main();
        game(userChoice);
    }
    if (rounds === rounds) {
        action_message.innerHTML = `Final score in this round:  User ${userScore} - ${AIScore} Computer`;
    }
}

playGame(rounds);