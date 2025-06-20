function numEquivDominoPairs(dominoes: number[][]): number {
  const counts = new Map();

  for (const domino of dominoes) {
    const sortedDomino = JSON.stringify(domino.sort((a, b) => a - b));
    counts.set(sortedDomino, (counts.get(sortedDomino) ?? 0) + 1);
  }

  let result = 0;
  for (const value of Array.from(counts.values())) {
    const pairCount = (value * (value - 1)) / 2;
    result = result + pairCount;
  }

  return result; 
};