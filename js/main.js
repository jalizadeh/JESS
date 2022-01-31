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

function init(){
    console.log("init() called")
    InitFilesRanksBrd()

    console.log("GameBoard", GameBoard)
    
    for (let index = 0; index < 10; index++) {
        console.log(RAND_32().toString(16))        
    }

    /*
    // video 7 => posKey
    // the order of XOR operation is not important
    
    const p1 = RAND_32()
    const p2 = RAND_32()
    const p3 = RAND_32()
    const p4 = RAND_32()

    console.log(p1,p2,p3,p4)

    let key = 0
    key ^= p1
    key ^= p2
    key ^= p3
    key ^= p4

    console.log("key", key)
    */

    const p1 = 22
    const p2 = 17
    const p3 = 15

    let key = 0

    console.log("inserting into key")
    key ^= p1
    key ^= p2
    key ^= p3
    console.log("key", key.toString(2))
    
    console.log("taking out all")
    key ^= p3
    key ^= p1
    key ^= p2
    console.log("final key", key.toString(2))


}