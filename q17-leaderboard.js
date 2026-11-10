const matches = [
  { player: "abel", kills: 12, deaths: 4 },
  { player: "sara", kills: 20, deaths: 5 },
  { player: "kal", kills: 8, deaths: 8 },
  { player: "dawit", kills: 15, deaths: 3 },
];

function ratio(kills, deaths) {
  return deaths === 0 ? kills : Math.round((kills / deaths) * 100) / 100;
}

function tierOf(kd) {
  if (kd >= 4) {
    return "S";
  } else if (kd >= 2) {
    return "A";
  } else {
    return "B";
  }
}

const format = ({ player, kills, deaths }) => {
  const kd = ratio(kills, deaths);
  return `${player.toUpperCase()} — K/D ${kd} — Tier ${tierOf(kd)}`;
};

matches.forEach((m, i) => {
  console.log(`${i + 1}. ${format(m)}`);
});

const champion = matches.reduce((best, m) =>
  ratio(m.kills, m.deaths) > ratio(best.kills, best.deaths) ? m : best
);
console.log(`Champion: ${champion.player.toUpperCase()}`);

const sTier = matches.filter((m) => tierOf(ratio(m.kills, m.deaths)) === "S");
console.log(`S-tier players: ${sTier.length}`);

const totalKills = matches.reduce((sum, m) => sum + m.kills, 0);
console.log(`Total kills: ${totalKills}`);

const lowDeaths = matches.some((m) => m.deaths <= 3);
console.log(`Someone had 3 or fewer deaths: ${lowDeaths}`);