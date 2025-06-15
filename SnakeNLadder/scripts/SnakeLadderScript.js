var game = new Game();

$(document).ready(function () {
    importNavbar("SnakeLadder", "Snake & Ladder");
    setTheme();
    game.setBoardImage(0);

    $("#startcontrols").css("display", "");
    $("#gameControls").css("display", "none");
    $("#endControls").css("display", "none");
    $(".coin").css({ display: "none" });
    $(".board").css({ display: "none" });

    game.autoLoad();

    $(".boardSelector").click(function () {
        $(".boardSelected").removeClass("boardSelected");
        $(this).addClass("boardSelected");
        game.setBoardImage(parseInt(this.id.split("_")[1]));
    });

    $("#start").click(function () {
        $(".board").css({ display: "" });
        game.setupBoard();
        game.setupPlayers();
        $("#startcontrols").css("display", "none");
        $("#gameControls").css("display", "");
        $("#endControls").css("display", "none");
        game.gameStarted = true;
    });

    const startNewGame = function () {
        Swal.fire({
            title: "Are you sure?",
            text: "You may lose your progress!!!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I confirm!",
        }).then(result => {
            if (result.isConfirmed) {
                delete localStorage.boardgame_snakeladder;
                document.location.reload(true);
            }
        });
    };

    $("#newGame1").click(startNewGame);
    $("#newGame2").click(startNewGame);

    $(".dice").click(function () {
        if (!game.gameStarted) return;
        if (game.gameOver) return;
        if (game.isAnimationOn) return;

        rollDice();
    });
});
