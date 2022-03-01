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

    var pceType, pceNum, sq

    if(GameBoard.side == COLOURS.WHITE){
        pceType = PIECES.wP

        for(pceNum = 0; pceNum < GameBoard.pceNum[pceType]; pceNum++){
            sq = GameBoard.pList[PCEINDEX(pceType, pceNum)]

            if(GameBoard.pieces[sq + 10] == PIECES.EMPTY){
                // Add Pawn move here
                if(RanksBrd[sq] == RANKS.RANKS_2 && GameBoard.pieces[sq + 20] == PIECES.EMPTY){
                    // Add Quiet move here
                }
            }

            if(SQOFFBOARD(sq + 9) == false && PieceCol[GameBoard.pieces[sq + 9]] == COLOURS.BLACK){
                // Add Pawn capture move
            }

            if(SQOFFBOARD(sq + 11) == false && PieceCol[GameBoard.pieces[sq + 11]] == COLOURS.BLACK){
                // Add Pawn capture move
            }

            if(GameBoard.enPas != SQUARES.NOSQ){
                if(sq + 9 == GameBoard.enPas){
                    // Add enPas move
                }

                if(sq + 11 == GameBoard.enPas){
                    // Add enPas move
                }
            }
        }
    } else {
        pceType = PIECES.bP

        for(pceNum = 0; pceNum < GameBoard.pceNum[pceType]; pceNum++){
            sq = GameBoard.pList[PCEINDEX(pceType, pceNum)]

            if(GameBoard.pieces[sq - 10] == PIECES.EMPTY){
                // Add Pawn move here
                if(RanksBrd[sq] == RANKS.RANKS_7 && GameBoard.pieces[sq - 20] == PIECES.EMPTY){
                    // Add Quiet move here
                }
            }

            if(SQOFFBOARD(sq - 9) == false && PieceCol[GameBoard.pieces[sq - 9]] == COLOURS.WHITE){
                // Add Pawn capture move
            }

            if(SQOFFBOARD(sq - 11) == false && PieceCol[GameBoard.pieces[sq - 11]] == COLOURS.WHITE){
                // Add Pawn capture move
            }

            if(GameBoard.enPas != SQUARES.NOSQ){
                if(sq - 9 == GameBoard.enPas){
                    // Add enPas move
                }

                if(sq - 11 == GameBoard.enPas){
                    // Add enPas move
                }
            }
        }
    }
}