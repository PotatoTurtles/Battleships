export default function build(player,showShip){

    let board = player.board;
    let address = player.boardPointer;
    while(address.firstChild){
        address.removeChild(address.firstChild);
    }

    for(let x = 0; x<10;x++){
        for(let y = 0; y<10;y++){
            let index = document.createElement('div');
            index.classList.add('board');

            if(board.hits.some(e => {
                if(e[0]==x&&e[1]==y){
                    return true
                }
            })){
                index.classList.add('hit');
            }
            else if(board.misses.some(e => {
                if(e[0]==x&&e[1]==y){
                    return true
                }
            })){
                index.classList.add('miss');
            }
            else if(showShip){
                if(board.hasIndex(x,y)){
                    index.classList.add('ship');
                }
            }
            index.addEventListener('click',(e)=>{
                if(!showShip){
                    if(player.enemy.checkAlive()&&player.checkAlive()){
                        if(board.receiveAttack(x,y)===0){
                            console.log('Error: Location already attacked.');
                            e.stopPropagation();
                        }
                        build(player,showShip)
                        if(!player.enemy.checkAlive()){
                            alert('You dead asf lol');
                            e.stopPropagation();
                        }
                        else if(!player.checkAlive()){
                            alert('Enemy dead asf my boy');
                            e.stopPropagation();
                        }
                    }
                    else{
                        if(!player.enemy.checkAlive()){
                            alert('You dead asf lol');
                            e.stopPropagation();
                        }
                        else if(!player.checkAlive()){
                            alert('Enemy dead asf my boy');
                            e.stopPropagation();
                        }
                    }
                }
            })
            address.appendChild(index);
        }
    }
}