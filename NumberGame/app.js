const inputNumber = document.getElementById("inputNumber");
const btnPlay = document.getElementById("btnPlay");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const roles = document.getElementById("roles");

function rolesOne() {
  roles.textContent =
    "This is a game the roles and you can enter number 1 to 100!";
}

function numberGame() {
  let computerChoice = Math.random() * 100;
  let userChoice = parseFloat(inputNumber.value);

  if (computerChoice > userChoice) {
    result.textContent = "💻 Computer Won!";
  } else if (userChoice > computerChoice) {
    result.textContent = "🫵 You Won!";
  }
  else if(inputNumber.value == ""){
    result.textContent = "❌ You don't enter a number";
  }
  else {
    result.textContent = "📍 You are Draw!";
  }
}

function reStart() {
  roles.textContent = "Roles📇";
  inputNumber.value = "";
  result.textContent = "Result";
}

roles.addEventListener("click", rolesOne);
restart.addEventListener("click", reStart);
btnPlay.addEventListener("click", numberGame);
