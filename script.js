var board = [];

// append child button obache wseki da si ima sobstwen var i, primerno

const div = document.createElement("div")
div.setAttribute("class", "grid")
document.querySelector("body").appendChild(div);

let i = 0

function createBoard() {
    for (let i = 0; i < 9; i++) {
      const button = document.createElement("button");
      button.setAttribute("class", "btn");
    //button.addEventListener("click", clickListener);
      document.querySelector("body").appendChild(button);
      div.appendChild(button)
      board.push('button')
    }
}

window.addEventListener("load", createBoard);


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

