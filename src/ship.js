export default class Ship {
  constructor(length, hitsTaken = 0) {
    this.length = length;
    this.hitsTaken = hitsTaken;
    this.orientation = 'horizontal';
  }
  
  hit(num) {
    this.hitsTaken += num;
  }

  isSunk() {
    return this.length <= this.hitsTaken;
  }

  toggleOrientation() {
    this.orientation = this.orientation === 'horizontal'? 'vertical': 'horizontal';
  }
}