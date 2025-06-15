var game = new Game();

$(document).ready(function () {
    importNavbar("2048", "2048");
    setTheme();

    $("#gameControls").css("display", "");
    $("#endControls").css("display", "none");

    game.setupBoard();
    game.setupInput();
});
