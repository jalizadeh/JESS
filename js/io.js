function PrSq(sq){
    return (FileChar[FilesBrd[sq]] + RankChar[RanksBrd[sq]])
}

function PrMove(move){
    // a quiet move ->  e2e4    (from.to)
    // a promotion  ->  a7b8n   (from.to.promotion)

    var MvStr

    var ff = FilesBrd[FROMSQ(move)]     //file from
    var rf = RanksBrd[FROMSQ(move)]     //rank from
    var ft = FilesBrd[TOSQ(move)]       //file to
    var rt = RanksBrd[TOSQ(move)]       //rank to

    MvStr = FileChar[ff] + RankChar[rf] + FileChar[ft] + RankChar[rt]

    var promoted = PROMOTED(move)

    if(promoted != PIECES.EMPTY){
        var pchar = 'q'
        if(PieceKnight[promoted] == true){
            pchar = 'n'
        } else if(PieceRookQueen[promoted] == true && PieceBishopQueen[promoted] == false ){
            pchar = 'r'
        } else if (PieceRookQueen[promoted] == true && PieceBishopQueen[promoted] == true){
            pchar = 'b'
        }
        MvStr += pchar
    }

    return MvStr
}

function PrintMoveList(){
    var index
    var move
    console.log('Move List: ')

    for(index = GameBoard.moveListStart[GameBoard.ply]; index < GameBoard.moveListStart[GameBoard.ply+1]; index++){
        move = GameBoard.moveList[index]
        console.log(PrMove(move))
    }
}