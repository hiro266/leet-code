function distributeCandies(candyType: number[]): number {
  const seen = new Set(candyType);
  return seen.size < candyType.length / 2 ? seen.size : candyType.length / 2;
};