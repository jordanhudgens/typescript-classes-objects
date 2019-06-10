class Team {
  name: string;

  constructor(name) {
    this.name = name;
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
