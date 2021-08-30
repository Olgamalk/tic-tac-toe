class TicTacToe {
    currentPlayer = 'x';
    winner = null;
    gameMatrix = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]
    constructor() {

    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameMatrix[rowIndex][columnIndex] === null) {
            this.gameMatrix[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
        }        
    }

    isFinished() {
        return this.noMoreTurns() || this.getWinner() !== null;
    }

    getWinner() {
        for (let i = 0; i < this.gameMatrix.length; i++) {
            if (this.gameMatrix[i][0] === this.gameMatrix[i][1] && this.gameMatrix[i][0] === this.gameMatrix[i][2] && this.gameMatrix[i][0] !== null) {
            return this.gameMatrix[i][0];
            };
        };

        if (this.gameMatrix[0][0] === this.gameMatrix[1][0] && this.gameMatrix[1][0] === this.gameMatrix[2][0] && this.gameMatrix[2][0] !== null) return this.gameMatrix[2][0];
        if (this.gameMatrix[0][1] === this.gameMatrix[1][1] && this.gameMatrix[1][1] === this.gameMatrix[2][1] && this.gameMatrix[2][1] !== null) return this.gameMatrix[2][1];
        if (this.gameMatrix[0][2] === this.gameMatrix[1][2] && this.gameMatrix[1][2] === this.gameMatrix[2][2] && this.gameMatrix[2][2] !== null) return this.gameMatrix[2][2];
        if (this.gameMatrix[0][0] === this.gameMatrix[1][1] && this.gameMatrix[1][1] === this.gameMatrix[2][2] && this.gameMatrix[2][2] !== null) return this.gameMatrix[2][2];
        if (this.gameMatrix[0][2] === this.gameMatrix[1][1] && this.gameMatrix[1][1] === this.gameMatrix[2][0] && this.gameMatrix[2][0] !== null) return this.gameMatrix[2][0];

        return null;
    }

    noMoreTurns() {
        return !this.gameMatrix.some(e => e.some(sum => sum === null));
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameMatrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
