// Assign all elements on
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
// Selects all the buttons
const possibleChoices = document.querySelectorAll("input");

// People playing
let userChoice;
let computerChoice;
let result;

// Event Listener Function
clickEffect = (event) => {
  userChoice = event.target.id;
  userChoiceDisplay.innerHTML =
    userChoice.charAt(0).toUpperCase() + userChoice.substring(1);
  generateComputerChoice();
  getResult();
};

// Clicking Action
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", clickEffect)
);

function generateComputerChoice() {
  const randomNum = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNum === 1) {
    computerChoice = "Rock";
  }
  if (randomNum === 2) {
    computerChoice = "Paper";
  }
  if (randomNum === 3) {
    computerChoice = "Scissors";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

// Result Logic
function getResult() {
  if (computerChoice === "Rock" && userChoice === "Paper") {
    result = "You Win!";
  } else if (computerChoice === "Rock" && userChoice === "Scissors") {
    result = "You Lost!";
  } else if (computerChoice === "Paper" && userChoice === "Scissors") {
    result = "You Win!";
  } else if (computerChoice === "Paper" && userChoice === "Rock") {
    result = "You Lost!";
  } else if (computerChoice === "Scissors" && userChoice === "Rock") {
    result = "You Win!";
  } else if (computerChoice === "Scissors" && userChoice === "Paper") {
    result = "You Lost!";
  } else {
    result = "It's a Draw!";
  }
  resultDisplay.innerHTML = result;
}
