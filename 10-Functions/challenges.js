"use strict";

/*
1. Função de Transformação

- Crie uma função transformar(array, funcao) que recebe uma lista de elementos e uma função, e retorna uma nova lista onde cada elemento foi transformado pela função fornecida.
*/

const forTwo = function (element) {
  const newArr = [];
  for (const item of element) {
    newArr.push(item * 2);
  }
  return newArr;
};

const transformar = (array, fn) => console.log(fn(array));

transformar([2, 2, 2], forTwo);

/*
2. Função de Filtro

Crie uma função filtrar(array, funcao) que recebe uma lista de elementos e uma função, e retorna uma nova lista contendo apenas os elementos que retornam true ao serem passados pela função.
*/

const IfEven = function (array) {
  const evenArr = [];
  for (const item of array) {
    if (item % 2 === 0) evenArr.push(item);
  }

  return evenArr;
};

const filtrar = (array, fn) => console.log(fn(array));

filtrar([1, 2, 3, 4, 5, 6, 7, 8, 9], IfEven);

/*
3. Funções como Argumentos

- Crie uma função operar(a, b, operacao) que recebe dois números e uma função de operação, e retorna o resultado.

- Aplicar Função em Lista
Crie uma função aplicar(lista, funcao) que recebe uma lista e uma função, e retorna uma nova lista com a função aplicada a cada elemento da lista.
*/

const soma = (a, b) => a + b;

const operar = (a, b, opFn) => console.log(opFn(a, b));
operar(2, 3, soma);
