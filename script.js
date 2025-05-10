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

// starting condition
let currentScore;
let activePlayer;
let scores;
let playing;

const starting = function () {
  // these four values are scoped in this starting function. so we should first declare them outside of the starting function without any value and then just reasign it inside the function
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;
  diceEl.classList.add('hidden');
  playerEl0.classList.add('player--active');
  playerEl1.classList.remove('player--active');
  playerEl0.classList.remove('player--winner');
  playerEl1.classList.remove('player--winner');
};
starting();

// switching player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = '0';
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //resign activePlayer by ternery operator.
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active'); // LEARN TOGGLE😍
};

// click on roll dice button (Rolling dice functionality)
btnRoll.addEventListener('click', function () {
  if (playing) {
    const randomNum = Math.floor(Math.random() * 6 + 1);
    diceEl.classList.remove('hidden');
    diceEl.src = `images/dice-${randomNum}.png`; // LEARN HOW TO INSERT IMAGE😍
    console.log(randomNum);

    if (randomNum !== 1) {
      currentScore += randomNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// click on hold button (Holding button functionality)
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 50) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

// click on new game button (new game button functionality)
btnNew.addEventListener('click', starting);

/*
// it's equal to line two upper line...
btnNew.addEventListener('click', function(){
  starting()
})
*/
