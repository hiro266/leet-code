function maxSum(nums: number[]): number {
  // best[d] は「最大桁が d の数」の中でこれまでに見た最大値
  const best = Array<number>(10).fill(Number.NEGATIVE_INFINITY);
  let ans = -1;

  for (const x of nums) {
    const d = largestDigit(x);
    if (best[d] !== Number.NEGATIVE_INFINITY) {
      ans = Math.max(ans, best[d] + x);
    }
    if (x > best[d]) best[d] = x;
  }

  return ans;
};

/** 与えられた整数の「最大の桁」を返す。負数なら絶対値で判定。 */
function largestDigit(n: number): number {
  n = Math.abs(n);
  if (n === 0) return 0;
  let maxD = 0;
  while (n > 0) {
    const d = n % 10;
    if (d > maxD) {
      maxD = d;
      if (maxD === 9) break; // 早期終了（9を超える桁はない）
    }
    n = Math.floor(n / 10);
  }
  return maxD;
}