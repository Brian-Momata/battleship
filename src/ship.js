export default class Ship {
  constructor(length, hitsTaken = 0) {
    this.length = length;
    this.hitsTaken = hitsTaken;
  }
  
  hit(num) {
    this.hitsTaken += num;
  }

  isSunk() {
    return this.length <= this.hitsTaken;
  }
}