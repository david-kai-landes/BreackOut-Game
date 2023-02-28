const grid = document.querySelector("grid");

// Draw my Block
function addBlocK() {
  const block = document.createElement("div");
  block.classList.add("block");
  block.style.left = "100px";
  block.style.left = "20px";
  grid.appendChild(block);
}
//
addBlocK();
