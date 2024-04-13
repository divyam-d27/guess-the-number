let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// elements
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const inputEl = document.querySelector(".guess");
const numBox = document.querySelector(".number");

// display message
const displayMessage = (message) =>
  (document.querySelector(".message").textContent = message);

// updating score
const scoreUpdate = (score) =>
  (document.querySelector(".score").textContent = score);

checkBtn.addEventListener("click", () => {
  const guess = Number(inputEl.value);

  if (!guess) {
    displayMessage("❌Invalid Input !!");
    inputEl.value = "";
  } else if (guess === secretNumber) {
    displayMessage("✅Correct Answer!🤩");
    numBox.textContent = secretNumber;
    numBox.style.borderRadius = "50%";
    document.querySelector("body").style.backgroundColor = "#60b347";
    inputEl.value = "";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > 20) {
    displayMessage("Choose a number between 1 to 20‼️");
    inputEl.value = "";
  } else if (guess !== secretNumber) {
    inputEl.value = "";

    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      scoreUpdate(score);
    } else {
      displayMessage("🤣 You Lost the Game!");
      scoreUpdate(0);
    }
  }
});

againBtn.addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  scoreUpdate(score);
  numBox.textContent = "?";
  inputEl.value = "";
  document.querySelector("body").style.backgroundColor = "black";
  numBox.style.borderRadius = "0%";
});
