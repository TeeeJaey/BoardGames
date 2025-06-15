class Cell {
    constructor(position, topVal, leftVal, snakeLadder) {
        this.position = position;
        this.topVal = topVal;
        this.leftVal = leftVal;
        this.snakeOrLadder = snakeLadder;
    }
}

class SnakeLadder {
    constructor(startPos, endPos) {
        this.startPos = startPos;
        this.endPos = endPos;
    }
}

class Player {
    constructor(color, position, topVal, leftVal, started) {
        this.color = color;
        this.position = position;
        this.topVal = topVal;
        this.leftVal = leftVal;
        this.started = started;
        this.finalRank = -1;
    }
}
