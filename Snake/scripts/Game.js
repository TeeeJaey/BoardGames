const cols = 24;
const rows = 24;

class Game {
    constructor() {
        this.board = this.getNewBoard();
        this.gameOver = false;
        this.status = -1;
        this.score = 0;

        this.snake = new Snake();
    }

    moveUp = () => (this.snake.direction = this.snake.lastDirection == "D" ? this.snake.direction : "U");
    moveDown = () => (this.snake.direction = this.snake.lastDirection == "U" ? this.snake.direction : "D");
    moveLeft = () => (this.snake.direction = this.snake.lastDirection == "R" ? this.snake.direction : "L");
    moveRight = () => (this.snake.direction = this.snake.lastDirection == "L" ? this.snake.direction : "R");

    getNewBoard() {
        var newBoard = [];

        for (var i = 0; i < rows; i++) {
            newBoard.push([]);
            for (var j = 0; j < cols; j++) {
                newBoard[i].push(new Cell(i, j));
            }
        }

        return newBoard;
    }

    spawnFood() {
        let placeFood = false;

        while (!placeFood) {
            const foodRow = Math.floor(Math.random() * rows);
            const foodCol = Math.floor(Math.random() * cols);
            const foodCell = game.board[foodRow][foodCol];

            if (!foodCell.isDanger && !foodCell.isSnake && !foodCell.isFood) {
                placeFood = true;
                foodCell.setFood();
            }
        }
    }

    getBoardCellByID(cellID) {
        var i = cellID.split(":")[0];
        var j = cellID.split(":")[1];
        return game.board[i][j];
    }

    resetTimer() {
        var self = this;
        self.spawnFood();
        clearInterval(self.gameInterval);
        self.gameInterval = window.setInterval(function () {
            self.snake.move();
            self.snake.paint();
        }, self.snake.speed);
    }

    endGame() {
        clearInterval(this.gameInterval);
        this.gameOver = true;
        this.status = 1;
    }
}
