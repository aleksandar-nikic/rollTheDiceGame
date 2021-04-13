'use strict';

let diceImg = document.querySelector('.dice');
diceImg.style.display = 'none';
//
// ................Scores
//
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
let score = document.querySelectorAll('.score');
//
// .................Current scores
//
let current0 = document.querySelector('#current--0');
let current1 = document.querySelector('#current--1');
//
// .................Players
//
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let activePlayer = 0;
//
// .................Buttons
//
const Dice = document.querySelector('.btn--roll');
const Hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
//
// Functions...
//
let current0c = 0;
let current1c = 0;
//
//
score0.textContent = 0;
score1.textContent = 0;
let score0c = 0;
let score1c = 0;
//
//
let dice = 0;
//
let haveWinner = 0;
//
// Function that give a rnd number to a Dice
function rollDice() {
  dice = Math.trunc(Math.random() * 6 + 1);
}
//
// Change current Player
function winner(activePlayer) {
  if (!activePlayer) player0.classList.add('player--winner');
  else player1.classList.add('player--winner');
}
//
//Change ACTIVE Player
function activeP(a) {
  if (a === 0) {
    activePlayer = 1;
    current0.textContent = 0;
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  } else {
    activePlayer = 0;
    current1.textContent = 0;
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
}
//
// On roll the dice click
//
Dice.addEventListener('click', function () {
  //
  // First we check if any of the scores are 100 or more
  //
  if (score[0].textContent >= 100) {
    winner(0);
    haveWinner = 1;
  } else if (score[1].textContent >= 100) {
    winner(1);
    haveWinner = 1;
  }
  // Now we can go to roll a dice
  else {
    rollDice();
    // console.log(`Dice fell on ${dice}`);
    diceImg.src = `dice-${dice}.png`;
    if ((diceImg.style.display = 'none')) diceImg.style.display = 'block';
    // Check if dice is on one and change active player
    if (dice === 1) {
      if (!activePlayer) {
        // console.log(activePlayer);
        activeP(0);
      } else {
        activeP(1);
      }
    }
    //
    // If dice is not one than we can add the dice value to active players current
    //
    else {
      if (!activePlayer) {
        current1c = 0;
        current0c += dice;
        current0.textContent = current0c;
      } else {
        current0c = 0;
        current1c += dice;
        current1.textContent = current1c;
      }
    }
  }
});
//
// When HOLD is clicked
//
Hold.addEventListener('click', function () {
  // console.log('BTN Hold clicked');
  //
  // Checking if there is a winner, if there is no point in hold doing anything
  if (score[0].textContent >= 100) {
    winner(0);
    haveWinner = 1;
  } else if (score[1].textContent >= 100) {
    winner(1);
    haveWinner = 1;
  }

  //
  // Addind current to score , changeing player to
  //
  else {
    if (activePlayer === 0) {
      score0c += current0c;
      score0.textContent = score0c;
      activeP(0);
      current0c = 0;
    } else {
      score1c += current1c;
      score1.textContent = score1c;
      activeP(1);
      current1c = 0;
    }
  }
});
//
//NEW GAME (making all values 0 and player 1(0) an active player)
//
newGame.addEventListener('click', function () {
  current0c = 0;
  current1c = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  score0c = 0;
  score1c = 0;
  dice = 0;
  haveWinner = 0;
  activeP(1);
  diceImg.style.display = 'none';
  activePlayer = 0;
});
