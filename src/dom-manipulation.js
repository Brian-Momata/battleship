import Ship from "./ship";

// Function to create the grid for a player's board 
function createBoardGrid(board) {
  const boardSize = board.grid.length;
  const boardHTML = document.createElement('div');
  boardHTML.className = 'board';

  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.row = i;
      cell.dataset.column = j;
      boardHTML.appendChild(cell);
    }
  }

  return boardHTML;
}

// Function to update the HTML representation of a board
function updateBoardHTML(board, boardElement) {
  const grid = board.grid;
  const cells = boardElement.querySelectorAll('.cell');

  cells.forEach((cell) => {
    const row = parseInt(cell.dataset.row);
    const column = parseInt(cell.dataset.column);

    // Customize the cell based on the content of the grid cell
    if (grid[row][column] === 'miss') {
      cell.classList.add('miss');
    } else if (grid[row][column] === 'hit') {
      cell.classList.add('hit');
    } else if (grid[row][column] instanceof Ship) {
      cell.classList.add('ship');
    } else {
      cell.classList.remove('miss', 'hit', 'ship');
    }
  });
}

export { createBoardGrid, updateBoardHTML };
