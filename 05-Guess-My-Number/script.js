"use strict";

/*
    Whats is the DOM?
- Document object Model é uma representação de uma estrutura de documento HTML, O javascript acessa ele para poder manipular os elementos e estilos do site. 

- O DOM é uma WEB Api que nos permiti fazer essas manipulações

- O documento começa o acesso ao DOM, depois temos os outros childrens e assim cada childrem pode ter seus childrens. 
*/

/* 

console.log(document.querySelector(".message")); // Pegamos o elemento no DOM
document.querySelector(".message").textContent = "Correct Number🥊"; // Manipulamos 
// o elemento trocando o text dele. 

document.querySelector(".number").textContent = 13; // Mudamos o numero dos 
document.querySelector(".score").textContent = 10; // dois elementos. 

document.querySelector('.guess').value = 23; // Definimos o valor do input 
console.log(document.querySelector(".guess").value); // registramos no console 

*/

const secretNumber = Math.trunc(Math.random() * 100) + 1;
document.querySelector(".number").textContent = secretNumber;

let score = 10;

// O metodo addEventListener como primeiro argumento recebe a ação que vai ser
// realizada e como segundo parametro a função com oque vai acontecer logo apos o click
// Não é necessario ocorrer uma chamada de função
// Pois ela é chamada automaticamente quando a ação que passamos acontece
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number🥊";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "You lost the game!";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "You lost the game!";
    }
  }
});
