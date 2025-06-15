var game = new Game();

$(document).ready(function () {
    importNavbar("2048", "2048");
    setTheme();
    $(document.body).on("click", "#changeTheme", () => {
        if (window.localStorage.boardgame_theme && window.localStorage.boardgame_theme == "dark") {
            window.localStorage.boardgame_theme = "light";
        } else window.localStorage.boardgame_theme = "dark";

        setTheme();
    });

    $("#gameControls").css("display", "");
    $("#endControls").css("display", "none");

    game.setupBoard();
    game.setupInput();
});
