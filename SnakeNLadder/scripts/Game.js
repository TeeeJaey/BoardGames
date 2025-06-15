class Game {
    board = [];
    boardImgNmbr = 0;
    gameStarted = false;
    start3turns = 0;
    isAnimationOn = false;
    gameOver = false;

    players = [];
    nmbrOfPlayers = 2;
    currPlayer = 0;
    diceVal = 0;
    finalRanking = [];

    setBoardImage(boardImgNmbr = 0) {
        this.boardImgNmbr = boardImgNmbr;
        var boardImgPath = "images/board" + this.boardImgNmbr + ".jpg";
        $(".board").attr("src", boardImgPath);
    }

    setupBoard() {
        var { board, boardImgNmbr } = this;

        var boardWidth = $("#theBoard").width();
        var t = boardWidth - boardWidth / 10;
        var l = -40;
        var d = boardWidth / 10;
        board.push(new Cell(0, t, l, null));

        var dirleft = false;
        var i = 1;
        while (i <= 100) {
            t = boardWidth - 65 - (Math.ceil(i / 10) - 1) * d;

            if ((i - 1) / 10 == Math.round(i / 10) && i != 1) dirleft = !dirleft;
            else {
                if (dirleft) l = l - d;
                else l = l + d;
            }

            board.push(new Cell(i, t, l, null));
            i += 1;
        }

        switch (boardImgNmbr) {
            case 0: {
                board[3].snakeOrLadder = new SnakeLadder(3, 20);
                board[6].snakeOrLadder = new SnakeLadder(6, 14);
                board[8].snakeOrLadder = new SnakeLadder(8, 4);
                board[11].snakeOrLadder = new SnakeLadder(11, 28);
                board[15].snakeOrLadder = new SnakeLadder(15, 34);
                board[17].snakeOrLadder = new SnakeLadder(17, 74);
                board[18].snakeOrLadder = new SnakeLadder(18, 1);
                board[22].snakeOrLadder = new SnakeLadder(22, 37);
                board[26].snakeOrLadder = new SnakeLadder(26, 10);
                board[38].snakeOrLadder = new SnakeLadder(38, 59);
                board[39].snakeOrLadder = new SnakeLadder(39, 5);
                board[49].snakeOrLadder = new SnakeLadder(49, 67);
                board[51].snakeOrLadder = new SnakeLadder(51, 6);
                board[54].snakeOrLadder = new SnakeLadder(54, 36);
                board[56].snakeOrLadder = new SnakeLadder(56, 1);
                board[57].snakeOrLadder = new SnakeLadder(57, 76);
                board[60].snakeOrLadder = new SnakeLadder(60, 23);
                board[61].snakeOrLadder = new SnakeLadder(61, 78);
                board[73].snakeOrLadder = new SnakeLadder(73, 86);
                board[75].snakeOrLadder = new SnakeLadder(75, 28);
                board[81].snakeOrLadder = new SnakeLadder(81, 98);
                board[83].snakeOrLadder = new SnakeLadder(83, 45);
                board[85].snakeOrLadder = new SnakeLadder(85, 59);
                board[88].snakeOrLadder = new SnakeLadder(88, 91);
                board[90].snakeOrLadder = new SnakeLadder(90, 48);
                board[92].snakeOrLadder = new SnakeLadder(92, 25);
                board[97].snakeOrLadder = new SnakeLadder(97, 87);
                board[99].snakeOrLadder = new SnakeLadder(99, 63);
                break;
            }
            case 1: {
                board[1].snakeOrLadder = new SnakeLadder(1, 38);
                board[4].snakeOrLadder = new SnakeLadder(4, 14);
                board[9].snakeOrLadder = new SnakeLadder(9, 31);
                board[17].snakeOrLadder = new SnakeLadder(17, 7);
                board[21].snakeOrLadder = new SnakeLadder(21, 42);
                board[28].snakeOrLadder = new SnakeLadder(28, 84);
                board[51].snakeOrLadder = new SnakeLadder(51, 67);
                board[54].snakeOrLadder = new SnakeLadder(54, 34);
                board[62].snakeOrLadder = new SnakeLadder(62, 19);
                board[64].snakeOrLadder = new SnakeLadder(64, 60);
                board[72].snakeOrLadder = new SnakeLadder(72, 91);
                board[80].snakeOrLadder = new SnakeLadder(80, 99);
                board[87].snakeOrLadder = new SnakeLadder(87, 36);
                board[93].snakeOrLadder = new SnakeLadder(93, 73);
                board[95].snakeOrLadder = new SnakeLadder(95, 75);
                board[98].snakeOrLadder = new SnakeLadder(98, 79);
                break;
            }
            case 2: {
                board[2].snakeOrLadder = new SnakeLadder(2, 38);
                board[7].snakeOrLadder = new SnakeLadder(7, 14);
                board[8].snakeOrLadder = new SnakeLadder(8, 31);
                board[15].snakeOrLadder = new SnakeLadder(15, 26);
                board[16].snakeOrLadder = new SnakeLadder(16, 6);
                board[21].snakeOrLadder = new SnakeLadder(21, 42);
                board[28].snakeOrLadder = new SnakeLadder(28, 84);
                board[36].snakeOrLadder = new SnakeLadder(36, 44);
                board[39].snakeOrLadder = new SnakeLadder(46, 25);
                board[49].snakeOrLadder = new SnakeLadder(49, 11);
                board[51].snakeOrLadder = new SnakeLadder(51, 67);
                board[62].snakeOrLadder = new SnakeLadder(62, 19);
                board[64].snakeOrLadder = new SnakeLadder(64, 60);
                board[71].snakeOrLadder = new SnakeLadder(71, 91);
                board[74].snakeOrLadder = new SnakeLadder(74, 53);
                board[78].snakeOrLadder = new SnakeLadder(78, 98);
                board[87].snakeOrLadder = new SnakeLadder(87, 94);
                board[89].snakeOrLadder = new SnakeLadder(89, 68);
                board[92].snakeOrLadder = new SnakeLadder(92, 88);
                board[95].snakeOrLadder = new SnakeLadder(95, 75);
                board[99].snakeOrLadder = new SnakeLadder(99, 80);
                break;
            }
            case 3: {
                board[4].snakeOrLadder = new SnakeLadder(4, 14);
                board[9].snakeOrLadder = new SnakeLadder(9, 31);
                board[17].snakeOrLadder = new SnakeLadder(17, 7);
                board[20].snakeOrLadder = new SnakeLadder(20, 38);
                board[28].snakeOrLadder = new SnakeLadder(28, 84);
                board[40].snakeOrLadder = new SnakeLadder(40, 59);
                board[51].snakeOrLadder = new SnakeLadder(51, 67);
                board[63].snakeOrLadder = new SnakeLadder(63, 81);
                board[64].snakeOrLadder = new SnakeLadder(64, 60);
                board[89].snakeOrLadder = new SnakeLadder(89, 26);
                board[95].snakeOrLadder = new SnakeLadder(95, 75);
                board[99].snakeOrLadder = new SnakeLadder(99, 78);
                break;
            }
        }
    }

    setupPlayers() {
        this.nmbrOfPlayers = $("input[name='nmbrOfPlayers']:checked").val();

        var boardWidth = $("#theBoard").width();
        $(".coin").css({ display: "", top: boardWidth - boardWidth / 10 });

        var i = 0;
        var color = "Red";
        while (i < this.nmbrOfPlayers) {
            if (i == 0) color = "Red";
            if (i == 1) color = "Green";
            if (i == 2) color = "Blue";
            if (i == 3) color = "Yellow";
            this.players.push(new Player(color, 0, 540, -50, false));
            i += 1;
        }
        if (this.nmbrOfPlayers < 4) $("#YellowCoin").remove();
        if (this.nmbrOfPlayers < 3) $("#BlueCoin").remove();

        $("#instruct").css("color", this.players[this.currPlayer].color);
        $("#instruct").text(this.players[this.currPlayer].color + " Play");
    }

    checkSnakeOrLadder(currCoin) {
        var { board, currPlayer, players } = game;

        if (board[players[currPlayer].position].snakeOrLadder == null) return;

        var snakeOrLadder = board[players[currPlayer].position].snakeOrLadder;
        players[currPlayer].position = snakeOrLadder.endPos;

        players[currPlayer].topVal = board[players[currPlayer].position].topVal;
        players[currPlayer].leftVal = board[players[currPlayer].position].leftVal;
        currCoin.animate(
            { top: players[currPlayer].topVal.toString() + "px", left: players[currPlayer].leftVal.toString() + "px" },
            700,
        );

        return this.checkSnakeOrLadder(currCoin);
    }

    checkPlayerWon() {
        var { players, currPlayer } = game;

        if (players[currPlayer].position == 100) {
            game.finalRanking.push(currPlayer);
            players[currPlayer].finalRank = game.finalRanking.length;
            $(".endInstruct").css("display", "block");

            const div = document.createElement("div");
            div.textContent = players[currPlayer].finalRank + " - " + players[currPlayer].color;
            div.style.color = players[currPlayer].color;
            $(".endInstruct").append(div);
            return true;
        }

        return false;
    }

    changePlayer() {
        var { players, nmbrOfPlayers } = game;

        game.currPlayer += 1;
        if (game.currPlayer == nmbrOfPlayers) game.currPlayer = 0;

        if (game.finalRanking.length == players.length) {
            $("#instruct").text("Game Over!");
            $("#instruct").css("color", "black");
            game.gameOver = true;
            return;
        }

        if (players[game.currPlayer].finalRank > -1) {
            this.changePlayer();
        }

        $("#instruct").css("color", players[game.currPlayer].color);
        $("#instruct").text(players[game.currPlayer].color + " Play");
    }

    play() {
        var { currPlayer, players, diceVal } = game;

        $(".dice").attr("src", "images/dice" + diceVal.toString() + ".png");
        $("#instruct").css("color", players[currPlayer].color);

        var currCoin = $("#" + players[currPlayer].color + "Coin");
        if (players[currPlayer].started) {
            $("#instruct").text(players[currPlayer].color + " Played : " + diceVal);
            moveCoin(currCoin);
        } else {
            if (diceVal == 6) {
                $("#instruct").text(players[currPlayer].color + " Played : " + diceVal);
                players[currPlayer].started = true;
                game.start3turns = 0;
            } else {
                game.start3turns += 1;
                if (game.start3turns == 3) {
                    game.start3turns = 0;
                    this.changePlayer();
                }
            }
            game.isAnimationOn = false;
            game.autoSave();
        }
    }

    autoSave() {
        if (!this.gameStarted) return;
        if (this.gameOver) return;

        localStorage.boardgame_snakeladder = JSON.stringify(game);
    }

    autoLoad() {
        var gameData = localStorage.boardgame_snakeladder;
        if (!gameData || gameData == null) return;

        var loadedGame = JSON.parse(gameData);
        this.boardImgNmbr = loadedGame.boardImgNmbr;
        this.setupBoard();

        this.gameStarted = loadedGame.gameStarted;
        this.start3turns = loadedGame.start3turns;
        this.isAnimationOn = false;
        this.gameOver = loadedGame.gameOver;

        this.players = loadedGame.players;
        this.nmbrOfPlayers = loadedGame.nmbrOfPlayers;
        this.currPlayer = loadedGame.currPlayer;
        this.diceVal = loadedGame.diceVal;
        this.finalRanking = loadedGame.finalRanking;

        if (this.nmbrOfPlayers < 4) $("#YellowCoin").remove();
        if (this.nmbrOfPlayers < 3) $("#BlueCoin").remove();

        this.setBoardImage(this.boardImgNmbr);
        $("#startcontrols").css("display", "none");
        $("#gameControls").css("display", "");
        $("#endControls").css("display", "none");
        $("#instruct").css("color", this.players[this.currPlayer].color);
        $("#instruct").text(this.players[this.currPlayer].color + " Play");

        $(".board").css({ display: "" });

        var boardWidth = $("#theBoard").width();
        $(".coin").css({ display: "", top: boardWidth - boardWidth / 10 });

        this.players.forEach(player => {
            player.topVal = this.board[player.position].topVal;
            player.leftVal = this.board[player.position].leftVal;

            var currCoin = $("#" + player.color + "Coin");
            currCoin.animate(
                {
                    "z-index": (player.topVal + 50).toString(),
                    top: player.topVal.toString() + "px",
                    left: player.leftVal.toString() + "px",
                },
                300,
            );
        });
    }
}
