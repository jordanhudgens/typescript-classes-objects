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

  generateLineup(): string {
    const playersWithOrderNumber = this.players.map((player, idx) => {
      return `<div>${idx + 1} - ${player}</div>`;
    });

    return playersWithOrderNumber.join("");
  }
}

const astrosPlayers = ["Altuve", "Bregman", "Correa", "Springer"];
const astros = new Team({
  name: "Astros",
  players: astrosPlayers
});

astros.generateLineup(); //?
astros.name; //?

const blueJaysPlayers = ["Vlad", "Smoak", "Tellez", "Sogard"];
const blueJays = new Team({
  name: "Blue Jays",
  players: blueJaysPlayers
});
blueJays.generateLineup(); //?
blueJays.name; //?
