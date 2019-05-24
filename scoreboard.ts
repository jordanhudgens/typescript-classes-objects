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

interface IScoreboard {
  homeTeam: Team;
  awayTeam: Team;
  date: string;
}

class Scoreboard {
  homeTeam: Team;
  awayTeam: Team;
  date: string;

  constructor(args: IScoreboard) {
    this.homeTeam = args.homeTeam;
    this.awayTeam = args.awayTeam;
    this.date = args.date;
  }

  scoreboardHtml(): string {
    return `
    <h1>${this.date}</h1>
    <h2>${this.homeTeam.name}</h2>
    <div>${this.homeTeam.generateLineup()}</div>
    <h2>${this.awayTeam.name}</h2>
    <div>${this.awayTeam.generateLineup()}</div>
    `;
  }
}

const todaysGame = new Scoreboard({
  date: "5/24/19",
  homeTeam: astros,
  awayTeam: blueJays
});

console.log(todaysGame.scoreboardHtml());
