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

const astros = new Team("Astros", ["Altuve", "Bregman", "Correa", "Springer"]);
astros.generateLineup(); //?
astros.name; //?

const blueJays = new Team("Blue Jays", ["Vlad", "Smoak", "Tellez", "Sogard"]);
blueJays.generateLineup(); //?
blueJays.name; //?
