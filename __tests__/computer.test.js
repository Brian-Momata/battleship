import Computer from "../src/computer";
import Gameboard from "../src/gameboard";

describe('Computer Class', () => {
  let computer;
  let playerGameboard;

  beforeEach(() => {
    computer = new Computer('Computer');
    playerGameboard = new Gameboard();
  });

  test('Computer constructor initializes name and attackedCoordinates', () => {
    expect(computer.name).toBe('Computer');
    expect(computer.attackedCoordinates).toEqual([]);
  });

  test('randomAttack method generates valid and unique coordinates', () => {
    // Ensure randomAttack generates coordinates within the board's size.
    const [y, x] = computer.randomAttack(playerGameboard);
    expect(y).toBeGreaterThanOrEqual(0);
    expect(y).toBeLessThan(playerGameboard.grid.length);
    expect(x).toBeGreaterThanOrEqual(0);
    expect(x).toBeLessThan(playerGameboard.grid[0].length);
  });

  test('randomAttack method updates attackedCoordinates and attacks the player gameboard', () => {
    const [y, x] = computer.randomAttack(playerGameboard);
    expect(computer.attackedCoordinates).toContainEqual([y, x]);

    // Mock the receiveAttack function to check if it's called with the generated coordinates.
    playerGameboard.receiveAttack = jest.fn();
    computer.randomAttack(playerGameboard);
    expect(playerGameboard.receiveAttack).toHaveBeenCalledWith(expect.any(Number), expect.any(Number));
  });
});
