/**
 * Create a grid of any size
 * This grid has equal rows and columns
 * To change the size of the grid, just change the variable [i] in the columns section
 * Hovering over each grid changes background color
 */

function createGrid(gridSize) {
  const container = document.querySelector(".container");
  // Columns section - Create the number of columns needed for the grid
  for (i = 1; i <= gridSize; i++) {
    let div = document.createElement("div");
    div.classList.add(`col${i}`);
    container.appendChild(div);
  }

  // Rows Section - For each column, make as many rows as there are columns
  const columns = container.querySelectorAll("div");

  // In each column, make as many rows as there are columns
  for (i = 1; i <= columns.length; i++) {
    // Select each column
    let currentColumnDiv = container.querySelector(`.col${i}`);
    console.log(`current column is col: ${i}`);
    for (j = 1; j <= columns.length; j++) {
      // Create as many rows as there are columns
      //   console.log(`current row is row: ${j}`);
      let newRowDiv = document.createElement("div");
      newRowDiv.classList.add(`row${j}`);
      //   console.log(currentColumn);
      currentColumnDiv.appendChild(newRowDiv);
    }
  }
}

createGrid(16);

const columns = document.querySelectorAll(".container > *");
console.log(columns.length);

// Div changes background color upon hover state
for (i = 1; i <= columns.length; i++) {
  currentColumn = document.querySelector(`.col${i}`);
  for (j = 1; j <= columns.length; j++) {
    let currentCell = currentColumn.querySelector(`.row${j}`);
    // Hovering over each div change background color
    currentCell.addEventListener("mouseenter", (e) => {
      console.log(e);
      currentCell.style.background = "#555555";
    });
  }
}

let changeGridSizeBtn = document.querySelector(".changeBtn");

changeGridSizeBtn.addEventListener("click", () => {
  let chooseNumber = true;

  while (chooseNumber) {
    var number = prompt("New Grid Size? num X num - num <= 100");
    if (number <= 100) {
      chooseNumber = false;
    }
  }
  console.log(number);
  console.log(typeof number);
});
