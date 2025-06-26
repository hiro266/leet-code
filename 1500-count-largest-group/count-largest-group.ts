function countLargestGroup(n: number): number {
  const digitSumCount = new Map();

  for (let i = 1; i <= n; i++) {
    console.log("i", i);
    const split = i
      .toString()
      .split("")
      .map((str) => Number(str));
    console.log("split", split);

    const sum = split.reduce((acc, current) => acc + current);
    console.log("sum", sum);

    digitSumCount.set(sum, (digitSumCount.get(sum) ?? 0) + 1);
    console.log("-------------");
  }
  console.log("digitSumCount", digitSumCount);

  const max = Math.max(...Array.from(digitSumCount.values()));
  console.log("max", max);

  let result = 0;
  for (const count of digitSumCount.values()) {
    if (count === max) result++;
    console.log("count", count);
    console.log("--------------------");
  }

  console.log("result", result);
  return result;

};