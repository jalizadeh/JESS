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


A chess board has `8 Files (column)` and `8 Ranks (row)`. The issue is tracking the possible moves for each piece. E.g, if a `rook` stands on point `Rf4 = 29`, it can move in 4 different directions. Moving forward, will lead to squares `30 & 31`, and if we add an extra square, it will become `32` which is on `rank 5` and is not correct.

Or, when at the beginning of the game, `knights` that can have access to squares out of the board. How to calculate them?

    ❗️ In all the positions, Black is on the top and White at the bottom. Which means the White always starts first.

|   | a | b | c | d | e | f | g | h |
| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| 1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| 2 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
| 3 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 |
| 4 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
| 5 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 |
| 6 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 |
| 7 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 |
| 8 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 |


A wise solution is having an 1D array that holds all the consecutive squares. With marking each square as `chess board` (shown in bold), it is possible to track if a piece's moves hit a `offboard` square or not. If hits, the move is stopped at that point. This solution also solves the problem for `knight` piece.

|   |   | a  | b  | c  | d  | e  | f  | g  | h  |   |
| :------:| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
|   |  0 | 1  | 2   | 3  | 4  | 5  | 6  | 7  | 8  | 9  |
|   | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 |
| 1  | 20 | <h3 style="background-color:grey">**21**</h3> |<h3 style="background-color:grey">22</h3> |<h3 style="background-color:grey">23</h3> |<h3 style="background-color:grey">24</h3> |<h3 style="background-color:grey">25</h3> |<h3 style="background-color:grey">26</h3> |<h3 style="background-color:grey">27</h3> |<h3 style="background-color:grey">28</h3> | 29 |
| 2  | 30 |<h3 style="background-color:grey">31</h3> |<h3 style="background-color:grey">32</h3> |<h3 style="background-color:grey">33</h3> |<h3 style="background-color:grey">34</h3> |<h3 style="background-color:grey">35</h3> |<h3 style="background-color:grey">36</h3> |<h3 style="background-color:grey">37</h3> |<h3 style="background-color:grey">38</h3> | 39 |
| 3  | 40 |<h3 style="background-color:grey">41</h3> |<h3 style="background-color:grey">42</h3> |<h3 style="background-color:grey">43</h3> |<h3 style="background-color:grey">44</h3> |<h3 style="background-color:grey">45</h3> |<h3 style="background-color:grey">46</h3> |<h3 style="background-color:grey">47</h3> |<h3 style="background-color:grey">48</h3> | 49 |
| 4  | 50 |<h3 style="background-color:grey">51</h3> |<h3 style="background-color:grey">52</h3> |<h3 style="background-color:grey">53</h3> |<h3 style="background-color:grey">54</h3> |<h3 style="background-color:grey">55</h3> |<h3 style="background-color:grey">56</h3> |<h3 style="background-color:grey">57</h3> |<h3 style="background-color:grey">58</h3> | 59 |
| 5  | 60 |<h3 style="background-color:grey">61</h3> |<h3 style="background-color:grey">62</h3> |<h3 style="background-color:grey">63</h3> |<h3 style="background-color:grey">64</h3> |<h3 style="background-color:grey">65</h3> |<h3 style="background-color:grey">66</h3> |<h3 style="background-color:grey">67</h3> |<h3 style="background-color:grey">68</h3> | 69 |
| 6  | 70 |<h3 style="background-color:grey">71</h3> |<h3 style="background-color:grey">72</h3> |<h3 style="background-color:grey">73</h3> |<h3 style="background-color:grey">74</h3> |<h3 style="background-color:grey">75</h3> |<h3 style="background-color:grey">76</h3> |<h3 style="background-color:grey">77</h3> |<h3 style="background-color:grey">78</h3> | 79 |
| 7  | 80 |<h3 style="background-color:grey">81</h3> |<h3 style="background-color:grey">82</h3> |<h3 style="background-color:grey">83</h3> |<h3 style="background-color:grey">84</h3> |<h3 style="background-color:grey">85</h3> |<h3 style="background-color:grey">86</h3> |<h3 style="background-color:grey">87</h3> |<h3 style="background-color:grey">88</h3> | 89 |
| 8  | 90 |<h3 style="background-color:grey">91</h3> |<h3 style="background-color:grey">92</h3> |<h3 style="background-color:grey">93</h3> |<h3 style="background-color:grey">94</h3> |<h3 style="background-color:grey">95</h3> |<h3 style="background-color:grey">96</h3> |<h3 style="background-color:grey">97</h3> |<h3 style="background-color:grey">98</h3> | 99 |
|   | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 |
|   | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 |



❓ Why in [video #3](https://www.youtube.com/watch?v=koWA_I6zmZk&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=3), we define `SQUARES` only for the back rank of each side?

❓ What if instead of creating two seperate 1D array for Files and Ranks, having one array containing such this object?

In comments it was asked, and he responded `because of performance and handling arrays is easier (for him) to handle`
```json
FR[20] = { file: 0, rank: 0 }
```

well, well, well, it is getting confusing 🤪


## Day 4 - 26/01/2022

Now that I'm watching [video #4](https://www.youtube.com/watch?v=u7BUK-OuWZ8&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=4), I get it better


Regardig the solution mentioned above, we need to fill each square with appropriate value. As we have two arrays, `Files` and `Ranks`, all 120 squares should be labled with `0..7`. Any square that is `offboard`, is labled as `100`. This will lead to the following shape:

    Files:      a = 0 ... h = 7
    Ranks:      1 = 0 ... 8 = 7
    Offboard:   100

|   |   | a  | b  | c  | d  | e  | f  | g  | h  |   |
| :------:| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
|   |  100 | 100  | 100   | 100  | 100  | 100  | 100  | 100  | 100  | 100  |
|   | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 |
| 1  | 100 | <h3 style="background-color: grey">a1/21<br/>0/0</h3> | <h3 style="background-color: grey">b1/22<br/>1/0</h3> | <h3 style="background-color: grey">c1/23<br/>2/0</h3> | <h3 style="background-color: grey">d1/24<br/>3/0</h3> | <h3 style="background-color: grey">e1/25<br/>4/0</h3> | <h3 style="background-color: grey">f1/26<br/>5/0</h3> | <h3 style="background-color: grey">g1/27<br/>6/0</h3> | <h3 style="background-color: grey">h1/28<br/>7/0</h3> | 100 |
| 2  | 100 | <h3 style="background-color: grey">a2/31<br/>0/1</h3> | <h3 style="background-color: grey">b2/32<br/>1/1</h3> | <h3 style="background-color: grey">c2/33<br/>2/1</h3> | <h3 style="background-color: grey">d2/34<br/>3/1</h3> | <h3 style="background-color: grey">e2/35<br/>4/1</h3> | <h3 style="background-color: grey">f2/36<br/>5/1</h3> | <h3 style="background-color: grey">g2/37<br/>6/1</h3> | <h3 style="background-color: grey">h2/38<br/>7/1</h3> | 100 |
| 3  | 100 | <h3 style="background-color: grey">a3/41<br/>0/2</h3> | <h3 style="background-color: grey">b3/42<br/>1/2</h3> | <h3 style="background-color: grey">c3/43<br/>2/2</h3> | <h3 style="background-color: grey">d3/44<br/>3/2</h3> | <h3 style="background-color: grey">e3/45<br/>4/2</h3> | <h3 style="background-color: grey">f3/46<br/>5/2</h3> | <h3 style="background-color: grey">g3/47<br/>6/2</h3> | <h3 style="background-color: grey">h3/48<br/>7/2</h3> | 100 |
| 4  | 100 | <h3 style="background-color: grey">a4/51<br/>0/3</h3> | <h3 style="background-color: grey">b4/52<br/>1/3</h3> | <h3 style="background-color: grey">c4/53<br/>2/3</h3> | <h3 style="background-color: grey">d4/54<br/>3/3</h3> | <h3 style="background-color: grey">e4/55<br/>4/3</h3> | <h3 style="background-color: grey">f4/56<br/>5/3</h3> | <h3 style="background-color: grey">g4/57<br/>6/3</h3> | <h3 style="background-color: grey">h4/58<br/>7/3</h3> | 100 |
| 5  | 100 | <h3 style="background-color: grey">a5/61<br/>0/4</h3> | <h3 style="background-color: grey">b5/62<br/>1/4</h3> | <h3 style="background-color: grey">c5/63<br/>2/4</h3> | <h3 style="background-color: grey">d5/64<br/>3/4</h3> | <h3 style="background-color: grey">e5/65<br/>4/4</h3> | <h3 style="background-color: grey">f5/66<br/>5/4</h3> | <h3 style="background-color: grey">g5/67<br/>6/4</h3> | <h3 style="background-color: grey">h5/68<br/>7/4</h3> | 100 |
| 6  | 100 | <h3 style="background-color: grey">a6/71<br/>0/5</h3> | <h3 style="background-color: grey">b6/72<br/>1/5</h3> | <h3 style="background-color: grey">c6/73<br/>2/5</h3> | <h3 style="background-color: grey">d6/74<br/>3/5</h3> | <h3 style="background-color: grey">e6/75<br/>4/5</h3> | <h3 style="background-color: grey">f6/76<br/>5/5</h3> | <h3 style="background-color: grey">g6/77<br/>6/5</h3> | <h3 style="background-color: grey">h6/78<br/>7/5</h3> | 100 |
| 7  | 100 | <h3 style="background-color: grey">a7/81<br/>0/6</h3> | <h3 style="background-color: grey">b7/82<br/>1/6</h3> | <h3 style="background-color: grey">c7/83<br/>2/6</h3> | <h3 style="background-color: grey">d7/84<br/>3/6</h3> | <h3 style="background-color: grey">e7/85<br/>4/6</h3> | <h3 style="background-color: grey">f7/86<br/>5/6</h3> | <h3 style="background-color: grey">g7/87<br/>6/6</h3> | <h3 style="background-color: grey">h7/88<br/>7/6</h3> | 100 |
| 8  | 100 | <h3 style="background-color: grey">a8/91<br/>0/7</h3> | <h3 style="background-color: grey">b8/92<br/>1/7</h3> | <h3 style="background-color: grey">c8/93<br/>2/7</h3> | <h3 style="background-color: grey">d8/94<br/>3/7</h3> | <h3 style="background-color: grey">e8/95<br/>4/7</h3> | <h3 style="background-color: grey">f8/96<br/>5/7</h3> | <h3 style="background-color: grey">g8/97<br/>6/7</h3> | <h3 style="background-color: grey">h8/98<br/>7/7</h3> | 100 |
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


#### ▶️ [Video #5](https://www.youtube.com/watch?v=RJQgJDJ-6NE&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=5)

Full of important points on `Game Board` and related stuff `pieces, side, ply, 50 move, castling permission`. Each variable is explained (and will be explained later too)

#### ▶️ [Video #6](https://www.youtube.com/watch?v=N0JxMO4jx20&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=6) 

Another set of game's basics that will be used for valuating the pieces and their representation in the game.

- [Glossary of Chess](https://en.wikipedia.org/wiki/-Glossary_of_chess)
- [Chess piece relative value
](https://en.wikipedia.org/wiki/Chess_piece_relative_value)

| Piece | EMPTY | WP ♙ | WN ♘ | WB ♗ | WR ♖ | WQ ♕ | WK ♔ | BP ♟ | BN ♞ | BB ♝ | BR ♜ | BQ ♛ | BK ♚ |
| :------:| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
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
On the game board there are 64 squares, while there are 16*2 (at maximum) squares occupied. For generating moves for each position, we should go through all the squares and find the possible moves for the side that has to move.

```
loop( pieces[] )
    if( piece on sq == Side to move )
        generateMoves() for the piece on sq
```

Even at the begining of the game, on which both sides have all their pieces, each side has only 16 pieces out of 64 squares. So the loop above is doing mostly unneccessary checks which can be reduced.

Before giving the solution, we need to know and keep track of the current number of each piece in the array `PIECES`. Inside an array with length equal to the size of array `PIECES`, we can keep all the numbers.

```
GameBoard.pieceNum = new Array(13)
```

E.g, at the begining of the game:

| Piece | EMPTY | WP ♙ | WN ♘ | WB ♗ | WR ♖ | WQ ♕ | WK ♔ | BP ♟ | BN ♞ | BB ♝ | BR ♜ | BQ ♛ | BK ♚ |
| :------:| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| pieceNum |   32  |  8  |  2  |  2  |  2  |  1  |  1  |	8  |  2  |  2  |  2  |  1  |  1   |


We always need to know how many of each piece we have and on which square they are. If we consider the maximum number of each piece than we can have on a chess board, regarding the situations that pawns' promotions, it can reach 10. Imagine, 2 already existing Knights in addition to 8 promoted pawns, we can have at max 10 Knights on board. Let's consider this also for all pieces (in theory, even King).

Having this idea, we can have an 1D array that has 10 cells for each piece in array `PIECES`. 

```
//+1 is make sure of enough space
Gameboard.pieceList = new Array ((13+1) * 10)
```

At the begining of the game, this array will be (only first 4 are shown):

| Index\Offset | 0 | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9 |
| :------:| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | 
| 0 | 0 | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9 |
| EMPTY |  |  |  |  |  |  |  |  |  |  |
| 1 | 10 | 11  | 12  | 13  | 14  | 15  | 16  | 17  | 18  | 19 |
| WP | 81  | 82  | 83  | 84  | 85  | 86  | 87  | 88  |  |  
| 2 | 20 | 21  | 22  | 23  | 24  | 25  | 26  | 27  | 28  | 29 |
| WN | 92 | 97 |   |  |  |  |  |  |  |  |
| 3 | 30 | 31  | 32  | 33  | 34  | 35  | 36  | 37  | 38  | 39 |
| WB | 93 | 96 |   |  |  |  |  |  |  |  |
| and so on... |  |  |  |  |  |  |  |  |  |  |


Combination of the array above and the array `pieceNum`, we can always find precisely the each pieces's square for each side

We need to find the index of the piece from array   `PIECES` then get the current count of that piece. Finally, a loop over this count on the array above (`pList`), will provide the square of all that chosen piece.

```
for(pceNum = 0; pceNum < GameBoard.pceNum[wP]; ++pceNum) {
	sq = pList[wP * 10 + pceNum]
}

E.g, if the White side has only 4 pawns:
sq1 = pList[wP * 10 + 0]
sq2 = pList[wP * 10 + 1]
sq3 = pList[wP * 10 + 2]
sq4 = pList[wP * 10 + 3]
```


## Day 5 - 31/01/2022
#### ▶️ [Video 7](https://www.youtube.com/watch?v=oc1-_SEitfM&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=7) 

It's all about the basics of generating a unique position key keeping track of all states. To be continued...


## Day 6 - 01/02/2022
#### ▶️ [Video 8](https://www.youtube.com/watch?v=Zx-rN36tc78&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=8)

The implementation of `GameBoard.posKey` from previous session. Let's trust him. I don't really digest this much data and variables, just waiting for a point that these are used...

## Day 7 - 02/02/2022
#### ▶️ [Video 9](https://www.youtube.com/watch?v=dk5eXlZukNY&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=9)

In this lucky day, I solved, myself, the functions `Sq64To120(x)` and `Sq120To64(x)`, but it seems they need `File & Rank` as inputs.

And, also it seems that my solutions are wrong 😞😭

To be continued...


## Day 8 - 04/02/2022

My solution was correct, but I was missing `~~` for calculating the `quotient`. I just leave the following methods here for future (who knows)

```js
function Sq64To120(x){
    let dec = x/8
    let q = ~~dec
    let r = x%8
    return (q*10) + (21+r)
}

function Sq120To64(x){
    let dec = x/10
    let q = ~~dec - 2
    let r = x%10
    return (q*8) + Math.abs(r-1)
}
```


Btw, among the comments of video #9, I got this solution for `Sq64To120(x)` that seems intresting

```js
function Sq64To120(n){
    var offset=21
    if(n>7){
        offset += (Math.floor(n/8))*2
    }
    
    return (n + offset)
}
```


## Day 9 - 05/02/2022
#### ▶️ [Video 10 - FEN Position String #1](https://www.youtube.com/watch?v=5tfuJOTyv20&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=10)

[Forsyth–Edwards Notation (FEN)](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation) is a standard notation for describing a particular board position of a chess game. The purpose of `FEN` is to provide all the necessary information to restart a game from a particular position.

Here's the `FEN` for the starting position:

```
rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
```

| Rank 8 | | Rank 7 | | Rank 6  | | Rank 5 | | Rank 4  | | Rank 3 | | Rank 2 | | Rank 1 | Active Side | Castling Availability | En passant  | Halfmove Clock | Fullmove number  |
| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | 
| rnbqkbnr  | / | pppppppp  | / | 8  | / | 8  | / | 8 | / | 8  | / | PPPPPPPP | / | RNBQKBNR  | w  | KQkq  | - | 0 | 1 |



## Day 10 - 07/02/2022
#### ▶️ [Video 11 - FEN Position String #2 Pieces](https://www.youtube.com/watch?v=AiDN1NBIQBc&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=11)



## Day 11 - 08/02/2022
#### ▶️ [Video 12 - FEN Position String #3](https://www.youtube.com/watch?v=7FCU_Uj_Tf0&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=12)


## Day 12 - 09/02/2022
#### ▶️ [Video 13 - Print Board to console](https://www.youtube.com/watch?v=xHI4RKK_Sk8&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=13)

And this is the result in console

```
------- Game Board -------

8  r  n  b  q  k  b  n  r 
7  p  p  p  p  p  p  p  p 
6  .  .  .  .  .  .  .  . 
5  .  .  .  .  .  .  .  . 
4  .  .  .  .  .  .  .  . 
3  .  .  .  .  .  .  .  . 
2  P  P  P  P  P  P  P  P 
1  R  N  B  Q  K  B  N  R 

   a  b  c  d  e  f  g  h 

Side:	w
enPas:	99
Castle:	KQkq
Key:	79162464
```


## Day 13 - 10/02/2022
#### ▶️ [Video 14 - Set FEN From the GUI](https://www.youtube.com/watch?v=eCxH-8yoFjU&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=14)

## Day 14 - 11/02/2022
#### ▶️ [Video 15 - Piece Lists](https://www.youtube.com/watch?v=TaWlVdsj1us&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=15)

## Day 15-18 - 12~16/02/2022
#### ▶️ [Video 16 - Adding io.js & Printing Piece Lists](https://www.youtube.com/watch?v=16ybkbFSWkY&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=16)

A small function is added for printing the list of squares (used for future debuggings)

There was a bug not listing the last rank, I was struggling finding it. I found this nice [article](https://raygun.com/learn/javascript-debugging-tips), however the bug was deep inside `main` section.

## Day 19-20 - 17~18/02/2022
#### ▶️ [Video 17 - Is A Square Attacked #1](https://www.youtube.com/watch?v=qPAt8tDcljk&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=17)

How to understand if a square is under attack?
> 1. The following solution is accepted for `Pawn`, `King` and `Knight`
> 2. Consider Black side on the top, White on the bottom
> 3. All numbers are 120-squares game board

- Pawn
    - It's better to start by asking 'which side is asking it'. Pawns behave differently. Pawns only attack one rank far from them. The Black Pawn attacks ranks 3-8 while White Pawns attack ranks 6-1
    - E.g, if a White piece be on square 65 (e5), it can be threatened by Pawns on squares 54 (d4) and 56 (f4). So for calculating if a White piece is under attack or not, it is just needed to check if on square `sq - 11` and `sq - 9`, there is any Black Pawn or not

    |   |   | a  | b  | c  | d  | e  | f  | g  | h  |   |
    | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
    | 4  | 50 | . | . | . | <h3 style="background-color:red; padding:5px">♟<br/>[-11]</h3> | &lt; | <h3 style="background-color:red; padding:5px">♟<br/>[-9]</h3> | &lt; | &lt; | &lt; |
    | 5  | &lt; | &lt; | &lt; | &lt; | &lt; | <h3 style="background-color:green">♙</h3> | . | . | . | 69 |

    - And the calculation is vice versa for threatened Black Pawn just by  `sq + 11` and `sq + 9` to find the White Pawns


## Day 21-23 - 19~21/02/2022
#### ▶️ [Video 18 - Is A Square Attacked #2](https://www.youtube.com/watch?v=-PfhmGMV2Kc&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=18)

For calculating the other threats, the variables `KnDir, RkDir, BiDir, KiDir` are defined that can be easily consumed in a loop.

Note that, `QuDir` doesn't exist solelay, but it is combination of `RkDir` and `BiDir` 

How to understand if a square is under attack?
> This solution is applied on diagonal pieces `Rook`, `Bishop` and `Queen`

- Rook
    - These distances are defined in `RkDir` and `BiDir`

    |   |   | a  | b  | c  | d  | e  | f  | g  | h  |   |
    | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
    | 1  | 20 | . | . | . | . | <h3 style="background-color:red; padding:5px">-10</h3> | . | . | . | 29 |
    | 2  | 30 | . | . | . | . | <h3 style="background-color:red; padding:5px">-10</h3> | . | . | . | 39 |
    | 3  | 40 | . | . | . | . | <h3 style="background-color:red; padding:5px">-10</h3> | . | . | . | 49 |
    | 4  | 50 | . | . | . | . | <h3 style="background-color:red; padding:5px">-10</h3> | . | . | . | 59 |
    | 5  | 60 | <h3 style="background-color:red; padding:5px">-1</h3> | <h3 style="background-color:red; padding:5px">-1</h3> | <h3 style="background-color:red; padding:5px">-1</h3> | <h3 style="background-color:red; padding:5px">-1</h3> | <h3 style="background-color:green">♖</h3> | <h3 style="background-color:red; padding:5px">+1</h3> | <h3 style="background-color:red; padding:5px">+1</h3> | <h3 style="background-color:red; padding:5px">+1</h3> | 69 |
    | 6  | 70 | . | . | . | . | <h3 style="background-color:red; padding:5px">+10</h3> | . | . | . | 79 |
    | 7  | 80 | . | . | . | . | <h3 style="background-color:red; padding:5px">+10</h3> | . | . | . | 89 |
    | 8  | 90 | . | . | . | . | <h3 style="background-color:red; padding:5px">+10</h3> | . | . | . | 99 |


## Day 24 - 22/02/2022
#### ▶️ [Video 19 - Is A Square Attacked #3](https://www.youtube.com/watch?v=cGOEjuSvjoM&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=19)

Showing the attacked squares by the piece

```
8/8/8/8/3Q4/8/8/8 w KQkq - 0 1

8  -  -  -  X  -  -  -  X 
7  X  -  -  X  -  -  X  - 
6  -  X  -  X  -  X  -  - 
5  -  -  X  X  X  -  -  - 
4  X  X  X  -  X  X  X  X 
3  -  -  X  X  X  -  -  - 
2  -  X  -  X  -  X  -  - 
1  X  -  -  X  -  -  X  - 
```


## Day 25-27 - 23~25/02/2022
#### ▶️ [Video 20 - Move Structure / Layout #1](https://www.youtube.com/watch?v=uJeNVhk6yns&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=20)

A `move` contains lots of information.
1. From Square
2. To Square
3. Captured Piece
4. EnPas Capture
5. Pawn Start
6. Promoted Piece
7. Castling Move

It is possible to store all these data in a Json object

```js
var Move = {
    fromSq : 31,
    toSq : 41,
    ...
}
```

But the problem will be the efficiency of this method. As the object is huge enough to take lots of processing power in move analysis that later we will do. Another solution is keeping all these data in a single variable, using `bitwise` operations.

Considering the following value, it each bit can store a value

| index | #6 | #5 | #4 | #3 | #2 | #1 | #0 |
| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| binary | 0000 | 0000 | 0000 | 0000 | 0000 | 0000 | 0000 |
| hex | 0 | 0 | 0 | 0 | 0 | 0 | 0 |


Each of the 7 mentioned parameters, can be represented in bits. For example, `From Square = 21` will be:

| index | #6 | #5 | #4 | #3 | #2 | #1 | #0 |
| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| binary | 0000 | 0000 | 0000 | 0000 | 0000 | 0001 | 0101 |
| hex | 0 | 0 | 0 | 0 | 0 | 1 | 5 |


The core idea is using the `masking value` to keep only the needed bits. First we need to know the exact space each parameter takes.
1. From Square : 7 bits
2. To Square : 7 bits
3. Captured Piece : 4 bits
4. EnPas Capture : 1 bit
5. Pawn Start : 1 bit
6. Promoted Piece : 4 bits
7. Castling Move : 1 bit


All together will be

| #6 | #5 | #4 | #3 | #2 | #1 | #0 | Bitwise Masking |
| :------: | :------: | :------: | :------: | :------: | :------: | :------: | ------ |
| 0000 | 0000 | 0000 | 0000 | 0000 | 0111 | 1111 | FromSq = val & 0x7F |
| 0000 | 0000 | 0000 | 0011 | 1111 | 1000 | 0000 | ToSq = (val >> 7) & 0x7F |
| 0000 | 0000 | 0011 | 1100 | 0000 | 0000 | 0000 | Captured = (val >> 14) & 0xF |
| 0000 | 0000 | 0100 | 0000 | 0000 | 0000 | 0000 | EP = val & 0x40000 |
| 0000 | 0000 | 1000 | 0000 | 0000 | 0000 | 0000 | PawnStart = val & 0x80000 |
| 0000 | 1111 | 0000 | 0000 | 0000 | 0000 | 0000 | PromotedPce = (val >> 20) & 0xF |
| 0001 | 0000 | 0000 | 0000 | 0000 | 0000 | 0000 | Castle = val & 0x1000000 |


## Day 27 - 25/02/2022
#### ▶️ [Video 21 - Move Structure / Layout #2](https://www.youtube.com/watch?v=FlTFMbgkycI&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=21)


## Day 28 - 27/02/2022
#### ▶️ [Video 22 - Move Generation #1](https://www.youtube.com/watch?v=FlTFMbgkycI&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=22)

digesting in progress... 🤦‍♂️

## Day 29 - 28/02/2022
#### ▶️ [Video 23 - Move Generation #2 - Pawns](https://www.youtube.com/watch?v=FlTFMbgkycI&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=23)

still digesting in progress... 🤦‍♂️