
 // Computer Choice
 
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

 // USer Choice

 function getHumanChoice () {

  let userChoice = prompt("Digite a sua escolha: ");



  return userChoice.toLowerCase();

 }

 console.log(getHumanChoice());