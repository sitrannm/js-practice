const recipes = [
  { name: "pancakes", ingredients: "flour,milk,egg" },
  { name: "omelette", ingredients: "egg,cheese,milk" },
  { name: "toast", ingredients: "bread,butter" },
];

const format = ({ name, ingredients }) =>
  `${name.toUpperCase()}: ${ingredients.split(",").join(", ")}`;

for (const line of recipes.map(format)) {
  console.log(line);
}

const totalIngredients = recipes.reduce(
  (sum, r) => sum + r.ingredients.split(",").length,
  0
);
console.log(`Total ingredients used: ${totalIngredients}`);

const withEgg = recipes.filter((r) => r.ingredients.includes("egg"));
console.log(`Recipes with egg: ${withEgg.length}`);

const most = recipes.reduce((best, r) =>
  r.ingredients.split(",").length > best.ingredients.split(",").length ? r : best
);
console.log(`Most ingredients: ${most.name} (${most.ingredients.split(",").length})`);