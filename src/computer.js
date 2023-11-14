export default class Computer {
  constructor() {
    this.name = 'Computer';
    this.attackedCoordinates = [];
  }

  randomAttack(enemyBoard) {
    let y, x;
    while (true) {
      y = Math.floor(Math.random() * enemyBoard.grid.length);
      x = Math.floor(Math.random() * enemyBoard.grid[0].length);
      if (!this.attackedCoordinates.some(coords => coords[0] === y && coords[1] === x)) {
        break;
      }
    }
    this.attackedCoordinates.push([y, x]);
    enemyBoard.receiveAttack(y, x);
    return [y, x];
  }

  populateBoard(board, shipsObj) {
    for(let shipName in shipsObj) {
      let placed = false;
      let ship = shipsObj[shipName];

      while(!placed) {
        const y = Math.floor(Math.random() * board.grid.length);
        const x = Math.floor(Math.random() * board.grid[0].length);
        const orientation = Math.random() < 0.5? 'horizontal' : 'vertical';

        try {
          board.placeShip(ship, y, x, orientation);
          placed = true; // Ship is placed successfully
        } catch (error) {
          // if placing fails
          placed = false;
        }
      }
    }
  }
}
