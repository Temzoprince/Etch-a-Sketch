const container = document.querySelector('.container')

/**
 * Create a grid of any size
 * This grid has equal rows and columns
 * To change the size of the grid, just change the variable [i] in the columns section
 */

// Columns section - Create the number of columns needed for the grid
for (i = 1; i <= 16; i++) {
    let div = document.createElement('div')
    div.classList.add(`col${i}`)
    container.appendChild(div);
}

// Rows Section - For each column, make as many rows as there are columns
const columns = document.querySelectorAll('div')

// In each column, make as many rows as there are columns
for (i = 1; i < columns.length; i++) {
    // Select each column
    let currentDiv = document.querySelector(`.col${i}`)
    console.log(`current column is col: ${i}`)
    for (j = 1; j < columns.length; j++) {
        // Create as many rows as there are columns
        console.log(`current row is row: ${j}`)
        let div = document.createElement('div')
        div.classList.add(`row${j}`)
        console.log(currentDiv)
        currentDiv.appendChild(div);
    }
    
}