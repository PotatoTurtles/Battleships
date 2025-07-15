let ship = require('./ship.js');

class gameboard{
    constructor(hits=[],misses=[],...ships){
        this.hits=hits;
        this.misses=misses;
        this.ships=ships.map((arr)=>new ship(arr));
    }
    addShip(start,end){
        let dx = (end[0]-start[0]);
        let dy = (end[1]-start[1]);

        let dock = [];
        for(let i = 0;Math.abs(dx)>=i||Math.abs(dy)>=i;i++){
            dock.push([i*(dx/Math.abs(dx)||0)+start[0],i*(dy/Math.abs(dy)||0)+start[1]]);
        }

        return this.ships.push(new ship(dock))
    }
    receiveAttack(x,y){
        let check = false
        for(let i = 0;i<this.ships.length;i++){
            if(this.ships[i].hit(x,y)){
                check=true
            }
        }
        if(check){
            this.hits.push([x,y])
        }
        else{
            this.misses.push([x,y])
        }
        return check
    }
    get isAlive(){
        for(let i = 0; i<this.ships.length;i++){
            if(!this.ships[i].isSunk){
                return true
            }
        }
        return false
    }
}
module.exports=gameboard;