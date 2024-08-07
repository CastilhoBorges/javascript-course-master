"use strict";
/*
const restaurant = {
  name: "Guto Mia",
  lacation: "Av Maraba, 51555",
  categories: ["Brazilian", "Veg", "Pizzas"],
  starterMenu: ["Focaccia", "Hamburguers", "salad"],
  mainMenu: ["Pizza", "Risoto", "Hamb Veg"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z); // 1 2 3
console.log(arr); // [1, 2, 3]

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching Variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mains] = restaurant.order(2, 0);
console.log(starter, mains);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p = 1, q = 2, r = 4] = [8];
console.log(p, q, r);
*/

//////////////////////////////////////////////////
/*const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 22,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Guto Mia",
  lacation: "Av Maraba, 51555",
  categories: ["Brazilian", "Veg", "Pizzas"],
  starterMenu: ["Focaccia", "Hamburguers", "salad"],
  mainMenu: ["Pizza", "Risoto", "Hamb Veg"],

  // ES6 enhaced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = 0,
    mainIndex = 0,
    time = "20:00",
    address = "Avenida...",
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be devlevery to ${address} at ${time}`
    );
  },
};
*/
/*restaurant.orderDelivery(0, 2, );

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutations Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
// console.log(a, b, obj.c);

// Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);


// for-of in for-in loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Maneira tradicional de for loop
for (let i = 0; i < menu.length; i++) console.log(menu[i]);

// for-in
for (const n in menu) {
  console.log(menu[n]);
}
// No in o n neste caso vai ter como valor a posição de cada elemento no array

// for-of
for (const n of menu) {
  console.log(n);
}
// No of o n vai ter como valor, o valor de cada elemento do array

// O loop for usamos para pecorrer arrays, o for normal é muito complexo comparado ao for-of e for-in


//////// Looping Objects /////////

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entries object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}


const person = {
  nome: "Agu",
  idade: 19,
  Amigos: ["jorge", "pedro"],
};

let values = Object.entries(person.Amigos);
console.log(values);



//////////////// SETS ////////////////////////

const arr = [];
const setTest = new Set(["Pizza", "Pizza", "Sanduiche", "Torta"]);

for (const setCount of setTest) arr.unshift(setCount);

console.log(setTest);
console.log(arr);

const staff = ["Waiter", "Chef", "Waiter", "Chef"];
const staffUnique = [...new Set(staff)];

console.log(staffUnique);
console.log(new Set('AugustoCastilhoBorges').size);

console.log(setTest.add('arroz'));


////////// MAPS //////////

const rest = new Map();

rest
  .set("nome", "Augusto")
  .set("age", 19)
  .set(true, "TrueBrow")
  .set(false, "FalseBrow");

console.log(rest);

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct!😁"],
  [false, "Try again!"],
]);

console.log(question);

// Convert Objetos em Maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get("question"));
for (const [key, values] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${values}`);
}
const answer = 4;
console.log(question.get(answer === 3));

// Convert Map to Array
console.log([...question]);


//////////// STRINGS //////////////

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log("B736"[0]);

console.log(airline.length);
console.log("B736".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

// Slice Method
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.indexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log(`You got the middle seat`);
  } else {
    console.log(`You got luck`);
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23c");
checkMiddleSeat("3E");

console.log(new String("jonas"));
console.log(typeof new String("jonas"));


// Métodos de Strings

const myName = new String("Augusto");
const myLastName = new String("Castilho");

console.log(myName);

console.log(myName.charAt(5));

console.log(myName.concat(" " + myLastName));

console.log(myName.indexOf("u"));

console.log(myName.lastIndexOf("u"));

console.log(myName.slice(1, 4));

console.log(myName.toLowerCase()); // Minusculo
console.log(myName.toUpperCase()); // Maisculo

// Exemplo pratico toLower and toUpper
const passager = "aUgUstO";
// Queremos que este nome fique com a primeira maiuscula e o resto minuscula
const passagerLower = passager.toLowerCase();
const passagerCorrect = passagerLower[0].toUpperCase() + passagerLower.slice(1);
console.log(passagerCorrect);

// Função para faciliar
const passagerCorrectName = function (passager) {
  passager = passager.toLowerCase();
  return passager[0].toUpperCase() + passager.slice(1);
};
console.log(passagerCorrectName("aUgUstO"));

// Comparing emails
const email = "augusto@gmail.com";
const loginEmail = "  augusto@gmail.com  ";

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail, email === normalizedEmail);

// replacing
const BRcifre = "R$";
const priceUS = "$288,97";
let priceBR = priceUS.replace("$", "R$");
console.log(priceBR);
// OR
priceBR = priceUS.replace(priceUS[0], "R$");
console.log(priceBR);
// OR
priceBR = priceUS.replace(priceUS[0], BRcifre);
console.log(priceBR);

// Podemos tambem substituir palavras inteira de uma string
const newFrase = "Ohhhh more money!";
console.log(priceBR.replace(",97", ", " + newFrase));

// Podemos usar expessões regulares para mudar todas as palavras com o mesmo nome em uma frase
const fraseNew = "Ai meu deus, meu amigo e meu irmão";
console.log(fraseNew.replace(/meu/g, "era"));
// Podemos usar includes em strings tambem

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("key") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome on board! Good Fly");
  }
};

checkBaggage("I have a notebook, a Key, a Shirt and a phone");
checkBaggage("Snaks, hat");


// Split e Join
console.log("i,love,you,baby".split(","));
// console.log("Augusto Castilho");

const [firstName, lastName] = "Augusto Castilho".split(" ");
console.log(firstName, lastName);

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const upperNames = [];

  for (const n of names) {
    upperNames.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(upperNames.join(" "));
};

capitalizeName("augusto castilho borges");

// Padding
let message = "Go to gate 23!";
console.log(message.length);
message = message.padStart(40, "+");
console.log(message.length, message);

const maskCreditCard = function (number) {
  const str = number + "";
  const lastNumbers = str.slice(-4);
  console.log(lastNumbers.padStart(str.length, "*"));
};

maskCreditCard(5502095495128243);

// Repeat
const message2 = "O tempo esta ruim... Todos os portões fechados";
console.log(message2.repeat(1));
///////////////////////////////////////////////////////////

Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀


document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", () => {
  const infos = document.querySelector("textarea").value;
  const arrInfos = infos.split("\n");
  const arrNew = [];

  for (const [index, i] of arrInfos.entries()) {
    const [first, second] = i.trim().toLowerCase().split("_");
    const outPut = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    console.log(`${outPut.padEnd(20)}${"✅".repeat(index + 1)}`);
  }
});
*/
// String Methods Practice
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {

  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""} ${type.replaceAll(
    "_",
    ""
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);

  console.log(output);
}
