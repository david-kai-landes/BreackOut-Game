const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeigth = 20;
const boardWidth = 560;
//
const userStart = [230, 10];
let currentPosition = userStart;
//
const ballStart = [230, 40];
let ballCurrentPosition = ballStart;
//
//Create Block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeigth];
    this.topRight = [xAxis + blockWidth, yAxis];
  }
}
//
//all my blocks
const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
];
//
// Draw all my Blocks
function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.appendChild(block);
  }
}
//
//
addBlocks();
//
//add user
const user = document.createElement("div");
user.classList.add("user");
drawUser();
grid.appendChild(user);
//
// Draw User
function drawUser() {
  user.style.left = currentPosition[0] + "px";
  user.style.bottom = currentPosition[1] + "px";
}
//
//move user
function moveUser(e) {
  switch (e.key) {
    case "ArrowLeft":
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10;
        drawUser();
      }
      break;
    case "ArrowRight":
      if (currentPosition[0] < boardWidth - blockWidth) {
        currentPosition[0] += 10;
        drawUser();
      }
      break;
  }
}
//
document.addEventListener("keydown", moveUser);
//
//add ball
const ball = document.createElement("div");
ball.classList.add("ball"); 
grid.appendChild(ball);
