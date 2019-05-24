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

const astros = new Team({
  name: "Astros",
  players: ["Altuve", "Bregman", "Correa", "Springer"]
});
astros.generateLineup(); //?

const blueJays = new Team({
  players: ["Vlad", "Smoak", "Tellez", "Sogard"],
  name: "Blue Jays"
});

console.log(blueJays.generateLineup()); //?
