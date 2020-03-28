/*
	Simple one.
	Can be done much effeciently.
*/

var currentDigit = null;

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
	if(currentDigit == 0) 
		document.getElementById("r" + i + "" + j).innerHTML =  "";
	else document.getElementById("r" + i + "" + j).innerHTML = currentDigit;
	document.getElementById("b" + currentDigit).classList.remove("clicked"); // can be done with action selector too.
	currentDigit = null;
}

// numpad function
function numpad(digit){
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
}

// solve
document.getElementById("solve").addEventListener("click", noReturn => {
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
	let game = new Game(matrix);
	res = game.solve();
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