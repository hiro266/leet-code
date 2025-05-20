function numJewelsInStones(jewels: string, stones: string): number {
  const map = new Map(jewels.split("").map((str) => [str, 0]));
  const splitStones = stones.split("");

  for (const str of splitStones) {
    if (map.has(str)) {
      const value = map.get(str);
      if (value !== undefined) map.set(str, value + 1);
    }
  }

  return Array.from(map.values()).reduce(
    (acc, currentValue) => acc + currentValue
  );
};