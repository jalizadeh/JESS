function MOVE(from, to, captured, promoted, flag){
    return (from | (to << 7) | (captured << 14) | (promoted << 20) | flag)
}


/*
    GameBoard.moveListStart[] -> 'index' for the first move at a given ply
    GameBoard.moveList[index]

    say ply == 1 , then loop all moves
    for(index = GameBoard.moveListStart[1]; index < GameBoard.moveListStart[2]; index++)
        move = moveList[index]

        ... use move
    
    GameBoard.moveListStart[2] = GameBoard.moveListStart[1]
    
    AddMove(Move){
        GameBoard.moveListStart[GameBoard.moveListStart[2]] = Move
        GameBoard.moveListStart[2]++
    }
*/
function GenerateMove(){
    GameBoard.moveListStart[GameBoard.ply+1] = GameBoard.moveListStart[GameBoard.ply]
}