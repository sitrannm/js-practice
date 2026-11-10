const inventory = [
  { sku: "A1", name: "pen", stock: 40, restock: 10 },
  { sku: "B2", name: "notebook", stock: 5, restock: 10 },
  { sku: "C3", name: "eraser", stock: 0, restock: 20 },
  { sku: "D4", name: "ruler", stock: 25, restock: 10 },
];

function status(stock, restock) {
  if (stock === 0) {
    return "OUT";
  } else {
    return stock <= restock ? "LOW" : "OK";
  }
}

const format = ({ name, stock, restock }) =>
  `${name.toUpperCase()}: ${stock} in stock — ${status(stock, restock)}`;

for (const line of inventory.map(format)) {
  console.log(line);
}

const toRestock = inventory
  .filter((i) => i.stock <= i.restock)
  .map((i) => i.name);
console.log(`Items to restock: ${toRestock.join(", ")}`);

const totalUnits = inventory.reduce((sum, i) => sum + i.stock, 0);
console.log(`Total units: ${totalUnits}`);

const outOfStock = inventory.find((i) => i.stock === 0);
console.log(`First out of stock: ${outOfStock?.name ?? "none"}`);

const allInStock = inventory.every((i) => i.stock > 0);
console.log(`Everything in stock: ${allInStock}`);

console.log(`Lowest stock level: ${Math.min(...inventory.map((i) => i.stock))}`);