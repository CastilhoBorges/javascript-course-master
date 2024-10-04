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


console.log("Augusto");
setTimeout(() => console.log("Castilho"), 500);
console.log("Borges");

/// Promises ///

const fetchPromises = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromises);

fetchPromises
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  })
  .then((data) => console.log(data[5].name))
  .catch((error) => {
    console.error(`Não foi possivel obter os produtos: ${error}`);
  });

console.log("Iniciado");


const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Falha ao buscar: ${error}`);
  });


const myPromise = new Promise((res, rej) => {
  let sucesso = false;

  if (sucesso) {
    res(`${sucesso} DEU BOM`);
  } else {
    rej("DEU RUIM");
  }
});

myPromise.then((res) => console.log(res)).catch((err) => console.log(err));
*/

async function obterDados() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Não foi possível obter os produtos: ${error}`);
  }
}

const tenta = obterDados();
tenta.then((res) => console.log(res)).catch((err) => console.log(err));

console.log("AAAA");
console.log("AAAABBBB");
