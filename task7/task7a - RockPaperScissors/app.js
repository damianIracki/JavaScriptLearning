const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerChoice: "",
    aiChoice: "",
}

const choices = document.querySelectorAll(".select img");
const btn = document.querySelector(".start");

const optionSelection = (event) => {
    game.playerChoice = event.target.dataset.option;
    choices.forEach(choose => choose.style.boxShadow = "");
    event.target.style.boxShadow = "0 0 0 4px yellow";
}

function aiChoice() {
    const index = Math.floor(Math.random() * choices.length)
    return choices[index].dataset.option;
}

function checkResult(playerChoice, aiChoice) {
    if (playerChoice === aiChoice) {
        return 'draw';
    } else if ((playerChoice === "rock" && aiChoice === "scissors") ||
        (playerChoice === "paper" && aiChoice === "rock") ||
        (playerChoice === "scissors" && aiChoice === "paper")) {
        return 'win';
    } else {
        return 'loss';
    }
}

function publishResult(playerChoice, aiChoice, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = playerChoice;
    document.querySelector('[data-summary="ai-choice"]').textContent = aiChoice;

    document.querySelector("p.numbers span").textContent = ++gameSummary.numbers;

    if (result == 'win') {
        document.querySelector("p.wins span").textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="game-winner"]').textContent = "PLAYER";
        document.querySelector('[data-summary="game-winner"]').style.color = "green";
    } else if (result == 'loss') {
        document.querySelector("p.losses span").textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="game-winner"]').textContent = "AI";
        document.querySelector('[data-summary="game-winner"]').style.color = "red";
    } else {
        document.querySelector("p.draws span").textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="game-winner"]').textContent = "It's DRAW";
        document.querySelector('[data-summary="game-winner"]').style.color = "blue";
    }
}

function endGame() {
    document.querySelector(`[data-option=${game.playerChoice}]`).style.boxShadow = "";
    game.playerChoice = "";
    game.aiChoice = "";
}

function startGame() {
    if (!game.playerChoice) {
        return alert("Sir, you ddin't choose anything! Please choose one option.")
    }
    game.aiChoice = aiChoice();
    const gameResult = checkResult(game.playerChoice, game.aiChoice);
    publishResult(game.playerChoice, game.aiChoice, gameResult);
    endGame();
}



choices.forEach(choice => {
    choice.addEventListener("click", optionSelection)
})

btn.addEventListener("click", startGame);