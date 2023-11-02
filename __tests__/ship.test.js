import Ship from "../src/ship";

describe('Ship', () => {
  test('should initialize with the correct length and hitsTaken', () => {
    const ship = new Ship(3, 0);
    expect(ship.length).toBe(3);
    expect(ship.hitsTaken).toBe(0);
  });

  test('hit() should increase the hitsTaken count', () => {
    const ship = new Ship(3, 0);
    ship.hit(2);
    expect(ship.hitsTaken).toBe(2);
  });

  test('isSunk() should return true when hitsTaken is equal to length', () => {
    const ship = new Ship(4, 4);
    expect(ship.isSunk()).toBe(true);
  });

  test('isSunk() should return false when hitsTaken is less than length', () => {
    const ship = new Ship(5, 3);
    expect(ship.isSunk()).toBe(false);
  });

  test('isSunk() should return true when hitsTaken is greater than length', () => {
    const ship = new Ship(2, 3);
    expect(ship.isSunk()).toBe(true);
  });
});
