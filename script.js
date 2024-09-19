const container = document.querySelector('.container');

function random(value){
    return Math.floor(Math.random() * value);
}

for(let i = 0; i < 256; i++){
    const cell = document.createElement('div');
    cell.classList.add('container-cell');
    cell.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

    container.appendChild(cell);
}