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
*/

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
