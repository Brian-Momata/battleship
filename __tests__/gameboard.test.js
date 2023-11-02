import Gameboard from "../src/gameboard";
import Ship from "../src/ship";

describe('Gameboard', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard;
  });

  test('should place ships at specific coordinates', () => {
    const ship = new Ship(3); // Create a ship of length 3
    gameboard.placeShip(ship, 2, 3, 'horizontal');

    expect(gameboard.grid[2][3]).toBe(ship);
    expect(gameboard.grid[2][4]).toBe(ship);
    expect(gameboard.grid[2][5]).toBe(ship);
  });

  test('should throw an error when placing a ship out of bounds (horizontal)', () => {
    const ship = new Ship(4); // Ship length is 4
    // Try to place the ship out of bounds (starting at column 9)
    expect(() => gameboard.placeShip(ship, 0, 9, 'horizontal')).toThrowError('Ship placement would go out of bounds horizontally: it takes 4 spaces.');
  });
  
  test('should throw an error when placing a ship out of bounds (vertical)', () => {
    const ship = new Ship(3); // Ship length is 3
    // Try to place the ship out of bounds (starting at row 8)
    expect(() => gameboard.placeShip(ship, 8, 0, 'vertical')).toThrowError('Ship placement would go out of bounds vertically: it takes 3 spaces.');
  });
  
  test('should throw an error when placing a ship on top of an existing ship', () => {
    const ship1 = new Ship(3);
    const ship2 = new Ship(2);
    gameboard.placeShip(ship1, 1, 1, 'horizontal');
  
    // Try to place the second ship on top of the first one
    expect(() => gameboard.placeShip(ship2, 1, 2, 'horizontal')).toThrowError('There is already a ship at the specified coordinates');
  });
  
  test('should receive an attack and register a hit', () => {
    const ship = new Ship(3);
    gameboard.placeShip(ship, 0, 0, 'horizontal');

    gameboard.receiveAttack(0, 1);

    expect(gameboard.grid[0][1]).toBe('hit');
    expect(ship.hitsTaken).toBe(1);
  });

  test('should receive an attack and register a miss', () => {
    gameboard.receiveAttack(1, 2);

    expect(gameboard.grid[1][2]).toBe('miss');
  });

  test('should keep track of missed attacks', () => {
    gameboard.receiveAttack(1, 2);
    gameboard.receiveAttack(3, 4);

    const missedAttacks = gameboard.getMissedAttacks();
    expect(missedAttacks).toEqual(expect.arrayContaining([{ y: 1, x: 2 }, { y: 3, x: 4 }]));
  });

  test('should report whether all ships have been sunk', () => {
    const ship1 = new Ship(2);
    const ship2 = new Ship(3);
    gameboard.placeShip(ship1, 0, 0, 'horizontal');
    gameboard.placeShip(ship2, 3, 3, 'vertical');

    // Hit both ships until they sink
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    gameboard.receiveAttack(3, 3);
    gameboard.receiveAttack(4, 3);
    gameboard.receiveAttack(5, 3);

    expect(gameboard.allShipsSunk()).toBe(true);
  });
});
