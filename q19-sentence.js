const sentence = "the quick brown fox jumps";

const words = sentence.split(" ");
console.log(`Word count: ${words.length}`);

const upper = words.map((w) => w.toUpperCase());
for (const word of upper) {
  console.log(word);
}

const longWords = words.filter((w) => w.length >= 5);
console.log(`Long words (5+ letters): ${longWords.length}`);

console.log(`Slug: ${words.join("-")}`);

const hasFox = words.some((w) => w === "fox");
console.log(`Contains "fox": ${hasFox}`);

const longest = words.reduce((best, w) => (w.length > best.length ? w : best));
console.log(`Longest word: ${longest.toUpperCase()} (${longest.length} letters)`);

const totalLetters = words.reduce((sum, w) => sum + w.length, 0);
console.log(`Total letters: ${totalLetters}`);