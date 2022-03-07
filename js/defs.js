var BRD_SQR_NUM = 120

var PIECES = {
    EMPTY : 0,
    wP : 1, wN : 2, wB : 3, wR : 4,  wQ : 5,  wK : 6,
    bP : 7, bN : 8, bB : 9, bR : 10, bQ : 11, bK : 12
}

var FILES = { 
    FILE_A : 0, FILE_B : 1, FILE_C : 2, FILE_D : 3,
    FILE_E : 4, FILE_F : 5, FILE_G : 6, FILE_H : 7, FILE_NONE : 8
}

var RANKS = {
    RANK_1 : 0, RANK_2 : 1, RANK_3 : 2, RANK_4 : 3,
    RANK_5 : 4, RANK_6 : 5, RANK_7 : 6, RANK_8 : 7, RANK_NONE : 8
}

var COLOURS = { WHITE : 0, BLACK : 1, BOTH : 2}

var CASTLEBIT = { WKCA : 1, WQCA : 2, BKCA : 4, BQCA : 8 }

var SQUARES = {
    A1: 21, B1: 22, C1: 23, D1: 24, E1: 25, F1: 26, G1: 27, H1: 28,
    A8: 91, B8: 92, C8: 93, D8: 94, E8: 95, F8: 96, G8: 97, H8: 98,
    NO_SQ: 99, OFFBOARD: 100
}

var BOOL = { FALSE:0, TRUE: 1}

var MAXGAMEMOVES = 2048
var MAXPOSITIONMOVES = 256
var MAXDEPTH = 64

var FilesBrd = new Array(BRD_SQR_NUM)
var RanksBrd = new Array(BRD_SQR_NUM)

var START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

var PceChar = '.PNBRQKpnbrqk'
var SideChar = 'wb-'
var RankChar = '12345678'
var FileChar = 'abcdefgh'


/*
    Converts File/Rank to Square number
    e,g: a1 => 21
*/
function FR2SQ(f, r){
    return (( 21 + f ) + ( r * 10 ))
}

/*
    Converts square number to File/Rank
    e,g: 21 => [0,0] => a1
*/
function SQ2FR(square){
    const quotient = ( Math.abs(21 - square) / 10 )
    const remainder = ( Math.abs(21 - square) % 10 )
    return [quotient, remainder]
}

var PieceVal= [ 0, 100, 325, 325, 550, 1000, 50000, 100, 325, 325, 550, 1000, 50000  ];

// All pieces except pawns
var PieceBig = [ false, false, true, true, true, true, true, false, true, true, true, true, true ];

/*
    Queens or rooks
    https://en.wikipedia.org/wiki/Glossary_of_chess#major_piece
*/
var PieceMaj = [ false, false, false, false, true, true, true, false, false, false, true, true, true ];

/* 
    Knights or bishops
    https://en.wikipedia.org/wiki/Glossary_of_chess#Minor_piece
*/
var PieceMin = [ false, false, true, true, false, false, false, false, true, true, false, false, false ];
var PieceCol = [ COLOURS.BOTH, COLOURS.WHITE, COLOURS.WHITE, COLOURS.WHITE, COLOURS.WHITE, COLOURS.WHITE, COLOURS.WHITE,
	COLOURS.BLACK, COLOURS.BLACK, COLOURS.BLACK, COLOURS.BLACK, COLOURS.BLACK, COLOURS.BLACK ];
	
var PiecePawn = [ false, true, false, false, false, false, false, true, false, false, false, false, false ];	
var PieceKnight = [ false, false, true, false, false, false, false, false, true, false, false, false, false ];
var PieceKing = [ false, false, false, false, false, false, true, false, false, false, false, false, true ];
var PieceRookQueen = [ false, false, false, false, true, true, false, false, false, false, true, true, false ];
var PieceBishopQueen = [ false, false, false, true, false, true, false, false, false, true, false, true, false ];
var PieceSlides = [ false, false, false, true, true, true, false, false, false, true, true, true, false ];

/*
    Distance between a square that can be attack by the following pieces, video 18
    Queen is combination of RkDir and BiDir
    
    `KnDir` and `KiDir` contains the distance from all other suares that should be checked with current `sq`
    `RkDir` and `BiDir` contains the distance from current `sq` to the next square that should be checked
*/
var KnDir = [-8, -12, -19, -21, 8, 12, 19, 21]
var KiDir = [-1, -9, -10, -11, 1, 9, 10, 11]
var RkDir = [-1, -10, 1, 10]
var BiDir = [-9, -11, 9, 11]

var DirNum = [0, 0, 8, 4, 4, 8, 8, 0, 8, 4, 4, 8, 8]
var PceDir = [0, 0, KnDir, BiDir, RkDir, KiDir, KiDir, 0, KnDir, BiDir, RkDir, KiDir, KiDir]
var LoopNonSlidePce = [PIECES.wN, PIECES.wK, 0, PIECES.bN, PIECES.bK, 0]
var LoopNonSlideIndex = [0, 3]
var LoopSlidePce = [PIECES.wB, PIECES.wR, PIECES.wQ, 0, PIECES.bB, PIECES.bR, PIECES.bQ, 0]
var LoopSlideIndex = [0, 4]


/*
    while(pce!=0){
        pceIndex = LoopnonSlideIndex[WHITE] (0)
        pce = LoopNonSlidePce[pceIndex] (wN)
        pceIndex++
        loop pceDir[wN][0 - 8]
    }
*/

// Each square will have a unique hash key
var PieceKeys = new Array(14 * 120)
var SideKey
var CastleKeys = new Array(16)

var Sq120ToSq64 = new Array(BRD_SQR_NUM)
var Sq64ToSq120 = new Array(64)


/*
    Each number is between 1-255, so 8 bits. Each is shifted left and "|" (bitwise OR) them together to create a bigger number filled with random bits. So the first number is shifted 23 left. So if that number was 10000001 (129) that becomes 1000000100000000000000000000000 and so on. Then they are all merged together with the "|" (bitwise OR) operator
*/
function RAND_32(){
    return  Math.floor(((Math.random() * 255) + 1 ) << 23) | 
            Math.floor(((Math.random() * 255) + 1 ) << 16) |
            Math.floor(((Math.random() * 255) + 1 ) << 8 ) |
            Math.floor(((Math.random() * 255) + 1 ) << 1 )
}

function SQ64(sq120){
    return Sq120ToSq64[sq120]
}

function SQ120(sq64){
    return Sq64ToSq120[sq64]
}

//returns the index of the given piece in the array "pList"
function PIECEINDEX(piece, pieceNum){
    return (piece * 10 + pieceNum)
}


/* --------- Move Structure - video 20 ----------- */

function FROMSQ(m)      { return (m & 0x7F) }
function TOSQ(m)        { return ((m >> 7) & 0x7F) }
function CAPTURED(m)    { return ((m >> 14) & 0xF) }
function PROMOTED(m)    { return ((m >> 20) & 0xF) }

var MFLAGEP = 0x40000   // Move flag En Passant
var MFLAGPS = 0x80000   // Move flag Pawn Start
var MFLAGCA = 0x100000  // Move flag Castling

var MFLAGCAP = 0x7C000
var MFLAGPROM = 0xF00000

var NOMOVE = 0

function SQOFFBOARD(sq){
    if(FilesBrd[sq] == SQUARES.OFFBOARD)
        return true
    
    return false
}