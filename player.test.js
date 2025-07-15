let player = require('./player.js');
let board = require('./gameboard.js');

test('Does receive hit properly',()=>{
    let play = new player(true);
    play.board=new board([],[],[[0,0],[0,1],[0,2]],[[1,0],[1,1],[1,2],[1,3]])
    expect(play.hit(0,0)).toBe(true)
})