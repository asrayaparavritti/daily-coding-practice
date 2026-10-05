
 // Computer Choice
 
 function getComputerChoice () {
  
  let cpuChoice = Math.floor(Math.random() * 3);

  if (cpuChoice === 0) {
    cpuChoice = "Pedra";

  } else if (cpuChoice === 1) {
    cpuChoice = "Papel";

  } else {
    cpuChoice = "Tesoura";
  }

  return cpuChoice;

 }

 // USer Choice

 
