//returns the index of the given piece in the array "pList"
function PIECEINDEX(piece, pieceNum){
    return (piece * 10 + pieceNum)
}


// It will hold the current state and data of the board
const GameBoard = {}

// holds all the pieces
GameBoard.pieces = new Array(BRD_SQR_NUM)
GameBoard.side = COLOURS.WHITE

/*
    If both players move the pieces 50 times without moving pawns or making a capture, they can claim a "draw". 
    On each move this value is incremented by 1, and if it reaches 100, means a "draw"
    If any of the conditions above occure, this value will be reset
*/
GameBoard.fiftyMove = 0

/*
    Each "ply" means a move a by a player and a "full ply" means a move is completed by both sides.
    This value holds the sum of all "ply"s and will be used:
        1. for undoing the moves
        2. in search tree
*/
GameBoard.hisPly = 0
GameBoard.ply = 0
GameBoard.enPas = 0

/*
    Shows the available castling move for both sides. When value is converted in binary,
    it shows all castling permissions' statuses

    [ def.js > CASTLEBIT ]
    White King  Castling = 1 = 0001
    White Queen Castling = 2 = 0010
    Black King  Castling = 4 = 0100
    Black Queen Castling = 8 = 1000

    Example:
        current value is 13 == 1101
        using a bitwise 'and' will gives the permission for requested side

        if ( 1101 & WKCA ) != 0
            true:   castling OK
            false:  castling KO
*/
GameBoard.castlePerm = 0

// WHITE / BLACK material of piece
GameBoard.material = new Array(2)

/*
    Each index keeps the current quantity of each piece
    e.g, at the begining, pieceNum[0] = 32 which means there are 32 PIECES.EMPTY
*/
GameBoard.pieceNum = new Array(13)

// For complete info, check readme > day 4
GameBoard.pList = new Array(14*120)

// A unique number that represents our position on the board
GameBoard.posKey = 0

GameBoard.moveList = new Array(MAXDEPTH * MAXPOSITIONMOVES)
GameBoard.moveScores = new Array(MAXDEPTH * MAXPOSITIONMOVES)
GameBoard.moveListStart = new Array(MAXDEPTH)


function GeneratePosKey(){
    var sq = 0
    var finalKey = 0
    var piece = PIECES.EMPTY

    for(sq=0; sq < BRD_SQR_NUM; sq++){
        piece = GameBoard.pieces[sq]
        if(piece != PIECES.EMPTY && piece != SQUARES.OFFBOARD){
            finalKey ^= PieceKeys[(piece * 120) + sq]
        }
    }

    if(GameBoard.side == COLOURS.WHITE){
        finalKey ^= SideKey
    }

    if(GameBoard.enPas != SQUARES.NO_SQ){
        finalKey ^= PieceKeys[GameBoard.enPas]
    }

    finalKey ^= CastleKeys[GameBoard.castlePerm]

    return finalKey
}


function ResetBoard(){
    var index = 0

    for(index=0; index < BRD_SQR_NUM;   index++){ GameBoard.pieces[index] = SQUARES.OFFBOARD    }
    for(index=0; index < 64;            index++){ GameBoard.pieces[SQ120(index)] = PIECES.EMPTY }
    for(index=0; index < 14 * 120;      index++){ GameBoard.pList[index] = PIECES.EMPTY         }
    for(index=0; index < 2;             index++){ GameBoard.material[index] = 0                 }
    for(index=0; index < 13;            index++){ GameBoard.pieceNum[index] = 0                 }

    GameBoard.side = COLOURS.BOTH
    GameBoard.enPas = SQUARES.NO_SQ
    GameBoard.fiftyMove = 0
    GameBoard.ply = 0
    GameBoard.hisPly = 0
    GameBoard.castlePerm = 0
    GameBoard.posKey = 0
    GameBoard.moveListStart[GameBoard.ply] = 0
}

function ParseFen(fen){
    ResetBoard()
}