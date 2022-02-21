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


function PrintBoard(){
    var sq, file, rank, piece

    console.log('\n------- Game Board -------\n')

    for(rank = RANKS.RANK_8; rank >= RANKS.RANK_1; rank--){
        var line = (RankChar[rank] + ' ')
        for(file = FILES.FILE_A; file <= FILES.FILE_H; file++){
            sq = FR2SQ(file, rank)
            piece = GameBoard.pieces[sq]
            line += (' ' + PceChar[piece] + ' ')
        }
        console.log(line)
    }

    var line = '  '
    for(file = FILES.FILE_A; file <= FILES.FILE_H; file++){
        line += (' ' + FileChar[file] + ' ')
    }
    
    console.log('')
    console.log(line)
    
    console.log('')
    console.log('Side:\t' + SideChar[GameBoard.side])
    console.log('enPas:\t' + GameBoard.enPas)
    
    line = ''

    if(GameBoard.castlePerm & CASTLEBIT.WKCA) line += 'K'
    if(GameBoard.castlePerm & CASTLEBIT.WQCA) line += 'Q'
    if(GameBoard.castlePerm & CASTLEBIT.BKCA) line += 'k'
    if(GameBoard.castlePerm & CASTLEBIT.BQCA) line += 'q'
    console.log('Castle:\t' + line)
    
    console.log('Key:\t' + GameBoard.posKey.toString(16))
}



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


function PrintPieceLists(){
    var piece, pceNum

    for(piece=PIECES.wP; piece <= PIECES.bK; piece++){
        for(pceNum=0; pceNum < GameBoard.pieceNum[piece]; pceNum++){
            console.log('Piece ' + PceChar[piece] + ' on ' + PrSq(GameBoard.pList[PIECEINDEX(piece, pceNum)]))
        }
    }
}

function UpdateListsMaterial(){
    var piece, sq, index, colour

    for(index=0; index < 14 * 120;      index++){ GameBoard.pList[index] = PIECES.EMPTY         }
    for(index=0; index < 2;             index++){ GameBoard.material[index] = 0                 }
    for(index=0; index < 13;            index++){ GameBoard.pieceNum[index] = 0                 }

    for(index=0; index < 64; index++){
        sq = SQ120(index)
        piece = GameBoard.pieces[sq]
        if(piece != PIECES.EMPTY){
            // console.log('piece ' + piece + ' on ' + sq)
            colour = PieceCol[piece]

            GameBoard.material[colour] += PieceVal[piece]

            GameBoard.pList[PIECEINDEX(piece, GameBoard.pieceNum[piece])] = sq
            GameBoard.pieceNum[piece]++
        }
    }

    PrintPieceLists()
}


function ResetBoard(){
    var index = 0

    for(index=0; index < BRD_SQR_NUM;   index++){ GameBoard.pieces[index] = SQUARES.OFFBOARD    }
    for(index=0; index < 64;            index++){ GameBoard.pieces[SQ120(index)] = PIECES.EMPTY }

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

    var rank = RANKS.RANK_8
    var file = FILES.FILE_A
    var piece = 0
    var count = 0
    var i = 0
    var sq120 = 0
    var fenCnt = 0

    while((rank >= RANKS.RANK_1) && fenCnt < fen.length){
        count = 1
        switch (fen[fenCnt]) {
            case 'p': piece = PIECES.bP; break;
            case 'r': piece = PIECES.bR; break;
            case 'n': piece = PIECES.bN; break;
            case 'b': piece = PIECES.bB; break;
            case 'k': piece = PIECES.bK; break;
            case 'q': piece = PIECES.bQ; break;
            case 'P': piece = PIECES.wP; break;
            case 'R': piece = PIECES.wR; break;
            case 'N': piece = PIECES.wN; break;
            case 'B': piece = PIECES.wB; break;
            case 'K': piece = PIECES.wK; break;
            case 'Q': piece = PIECES.wQ; break;
            
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
                piece = PIECES.EMPTY;
                count = fen[fenCnt].charCodeAt() - '0'.charCodeAt();
                break;

            case '/':
            case ' ':
                rank--;
                file = FILES.FILE_A;
                fenCnt++;
                continue;

            default:
                console.log("FEN ERROR!")
                return;
        }

        for(i = 0; i< count;i++){
            sq120 = FR2SQ(file, rank)
            GameBoard.pieces[sq120] = piece
            file++
        }

        fenCnt++
    } //end of while

    GameBoard.side = (fen[fenCnt] == 'w') ? COLOURS.WHITE : COLOURS.BLACK

    //either it is '-' or a castling side
    fenCnt += 2

    for(i = 0; i<4; i++){
        if(fen[fenCnt] === ' ') break

        switch (fen[fenCnt]) {
            case 'K': GameBoard.castlePerm |= CASTLEBIT.WKCA;   break;
            case 'Q': GameBoard.castlePerm |= CASTLEBIT.WQCA;   break;
            case 'k': GameBoard.castlePerm |= CASTLEBIT.BKCA;   break;
            case 'q': GameBoard.castlePerm |= CASTLEBIT.BQCA;   break;
            default :                                           break;
        }

        fenCnt++
    }

    fenCnt++

    if(fen[fenCnt] != '-'){
        file = fen[fenCnt].charCodeAt() - 'a'.charCodeAt()
        rank = fen[fenCnt + 1].charCodeAt() - '1'.charCodeAt()
        console.log("fen[fenCnt]:" + fen[fenCnt] + " File:" + file + " Rank:" + rank)
        GameBoard.enPas = FR2SQ(file, rank)
    }
    
    GameBoard.posKey = GeneratePosKey()

    UpdateListsMaterial()

    console.log(SqAttacked(41,COLOURS.WHITE))
}

// "sq" from side's point of view, is under attack?
function SqAttacked(sq, side){
    var pce, temp_sq, index
    
    //For Pawns, it can be calculated easily
    if(side == COLOURS.WHITE){
        if(GameBoard.pieces[sq - 11] == PIECES.wP || GameBoard.pieces[sq - 9] == PIECES.wP){
            return true
        }
    } else {
        if(GameBoard.pieces[sq + 11] == PIECES.bP || GameBoard.pieces[sq + 9] == PIECES.bP){
            return true
        }
    }

    //For Knight, it is only needed to add the current `sq` with the defined indexes
    for(index=0; index < 8; index++){
        pce = GameBoard.pieces[sq + KnDir[index]]
        if(pce != PIECES.OFFBOARD && PieceCol[pce] == side && PieceKnight[pce] == true){
            return true
        }
    }

    //Rook moves horizentally or vertically. Each value in RkDir array, defines the distance from current `sq` and the next `sq` that should be checked
    for(index=0; index < 4; index++){
        dir = RkDir[index]
        temp_sq = sq + dir
        pce = GameBoard.pieces[temp_sq]
        while(pce != SQUARES.OFFBOARD){
            if(pce != PIECES.EMPTY){
                if(PieceRookQueen[pce] == true && PieceCol[pce] == side){
                    return true
                }
                break
            }
            temp_sq += dir
            pce = GameBoard.pieces[temp_sq]
        }
    }


    //Bishop moves diagonally. Each value in BiDir array, defines the distance from current `sq` and the next `sq` that should be checked
    for(index=0; index < 4; index++){
        dir = BiDir[index]
        temp_sq = sq + dir
        pce = GameBoard.pieces[temp_sq]
        while(pce != SQUARES.OFFBOARD){
            if(pce != PIECES.EMPTY){
                if(PieceBishopQueen[pce] == true && PieceCol[pce] == side){
                    return true
                }
                break
            }
            temp_sq += dir
            pce = GameBoard.pieces[temp_sq]
        }
    }


    //For King, it is only needed to add the current `sq` with the defined indexes
    for(index=0; index < 8; index++){
        pce = GameBoard.pieces[sq + KiDir[index]]
        if(pce != PIECES.OFFBOARD && PieceCol[pce] == side && PieceKing[pce] == true){
            return true
        }
    }


    return false
}