function minSubArrayLen(target: number, nums: number[]): number {
  const candidate = [];
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    while (true) {
      const slice = nums.slice(left, right + 1);
      const sum = slice.reduce((acc, current) => acc + current);

      if (sum >= target) {
        if (slice.length === 1) return 1;
        candidate.push(slice.length);
        left++;
        continue;
      } else {
        right++;
        break;
      }
    }
  }

  return candidate.length === 0 ? 0 : Math.min(...candidate);
}
