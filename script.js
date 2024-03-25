const container = document.querySelector('.container')

// 256 elements in 16x16 grid
for (i = 1; i <= 4; i++) {
    let div = document.createElement('div')
    div.classList.add(`col${i}`)
    container.appendChild(div);
}

// For each column, make as many rows as there are columns
const columns = document.querySelectorAll('div')

//for each column
for (i = 1; i < columns.length; i++) {
    let currentDiv = document.querySelector(`.col${i}`)
    console.log(`current column is col: ${i}`)
    for (j = 1; j < columns.length; j++) {
        // create as many divs as there columns
        console.log(`current row is row: ${j}`)
        let div = document.createElement('div')
        div.classList.add(`row${j}`)
        console.log(currentDiv)
        currentDiv.appendChild(div);
    }
    
}