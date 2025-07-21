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
                            alert('Sorry, you lose.');
                            e.stopPropagation();
                        }
                        else if(!player.checkAlive()){
                            
                            e.stopPropagation();
                            let leftCount = document.querySelector('.enemyLeft')
                            leftCount.textContent=`Enemy Ships Remaining: 0`;
                            alert('Congratulations! You Win!');
                        }
                    }
                    else{
                        if(!player.enemy.checkAlive()){
                            alert('Sorry, you lose.');
                            e.stopPropagation();
                        }
                        else if(!player.checkAlive()){
                            alert('Congratulations! You Win!');
                            e.stopPropagation();
                        }
                    }
                }
            })
            address.appendChild(index);
        }
    }
}