"use strict";

const Person = function (name, age, birthActual) {
  this.nome = name;
  this.age = age;

  this.calcBirthYear = function () {
    console.log(birthActual - age);
  };
};

const person1 = new Person("Augusto", 19, 2024);
console.log(person1);

person1.speakMyName = function () {
  console.log(`My name is ${this.nome}`);
};
console.log(person1);

console.log(person1 instanceof Person); // true

person1.calcBirthYear(); // 2005

// 1. New {} is created
// 2. function is called, this {}
// 3. {} linked to prototype
// 4. function automatically return {}
