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
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
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
*/

const myName = new String("Augusto");
const myLastName = new String("Castilho");

console.log(myName);

console.log(myName.charAt(5)); 

console.log(myName.concat(' ' + myLastName));  

console.log(myName.indexOf('u')); 

console.log(myName.lastIndexOf('u')); 
