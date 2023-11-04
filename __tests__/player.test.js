import Gameboard from '../src/gameboard'
import Player from '../src/player';

describe('Player', () => {
  let enemyBoard;
  let player;

  beforeEach(() => {
    enemyBoard = new Gameboard;
    player = new Player('Brian');
  });

  test('Should initialize with name', () => {
    expect(player.name).toBe('Brian');
  });

  test('Should attack enemy board', () => {
    player.attack(enemyBoard, 0, 3);
    expect(enemyBoard.grid[0][3]).toEqual('miss');
  });

  test('Should store all the attacked coordinates', () => {
    player.attack(enemyBoard, 0, 3);
    player.attack(enemyBoard, 1, 2);
    player.attack(enemyBoard, 0, 4);

    const attackedCoordinates = player.attackedCoordinates;

    expect(attackedCoordinates).toEqual([[0, 3], [1, 2], [0, 4]]);
  });

  test('Shoud not attack the same coordinates', () =>{
    player.attack(enemyBoard, 0 , 3);
    
    expect(() => player.attack(enemyBoard, 0, 3)).toThrowError('Cannot attack the same coordinates');
  });
});