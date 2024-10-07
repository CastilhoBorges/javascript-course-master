export function falarIngles() {
  console.log("Ingless");
}

(function arrays() {
  "use strict";

  /*
    1. Arrays
    Atividade 1: Manipulação de arrays
    Crie um array de números.
    Adicione um número no final do array.
    Remova o primeiro elemento do array.
    Encontre o maior número no array.
    Inverta a ordem do array.
    Filtre os números maiores que 10.
    */

  const arrDeNumeros = [];

  for (let i = 1; i < 10; i++) {
    arrDeNumeros.push(Math.floor(Math.random() * 100) + 1);
  }
  console.log(arrDeNumeros);

  arrDeNumeros.push(87);
  console.log(arrDeNumeros);

  arrDeNumeros.shift();
  console.log(arrDeNumeros);

  const maiorValor = Math.max(...arrDeNumeros);
  console.log(maiorValor);

  const arrayReverse = arrDeNumeros.reverse();
  console.log(arrayReverse);

  const more10 = arrDeNumeros.filter((i) => i > 10);
  console.log(more10);

  const frutas = ["maçã", "banana", "laranja", "uva"];

  for (let i = 0; i < frutas.length; i++) {
    frutas[i] = frutas[i].toUpperCase();
  }
  console.log(frutas);

  const lengthElementos = frutas.map((i) => i.length);
  console.log(lengthElementos);
});

(function poo() {
  "use strict";

  class Pessoa {
    nome;
    idade;
    cidade;

    constructor(nome, idade, cidade) {
      this.nome = nome;
      this._idade = idade;
      this.cidade = cidade;
    }

    get idade() {
      return this._idade;
    }

    set idade(novaIdade) {
      if (novaIdade < 0) {
        console.log("Idade invalida");
      } else [(this._idade = novaIdade)];
    }

    saudar() {
      console.log(`Olá, eu sou o/a ${this.nome} e moro em ${this.cidade}`);
    }
  }

  class Aluno extends Pessoa {
    curso;

    constructor(curso) {
      this.curso = curso;
    }

    estudar() {
      console.log(
        `O aluno ${this.nome} encontra estudando o curso ${this.curso}`
      );
    }
  }

  const pessoa1 = new Pessoa("Augusto", 19, "Uberlândia");
  pessoa1.saudar();
  pessoa1.idade = -6;
  console.log(pessoa1.idade);
})();
