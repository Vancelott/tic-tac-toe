const board = [];

const container = document.createElement("div");
container.classList = "container"
document.querySelector("body").appendChild(container);

const div = document.createElement("div")
  div.classList = "grid"
  document.querySelector("body").appendChild(div);
  container.appendChild(div)

function playerName(placeholder, clickListener) {
  const wrap = document.createElement("div")
  wrap.classList = "wrap"
  const input = document.createElement("input");
  input.setAttribute("placeholder", placeholder);
  input.classList = "input";
  input.appendChild(submitBtn)
  document.querySelector("body").appendChild(input);
    submitBtn.addEventListener("click", () => {
      const name = input.value;
      clickListener(name);
      input.value = "";
    });
  wrap.appendChild(input);
  wrap.appendChild(submitBtn);
  document.querySelector("body").appendChild(wrap);
  const playerDiv = document.createElement("div");
  playerDiv.classList = "player";
  playerDiv.appendChild(wrap);
  container.appendChild(playerDiv)
  return playerDiv;
};

const submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";
submitBtn.classList = "btn submit";

const restartBtn = document.createElement("button");
restartBtn.textContent = "Restart";
restartBtn.classList = "btn restart players";
document.querySelector("body").appendChild(restartBtn);

restartBtn.addEventListener("click", function(){
  board[0].textContent = ""; board[1].textContent = ""; board[2].textContent = "";
  board[3].textContent = ""; board[4].textContent = ""; board[5].textContent = "";
  board[6].textContent = ""; board[7].textContent = ""; board[8].textContent = ""; 
});

const playersDiv = document.createElement("div");
playersDiv.classList = "players";
container.appendChild(playersDiv)

let playerNames = { X: '', O: '' };

let y = 0

function twoPlayer() {
  const playerX = playerName("Player X name ", (nameX) => {
    playerNames.X = nameX;
  }, submitBtn);
  const playerO = playerName("Player O name", (nameO) => {
    playerNames.O = nameO;
  }, submitBtn);
      playersDiv.appendChild(playerX);
      playersDiv.appendChild(playerO);
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
    button.setAttribute("class", "grid" + y);
    document.querySelector("body").appendChild(button);
    div.appendChild(button);
    board.push(button);
    button.addEventListener("click", function() {
      if (board) {
           if(this.textContent === ""){ 
            this.textContent = nextTurn;
                changeTurn();} 
                setTimeout(function() {
            if (board[0].textContent === "X" && board[1].textContent === "X" && board[2].textContent === "X" || 
            board[3].textContent === "X" && board[4].textContent === "X" && board[5].textContent === "X" ||
            board[6].textContent === "X" && board[7].textContent === "X" && board[8].textContent === "X" ||
            board[0].textContent === "X" && board[4].textContent === "X" && board[8].textContent === "X" ||
            board[2].textContent === "X" && board[4].textContent === "X" && board[6].textContent === "X" ||
            board[0].textContent === "X" && board[3].textContent === "X" && board[6].textContent === "X" ||
            board[1].textContent === "X" && board[4].textContent === "X" && board[7].textContent === "X" ||
            board[2].textContent === "X" && board[5].textContent === "X" && board[8].textContent === "X") {
                if (playerNames.X.length > 0) {
                  alert("Player " + playerNames.X + " won");
                  } else {
                    alert("Player X wins")
                  }
                board[0].textContent = ""; board[1].textContent = ""; board[2].textContent = "";
                board[3].textContent = ""; board[4].textContent = ""; board[5].textContent = "";
                board[6].textContent = ""; board[7].textContent = ""; board[8].textContent = ""; }
                }, 100);
            } if (board[0].textContent === "O" && board[1].textContent === "O" && board[2].textContent === "O" ||
            board[3].textContent === "O" && board[4].textContent === "O" && board[5].textContent === "O" ||
            board[6].textContent === "O" && board[7].textContent === "O" && board[8].textContent === "O" ||
            board[0].textContent === "O" && board[4].textContent === "O" && board[8].textContent === "O" ||
            board[2].textContent === "O" && board[4].textContent === "O" && board[6].textContent === "O" ||
            board[0].textContent === "O" && board[3].textContent === "O" && board[6].textContent === "O" ||
            board[1].textContent === "O" && board[4].textContent === "O" && board[7].textContent === "O" ||
            board[2].textContent === "O" && board[5].textContent === "O" && board[8].textContent === "O") {
              if (playerNames.O.length > 0) {
                alert("Player " + playerNames.O + " wins")
                } else {
                  alert("Player O wins")
                }
                setTimeout(function() {
              board[0].textContent = ""; board[1].textContent = ""; board[2].textContent = "";
              board[3].textContent = ""; board[4].textContent = ""; board[5].textContent = "";
              board[6].textContent = ""; board[7].textContent = ""; board[8].textContent = "";
              }, 100);
                } else if (board[0].textContent !== "" && board[1].textContent !== "" && board[2].textContent !== "" &&
                          board[3].textContent !== "" && board[4].textContent !== "" && board[5].textContent !== "" &&
                          board[6].textContent !== "" && board[7].textContent !== "" && board[8].textContent !== "") {
                            setTimeout(function() {
                      alert("Tie")
                      board[0].textContent = ""; board[1].textContent = ""; board[2].textContent = "";
                      board[3].textContent = ""; board[4].textContent = ""; board[5].textContent = "";
                      board[6].textContent = ""; board[7].textContent = ""; board[8].textContent = "";
                    }, 100);
                     }
    });
    y++;
  }
}

twoPlayer();

// Attempt at keeping track of score, will work on it at a later stage

//   let j = "0"

//   const winnerO = document.createElement("p");
//   document.querySelector("body").appendChild(winnerO);
//   winnerO.textContent = j;

//   variant 1

//   if (j === "0") {
//     winnerO.textContent = "1";
//     j = "1";
//   } else {
//     winnerO.textContent = j;
//     j = parseInt(j) + 1

//   variant 2 

//   if (j === "0") {
//     winnerO.textContent = "1";
//     j = "1";
//   } else {
//     winnerO.textContent = j;
//     j++;