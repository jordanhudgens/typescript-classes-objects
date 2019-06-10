class Team {
  name: string;
  players: string[];

  constructor(name, players) {
    this.name = name;
    this.players = players;
  }

  generateLineup() {
    return this.players.join(", ");
  }
}

const astrosPlayers = ["Altuve", "Bregman", "Correa", "Springer"];
const astros = new Team("Astros", astrosPlayers);
astros.generateLineup(); //?
astros.name; //?

const blueJaysPlayers = ["Vlad", "Smoak", "Tellez", "Sogard"];
const blueJays = new Team("Blue Jays", blueJaysPlayers);
blueJays.generateLineup(); //?
blueJays.name; //?
