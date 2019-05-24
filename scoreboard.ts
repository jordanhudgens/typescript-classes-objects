class Team {
  name: string;

  constructor(name) {
    this.name = name;
  }

  generateLineup() {
    return this.name;
  }
}

const astros = new Team("Astros");
astros.generateLineup(); //?

const blueJays = new Team("Blue Jays");
blueJays.generateLineup(); //?
