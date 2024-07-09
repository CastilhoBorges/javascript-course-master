"use strict";

// Selecting Elements
const player00 = document.querySelector(".player--0");
const player01 = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [score0El, score1El];
let currentScore = 0;
let activePlayer = 0;

// Rolling Functionality
btnRoll.addEventListener("click", function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display
  diceEl.classList.remove("hidden");
  diceEl.src = `img/dice-${dice}.png`;

  // 3. Check for 1 or not
  if (dice !== 1) {
    // Add dice to current Score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player00.classList.toggle("player--active");
    player01.classList.toggle("player--active");
  }
});

btnHold.addEventListener("click", function () {
  if (activePlayer === 0) {
    score0El.textContent = currentScore;
  } else {
    score1El.textContent = currentScore;
  }

  if (score0El.textContent >= 100) {
    current0El.textContent = "Win";
  } else if (score1El.textContent >= 100) {
    current1El.textContent = "Win";
  }
});
