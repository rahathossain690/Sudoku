# Sudoku Solver
Javascript library to solve Sudoku. Made for fun.

# Web page
Link to the page: 

# How to use
## Step 1
Download and add sudoku-solver.js library on your HTML code.
```
<script type="text/javascript" src="sudoku-solver.js"></script>
```
## Step 2
Make Game instance. The class takes game-matrix (2d array) as argument. 

Suppose sudoku input is like this. ![DEMO_SUDOKU_IMAGE](https://github.com/rahathossain690/Sudoku-Solver/blob/master/Extras/demo_game.png?raw=true)

Then the game-matrix will be exactly like shown below. [Carefully! The empty cells must be replaced by 0.] 
```
let matrix = [	[0, 0, 3, 9, 7, 0, 0, 0, 0]	,
		[8, 0, 2, 6, 0, 0, 0, 0, 0]	,
		[0, 7, 1, 0, 8, 0, 0, 4, 0]	,
		[7, 1, 6, 0, 0, 0, 0, 9, 0]	,
		[5, 9, 0, 0, 1, 6, 2, 3, 8]	,
		[0, 3, 8, 4, 0, 0, 6, 7, 0]	,
		[0, 0, 9, 5, 0, 2, 0, 0, 0]	,
		[4, 0, 0, 1, 0, 0, 9, 0, 5]	,
		[1, 0, 5, 0, 9, 0, 4, 0, 3]	];

let game = new Game(matrix);

```
## Step 3
Call the function game.solve(). It returns null if the given matrix is wrong or else it will return the solution matrix.
```
let result = game.solve();

console.log( result );
/*
result will be >
[	[6, 4, 3, 9, 7, 1, 8, 5, 2]	,
	[8, 5, 2, 6, 3, 4, 7, 1, 9]	,
	[9, 7, 1, 2, 8, 5, 3, 4, 6]	,
	[7, 1, 6, 3, 2, 8, 5, 9, 4]	,
	[5, 9, 4, 7, 1, 6, 2, 3, 8]	,	
	[2, 3, 8, 4, 5, 9, 6, 7, 1]	,
	[3, 6, 9, 5, 4, 2, 1, 8, 7]	,
	[4, 8, 7, 1, 6, 3, 9, 2, 5]	,
	[1, 2, 5, 8, 9, 7, 4, 6, 3]	]
*/
```

Thank you.
