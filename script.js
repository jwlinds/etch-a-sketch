const container = document.querySelector('#container');
const reset = document.querySelector('#reset');
const gridItem = document.querySelectorAll('.grid-item');

function setGridSize(size) {
    container.style.gridTemplateColumns = (`repeat(${size}, 1fr)`);
}

function drawGrid(size) {
    let squareSize = Math.pow(size, 2);
    let i = 0;
    while (i < squareSize) {    
        let gridElement = document.createElement('div');
        gridElement.className = 'grid-item';
        gridElement.id = i;
        container.appendChild(gridElement);
        i++;
    }
}

function defaultGrid() {
    setGridSize(16);
    drawGrid(16);
}

function colorGrid(item) {
    item.target.style.backgroundColor = 'black';
}

function rebuildGrid() {
    document.querySelector('#container').removeChild(gridItem);
    let size = prompt('Select a grid size (maximum 100)', '64');
    size = parseInt(size);
    setGridSize(size);
    drawGrid(size);
}

function resetGrid() {
    clearGrid();
    rebuildGrid();
}

function clearGrid() {
    document.querySelectorAll('.grid-item').forEach(item => {
        item.style.backgroundColor = 'pink';
    })
}

defaultGrid();

document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('mouseover', colorGrid)
})

document.querySelector('#reset').addEventListener('click', rebuildGrid);