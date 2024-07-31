"use strict";

/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: "cruzeiro",
  team2: "real madrid",
  players: [
    [
      "Cassio",
      "William",
      "Zé Ivaldo",
      "João Marcelo",
      "Kayke",
      "Romero",
      "Matheus Henrrique",
      "Matheus Pereira",
      "Lautaro Dias",
      "Kaique Jorge",
      "Barreal",
    ],
    [
      "Courtouis",
      "Carvajal",
      "Nacho",
      "Militão",
      "Mendy",
      "Camavinga",
      "Tony Kross",
      "Modric",
      "Vini Jr",
      "Mbappe",
      "Rodrygo",
    ],
  ],
  score: "1:3",
  scored: ["Barreal", "Vini Jr", "Vini Jr", "Mbapper"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 6.5,
    x: 3.25,
    team2: 1.5,
  },
};

const [players1, players2] = game.players;
// console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

const players1Final = [...players1, "Arthur Gomes", "Villalba", "Lucas Silva"];
// console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log(team1, draw, team2);

const printGoals = function (...player) {
  console.log(player);
  console.log(`${player.length} goals`);
};

// printGoals(...game.scored);

// team1 < team2 && console.log("Team 1 is more likely to win");
// team1 > team2 && console.log("Team 2 is more likely to win");

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// 1.
for (const [i, player] of game.scored.entries()) {
  // console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
// console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  // console.log(`Odd of ${teamStr}: ${odd}`);
}

///////////////////////////////
let ao = [1, 2, 3, 4];
for (const [index, value] of Object.entries(ao)) {
  console.log(`Index atual: ${index}, Valor atual: ${value}`);
}


