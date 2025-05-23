const map = new Map([
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
]);

function romanToInt(s: string): number {
  const split = s.split("");
  let index = 0;
  let nums: number[] = [];

  while (index < s.length) {
    let str = split[index] + split[index + 1];
    if (map.has(str)) {
      index = index + 2;
    } else {
      str = split[index];
      index++;
    }
    nums.push(map.get(str)!);
  }

  return nums.reduce((acc, currentValue) => acc + currentValue);
};