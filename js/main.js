$(function() {
    init()
    console.info("Main init called")
})


function InitFilesRanksBrd(){
    for (let index = 0; index < BRD_SQR_NUM; index++) {
        FilesBrd[index] = SQUARES.OFFBOARD
        RanksBrd[index] = SQUARES.OFFBOARD
    }

    for (let f = FILES.FILE_A; f <= FILES.FILE_H; f++) {
        for (let r = RANKS.RANK_1; r < RANKS.RANK_8; r++) {
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


function init(){
    console.log("init() called")
    InitFilesRanksBrd()
    InitHashKeys()
    console.log("GameBoard", GameBoard)
}