const buttonOne = document.querySelector("#button1");
const buttonTwo = document.querySelector("#button2");
const reset = document.querySelector("#reset");

const score1 = document.querySelector("#player1");
const score2 = document.querySelector("#player2");

let player1Score = 0;
let player2Score = 0;
let isGameOver = false;

const selector = document.querySelector("#howMuch");
let winningScore = 3;

selector.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  score1.innerHTML = 0;
  score2.innerHTML = 0;
  score1.style.color = "black";
  score2.style.color = "black";
  isGameOver = false;
  player1Score = 0;
  player2Score = 0;
});

buttonOne.addEventListener("click", () => {
  if (!isGameOver) {
    score1.innerHTML = ++player1Score;
    if (score1.innerHTML == winningScore) {
      score1.style.color = "green";
      score2.style.color = "red";
      isGameOver = true;
    }
    if (player1Score == player2Score) {
      winningScore++;
    }
  }
});

buttonTwo.addEventListener("click", () => {
  if (!isGameOver) {
    score2.innerHTML = ++player2Score;
    if (score2.innerHTML == winningScore) {
      score1.style.color = "red";
      score2.style.color = "green";
      isGameOver = true;
    }
    if (player1Score == player2Score) {
      winningScore++;
    }
  }
});

reset.addEventListener("click", () => {
  score1.innerHTML = 0;
  score2.innerHTML = 0;
  score1.style.color = "black";
  score2.style.color = "black";
  isGameOver = false;
  player1Score = 0;
  player2Score = 0;
  winningScore = 3;
});
