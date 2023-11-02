import Ship from "./ship";

export default class Gameboard {
  constructor() {
    this.grid = this.createGrid(10, 10, null);
    this.missedAttacks = [];
  }
  
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

  emptyCellGrid(y, x) {
    return this.grid[y][x] === null;
  }
  placeShip(ship, y, x, orientation) {
    const coordinatesToCheck = [];

    switch (orientation) {
      case 'horizontal':
        if (x + ship.length > 10) {
          throw new Error(`Ship placement would go out of bounds horizontally: it takes ${ship.length} spaces.`);
        }
        for (let i = 0; i < ship.length; i++) {
          coordinatesToCheck.push([y, x + i]);
        }
        break;
      case 'vertical':
        if (y + ship.length > 10) {
          throw new Error(`Ship placement would go out of bounds vertically: it takes ${ship.length} spaces.`);
        }
        for (let i = 0; i < ship.length; i++) {
          coordinatesToCheck.push([y + i, x]);
        }
        break;
    }

    // Check all coordinates before placing the ship
    if (coordinatesToCheck.every(([cy, cx]) => this.emptyCellGrid(cy, cx))) {
      coordinatesToCheck.forEach(([cy, cx]) => {
        this.grid[cy][cx] = ship;
      });
    } else {
      throw new Error('There is already a ship at the specified coordinates');
    }
  }

  receiveAttack(y, x) {
    // If the coordinates are not occupied
    if (this.grid[y][x] === null) {
      this.grid[y][x] = 'miss';
      this.missedAttacks.push({x , y});
    } else {
      // Store the ship in a variable and register the hit
      const ship = this.grid[y][x];
      ship.hit(1);
      this.grid[y][x] = 'hit';
    }
  }

  getMissedAttacks() {
    return this.missedAttacks
  }

  allShipsSunk() {
    const allShips = this.grid.flat().filter(coordiante => coordiante instanceof Ship)
    return allShips.every(ship => ship.isSunk());
  }
}