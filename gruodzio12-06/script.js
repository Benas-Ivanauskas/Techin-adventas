'use strict';

function pickComputerMove() {
  const randomNumber = Math.random();
  let myComputer = '';

  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    myComputer = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
    myComputer = 'Paper';
  } else if (randomNumber >= 2 / 3 && randomNumber <= 3 / 3) {
    myComputer = 'Scissors';
  }
  return myComputer;
}
console.log(pickComputerMove());

document.querySelector('.rock').addEventListener('click', function () {
  const playerMove = prompt('Choose your weapon: Rock, Paper, or Scissors');

  if (playerMove) {
    const lowerCasePlayerMove = playerMove.toLowerCase();
    const myComputer = pickComputerMove();
    let result = '';

    if (lowerCasePlayerMove === 'rock') {
      if (myComputer === 'Rock') {
        result = 'Tie';
      } else if (myComputer === 'Paper') {
        result = 'You lose';
      } else if (myComputer === 'Scissors') {
        result = 'You win';
      }
    } else if (lowerCasePlayerMove === 'paper') {
      if (myComputer === 'Rock') {
        result = 'You win';
      } else if (myComputer === 'Paper') {
        result = 'Tie';
      } else if (myComputer === 'Scissors') {
        result = 'You lose';
      }
    } else if (lowerCasePlayerMove === 'scissors') {
      if (myComputer === 'Rock') {
        result = 'You lose';
      } else if (myComputer === 'Paper') {
        result = 'You win';
      } else if (myComputer === 'Scissors') {
        result = 'Tie';
      }
    } else {
      alert('Invalid move. Please enter Rock, Paper, or Scissors.');
      return;
    }

    alert(
      `You picked ${lowerCasePlayerMove}, Computer picked ${myComputer} move. Result is ${result}`
    );
  } else {
    alert('Invalid move. Please enter Rock, Paper, or Scissors.');
  }
});
