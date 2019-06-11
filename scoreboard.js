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
var astrosPlayers = ["Altuve", "Bregman", "Correa", "Springer"];
var astros = new Team({
    name: "Astros",
    players: astrosPlayers
});
var blueJaysPlayers = ["Vlad", "Smoak", "Tellez", "Sogard"];
var blueJays = new Team({
    name: "Blue Jays",
    players: blueJaysPlayers
});
var Scoreboard = /** @class */ (function () {
    function Scoreboard() {
    }
    return Scoreboard;
}());
