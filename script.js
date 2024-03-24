"use strict";
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0"); // Normal way of selecing ID
const score1El = document.getElementById("score--1"); // new way to select ID (getElementById)
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
//starting conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');
// const scores = [0, 0]; //final scores for Player 0 & Player 1
// let currentScore = 0; //Player0
// let activePlayer = 0; //player1
// let playing = true;
let scores, currentScore, activePlayer, playing;
const init = function () {
  scores = [0, 0]; //final scores for Player 0 & Player 1
  currentScore = 0; //Player0
  activePlayer = 0; //player1
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//1.Generating a randon dice roll using --> Math.random()
//2.Display dice
//3.Check for rolled dice
btnRoll.addEventListener("click", function () {
  if (playing) {
    //1.Generating a randon dice roll using --> Math.random()
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);
    //2.On click display hidden image && IMAGE vale should change as per the dice rolled (1 to 6)
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    //3.Check for rolled dice
    if (dice !== 1) {
      currentScore += dice; //currentScore = currentScore + 1;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore;
    } else {
      //Switch Player
      //     document.getElementById(`current--${activePlayer}`).textContent = 0;
      //     currentScore = 0;
      //     activePlayer = activePlayer === 0 ? 1 : 0;
      //     player0El.classList.toggle('player--active');
      //     player1El.classList.toggle('player--active');
      //   }
      // });
      switchPlayer();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    //1.Add current score to the active player when we hit 'Hold' button
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2.check if player's score is >=100 and FINISH THE GAME
    if (scores[activePlayer] >= 40) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
    //Switch player
  }
});
btnNew.addEventListener("click", init);

// score0El.textContent = 0;
// score1El.textContent = 0;
// current0El.textContent = 0;
// current1El.textContent = 0;
// player0El.classList.remove('player--winner');
// player1El.classList.remove('player--winner');
// player0El.classList.add('player--active');
// player1El.classList.remove('player--active');

// diceEl.classList.remove('hidden');
