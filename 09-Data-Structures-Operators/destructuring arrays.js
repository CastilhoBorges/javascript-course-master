"use strict";

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
