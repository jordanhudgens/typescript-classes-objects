class Team {
  name: string;
  players: string[];

  constructor(name, players) {
    this.name = name;
    this.players = players;
  }

  generateLineup() {
    return "Lineup will go here...";
  }
}

const astros = new Team("Astros");
astros.generateLineup(); //?
astros.name; //?

const blueJays = new Team("Blue Jays");
blueJays.generateLineup(); //?
blueJays.name; //?
