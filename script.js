let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-game");
let newgame = document.querySelector("#new-game");
let winner1 = document.querySelector("#winner");
let msgcontainer = document.querySelector(".msg-container");
let gamebox=document.querySelector(".game-box")
let turn0 = true; //playerx, playery

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame =()=>{
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
    gamebox.classList.remove("hide")
}


 

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0 == true) {
      box.innerText = "X";
      turn0 = false;
    } else {
      box.innerText = "O";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});



const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};


const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText="";
  }
};


const showwinner = (winner) => {
  winner1.innerText = `Congratulations, Winner is ${winner} `;
  msgcontainer.classList.remove("hide");
  };


const checkWinner = () => {
  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        console.log("winner", pos1val);
        disableBoxes();
        showwinner(pos1val);
      }
    }
  }
};

resetBtn.addEventListener("click",resetGame);

newgame.addEventListener("click",resetGame);
