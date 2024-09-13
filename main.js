let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#set");
let newGameBtn = document.querySelector("#setting");
let MsgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true; // playerX playerO
const winPatterns = [
   [0, 3, 6],
   [0, 4, 8],
   [0, 1, 2],
   [1, 4, 7],
   [2, 5, 8],
   [2, 4, 6],
   [3, 4, 5],
   [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") { // Prevent overriding a box
      if (turnX) {
        box.innerText = "X";
        turnX = false;
      } else {
        box.innerText = "O";
        turnX = true;
      }
      box.disabled = true;
      checkWinner();
    }
  });
});

const resetGame = () => {
  turnX = true;
  enableBoxes();
  MsgContainer.classList.add("hide");
}

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, the winner is ${winner}`;
  MsgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        
        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
