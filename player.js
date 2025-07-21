import gameboard from './gameboard.js';
import buildBoard from './buildBoard.js';

class player{
    constructor(boardPointer,isPlayer=false,enemy = '',board=new gameboard()){
        this.boardPointer=boardPointer;
        this.isPlayer=isPlayer;
        this.board=board;
        this.enemy=enemy
    }
    addEnemy(enemy){
        this.enemy=enemy
    }
    populateBoard(showShip=this.isPlayer){
        buildBoard(this,showShip);
    }
    get pointer(){
        return this.boardPointer
    }
    hit(x,y){
        if(!this.board.ships){
            return false;
        }
        return this.board.receiveAttack(x,y);
    }
    randAttack(opponent){
        if(this.enemy.checkAlive()&&this.checkAlive()){
            let x = Math.floor(Math.random()*10);
            let y = Math.floor(Math.random()*10);
            while(opponent.hit(x,y)===0){
                x = Math.floor(Math.random()*10);
                y = Math.floor(Math.random()*10);
            }
            opponent.populateBoard(opponent.isPlayer);
            if(!this.enemy.checkAlive()){
                alert('You dead asf lol');
            }
            if(!this.checkAlive()){
                alert('Enemy dead asf my boy');
            }
        }
        else{
            if(!this.enemy.checkAlive()){
                alert('You dead asf lol');
            }
            if(!this.checkAlive()){
                alert('Enemy dead asf my boy');
            }
        }
    }
    initializeShips(){
        let shipLengths = [1,1,1,1,2,2,2,3,3,4];

        while(shipLengths.length>0){
            let temp = shipLengths.pop();

            let dx = Math.floor(Math.random()*2);
            let dy = 1-dx;

            let x = Math.floor(Math.random()*(10 - temp*dx));
            let y = Math.floor(Math.random()*(10 - temp*dy));

            let arr =[]

            let cont = false
            for(let i = 0;i<temp;i++){
                if(this.board.hasIndex(x+i*dx,y+i*dy)){
                    cont = true
                }
                arr.push([x+i*dx,y+i*dy])
            }
            if(cont){
                shipLengths.push(temp);
            }
            else{
                this.board.addShip(arr)
            }
        }
        this.populateBoard();
    }
    checkAlive(){
        return this.board.isAlive
    }
}
export default player;