const log = [
  { day: "mon", steps: 8200 },
  { day: "tue", steps: 4500 },
  { day: "wed", steps: 10100 },
  { day: "thu", steps: 6200 },
  { day: "fri", steps: 12000 },
];

function goalCheck(steps) {
  if (steps >= 8000) {
    return "goal met";
  } else {
    return "below goal";
  }
}

const formatEntry = (entry) => {
  const { day, steps } = entry;
  return `${day.toUpperCase()}: ${steps} steps (${goalCheck(steps)})`;
};

for (const line of log.map(formatEntry)) {
  console.log(line);
}

const goalDays = log.filter((e) => e.steps >= 8000);
console.log(`Goal met on ${goalDays.length} days`);

const total = log.reduce((sum, e) => sum + e.steps, 0);
let average = total / log.length;
console.log(`Total steps: ${total}`);
console.log(`Daily average: ${average}`);

const fullLog = [...log, { day: "sat", steps: 9500 }];
console.log(`Logged days after Saturday: ${fullLog.length}`);