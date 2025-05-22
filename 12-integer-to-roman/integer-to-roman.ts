const map: [string, number][] = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

function intToRoman(num: number): string {
  let result = "";
  let remainingNumber = num;

  for (const [symbol, value] of map) {
    while (remainingNumber >= value) {
      result += symbol;
      remainingNumber -= value;
    }
  }

  return result;
};