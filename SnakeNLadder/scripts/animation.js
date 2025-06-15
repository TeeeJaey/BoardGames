function rollDice() {
    game.isAnimationOn = true;
    var cnt = 0;
    var diceRollAnim = setInterval(function () {
        if (cnt == 5) {
            clearInterval(diceRollAnim);
            game.play();
            return;
        }
        cnt += 1;
        var img = cnt % 3;
        game.diceVal = Math.floor(Math.random() * 6) + 1;
        $(".dice").attr("src", "images/diceRoll" + img.toString() + ".png");
    }, 200);
}

function moveCoin(currCoin) {
    var { currPlayer, players, diceVal, board } = game;

    if (players[currPlayer].position + diceVal > 100) {
        game.changePlayer();
        game.isAnimationOn = false;
        game.autoSave();
        return;
    }

    game.isAnimationOn = true;
    cnt = 0;

    var coinMoveAnim = setInterval(function () {
        if (cnt == diceVal) {
            clearInterval(coinMoveAnim);
            game.checkSnakeOrLadder(currCoin);
            var playerWon = game.checkPlayerWon();

            if (playerWon || diceVal != 6) game.changePlayer();

            game.isAnimationOn = false;
            game.autoSave();
            return;
        }
        cnt += 1;
        players[currPlayer].position = players[currPlayer].position + 1;

        players[currPlayer].topVal = board[players[currPlayer].position].topVal;
        players[currPlayer].leftVal = board[players[currPlayer].position].leftVal;
        currCoin.animate(
            {
                "z-index": (players[currPlayer].topVal + 50).toString(),
                top: players[currPlayer].topVal.toString() + "px",
                left: players[currPlayer].leftVal.toString() + "px",
            },
            300,
        );
    }, 300);
}
