"use strict";

/*
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

const h1 = document.querySelector("h1");
console.dir(h1)
*/

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

// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀


const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`The car is ${this.speed} for hour`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`The car is ${this.speed} for hour`);
};

Car.prototype.verifyFast = function () {
  const type = this.speed > 200 ? "Sport" : "Comun";
  this.type = type;
};

const bmw = new Car("BMW", 200);
const mercedes = new Car("Mercedes", 190);

console.log(bmw); // {make: 'BMW', speed: 200}
console.log(mercedes); // {make: 'Mercedes', speed: 190}

for (let i = 1; i < 5; i++) bmw.accelerate();
for (let i = 1; i < 8; i++) bmw.brake();
console.log(bmw); // {make: 'BMW', speed: 205}

for (let i = 1; i < 20; i++) mercedes.brake();
for (let i = 1; i < 35; i++) mercedes.accelerate();
console.log(mercedes); // {make: 'Mercedes', speed: 435}

bmw.verifyFast();
mercedes.verifyFast();

const corsa = new Car("Corsa", 120);
corsa.verifyFast();

console.log(bmw); // {make: 'BMW', speed: 205, type: 'Sport'}
console.log(mercedes); // {make: 'Mercedes', speed: 435, type: 'Sport'}
console.log(corsa); // {make: 'Corsa', speed: 120, type: 'Comun'}
*/

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }
}

const augusto = new PersonCl("Augusto", 2005);
console.log(augusto);
augusto.calcAge();
// As classes não são Iaçadas
// Classes são first-class citizes
// Todo o codigo dentro das classes é executado em strict mode
