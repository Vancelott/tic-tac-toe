const board = [];

const div = document.createElement("div")
div.setAttribute("class", "grid")
document.querySelector("body").appendChild(div);

const btnX = document.createElement("button")
btnX.setAttribute("class", "btnX");
btnX.textContent= "x"
document.querySelector("body").appendChild(btnX);

const btnO = document.createElement("button")
btnO.setAttribute("class", "btnO");
btnO.textContent= "O"
document.querySelector("body").appendChild(btnO);

let y = 0

// const twoPlayers = document.createElement("button")
// twoPlayers.setAttribute("class", "btn2");
// twoPlayers.textContent= "Two Players"
// document.querySelector("body").appendChild(twoPlayers);

function buttonX() {
  
}

function twoPlayer() {

  const twoPlayers = document.createElement("button")
  twoPlayers.setAttribute("class", "btn2");
  twoPlayers.textContent= "Two Players"
  document.querySelector("body").appendChild(twoPlayers);
  for (let i = 0; i < 9; i++) {
    function changeTurn(){
      if(nextTurn == 'X'){
           nextTurn = 'O';
      } else {
           nextTurn = 'X';
      }
    }
    var nextTurn = 'X'
    const button = document.createElement("button");
    button.setAttribute("class", "btn" + y);
    document.querySelector("body").appendChild(button);
    div.appendChild(button);
    board.push(button);
    button.addEventListener("click", function() {
      if (board) {
           if(this.textContent === ""){ 
            this.textContent = nextTurn;
                changeTurn();
          } if (board[0].textContent === "X" && board[1].textContent === "X" && board[2].textContent === "X" || 
            board[3].textContent === "X" && board[4].textContent === "X" && board[5].textContent === "X" ||
            board[6].textContent === "X" && board[7].textContent === "X" && board[8].textContent === "X" ||
            board[0].textContent === "X" && board[4].textContent === "X" && board[8].textContent === "X" ||
            board[2].textContent === "X" && board[4].textContent === "X" && board[6].textContent === "X" ||
            board[0].textContent === "X" && board[3].textContent === "X" && board[6].textContent === "X" ||
            board[1].textContent === "X" && board[4].textContent === "X" && board[7].textContent === "X" ||
            board[2].textContent === "X" && board[5].textContent === "X" && board[8].textContent === "X") {
              alert("Player X wins");
              board[0].textContent = ""; board[1].textContent = ""; board[2].textContent = "";
              board[3].textContent = ""; board[4].textContent = ""; board[5].textContent = "";
              board[6].textContent = ""; board[7].textContent = ""; board[8].textContent = "";
            } if (board[0].textContent === "O" && board[1].textContent === "O" && board[2].textContent === "O" ||
            board[3].textContent === "O" && board[4].textContent === "O" && board[5].textContent === "O" ||
            board[6].textContent === "O" && board[7].textContent === "O" && board[8].textContent === "O" ||
            board[0].textContent === "O" && board[4].textContent === "O" && board[8].textContent === "O" ||
            board[2].textContent === "O" && board[4].textContent === "O" && board[6].textContent === "O" ||
            board[0].textContent === "O" && board[3].textContent === "O" && board[6].textContent === "O" ||
            board[1].textContent === "O" && board[4].textContent === "O" && board[7].textContent === "O" ||
            board[2].textContent === "O" && board[5].textContent === "O" && board[8].textContent === "O") {
              alert("Player O wins")
              board[0].textContent = ""; board[1].textContent = ""; board[2].textContent = "";
              board[3].textContent = ""; board[4].textContent = ""; board[5].textContent = "";
              board[6].textContent = ""; board[7].textContent = ""; board[8].textContent = "";
            } else if (board[0].textContent !== "" && board[1].textContent !== "" && board[2].textContent !== "" &&
                     board[3].textContent !== "" && board[4].textContent !== "" && board[5].textContent !== "" &&
                     board[6].textContent !== "" && board[7].textContent !== "" && board[8].textContent !== "") {
                alert("Tie")
                board[0].textContent = ""; board[1].textContent = ""; board[2].textContent = "";
                board[3].textContent = ""; board[4].textContent = ""; board[5].textContent = "";
                board[6].textContent = ""; board[7].textContent = ""; board[8].textContent = "";
                     }
    }});
    y++;
  }
}

twoPlayer();

// function createBoard() {
//     // function markBox() {
//     //   button.textContent = "X"
//     // }
//     // const btnX = document.createElement("button");
//     // document.querySelector("body").appendChild(btnX);
//     // btnX.addEventListener("click", markBox)
//     for (let i = 0; i < 9; i++) {
//       const button = document.createElement("button");
//       button.setAttribute("class", "btn" + y);
//     //button.addEventListener("click", clickListener);
//       document.querySelector("body").appendChild(button);
//       div.appendChild(button);
//       board.push(button);
//       btnX.addEventListener("click", function() {
//       button.addEventListener("click", function() {
//         // tuka ako cykne na buton x neka textcontent e x, ako cykne na buton o da e textcontent o
//           button.textContent = "X"
            // if (board[0].textContent === "X" && board[1].textContent === "X" && board[2].textContent === "X" ||
            // board[3].textContent === "X" && board[4].textContent === "X" && board[5].textContent === "X" ||
            // board[6].textContent === "X" && board[7].textContent === "X" && board[8].textContent === "X" ||
            // board[0].textContent === "X" && board[4].textContent === "X" && board[8].textContent === "X" ||
            // board[2].textContent === "X" && board[4].textContent === "X" && board[6].textContent === "X" ||
            // board[0].textContent === "X" && board[3].textContent === "X" && board[6].textContent === "X" ||
            // board[1].textContent === "X" && board[4].textContent === "X" && board[7].textContent === "X" ||
            // board[2].textContent === "X" && board[5].textContent === "X" && board[8].textContent === "X") {
//               alert("You won")
//           } else {
//             // alert("Tie")
//         }})
//       })
//       btnO.addEventListener("click", function() {
//         button.addEventListener("click", function() {
//           button.textContent = "O"
            // if (board[0].textContent === "O" && board[1].textContent === "O" && board[2].textContent === "O" ||
            // board[3].textContent === "O" && board[4].textContent === "O" && board[5].textContent === "O" ||
            // board[6].textContent === "O" && board[7].textContent === "O" && board[8].textContent === "O" ||
            // board[0].textContent === "O" && board[4].textContent === "O" && board[8].textContent === "O" ||
            // board[2].textContent === "O" && board[4].textContent === "O" && board[6].textContent === "O" ||
            // board[0].textContent === "O" && board[3].textContent === "O" && board[6].textContent === "O" ||
            // board[1].textContent === "O" && board[4].textContent === "O" && board[7].textContent === "O" ||
            // board[2].textContent === "O" && board[5].textContent === "O" && board[8].textContent === "O") {
//               alert("You won")
//           } else {
//             // alert("tie")
//           }})
//         })
//       y++;
//       };
// }

// window.addEventListener("load", createBoard);

// function Win() {

// }

// Button X to select the X as your preferred choice

// function symbolChoice() {
//   const btnX = document.createElement("button");
//   document.querySelector("body").appendChild(btnX);
//   btnX
// };

// Math.random - bot player

// function createBox(className, clickListener) {
//     const button = document.createElement("button");
//     button.classList = className;
//     button.addEventListener("click", clickListener);
//     let j = 0
//     for (let j = 0; j < 9; j++)
//     button.setAttribute("class", [j])
//     document.querySelector("body").appendChild(button);
//     return button;
// }

// const createBox = []

// createBox.forEach(num=>{
//     for (let i = 0; i < 9; i++)  {
//         const button = document.createElement("button");
//         button.setAttribute("class", "x")
//         document.querySelector(board).appendChild(button);
//         button.addEventListener("click", clickListener);
// }});

// function createBox(className, clickListener) {
//     const button = document.createElement("button");
//     button.classList = className;
//     button.addEventListener("click", clickListener);
//     document.querySelector("body").appendChild(button);
//     return button;
// }

// const createBoard = createBox("box", () => {
//     for (let i = 0; i < 0; i++) {
//         createBoard.appendChild(createBox);
//     }

