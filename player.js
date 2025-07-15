let gameboard = require('./gameboard.js');

class player{
    constructor(isManual,board=new gameboard()){
        this.isManual=isManual;
        this.board=board;
    }
    hit(x,y){
        if(!this.board.ships){
            return false;
        }
        console.log(this.board.ships)
        return this.board.receiveAttack(x,y);
    }
}
module.exports=player;