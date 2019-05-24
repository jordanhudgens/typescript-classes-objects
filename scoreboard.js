var Team = /** @class */ (function () {
    function Team(args) {
        this.name = args.name;
        this.players = args.players;
    }
    Team.prototype.generateLineup = function () {
        return this.name + " - " + this.players.join(", ");
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
blueJays.generateLineup(); //?
var boston = new Team({
    name: "Boston",
    players: ["Betts", "Martinez"]
});
boston.generateLineup(); //?
