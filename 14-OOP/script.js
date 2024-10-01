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


class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }

  get age() {
    return 2024 - this.birthYear;
  }

  set fullName(name) {
    this.fullName = name;
  }

  static hey() {
    console.log("Hey");
  }
}

const augusto = new PersonCl("Augusto", 2005);

PersonCl.hey(); // Hey
augusto.hey(); // Error 


// As classes não são Iaçadas
// Classes são first-class citizes
// Todo o codigo dentro das classes é executado em strict mode

// Metodos que estão na função contrutora se chamam metodos estaticos pois não podem ser acessados pelo prototy

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.init("Steven", 2005);
steven.calcAge();
console.log(steven);
*/

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀


class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`The car is ${this.speed} for hour`);
  }

  break() {
    this.speed -= 5;
    console.log(`The car is ${this.speed} for hour`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speedInMi) {
    this.speed = speedInMi * 1.6;
  }
}

const ford = new Car("Ford", 120);
ford.accelerate();
ford.accelerate();
ford.break();
ford.break();
ford.speedUS;
console.log(ford);
ford.speedUS = 10;
console.log(ford);


class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  aopa() {
    console.log("Olá, eu sou o " + this.name);
  }
}

class Professor extends Person {
  materia;

  constructor(name, materia) {
    super(name);
    this.materia = materia;
  }
}

const aristoteles = new Professor("Aristoteles", "Filosofia");

class Aluno extends Person {
  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  falarIdade() {
    console.log(`Eu tenho ${this.#year}`);
  }
}

const augusto = new Aluno("Augusto", 19);
augusto.falarIdade();

class Example {
  publico() {
    this.#privado();
  }

  #privado() {
    console.log("Voce me chamou?");
  }
}

const meuExemplo = new Example();
meuExemplo.publico();
// meuExemplo.#privado(); SyntaxError

class Shape {
  name;
  sides;
  sideLength;

  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimetro() {
    console.log(this.sides * this.sideLength);
  }
}

const quadrado = new Shape("Quadrado", 4, 5);
quadrado.calcPerimetro();

const triangulo = new Shape("Triangulo", 3, 3);
triangulo.calcPerimetro();

class Quadrado extends Shape {
  constructor(sideLength) {
    super("square");
    this.sides = 4;
    this.sideLength = sideLength;
  }

  calcArea() {
    console.log(this.sideLength ** 2);
  }
}

const q1 = new Quadrado(10);
q1.calcArea();
q1.calcPerimetro();


const superHero = {
  squadName: "Super hero squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Super tower",
  active: true,
  members: [
    {
      name: "Molecule Man",
      age: 29,
      secretIdentity: "Dan Jukes",
      powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
    },
    {
      name: "Madame Uppercut",
      age: 39,
      secretIdentity: "Jane Wilson",
      powers: [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes",
      ],
    },
    {
      name: "Eternal Flame",
      age: 1000000,
      secretIdentity: "Unknown",
      powers: [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel",
      ],
    },
  ],
};

console.log(superHero.members[1].powers[1]);
*/

const alo = {
  nome: "Augusto",
};

console.log(typeof alo);
console.log(JSON.stringify(alo));

const jsonAlo = JSON.stringify(alo);
console.log(JSON.parse(jsonAlo));
