# JESS (Vanilla JS Chess)

A fun & long & full of details project 


## Day 1 - 23/01/2022 
At first i decided to develope it completely in React Js, so while learning it, i create also a fun project which could be hosted on many hosting such as Github. But now, that i found from [Bobby](https://github.com/teemoo7/bobby), I decided to develope the backend in Java + Spring Boot, and frontend in React, like found resources

now the question is, on which PC i should develope :D

Found resources:
- [Chess Programming Wiki](https://www.chessprogramming.org/Main_Page)
- [Programming A Chess Engine in C](https://www.youtube.com/watch?v=bGAfaepBco4&list=PLZ1QII7yudbc-Ky058TEaOstZHVbT-2hg&index=1)
- [Web based GUI for UCI chess engine: INTRO & DEMO / Python
](https://www.youtube.com/watch?v=_0uKZbHWVKM&list=PLmN0neTso3Jz-6--Mj51Hc3jiLhkQm0DB&index=1)
- [Booby's Story](https://towardsdatascience.com/implementing-a-chess-engine-from-scratch-be38cbdae91)
- [Talk Chess](http://talkchess.com/forum3/viewforum.php?f=7&sid=34b3cd32cd574efbdd9e810df3312d9e)
- [Bruce Mo](http://web.archive.org/web/20070811182741/www.seanet.com/~brucemo/topics/topics.htm)
- [Dr. Robert Hyatt](https://craftychess.com/hyatt/hyatt.html)
- [Chess UK - CCRL](http://ccrl.chessdom.com/ccrl/4040/)
- [Stockfish - Great Engine](https://stockfishchess.org/)
- [TSCP - 2258 LOC Engine](http://www.tckerrigan.com/Chess/TSCP/)

### Some Guesses
I am sure this fun project would take lots of time and needs  dedication. My goal is to really enjoy this project and learn it, and someday (who know), maybe start my channel or blog explaining this project

Also I need to learn deep about Java and React Js, which I am already in love with them and enjoy creating a nice project, which not only shows my general knowledge, but also deep knowledge of algorithms and logical thinking

### Did
- watched [1st video](https://www.youtube.com/watch?v=bGAfaepBco4&list=PLZ1QII7yudbc-Ky058TEaOstZHVbT-2hg&index=1)

### Plan
Right now, reading documents is more important than any code
- Watching code in [C](https://www.youtube.com/watch?v=VuJL4qhpp-8&list=PLZ1QII7yudbc-Ky058TEaOstZHVbT-2hg&index=2)
- Study CPW
- Study Bobby



## Day 2 - 24/01/2022
You won't believe if I say i found a tutorial from the same author, but in JS [Programming A Chess Engine In Pure Javascript](https://www.youtube.com/watch?v=2eA0bD3wV3Q&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog)

My only concern is that he sometimes mentions about his previous cource in C, i dont know if I should watch that first or not. Let's trust 64-video long tutorial


## Day 3 - 25/01/2022
Started the first lesson and pushed everything on [Git](https://github.com/jalizadeh/JESS)

Btw, I learned a lot about [console](https://console.spec.whatwg.org/). This tool is really amazing. Put the practices in the `JS Learning` folder


A chess board has `8 Files (column)` and `8 Ranks (row)`. The issue is tracking the possible moves for each piece. E.g, if a `rook` stands on point `Rf4 = 29`, it can move in 4 different directions. Moving forward, will lead to squares `30 & 31`, and if we add an extra square, it will become `32` which on `rank 5` and is not correct.

Or, when at the beginning of the game, `knights` that can have access to squares out of the board. How to calculate them?

    ❗️ In all the boards, Black is on top and White at the bottom.

|   | a | b | c | d | e | f | g | h |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| 1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| 2 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
| 3 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 |
| 4 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
| 5 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 |
| 6 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 |
| 7 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 |
| 8 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 |


A wise solution is having a 1D array that holds all the consecutive squares. With marking each square as `chess board` (shown in bold), it is possible to track if a piece's moves hit a `offboard` square or not. If hits, the move is stopped at that point. This solution also solves the problem for `knight` piece.

|   |   | a  | b  | c  | d  | e  | f  | g  | h  |   |
| ------------| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
|   |  0 | 1  | 2   | 3  | 4  | 5  | 6  | 7  | 8  | 9  |
|   | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 |
| 1  | 20 | **21** | **22** | **23** | **24** | **25** | **26** | **27** | **28** | 29 |
| 2  | 30 | **31** | **32** | **33** | **34** | **35** | **36** | **37** | **38** | 39 |
| 3  | 40 | **41** | **42** | **43** | **44** | **45** | **46** | **47** | **48** | 49 |
| 4  | 50 | **51** | **52** | **53** | **54** | **55** | **56** | **57** | **58** | 59 |
| 5  | 60 | **61** | **62** | **63** | **64** | **65** | **66** | **67** | **68** | 69 |
| 6  | 70 | **71** | **72** | **73** | **74** | **75** | **76** | **77** | **78** | 79 |
| 7  | 80 | **81** | **82** | **83** | **84** | **85** | **86** | **87** | **88** | 89 |
| 8  | 90 | **91** | **92** | **93** | **94** | **95** | **96** | **97** | **98** | 99 |
|   | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 |
|   | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 |



❓ Why in [video #3](https://www.youtube.com/watch?v=koWA_I6zmZk&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=3), we define `SQUARES` only for the back rank of each side?

❓ What if instead of creating two seperate 1D array for Files and Ranks, having one array containing this data:
```json
FR[20] = { file: 0, rank: 0 }
```

well, well, well, it is getting confusing 🤪


## Day 4 - 26/01/2022

Now that I'm watching [video #4](https://www.youtube.com/watch?v=u7BUK-OuWZ8&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=4), I get it better


Regardig the solution mentioned above, we need to fill each square with appropriate value. As we have two arrays, `Files` and `Ranks`, all 120 squares should be labled with `0..7`. Any square that `offboard` is labled as `100`. This will lead to the following shape:

    Files:      a = 0 ... h = 7
    Ranks:      1 = 0 ... 8 = 7
    Offboard:   100

|   |   | a  | b  | c  | d  | e  | f  | g  | h  |   |
| ------------| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
|   |  100 | 100  | 100   | 100  | 100  | 100  | 100  | 100  | 100  | 100  |
|   | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 |
| 1  | 100 | **a1/21<br/>0/0** | **b1/22<br/>1/0** | **c1/23<br/>2/0** | **d1/24<br/>3/0** | **e1/25<br/>4/0** | **f1/26<br/>5/0** | **g1/27<br/>6/0** | **h1/28<br/>7/0** | 100 |
| 2  | 100 | **a2/31<br/>0/1** | **b2/32<br/>1/1** | **c2/33<br/>2/1** | **d2/34<br/>3/1** | **e2/35<br/>4/1** | **f2/36<br/>5/1** | **g2/37<br/>6/1** | **h2/38<br/>7/1** | 100 |
| 3  | 100 | **a3/41<br/>0/2** | **b3/42<br/>1/2** | **c3/43<br/>2/2** | **d3/44<br/>3/2** | **e3/45<br/>4/2** | **f3/46<br/>5/2** | **g3/47<br/>6/2** | **h3/48<br/>7/2** | 100 |
| 4  | 100 | **a4/51<br/>0/3** | **b4/52<br/>1/3** | **c4/53<br/>2/3** | **d4/54<br/>3/3** | **e4/55<br/>4/3** | **f4/56<br/>5/3** | **g4/57<br/>6/3** | **h4/58<br/>7/3** | 100 |
| 5  | 100 | **a5/61<br/>0/4** | **b5/62<br/>1/4** | **c5/63<br/>2/4** | **d5/64<br/>3/4** | **e5/65<br/>4/4** | **f5/66<br/>5/4** | **g5/67<br/>6/4** | **h5/68<br/>7/4** | 100 |
| 6  | 100 | **a6/71<br/>0/5** | **b6/72<br/>1/5** | **c6/73<br/>2/5** | **d6/74<br/>3/5** | **e6/75<br/>4/5** | **f6/76<br/>5/5** | **g6/77<br/>6/5** | **h6/78<br/>7/5** | 100 |
| 7  | 100 | **a7/81<br/>0/6** | **b7/82<br/>1/6** | **c7/83<br/>2/6** | **d7/84<br/>3/6** | **e7/85<br/>4/6** | **f7/86<br/>5/6** | **g7/87<br/>6/6** | **h7/88<br/>7/6** | 100 |
| 8  | 100 | **a8/91<br/>0/7** | **b8/92<br/>1/7** | **c8/93<br/>2/7** | **d8/94<br/>3/7** | **e8/95<br/>4/7** | **f8/96<br/>5/7** | **g8/97<br/>6/7** | **h8/98<br/>7/7** | 100 |
|   | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 |
|   | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 |

How to map `F/R` data to square index?

The first square of board starts at `21` and the distance between each rank is 10 squares

```js
function FR2SQ(file, rank){
    return (( 21 + file ) + ( rank * 10 ))
}
```

How to map a square index into `F/R` data?

Taking into account the first square of the board, `21`, subtracting from any given square index and deviding the result by 10, will give us two important values, `quotient = file` and `remainder = rank`.

```js
function SQ2FR(square){
    const quotient = ( Math.abs(21 - square) / 10 )
    const remainder = ( Math.abs(21 - square) % 10 )
}
```


[Video #5](https://www.youtube.com/watch?v=RJQgJDJ-6NE&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=5) is full of important points on `Game Board` and related stuff `pieces, side, ply, 50 move, castling permission`. Each variable is explained (and will be explained later too)

[Video #6](https://www.youtube.com/watch?v=N0JxMO4jx20&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=6) contains another set of game's basics that will be used for valuating the pieces and their representation in the game.

- [Glossary of Chess](https://en.wikipedia.org/wiki/-Glossary_of_chess)
- [Chess piece relative value
](https://en.wikipedia.org/wiki/Chess_piece_relative_value)

| Piece | EMPTY | WP  | WN  | WB  | WR  | WQ  | WK  | BP  | BN  | BB | BR | BQ | BK |
| ------------| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Color |   ⬜️⬛️  |  ⬜️  |  ⬜️  |  ⬜️  |  ⬜️  |  ⬜️  |  ⬜️  |	⬛️  |  ⬛️  |  ⬛️  |  ⬛️  |  ⬛️  |  ⬛️   |
| Value | 0 | 100  | 325  | 325  | 550  | 1000  | 50000  | 100  | 325  | 325 | 550 | 1000 | 50000 |
| Big |     |    |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |    |  ✅  |  ✅  |  ✅  |  ✅  |  ✅   |
| Major |     |    |    |    |  ✅  |  ✅  |  ✅  |    |    |    |  ✅  |  ✅  |  ✅   |
| Minor |     |    |  ✅  |  ✅  |    |    |    |    |  ✅  |  ✅  |    |    |     |
| Pawn  |     |  ✅  |    |    |    |    |    |  ✅  |    |    |    |    |    |	
| Knight |     |    |  ✅  |    |    |    |    |    |  ✅  |    |    |    |    |
| King  |     |    |    |    |    |    |  ✅  |    |    |    |    |    |  ✅   |
| Rook/Queen |     |    |    |    |  ✅  |  ✅  |    |    |    |    |  ✅  |  ✅  |     |
| Bishop/Queen  |     |    |    |  ✅  |    |  ✅  |    |    |    |  ✅  |    |  ✅  |     |
| Slide |     |    |    |  ✅  |  ✅  |  ✅  |    |    |    |  ✅  |  ✅  |  ✅  |     |


### Piece List
On the game board there are 64 squares, while there are 16*2 squares occupied. For generating moves for each position, we should go through all the squares and find the possible moves for the side that has to move.

```
loop( pieces[] )
    if( piece on sq == Side to move )
        generateMoves() for the piece on sq
```

Even at the begining of the game, on which both sides have all their pieces, each side has only 16 pieces out of 64 squares. So the loop above is doing mostly unneccessary checks which can be reduced.

Before giving the solution, we need to know and keep track of the current number of each piece in array `PIECES`. Inside an array with length equal to the size of array `PIECES`, we can keep all the numbers.

```
GameBoard.pieceNum = new Array(13)
```

Like at the begining of the game:

| Piece | EMPTY | WP  | WN  | WB  | WR  | WQ  | WK  | BP  | BN  | BB | BR | BQ | BK |
| ------------| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| pieceNum |   32  |  8  |  2  |  2  |  2  |  1  |  1  |	8  |  2  |  2  |  2  |  1  |  1   |


We always need to know how many of each piece we have and on which square they are. If we consider the maximum number of each piece than we can have on a chess board, regarding the situations that pawns' promotions, it can reach 10. Imagine, 2 already existing Knights in addition to 8 promoted pawns, we can have at max 10 Knight on board. Let's consider this also for all pieces (in theory, even King).

Having this idea, we can have a 1D array that has 10 cells for each piece in array `PIECES`. 

```
Gameboard.pieceList = new Array (13 * 10)
```

This array will be like:

| Index | 0 | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9 | 10 | 11 | 12 | ... |
| ------------| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Square |   100  |  100  |  100  |  100  |  100  |  100  |  100  |	100  |  100  |  100  |  31  |  32  |  33   | ... |

Combination of the array above and the array `pieceNum`, we can always find precisely the each pieces's square for each side

```
sqOfPiece = PieceListArray[index]

index?
PIECES.wP * 10 + wPNum -> 0 based index of number of pieces (GameBoard.pieceNum)
or
PIECES.wN * 10 + wNNum

say we have 4 white pawns GameBoard.pceNum[wP] = 4

for(pceNum = 0; pceNum < GameBoard.pceNum[wP]; ++pceNum) {
	sq = PlistArray[wP * 10 + pceNum]

}

sq1 = PlistArray[wP * 10 + 0]
sq2 = PlistArray[wP * 10 + 1]
sq3 = PlistArray[wP * 10 + 2]
sq4 = PlistArray[wP * 10 + 3]

wP 10 -> 19
```