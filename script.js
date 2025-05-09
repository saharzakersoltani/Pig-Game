'use strict';
//  Selecting elements:
const scoreEl = document.querySelectorAll('.score');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// to make scores 0 (starting condition)
for (let i = 0; i < scoreEl.length; i++) {
  scoreEl[i].textContent = 0;
}

// to make the dice hidden (strting conditions)
diceEl.classList.add('hidden');

// click on roll dice button (Rolling dice functionality)
let diceElImage = document.createElement('diceEl');

btnRoll.addEventListener('click', function () {
  const randomNum = Math.floor(Math.random() * 6 + 1);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${randomNum}.png`;
  console.log(randomNum);

  /*
  // The second way to show dice image based on the rolling 😐
  switch (randomNum) {
    case 1:
      console.log(randomNum);
      diceElImage;
      diceEl.src = 'dice-1.png';
    case 2:
      console.log(randomNum);
      diceElImage;
      diceEl.src = 'dice-2.png';
      break;
    case 3:
      console.log(randomNum);
      diceElImage;
      diceEl.src = 'dice-3.png';
      break;
    case 4:
      console.log(randomNum);
      diceElImage;
      diceEl.src = 'dice-4.png';
      break;
    case 5:
      console.log(randomNum);
      diceElImage;
      diceEl.src = 'dice-5.png';
      break;
    case 6:
      console.log(randomNum);
      diceElImage;
      diceEl.src = 'dice-6.png';
      break;
  }*/
});
