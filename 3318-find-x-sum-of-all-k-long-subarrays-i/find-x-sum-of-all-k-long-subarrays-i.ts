function findXSum(nums: number[], k: number, x: number): number[] {
  const n = nums.length;
  const freq = new Map<number, number>();
  const result: number[] = [];

  // 辞書順ソート用ヘルパー
  const getXSum = (): number => {
    const arr = Array.from(freq.entries());
    arr.sort((a, b) => {
      if (b[1] === a[1]) return b[0] - a[0]; // 同頻度なら値の大きい方を優先
      return b[1] - a[1]; // 頻度降順
    });
    const topX = arr.slice(0, x);
    let sum = 0;
    for (const [num, count] of topX) {
      sum += num * count;
    }
    return sum;
  };

  // 初期ウィンドウ
  for (let i = 0; i < k; i++) {
    freq.set(nums[i], (freq.get(nums[i]) ?? 0) + 1);
  }
  result.push(getXSum());

  // スライディングウィンドウで更新
  for (let i = k; i < n; i++) {
    const outNum = nums[i - k];
    const inNum = nums[i];

    // 出る要素の頻度更新
    const outFreq = (freq.get(outNum) ?? 0) - 1;
    if (outFreq <= 0) freq.delete(outNum);
    else freq.set(outNum, outFreq);

    // 入る要素の頻度更新
    freq.set(inNum, (freq.get(inNum) ?? 0) + 1);

    result.push(getXSum());
  }

  return result;
}
