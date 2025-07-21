import ship from './ship.js';

class gameboard{
    constructor(hits=[],misses=[],...ships){
        this.ships=ships.map((arr)=>new ship(arr));
        this.misses=[];
        this.hits=[];

        hits.forEach(e=>{
            if(this.receiveAttack(e[0],e[1])){
                this.hits.push([e[0],e[1]]);
            }
            else{
                this.misses.push([e[0],e[1]]);
            }
        })
        misses.forEach(e=>{
            if(!this.receiveAttack(e[0],e[1])){
                this.misses.push([e[0],e[1]]);
            }
            else{
                this.hits.push([e[0],e[1]]);
            }
        })
    }
    addShip(arr){
        return this.ships.push(new ship(arr))
    }
    hasIndex(x,y){
        return this.ships.some(e=>{
            if(e.hasIndex(x,y)){
                return true
            }
        })
    }
    receiveAttack(x,y){
        let check = false

        for(let i = 0;i<this.hits.length;i++){
            if(this.hits[i][0]==x&&this.hits[i][1]==y){
                return 0
            }
        }
        for(let i = 0;i<this.misses.length;i++){
            if(this.misses[i][0]==x&&this.misses[i][1]==y){
                return 0
            }
        }

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
    get shipsSunk(){
        let tally = 0
        for(let i = 0; i<this.ships.length;i++){
            if(!this.ships[i].isSunk){
                tally++
            }
        }
        return tally
    }
}
export default gameboard;