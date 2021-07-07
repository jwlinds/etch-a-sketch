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
        gridElement.id = `grid${i}`;
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
            let color = `rgba(${ red },${ green },${ blue }, 1)`;
            event.target.style.backgroundColor = color;
        })
    })
}

function gradientGrid() {
    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('mouseover',event => {
            let opaque = event.target.getComputedStyle()

            event.target.style.backgroundColor = `rgba(0, 0, 0, ${0.1 + currentOpacity})`
        })
    })
}

defaultGrid();

let css = window.getComputedStyle(document.getElementById('grid0'));
let background = css.getPropertyValue('background-color');
console.log(background);

document.querySelector('#reset').addEventListener('click', rebuildGrid);