function countGoodSubstrings(s: string): number {
  let result: number = 0;
  let leftPoint: number = 0;
  let rightPoint: number = 3;

  while (rightPoint <= s.length) {
    let isGoodStr: boolean = true;
    const seen: Set<string> = new Set();
    const string: string = s.slice(leftPoint, rightPoint);

    for (const char of string) {
      if (seen.has(char)) {
        isGoodStr = false;
        break;
      }
      seen.add(char);
    }

    if (isGoodStr) result++;
    leftPoint++;
    rightPoint++;
  }

  return result;
};