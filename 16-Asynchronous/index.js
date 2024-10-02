"use strict";
/*
const numero = document.getElementById("numero");

let promise = new Promise((resolve, reject) => {
  let result = true;
  let tempo = 3000;

  setTimeout(() => {
    if (result) {
      resolve("Deu tudo certo");
    } else {
      reject("Deu tudo errado");
    }
  }, tempo);
});

promise
  .then((ret) => {
    numero.innerHTML = "Deu certo";
    numero.classList.remove("error");
    numero.classList.add("ok");
  })
  .catch((ret) => {
    numero.innerHTML = "Deu errado";
    numero.classList.add("error");
    numero.classList.remove("ok");
  });

numero.innerHTML = "Processando...";
*/

const asyncAwait = async function () {
  const nome = "Augusto";

  await console.log(nome);
};

console.log();
console.log();
console.log();