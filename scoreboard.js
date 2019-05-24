var Team = /** @class */ (function () {
    function Team(args) {
        this.name = args.name;
        this.players = args.players;
    }
    Team.prototype.generateLineup = function () {
        var playersWithOrderNumber = this.players.map(function (player, idx) {
            return "<div>" + (idx + 1) + " - " + player + "</div>";
        });
        return playersWithOrderNumber.join("");
    };
    return Team;
}());
var astros = new Team({
    name: "Astros",
    players: ["Altuve", "Bregman", "Correa", "Springer"]
});
astros.generateLineup(); //?
var blueJays = new Team({
    players: ["Vlad", "Smoak", "Tellez", "Sogard"],
    name: "Blue Jays"
});
console.log(blueJays.generateLineup()); //?
var Scoreboard = /** @class */ (function () {
    function Scoreboard(args) {
        this.homeTeam = args.homeTeam;
        this.awayTeam = args.awayTeam;
        this.date = args.date;
    }
    Scoreboard.prototype.scoreboardHtml = function () {
        return "\n    <h1>" + this.date + "</h1>\n    <h2>" + this.homeTeam.name + "</h2>\n    <div>" + this.homeTeam.generateLineup() + "</div>\n    <h2>" + this.awayTeam.name + "</h2>\n    <div>" + this.awayTeam.generateLineup() + "</div>\n    ";
    };
    return Scoreboard;
}());
var todaysGame = new Scoreboard({
    date: "5/24/19",
    homeTeam: astros,
    awayTeam: blueJays
});
console.log(todaysGame.scoreboardHtml());
