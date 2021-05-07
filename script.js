const container = document.querySelector('#container');
let box;

let size = 16

document.addEventListener('DOMContentLoaded', function(size) {
    let i = 0
    while (i < size) {
        let count = 1
        box = document.createElement('div');
        container.appendChild(box);
        count++;
        i++;
    }
});
