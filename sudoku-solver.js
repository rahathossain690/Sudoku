function Game(){
	this.mat = [[null, null, null, null, null, null, null, null, null, null]];
	this.rem = 0;
	this.solve = function(matrix){ 
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
	this.check = function(matrix){
		for(let i = 0; i < 9; i++){
			let row = [null];
			for(let j = 0; j < 9; j++){
				if(matrix[i][j] == 0) return false;
				row.push(matrix[i][j]);
			}
			this.mat.push(row);
		}
		for(let i = 1; i <= 9; i++){
			for(let j = 1; j <= 9; j++){
				let cat = this.mat[i][j];
				this.mat[i][j] = 0;
				if(!this.possible(i, j, cat)) return false;
				this.mat[i][j] = cat;
			}
		}
		return true;
	}
	this.generate = function(){
		let myMat = [];
		for(let iii = 0; iii < 9; iii++){
			myMat.push([0,0,0,0,0,0,0,0,0]);
		}
		let sq = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		while(sq.length > 0){
			let iS = Math.floor(Math.random() * sq.length);
			let num = sq[iS];
			sq.splice(iS, 1);
			while(true){
				let rx = Math.floor(Math.random() * 9);
				let ry = Math.floor(Math.random() * 9);
				if(myMat[rx][ry] != 0) continue;
				myMat[rx][ry] = num;
				break;
			}
		}
		let another_mat = this.solve(myMat);
		let perm = [], arek = [];
		for(let ii = 0; ii < 9; ii++){
			for(let jj = 0; jj < 9; jj++) perm.push([ii, jj]);
		}
		let total = Math.floor(Math.random() * 7) + 30;
		for(; total > 0; total--){
			let idx = Math.floor(Math.random() * perm.length);
			arek.push(perm[idx]);
			perm.splice(idx, 1);
		}
		for(let ii = 0; ii < 9; ii++){
			for(let jj = 0; jj < 9; jj++){
				let paisi = false;
				for(let kk = 0; kk < arek.length; kk++) {
					if (arek[kk][0] == ii && arek[kk][1] == jj){
						paisi = true;
						break;
					}
				}
				if(!paisi) another_mat[ii][jj] = 0;
			}
		}
		return another_mat;
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