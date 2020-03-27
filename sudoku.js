

let isSolving = false
let issolved = false;
let mat, rem;
let clickable = true;
let lastClicked = null;

function getMat(){
	mat = [[],[],[],[],[],[],[],[],[],[]];
	rem = 0;
	for(let i = 1; i <= 9; i++){
		mat[i].push(null);
		for(let j = 1; j <= 9; j++){
			k = document.getElementById("r" + i + "" + j).innerHTML
			if(k == "") k = 0, rem++;
			else k = k - '0'
			mat[i].push(k);
		}
	}
}

function checkRight(){

}

function click(n){
	//document.getElementById("c" + n).classList.add("clicked");
	lastClicked = n; console.log(n);
}

function print(){
	for(let i = 1; i <= 9; i++){
		for(let j = 1; j <= 9; j++){
			document.getElementById("r" + i + "" + j).innerHTML= mat[i][j];
		}
	}
}

function solve(){
	lastClicked = null;
	getMat();
	backTrack();
	print();
}

function possible(i, j, n){

	for(let k = 1; k <= 9; k++){
		if(mat[i][k] == n || mat[k][j] == n) return false;
	}
	let imin = 4, imax = 6, jmin = 4, jmax = 6;

	if(i < 4) imin = 1, imax = 3;
	else if(i > 6) imin = 7, imax = 9;
	if(j < 4) jmin = 1, jmax = 3;
	else if(j > 6) jmin = 7, jmax = 9;

	for(let i = imin; i <= imax; i++){
		for(let j = jmin; j <= jmax; j++){
			if(mat[i][j] == n) return false;
		}
	}
	return true;
}

function backTrack(){
	for(let i = 1; i <= 9; i++){
		for(let j = 1; j <= 9; j++){
			if(mat[i][j] == 0){
				for(let k = 1; k <= 9; k++){
					if(possible(i, j, k)){
						mat[i][j] = k;
						rem--;
						backTrack();
						if(rem == 0) break;
						mat[i][j] = 0;
						rem++;
					}
				}
				return;
			}
		}
	}
}
