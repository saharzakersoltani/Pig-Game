'use strict';
//  Selecting elements:
const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.querySelector('#score--1');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// to make scores 0 (starting condition)
scoreEl0.textContent = '0';
scoreEl1.textContent = '0';
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;

// click on roll dice button (Rolling dice functionality)
btnRoll.addEventListener('click', function () {
  const randomNum = Math.floor(Math.random() * 6 + 1);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${randomNum}.png`; // LEARN HOW TO INSER IMAGE😍
  console.log(randomNum);

  if (randomNum !== 1) {
    currentScore += randomNum;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = '0';
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; //resign activePlayer by ternery operator.
    playerEl0.classList.toggle('player--active');
    playerEl1.classList.toggle('player--active'); // LEARN TOGGLE😍
  }
});
