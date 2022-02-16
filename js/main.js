$(function() {
    init()
    console.info("Main init called")
    ParseFen(START_FEN)
    PrintBoard()
})


function InitFilesRanksBrd(){
    for (let index = 0; index < BRD_SQR_NUM; index++) {
        FilesBrd[index] = SQUARES.OFFBOARD
        RanksBrd[index] = SQUARES.OFFBOARD
    }

    for (let f = FILES.FILE_A; f <= FILES.FILE_H; f++) {
        for (let r = RANKS.RANK_1; r <= RANKS.RANK_8; r++) {
            FilesBrd[FR2SQ(f, r)] = f
            RanksBrd[FR2SQ(f, r)] = r
        }        
    }

    // console.log(FilesBrd[SQUARES.D1] +""+ RanksBrd[SQUARES.D1])
    // console.log(FR2SQ(0,7))
}


function InitHashKeys(){
    var index = 0

    // define a random hash key for each square
    for(index=0; index < 14 * 120; index++){
        PieceKeys[index] = RAND_32()
    }
    
    SideKey = RAND_32()
    
    for(index=0; index < 14 * 120; index++){
        CastleKeys[index] = RAND_32()
    }
}


function InitSq120ToSq64(){
    var index = 0
    var file = FILES.FILE_A
    var rank = RANKS.RANK_1
    var sq = SQUARES.A1
    var sq64 = 0

    //at first set all cells with invalid square number
    for (let index = 0; index < BRD_SQR_NUM; index++) {
        Sq120ToSq64[index] = 65
    }

    for (let index = 0; index < 64; index++) {
        Sq64ToSq120[index] = 120
    }

    for(rank = RANKS.RANK_1; rank <= RANKS.RANK_8; rank++){
        for(file = FILES.FILE_A; file <= FILES.FILE_H; file++){
            sq = FR2SQ(file, rank)
            Sq64ToSq120[sq64] = sq
            Sq120ToSq64[sq] = sq64
            sq64++
        }
    }
}


function init(){
    console.log("init() called")
    InitFilesRanksBrd()
    InitHashKeys()
    InitSq120ToSq64()
    console.log("GameBoard", GameBoard)
}