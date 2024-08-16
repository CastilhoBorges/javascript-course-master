"use strict";

/*
const createBooking = function (
  fligthNumber,
  passagers = 1,
  price = passagers * 200
) {
  const booking = {
    fligthNumber,
    passagers,
    price,
  };

  console.log(booking);
};
createBooking("LH234");


const flight = "LH234";
const augusto = {
  name: "Augusto",
  cpf: 13772800637,
};

const checkIn = function (fligthNum, passagers) {
  fligthNum = "LH999";
  passagers.name = "Mr." + passagers.name;

  if (passagers.cpf === 13772800637) {
    alert("Check in");
  } else {
    alert("Wrong passport!");
  }
};

//checkIn(flight, augusto);
//console.log(flight);
//console.log(augusto);

const newCpf = function (person) {
  person.cpf = Math.trunc(Math.random() * 10000000000);
};

checkIn(flight, augusto);
newCpf(augusto);
checkIn(flight, augusto);


const oneWord = (str) => str.replace(/ /g, "").toLowerCase();

const upperFirstWord = function (str) {
  const [firstWord, ...others] = str.split(" ");
  return [firstWord.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Trasform String: ${fn(str)}`);
  console.log(`Trasformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

const high5 = () => console.log("👨‍💻");
document.body.addEventListener("click", high5);


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

greet("Hello")("Jonas");
const greeterHey = greet("Hey");
greeterHey("Jonas");

const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);
greet2("Hi")("Castilho!");


const latam = {
  airline: "Latam",
  iatacode: "LT",
  bookings: [],
  book(fligthNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${fligthNum}`
    );
    this.bookings.push({ flight: `${this.iatacode}${fligthNum}`, name });
  },
};

latam.book(256, "Augusto Castilho");
console.log(latam);

const gol = {
  airline: "Gol",
  iatacode: "GL",
  bookings: [],
};

const book = latam.book;

book.call(gol, 256, "Augusto");
console.log(gol); 


// Bind method

const person = {
  nome: "Augusto",
  getName() {
    return this.nome;
  },
};

const person2 = {
  nome: "João",
};

person2.getName = person.getName.bind(person2);
console.log(person2.getName());
*/

// Coding Challenge #1
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

/*
const button = document.querySelector(".poll");
const textInHtml = document.querySelector("h1");

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: Js", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const result = prompt(
      `${this.question}\n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}`
    );

    result < 4 && result !== ""
      ? this.answers[result]++
      : alert("Numero Invalido");

    this.displayResults(this.answers);
  },
  displayResults(arg) {
    textInHtml.textContent = arg;
  },
};

button.addEventListener("click", poll.registerNewAnswer.bind(poll));
*/
/* Challenge Bonus 
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]


// IIFE (Immediately invoked function expressions)

// Normal
const runOnce = function () {
  console.log("This will never run again!");
};
runOnce();

// IIFE
(function () {
  console.log("This will never run again!");
})();

// IIFE in Arrow Functions 
(() => console.log("This will never run again!"))();

{
  const isPrivate = 18288
}
*/

const secureBooking = function () {
  let passangerCount = 0;

  return function () {
    passangerCount++;
    console.log(`${passangerCount} passagers`);
  };
};

const booker = secureBooking();
