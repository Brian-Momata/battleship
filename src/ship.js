export default class Ship {
  constructor(length, name, hitsTaken = 0) {
    this.length = length;
    this.hitsTaken = hitsTaken;
    this.orientation = 'horizontal';
    this.name = name;
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