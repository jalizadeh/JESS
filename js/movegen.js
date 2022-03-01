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

        if(GameBoard.castlePerm & CASTLEBIT.WKCA){
            if(GameBoard.pieces[SQUARES.F1] == PIECES.EMPTY && GameBoard.pieces[SQUARES.G1] == PIECES.EMPTY){
                if(SqAttacked(SQUARES.F1, COLOURS.BLACK) == false && SqAttacked(SQUARES.E1, COLOURS.BLACK) == false){
                    // Add Quiet move
                }
            }
        }

        if(GameBoard.castlePerm & CASTLEBIT.WQCA){
            if(GameBoard.pieces[SQUARES.D1] == PIECES.EMPTY && GameBoard.pieces[SQUARES.C1] == PIECES.EMPTY && GameBoard.pieces[SQUARES.B1] == PIECES.EMPTY){
                if(SqAttacked(SQUARES.D1, COLOURS.BLACK) == false && SqAttacked(SQUARES.E1, COLOURS.BLACK) == false){
                    // Add Quiet move
                }
            }
        }

        pceType = PIECES.wN
        
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

        if(GameBoard.castlePerm & CASTLEBIT.BKCA){
            if(GameBoard.pieces[SQUARES.F8] == PIECES.EMPTY && GameBoard.pieces[SQUARES.G8] == PIECES.EMPTY){
                if(SqAttacked(SQUARES.F8, COLOURS.WHITE) == false && SqAttacked(SQUARES.E8, COLOURS.WHITE) == false){
                    // Add Quiet move
                }
            }
        }

        if(GameBoard.castlePerm & CASTLEBIT.BQCA){
            if(GameBoard.pieces[SQUARES.D8] == PIECES.EMPTY && GameBoard.pieces[SQUARES.C8] == PIECES.EMPTY && GameBoard.pieces[SQUARES.B8] == PIECES.EMPTY){
                if(SqAttacked(SQUARES.D8, COLOURS.WHITE) == false && SqAttacked(SQUARES.E8, COLOURS.WHITE) == false){
                    // Add Quiet move
                }
            }
        }


        pceType = PIECES.bN
    }
}