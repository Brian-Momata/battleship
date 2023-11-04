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
}
