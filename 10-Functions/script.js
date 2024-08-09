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
*/

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