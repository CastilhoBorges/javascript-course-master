let massJohn = 75;
let heightJohn = 1.77;
let massMark = 79;
let heightMark = 1.70;

let BMIJohn = massJohn / (heightJohn * heightJohn);
let BMIMark = massMark / (heightMark * heightMark);

console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI)