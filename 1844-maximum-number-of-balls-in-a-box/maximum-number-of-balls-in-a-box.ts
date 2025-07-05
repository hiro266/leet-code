function countBalls(lowLimit: number, highLimit: number): number {
  const seen = new Map();
  for (let i = lowLimit; i <= highLimit; i++) {
    const digitSum = i
      .toString()
      .split("")
      .reduce((acc, current) => acc + Number(current), 0);

    seen.set(digitSum, (seen.get(digitSum) ?? 0) + 1);
  }

  let result = 0;

  for (const [_, count] of seen) {
    if (result < count) result = count;
  }

  return result;

};