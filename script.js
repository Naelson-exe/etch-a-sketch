const container = document.querySelector('.container');
const reset = document.querySelector('.reset');
const dim = document.querySelector('.dim');

function random(value) {
    return Math.floor(Math.random() * value);
}

function createGrids(size) {
    container.innerHTML = '';  // Clear previous grid
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.style.height = `${600 / size}px`;
        cell.style.flexBasis = `${600 / size}px`;
        cell.classList.add('container-cell');
        container.appendChild(cell);

        // Add mouseover event to change color and increase opacity
        cell.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

            // Parse current opacity and increment it
            let currentOpacity = parseFloat(event.target.style.opacity) || 0;
            if (currentOpacity < 1) {
                event.target.style.opacity = currentOpacity + 0.1;
            }
        });
    }
}

createGrids(16);  // Initial grid setup

dim.addEventListener('click', () => {
    let ans = prompt('Enter your dimension', 16);
    if (ans) {
        ans = parseInt(ans, 10);  // Convert input to integer
        if (ans > 0 && ans <= 100) {  
            createGrids(ans);
        } else {
            alert('Please enter a number between 1 and 100');
        }
    }
});

// Reset button functionality
reset.addEventListener('click', () => {
    const cells = document.querySelectorAll('.container-cell');
    cells.forEach(cell => {
        // Reset the background color and opacity for each cell
        cell.style.backgroundColor = 'aqua';
        cell.style.opacity = '0';
    });
});