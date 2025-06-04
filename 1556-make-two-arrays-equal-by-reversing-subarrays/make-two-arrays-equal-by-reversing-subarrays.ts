function canBeEqual(target: number[], arr: number[]): boolean {
  return JSON.stringify(target.sort((a, b) => a - b)) === JSON.stringify(arr.sort((a, b) => a - b));
};