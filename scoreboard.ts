class Team {
  name: string;

  constructor(name) {
    this.name = name;
  }

  generateLineup() {
    return "Lineup will go here...";
  }
}

const astros = new Team();
astros.generateLineup(); //?
