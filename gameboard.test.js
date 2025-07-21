import gameboard from './gameboard.js';
import ship from './ship.js';

test('Does exist',()=>{
    let game = new gameboard();
    expect(game).toBeTruthy();
})

test('Does add ship',()=>{
    let game = new gameboard();
    game.addShip([[0,0],[1,0],[2,0],[3,0]]);
    expect(game.ships[0].size).toBe(4);
})

test('Does add right places',()=>{
    let game = new gameboard();
    game.addShip([[0,0],[1,0],[2,0],[3,0]]);
    let arr = [[0,0],[1,0],[2,0],[3,0]];
    expect(game.ships[0].places).toEqual(arr);
})

test('Does hit ',()=>{
    let game = new gameboard();
    game.addShip([[0,0],[1,0],[2,0],[3,0]]);
    
    expect(game.receiveAttack(0,0)).toBeTruthy();
})

test('Doesnt hit ',()=>{
    let game = new gameboard();
    game.addShip([[0,0],[1,0],[2,0],[3,0]]);
    
    expect(game.receiveAttack(7,7)).toBeFalsy();
})

test('Does hit right place',()=>{
    let game = new gameboard();
    game.addShip([[0,0],[1,0],[2,0],[3,0]]);
    game.receiveAttack(0,0);
    expect(game.hits[0]).toEqual([0,0]);
})

test('Is still dead',()=>{
    let game = new gameboard();
    expect(game.isAlive).toBeFalsy();
})

test('Is still alive',()=>{
    let game = new gameboard();
    game.addShip([[5,0],[4,0]]);
    game.addShip([[0,0],[1,0],[2,0],[3,0]]);
    expect(game.isAlive).toBeTruthy();
})

test('Is still alive',()=>{
    let game = new gameboard();
    game.addShip([[5,0],[4,0]]);
    game.receiveAttack(5,0);
    game.receiveAttack(4,0);
    expect(game.isAlive).toBeFalsy();
})

