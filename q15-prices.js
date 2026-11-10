const prices = {
  laptop: 45000,
  mouse: 800,
  shirt: 600,
  novel: 350,
  jeans: 1200,
};

for (const [item, price] of Object.entries(prices)) {
  console.log(`${item.toUpperCase()}: ${price} birr`);
}

console.log(`Products: ${Object.keys(prices).length}`);

const values = Object.values(prices);
const total = values.reduce((sum, p) => sum + p, 0);
console.log(`Total value: ${total} birr`);

console.log(
  `Most expensive: ${Math.max(...values)} birr, cheapest: ${Math.min(...values)} birr`
);

const cheap = values.filter((p) => p < 1000);
console.log(`Under 1000 birr: ${cheap.length}`);