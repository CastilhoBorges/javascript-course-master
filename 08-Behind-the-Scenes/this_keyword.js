"use strict";

// This no global
console.log(this);

// This em uma arrow function
const calcAge = (year) => {
  // Ela usa a this keyword do seu pai, ou seja o global scope
  console.log(2024 - year);
  console.log(this);
};
calcAge(2005);

// This em uma function
const calcMulti = function (a, b) {
  console.log(a * b);
  console.log(this);
  const calc = (a, b) => console.log(this);
  calc(5, 5);
};
calcMulti(5, 5);

// This no método
const augusto = {
  year: 2005,
  calcAge: function () {
    console.log(2024 - this.year);
  },
};

augusto.calcAge();
