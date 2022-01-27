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