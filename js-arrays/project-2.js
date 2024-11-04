
 
// Project 2
const labyrinth = [
    ['S', ' ', ' ', ' ', '#', ' '],
    ['#', '#', ' ', '#', '#', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    ['#', '#', '#', ' ', '#', 'E'],
];

let position = { x: 0, y: 0 }; 

// Function to move in the labyrinth
function move(direction) {
    const moves = {
        up: { x: -1, y: 0 },
        down: { x: 1, y: 0 },
        left: { x: 0, y: -1 },
        right: { x: 0, y: 1 },
    };

    const newX = position.x + moves[direction].x;
    const newY = position.y + moves[direction].y;

    if (labyrinth[newX] && labyrinth[newX][newY] !== '#') {
        position = { x: newX, y: newY };
        console.log(`Moved to: (${position.x}, ${position.y})`);
    } else {
        console.log('Move blocked by a wall!');
    }
}

move('right'); 
move('down');  
console.log(labyrinth[position.x][position.y]); 
