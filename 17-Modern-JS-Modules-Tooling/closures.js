"use strict";

// Closure é uma função que "lembra" do ambiente em que foi criada.
(function main() {
  const closure = function (x) {
    return function (y) {
      return x + y;
    };
  };

  const closure1 = closure(10);
  const closure2 = closure(20);

  console.log(closure1(60));
  console.log(closure2(20));
});

const a = [1, 2];
console.log(a.f);
