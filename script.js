const container = document.querySelector('#container');
const reset = document.querySelector('#reset');

function setGridSize(size) {
    container.style.gridTemplateColumns = (`repeat(${size}, 1fr)`);
}

function drawGrid(size) {
    let squareSize = Math.pow(size, 2);
    let i = 0;
    while (i < squareSize) {    
        let gridElement = document.createElement('div');
        gridElement.className = 'grid-item';
        container.appendChild(gridElement);
        i++;
    }
}

function defaultGrid() {
    setGridSize(16);
    drawGrid(16);
}
defaultGrid();
console.log(container);