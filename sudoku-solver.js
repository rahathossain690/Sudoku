function Game(matrix){
	this.mat = [[null, null, null, null, null, null, null, null, null, null]];
	this.rem = 0;
	this.solve = function(){
		for(let i = 0; i < 9; i++){
			let row = [null];
			for(let j = 0; j < 9; j++){
				row.push(matrix[i][j]);
			}
			this.mat.push(row);
		}
		for(let i = 1; i < 10; i++){
			for(let j = 1; j < 10; j++){
				if(this.mat[i][j] == 0) this.rem ++;
			}
		}
		this.backtrack();
		if(this.rem) return null;
		let newMat = [];
		for(let i = 1; i <= 9; i++){
			let row = [];
			for(let j = 1; j <= 9; j++){
				row.push(this.mat[i][j]);
			}
			newMat.push(row);
		}
		return newMat;
	}

	this.possible = function(i, j, n){
		for(let k = 1; k <= 9; k++){
			if(this.mat[i][k] == n || this.mat[k][j] == n) return false;
		}
		let imin = 4, imax = 6, jmin = 4, jmax = 6;
		if(i < 4) imin = 1, imax = 3;
		else if(i > 6) imin = 7, imax = 9;
		if(j < 4) jmin = 1, jmax = 3;
		else if(j > 6) jmin = 7, jmax = 9;
		for(let i = imin; i <= imax; i++){
			for(let j = jmin; j <= jmax; j++){
				if(this.mat[i][j] == n) return false;
			}
		}
		return true;
	}
	this.backtrack = function(){
		if(this.rem == 0) return;
		for(let i = 1; i <= 9; i++){
			for(let j = 1; j <= 9; j++){
				if(this.mat[i][j] == 0){
					for(let k = 1; k <= 9; k++){
						if(this.possible(i, j, k)){
							this.mat[i][j] = k;
							this.rem--;
							this.backtrack();
							if(this.rem == 0) break;
							this.mat[i][j] = 0;
							this.rem++;
						}
					}
					return;
				}
			}
		}
	}
}