function knightMoves(start, target){
    const moves = [[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,1]]

    const queue = [[start]]
    const visited = new Set();
    visited.add(start.toString())
    while(queue.length>0){
        const path = queue.shift()
        const postion = path[path.length-1]

        for (const [dx, dy] of moves) {
            const newX = postion[0]+dx
            const newY = postion[1]+dy

            if(insideBoard(newX,newY) && !visited.has([newX,newY].toString)){
                const newPath = [...path, [newX,newY]]
                queue.push(newPath)

                if(newX==target[0] && newY==target[1]){
                    console.log(`You made it in ${newPath.length-1} moves.`)
                    for (const p of path) console.log(p);
                    return;
                }
            }

            

        }
    }

    return 'Sorry you cannot make it'
    
}

function insideBoard(x,y){
    return (x>=0 && x<=7 && y>=0 && y<=7);
}

knightMoves([3,3],[4,3])