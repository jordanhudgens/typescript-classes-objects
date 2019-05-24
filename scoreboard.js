var Team = /** @class */ (function () {
    function Team(name) {
        this.name = name;
    }
    Team.prototype.generateLineup = function () {
        return this.name;
    };
    return Team;
}());
var astros = new Team("Astros");
astros.generateLineup(); //?
var blueJays = new Team("Blue Jays");
blueJays.generateLineup(); //?
