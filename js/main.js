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

    console.log(FilesBrd[SQUARES.E1] +""+ RanksBrd[SQUARES.E1])

}

function init(){
    console.log("init() called")
    InitFilesRanksBrd()
}