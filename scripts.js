import buildBoard from './buildBoard.js';
import gameboard from './gameboard.js';
import player from './player.js';

let b1 = document.querySelector('.left.container');
let play1 = new player(b1,false) //enemy
play1.initializeShips()

let b2 = document.querySelector('.right.container');
let play2 = new player(b2,true) //player
play2.initializeShips()

play1.addEnemy(play2);
play2.addEnemy(play1);

let leftCount = document.querySelector('.enemyLeft');
let rightCount = document.querySelector('.playerLeft')

b1.addEventListener('click',()=>{
    leftCount.textContent=`Enemy Ships Remaining: ${play1.board.shipsRemaining}`
    console.log('Location selection validated!')
    play1.randAttack(play2);
    rightCount.textContent=`Player Ships Remaining: ${play2.board.shipsRemaining}`
})

let pButton = document.querySelector('button#pButton');
pButton.addEventListener('click',()=>{
    play1.initializeShips()
    play2.initializeShips();
})