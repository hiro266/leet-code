function missingNumber(nums: number[]): number {
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) return i;
  }

  throw new Error("unexpected error");
};