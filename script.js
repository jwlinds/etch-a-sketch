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
    colorGrid();
}

function rebuildGrid() {
    let size = prompt('Select a grid size (maximum 100)', '64');
    if (size === null) {
        return;
    }
    size = parseInt(size);
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    setGridSize(size);
    drawGrid(size);
    randomGrid();
}

function resetGrid() {
    rebuildGrid();
}

function colorGrid() {
    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = 'black';
        })
    })
}

function randomGrid() {
    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('mouseover', event => {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            let color = `rgb(${ red },${ green },${ blue })`;
            event.target.style.backgroundColor = color;
        })
    })
}

function gradientGrid() {
    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('mouseover',event => {
            let currentOpacity = 
            event.target.style.backgroundColor = `rgba(0, 0, 0, ${0.1 + currentOpacity})`
        })
    })
}

defaultGrid();

document.querySelector('#reset').addEventListener('click', rebuildGrid);