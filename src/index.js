// Import necessary modules and styles
import './style.css';
import Gameboard from './gameboard';
import Ship from './ship';
import Player from './player';
import Computer from './computer';
import { createBoardGrid, updateBoardHTML } from './dom-manipulation';
import populateShipsContainer from './drag-drop-ships';

// Initialize player and computer boards, players, and assign them to their respective boards
const player1Board = new Gameboard();
const player2Board = new Gameboard();
const player1 = new Player('player1');
const player2 = new Computer();

player1Board.player = player1;
player2Board.player = player2;

// Create HTML representations of player boards
const player1BoardHTML = createBoardGrid(player1Board);
const player2BoardHTML = createBoardGrid(player2Board);

// Append player board HTML to the DOM
document.querySelector('#player1-board').appendChild(player1BoardHTML);
document.querySelector('#player2-board').appendChild(player2BoardHTML);

// Populate ship containers for drag and drop functionality
const ships = populateShipsContainer();

// Initialize drag and drop functionality for ships
function initializeDragAndDrop() {
  const draggableShips = document.querySelectorAll('.draggable-ship');
  const gridCells = document.querySelectorAll('#player1-board .board .cell');

  // Drag events for ships
  draggableShips.forEach(ship => {
    const shipName = ship.getAttribute('data-ship');
    ship.setAttribute('draggable', 'true');
    ship.addEventListener('dragstart', e => {
      e.dataTransfer.setData('ship', shipName);
    });
  });

  // Drop events for cells on the player's board
  gridCells.forEach(cell => {
    cell.addEventListener('dragover', e => {
      e.preventDefault();
    });
    cell.addEventListener('drop', e => {
      e.preventDefault();
      try {
        const shipName = e.dataTransfer.getData('ship');
        const ship = ships[shipName];
        handleDrop(player1Board, ship, cell);
      } catch (error) {
        player1Board.displayMessage(error.message);
      }
    });
  });
}

// Handling ship drop onto the board
function handleDrop(board, ship, cell) {
  const y = parseInt(cell.dataset.row);
  const x = parseInt(cell.dataset.column);
  board.placeShip(ship, y, x, ship.orientation);
  displayGameState();

  // Hide the dragged ships and the ship container when all ships are placed
  const draggedShip = document.querySelector(`[data-ship="${ship.name}"]`);
  if (draggedShip) {
    draggedShip.style.display = 'none';
  }
  const shipsContainer = document.querySelector('.ships-container');
  const draggedShips = document.querySelectorAll('.draggable-ship');
  const allShipsDragged = Array.from(draggedShips).every(ship => ship.style.display === 'none');
  if (allShipsDragged) {
    shipsContainer.style.display = 'none';
    gameLoop();
  }
}

// Displaying game state on the boards
function displayGameState() {
  updateBoardHTML(player1Board, player1BoardHTML);
  updateBoardHTML(player2Board, player2BoardHTML);
}

// Computer's turn to attack player's board
function computerTurn(enemyBoard) {
  player2.randomAttack(enemyBoard);
  displayGameState();
}

// Player's turn to attack computer's board
function playerTurn(enemyBoard, enemyBoardHTML) {
  return new Promise(resolve => {
    enemyBoardHTML.addEventListener('click', (e) => {
      const cellDiv = e.target.closest('.cell');
      if (!cellDiv) return; // Ignore if not clicked on a cell
      const y = parseInt(cellDiv.dataset.row);
      const x = parseInt(cellDiv.dataset.column);
      enemyBoard.receiveAttack(y, x);
      displayGameState();
      resolve(); // Resolve the Promise once a cell is clicked
    });
  });
}

// Check for the game winner
function checkWinner(board1, board2) {
  if (board1.allShipsSunk()) {
    board1.displayMessage('You lost!');
    return true;
  } else if (board2.allShipsSunk()) {
    board2.displayMessage('You win!');
    return true;
  } else {
    return false;
  }
}

// Main game loop
function gameLoop() {
  if (checkWinner(player1Board, player2Board)) {
    return;
  }
  
  playerTurn(player2Board, player2BoardHTML).then(() => {
    if (!checkWinner(player1Board, player2Board)) {
      computerTurn(player1Board);
      requestAnimationFrame(gameLoop);
    }
  });
}

// Populate the computer's board with ships and initialize drag and drop
player2.populateBoard(player2Board, ships);
initializeDragAndDrop();
gameLoop(); // Start the game loop
