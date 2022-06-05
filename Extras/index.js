/*
	Simple one.
	Can be done much effeciently.
*/

var currentDigit = null;
var MATRIX;
// adding event click listener to cells
for(let i = 1; i <= 9; i++){
	for(let j = 1; j <= 9; j++){
		document.getElementById("r" + i + "" + j).addEventListener("click", noReturn => {
			changeCell(i, j);
		});
	}
}

// change cell 
function changeCell(i, j){
	if(currentDigit == null) return;
	if(currentDigit == 0 && MATRIX[i - 1][j - 1] === 0) 
		document.getElementById("r" + i + "" + j).innerHTML =  "";
	else if(MATRIX[i - 1][j - 1] === 0)
		document.getElementById("r" + i + "" + j).innerHTML = currentDigit;
	document.getElementById("b" + currentDigit).classList.remove("clicked"); // can be done with action selector too.
	currentDigit = null;
	ans = checkGame(false)
	if(ans == "Correct!") {
		checkGame()
	} else if (ans == "Incorrect!") {
		checkGame()
	}
}

// numpad function
function numpad(digit){
	for(let i = 0; i <= 9; i++) document.getElementById("b" + i).classList.remove("clicked");
	currentDigit = digit;
	document.getElementById("b" + digit).classList.add("clicked");
}

// clear
function clearGame(){
	for(let i = 1; i <= 9; i++){
		for(let j = 1; j <= 9; j++){
			document.getElementById("r" + i + "" + j).innerHTML = "";
		}
	}
	MATRIX = genMat();
}

// check game
function checkGame(act=true){
	let res = new Game().check(genMat());
	let hobe = true
	const metrix = genMat()
	for(let i = 0; i < metrix.length; i++) {
		for(let j = 0; j < metrix[0].length; j++) {
			if(metrix[i][j] == 0) {
				hobe = false
			}
		}
	}
	let ans = null;
	if(!hobe) {
		if(act) document.getElementById("result").innerHTML = "Incomplete!";
		ans = "Incomplete!"
	}
	else if(res){
		if(act) document.getElementById("result").innerHTML = "Correct!";
		ans = "Correct!"
	} else{
		if(act) document.getElementById("result").innerHTML = "Incorrect!";
		ans = "Incorrect!"
	}
	if(act)document.getElementById("checkThing").click();
	return ans
}

// gererate
function generate(){
	clearGame();
	let game = new Game();
	let res = MATRIX = game.generate();
	for(let i = 1; i <= 9; i++){
		for(let j = 1; j <= 9; j++){
			if(res[i - 1][j - 1] === 0) continue;
			document.getElementById("r" + i + "" + j).innerHTML = res[i - 1][j - 1];
		}
	}
}

function genMat(){
	let matrix = []; // for making an input matrix (2x2 array)
	for(let i = 1; i <= 9; i++){
		let rowVal = [];
		for(let j = 1; j <= 9; j++){
			let digit = document.getElementById("r" + i + "" + j).innerHTML;
			if(digit == "") digit = 0;
			else digit = digit - "0";
			rowVal.push(digit);
		}
		matrix.push(rowVal);
	}
	return matrix;
}

// solve
document.getElementById("solve").addEventListener("click", noReturn => {
	let matrix = genMat();
	let game = new Game();
	res = game.solve(matrix);
	// res will be null if no ans is possible
	// or it will give the result Matrix (2x2 array)
	if(res){
		for(let i = 1; i <= 9; i++){
			for(let j = 1; j <= 9; j++){
				// remember it is 0 indexed
				document.getElementById("r" + i + "" + j).innerHTML = res[i - 1][j - 1];
			}
		}
	} else{
		document.getElementById("wrong").click();
	}});
