interface ITeam {
  name: string;
  players: string[];
}

class Team {
  name: string;
  players: string[];

  constructor(args: ITeam) {
    this.name = args.name;
    this.players = args.players;
  }

  generateLineup() {
    return `${this.name} - ${this.players.join(", ")}`;
  }
}

const astros = new Team({
  name: "Astros",
  players: ["Altuve", "Bregman", "Correa", "Springer"]
});
astros.generateLineup(); //?

const blueJays = new Team({
  players: ["Vlad", "Smoak", "Tellez", "Sogard"],
  name: "Blue Jays"
});
blueJays.generateLineup(); //?

const boston = new Team({
  name: "Boston",
  players: ["Betts", "Martinez"]
});

boston.generateLineup(); //?
