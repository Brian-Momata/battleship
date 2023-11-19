export default class Ship {
  constructor(length, name) {
    this.length = length;
    this.hitsTaken = 0;
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
