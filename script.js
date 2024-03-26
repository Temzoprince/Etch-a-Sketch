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
function changeGridBackground(gridLength, color) {
  for (i = 1; i <= gridLength; i++) {
    currentColumn = document.querySelector(`.col${i}`);
    for (j = 1; j <= gridLength; j++) {
      let currentCell = currentColumn.querySelector(`.row${j}`);
      // Hovering over each div change background color
      currentCell.addEventListener("mouseenter", (e) => {
        console.log(e);
        currentCell.style.background = `${color}`;
      });
    }
  }
}

function changeGridBackgroundRandom(gridLength) {
  for (i = 1; i <= gridLength; i++) {
    currentColumn = document.querySelector(`.col${i}`);
    for (j = 1; j <= gridLength; j++) {
      let currentCell = currentColumn.querySelector(`.row${j}`);
      // Hovering over each div change background color
      currentCell.addEventListener("mouseenter", (e) => {
        console.log(e);

        // Randomizing cell color with hexadecimal
        // const randomColor = Math.floor(Math.random()*16777215).toString(16);
        // currentCell.style.background = `#${randomColor}`;

        // Randomizing cell color with rgb
        const randomR = Math.floor(Math.random()*256).toString();
        const randomG = Math.floor(Math.random()*256).toString();
        const randomB = Math.floor(Math.random()*256).toString();
        currentCell.style.background = `rgb(${randomR}, ${randomG}, ${randomB})`;
      });
    }
  }
}

// columns.length
// #555555
// changeGridBackground(columns.length, "#555555");
changeGridBackground(columns.length, "#555555");


let changeGridSizeBtn = document.querySelector(".changeBtn");

let changeGrid = false;
let number = 0;

changeGridSizeBtn.addEventListener("click", () => {
  let number = prompt("New Grid Size? num X num - num <= 100");
  number = Number(number);

  // remove background color of grid
  const container = document.querySelector(".container");
  let allGridDiv = container.getElementsByTagName("*");
  for (var i = 0; i < allGridDiv.length; i++) {
    allGridDiv[i].removeAttribute("style");
  }

  // remove the grid
  container.replaceChildren()

  // add new grid + hover background effect
  createGrid(number);

  let newColumns = document.querySelectorAll(".container > *")
  // changeGridBackground(newColumns.length, "#555555")
  changeGridBackgroundRandom(newColumns.length)

  console.log("Finished 1");
});