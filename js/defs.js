const BRD_SQR_NUM = 120

const PIECES = {
    EMPTY : 0,
    wP : 1, wN : 2, wB : 3, wR : 4,  wQ : 5,  wK : 6,
    bP : 7, bN : 8, bB : 9, bR : 10, bQ : 11, bK : 12
}

const FILES = { 
    FILE_A : 0, FILE_B : 1, FILE_C : 2, FILE_D : 3,
    FILE_E : 4, FILE_F : 5, FILE_G : 6, FILE_H : 7, FILE_NONE : 8
}

const RANKS = {
    RANK_1 : 0, RANK_2 : 1, RANK_3 : 2, RANK_4 : 3,
    RANK_5 : 4, RANK_6 : 5, RANK_7 : 6, RANK_8 : 7, RANK_NONE : 8
}

const COLOURS = { WHITE : 0, BLACK : 1, BOTH : 2}

const CASTLEBIT = { WKCA : 1, WQCA : 2, BKCA : 4, BQCA : 8 }

var SQUARES = {
    A1: 21, B1: 22, C1: 23, D1: 24, E1: 25, F1: 26, G1: 27, H1: 28,
    A8: 91, B8: 92, C8: 93, D8: 94, E8: 95, F8: 96, G8: 97, H8: 98,
    NO_SQ: 99, OFFBOARD: 100
}

const BOOL = { FALSE:0, TRUE: 1}

const FilesBrd = new Array(BRD_SQR_NUM)
const RanksBrd = new Array(BRD_SQR_NUM)


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


function RAND_32(){
    return  Math.floor(((Math.random() * 255) + 1 ) << 23) | 
            Math.floor(((Math.random() * 255) + 1 ) << 16) |
            Math.floor(((Math.random() * 255) + 1 ) << 8 ) |
            Math.floor(((Math.random() * 255) + 1 ) << 1 )
}