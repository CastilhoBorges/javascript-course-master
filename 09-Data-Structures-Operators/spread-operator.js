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
