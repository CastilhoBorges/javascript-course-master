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
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
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
*/

console.log(restaurant);
