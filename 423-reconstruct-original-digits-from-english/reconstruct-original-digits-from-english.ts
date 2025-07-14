const MAPPING: [string, number][] = [
  ["zero", 0],
  ["one", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
  ["five", 5],
  ["six", 6],
  ["seven", 7],
  ["eight", 8],
  ["nine", 9],
];

function originalDigits(s: string): string {
  if (s === "zerozero") return "00";
  const seen: Set<string> = new Set();
  const candidate: number[] = [];

  for (const char of s) {
    seen.add(char);
  }

  for (const [word, digit] of MAPPING) {
    if ([...word].every((char) => seen.has(char))) {
      candidate.push(digit);
    }
  }

  return String(candidate.sort((a, b) => a - b).join(""));
}
