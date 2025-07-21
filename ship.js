class ship{
    constructor(places){
        this.places = places;
    }
    get size(){
        return this.places.length
    }
    hasIndex(x,y){
        return this.places.some(e => {
            if(e[0]==x&&e[1]==y){
                return true
            }
        });
    }
    hit(x,y){
        for(let i = 0;i<this.places.length;i++){
            if(this.places[i][0]==x&&this.places[i][1]==y){
                this.places.splice(i,1);
                return true
            }
        }
        return false
    }
    get isSunk(){
        return this.size>0?false:true
    }
}
export default ship;