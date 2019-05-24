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
