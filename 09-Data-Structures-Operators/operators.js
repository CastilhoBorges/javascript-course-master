const restaurant = {
  name: "Guto Mia",
  lacation: "Av Maraba, 51555",
  categories: ["Brazilian", "Veg", "Pizzas"],
  starterMenu: ["Focaccia", "Hamburguers", "salad"],
  mainMenu: ["Pizza", "Risoto", "Hamb Veg"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 22,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = "20:00",
    address = "Avenida...",
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be devlevery to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicuous ${ing1} and ${ing2} and ${ing3}`);
  },
};
/*
/////////// SPREAD OPERATOR /////////////////////////

const array = [7, 8, 9];
const badNewArr = [1, 2, array[0], array[1], array[2]];
// console.log(badNewArr);

const newArr = [1, 2, ...array];
// console.log(newArr);

// console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "GNOCCI"];
// console.log(newMenu);

// Copy Array
const mainMenu = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Interables: Arrays, strings, maps, sets. NOT objects
const str = "Jonas";
const letters = [...str, "", "S."];
// console.log(letters);
// console.log(...str);

const ingredients = ["farinha", "oleo", "ovo"];

restaurant.orderPasta(...ingredients);

// A partir do ES18 o js começou a trabalhar nos objetos
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Tomato" };
// console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

let a = [1234];
let b = [...a];
b.shift();
console.log(b);


////////////// REST OPERATOR ///////////////////////

// Usamos o spread operator, porem usamos em vez de usar ele em valores que são separados por virgula, usamos em variaveis separadas por virugula para pegar o resto dos valores

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [ 3, 4, 5 ]

function add(first, ...others) {
  console.log(first);
  console.log(others);
  const arr = [];
  arr.push(others, first);
  console.log(arr);
}
add(1, 2, 3, 4, 5); // 1
// [2, 3, 4, 5]

////////////// OR AND operators ///////////////////////

const trueOrFalse = 0 || "yes";
console.log(trueOrFalse); // retorna o segundo pois o OR entra em circuito quando encontra o verdadeiro, caso todos sejam falsos ele retorna o ultimo elemento do circuito 

const falseOrTrue = 0 && "yes";
console.log(falseOrTrue); // retorna o primeiro pois o AND entra em circuito quando passa pelo falso, caso todos sejam verdadeiros ele retorna o ultimo elemento do circuito 


//////////// The Nullish Coalescing Operator ///////////////

restaurant.numGuests = null;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

///////////// Logical Assignment Operators ////////////////

const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "Giulio",
  owner: "Castilho Borges",
};

// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
//rest1.numGuests ??= 30;
//rest2.numGuests ??= 10;
// console.log(rest1);
//console.log(rest2);

rest1.owner &&= "<AAAA>";
rest2.owner &&= "<AAAA>";
console.log(rest1);
console.log(rest2);
