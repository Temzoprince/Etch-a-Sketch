const container = document.querySelector('.container')

// 256 elements in 16x16 grid
for (i = 1; i <= 256; i++) {
    let div = document.createElement('div')
    div.classList.add(`div${i}`)
    container.appendChild(div);
}