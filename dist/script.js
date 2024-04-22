// script.js

// Initialize game grid
const gridElement = document.getElementById('grid');
let grid = [];
for (let i = 0; i < 4; i++) {
    let row = [];
    for (let j = 0; j < 4; j++) {
        row.push(0);
        const cell = document.createElement('div');
        cell.className = 'cell';
        gridElement.appendChild(cell);
    }
    grid.push(row);
}

// Helper function to update grid display
function updateGrid() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const cell = gridElement.children[i * 4 + j];
            cell.textContent = grid[i][j] === 0 ? '' : grid[i][j];
            cell.style.backgroundColor = getColor(grid[i][j]);
        }
    }
}

// Helper function to get color for cell based on value
function getColor(value) {
    switch (value) {
        case 2: return '#eee4da';
        case 4: return '#ede0c8';
        case 8: return '#f2b179';
        case 16: return '#f59563';
        case 32: return '#f67c5f';
        case 64: return '#f65e3b';
        case 128: return '#edcf72';
        case 256: return '#edcc61';
        case 512: return '#edc850';
        case 1024: return '#edc53f';
        case 2048: return '#edc22e';
        default: return '#ccc0b3';
    }
}

// Start the game
function startGame() {
    addRandom();
    addRandom();
    updateGrid();
}

// Add a random number (2 or 4) to an empty cell
function addRandom() {
    const emptyCells = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 0) {
                emptyCells.push({ row: i, col: j });
            }
        }
    }
    if (emptyCells.length > 0) {
        const { row, col } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        grid[row][col] = Math.random() < 0.9 ? 2 : 4;
    }
}

// Handle keyboard events
document.addEventListener('keydown', function(event) {
    let moved = false;
    switch (event.key) {
        case 'ArrowUp':
            moved = moveUp();
            break;
        case 'ArrowDown':
            moved = moveDown();
            break;
        case 'ArrowLeft':
            moved = moveLeft();
            break;
        case 'ArrowRight':
            moved = moveRight();
            break;
    }
    if (moved) {
        addRandom();
        updateGrid();
    }
});

// Implement movement functions
function moveUp() {
    // Implement logic for moving cells up
    return false; // Return true if any movement occurred
}

function moveDown() {
    // Implement logic for moving cells down
    return false; // Return true if any movement occurred
}

function moveLeft() {
    // Implement logic for moving cells left
    return false; // Return true if any movement occurred
}

function moveRight() {
    // Implement logic for moving cells right
    return false; // Return true if any movement occurred
}

// Start the game
startGame();