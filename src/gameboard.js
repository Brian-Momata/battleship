import Ship from "./ship";

export default class Gameboard {
  constructor() {
    // Initialize the gameboard grid as a 10x10 grid with all cells initially set to null.
    this.grid = this.createGrid(10, 10, null);

    // Initialize an array to track missed attacks.
    this.missedAttacks = [];
  }
  
  // Create a 2D grid with the specified number of rows and columns, initialized with a given value.
  createGrid(rows, cols, initialValue) {
    const grid = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(initialValue);
      }
      grid.push(row);
    }
    return grid;
  }

  // Check if a cell at given coordinates (y, x) is empty (null).
  emptyCellGrid(y, x) {
    return this.grid[y][x] === null;
  }

  // Place a ship on the gameboard at specified coordinates (y, x) and with a given orientation.
  placeShip(ship, y, x, orientation) {
    const coordinatesToCheck = [];

    switch (orientation) {
      case 'horizontal':
        // Check if the ship would go out of bounds horizontally.
        if (x + ship.length > 10) {
          throw new Error(`Ship placement would go out of bounds horizontally: it takes ${ship.length} spaces.`);
        }
        for (let i = 0; i < ship.length; i++) {
          coordinatesToCheck.push([y, x + i]);
        }
        break;
      case 'vertical':
        // Check if the ship would go out of bounds vertically.
        if (y + ship.length > 10) {
          throw new Error(`Ship placement would go out of bounds vertically: it takes ${ship.length} spaces.`);
        }
        for (let i = 0; i < ship.length; i++) {
          coordinatesToCheck.push([y + i, x]);
        }
        break;
    }

    // Check if all specified coordinates are empty before placing the ship.
    if (coordinatesToCheck.every(([cy, cx]) => this.emptyCellGrid(cy, cx))) {
      coordinatesToCheck.forEach(([cy, cx]) => {
        this.grid[cy][cx] = ship;
      });
    } else {
      throw new Error('There is already a ship at the specified coordinates');
    }
  }

  // Process an attack at specified coordinates (y, x) and record hits or misses.
  receiveAttack(y, x) {
    // If the coordinates are not occupied by a ship.
    if (this.grid[y][x] === null) {
      // Record a miss and add the attack coordinates to the missedAttacks array.
      this.grid[y][x] = 'miss';
      this.missedAttacks.push({ x, y });
    } else if (this.grid[y][x] !== 'miss' && this.grid[y][x] !== 'hit') {
      // If a ship occupies the cell, record a hit.
      const ship = this.grid[y][x];
      ship.hit(1);
      this.grid[y][x] = 'hit';
    }
  }

  // Get the array of missed attack coordinates.
  getMissedAttacks() {
    return this.missedAttacks;
  }

  // Check if all ships on the gameboard have been sunk, indicating a win condition.
  allShipsSunk() {
    // Flatten the grid to get a single array of all grid cells containing ships.
    const allShips = this.grid.flat().filter(coordinate => coordinate instanceof Ship);
    
    // Check if every ship in the array is sunk, returning true for all ships sunk.
    return allShips.every(ship => ship.isSunk());
  }
}
