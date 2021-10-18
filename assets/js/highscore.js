function PrintHighscores
var highscore = JSON.parse(window.localStorage.getItem("highscores"))

function clearHighscores() {
    window.localStorage.removeItem("highscores")
    window.location.reload();
}