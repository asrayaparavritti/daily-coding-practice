
let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {

    let cpuChoice = Math.floor(Math.random() * 3);
    if (cpuChoice === 0) {
        cpuChoice = "pedra";
    } else if (cpuChoice === 1) {
        cpuChoice = "papel";
    } else {
        cpuChoice = "tesoura";
    }
    return cpuChoice;
}

function getHumanChoice () {
    let userChoice = prompt("Digite sua escolha: ");
    return userChoice;
}

function playRound (getHumanChoice, getComputerChoice) {
    getHumanChoice = getHumanChoice.toLowerCase();

    if (getComputerChoice === "pedra" && getHumanChoice === "tesoura") {
        console.log("Voce perdeu! Pedra vence Tesoura!");
        computerScore++;
    } else if (getComputerChoice === "papel" && getHumanChoice === "pedra") {
        console.log("Voce perdeu! papel ganha de Pedra!");
        computerScore++;
    } else if (getComputerChoice === "tesoura" && getHumanChoice === "papel") {
        console.log("Voce perdeu! Tesoura ganha de Papel!");
        computerScore++;
    } else if (getComputerChoice === "pedra" && getHumanChoice === "papel") {
        console.log("Voce ganhou! Papel ganha de Pedra!");
        humanScore++;
    } else if (getComputerChoice === "papel" && getHumanChoice === "tesoura"){
        console.log("Voce ganhou! Tesoura ganha de Papel!");
        humanScore++;
    } else if (getComputerChoice === "tesoura" && getHumanChoice === "pedra") {
        console.log("Voce ganhou! Pedra ganha de Tesoura!");
        humanScore++;
    } else {
        console.log("Empate!");
    }

    return;
}

function playGame () {
    
}