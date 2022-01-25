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


A chess board has `8 Files (column)` and `8 Ranks (row)`. The issue is tracking the possible moves for each piece. E.g, if a `rook` stands on point `Rf4 = 29`, it can move in 4 different directions. Moving forward, will lead to cells `30 & 31`, and if we add an extra cell, it will become `32` which on `rank 5` and is not correct.

Or, when at the beginning of the game, `knights` that can have access to cells out of the board. How to calculate them?

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


A wise solution is having a 1D array that holds all the consecutive cells. With marking each cell as `chess board` (shown in bold), it is possible to track if a piece's moves hit a `offboard` cell or not. If hits, the move is stopped at that point. This solution also solves the problem for `knight` piece.

|   |   | a  | b  | c  | d  | e  | f  | g  | h  | 9  |
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