"use strict";

/**/
const Person = function (name, age) {
  this.nome = name;
  this.age = age;
};

const person1 = new Person("Augusto", 19);
const person2 = new Person("Cintia", 46);
const person3 = new Person("Antõnia", 11);

person1.speakMyName = function () {
  console.log(`My name is ${this.nome}`);
};
console.log(person1);

console.log(person1 instanceof Person); // true

// 1. New {} is created
// 2. function is called, this {}
// 3. {} linked to prototype
// 4. function automatically return {}

// Prototypes
console.log(Person.prototype);

Person.prototype.calcBirthYear = function () {
  console.log(2024 - this.age);
};

Person.prototype.species = "Homo Sapiens";

person1.calcBirthYear();
person2.calcBirthYear();
person3.calcBirthYear();

console.log(person1.__proto__ === Person.prototype); // true
console.log(person1);
/*
class Carro {
  constructor(nome, tipo) {
    this.nome = nome;
    if (tipo === 1) {
      this.tipo = "Esportivo";
      this.velocidade = 400;
    } else if (tipo === 2) {
      this.tipo = "Utilitario";
      this.velocidade = 180;
    } else {
      this.tipo = "Militar";
      this.velocidade = 200;
    }
  }

  setNome(nome) {
    this.nome = nome;
  }

  setTipo(tipo) {
    this.tipo = tipo;
  }

  setVel(velMax) {
    this.velocidade = velMax;
  }

  getInfo() {
    return [this.nome, this.tipo, this.velocidade];
  }
}

const c1 = new Carro("Ferrari", 1);
const c2 = new Carro("Corsa", 2);
const c3 = new Carro("Militar");

// c1, c2, c3 são instancias 
// Carro é uma classe 

console.log(c1.getInfo());

c1.setNome("Bugatti");
c1.setTipo("Formula 1");
c1.setVel(700);
console.log(c1.getInfo());
*/

/*
// Alguns exercicios
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  exibirInformacoes() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
  }
}

const creta = new Carro("hyunday", "creta", 2023);
console.log(creta.exibirInformacoes());

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  maiorDeIdade() {
    return this.idade >= 18 ? true : false;
  }
}

const pessoa1 = new Pessoa("Augusto", 19);
const pessos2 = new Pessoa("Antonia", 11);

console.log(pessoa1.maiorDeIdade());
console.log(pessos2.maiorDeIdade());

class Animal {
  constructor(nome) {
    this.nome = nome;
  }
}


class Cachorro extends Animal {
    // Sobrescreve o método fazerSom
    fazerSom() {
        return "Au Au";
    }
}



Animal.prototype.fazerSom = function () {
  if (this.nome === "cachorro") return "Au Au";
  if (this.nome === "Gato") return "Miauu";
};

const myDog = new Animal("cachorro");
console.log(myDog.fazerSom());
*/
