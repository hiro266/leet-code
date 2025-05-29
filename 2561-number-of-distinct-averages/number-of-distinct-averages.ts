function distinctAverages(nums: number[]): number {
  const seen = new Set();
  let filteredNumbers: Array<number | undefined> = nums;

  while (filteredNumbers.length !== 0) {
    const min = Math.min(...(filteredNumbers as number[]));
    const max = Math.max(...(filteredNumbers as number[]));
    seen.add((min + max) / 2);
    filteredNumbers[filteredNumbers.indexOf(min)] = undefined;
    filteredNumbers[filteredNumbers.indexOf(max)] = undefined;
    filteredNumbers = filteredNumbers.filter((n) => n !== undefined);
  }

  return seen.size;
};