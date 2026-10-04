/* #1 - obter escolha do jogador
   #2 - gerar escolha do computador
   #3 - comparar escolhas
   #4 - mostrar resultado */


   // Pegando escolha do Computador
   
   function getComputerChoice () {
    let cpuChoice = Math.floor(Math.random() * 3);

    if(cpuChoice === 0){
      cpuChoice = "Pedra";
    } else if (cpuChoice === 1){
      cpuChoice = "Papel";
    } else {
      cpuChoice = "Tesoura";
    }

    return cpuChoice;
    
   }