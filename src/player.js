import Gameboard from "./gameboard";

export default class Player {
  constructor(name) {
    this.name = name;
    this.attackedCoordinates = [];
    this.gameboard = new Gameboard;
  }

  attack(enemyBoard, y, x) {
    if (this.attackedCoordinates.some(coords => coords[0] === y && coords[1] === x)) {
      throw new Error('Cannot attack the same coordinates')
    } else {
      enemyBoard.receiveAttack(y, x);
      this.attackedCoordinates.push([y, x]);
    }
  }
}